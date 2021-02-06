import env from "react-dotenv";

export const requestHeader = () => {
    return fetch(
        `${env.API_URI}/auth/token-delivery`,
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