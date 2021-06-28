import axios from 'axios'

const apiClient = axios.create({
  // baseURL: 'https://data.ntpc.gov.tw/api/datasets/data',
  baseURL: 'https://data.taipei/api/v1/dataset',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization: 'Bearer ' + process.env.TOKEN,
  },
})

export default {
  getCalendar({
    id = 'b0011e96-3fc3-43ec-8bf5-07fb46dd22bb',
    scope = 'resourceAquire',
    limit = 1000,
    offset = 0,
  }) {
    const params = { scope, limit, offset }
    return apiClient.get(`/${id}`, { params })
  },
}
