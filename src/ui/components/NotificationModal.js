import React from 'react';
import {makeStyles} from "@material-ui/core";
import tick from '../../assets/img/tick-square.svg'


const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        flexDirection: "column",
        textAlign: 'center',
        borderRadius: 15,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    image: {
        marginTop: 31
    },
}));


const NotificationModal = ({children}) => {
    const classes = useStyles();
    return (
        <div className={classes.paper}>
            <div className={classes.image}>
                <img src={tick} alt="tick-square"/>
            </div>
            {children}
        </div>
    );
};

export default NotificationModal;
