import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
    headers: {
        'x-cg-demo-api-key': 'CG-mhFQ5iMycGDy9yMXMvKA9DSM' // mover a archivo de entorno
    }
});

export default instance;