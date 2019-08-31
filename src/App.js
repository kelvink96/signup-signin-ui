import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import logo from './logo.svg'
import './App.css';
import SignUpForm from "./pages/SignUpForm";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="App-aside">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className="App-form">
                    <div className="Page-switcher">
                        <a href="#" className="Page-switcher-link active">Sign Up</a>
                        <a href="#" className="Page-switcher-link">Sign In</a>
                    </div>
                    <div className="Form-title">
                        <Link to="/sign-in" className="Form-title-link">sign in</Link> <small>or</small>&nbsp;
                        <a href="" className="Form-title-link active">sign up</a>
                    </div>
                    <Route exact path="/" component={SignUpForm}>
                    </Route>
                    <Route path="/sign-in">
                        <h1>Sign In</h1>
                    </Route>
                </div>
            </div>
        </Router>
    );
}

export default App;
