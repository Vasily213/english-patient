import React, {useState} from 'react';
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import StartCard from "./StartCard";
import PerformanceCard from "./PerformanceCard";

const useStyles = makeStyles({
    root: {
        padding: '25px',
    },
    dialog: {
        // maxWidth: '1000px'
    },
    content: {
        marginTop: '-25px',
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '24px',
        color: '#000000',
        maxWidth: '935px'
    },
    header: {
        fontSize: '24px',
    },
    text: {
        fontSize: '18px'
    },
    center: {
        display: 'flex',
        justifyContent: 'center'
    },
    video: {
        marginTop: '20px'
    },
    btn: {
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '24px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '0.16px',
        color: '#FFFFFF',
        background: '#8C63A9',
        borderRadius: '4px',
        marginTop: '50px',
        '&:hover': {
            backgroundColor: '#8C63A9 !important',
        },
    }
});

const ComponentDisplayingCards = ({option}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [start, setStart] = useState(true);
    const close = () => {
        setOpen(false);
    }
    const onStart = ()=>{
        setStart(false);
    }

    const result = (obj)=>{
        console.log(obj)
    }

    return (

        <Paper className={classes.dialog} /* maxWidth={false} open={open} onClose={close} */ scroll={'body'}>
            {
                start ?
                    <StartCard option={option} close={close} onStart={onStart}/> :
                    <PerformanceCard result={result} option={option} close={close} onStart={onStart}/>
            }
        </Paper>
    );
}

export default ComponentDisplayingCards;
