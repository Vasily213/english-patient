import React from 'react';
import {
    makeStyles,
} from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({

    left: {
        left: 60,
        [theme.breakpoints.down('md')]: {
            visibility: 'hidden',
        },
    },
    common:{
        height: '100%',
        width: '50%',
        position: 'fixed',
        top: 0,
        overflow: 'hidden',
        paddingTop: 20,
    },
    right: {
        right: 60,
        [theme.breakpoints.down('md')]: {
            width: '100%',
            right: 0,
        },
    },
    image:{
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
    }

}));


const AuthPage = ({img, children}) => {
    const classes = useStyles();

    return (
        <div>
            <div className={`${classes.left} ${classes.common}`}>
                <div className={classes.image}>
                    <img src={img} alt="signIn"/>
                </div>
            </div>
            <div className={`${classes.right} ${classes.common}`}>
                {children}
            </div>
        </div>

    );
};

export default AuthPage;
