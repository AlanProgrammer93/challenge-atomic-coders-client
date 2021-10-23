import axios from 'axios';

const clientAxios = axios.create({
    //baseURL: 'http://localhost:8000/api' local
    baseURL: 'https://appointmentsatomic.herokuapp.com/api'
});

export default clientAxios;