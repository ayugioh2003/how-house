import RoomService from '@/services/RoomService.js'

export const state = () => ({
  rooms: [],
  room: {},
  checkTimeRange: [],
  checkRoom: {},
})

export const mutations = {
  SET_ROOMS(state, rooms) {
    state.rooms = rooms
  },
  SET_ROOM(state, room) {
    state.room = room
  },
  checkTimeRange(state, checkTimeRange) {
    state.checkTimeRange = checkTimeRange
  },
  checkRoom(state, checkRoom) {
    state.checkRoom = checkRoom
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
}
