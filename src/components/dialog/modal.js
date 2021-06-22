import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {StartDialog} from "./StartDialog";
import {Button} from "@material-ui/core";
import logo from '../../assets/img/cross.svg'
import arrowback from '../../assets/img/arrowback.svg'
import {DialogPerson} from "./DialogPerson";
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles((theme) => ({
    modal: {
        // display: 'flex',
        // alignItems: 'flex-start',
        // padding: '20px',
        // justifyContent: 'center',

    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        boxShadow: theme.shadows[5],
        padding: 25,

    },
    closebtn: {
        display: "flex",
        justifyContent: 'flex-end',
    },
    closebtnperson: {
        display: "flex",
        justifyContent: 'space-between',
    },
    btn: {
        minWidth: 14,
    },
    title: {
        marginTop: 21,
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '24px',
        lineHeight: '24px',
    }
}));

export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [person, setPerson] = useState(null);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updatePerson = (value) => {
        setPerson(value);
        console.log(value);
    }


    return (
        <div>
            <button type="button" onClick={handleOpen}>
                react-transition-group
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth={true}
                maxWidth={"md"}
                scroll="body"
            >
                <div className={classes.paper}>
                    {person == null ?
                        <div className={classes.closebtn}>
                            <Button onClick={handleClose} className={classes.btn}>
                                <img src={logo} alt="1logo"/>
                            </Button>
                        </div>
                        :
                        <div className={classes.closebtnperson}>
                            <Button onClick={() => updatePerson(null)} className={classes.btn}>
                                <img src={arrowback}  alt="arrow"/>
                            </Button>
                            <Button onClick={handleClose} className={classes.btn}>
                                <img src={logo} alt="2logo"/>
                            </Button>
                        </div>
                    }

                    {person == null ? <StartDialog updatePerson={updatePerson}/> :
                        <DialogPerson person={person}/>}

                </div>
            </Dialog>
        </div>
    );
}
