import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    checkboxesBlock: {
        width: "100%",
        margin: "30px auto",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap"
    }
}));

const CheckboxLine = props => {
    const classes = useStyles();

    return (
        <div className={classes.checkboxesBlock}>
            {
                props.data.map(ch => 
                    <FormControlLabel
                        key={ch.name} 
                        control={<Checkbox name={ch.name} color="primary" />} 
                        label={ch.label}
                    />
                )
            }
        </div> 
    )
}

export default CheckboxLine