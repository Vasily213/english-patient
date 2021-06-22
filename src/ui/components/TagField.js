import React from 'react'
import { makeStyles } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles(theme => ({
  chips: {
    maxWidth: '30vw',
  },
  chip: {
    display: 'inline-flex',
    padding: theme.spacing(0.5),
    margin: theme.spacing(0.5),
  },
  cursor: {
    cursor: 'pointer'
  },
  сenterAlignment: {
    display: 'flex',
    alignItems: 'center',  
  }
}))

 const TagField = (props) => {

    const classes = useStyles();
    const { tagValue, onChangeTagValue, onCreateTag, values, setValues, modal="" } = props;
    return (
        <>
          <span className={classes.сenterAlignment}>
            <TextField
              placeholder="Добавьте теги"
              name={modal === "card" ? 'cardChipTitle' : 'chipTitle'}
              value={tagValue}
              onChange={onChangeTagValue}
              fullWidth
              onKeyUp={e => e.key === 'Enter' ? onCreateTag(e) : null}
              margin="dense"
            />
            <AddIcon 
              className={classes.cursor} 
              onClick={onCreateTag}
            />
          </span>
          <span className={classes.chips}>
            {modal === "card" ? (
              values?.cardChipData !== [] && 
                values?.cardChipData.map(cardChip => 
                  <Chip 
                    className={classes.chip} 
                    variant="outlined" 
                    onDelete={() => setValues({ 
                      ...values, 
                      'cardChipData': 
                        values.cardChipData.filter(el => el !== cardChip) 
                    })}
                    label={cardChip} 
                    color="primary" 
                  /> 
                )
            ) : modal === "exercise" ? (
              values?.exerciseChipData !== [] && 
                values?.exerciseChipData.map(cardChip => 
                  <Chip 
                    className={classes.chip} 
                    variant="outlined" 
                    onDelete={() => setValues({ 
                      ...values, 
                      'exerciseChipData': 
                        values.exerciseChipData.filter(el => el !== cardChip) 
                    })}
                    label={cardChip} 
                    color="primary" 
                  /> 
                )
            ) : (
              values?.chipData !== [] && 
                values?.chipData.map(chip => 
                  <Chip 
                    className={classes.chip} 
                    variant="outlined" 
                    onDelete={() => setValues({ 
                      ...values, 
                      'chipData': 
                        values.chipData.filter(el => el !== chip) 
                    })}
                    label={chip} 
                    color="primary" 
                  /> 
                )
            )}
          </span>
        </>
    )
}

export default TagField;
