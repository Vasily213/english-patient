import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {FormControlLabel, Radio, RadioGroup} from "@material-ui/core";

import CreateImageContent from "../SimpleBlockContent/CreateImageContent";
import CreateVideoContent from "../SimpleBlockContent/CreateVideoContent";
import CreateAudioContent from "../SimpleBlockContent/CreateAudioContent";
import FindHasBlock from "../CardContent/FindHasBlock";

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 500,
    },
    act: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignContent: 'space-around',
        alignItems: 'center'
    },
    p_1: {
        fontSize: '14px',
        lineHeight: '19px',
        color: 'rgba(0, 0, 0, 0.87)'
    },
    radioBtn: {
        fontSize: '14px',
        lineHeight: '19px',
        color: 'rgba(0, 0, 0, 0.87)'
    },
    content: {

    }

}))

const ExerciseCardMediaContent = ({initialValues, values, setValues, handleChange, errors}) => {
    const classes = useStyles();

    const [act, setAct] = useState('image')

    const content = ()=> {
        switch (act){
            case 'image':
                return <CreateImageContent initialValues={initialValues} values={values} setValues={setValues}
                                           handleChange={handleChange} errors={errors}/>;
            case 'video':
                return <CreateVideoContent initialValues={initialValues} values={values} setValues={setValues}
                                           handleChange={handleChange} errors={errors}/>;
            case 'audio':
                return <CreateAudioContent initialValues={initialValues} values={values} setValues={setValues}
                                           handleChange={handleChange} errors={errors}/>;
            case 'media':
                return <FindHasBlock/>
         }
    }

    return (
        <div className={classes.root}>
            <div className={classes.act}>
                <p className={classes.p_1}>Выберите действие </p>
                <div className={classes.radioBtn}>
                    <RadioGroup className={classes.radioBtn} row defaultValue="image">
                        <FormControlLabel
                            value="image"
                            onChange={(e)=>setAct(e.target.value)}
                            control={<Radio color="primary"/>}
                            label="Загрузить изображение"
                        />
                        <FormControlLabel
                            value="video"
                            onChange={(e)=>setAct(e.target.value)}
                            control={<Radio color="primary"/>}
                            label="Загрузить видео"
                        />
                        <FormControlLabel
                            value="audio"
                            onChange={(e)=>setAct(e.target.value)}
                            control={<Radio color="primary"/>}
                            label="Загрузить аудио"
                        />
                        <FormControlLabel
                            value="media"
                            onChange={(e)=>setAct(e.target.value)}
                            control={<Radio color="primary"/>}
                            label="Найти медиафайл"/>
                    </RadioGroup>
                </div>
            </div>
            <div className={classes.content}>
                {content()}
            </div>
        </div>
    )
}

export default ExerciseCardMediaContent