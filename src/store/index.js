import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    openModal:false,
    windowWidth: window.innerWidth
  },
  mutations: {
    UPDATE_OPEN_MODAL(state, payload){
      state.openModal = payload;
    },
    UPDATE_WINDOW_WIDTH(state, payload){
      state.windowWidth = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
