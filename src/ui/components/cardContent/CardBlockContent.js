import React  from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Tabs from './Tabs';
import FindHasBlock from './FindHasBlock';
import TabPanel from '../../../components/formAddBlock/TabPanel';
import CreateImageContent from '../SimpleBlockContent/CreateImageContent';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import useContentBlockStyles from '../../themes/simpleBlockTheme';

const CardBlockContent = ({values, arrayValues, setValues, initialValues, handleChange, errors, value, setValue, modal="cardItem", handleVisible, visibleForm, setVisibleForm}) => {
  const classes = useContentBlockStyles();
  /* const [cardElem] = values; */
  
  return (
    <>    
      {arrayValues.cardContent.map((card, index) => 
        <Card>
          <h3>Карточка {index + 1}</h3>
          <div>
            <Typography>Описание того, что изображено на картинке</Typography>
            <TextField
              className={classes.size}
              placeholder="Введите текст"
              variant="outlined"
              name="cardQuestion"
              value={card.cardQuestion}
              // onChange={handleChange}
              // error={errors.cardTitle}
              // helperText={errors.cardTitle}
            />
          </div>
          <div>
            <Typography>Время на карточку (в секундах)</Typography>
            <TextField
              className={classes.size}
              placeholder="Введите текст"
              variant="outlined"
              name="cardTime"
              value={card.cardTime}
              // onChange={handleChange}
              // error={errors.cardTitle}
              // helperText={errors.cardTitle}
            />
          </div>
          <div>
            <Typography>Изображение</Typography>
            <div style={{ width: '150px', height: '150px', background: '#000', margin: '8px' }}></div>
            {/* <image
              // src={card.image['preview']}  
              src="https://cs.pikabu.ru/images/big_size_comm/2013-09_4/13792770005.png"
              // onChange={handleChange}
              // error={errors.cardTitle}
              // helperText={errors.cardTitle}
            /> */}
          </div>
        </Card>
      )}
      {!visibleForm && <Button color="primary" style={{ marginTop: '30px',  }} onClick={() => setVisibleForm(true)}>Добавить</Button>}
      {visibleForm && (
        <div style={{ marginTop: '30px', }}>
          <h3>Добавление карточки</h3>
          <div className={classes.step}>
            <div className={classes.circle}>1</div>
            <Typography>Введите описание того, что изображено на картинке</Typography>
          </div>
          <div className={classes.content}>
            <TextField
              className={classes.size}
              placeholder="Введите текст"
              variant="outlined"
              name="cardQuestion"
              value={values.cardQuestion}
              onChange={handleChange}
              // error={errors.cardTitle}
              // helperText={errors.cardTitle}
            />
          </div>
          <div className={classes.step}>
            <div className={classes.circle}>2</div>
            <Typography>Время на карточку (в секундах)</Typography>
          </div>
          <div className={classes.content}>
            <TextField
                className={classes.size}
                placeholder="Введите значение"
                variant="outlined"
                name="cardTime"
                value={values.cardTime}
                onChange={handleChange}
                // error={errors.cardTitle}
                // helperText={errors.cardTitle}
              />
            </div>
          <div className={classes.step}>
            <div className={classes.circle}>3</div>
            <Typography>Добавьте картинку</Typography>
          </div>
          <div className={classes.content}>
            <Tabs value={value} setValue={setValue} label1="Загрузить изображение" label2="Найти изображение">
              <TabPanel value={value} index={0}>
                <CreateImageContent initialValues={initialValues} values={values} setValues={setValues} handleChange={handleChange} errors={errors}  />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <FindHasBlock />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      )}
    </>
  );
}

export default CardBlockContent;