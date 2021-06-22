import React from 'react';
import {Button, makeStyles, Typography} from "@material-ui/core";
import Paper from "../../ui/components/Paper";
import Field from "../../ui/components/Field";
import {NavLink} from "react-router-dom";
import emailValidate from "../../helpers/validation/emailValidation";
import {useDispatch} from "react-redux";
import {resetPassword} from "../../redux/actions/UserActions";


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


const ResetPasswordForm = ({setOpenModal}) => {
    const classes = useStylesSignIn();
    const dispatch = useDispatch();
    const [values, setValues] = React.useState({
        email: '',
        emailValid: ''
    });
    const handleClick = () => {
        setValues({...values, emailValid: emailValidate(values.email)});
        if (emailValidate(values.email) === '') {
            dispatch(resetPassword(values.email))
            setOpenModal(true)
        }
    };
    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };


    return (
        <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h5">
                Восстановление пароля
            </Typography>

            <div className={classes.form}>
                <Field label="E-mail"
                       name="email"
                       values={values}
                       error={values.emailValid === ''? false : true}
                       helperText={values.emailValid === ''? false : values.emailValid}
                       onChange={handleChange('email')}/>

                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                    className={classes.submit}
                >
                    Восстановить
                </Button>
                <div className={classes.secondText}>
                    <NavLink to="/" style={{textDecoration: 'none', fontWeight: 'normal'}}>Вернуться на экран
                        входа</NavLink>
                </div>
            </div>
        </Paper>
    );
};

export default ResetPasswordForm;
