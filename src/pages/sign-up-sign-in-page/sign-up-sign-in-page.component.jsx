import React from 'react';
import'./sign-up-sign-in-page.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
const SignUpSignInPage = () => (
    <div className="sign-up-sign-in">
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
);

export default SignUpSignInPage;