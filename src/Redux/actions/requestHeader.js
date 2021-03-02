import env from "react-dotenv";

var headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

export const requestHeader = async() => {

    return fetch(
        `${env.API_URI}/auth/token-delivery`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                email: env.ADMIN_EMAIL,
                password: env.ADMIN_PASSWORD
            })
        }
    )
}
export const requestAccountHeader = (email, password) => {

    return fetch(
        `${env.API_URI}/auth/account/token-delivery`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                email: email,
                password: password
            })
        }
    )
}