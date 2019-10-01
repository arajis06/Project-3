import React, { Component } from "react";
import { Link } from "react-router-dom";
import { loginUser } from './UserFunctions';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import axios from 'axios';
import "./Login.css";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(userData);

    loginUser(userData).then(res => {
      if (res) {
        this.props.history.push('/profile')
      }
    })
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="login-container">
        <div className="row">
          <div className="col-md-12 ">
            <h2 className="login-welcome text-center">Welcome Back</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Link to="/" className="btn-flat waves-effect">
              <i className="fa fa-arrow-left"></i> Back to
              home
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="card login-card">
              <div className="card-title">
                <h4 style={{ textAlign: "center", padding: "20px" }}>
                  <b>Login</b>
                </h4>
              </div>
              <div className="card-body">
                <p className="grey-text text-darken-1">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>

                <form noValidate onSubmit={this.onSubmit}>

                  <div className="form-group col mb-3">
                    <label htmlFor="email">Email</label>
                    <span className="red-text">
                      {errors.email}
                      {errors.emailnotfound}
                    </span>
                    <input 
                      className="form-control"
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                    />
                  </div>

                  <div className="form-group col mb-3">
                    <label htmlFor="password">Password</label>
                    <span className="red-text">
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                    <input 
                      className="form-control"
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                    />
                  </div>

                    <button
                      type="submit"
                      className="btn btn-lg btn-default" 
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        marginTop: "0px"
                      }}
                  >
                      Login
                    </button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;