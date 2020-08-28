import Vue from 'vue'
import App from './App'
import router from './router'
import flexible from './flexible'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    flexible,
    components: { App },
    template: '<App/>'
})
