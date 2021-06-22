import React  from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TagField from '../TagField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import useContentBlockStyles from '../../themes/simpleBlockTheme';
import MaskedInput from 'react-text-mask';
import ExercisePreview from './ExercisePreview';
import ExerciseAnswerBlock from './ExerciseAnswerBlock';

const ExerciseCardContent = ({values, setValues, initialValues, handleChange, errors}) => {
  const classes = useContentBlockStyles();
  const initialFragment = {
    // решение проблемы с drag and drop
    id: Date.now().toString(),
    startFragment: '',
    finishFragment: ''
  };
  const [fragment, setFragment] = React.useState(initialFragment);

  const handleAddTag = () => {
    if (values.chipTitle !== '' && 
    !values.chipData.includes(values.chipTitle)) {
      setValues({ ...values, 
        'exerciseChipData': 
          [
            ...values.exerciseChipData, 
            values.chipTitle
          ], 
          'chipTitle': '' 
      })
    } 
  }

  const handleClickSelectTypeAnswer = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
      'answers': [],
      'matching': []
    });
  }
  
  return (
    <div style={{ display: 'inline-flex' }}>
      <div className={classes.exerciseInputsBlockWidth} /* style={{ width: '400px' }} */>

        <div className={classes.step}>
          <div className={classes.circle}>1</div>
          <Typography>Добавить название упражнения</Typography>
        </div>
        <div className={classes.content}>
          <TextField
            className={classes.size}
            placeholder="Введите название упражнения"
            variant="outlined"
            name="exerciseTitle"
            value={values.exerciseTitle}
            onChange={handleChange}
            // error={errors.cardTitle}
            // helperText={errors.cardTitle}
          />
        </div>

        <div className={classes.step}>
          <div className={classes.circle}>2</div>
          <Typography>Добавить текст</Typography>
        </div>
        <div className={classes.content}>
          <TextareaAutosize
            rows={5}
            rowsMax={10}
            name="exerciseTranscript"
            className={classes.multilineField}
            value={values.exerciseTranscript}
            onChange={handleChange}
            // error={errors.cardDesc}
            // helperText={errors.cardDesc}
          />
        </div>

        <div className={classes.step}>
          <div className={classes.circle}>3</div>
          <Typography>Выберите тип ответа</Typography>
        </div>
        <div className={classes.content}>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            name="typeAnswer"
            value={values.typeAnswer}
            onChange={handleClickSelectTypeAnswer}
            input={<SelectAnswerInput />}
          >
            <MenuItem value="">
              <em>Выберите тип ответа...</em>
            </MenuItem>
            <MenuItem value="Запись с микрофона">Запись с микрофона</MenuItem>
            <MenuItem value="Запись с камеры и микрофона">Запись с камеры и микрофона</MenuItem>
            <MenuItem value="Одиночный выбор">Одиночный выбор</MenuItem>
            <MenuItem value="Множественный выбор">Множественный выбор</MenuItem>
            <MenuItem value="Ввод текста">Ввод текста</MenuItem>
            <MenuItem value="Упорядочивание">Упорядочивание</MenuItem>
            <MenuItem value="Сопоставление">Сопоставление</MenuItem>
          </Select>
        </div>

        <ExerciseAnswerBlock values={values} setValues={setValues} />

        <div className={classes.step}>
          <div className={classes.circle}>5</div>
          <Typography>Добавить комментарий</Typography>
        </div>
        <div className={classes.content}>
          <TextField
            className={classes.size}
            placeholder="Введите комментарий"
            variant="outlined"
            name="comment"
            value={values.comment}
            onChange={handleChange}
            // error={errors.cardComment}
            // helperText={errors.cardComment}
          />
        </div>

        <div className={classes.step}>
          <div className={classes.circle}>6</div>
          <Typography>Добавить подсказку</Typography>
        </div>
        <div className={classes.content}>
          <TextField
            className={classes.size}
            placeholder="Введите комментарий"
            variant="outlined"
            name="hint"
            value={values.hint}
            onChange={handleChange}
            // error={errors.cardComment}
            // helperText={errors.cardComment}
          />
        </div>

        <div className={classes.step}>
          <div className={classes.circle}>7</div>
          <Typography>Добавить теги</Typography>
        </div>
        <div className={classes.content}>
          <TagField
            tagValue={values.chipTitle} 
            name="chipTitle"
            onChangeTagValue={handleChange}
            onCreateTag={handleAddTag}
            modal="exercise"
            values={values}
            setValues={setValues}
          />
        </div>

        <div className={classes.step}>
          <div className={classes.circle}>8</div>
          <Typography>Добавить фрагментацию</Typography>
        </div>
        <div className={classes.content}>
          {values.fragments.map((f, index) => (
            <div key={index} className={classes.centerInlineAligment} /* style={{ display: 'inline-flex', alignItems: 'center' }} */>

              <span>
                <IconButton size="small" variant="outlined"><RemoveIcon /></IconButton>
                <MaskedInput
                  placeholder="Введите время"
                  variant="outlined"
                  name="startFragment"
                  mask={[/[0-9]/, /[0-9]/, ':', /[0-9]/, /[0-9]/, ':', /[0-9]/, /[0-9]/]}
                  className={classes.fragmentInput}
                  // style={{ maxWidth: '60%', borderColor: 'rgba(0, 0, 0, 0.23)', borderRadius: '5px', padding: '4px' }}
                  value={f.startFragment}
                  onChange={(e) => {
                    let newItem=values.fragments.map((fr, i) => (fr.id === f.id ? ({ ...fr, startFragment: e.target.value }) : fr));
                    setValues({...values, 'fragments': newItem});
                  }}
                  // error={errors.cardComment}
                  // helperText={errors.cardComment}
                />
                <IconButton size="small" variant="outlined"><AddIcon /></IconButton>
              </span> 

              <span>
                <IconButton size="small" variant="outlined"><RemoveIcon /></IconButton>
                <MaskedInput
                  placeholder="Введите время"
                  variant="outlined"
                  name="finishFragment"
                  mask={[/[0-9]/, /[0-9]/, ':', /[0-9]/, /[0-9]/, ':', /[0-9]/, /[0-9]/]}
                  className={classes.fragmentInput}
                  // style={{ maxWidth: '60%', borderColor: 'rgba(0, 0, 0, 0.23)', borderRadius: '5px', padding: '4px' }}
                  value={f.finishFragment}
                  onChange={(e) => {
                    let newItem=values.fragments.map((fr, i) => (fr.id === f.id ? ({ ...fr, finishFragment: e.target.value }) : fr));
                    setValues({...values, 'fragments': newItem});
                  }}
                  // error={errors.cardComment}
                  // helperText={errors.cardComment}
                />
                <IconButton size="small" variant="outlined"><AddIcon /></IconButton>
              </span>

              <Button 
                onClick={() => 
                setValues({
                  ...values, 
                  'fragments': values.fragments
                    .filter(fr => fr.id !== f.id)
                })}
              ><DeleteIcon /></Button> 
            </div>
          ))}

          <Button 
            color="primary" 
            onClick={() => {
              setValues({
                ...values, 
                'fragments': [
                  ...values.fragments, 
                  fragment
                ]
              });
              setFragment(initialFragment);
            }}
          >
            Добавить фрагмент
          </Button>

        </div>
      </div>
      <ExercisePreview values={values} setValues={setValues} />
    </div>
  );
}

const SelectAnswerInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    width: '200px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

export default ExerciseCardContent;