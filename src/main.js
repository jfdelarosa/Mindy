import Vue from 'vue';
import Router from 'vue-router';
import App from './App';
import Routes from './routes';

Vue.use(Router);

const router = new Router({
  routes: Routes
});

const vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
});