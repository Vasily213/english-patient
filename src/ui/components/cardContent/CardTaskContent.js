import React  from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Paper from '@material-ui/core/Paper';
import TagField from '../TagField';

import useContentBlockStyles from '../../themes/simpleBlockTheme';

const CardTaskContent = ({values, setValues, initialValues, handleChange, errors}) => {
  const classes = useContentBlockStyles();

  const handleAddTag = () => {
    if (values.cardChipTitle !== '' && 
    !values.cardChipData.includes(values.cardChipTitle)) {
      setValues({ ...values, 
        'cardChipData': 
          [
            ...values.cardChipData, 
            values.cardChipTitle
          ], 
          'cardChipTitle': '' 
      })
    } 
  }
  
  return (
    <div style={{ display: 'inline-flex' }}>
      <div>
        <div className={classes.step}>
          <div className={classes.circle}>1</div>
          <Typography>Добавить название карточки</Typography>
        </div>
        <div className={classes.content}>
          <TextField
            className={classes.size}
            placeholder="Введите название карточки"
            variant="outlined"
            name="cardTitle"
            value={values.cardTitle}
            onChange={handleChange}
            // error={errors.cardTitle}
            // helperText={errors.cardTitle}
          />
        </div>
        <div className={classes.step}>
          <div className={classes.circle}>2</div>
          <Typography>Добавить описание</Typography>
        </div>
        <div className={classes.content}>
          <TextareaAutosize
              rows={5}
              rowsMax={10}
              name="cardDesc"
              className={classes.multilineField}
              value={values.cardDesc}
              onChange={handleChange}
              // error={errors.cardDesc}
              // helperText={errors.cardDesc}
            />
          </div>
        <div className={classes.step}>
          <div className={classes.circle}>3</div>
          <Typography>Введите формулировку задания для ученика</Typography>
        </div>
        <div className={classes.content}>
          <TextareaAutosize
            rows={5}
            rowsMax={10}
            name="cardTask"
            className={classes.multilineField}
            value={values.cardTask}
            onChange={handleChange}
          />
        </div>
        <div className={classes.step}>
          <div className={classes.circle}>4</div>
          <Typography>Добавить комментарий</Typography>
        </div>
        <div className={classes.content}>
          <TextField
            className={classes.size}
            placeholder="Введите комментарий"
            variant="outlined"
            name="cardComment"
            value={values.cardComment}
            onChange={handleChange}
            // error={errors.cardComment}
            // helperText={errors.cardComment}
          />
        </div>
        <div className={classes.step}>
          <div className={classes.circle}>5</div>
          <Typography>Добавить подсказку</Typography>
        </div>
        <div className={classes.content}>
          <TextField
            className={classes.size}
            placeholder="Введите комментарий"
            variant="outlined"
            name="cardHint"
            value={values.cardHint}
            onChange={handleChange}
            // error={errors.cardComment}
            // helperText={errors.cardComment}
          />
        </div>
        <div className={classes.step}>
          <div className={classes.circle}>6</div>
          <Typography>Добавить теги</Typography>
        </div>
        <div className={classes.content}>
          <TagField
            tagValue={values.cardChipTitle} 
            name="cardChipTitle"
            onChangeTagValue={handleChange}
            onCreateTag={handleAddTag}
            modal="card"
            values={values}
            setValues={setValues}
          />
        </div>
      </div>
      <Paper elevation={2} className={classes.paper}>
        {values.cardTitle && <h2>{values.cardTitle}</h2>}
        {values.cardDesc && <h4>{values.cardDesc}</h4>}
        {values.cardTask && <p>{values.cardTask}</p>}
        {values.video && <video style={{ width: '400px' }} controls src={values.video['preview']}></video>}
      </Paper>
    </div>
  );
}

export default CardTaskContent;