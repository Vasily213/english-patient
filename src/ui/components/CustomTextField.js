import React from "react";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core";

export default function CustomTextField ({/* key,  */required, value, onChange,/*  ...other */}){
    const classes = useStyles();
    return (
        <TextField
            // key={key}
            placeholder="Введите текст"
            variant="outlined"
            required={required}
            value={value}
            onChange={onChange}
            className={classes.size}
            margin="dense"
            /* {...other} */
        />
    )
}

const useStyles = makeStyles(() => ({
    size: {
        width: '35vw'
    },
  }));