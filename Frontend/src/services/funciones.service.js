import { apiUrl, handleResponse } from './config'

async function create(d) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': JSON.parse(localStorage.getItem(`token`)).token
        },
        body: JSON.stringify(d)
    };

    return fetch(`${apiUrl}/api/user/nuevaReserva`, requestOptions)
        .then(handleResponse)
        .then(data => data);
}

async function update(d, id) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': JSON.parse(localStorage.getItem(`token`)).token
        },
        body: JSON.stringify(d)
    };

    return fetch(`${apiUrl}/api/user/reservaServicio/${id}`, requestOptions)
        .then(handleResponse)
        .then(data => data);
}

async function cancel(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': JSON.parse(localStorage.getItem(`token`)).token
        }
    };

    return fetch(`${apiUrl}/api/user/reservaServicio/${id}`, requestOptions)
        .then(handleResponse)
        .then(data => data);
}

async function getData(id) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': JSON.parse(localStorage.getItem(`token`)).token
        }
    };

    return fetch(`${apiUrl}/api/user/reservaServicio/${id}`, requestOptions)
        .then(handleResponse)
        .then(data => data);
}

export const funcionesService = {
    create,
    update,
    cancel,
    getData
}