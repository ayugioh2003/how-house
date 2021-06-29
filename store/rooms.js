import RoomService from '@/Services/RoomService.js'

export const state = () => ({
  rooms: [],
  room: {},
  checkTimeRange: [],
  checkRoom: {},
  bookRoomResult: {},
})

export const getters = {}

export const mutations = {
  SET_ROOMS(state, rooms) {
    state.rooms = rooms
  },
  SET_ROOM(state, room) {
    state.room = room
  },
  SET_CHECK_TIME_RANGE(state, checkTimeRange) {
    state.checkTimeRange = checkTimeRange
  },
  SET_CHECK_ROOM(state, checkRoom) {
    state.checkRoom = checkRoom
  },
  SET_BOOK_ROOM_RESULT(state, bookRoomResult) {
    state.bookRoomResult = bookRoomResult
  },
}

export const actions = {
  fetchRooms({ commit }) {
    return RoomService.getRooms().then((res) => {
      if (res.data.success) {
        commit('SET_ROOMS', res.data.items)
        return res.data.items
      }
    })
  },
  fetchRoom({ commit }, id) {
    return RoomService.getRoom(id).then((res) => {
      commit('SET_ROOM', res.data)
      return res.data
    })
  },
  bookRoom(context, { id, ...payload }) {
    return RoomService.bookRoom(id, {
      name: payload.name,
      tel: payload.tel || payload.phone,
      date: payload.date,
    })
  },
  deleteBookings(context) {
    return RoomService.deleteBookings()
  },
}
