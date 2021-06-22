import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import useForm from '../../../hooks/useForm';
import useForm1 from '../../../hooks/useForm1';
import validate from '../../../helpers/validation/simpleBlockContentValidation';
import Form from '../Form';
import CreateVideoContent from '../SimpleBlockContent/CreateVideoContent';
import CardTaskContent from './CardTaskContent';
import CardBlockContent from './CardBlockContent';
import Tabs from './Tabs';
import FindHasBlock from './FindHasBlock';
import TabPanel from '../../../components/formAddBlock/TabPanel';
import ComponentDisplayingCards from '../DisplayingCards/ComponentDisplayingCards';
import LeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import SaveIcon from '@material-ui/icons/Save';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';
import CloseIcon from '@material-ui/icons/Close';
import optionForDisplayingCards from '../../../helpers/optionForDisplayingCards';

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
  return ['Добавьте видео и аватар', 'Добавьте общую информацию', 'Создайте карточки', 'Превью'];
}


const HandleForm = (handleClose) => {

  const [value, setValue] = React.useState(0);
  const [visibleForm, setVisibleForm] = React.useState(true);

  const initialState = {
    cardQuestion: '',
    cardTime: '',
    image: '',
    title: '',
    src: '',
    info: '',
    chipTitle: '',
    chipData: [],
  }

  const initialValues = {
    title: '',
    transcript: '',
    video: '',
    src: '',
    info: '',
    chipTitle: '',
    chipData: [],
    cardTitle: '',
    cardDesc: '',
    cardTask: '',
    cardComment: '',
    cardHint: '',
    cardChipTitle: '',
    cardChipData: [],
    cardContent: []
  };

  const { handleChange, handleSubmit, values, setValues, errors } = useForm(
    handleClose,
    initialValues,
    validate,
    'card'
  );

  const handleVisible = () => {
    setValues({...values, 'cardContent': [...values.cardContent, values1]})
    setValues1(initialState);
    setVisibleForm(false);
    console.log(values1);
  }

  const { handleChange1, handleSubmit1, values1, setValues1/* , errors1 */ } = useForm1(
    handleVisible,
    initialState,
    validate,
    'cardItem'
  );

  console.log('handleVisible', handleVisible);

  console.log(values);
  console.log(errors);

  return {
    handleChange, 
    handleSubmit, 
    values, 
    setValues, 
    errors,
    initialValues,
    handleVisible,
    value,
    setValue,
    visibleForm,
    setVisibleForm,
    handleChange1, 
    handleSubmit1, 
    values1,
    setValues1
    /* errors1 */
  }
}

function getStepContent(stepIndex, handleClose) {
  const {
    handleChange, 
    handleSubmit, 
    values, 
    setValues, 
    errors,
    initialValues,
    initialState,
    value,
    setValue,
    handleChange1, 
    handleSubmit1, 
    values1,
    setValues1, 
    visibleForm,
    setVisibleForm
  } = HandleForm(handleClose);
  switch (stepIndex) {
    case 0:
      return (
        <Tabs value={value} setValue={setValue} label1="Загрузить видео" label2="Найти видео">
          <TabPanel value={value} index={0}>
            <CreateVideoContent initialValues={initialValues} values={values} setValues={setValues} handleChange={handleChange} errors={errors} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <FindHasBlock />
          </TabPanel>
        </Tabs>
      );
    case 1:
      return (
        <CardTaskContent initialValues={initialValues} values={values} setValues={setValues} handleChange={handleChange} errors={errors} />
      );
    case 2:
      return (
        <>
          <Form>
            <CardBlockContent 
              initialValues={initialState} 
              values={values1}
              arrayValues={values}
              setValues={setValues1} 
              handleChange={handleChange1} 
              /* handleSubmit={handleSubmit1} */
              // errors={errors1} 
              value={value} 
              setValue={setValue}
              visibleForm={visibleForm}
              setVisibleForm={setVisibleForm}
            />
            {visibleForm && (
              <DialogActions>
                <Button /* type="submit" */ color="primary" onClick={handleSubmit1}><SaveIcon /> Сохранить</Button>
              </DialogActions>
            )}
          </Form>
         {/*  ) } */}
        </>
      );
    default:
      return (
        <ComponentDisplayingCards option={optionForDisplayingCards}/>
      );
  }
}

export default function CardContent({handleClose}) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  // const [visibleCards, setVisibleCards] = React.useState(false);
  const {
    handleSubmit, 
  } = HandleForm(handleClose);

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
            <Typography className={classes.instructions}>{getStepContent(activeStep, handleClose)}</Typography>
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
                  <CloseIcon />
                  Отмена
                </Button>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  color="primary"
                  className={classes.btn}
                >
                  <LeftIcon />
                  Назад
                </Button>
                {activeStep === steps.length - 1 && (
                    <Button  /* type="submit" */ onClick={handleClose} className={classes.btn} color="primary">
                      <SaveIcon />
                      Сохранить
                    </Button>
                  )}
                {activeStep !== steps.length - 1 && (
                  <Button color="primary" className={classes.btn} onClick={handleNext}>
                    <RightIcon />
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
