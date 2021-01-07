import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-react-e5917.firebaseio.com'
});

export default instance;