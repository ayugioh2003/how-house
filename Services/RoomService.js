import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://challenge.thef2e.com/api/thef2e2019/stage6', // process.env.HOTEL_API,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization:
      'Bearer ' +
      '0P8lKDSl58rZiPSCKjU5vVBHAHYmyEYASGm2362eKTPk81EDFjfddrMO7O7d', // process.env.TOKEN,
  },
})

export default {
  getRooms() {
    return apiClient.get('/rooms')
  },
  getRoom(id) {
    return apiClient.get('/room/' + id)
  },
  bookRoom(id, data) {
    // name, tel, date[]
    return apiClient.post('/room/' + id, data)
  },
  deleteBookings() {
    return apiClient.delete('/rooms')
  },
}
