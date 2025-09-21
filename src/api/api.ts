import axios from 'axios'

const coingeckoInstance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
    headers: {
        'x-cg-demo-api-key': 'CG-mhFQ5iMycGDy9yMXMvKA9DSM' // mover a archivo de entorno
    }
});

const pexelsInstance = axios.create({
    baseURL: 'https://api.pexels.com/videos/search',
    headers: {
        'Authorization': 'ZRefor155sHps3lM4FSpjXrJQwAAhX5wBYVfRaVSCWaTY22TP520QUmH' // mover a archivo de entorno
    }
});

export { coingeckoInstance, pexelsInstance };