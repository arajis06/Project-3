import React, { Component } from "react";
// import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
import { loginUser } from '../../actions/authActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import "./Login.css";


class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      nextProps.history.push("/dashboard"); // push user to dashboard when they login
      return null
    } 
    if (nextProps.errors) {
      return {
        errors: nextProps.errors
      }
    }
    return null
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container login-container">
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

                <form noValidate onSubmit={this.handleSubmit}>

                  <div className="form-group col mb-3">
                    <label htmlFor="email">Email</label>
                    <span className="red-text">
                      {errors.email}
                      {errors.emailnotfound}
                    </span>
                    <input 
                      onChange={this.handleChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      className={classnames("form-control", {
                        invalid: errors.email || errors.emailnotfound
                      })}
                    />
                  </div>

                  <div className="form-group col mb-3">
                    <label htmlFor="password">Password</label>
                    <span className="red-text">
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                    <input 
                      onChange={this.handleChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      className={classnames("form-control", {
                        invalid: errors.password || errors.passwordincorrect
                      })}
                    />
                  </div>

                    <button
                      type="submit"
                      className="btn btn-lg btn-light-green"
                      style={{
                        color: "white",
                        fontWeight: "bold"
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

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(LoginForm);