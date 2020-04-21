import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    app,
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})

export default store
