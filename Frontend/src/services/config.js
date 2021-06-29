export const apiUrl = 'http://192.168.1.9:5000'

export const handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                // location.reload(true);
            }
            const error = data || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}