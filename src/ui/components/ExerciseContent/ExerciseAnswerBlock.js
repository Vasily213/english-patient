import React  from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import useContentBlockStyles from '../../themes/simpleBlockTheme';


const ExerciseAnswerBlock = ({values, setValues}) => {

  const classes = useContentBlockStyles();

  const initialMatching = {
    id: Date.now(),
    word: ''
  };

  const initialAnswer = {
    // решение проблемы с drag and drop
    id: Date.now().toString(),
    answer: '',
    commentAnswer: '',
    checked: false
  };

  const [matching, setMatching] = React.useState(initialMatching);
  const [answer, setAnswer] = React.useState(initialAnswer);

  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
  });

  const handleChangeCheckBox = (e) => {
    setState({ ...state, [e.target.name]: e.target.checked });
  };

  return (
    <>
      {values.typeAnswer==="" && (
        <>
          <div className={classes.step}>
            <div className={classes.circle}>4</div>
            <Typography>Добавить варианты ответа</Typography>
          </div>
          <div className={classes.content}>

          </div>
            
        </>
      )}

      {values.typeAnswer==="Одиночный выбор" && (
        <>
          <div className={classes.step}>
            <div className={classes.circle}>4</div>
            <Typography>Добавить варианты ответа, отметьте один правильный, нажав на галочку</Typography>
          </div>
          <div className={classes.content}>
            {values.answers.map((a, index) => (
              <div key={index}>
                <span className={classes.typeOneAnswer} /* style={{ display: 'inline-flex', alignItems: 'center', width: '110%' }} */>
                  <TextField
                    className={classes.size}
                    placeholder="Введите ответ"
                    variant="outlined"
                    name="answer"
                    value={a.answer}
                    onChange={(e) => {
                      let newItem=values.answers.map((v, i) => (v.id === a.id ? ({ ...v, answer: e.target.value }) : v));
                      setValues({...values, 'answers': newItem});
                    }}
                    // error={errors.cardComment}
                    // helperText={errors.cardComment}
                  />
                  <IconButton onClick={() => {
                      if (!values.answers.some(v => v.checked)) {
                        let newItem=values.answers.map((v, i) => (v.id === a.id ? ({ ...v, checked: !v.checked }) : v));
                        setValues({...values, 'answers': newItem});
                      } else {
                        let newItem=values.answers.map((v, i) => (v.id === a.id ? ({ ...v, checked: false }) : v));
                        setValues({...values, 'answers': newItem});
                      }
                    }} className={classes.iconButton} aria-label="check">
                    {a.checked ? <CheckIcon className={classes.success} /* style={{ color: 'green' }} */ /> : <CheckIcon />}
                  </IconButton>
                  <Button onClick={() => setValues({...values, 'answers': values.answers.filter(v => v.id !== a.id)})}><DeleteIcon /></Button>
                </span>
                <TextareaAutosize
                  rows={2}
                  rowsMax={2}
                  placeholder="Введите комментарий к ответу"
                  name="commentAnswer"
                  className={classes.exerciseTextArea}
                  // style={{ margin: '8px', borderRadius: '5px', width: '80%' }}
                  /* className={classes.multilineField} */
                  value={a.commentAnswer}
                  onChange={(e) => {
                    let newItem=values.answers.map((v, i) => (v.id === a.id ? ({ ...v, commentAnswer: e.target.value }) : v));
                    setValues({...values, 'answers': newItem});
                  }}
                  // error={errors.cardDesc}
                  // helperText={errors.cardDesc}
                />
              </div>
            ))}
            <Button color="primary" onClick={() => {
              setValues({...values, 'answers': [...values.answers, answer]});
              setAnswer(initialAnswer);
            }}>Добавить вариант ответа</Button>
          </div>
        </>
      )}

      {values.typeAnswer==="Множественный выбор" && (
        <>
          <div className={classes.step}>
            <div className={classes.circle}>4</div>
            <Typography>Добавить варианты ответа, отметьте несколько правильных, нажав на галочку</Typography>
          </div>
          <div className={classes.content}>
            {values.answers.map((a, index) => (
              <div key={index}>
                <span className={classes.typeOneAnswer} /* style={{ display: 'inline-flex', alignItems: 'center', width: '110%' }} */>
                  <TextField
                    className={classes.size}
                    placeholder="Введите ответ"
                    variant="outlined"
                    name="answer"
                    value={a.answer}
                    onChange={(e) => {
                      let newItem=values.answers.map((v, i) => (v.id === a.id ? ({ ...v, answer: e.target.value }) : v));
                      setValues({...values, 'answers': newItem});
                    }}
                    // error={errors.cardComment}
                    // helperText={errors.cardComment}
                  />
                  <IconButton onClick={() => {
                      let newItem=values.answers.map((v, i) => (v.id === a.id ? ({ ...v, checked: !v.checked }) : v));
                      setValues({...values, 'answers': newItem});
                    }} className={classes.iconButton} aria-label="check">
                    {a.checked ? <CheckIcon className={classes.success} /* style={{ color: 'green' }} */ /> : <CheckIcon />}
                  </IconButton>
                  <Button onClick={() => setValues({...values, 'answers': values.answers.filter(v => v.id !== a.id)})}><DeleteIcon /></Button>
                </span>
                <TextareaAutosize
                  rows={2}
                  rowsMax={2}
                  placeholder="Введите комментарий к ответу"
                  name="commentAnswer"
                  className={classes.exerciseTextArea}
                  // style={{ margin: '8px', borderRadius: '5px', width: '80%' }}
                  /* className={classes.multilineField} */
                  value={a.commentAnswer}
                  onChange={(e) => {
                    let newItem=values.answers.map((v, i) => (v.id === a.id ? ({ ...v, commentAnswer: e.target.value }) : v));
                    setValues({...values, 'answers': newItem});
                  }}
                  // error={errors.cardDesc}
                  // helperText={errors.cardDesc}
                />
              </div>
            ))}
            <Button color="primary" onClick={() => {
              setValues({...values, 'answers': [...values.answers, answer]});
              setAnswer(initialAnswer);
            }}>Добавить вариант ответа</Button>
          </div>
        </>
      )}

      {values.typeAnswer==="Ввод текста" && (
        <>
          <div className={classes.step}>
            <div className={classes.circle}>4</div>
            <Typography>Добавить правильный ответ</Typography>
          </div>
          <div className={classes.content}>
            {values.answers.map((a, index) => (
              <div key={index}>
                <span style={{ display: 'inline-flex', alignItems: 'center', width: '90%' }}>
                  <TextareaAutosize
                    rows={2}
                    rowsMax={2}
                    placeholder="Введите комментарий к ответу"
                    name="answer"
                    className={classes.exerciseTextArea}
                    // style={{ margin: '8px', borderRadius: '5px', width: '80%' }}
                    /* className={classes.multilineField} */
                    value={a.answer}
                    onChange={(e) => {
                      let newItem=values.answers.map((v, i) => (v.id === a.id ? ({ ...v, answer: e.target.value }) : v));
                      setValues({...values, 'answers': newItem});
                    }}
                    // error={errors.cardDesc}
                    // helperText={errors.cardDesc}
                  />
                  <Button onClick={() => setValues({...values, 'answers': values.answers.filter(v => v.id !== a.id)})}><DeleteIcon /></Button>
                </span>
              </div>
            ))}
            <Button color="primary" onClick={() => {
              setValues({...values, 'answers': [...values.answers, answer]});
              setAnswer(initialAnswer);
            }}>Добавить вариант ответа</Button>
            <span style={{ display: 'inline-flex', alignItems: 'center', width: '90%' }}>
              <FormControlLabel
                control={<Checkbox checked={state.checkedA} onChange={handleChangeCheckBox} name="checkedA" />}
                label="Учитывать регистр"
              />
              <FormControlLabel
                control={<Checkbox checked={state.checkedB} onChange={handleChangeCheckBox} name="checkedB" />}
                label="Учитывать пунктуацию"
              />
            </span>
          </div>
        </>
      )}

      {values.typeAnswer==="Упорядочивание" && (
        <>
          <div className={classes.step}>
            <div className={classes.circle}>4</div>
            <Typography>Добавить варианты ответа</Typography>
          </div>
          <div className={classes.content}>
            {values.answers.map((a, index) => (
              <div key={index}>
                <span style={{ display: 'inline-flex', alignItems: 'center', width: '135%' }}>
                  <TextField
                    className={classes.size}
                    placeholder="Введите ответ"
                    variant="outlined"
                    name="answer"
                    value={a.answer}
                    onChange={(e) => {
                      let newItem=values.answers.map((v, i) => (v.id === a.id ? ({ ...v, answer: e.target.value }) : v));
                      setValues({...values, 'answers': newItem});
                    }}
                    // error={errors.cardComment}
                    // helperText={errors.cardComment}
                  />
                  <Button onClick={() => setValues({...values, 'answers': values.answers.filter(v => v.id !== a.id)})}><DeleteIcon /></Button>
                </span>
              </div>
            ))}
            <Button color="primary" onClick={() => {
              setValues({...values, 'answers': [...values.answers, answer]});
              // setList([...list, answer])
              setAnswer(initialAnswer);
            }}>Добавить вариант ответа</Button>
          </div>
        </>
      )}

      {values.typeAnswer==="Сопоставление" && (
        <>
          <div className={classes.step}>
            <div className={classes.circle}>4</div>
            <Typography>Добавить слова для сопоставления</Typography>
          </div>
          <div className={classes.content}>
            <div style={{ display: 'inline-flex' }}>
              <div style={{ width: '35%' }}>
                {values.matching.map((m, index) => (
                  <>
                    <TextField
                      className={classes.size}
                      placeholder="Введите ответ"
                      variant="outlined"
                      name="answer"
                      value={m.word}
                      onChange={(e) => {
                        let newItem=values.matching.map((mt, i) => (mt.id === m.id ? ({ ...mt, word: e.target.value }) : mt));
                        setValues({...values, 'matching': newItem});
                      }}
                      // error={errors.cardComment}
                      // helperText={errors.cardComment}
                    />
                  </>
                ))}
              </div>
              <div style={{ width: '35%', marginLeft: '5px' }}>
                {values.answers.map((a, index) => (
                  <>
                    <TextField
                      className={classes.size}
                      placeholder="Введите ответ"
                      variant="outlined"
                      name="commentAnswer"
                      value={a.answer}
                      onChange={(e) => {
                        let newItem=values.answers.map((v, i) => (v.id === a.id ? ({ ...v, answer: e.target.value }) : v));
                        setValues({...values, 'answers': newItem});
                      }}
                      // error={errors.cardComment}
                      // helperText={errors.cardComment}
                    />
                  </>
                ))}
              </div>
            </div>
            <Button color="primary" onClick={() => {
              setValues({...values, 'matching': [...values.matching, matching], 'answers': [...values.answers, answer]});
              setMatching(initialMatching);
              setAnswer(initialAnswer);
            }}>Добавить пару</Button>
            {values.answers.length !== 0 && (
              <Button 
                color="primary" 
                onClick={() => {
                  setValues({...values, 'matching': values.matching.slice(0, values.matching.length-1), 'answers': values.answers.slice(0, values.answers.length-1)});
                  setMatching(initialMatching);
                  setAnswer(initialAnswer);
                }}
              >Удалить пару</Button>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default ExerciseAnswerBlock;