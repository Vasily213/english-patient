import React, {useEffect, useState} from "react";
import {ReactMic} from 'react-mic';
import {Button} from "@material-ui/core";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 14,
        borderRadius: 2,
        width: "40vw",
        zIndex: 0,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        backgroundColor: '#8C63A9',
    },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
    btn: {
        marginBottom: 15,
        backgroundColor: '#8C63A9',
        borderRadius: '4px',
        minWidth: '206px',
        minHeight: '36px',
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '24px',
        letterSpacing: '0.16px',
    },
    help: {
        color: '#A0A0A0',
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '18px',
        letterSpacing: '0,16px',

    },
    progresstext: {
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight:'normal',
        fontSize: 12,
        lineHeight: 19,
    }
}));

export const Recorder = () => {
    const classes = useStyles();
    const [record, setRecord] = useState(false);
    const [data, setData] = useState(null);
    const [url, setUrl] = useState('');
    const [progress, setProgress] = React.useState(0);


    useEffect(() => {
        if (data) {
            setUrl(data.blobURL);
            setProgress(0);
        }
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
        }, 1000);
        return () => {
            clearInterval(timer);
        };

    }, [data, url])

    const startRecording = () => {
        setRecord(true)
    }

    const stopRecording = () => {
        setRecord(false)
    }

    const onData = (recordedBlob) => {
        // console.log('chunk of real-time data is: ', recordedBlob);
        setData(null);
    }

    const onStop = (recordedBlob) => {
        console.log('recordedBlob is: ', recordedBlob);
        setData(recordedBlob);
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <ReactMic
                height={0}
                width={0}
                record={record}
                onStop={onStop}
                onData={onData}
            />
            {record === false ?
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    {url === '' ?
                        <Button
                            className={classes.btn}
                            onClick={startRecording}
                            type="button"
                            style={{marginTop: 49}}
                        >
                            Начать запись
                        </Button> :
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <audio src={url} controls style={{marginBottom: 50, marginTop: 49}}/>
                            <div>
                                <Button
                                    className={classes.btn}
                                    onClick={startRecording}
                                    type="button"
                                    style={{marginRight: 40}}
                                >
                                    Записать заново
                                </Button>
                                <Button
                                    className={classes.btn}
                                    onClick={startRecording}
                                    type="button"
                                >
                                    Сохранить
                                </Button>
                            </div>
                        </div>}
                </div>
                :
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <div className={classes.help} style={{marginTop: 9}}>
                        Говорите в микрофон
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "center",
                        height: 14,
                        marginTop: 14
                    }}>
                        <div style={{marginRight: 5}} className={classes.progresstext}>
                            {progress} сек.
                        </div>
                        <BorderLinearProgress variant="determinate" value={progress}/>
                    </div>

                    <Button
                        className={classes.btn}
                        onClick={stopRecording}
                        type="button"
                        style={{marginTop: 49}}
                    >
                        Стоп
                    </Button>

                </div>
            }
            <Button className={classes.help}>
                Показать подсказку
            </Button>
            <Button className={classes.help}>
                Показать реплику
            </Button>
        </div>
    );
}
