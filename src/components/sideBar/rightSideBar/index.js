import React, {useEffect} from 'react';
import {getAllGroups, getStudentsGroup} from "../../../redux/actions/GroupsActions";
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {useDispatch, useSelector} from "react-redux";
import ListItemDrawer from "../../../ui/components/ListItemDrawer";


const RightSideBar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(async () => {
        await dispatch(getAllGroups())
    }, [dispatch])

    const groups = useSelector(state => state.groupReducer.allGroups);
    const currentGroup = useSelector(state => state.groupReducer.currentGroup);
    const students = useSelector(state => state.groupReducer.students);


    return (
        <Drawer className={classes.drawer}
                classes={{paper: classes.drawerPaper}}
                variant="permanent" anchor="right">
            <Toolbar/>
            <div className={classes.drawerContainer}>
                <List>
                    <ListItem className={classes.listItem} button
                              key={'Группы'}>
                        <ListItemText classes={{primary: classes.overridePrimary}} primary={'Группы'}/>
                        <ListItemIcon><AddIcon color="primary" className={classes.addIcon}/></ListItemIcon>
                    </ListItem>

                    <div className={classes.groupBlock}>
                        {groups.data.map((group) => (
                            <ListItemDrawer title={group.name} avatar={group.avatar}
                                            key={group.id}
                                            onClick={() => dispatch(getStudentsGroup(group.id))}
                                            selected={currentGroup === group.id} loading={groups.loading}/>
                        ))
                        }
                    </div>
                    <Divider/>

                    {currentGroup && (
                        <>
                            <ListItem className={classes.listItem} button
                                      key={'Студенты'}>
                                <ListItemText  classes={{primary: classes.overridePrimary}}  primary={'Студенты'}/>
                                <ListItemIcon><AddIcon color="primary" className={classes.addIcon}/></ListItemIcon>
                            </ListItem>

                            <div className={classes.studentsBlock}>
                                {students.data.map((student) => (
                                    <ListItemDrawer title={student.lastName && student.firstName ?
                                        student.lastName + " " + student.firstName[0] + "." :
                                        "Нет имени"}
                                                    avatar={student.avatar}
                                                    key={student.id}
                                                    loading={students.loading}/>
                                ))
                                }
                            </div>
                        </>
                    )}

                </List>
            </div>
        </Drawer>
    );
};


const useStyles = makeStyles((theme) => (
    {
        addIcon: {
            marginLeft: 25
        },
        groupBlock: {
            maxHeight: "20vh",
            overflowX: "hidden"
        },
        studentsBlock: {
            maxHeight: "50vh",
            overflowX: "hidden",
        },

        drawer:
            {
                width: 240,
                flexShrink:
                    0,
            },
        listItem: {
            fontWeight: 900,
            color: theme.palette.primary.main,
            height: 56,
        },
        drawerPaper: {
            height: "100vh",
            width: 240,
            [theme.breakpoints.down('sm')]:
                {
                    display: 'none',
                },
        },
        drawerContainer: {
            overflow: 'hidden',
        },
        overridePrimary: {
            fontWeight: 900
        }

    }
));

export default RightSideBar;
