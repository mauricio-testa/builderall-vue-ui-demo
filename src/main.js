import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue } from 'bootstrap-vue';
import { BuilderallVueUi } from 'builderall-vue-ui';
import '@/sass/app.scss'; // (the same file as in step 2)
import 'builderall-vue-ui/dist/builderall-vue-ui.css';
Vue.use(BootstrapVue);
Vue.use(BuilderallVueUi);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
