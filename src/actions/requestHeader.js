import * as APIConfig from '../constants/APIConfig';

export const requestHeader = () => {
    return fetch(
        `${APIConfig.API_URI}/auth/token-delivery`,
        {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email:"admin@toto.fr",
                password:"root"
            })
        }
    )
}