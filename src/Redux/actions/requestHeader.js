var headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

export const requestHeader = async() => {
console.log(process.env);
    return fetch(
        `${process.env.REACT_APP_API_URI}/auth/token-delivery`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                email: process.env.REACT_APP_ADMIN_EMAIL,
                password: process.env.REACT_APP_ADMIN_PASSWORD
            })
        }
    )
}
export const requestAccountHeader = (email, password) => {

    return fetch(
        `${process.env.REACT_APP_API_URI}/auth/account/token-delivery`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                email: email,
                password: password
            })
        }
    )
}