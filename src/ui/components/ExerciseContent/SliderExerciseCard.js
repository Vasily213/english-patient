import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import Form from '../Form';
import ExerciseCardContent from './ExerciseCardContent';
import LeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import SaveIcon from '@material-ui/icons/Save';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';
import CloseIcon from '@material-ui/icons/Close';
import ExerciseCardMediaContent from "./ExerciseCardMediaContent";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    buttons: {
        flex: '0 0 auto',
        display: 'flex',
        padding: '8px',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        maxHeight: '200px',
        width: '300px'
    },
    btn: {
        width: '110',
        marginRight: '10px',
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '24px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '0.16px',
        color: '#FFFFFF',
        background: '#8C63A9',
        borderRadius: '4px',
        marginTop: 10,
        marginBottom: 10,
        '&:hover': {
            backgroundColor: '#8C63A9 !important',
        },
    }
}));

function getSteps() {
    return ['Добавьте медиа файл', 'Добавьте общую информацию'];
}


export default function SliderExerciseCard({handleClose, initialValues, values, setValues, handleChange, errors, slide}) {
    function getStepContent(stepIndex, handleClose) {

        // eslint-disable-next-line default-case
        switch (stepIndex) {
            case 0:
                return (
                    <div>
                        <ExerciseCardMediaContent initialValues={initialValues} values={values} setValues={setValues}
                                                  handleChange={handleChange} errors={errors}/>
                    </div>
                );
            case 1:
                return (
                    <ExerciseCardContent initialValues={initialValues} values={values} setValues={setValues}
                                         handleChange={handleChange} errors={errors}/>
                );
        }
    }
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    // const [visibleCards, setVisibleCards] = React.useState(false);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Form>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                    </div>
                ) : (
                    <div>
                        <Typography
                            className={classes.instructions}>{getStepContent(activeStep, handleClose)}</Typography>
                        <div>
                            <DialogActions>
                                <Button
                                    onClick={() => {
                                        handleClose();
                                        setActiveStep(0);
                                    }}
                                    className={classes.btn}
                                    color="primary"
                                >
                                    <CloseIcon/>
                                    Отмена
                                </Button>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    color="primary"
                                    className={classes.btn}
                                >
                                    <LeftIcon/>
                                    Назад
                                </Button>
                                {activeStep === steps.length - 1 && (
                                    <Button  
                                        /* type="submit" */ 
                                        onClick={() => {
                                            handleClose(); 
                                            console.log(slide)
                                        }} 
                                        className={classes.btn}
                                        color="primary">
                                        <SaveIcon/>
                                        Сохранить
                                    </Button>
                                )}
                                {activeStep !== steps.length - 1 && (
                                    <Button color="primary" className={classes.btn} onClick={handleNext}>
                                        <RightIcon/>
                                        Далее
                                    </Button>
                                )}
                            </DialogActions>
                        </div>
                    </div>
                )}
            </Form>
        </div>
    );
}
