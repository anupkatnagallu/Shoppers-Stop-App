import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://shoppers-stop-cd32a-default-rtdb.firebaseio.com/'
});

export default axiosInstance;