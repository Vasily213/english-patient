import React, {useRef, useState} from 'react';
import {Button, Card, CardContent, CardHeader} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import image from '../../../assets/img/image-1.png';
import RecordingControl from "./RecordingControl";
import SwipeableViews from 'react-swipeable-views';


const useStyles = makeStyles({
    root: {
        padding: '25px',
        maxWidth: '935px'
    },
    dialog: {
        // maxWidth: '1000px'
    },
    content: {

        // marginTop: '-25px',
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '24px',
        color: '#000000',
        // width: '935px'
    },
    header: {
        fontSize: '24px',
    },
    text: {
        fontSize: '18px',
        textAlign: 'center',
        marginTop: '25px'
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
        marginTop: '20px',
        padding: '3px 40px',
        '&:hover': {
            backgroundColor: '#8C63A9 !important',
        },
    },
    btnPrev: {
        fontSize: '14px',
        lineHeight: '18px',
        fontWeight: 'normal',
        color: 'rgba(0, 0, 0, 0.87)',
    },
    total: {
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '18px',
        display: 'flex',
        alignItems: 'center',
        letterSpacing: '0.16px',
        color: '#000000',
        margin: '0 auto'
    },
    navigate: {
        display: 'flex'
    },
    img: {
        // margin: '0 auto'
        display: 'flex',
        justifyContent: 'center'
    },
    recording: {
        display: 'flex',
        justifyContent: 'center'
    }
});

const PerformanceCard = ({option, close, result}) => {
    const classes = useStyles();
    const slider = useRef();
    const [word, setWord] = useState(option.words);
    const [slide, setSlide] = useState(0)

    const settings = {
        // centerMode: true,
        // padSlides: true,
        dontAnimate: false,
        swipe: false,
        draggable: false,
        autoplay: false,
        accessibility: false,
        AdaptiveHeight: false,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const onPrevSlide = (i) => {
        if (i !== 0){
            setSlide(slide-1)
        }
    }
    const writeTheResultAudio = (ind, previewStream) => {

        setWord((prevState) => {
            const blob = new Blob([previewStream.id], {'type': 'audio/webm; codecs=opus'});
            prevState[ind].audio = new File([blob],'audio.webm',{type: 'audio/webm'})
            return prevState;
        })
        if (ind + 1 === word.length) {
            result(word)
        } else {
            setSlide(slide + 1)
        }
    }

    const content = (item, i) => (
        <CardContent className={classes.content}>
            <span className={classes.header}>{option.name} [{item.word}]?</span>
            <div className={classes.navigate}>
                <Button onClick={()=>onPrevSlide(i)}><ArrowBackIosIcon/> <span
                    className={classes.btnPrev}>назад</span></Button>
                <span className={classes.total}>{i + 1}/{option.words.length}</span>
            </div>
            <div className={classes.img}>
                <img alt="" src={image}/>
            </div>
            <div className={classes.text}>
                <span>{item.word}</span>
            </div>
            <div className={classes.recording}>
                <RecordingControl item={item} ind={i} writeTheResultAudio={writeTheResultAudio}/>
            </div>
        </CardContent>
    )

    return (
        <Card className={classes.root}>
           {/*  <CardHeader
                action={
                    <IconButton onClick={close} aria-label="settings">
                        <CloseIcon/>
                    </IconButton>
                }
            /> */}
            <SwipeableViews index={slide}>
                {
                    option.words.map((item, i) => (
                        <div key={i}>
                            {content(item, i)}
                        </div>
                    ))
                }
            </SwipeableViews>
            {/*<Slider ref={slider} {...settings}>*/}

            {/*</Slider>*/}


        </Card>
    );
}


export default PerformanceCard;
