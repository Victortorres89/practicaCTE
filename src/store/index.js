import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'; // es un plugin para que los datos no se borren

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()], 
})
