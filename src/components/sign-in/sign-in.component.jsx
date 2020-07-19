import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils'
class SignIn extends React.Component{
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render(){
        return (<div className="sign-in">
            <h2>Ya tengo una cuenta</h2>
            <span>Inicia sesión con tu email y contraseña</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput name="email" type="email" label='Email' value={this.state.email} handleChange={this.handleChange} required/>
                <FormInput name="password" label='Contraseña' type="password" value={this.state.password} handleChange={this.handleChange} required/>
                <div className="buttons">
                    <CustomButton type="submit">Iniciar sesión</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Entra con Google</CustomButton>
                </div>

            </form>
        </div>) 
    }
}

export default SignIn;