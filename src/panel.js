import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex';
import BKConnection from './plugins/BKConnection'

import App from './components/App';

Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(BKConnection);

new Vue({
    el: '#app',
    render: h => h(App),
    store: new Vuex.Store({
        state: {
            form: null
        },
        mutations: {
            SELECT_FORM(state, payload) {
                state.form = payload.form
            }
        }
    })
})