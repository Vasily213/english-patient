import React from 'react';

import AuthPage from "../components/auth/AuthPage";
import SignInForm from "../components/auth/SignInForm";
import signInImage from '../assets/img/sign-in.svg'


const SignIn = () => {

    return (
        <div>
            <AuthPage img={signInImage}>
                <SignInForm/>
            </AuthPage>
        </div>

    );
};

export default SignIn;
