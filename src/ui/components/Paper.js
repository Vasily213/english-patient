import React from 'react';
import {makeStyles} from "@material-ui/core";


const Paper = ({children, className}) => {

    const classes = useStyles();
    return (
        <div className={`${classes.wrapper} ${className}` } >
            {children}
        </div>
    );
};

export default Paper;



export const useStyles = makeStyles((theme) => ({
    wrapper: {
        position: "absolute",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#FFFFFF',
        borderRadius: '4px',
    },

}));
