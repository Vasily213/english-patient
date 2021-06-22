import React from 'react';
import {
    makeStyles, Modal, Typography,
} from "@material-ui/core";
import AuthPage from "../components/auth/AuthPage";
import ResetPasswordForm from "../components/auth/ResetPasswordForm";
import resetPassword from '../assets/img/reset-password.svg'

import NotificationModal from "../ui/components/NotificationModal";
import {NavLink} from "react-router-dom";


export const useStyles = makeStyles((theme) => ({
    textContent: {
        fontSize: 18,
        fontWeight: 600,
        margin: '22px 27px 0 27px'
    },
    secondContent: {
        fontWeight: 600,
        margin: '23px 51px 30px 51px',
        textDecoration: "none",
        textTransform: "uppercase",
    }

}));
//TODO: Переделать Modal в Dialog!!
const ResetPassword = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    return (
        <div>
            <AuthPage img={resetPassword}>
                <ResetPasswordForm setOpenModal={setOpen}/>
            </AuthPage>

           <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <NotificationModal>
                    <>
                        <Typography variant='h5' className={classes.textContent}>На ваш E-mail выслано письмо <br/> с восстановением пароля!</Typography>
                        <NavLink to="/confirm" className={classes.secondContent}>Я получил код</NavLink>
                    </>
                </NotificationModal>
            </Modal>
        </div>

    );
};

export default ResetPassword;
