import React  from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import useContentBlockStyles from '../../themes/simpleBlockTheme';

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const ExercisePreview = ({values, setValues}) => {

  const classes = useContentBlockStyles();
  const [visibleHint, setVisibleHint] = React.useState(false);
  const getDifferenceTime = (finishTime, startTime) => {
    let getDate = (string) => new Date(0, 0,0, string.split(':')[0], string.split(':')[1], string.split(':')[2]); 
    let different = (getDate(finishTime) - getDate(startTime));

    /* let min = Math.floor((different % 86400000) / 3600000);
    let sec = Math.round(((different % 86400000) % 3600000) / 60000);
    let milisec = Math.round(((different % 86400000) % 3600000) / 60000 / 60000);
    let result = min + ':' + sec + ':' + milisec; */
    if (isNaN(different)) {
      return '...'
    }
    return `${Math.round(((different % 86400000) % 3600000) / 60000)}s`;
  }

  const reorder = (values, startIndex, endIndex) => {
    // const result = Array.from(list);
    const result = Array.from(values.answers);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onEnd = (result) => {
    console.log(result);
    // setList(reorder(list, result.source.index, result.destination.index));
    setValues({...values, 'answers': reorder(values, result.source.index, result.destination.index)});
  };

  return (
    <Paper elevation={0} className={classes.paper}>
      {values.exerciseTitle && <h2>{values.exerciseTitle}</h2>}
      {/* values.video && */ <video style={{ width: '500px' }} controls src="../../../assets/img/video"></video>}
      {values?.fragments && values.fragments.map(f => (
        <div style={{ display: 'inline-flex', width: '100px' }}>
          <Paper
            style={{
              padding: '8px 20px',
              margin: "8px",
              border: "1px dashed #908a8a",  
              textAlign: 'center'
            }}
          >
            {getDifferenceTime(f.finishFragment, f.startFragment)}
            {/* {Number(f.finishFragment) - Number(f.startFragment)} */}
          </Paper>
        </div>
      ))}
      {values.exerciseTranscript && <p>{values.exerciseTranscript}</p>}
      {values.typeAnswer==="Одиночный выбор" && (
        <>
          <div style={{ marginLeft: '10%' }}>
            <p>Выберите один правильный ответ:</p>
            {values.answers.map(v => (
              <div>
                <FormControlLabel checked={v.checked} control={<Radio />} label={v.answer} />
              </div>
            ))}
          </div>
          {visibleHint && <p style={{ marginLeft: '10%' }}>{values.hint}</p>}
          {values.hint && (
            <Button onClick={() => setVisibleHint(!visibleHint)} style={{ display: 'flex', justifyContent: 'center', color: 'grey', marginLeft: '10%' }} size="small">
              {visibleHint ? 'Cкрыть подсказку реплики' : 'Показать подсказку реплики'}
            </Button>
          )}
        </>
      )}
      {values.typeAnswer==="Множественный выбор" && (
        <>
          <div>
            <p>Выберите несколько правильных ответов:</p>
            {values.answers.map(v => (
              <div>
                <FormControlLabel checked={v.checked} control={<Checkbox />} label={v.answer} />
              </div>
            ))}
          </div>
          {visibleHint && <p>{values.hint}</p>}
          {values.hint && (
            <Button onClick={() => setVisibleHint(!visibleHint)} style={{ display: 'flex', justifyContent: 'center', color: 'grey' }} size="small">
              {visibleHint ? 'Cкрыть подсказку реплики' : 'Показать подсказку реплики'}
            </Button>
          )}
        </>
      )}
      {values.typeAnswer==="Ввод текста" && (
        <div>
          <p>Введите ответ в текстовое поле</p>
          <TextareaAutosize
            rows={2}
            rowsMax={2}
            placeholder="Введите текст"
            style={{ margin: '8px', borderRadius: '5px', width: '80%' }}
            // error={errors.cardDesc}
            // helperText={errors.cardDesc}
          />
          {visibleHint && <p>{values.hint}</p>}
          {values.hint && (
            <Button onClick={() => setVisibleHint(!visibleHint)} style={{ display: 'flex', justifyContent: 'center', color: 'grey' }} size="small">
              {visibleHint ? 'Cкрыть подсказку реплики' : 'Показать подсказку реплики'}
            </Button>
          )}
        </div>
      )}
      {(values.typeAnswer==="Запись с камеры и микрофона" || values.typeAnswer==="Запись с микрофона") && (
        <>
          <div>
            <p>Повторите в микрофон то, что сказано на видео:</p>
            <Button style={{ display: 'flex', justifyContent: 'center' }} color="primary" variant="outlined">Начать запись</Button>
          </div>
          {visibleHint && <p>Подсказка такова: парам-парам-пам</p>}
          <Button onClick={() => setVisibleHint(!visibleHint)} style={{ display: 'flex', justifyContent: 'center', color: 'grey' }}>
            {visibleHint ? 'Cкрыть подсказку реплики' : 'Показать подсказку реплики'}
          </Button>
        </>
      )}
      {values.typeAnswer==="Упорядочивание" && (
        <div style={{margin: '10%'}}>
          <p>Расположите в правильном порядке:</p>
          <DragDropContext onDragEnd={onEnd}>
            <div
              style={{
                display: "flex"
              }}
            >
              <div
                style={{
                  width: "100%"
                }}
              >
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef}>
                      {values.answers.map((item, index) => (
                        <Draggable draggableId={item.id} key={item.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Paper
                                style={{
                                  padding: "16px",
                                  margin: "8px",
                                  background: "#F4F4F4",  
                                  textAlign: 'center'
                                }}
                              >
                                {item.answer}
                              </Paper>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
              <div
                style={{
                  width: "100%",
                  marginLeft: 20
                }}
              >
              </div>
            </div>
          </DragDropContext>

          {visibleHint && <p>{values.hint}</p>}
          {values.hint && (
            <Button onClick={() => setVisibleHint(!visibleHint)} style={{ display: 'flex', justifyContent: 'center', color: 'grey' }} size="small">
              {visibleHint ? 'Cкрыть подсказку реплики' : 'Показать подсказку реплики'}
            </Button>
          )}
        </div>
      )}
      {values.typeAnswer==="Сопоставление" && (
        <div>
          <p>Сопоставьте слова:</p>
          <div style={{ display: 'inline-flex', width: '100%', alignItems: 'center' }}>
            <div style={{ width: '50%' }}>
              {values.matching.map((m, i) => (
                <Paper style={{ padding: '16px', textAlign: 'center', backgroundColor: '#F4F4F4', margin: '8px' }}>{m.word}</Paper>
              ))}
            </div>
            {/* <div> */}
            <DragDropContext onDragEnd={onEnd} style={{ maxWidth: '50%' }}>
              <div
                style={{
                  display: "flex",
                  width: '100%'
                }}
              >
                <div
                  style={{
                    width: "50%"
                  }}
                >
                  <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef}>
                        {values.answers.map((item, index) => (
                          <Draggable draggableId={item.id} key={item.id} index={index}>
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <Paper
                                  style={{
                                    padding: "16px",
                                    margin: "8px",
                                    background: "#F4F4F4",  
                                    textAlign: 'center'
                                  }}
                                >
                                  {item.answer}
                                </Paper>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
                <div
                  style={{
                    width: "100%",
                    marginLeft: 20
                  }}
                >
                </div>
              </div>
            </DragDropContext>
          </div>
          {visibleHint && <p>{values.hint}</p>}
          {values.hint && (
            <Button onClick={() => setVisibleHint(!visibleHint)} style={{ display: 'flex', justifyContent: 'center', color: 'grey' }} size="small">
              {visibleHint ? 'Cкрыть подсказку реплики' : 'Показать подсказку реплики'}
            </Button>
          )}
        </div>
      )}
    </Paper>
  );
}

export default ExercisePreview;