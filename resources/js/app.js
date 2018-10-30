
require('./bootstrap');
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import store from './store/index'
import router from './router/index'
import Vuetify from 'vuetify'
Vue.use(Vuetify, {
    theme: {
        primary: "#46547d",
        secondary: "#f80b37"
    }
})
const App = () =>
    import('./views/App.vue');
const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});