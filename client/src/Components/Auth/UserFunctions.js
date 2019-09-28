import axios from 'axios';

export const register = newUser => {
    return axios
    .post('api/users/register', {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password,
        password2: newUser.password2
    })
    .then(res => {
        console.log('Registered!');
    });
}
export const login = userData => {
    return axios
    .post('api/users/login', {
        email: userData.email,
        password:userData.password
    })
    .then(res => {
        localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch(err => {
        console.log(err);
    });
}

export const profileInfo = user => {
    return axios
    .put('api/users/profile', {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email
    })
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err);
    })
}

