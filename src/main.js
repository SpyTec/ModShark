import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'
import moment from 'moment';
import sanitizeHTML from 'sanitize-html';

Vue.prototype.$sanitize = sanitizeHTML;
Vue.config.productionTip = false;

Vue.prototype.moment = moment;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

