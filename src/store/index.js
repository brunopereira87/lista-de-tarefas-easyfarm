import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    openModal:false
  },
  mutations: {
    UPDATE_OPEN_MODAL(state, payload){
      state.openModal = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
