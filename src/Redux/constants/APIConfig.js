import {requestHeader} from '../actions/requestHeader'

export const API_TOKEN = () => {
    return requestHeader().then(async res => await res.json());
}

//TODO delete this file and stock token in the cookie