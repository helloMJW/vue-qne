import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)
try {
  if (localStorage.city) {
    state.city = localStorage.city
  }
} catch (e) {}

export default new Vuex.Store({
  state,
  mutations,
  getters: {
    coubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
