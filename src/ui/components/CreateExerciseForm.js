import React from 'react';

import {makeStyles} from "@material-ui/core";
import CreateExerciseContent from './ExerciseContent';

const CreateExerciseForm = ({ handleClose }) => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
          <CreateExerciseContent handleClose={handleClose} />
      </div>
    );
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    overflowX: 'hidden',
    maxWidth: '100%',
    width: '100vw',
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
}));


export default CreateExerciseForm;