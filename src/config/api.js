import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Certifique-se de que esta é a URL correta para o seu backend
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;
