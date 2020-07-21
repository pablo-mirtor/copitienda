import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils'
class SignIn extends React.Component{
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        }
        catch(error){
            console.log(error);
        }
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
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Entra con Google</CustomButton>
                </div>

            </form>
        </div>) 
    }
}

export default SignIn;