import axios from 'axios'

// const localAPI = 'http://localhost:8000/api/'
const onlineAPI = 'https://cloud-demo-rmit-2020.appspot.com/api/'

export default () => {
    return axios.create({
        baseURL: onlineAPI,
        // baseURL: 'http://13.54.207.36:8000/iContinu',
        // baseURL: 'http://127.0.0.1:8000/iContinu',
        
        // timeout: 1000 * 5,
        // withCredentials: true,
        // xDomainRequest:true,
        // headers:{

        // },
        // credentials: 'same-origin',
        // crossDomains:true,
        // crossDomain:true
        // ,
        // httpAgent:'',
        // httpsAgent:''
    });
}