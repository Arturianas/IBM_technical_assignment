import axios from 'axios'

export const axiosInstance =axios.create({
    baseURL: "https://ficuss.herokuapp.com"
})