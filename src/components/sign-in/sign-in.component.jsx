import React, {useState} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import { emailSignInStart,googleSignInStart } from '../../redux/user/user.actions';

const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const[userCredentials, setCredentials] = useState({ email: '', password: ''})
    const {email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        

        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const {value, name} = event.target;
        setCredentials({...userCredentials, [name]: value})
    }

    return (<div className="sign-in">
            <h2>Ya tengo una cuenta</h2>
            <span>Inicia sesión con tu email y contraseña</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="email" type="email" label='Email' value={email} handleChange={handleChange} required/>
                <FormInput name="password" label='Contraseña' type="password" value={password} handleChange={handleChange} required/>
                <div className="buttons">
                    <CustomButton type="submit">Iniciar sesión</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Entra con Google</CustomButton>
                </div>

            </form>
        </div>) 
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email,password}))
});

export default connect(null, mapDispatchToProps)(SignIn);