import axios from 'axios'
import { api } from '../urlConfig';
import store from "../store"
import { authConstants } from '../actions/constants';

const token = window.localStorage.getItem('token');

const axiosInstance = axios.create({
    baseURL : api,
    headers : {
        'authorization' : token ? `Bearer ${token}` : ''
    }
}); 

axiosInstance.interceptors.request.use((req) => {
    console.log("Came to interceptors, currently req is : ", req.url, req.headers.authorization)
    const { auth } = store.getState();
    if (auth.token) {
        req.headers.authorization = `Bearer ${auth.token}`;
    }
    console.log("Came to interceptors, modified req is : ", req.url, req.headers.authorization)
    return req;
})

axiosInstance.interceptors.response.use(
    res => { return res },
    error => {
        console.log("Error from axios interceptors in Frontend : ", error.response)
        const status = error.response ? error.response.status : 500;
        if (status && status === 500) {
            localStorage.clear()
            store.dispatch({ type : authConstants.LOGOUT_SUCCESS })
        } 
        return Promise.reject(error)
    }
)

export default axiosInstance; 