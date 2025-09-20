import axios from './api'
// import data from './data.json'

type CoinsProps = {
    vs_currency: string,
    per_page: number
}

const getCoins = async (params: CoinsProps) => {
    try {
        const data = await axios.get('/coins/markets', { params })
        return data.data

        // return data
    } catch (error){
      console.error(error)
    }
}

export { getCoins }