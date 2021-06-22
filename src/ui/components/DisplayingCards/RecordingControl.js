import React, {useEffect, useState} from 'react';
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useReactMediaRecorder} from "react-media-recorder";
import ProgressBar from "./ProgressBar";
const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
    },
    btn: {
        width: 206,
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '24px',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '0.16px',
        color: '#FFFFFF',
        background: '#8C63A9',
        borderRadius: '4px',
        marginTop: '20px',
        padding: '3px 40px',
        '&:hover': {
            backgroundColor: '#8C63A9 !important',
        },
    },
    HtmlStopRecorder: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    HtmlResultRecorder: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    groupsBtn: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }
});

const RecordingControl = ({item, writeTheResultAudio,ind}) => {
    const classes = useStyles();
    const [startRecorder, setStartRecorder] = useState(false);
    const [stopRecorder, setStopRecorder] = useState(false);
    const [time, setTime] = useState(0);
    const [progressBar, setProgressBar] = useState(1);
    const {
        startRecording,
        stopRecording,
        mediaBlobUrl,
        previewStream
    } = useReactMediaRecorder({audio: true,blobPropertyBag: {type: "audio/webm"},mediaRecorderOptions: {type: "audio/webm"}});


    useEffect(() => {
        let time = item.time * 1000;
        var timer;
        if (startRecorder) {
            timer = setInterval(() => {
                setTime(((prevState) => {
                    if (prevState === time - 100) {
                        setStopRecorder(true);
                        setStartRecorder(false);
                        stopRecording();
                        return 0;
                    }
                    return Math.min(prevState + 100, time);
                }))
                setProgressBar(((prevState) => {
                    if (prevState === 99) {
                        setProgressBar(1)
                        return 0;
                    }
                    return Math.min(prevState + progressBar / time * 100 * 100, 100)
                }))
            }, 100)
        }
        return () => {
            setTime(0);
            setProgressBar(1)
            clearInterval(timer);
        };

    }, [startRecorder]);

    const HtmlStartRecorder = (
        <Button onClick={() => {
            setStartRecorder(true);
            startRecording();
        }} className={classes.btn}>НАЧАТЬ ЗАПИСЬ</Button>
    )

    const HtmlStopRecorder = (
        <div className={classes.HtmlStopRecorder}>
            <ProgressBar completed={Math.trunc(progressBar)} time={time}/>
            <Button onClick={() => {
                setStartRecorder(false);
                stopRecording();
            }} className={classes.btn}>СТОП</Button>
        </div>
    )

    const HtmlResultRecorder = (
        <div className={classes.HtmlResultRecorder}>
            <audio src={mediaBlobUrl} controls loop/>
            <div className={classes.groupsBtn}>
                <Button onClick={() => {
                    setStopRecorder(false);
                    setStartRecorder(true);
                    startRecording();
                }} className={classes.btn}>НАЧАТЬ ЗАНОВО</Button>
                <Button onClick={() => {
                    writeTheResultAudio(ind,previewStream)
                }} className={classes.btn}>СОХРАНИТЬ</Button>
            </div>
        </div>
    )

    return (
        <div className={classes.root}>
            {
                 startRecorder ? HtmlStopRecorder : (stopRecorder ? HtmlResultRecorder : HtmlStartRecorder)
            }
        </div>
    );
}


export default RecordingControl;
