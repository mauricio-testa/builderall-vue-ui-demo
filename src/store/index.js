import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const sidebarStateKey = "bui_store_sidebar_state";

export default new Vuex.Store({
  state: {
    sidebarState: localStorage.getItem(sidebarStateKey) || "expanded"
  },
  mutations: {
    toggleSidebar(state, payload) {
      localStorage.setItem(sidebarStateKey, payload);
      state.sidebarState = payload
    }
  },
})