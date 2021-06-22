import React, {useState} from 'react';
import {
    AppBar,
    Badge,
    IconButton,
    InputBase,
    makeStyles,
    Toolbar,
    Typography,
    Button, Avatar, CssBaseline, Menu, MenuItem, Fade
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VideoCamIcon from '@material-ui/icons/Videocam';
import MoreIcon from '@material-ui/icons/MoreVert';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import {useDispatch, useSelector} from "react-redux";
import noImage from '../../assets/img/account_circle.svg'

import {logout} from "../../redux/actions/UserActions";




const MainAppBar = ({children}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const openMobile = Boolean(mobileAnchorEl);

    const dispatch = useDispatch();

    const classes = useStyles();
    const user = useSelector(state => state.userReducer.user)
    return (
        <div className={classes.grow}>
            <CssBaseline/>
            <AppBar position="fixed" color="transparent" elevation={0} className={classes.appBar} >
                <Toolbar>
                    <Typography className={classes.title} variant="h6">
                        АНГЛИЙСКИЙ ПАЦИЕНТ
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.startLesson}
                        startIcon={<VideoCamIcon/>}
                    >
                        НАЧАТЬ УРОК
                    </Button>
                    <div className={classes.searchInputBlock}>
                        <InputBase
                            className={classes.searchInput}
                            placeholder="Поиск..."
                        />
                        <IconButton type="submit" className={classes.iconButton}>
                            <SearchIcon/>
                        </IconButton>
                    </div>
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <div className={classes.notification}>
                            <IconButton
                                aria-label="info"
                                color="inherit"
                            >
                                <EmojiObjectsIcon/>
                            </IconButton>
                            <b>Как это работает?</b>
                        </div>

                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={2} color="error">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", textAlign: "right"}}>
                        <b className={classes.name}>
                            {user.lastName && user.firstName ?
                                user.lastName + " " + user.firstName[0] + "."
                                :
                                "Нет имени"} <br/>
                            {user.userRole === "student"
                            || user.userRole === undefined ?
                                'Студент'
                                :
                                user.userRole === "Преподаватель" ? 'Преподаватель' : 'Методист-преподаватель'}
                        </b>
                        <IconButton
                            edge="end"
                            onClick={(event) => setAnchorEl(event.currentTarget)}
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <Avatar alt="User avatar" src={user.avatar || noImage}/>
                        </IconButton>
                    </div>

                    <Menu
                        elevation={0}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={() => setAnchorEl(null)}
                        TransitionComponent={Fade}
                    >
                        <MenuItem key="profile1">Мой профиль</MenuItem>
                        <MenuItem key="profile2">Расписание</MenuItem>
                        <MenuItem key="profile3">Тех. поддержка</MenuItem>
                        <MenuItem key="profile4" onClick={() => dispatch(logout())}>Выход</MenuItem>
                    </Menu>

                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={(event) => setMobileAnchorEl(event.currentTarget)}
                        >
                            <MoreIcon/>
                        </IconButton>
                    </div>

                    <Menu
                        elevation={0}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        anchorEl={mobileAnchorEl}
                        keepMounted
                        open={openMobile}
                        onClose={() => setMobileAnchorEl(null)}
                        TransitionComponent={Fade}
                    >
                        <MenuItem>
                            Уведомления
                            <Badge style={{marginLeft: 15}} badgeContent={2} color="error"/>
                        </MenuItem>
                        <MenuItem>Помощь</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            {children}
        </div>
    );
}
export default MainAppBar;

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: "white",
        boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.26), 0px 0px 20px  0px rgba(0, 0, 0, 0.3)',
    },
    searchInputBlock: {
        minWidth: 80,
        maxWidth: 380,
        marginLeft: 35,
        display: "flex",
        backgroundColor: "white",
        borderRadius: "4px",
        boxSizing: "border-box",
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRight: "none",
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    searchInput: {
        fontSize: 16,
        width: 380,
        minWidth: 25,
        margin: "0 15px 0 20px"
    },

    iconButton: {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "0px 4px 4px 0px",
        color: "black",
        padding: "6px 8px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        }
    },
    grow: {
        flexGrow: 1,
    },

    title: {
        whiteSpace: 'nowrap',
        align: 'center',
        fontWeight: 500,
        [theme.breakpoints.down('md')]: {
            fontSize: 15,
        },
    },

    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },

    startLesson: {
        whiteSpace: 'nowrap',
        alignItems: 'center',
        marginLeft: 120,
        minWidth: 150,
        height: 36,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    notification: {
        whiteSpace: 'nowrap',
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 80,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    name: {
        margin: '13px 5px 0 27px',
        whiteSpace: 'nowrap',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },


}));
