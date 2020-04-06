import axios from 'axios';
import Qs from 'qs';

const instance = axios.create({
    baseURL: process.env.API_END_POINT
});
instance.defaults.timeout = process.env.API_TIMEOUT;

const Api = {
    cancelableGet: () => {},
    get: (url, params, format = 'brackets') => instance.get(url, {
        params,
        paramsSerializer: (params) => {
            return Qs.stringify(params, {
                arrayFormat: format
            });
        },        
    })
    .then(response => Promise.resolve(response))
    .catch(error => Promise.reject(error.response)),
};

export default Api;