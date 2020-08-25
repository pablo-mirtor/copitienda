import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("Las contraseñas no coinciden");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch(error){
                console.log(error);
        }

        this.setState({displayPassword: '', email: '', password: '', confirmPassword: ''});
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render(){
        return((<div className="sign-up">
        <h2>No tengo una cuenta</h2>
        <span>Introduce tus datos</span>
        <form onSubmit={this.handleSubmit}>
            <FormInput name="displayName" type="text" label='Nombre' value={this.state.displayName} handleChange={this.handleChange} required/>
            <FormInput name="email" type="email" label='Email' value={this.state.email} handleChange={this.handleChange} required/>
            <FormInput name="password" label='Contraseña' type="password" value={this.state.password} handleChange={this.handleChange} required/>
            <FormInput name="confirmPassword" label='Confirmar contraseña' type="password" value={this.state.confirmPassword} handleChange={this.handleChange} required/>
            <CustomButton type="submit">Registrar</CustomButton>
        </form>
    </div>) )
    }

}

export default SignUp;