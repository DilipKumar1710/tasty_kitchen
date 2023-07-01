import { Component } from "react";
import { Redirect } from "react-router-dom";
import {BsFillEyeFill, BsFillEyeSlashFill} from 'react-icons/bs';
import Cookies from 'js-cookie';
import './style.css';

class LoginForm extends Component{

    state = {
        username:'',
        password:'',
        isError : false,
        isPasswordChecked: false,
        errorMsg:'',
    }

    onEnterUserName = (event) => {
        this.setState({username:event.target.value})
    } 

    onEnterUserPassword = (event) => {
        this.setState({password:event.target.value})
    }

    onClickPasswordChecker = () => {
        this.setState(prevState => ({isPasswordChecked:!prevState.isPasswordChecked}))
    }

    usernameInputDetails = () => {
        const {username} = this.state
        return(
            <>
                <label htmlFor="username" className="label">username</label>
                <input 
                type="text" 
                id="username" 
                className="username-input-box"
                placeholder="Username: rahul" 
                value={username} 
                onChange={this.onEnterUserName}/>
            </>
        )
    }

    passwordInputDetails = () => {
        const {isPasswordChecked, password} = this.state;

        const changeType = isPasswordChecked ? 'text' : 'password';

        const changeText = isPasswordChecked ? 'Hide' : 'Show';

        const changeIcon = isPasswordChecked ? <BsFillEyeSlashFill/> : <BsFillEyeFill/> ;

        return(
            <>
                <label htmlFor="pwd" className="label">password</label>
                <div className="login-pwd-container">
                    <input 
                        type={changeType} 
                        id="pwd" 
                        className="pwd-input-box"
                        placeholder="Password: rahul@2021"
                        value={password} 
                        onChange={this.onEnterUserPassword}/>
                    <button type="button" onClick={this.onClickPasswordChecker} className="password-show-btn">{changeIcon}{changeText}</button>
                </div>
            </>
        )
    }

    submitSuccess = jwtToken => {
        const {history} = this.props
        Cookies.set('jwt_token', jwtToken, 'expires:30');
        history.replace('/');
    }

    submitFailure = errorMsg => {
        this.setState({
            isError: true,
            errorMsg
        })
    }

    onSubmitUserDetails = async event => {
        event.preventDefault();
        const {username, password} = this.state;
        const userDetails = {username, password};
        const url = "https://apis.ccbp.in/login";
        const options = {
            method: "POST",
            body : JSON.stringify(userDetails),
        }

        const response = await fetch(url, options)
        const data = await response.json();
        if (response.ok){
            this.submitSuccess(data.jwt_token)
        }
        else{
            this.submitFailure(data.error_msg)
        }
    }

    render(){
        const {isError, errorMsg} = this.state;
        const jwtToken = Cookies.get('jwt_token');

        if (jwtToken !== undefined){
            return <Redirect to ="/"/>
        }

        return(
            <div className="login-main-container">
                <img src="https://res.cloudinary.com/dg5zldvhw/image/upload/v1662028132/Rectangle_1456_1x_wvtlvm.jpg" alt="websiteImage" className="login-form-image"/>
                <form className="login-form" onSubmit={this.onSubmitUserDetails}>
                    <img src="https://res.cloudinary.com/dg5zldvhw/image/upload/v1662029431/Vector_1px_iths5s.png" alt="companyLogo" className="company-icon"/>
                    <h1 className="company-name">Tasty Kitchen</h1>
                    <h1 className="login-text">Login</h1>
                    <div className="inputs-containers">
                        {this.usernameInputDetails()}
                        {this.passwordInputDetails()}
                        {isError && <p className="error-msg">{errorMsg}</p>}
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;