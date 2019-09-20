import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Link
} from "react-router-dom";
import logo from './logo.svg'
import './App.css';
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="App-aside">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className="App-form">
                    <div className="Page-switcher">
                        <NavLink exact to="/" activeClassName="active" className="Page-switcher-link">Sign Up</NavLink>
                        <NavLink to="/sign-in" activeClassName="active" className="Page-switcher-link">Sign In</NavLink>
                    </div>
                    <div className="Form-title">
                        <NavLink to="/sign-in" activeClassName="active" className="Form-title-link">sign in</NavLink>
                        <small> or</small>&nbsp;
                        <NavLink exact to="/" activeClassName="active" className="Form-title-link">sign up</NavLink>
                    </div>
                    <Route exact path="/" component={SignUpForm}>
                    </Route>
                    <Route path="/sign-in" component={SignInForm}>
                    </Route>
                </div>
            </div>
        </Router>
    );
}

export default App;
