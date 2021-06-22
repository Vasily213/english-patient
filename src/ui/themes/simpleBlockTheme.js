import {makeStyles} from "@material-ui/core";

const useContentBlockStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    overflowX: 'hidden',
    maxWidth: '100%',
    padding: theme.spacing(1),
  },
  paper: {
    wordWrap: 'break-word',
    width: '500px',
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(1),
    padding: theme.spacing(1),
  },
  step: {
    display: 'inline-flex',
  },
  size: {
    width: '100% !important'
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
  button: {
    marginTop: theme.spacing(2),
  },
  multilineField: {
    borderColor: theme.palette.grey[400],
    borderRadius: '5px',
    width: '100%',

    '&:focus': {
      borderColor: theme.palette.primary.main,
      borderWidth: '2px',
    }
  },
  сenterAlignment: {
    display: 'flex',
    alignItems: 'center',  
  },
  chips: {
    maxWidth: '30vw',
  },
  error: {
    color: '#f44336', 
    fontSize: '12px', 
    marginLeft: '14px'
  },

  fragmentInput: {
    maxWidth: '60%', 
    borderColor: 'rgba(0, 0, 0, 0.23)', 
    borderRadius: '5px', 
    padding: '4px'
  },

  centerInlineAligment: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  exerciseInputsBlockWidth: {
    width: '500px'
  },
  typeOneAnswer: {
    display: 'inline-flex', 
    alignItems: 'center', 
    width: '110%'
  },
  success: {
    color: 'green'
  },
  exerciseTextArea: {
    margin: '8px', 
    borderRadius: '5px', 
    width: '80%'
  }
}));

export default useContentBlockStyles;