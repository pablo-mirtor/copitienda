import React, {useState} from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signUpStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux';
const SignUp = ({signUpStart}) => {
    

    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

       
        if(password !== confirmPassword){
            alert("Las contraseñas no coinciden");
            return;
        }

        signUpStart({displayName, email, password});
    }

    const handleChange = event => {
        const {value, name} = event.target;
        setUserCredentials({...userCredentials, [name]: value});
    }

    return((<div className="sign-up">
        <h2>No tengo una cuenta</h2>
        <span>Introduce tus datos</span>
        <form onSubmit={handleSubmit}>
            <FormInput name="displayName" type="text" label='Nombre' value={displayName} handleChange={handleChange} required/>
            <FormInput name="email" type="email" label='Email' value={email} handleChange={handleChange} required/>
            <FormInput name="password" label='Contraseña' type="password" value={password} handleChange={handleChange} required/>
            <FormInput name="confirmPassword" label='Confirmar contraseña' type="password" value={confirmPassword} handleChange={handleChange} required/>
            <CustomButton type="submit">Registrar</CustomButton>
        </form>
    </div>) )

}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);