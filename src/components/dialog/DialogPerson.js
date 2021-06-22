import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Avatar, Button} from "@material-ui/core";
import {DATA} from "../../api/data";
import {ContainerAudioPerson} from "./ContainerAudioPerson";


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '23px 27px 23px 27px',
    },
    head: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 21,
    },
    title: {
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '24px',
        lineHeight: '24px',
        textAlign: 'center'
    },
    currentrole: {
        display: 'flex',
        alignItems: 'center',
    },
    containerrole: {
        display: "flex",
        flexDirection: 'column',
    },
    titledialog: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '18px',
        justifyContent: 'center',
        display: 'flex',
    },
    textreplic: {
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '19px',
        alignItems: 'flex-end',
        display: 'flex',
    },
    stepper: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnstepactive: {
        backgroundColor: '#8C63A9',
        borderRadius: '4px',
        minWidth: '36px',
        minHeight: '36px',
        marginRight: '14px',
        marginLeft: '14px',
        color: 'white',
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '18px',
    },
    btnstep: {
        border: '1px solid rgba(0, 0, 0, 0.36)',
        boxSizing: 'border-box',
        backgroundColor: 'white',
        borderRadius: '4px',
        minWidth: '36px',
        minHeight: '36px',
        marginRight: '14px',
        marginLeft: '14px',
        color: 'black',
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '18px',
    },
    avatarperson: {
        marginTop: 38,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
}));

export const DialogPerson = (props) => {
    const classes = useStyles();
    const [active, setActive] = useState(0);
    return (
        <div className={classes.root}>
            <div className={classes.head}>
                <div className={classes.title}>
                    Family Ties
                </div>
                <div className={classes.currentrole}>
                    <div className={classes.containerrole}>
                        <div className={classes.textreplic}>
                            Выбранная роль
                        </div>
                        <div className={classes.textreplic}>
                            {props.person === 0 ? DATA.namefrstperson : DATA.namescndperson}
                        </div>
                    </div>
                    <Avatar src={props.person === 0 ? DATA.avatarfrstperson : DATA.avatarscndperson}
                            style={{width: 30, height: 30, marginLeft: 11}}/>
                </div>
            </div>
            <div className={classes.stepper}>
                {props.person === 0 ? DATA.dialogfrstperson.map((item, index) => {
                        if (active === index)
                            return (
                                <Button key={index} className={classes.btnstepactive}>
                                    {index + 1}
                                </Button>

                            )
                        else
                            return (
                                <Button key={index} onClick={() => setActive(index)} className={classes.btnstep}>
                                    {index + 1}
                                </Button>

                            )
                    }) :
                    DATA.dialogscndperson.map((item, index) => {
                        if (active === index)
                            return (
                                <Button key={index} className={classes.btnstepactive}>
                                    {index + 1}
                                </Button>
                            )
                        else
                            return (
                                <Button key={index} onClick={() => setActive(index)} className={classes.btnstep}>
                                    {index + 1}
                                </Button>

                            )
                    })
                }
            </div>

            <ContainerAudioPerson active={active} person={props.person}/>

        </div>
    )
}
