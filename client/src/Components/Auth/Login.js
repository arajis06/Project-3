import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login } from './UserFunctions';
// import axios from 'axios';
import "./Login.css";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    }
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
    login(userData).then(res => {
      if (res) {
        this.props.history.push('/')
      }
    })
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container login-container">
        <div className="row">
          <div className="col-sm-12 ">
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
                <hr />
              </div>
              <div className="card-body">
                <p className="grey-text text-darken-1">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="col mb-3">
                    <label htmlFor="email">Email</label>
                    <input className="form-control"
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                    />
                  </div>

                  <div className="col mb-3">
                    <label htmlFor="password">Password</label>
                    <input className="form-control"
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                    />
                  </div>

                  {/* <div className="col mb-3">
                    <label htmlFor="password2">Confirm Password</label>
                    <input className="form-control"
                      onChange={this.onChange}
                      value={this.state.password2}
                      error={errors.password2}
                      id="password2"
                      type="password"
                    />
                  </div> */}
                </form>
              </div>
              <hr />

              <div className="col-sm-12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    marginBottom: "2rem",
                    color: "white"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Sign in
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Login;