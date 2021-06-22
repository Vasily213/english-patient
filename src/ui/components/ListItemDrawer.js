import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import {ListItem, ListItemText, makeStyles} from "@material-ui/core";
import {Skeleton} from '@material-ui/lab';
import Typography from "@material-ui/core/Typography";

const ListItemDrawer = ({title, avatar, selected, onClick, keyId, loading}) => {
    const classes = useStyles();
    return (
        <>
            {
                loading ? (

                    <ListItem key={keyId} className={classes.listItem}>
                        <Skeleton animation={false} variant="circle"><Avatar/></Skeleton>
                        <Skeleton animation="wave" style={{marginLeft: 16}} width="100%">
                            <Typography>.</Typography>
                        </Skeleton>
                    </ListItem>

                ) : (
                    <ListItem selected={selected} onClick={onClick} classes={{root: classes.listItem, selected: classes.overrideSelected}} title={title} button
                              key={keyId}>
                        <Avatar key={title} src={avatar || title}/>
                        <ListItemText className={classes.listItemText} primary={title}/>
                    </ListItem>
                )
            }
        </>

    );
};


export default ListItemDrawer;


const useStyles = makeStyles((theme) => (
    {
        listItemText: {
            marginLeft: 16,
            whiteSpace: 'normal',
            "& span": {
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                '&:hover': {},
            }
        },

        avatar: {
            backgroundColor: '#F7CA15',
            width: 40,
            height: 40
        },
        listItem: {
            height: 56,

        },
        overrideSelected: {
            backgroundColor: '#FCF0BE!important',
        }
    }
));
