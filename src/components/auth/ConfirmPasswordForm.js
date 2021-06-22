import React from 'react';
import {Button, CircularProgress, IconButton, makeStyles, Typography} from "@material-ui/core";
import Paper from "../../ui/components/Paper";
import {VisibilityOffOutlined, VisibilityOutlined} from '@material-ui/icons';
import Field from "../../ui/components/Field";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {confirmPassword} from "../../redux/actions/UserActions";


export const useStylesSignIn = makeStyles((theme) => ({

    submit: {
        marginTop: 23,
        textTransform: "uppercase",
    },
    form: {
        width: 326,
        margin: '13px 32px 30px 32px',
    },
    title: {
        fontSize: 22,
        fontWeight: 600,
        marginTop: 57,
    },
    secondText: {
        textAlign: 'center',
        marginTop: 33,
        fontWeight: 500
    },
    paper: {
        boxShadow: '0px 6px 6px rgba(0, 0, 0, 0.26), 0px 10px 20px rgba(0, 0, 0, 0.19)',
        top: '50%',
        left: '50%',
        textAlign: "center",
        transform: 'translate(-50%, -50%)',
    }

}));


const ConfirmPasswordForm = () => {
    const classes = useStylesSignIn();
    const [values, setValues] = React.useState({
        code: '',
        password: '',
        passwordSecond: '',
    });
    const dispatch = useDispatch();
    const resetEmail = useSelector(state => state.userReducer.resetEmail)
    const loading = useSelector(state => state.userReducer.loading)
    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };
    const handleClick = () => {
        if (values.password === values.passwordSecond) {
            dispatch(confirmPassword(resetEmail, values.passwordSecond, values.code))
        }
    }


    return (
        <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h5">
                Восстановление пароля
            </Typography>

            <div className={classes.form}>
                <Field label="Код из почты"
                       name="code"
                       type='text'
                       values={values}
                       onChange={handleChange('code')}
                />

                <Field label="Новый пароль"
                       name="password"
                       type={values.showPassword ? 'text' : 'password'}
                       values={values}
                       onChange={handleChange('password')}
                       inputProps={{
                           endAdornment:
                               <IconButton
                                   aria-label="toggle password visibility"
                                   onClick={handleClickShowPassword}
                                   onMouseDown={handleMouseDownPassword}
                                   edge="end"
                               >
                                   {values.showPassword ? <VisibilityOutlined/> : <VisibilityOffOutlined/>}
                               </IconButton>

                       }}/>
                <Field label="Повторите пароль"
                       name="password"
                       error={values.password === values.passwordSecond? false: true}
                       helperText={values.password === values.passwordSecond? false: "Пароли не совпадают"}
                       type={values.showPassword ? 'text' : 'password'}
                       values={values}
                       onChange={handleChange('passwordSecond')}
                       inputProps={{
                           endAdornment:
                               <IconButton
                                   aria-label="toggle password visibility"
                                   onClick={handleClickShowPassword}
                                   onMouseDown={handleMouseDownPassword}
                                   edge="end"
                               >
                                   {values.showPassword ? <VisibilityOutlined/> : <VisibilityOffOutlined/>}
                               </IconButton>

                       }}/>

                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                    className={classes.submit}
                    disabled={loading}
                >
                    {loading ? <CircularProgress/> : 'Войти с новым паролем'}
                </Button>
                <div className={classes.secondText}>
                    <NavLink to="/" style={{textDecoration: 'none', fontWeight: 'normal'}}>Вернуться на экран
                        входа</NavLink>
                </div>
            </div>
        </Paper>
    );
};

export default ConfirmPasswordForm;
