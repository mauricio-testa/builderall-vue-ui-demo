import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const BV_CONFIG = {
  BToast: {
    toaster: 'b-toaster-bottom-right',
    appendToast: true,
    noCloseButton: true
  }
}
const BUI_CONFIG = {
  rtl: document.documentElement.dir == 'rtl'
}

import { BootstrapVue } from 'bootstrap-vue';
import { BuilderallVueUi } from 'builderall-vue-ui';

import '@/sass/app.scss';
import 'builderall-vue-ui/dist/builderall-vue-ui.css';

Vue.use(BootstrapVue, BV_CONFIG);
Vue.use(BuilderallVueUi, BUI_CONFIG)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
