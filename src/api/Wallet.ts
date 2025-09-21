import axios from './api'
import data from './data.json'
import { CoinsProps } from '../types'

const getCoins = async (params: CoinsProps) => {
    try {
        // const data = await axios.get('/coins/markets', { params })
        // return data.data

        return data
    } catch (error){
      console.error(error)
    }
}

export { getCoins }