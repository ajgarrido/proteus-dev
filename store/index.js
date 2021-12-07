export const state = () => ({
  countdown: true,
  screen: false,
  schedule: false,
  teaser: false,
  cancion: false
})

export const mutations = {
  setCountdown(state, payload) {
    state.countdown = payload
  },
  setScreen(state, payload) {
    state.screen = payload
  },
  setSchedule(state, payload) {
    state.schedule = payload
  },
  setTeaser(state, payload) {
    state.teaser = payload
  },
  setCancion(state, payload) {
    state.cancion = payload
  }
}

export const getters = {
  getCountdown: state => {
    return state.countdown
  },
  getScreen: state => {
    return state.screen
  },
  getSchedule: state => {
    return state.schedule
  },
  getTeaser: state => {
    return state.teaser
  },
  getCancion: state => {
    return state.cancion
  }
}

export const actions = {
 
}