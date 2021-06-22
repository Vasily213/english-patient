import React from 'react';
import {makeStyles, Button} from "@material-ui/core";

import CreateBlockModal from '../components/modals/CreateBlockModal';


const CreateBlock = () => {
    const classes = useStyles();

    const [showCreateVideoModal, setShowCreateVideoModal] = React.useState(false);
    const [showCreateImageModal, setShowCreateImageModal] = React.useState(false);
    const [showCreateAudioModal, setShowCreateAudioModal] = React.useState(false);
    const [showCreateTextModal, setShowCreateTextModal] = React.useState(false);
    const [showCreateCardModal, setShowCreateСardModal] = React.useState(false);
    const [showCreateExerciseModal, setShowCreateExerciseModal] = React.useState(false);

    return (
        <>
            <section>
                <CreateBlockModal
                    show={showCreateVideoModal}
                    hide={() => setShowCreateVideoModal(false)}
                    modal="video"
                />
                <CreateBlockModal
                    show={showCreateImageModal}
                    hide={() => setShowCreateImageModal(false)}
                    modal="image"
                />
                <CreateBlockModal
                    show={showCreateAudioModal}
                    hide={() => setShowCreateAudioModal(false)}
                    modal="audio"
                />
                <CreateBlockModal
                  show={showCreateTextModal}
                  hide={() => setShowCreateTextModal(false)}
                  modal="text"
                />
                <CreateBlockModal
                  show={showCreateCardModal}
                  hide={() => setShowCreateСardModal(false)}
                  modal="card"
                />
                <CreateBlockModal
                  show={showCreateExerciseModal}
                  hide={() => setShowCreateExerciseModal(false)}
                  modal="exercise"
                />
                <Button 
                    className={classes.margin} 
                    variant="outlined" 
                    color="primary" 
                    onClick={() => setShowCreateVideoModal(true)}
                >Создать видео</Button>
                <Button 
                    className={classes.margin} 
                    variant="outlined" 
                    color="primary" 
                    onClick={() => setShowCreateImageModal(true)}
                >Создать изображение</Button>
                <Button 
                    className={classes.margin} 
                    variant="outlined" 
                    color="primary" 
                    onClick={() => setShowCreateAudioModal(true)}
                >Создать аудио</Button>
                <Button 
                    className={classes.margin} 
                    variant="outlined" 
                    color="primary" 
                    onClick={() => setShowCreateTextModal(true)}
                >Создать текст</Button>
                <Button 
                    className={classes.margin} 
                    variant="outlined" 
                    color="primary" 
                    onClick={() => setShowCreateСardModal(true)}
                >Создать карточку</Button>
                <Button 
                    className={classes.margin} 
                    variant="outlined" 
                    color="primary" 
                    onClick={() => setShowCreateExerciseModal(true)}
                >Создать упражнение</Button>
            </section>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(2)
    }
  }));

export default CreateBlock;
