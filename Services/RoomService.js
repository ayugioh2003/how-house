import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.HOTEL_API,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + process.env.TOKEN,
  },
})

export default {
  getRooms() {
    return apiClient.get('/rooms')
  },
  // getRoom(id) {
  //   return apiClient.get('/room/' + id)
  // },
  // bookRoom(id, data) {
  //   // name, tel, date[]
  //   return apiClient.post('/room/' + id, data)
  // },
  // deleteBookings() {
  //   return apiClient.delete('/rooms')
  // },
}
