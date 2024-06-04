import axios from 'axios'

const API_URL = 'http://127.0.0.1:8080/api/v1'

const techJobOffers = axios.create({
  baseURL: API_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
})

techJobOffers.interceptors.request.use(request => {
  console.log('Enviando solicitud:', request)
  return request
}, error => {
  console.error('Error en la solicitud:', error)
  return Promise.reject(error)
})

export default techJobOffers
