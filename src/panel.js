import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import BKConnection from './plugins/BKConnection'
import Store from './store/devtools.store'

import App from './components/App';

Vue.use(Vuetify);
Vue.use(BKConnection);

new Vue({
    el: '#app',
    render: h => h(App),
    store: Store
})