import React, {useState} from 'react';
import {Button, IconButton, makeStyles, Typography} from "@material-ui/core";
import Paper from "../../ui/components/Paper";
import {VisibilityOffOutlined, VisibilityOutlined} from '@material-ui/icons';
import Field from "../../ui/components/Field";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/actions/UserActions";
import {NavLink} from "react-router-dom";
import {CircularProgress} from "@material-ui/core";
import emailValidate from "../../helpers/validation/emailValidation";

export const useStylesSignIn = makeStyles((theme) => ({

    submit: {
        marginTop: 23,
        textTransform: "uppercase",
    },
    form: {
        width: 326,
        margin: '13px 32px 72px 32px',
    },
    title: {
        fontSize: 22,
        fontWeight: 600,
        marginTop: 57,
    },
    secondText: {
        textAlign: 'center',
        marginTop: 4,
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


const SignInForm = () => {
    const classes = useStylesSignIn();
    const dispatch = useDispatch();

    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
        emailValid: ''
    });

    const loading = useSelector(state => state.userReducer.loading)
    const error = useSelector(state => state.userReducer.error)

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClick = () => {
        setValues({...values, emailValid: emailValidate(values.email)});
        if (emailValidate(values.email) === '' && values.password !== '') {
            dispatch(login(values.email, values.password))
            setValues({...values, password: ''})
        }
    };

    return (
        <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h5">
                Вход в систему
            </Typography>

            <form className={classes.form}>
                {}
                <Field label="Логин или e-mail" name="email" values={values}
                       autoFocus
                       error={values.emailValid === ''? false : true}
                       helperText={values.emailValid === ''? false : values.emailValid}
                       onChange={handleChange('email')}/>
                <Field label="Пароль"
                       name="password"
                       error={error ? true : false}
                       helperText={error ? error : false}
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

                <div className={classes.secondText}>
                    Забыли пароль? <NavLink to="/reset" style={{
                    textDecoration: 'none',
                    fontWeight: 'normal'
                }}>Восстановить</NavLink>
                </div>
                <Button
                    disabled={loading}
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                    className={classes.submit}
                >
                    {loading ? <CircularProgress/> : 'Войти'}
                </Button>
            </form>
        </Paper>
    );
};

export default SignInForm;
