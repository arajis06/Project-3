// import axios from 'axios';
  
  
// export const register = newUser => {
//     return axios
//     .post('api/users/register', newUser)
//     .then(res => {
//         console.log('Registered!');
//     });
// }
// export const login = userData => {
//     return axios
//     .post('api/users/login', {
//         email: userData.email,
//         password:userData.password
//     })
//     .then(res => {
//         localStorage.setItem('usertoken', res.data)
//         return res.data
//     })
//     .catch(err => {
//         console.log(err);
//     });
// }

// export const profile = user => {
//     return axios
//     .put('api/users/account', {
//         first_name: user.first_name,
//         last_name: user.last_name,
//         email: user.email
//     })
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }
// import axios from "axios";
// import setAuthToken from "../../utils/setAuthToken";
// import jwt_decode from "jwt-decode";
// import {
//   GET_ERRORS,
//   SET_CURRENT_USER,
//   USER_LOADING
// } from "../../actions/types";

// // Register User
// export const registerUser = (userData, history) => dispatch => {
//   axios
//     .post("/api/users/register", userData)
//     .then(res => history.push("/login")) // re-direct to login on successful register
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };
// // Login - get user token
// export const loginUser = userData => dispatch => {
//   axios
//     .post("/api/users/login", userData)
//     .then(res => {
//       // Save to localStorage
// // Set token to localStorage
//       const { token } = res.data;
//       localStorage.setItem("jwtToken", JSON.stringify(token));
//       // Set token to Auth header
//       setAuthToken(token);
//       // Decode token to get user data
//       const decoded = jwt_decode(token);
//       // Set current user
//       dispatch(setCurrentUser(decoded));
//     })
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };
// // Set logged in user
// export const setCurrentUser = decoded => {
//   return {
//     type: SET_CURRENT_USER,
//     payload: decoded
//   };
// };
// // User loading
// export const setUserLoading = () => {
//   return {
//     type: USER_LOADING
//   };
// };
// // Log user out
// export const logoutUser = () => dispatch => {
//   // Remove token from local storage
//   localStorage.removeItem("jwtToken");
//   // Remove auth header for future requests
//   setAuthToken(false);
//   // Set current user to empty object {} which will set isAuthenticated to false
//   dispatch(setCurrentUser({}));
// };
