import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './components/App';

Vue.use(Vuetify);

new Vue({
    el: '#app',
    render: h => h(App)
})