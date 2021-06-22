export default function validate(values, modal) {
  let errors = {};

  if (modal === 'cardItem') {

    if (!values.cardQuestion) {
      errors.video = 'Введите вопрос';
    }

  } else if (modal === 'text') {

    if (!values) {
      errors.text = 'Введите текст';
    }

  } else {

    if (modal === 'video') {
      
      if (!values.video) {
        errors.video = 'Загрузите видео';
      }
    } else if (modal === 'image') {
      if (!values.image) {
        errors.image = 'Загрузите изображение';
      }
    } else if (modal === 'audio') {
      if (!values.audio) {
        errors.audio = 'Загрузите аудио';
      }
    } 
  
    if (!values.title.trim()) {
      errors.title = 'Введите название';
    }
    
    if (!values.src) {
      errors.src = 'Введите ссылку';
    } else if (!/^https?:\/\/[\w/?.&-=]+$/.test(values.src.trim())) {
      errors.src = 'Введите корректную ссылку';
    }
  }
  
  return errors;
}