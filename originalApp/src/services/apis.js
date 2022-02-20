// endPoint created
import axios from 'axios'

// const axios = require('axios')

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export default api;