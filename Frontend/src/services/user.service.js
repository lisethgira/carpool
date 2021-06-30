import { apiUrl, handleResponse } from './config'

async function update(d) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': JSON.parse(localStorage.getItem(`token`)).token
        },
        body: JSON.stringify(d)
    };

    return fetch(`${apiUrl}/api/user/actualizarUsuario`, requestOptions)
        .then(handleResponse)
        .then(data => data);
}

export const userService = {
    update
}