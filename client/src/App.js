import React, { Component } from 'react';
import './App.css';
import Navigation from "./Components/Navigation";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
  
import { GoogleLoginButton, GithubLoginButton, FacebookLoginButton } from 'react-social-login-buttons';

class App extends Component {
  render() {

    return(
      <div className="row">
        <main className="main-content col-lg-12 col-md-12 col-sm-12 p-0">
          <Navigation/>
      <Form className="login-form">
        <h1>
          <span className="font-weight-bold text-center">BootCamp</span>HUB
        </h1>
        <h2 className="text-center">Welcome</h2>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email"/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password"/>
        </FormGroup>
        {/* App login BTN */}
        <Button className="btn-lg btn-dark btn-block">Login</Button>
        <div className="text-center pt-3">
          Or sigin with:
        </div>
        {/* Social Login BTN */}
        <GoogleLoginButton onClick={() => alert("Hello")} />
        <GithubLoginButton onClick={() => alert("Hello")} />
        <FacebookLoginButton classsName="mt-3 mb-3" />
        <div className="text-center">
          <a href="/create_account">Create an Account</a>
          <span className="p-2">|</span>
          <a href="/forgot_password">Forgot Password</a>
        </div>
      </Form>
      </main>
      </div>
    );
  }
}
export default App;
