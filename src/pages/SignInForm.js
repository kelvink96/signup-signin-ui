import React, {Component} from "react";
import {Link} from "react-router-dom";

class SignInForm extends Component {
    render() {
        return (
            <div className="Form-content">
                <form action="" className="Form-fields">
                    <div className="Form-field">
                        <label htmlFor="email">e-mail</label><br/>
                        <input type="email" className="Form-full-name" id="email"
                               placeholder="enter your email"/>
                    </div>
                    <div className="Form-field">
                        <label htmlFor="password">password</label><br/>
                        <input type="password" className="Form-full-name" id="password"
                               placeholder="password"/>
                    </div>
                    <div className="Form-field Signup-btn-container">
                        <br/>
                        <button className="Signup-btn">sign in</button>
                        <Link to="/" className="alreadyAMemberLink">create an account?</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignInForm;