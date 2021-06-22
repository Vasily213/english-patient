import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Avatar} from "@material-ui/core";
import {DATA} from "../../api/data";
import {Recorder} from "./recorder";

const useStyles = makeStyles((theme) => ({
    titledialog: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '18px',
        justifyContent: 'center',
        display: 'flex',
    },
    avatarperson: {
        marginTop: 38,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

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
}));

export const ContainerAudioPerson = (props) => {
    const classes = useStyles();
    const [audio,setAudio] = useState(props.person !== 0 ? DATA.dialogfrstperson[props.active].audio : DATA.dialogscndperson[props.active].audio);

    useEffect(() => {
        if(props.person !== 0)
            setAudio(DATA.dialogfrstperson[props.active].audio);
        else
            setAudio(DATA.dialogscndperson[props.active].audio);
    },[props.active])
    return(
        <div className={classes.avatarperson}>
            <Avatar src={props.person !== 0 ? DATA.avatarfrstperson : DATA.avatarscndperson}
                    style={{width: 60, height: 60}}/>
            <div style={{marginTop:24}} className={classes.titledialog}>
                {props.person !== 0 ? DATA.namefrstperson : DATA.namescndperson}
            </div>
            <audio src={audio} type="audio/mpeg" controls style={{marginTop:27,marginBottom:16}}/>
            <div className={classes.textreplic}>
                {props.person !== 0 ? DATA.dialogfrstperson[props.active].replic : DATA.dialogscndperson[props.active].replic}
            </div>
            <div style={{marginTop:41}} className={classes.titledialog}>
                {props.person === 0 ? DATA.namefrstperson : DATA.namescndperson}:
            </div>
            {DATA.dialogscndperson.map((item,index) => {
                if(index === props.active)
                return(
                    <Recorder key={index}/>
                )
                else
                    return
            })}

        </div>
    )
}
