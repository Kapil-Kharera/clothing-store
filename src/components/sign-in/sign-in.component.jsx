import React from "react";
import './sign-in.style.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name] : value})
    }

    render() {
        return <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput 
                name="email" 
                type="email" 
                value={this.state.email} 
                handleChange={this.handleChange}
                label="email"
                required />
    

                <FormInput 
                name="password" 
                type="password" 
                value={this.state.password}
                handleChange={this.handleChange}
                label="password" 
                required />
           

                <CustomButton type="submit">SIGN IN</CustomButton>
            </form>
        </div>
    }
}

export default SignIn;