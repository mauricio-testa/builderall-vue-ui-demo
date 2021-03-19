import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const sidebarStateKey = 'bui_store_sidebar_state'

export default new Vuex.Store({
  state: {
    sidebarState: localStorage.getItem(sidebarStateKey) || 'expanded',
    user: {
      name: 'Mauricio',
      email: 'mail@builderall.com',
      gravatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      locale: 'pt_BR'
    }
  },
  mutations: {
    toggleSidebar (state, payload) {
      localStorage.setItem(sidebarStateKey, payload)
      state.sidebarState = payload
    }
  }
})
