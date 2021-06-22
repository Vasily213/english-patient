import React from 'react';
import {
    makeStyles,
} from "@material-ui/core";
import AuthPage from "../components/auth/AuthPage";
import ConfirmPasswordForm from "../components/auth/ConfirmPasswordForm";
import confirmPassword from '../assets/img/confirm-password.svg'


export const useStyles = makeStyles((theme) => ({


}));


const ConfirmPassword = () => {


    return (
        <div>
            <AuthPage img={confirmPassword}>
                <ConfirmPasswordForm/>
            </AuthPage>
        </div>

    );
};

export default ConfirmPassword;
