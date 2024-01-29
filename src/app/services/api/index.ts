console.log(process.env.NEXT_PUBLIC_API_URL)

const request = (url: string, method: string = "POST", body?: object) => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        method,
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json'
        }
    });
}

export const userRegister = (name: string, email: string, password: string) => {
    return request(`/register`, "POST", {name, email, password});
}

export const userLogin = (email: string, password: string) => {
    return request('/login', "POST", {email, password});
}