import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
//  import { registerUser } from './UserFunctions';
import  { registerUser }  from "../../actions/authActions";
import { connect } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./Register.css";


class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidUpdate(nextProps) {
    if (nextProps.errors) {
      // this.setState({
      //   errors: nextProps.errors
      // });
    }
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/Dashboard");
    }
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }
    console.log(newUser);

    this.props.registerUser(newUser, this.props.history);
    // registerUser(newUser).then(res => {
    //   this.props.history
    // })
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
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="card reg-card">
                  <div className="card-title">
                    <h4 style={{ textAlign: "center", padding: "20px" }}>
                      <b>Register</b>
                    </h4>
                  </div>
                  <div className="card-body">
                    <p className="grey-text text-darken-1">
                      Already have an account? <Link to="/login">Log in</Link>
                    </p>

                  <form noValidate onSubmit={this.handleSubmit}>

                    <div className="form-group col mb-3">
                      <label htmlFor="first_name">First Name</label>
                      <span className="red-text">{errors.first_name}</span>
                      <input 
                        onChange={this.handleChange}
                        value={this.state.first_name}
                        error={errors.first_name}
                        id="first_name"
                        type="text"
                        className={classnames("form-control", {
                          invalid: errors.first_name
                        })}
                      />
                    </div>

                    <div className="form-group col mb-3">
                      <label htmlFor="last_name">Last Name</label>
                      <span className="red-text">{errors.last_name}</span>
                      <input 
                        onChange={this.handleChange}
                        value={this.state.last_name}
                        error={errors.last_name}
                        id="last_name"
                        type="text"
                        className={classnames("form-control", {
                          invalid: errors.last_name
                        })}
                      />
                    </div>
                    <div className="form-group col mb-3">
                      <label htmlFor="email">Email</label>
                      <span className="red-text">{errors.email}</span>
                      <input 
                        onChange={this.handleChange}
                        value={this.state.email}
                        error={errors.email}
                        id="email"
                        type="email"
                        className={classnames("form-control", {
                          invalid: errors.email
                        })}
                      />
                    </div>

                    <div className="form-group col mb-3">
                      <label htmlFor="password">Password</label>
                      <span className="red-text">{errors.password}</span>
                      <input 
                        onChange={this.handleChange}
                        value={this.state.password}
                        error={errors.password}
                        id="password"
                        type="password"
                        className={classnames("form-control", {
                          invalid: errors.password
                        })}
                      />
                    </div>

                    <div className="form-group col mb-3">
                      <label htmlFor="password2">Confirm Password</label>
                      <span className="red-text">{errors.password2}</span>
                      <input 
                        onChange={this.handleChange}
                        value={this.state.password2}
                        error={errors.password2}
                        id="password2"
                        type="password"
                        className={classnames("form-control", {
                          invalid: errors.password2
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
                        Register
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
RegisterForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(RegisterForm));

// RegisterForm.propTypes = {
//   registerUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };
// export default RegisterForm;

// // const mapStateToProps = state => ({
// //   auth: state.auth,
// //   errors: state.errors
// // });
// // export default connect(
// //   mapStateToProps,
// //   { registerUser }
// // )(withRouter(Register))