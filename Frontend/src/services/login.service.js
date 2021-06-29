import { apiUrl, handleResponse } from './config'

async function login(d) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(d)
    };

    return fetch(`${apiUrl}/api/auth/login`, requestOptions)
        .then(handleResponse)
        .then(data => data);
}

const logout = () => {
    localStorage.removeItem('token');
}

export const loginService = {
    login,
    logout
}