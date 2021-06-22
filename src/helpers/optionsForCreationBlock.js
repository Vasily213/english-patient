
let options = {};

const handleOptions = (modal) => {
  if (modal === 'exercise') {
    options = {
      header: 'Создать новое упражнение',
      button: 'Сохранить упражнение'
    };
  } else if (modal === 'card') {
    options = {
      header: 'Создать новую карточку',
      button: 'Сохранить карточку'
    };
  } else if (modal === 'video') {
    options = {
      header: 'Создать новое видео',
      button: 'Сохранить видео'
    };
  } else if (modal === 'audio') {
    options = {
      header: 'Создать новое аудио',
      button: 'Сохранить аудио'
    };
  } else if (modal === 'image') {
    options = {
      header: 'Создать новое изображение',
      button: 'Сохранить изображение'
    };
  } else {
    options = {
      header: 'Создать новый текст',
      button: 'Сохранить текст'
    };
  }  
  return options;
}

export default handleOptions;