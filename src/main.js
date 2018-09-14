import 'jquery';
import 'popper.js';
import 'bootstrap';

import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'

import { routes } from './routes'
import actions from './store/actions'
import info from './store/modules/info'
import stocks from './store/modules/stocks'
import portfolio from './store/modules/portfolio'

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
    actions,
    modules: {
        stocks,
        portfolio,
        info
    }
})

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
