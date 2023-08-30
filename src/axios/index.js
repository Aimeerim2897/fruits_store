import axios from "axios"
const instanceAxios = axios.create({
  baseURL: 'https://64e4fcabc5556380291404a3.mockapi.io/api/v2/'
})

export default instanceAxios