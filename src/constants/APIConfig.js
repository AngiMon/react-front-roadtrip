import {requestHeader} from '../actions/requestHeader'

export const API_URI = "http://localhost:8080"
export var API_TOKEN = requestHeader().then(async (res) => await res.json());