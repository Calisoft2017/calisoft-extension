import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex';
import VueClipboards from 'vue-clipboards';
import BKConnection from './plugins/BKConnection'

import App from './components/App';

Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(BKConnection);
Vue.use(VueClipboards);

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