const request = (url: string, method: string = "POST", body?: object) => {
    return fetch(`${process.env.PORT}${url}`, {
        method,
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json'
        }
    });
}

export const userRegister = () => {
    return request('/register');
}

export const userLogin = () => {
    return request('/login');
}