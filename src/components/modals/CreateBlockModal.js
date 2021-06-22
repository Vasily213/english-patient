import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {CreateSimpleBlockForm, CreateTextBlockForm} from '../../ui/components/CreateSimpleBlockForm';
import CreateCardForm from '../../ui/components/CreateCardForm';
import CreateExerciseForm from '../../ui/components/CreateExerciseForm';
import handleOptions from '../../helpers/optionsForCreationBlock';

const CreateBlockModal = ({
  show,
  hide,
  modal,
}) => {

  const handleClose = () => {
    hide();
  };

  return (
    <>
      <Dialog
        open={show}
        onClose={handleClose}
        maxWidth={modal==='exercise' ? 'lg' : 'sm'}
        aria-labelledby="customized-dialog-title"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>{handleOptions(modal).header}</DialogTitle>
        <DialogContent dividers>
          {modal==='card' && (
            <CreateCardForm modal={modal} handleClose={handleClose} />
          )}
          {modal==='exercise' && (
            <CreateExerciseForm modal={modal} handleClose={handleClose} />
          )}
          {(modal==='audio' || modal==='video' || modal==='image') && (
            <CreateSimpleBlockForm modal={modal} handleClose={handleClose} />
          )}
          {modal==='text' && (
            <CreateTextBlockForm handleClose={handleClose} />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};


export default CreateBlockModal;
