import {requestHeader} from '../actions/requestHeader'

export var API_TOKEN = requestHeader().then(async (res) => await res.json());