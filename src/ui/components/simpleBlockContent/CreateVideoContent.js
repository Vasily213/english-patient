import React  from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import DropZoneElement from '../DropZoneElement';
import TagField from '../TagField';
// import DoneIcon from '@material-ui/icons/Done';
import useContentBlockStyles from '../../themes/simpleBlockTheme';

const CreateVideoContent = ({values, setValues, initialValues, handleChange, errors}) => {
  const classes = useContentBlockStyles();

  const [, setVideoFile] = React.useState(initialValues);
  // const [, setImageFile] = React.useState(initialValues);

  const onClickVideoHandler = (e) => {
    setVideoFile(prevState => {
      prevState[e.name] = e.output;
      console.log(prevState);
    })
  }

  /* const onClickImageHandler = (e) => {
    setImageFile(prevState => {
      prevState[e.name] = e.output;
      console.log(prevState);
    })
  }   */

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
        <Typography>Добавить видео и аватар</Typography>
      </div>
      <div className={classes.content}>
        <DropZoneElement record={onClickVideoHandler} modal="video" errors={errors} />
        {errors.video && <p className={classes.error}>{errors.video}</p>}
        {!values.video && (
          <>
            <p>Или введите ссылку на видео</p>
            <TextField
              className={classes.size}
              placeholder="Введите ссылку"
              variant="outlined"
              name="video"
              value={values.video}
              onChange={handleChange}
              error={errors.video}
              helperText={errors.video}
            />
          </>
        )}
      </div>
      {/* <div className={classes.step}>
        <div className={classes.circle}>2</div>
        <Typography>Добавить аватар</Typography>
      </div>
      <div className={classes.content}>
        <DropZoneElement record={onClickImageHandler} modal="image" errors={errors} />
        {errors.image && <p className={classes.error}>{errors.image}</p>}
      </div> */}
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
        {/* {errors.title && <p>{errors.title}</p>} */}
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
          value={values.src}
          name="src"
          onChange={handleChange}
          error={errors.src}
          helperText={errors.src}
        />
        {/* {errors.src && <p>{errors.src}</p>} */}
      </div>
      <div className={classes.step}>
        <div className={classes.circle}>5</div>
        <Typography>Добавить правовую информацию</Typography>
      </div>
      <div className={classes.content}>
        <TextareaAutosize
          rows={5}
          rowsMax={10}
          className={classes.multilineField}
          value={values.info}
          name="info"
          onChange={handleChange}
        />
      </div>
      <div className={classes.step}>
        <div className={classes.circle}>6</div>
        <Typography>Добавить теги</Typography>
      </div>
      <div className={classes.content}>
        <TagField
          tagValue={values.chipTitle} 
          name="chipTitle"
          onChangeTagValue={handleChange}
          onCreateTag={handleAddTag}
          values={values}
          setValues={setValues}
        />
      </div>
    </>
  );
}

export default CreateVideoContent;