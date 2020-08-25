import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signUpStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux';
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
        const {signUpStart} = this.props;
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("Las contraseñas no coinciden");
            return;
        }

        signUpStart({displayName, email, password});
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

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);