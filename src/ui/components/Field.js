import React from 'react';
import {TextField} from "@material-ui/core";

const Field = ({
                   autoFocus,
                   label,
                   inputProps,
                   type,
                   onChange,
                   error,
                   helperText,
                   required
               }) => (

    <TextField
        required={required}
        helperText={helperText}
        error={error}
        label={label}
        placeholder={label}
        variant="outlined"
        margin="normal"
        fullWidth
        type={type}
        onChange={onChange}
        autoFocus={autoFocus}
        autoComplete="current-password"
        InputProps={inputProps}
    />
)

export default Field;
