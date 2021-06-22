import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';

import {makeStyles} from "@material-ui/core";
import Form from './Form';
import CreateVideoContent from './SimpleBlockContent/CreateVideoContent';
import CreateImageContent from './SimpleBlockContent/CreateImageContent';
import CreateAudioContent from './SimpleBlockContent/CreateAudioContent';
import CreateTextContent from './SimpleBlockContent/CreateTextContent';
import handleOptions from '../../helpers/optionsForCreationBlock';
import useForm from '../../hooks/useForm';
import validate from '../../helpers/validation/simpleBlockContentValidation';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from "@material-ui/icons/Close";

export const CreateSimpleBlockForm = ({ modal,  handleClose }) => {
    const classes = useStyles();

    const initialValues = {
      title: '',
      transcript: '',
      video: '',
      audio: '',
      image: '',
      src: '',
      info: '',
      chipTitle: '',
      chipData: []
    };


  const { handleChange, handleSubmit, values, setValues, errors } = useForm(
    handleClose,
    initialValues,
    validate,
    modal
  );
    
    return (
      <div className={classes.root}>
            <Form onSubmit={handleSubmit}>
              { modal==="video" && <CreateVideoContent  initialValues={initialValues} values={values} setValues={setValues} handleChange={handleChange} errors={errors} /> }
              { modal==="audio" && <CreateAudioContent initialValues={initialValues} values={values} setValues={setValues} handleChange={handleChange} errors={errors} /> }
              { modal==="image" && <CreateImageContent initialValues={initialValues} values={values} setValues={setValues} handleChange={handleChange} errors={errors} /> }
              {/* { modal==="text" && <ComponentCreateYourText handleClose={handleClose} /> } */}
              <DialogActions>
                <Button 
                  onClick={handleClose}
                  className={classes.btn}
                  color="primary">
                  <CloseIcon />
                  Отмена
                </Button>
                <Button  type="submit" color="primary" className={classes.btn}>
                  <SaveIcon />
                  {handleOptions(modal).button}
                </Button>
              </DialogActions>
            </Form>
      </div>
    );
};


export const CreateTextBlockForm = ({ handleClose }) => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <CreateTextContent handleClose={handleClose} />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    overflowX: 'hidden',
    maxWidth: '100%',
    padding: theme.spacing(1),
  },
  step: {
    display: 'inline-flex',
    
  },
  circle: {
    width: '30px',
    height: '30px',
    position: 'relative',
    background: theme.palette.primary.main,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50px',
    marginRight: theme.spacing(1),
    
    '&:after': {
      content: ' ',
      position: 'absolute',
      display: 'block',
      top: '1px',
      right: '50%',
      bottom: '1px',
      left: '50%',
      height: '100%',
      width: '1px',
      transform: 'scale(1, 2)',
      transformOrigin: '50% -100%',
      backgroundColor: 'rgba(0, 0, 0, 0.25)',
      zIndex: '-1',
    },
  },
  content: {
    borderLeft: '1px solid #C4C4C4',
    margin: theme.spacing(2),
    padding: theme.spacing(1.5),
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
