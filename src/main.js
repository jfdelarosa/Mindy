import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
import App from './App';
import Routes from './routes';

Vue.use(Router);
Vue.use(Resource);
Vue.http.options.emulateJSON = true;
Vue.http.options.root = 'http://5a1123312437c900125827c7.mockapi.io/api/v1/';
const router = new Router({
  routes: Routes
});

const vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
});