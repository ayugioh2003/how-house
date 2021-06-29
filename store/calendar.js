import CalendarService from '../services/CalendarService.js'

export const state = () => ({
  calendar: [],
  calendars: [],
})

export const mutations = {
  SET_CALENDAR(state, calendar) {
    state.calendar = calendar
  },
  SET_CALENDARS(state, calendars) {
    state.calendars = calendars
  },
}

export const actions = {
  fetchCalendar({ commit }, payload) {
    return CalendarService.getCalendar(payload).then((res) => {
      commit('SET_CALENDAR', res.data)
      return res.data
    })
  },
  async fetchCalendars({ commit, dispatch }, payload) {
    const res1 = await dispatch('fetchCalendar', { offset: 0 })
    const res2 = await dispatch('fetchCalendar', { offset: 1000 })
    const results = [...res1.result.results, ...res2.result.results]

    commit('SET_CALENDARS', results)
    return results
  },
}
