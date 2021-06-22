import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import edit from '../../assets/img/edit.svg'
import trash from '../../assets/img/Trash Can.svg'
import {Button, IconButton} from "@material-ui/core";
import Video from '../../assets/img/video.mp4'
import preview from '../../assets/img/preview.jpg'
import Avatar from '@material-ui/core/Avatar';
import {DATA} from '../../api/data'


const useStyles = makeStyles((theme) => ({
    root: {
        padding:'23px 27px 23px 27px',
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
    videocontainer: {
        marginTop: '39px',
        width: '642px',
        height: '359px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    video: {
        width: '100%',
        height: 359,
    },
    titledialog: {
        marginTop: '24px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '24px',
        justifyContent: 'center',
        display: 'flex',
    },
    containeravatar: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '27px',

    },
    containerdialog: {
        padding: 20,
    },
    replicfirst: {
        marginTop: 22,
        display: 'flex',
        alignItems: 'center',
    },
    replicscnd: {
        marginTop: 22,
        display: 'flex',
        justifyContent: 'flex-end',
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
    btnrole:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
}));

export const StartDialog = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.head}>
                <div className={classes.title}>
                    Family Ties
                </div>
                <div>
                    <Button style={{minWidth: 18}}>
                        <img src={edit} alt='edit'/>
                    </Button>
                    <Button style={{minWidth: 20}}>
                        <img src={trash} alt='trash'/>
                    </Button>
                </div>
            </div>
            <div className={classes.videocontainer}>
                <video className={classes.video} controls="controls" poster={preview}>
                    <source src={Video} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                    Тег video не поддерживается вашим браузером.
                </video>
            </div>
            <div className={classes.titledialog}>
                Выберите роль, чтобы выполнить задание
            </div>
            <div className={classes.containeravatar}>
                <div className={classes.btnrole}>
                    <IconButton onClick={() => props.updatePerson(0)}>
                        <Avatar src={DATA.avatarfrstperson} style={{width: 60, height: 60}}/>
                    </IconButton >
                    <div className={classes.textreplic}>
                        {DATA.namefrstperson}
                    </div>

                </div>
                <div className={classes.btnrole}>
                    <IconButton onClick={() => props.updatePerson(1)}>
                        <Avatar src={DATA.avatarscndperson} style={{width: 60, height: 60}}/>
                    </IconButton>
                    <div className={classes.textreplic}>
                        {DATA.namescndperson}
                    </div>

                </div>
            </div>
            <div className={classes.containerdialog}>
                {DATA.dialogfrstperson.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className={classes.replicfirst}>
                                <Avatar src={DATA.avatarfrstperson} style={{width: 30, height: 30, marginRight: 12}}/>
                                <div className={classes.textreplic}>
                                    {item.replic}
                                </div>
                            </div>
                            <div className={classes.replicscnd}>

                                <div className={classes.textreplic}>
                                    {DATA.dialogscndperson[index].replic}
                                </div>
                                <Avatar src={DATA.avatarscndperson} style={{width: 30, height: 30, marginLeft: 12}}/>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
