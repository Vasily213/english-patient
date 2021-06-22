import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import SliderExerciseCard from './SliderExerciseCard'
import useForm from "../../../hooks/useForm";
import validate from "../../../helpers/validation/simpleBlockContentValidation";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'center',
        alignItems: 'center',
    },
    p_1: {
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '24px',
        lineHeight: '24px',
        color: '#000000',
        textAlign: 'center',
        marginBottom: '45px'
    },
    btn: {
        border: '1px solid rgba(0, 0, 0, 0.36)',
        boxSizing: 'border-box',
        borderRadius: '4px',
        width: 36,
        height: 36,
        color: 'rgba(0, 0, 0, 0.87)',
        '&:hover': {
            border: '1px solid rgba(0, 0, 0, 0.36)',
            background: '#8C63A9',
            color: 'rgba(255, 255, 255, 0.87)'
        },
        marginRight: 10,
        marginTop: 10
    },
    btnActive: {
        border: '1px solid rgba(0, 0, 0, 0.36)',
        boxSizing: 'border-box',
        borderRadius: '4px',
        width: 36,
        height: 36,
        '&:hover': {
            border: '1px solid rgba(0, 0, 0, 0.36)',
            background: '#8C63A9',
            color: 'rgba(255, 255, 255, 0.87)'
        },
        marginRight: 10,
        marginTop: 10,
        background: '#8C63A9',
        color: 'rgba(255, 255, 255, 0.87)'
    },
    add: {
        border: '1px solid rgba(0, 0, 0, 0.36)',
        boxSizing: 'border-box',
        borderRadius: '20px',
        width: 36,
        height: 36,
        color: 'rgba(0, 0, 0, 0.87)',
        '&:hover': {
            border: '1px solid rgba(0, 0, 0, 0.36)',
            background: '#8C63A9',
            color: 'rgba(255, 255, 255, 0.87)'
        },
        marginTop: 10
    },
    groupBtn: {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginBottom: '15px',
        maxWidth: 300,
        flexWrap: 'wrap',
    },
    btns: {
        display: 'flex',
        flexWrap: 'wrap',
    }

}))

const HandleForm = (handleClose, initialValues) => {
    const {handleChange, handleSubmit, values, setValues, errors} = useForm(
        handleClose,
        initialValues,
        validate,
        'exercise',
    );

    return {
        initialValues,
        values,
        setValues,
        handleChange,
        errors,
    }
}

const CardContent = ({handleClose}) => {
    const classes = useStyles();

    const [slide, setSlide] = useState([
        {
            id: 1, obj: {
                title: '',
                exerciseTitle: '',
                transcript: '',
                typeAnswer: '',
                matching: [],
                answers: [],
                fragments: [],
                comment: '',
                hint: '',
                chipTitle: '',
                chipData: [],
                exerciseChipData: []
            }
        },
        {
            id: 2, obj: {
                title: '',
                exerciseTitle: '',
                transcript: '',
                typeAnswer: '',
                matching: [],
                answers: [],
                fragments: [],
                comment: '',
                hint: '',
                chipTitle: '',
                chipData: [],
                exerciseChipData: []
            }
        },
    ]);
    const [stateSlide, setStateSlide] = useState(1);
    const [item,setItem] = useState(slide[0])

    const addSlide = () => {
        setSlide([...slide, {
            id: slide.length + 1,
            obj: {
                title: '',
                exerciseTitle: '',
                exerciseTranscript: '',
                typeAnswer: '',
                matching: [],
                answers: [],
                fragments: [],
                comment: '',
                hint: '',
                chipTitle: '',
                chipData: [],
                exerciseChipData: []
            }
        }])
    }

    const classBtn = (id) => {
        if (id === stateSlide) {
            return true
        }
    }

    const {
        initialValues,
        values,
        setValues,
        handleChange,
        handleSubmit,
        errors,
    } = HandleForm(handleClose, item.obj);

    useEffect(()=>{
        setSlide(prevState => {
            prevState[item.id-1].obj = values;
            return prevState
        })
    },[values])

    useEffect(()=>{
        let qwe = slide.find(item=>item.id===stateSlide)
        setItem(qwe)
        setValues(item.obj)
    },[stateSlide])

    useEffect(()=>{
        setValues(item.obj)
    },[item])

    const nextSlide = (id) => {
        setStateSlide(id)
    }

    return (
        <div className={classes.root}>
            <p className={classes.p_1}>Создать новое упражнение</p>
            <div className={classes.groupBtn}>
                <div className={classes.btns}>
                    {slide.map((btn) => (
                        <div key={btn.id}>
                            <Button className={classBtn(btn.id) ? classes.btn && classes.btnActive : classes.btn}
                                    onClick={() => nextSlide(btn.id)}>
                                {btn.id}
                            </Button>
                        </div>
                    ))}
                </div>
                <Button className={classes.add} variant="outlined" onClick={() => addSlide()}>
                    <AddIcon/>
                </Button>
            </div>
            <SliderExerciseCard item={item} initialValues={initialValues} values={values} setValues={setValues}
                                handleChange={handleChange} errors={errors} slide={slide} handleClose={handleClose} />
        </div>
    )
}

export default CardContent;
