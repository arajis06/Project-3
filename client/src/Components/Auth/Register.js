import React, { Component } from "react";
import { Link } from "react-router-dom";
import { register } from './UserFunctions';
import "./Register.css";


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }
    console.log(newUser);

    register(newUser).then(res => {
      this.props.history.push('/login')
    })
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="reg-container">
        <div className="row">
          <div className="col-sm-12 ">
            <Link to="/" className="btn-flat waves-effect">
              <i className="fa fa-arrow-left"></i> Back to
              home
            </Link>
          </div>
          <div className="col-sm-12">
            <div className="card reg-card">
              <div className="card-title">
                <h4 style={{ textAlign: "center", padding: "20px" }}>
                  <b>Register</b>
                </h4>
                <hr />
              </div>
              <div className="card-body">
                <p className="grey-text text-darken-1">
                  Already have an account? <Link to="/login">Log in</Link>
                </p>
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="col mb-3">
                    <label htmlFor="email">Full Name</label>
                    <input className="form-control"
                      onChange={this.onChange}
                      value={this.state.name}
                      error={errors.name}
                      id="name"
                      type="text"
                    />
                  </div>

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

                  <div className="col mb-3">
                    <label htmlFor="password2">Confirm Password</label>
                    <input className="form-control"
                      onChange={this.onChange}
                      value={this.state.password2}
                      error={errors.password2}
                      id="password2"
                      type="password"
                    />
                  </div>

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
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;