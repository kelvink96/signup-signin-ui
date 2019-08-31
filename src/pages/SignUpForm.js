import React, {Component} from "react";

class SignUpForm extends Component {
    render() {
        return (
            <div className="Form-content">
                <form action="" className="Form-fields">
                    <div className="Form-field">
                        <label htmlFor="fullName">full name</label><br/>
                        <input type="text" className="Form-full-name" id="fullName"
                               placeholder="enter your full name"/>
                    </div>
                    <div className="Form-field">
                        <label htmlFor="password">password</label><br/>
                        <input type="password" className="Form-full-name" id="password"
                               placeholder="password"/>
                    </div>
                    <div className="Form-field">
                        <label htmlFor="email">e-mail</label><br/>
                        <input type="email" className="Form-full-name" id="email"
                               placeholder="enter your email"/>
                    </div>
                    <div className="Form-field">
                        <label htmlFor="termsAndConditions"><br/>
                            <input type="checkbox" id="termsAndConditions"/> i agree with all statements
                            in <a
                                href="" className="Terms-link">terms and conditions of service</a>
                        </label>
                    </div>
                    <div className="Form-field Signup-btn-container">
                        <br/>
                        <button className="Signup-btn">sign up</button>
                        <a href="" className="alreadyAMemberLink">already a member?</a>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUpForm;