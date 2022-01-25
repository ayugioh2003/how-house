import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.PAYMENT_URL + '/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization: 'Bearer ' + process.env.TOKEN,
  },
})

export default {
  getOrders() {
    return apiClient.get('/orders')
  },
  getOrder(id) {
    return apiClient.get('/orders/' + id)
  },
  createOrder(data) {
    // orderId, id, name, tel, date[]
    return apiClient.post('/orders', data)
  },
}
