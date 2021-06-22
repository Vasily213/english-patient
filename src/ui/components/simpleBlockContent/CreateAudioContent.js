import React  from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import DropZoneElement from '../DropZoneElement';
import TagField from '../TagField';

import useContentBlockStyles from '../../themes/simpleBlockTheme';

const CreateAudioContent = ({values, setValues, initialValues, handleChange, errors}) => {
  const classes = useContentBlockStyles();
  const [, setAudioFile] = React.useState(initialValues);

  
  const onClickAudioHandler = (e) => {
    setAudioFile(prevState => {
      prevState[e.name] = e.output;
      console.log(prevState);
    })
  }

  const handleAddTag = () => {
    if (values.chipTitle !== '' && 
    !values.chipData.includes(values.chipTitle)) {
      setValues({ ...values, 
        'chipData': 
          [
            ...values.chipData, 
            values.chipTitle
          ], 
          'chipTitle': '' 
      })
    } 
  }
  
  return (
    <>
      <div className={classes.step}>
        <div className={classes.circle}>1</div>
        <Typography>Добавить аудио</Typography>
      </div>
      <div className={classes.content}>
        <DropZoneElement record={onClickAudioHandler} modal="audio" errors={errors} />
        {errors.audio && <p className={classes.error}>{errors.audio}</p>}
        {!values.audio && (
          <>
            <p>Или введите ссылку на аудио</p>
            <TextField
              className={classes.size}
              placeholder="Введите ссылку"
              variant="outlined"
              name="title"
              value={values.title}
              onChange={handleChange}
              error={errors.title}
              helperText={errors.title}
            />
          </>
        )}
      </div>
      <div className={classes.step}>
        <div className={classes.circle}>2</div>
        <Typography>Добавить название</Typography>
      </div>
      <div className={classes.content}>
        <TextField
          className={classes.size}
          placeholder="Введите текст"
          variant="outlined"
          name="title"
          value={values.title}
          onChange={handleChange}
          error={errors.title}
          helperText={errors.title}
        />
      </div>
      <div className={classes.step}>
        <div className={classes.circle}>3</div>
        <Typography>Добавить транскрипт</Typography>
      </div>
      <div className={classes.content}>
        <TextareaAutosize
          rows={5}
          rowsMax={10}
          className={classes.multilineField}
          name="transcript"
          value={values.transcript}
          onChange={handleChange}
          margin="dense"
        />
      </div>
      <div className={classes.step}>
        <div className={classes.circle}>4</div>
        <Typography>Добавить ссылку на источник</Typography>
      </div>
      <div className={classes.content}>
        <TextField
          className={classes.size}
          variant="outlined"
          name="src"
          value={values.src}
          onChange={handleChange}
          error={errors.src}
          helperText={errors.src}

        />
      </div>
      <div className={classes.step}>
        <div className={classes.circle}>5</div>
        <Typography>Добавить правовую информацию</Typography>
      </div>
      <div className={classes.content}>
        <TextareaAutosize
          rows={5}
          rowsMax={10}
          name="info"
          className={classes.multilineField}
          value={values.info}
          onChange={handleChange}
        />
      </div>
      <div className={classes.step}>
        <div className={classes.circle}>7</div>
        <Typography>Добавить теги</Typography>
      </div>
      <div className={classes.content}>
        <TagField
          tagValue={values.chipTitle} 
          onChangeTagValue={handleChange}
          onCreateTag={handleAddTag}
          values={values}
          setValues={setValues}
        />
      </div>
    </>
  );
}

export default CreateAudioContent;