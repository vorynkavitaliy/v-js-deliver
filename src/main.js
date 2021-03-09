import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/app'
import 'firebase/auth'
import VueMask from 'v-mask'
import { VueMaskDirective } from 'v-mask'

Vue.config.productionTip = false
Vue.use(VueMask)
Vue.directive('mask', VueMaskDirective)

new Vue({
    created() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDTNBBJHLo1ssZ5iv3L5ZyrLHC5i30s_Yw',
            authDomain: 'v-vue-js-deliver-app.firebaseapp.com',
            projectId: 'v-vue-js-deliver-app',
            storageBucket: 'v-vue-js-deliver-app.appspot.com',
            messagingSenderId: '980357888516',
            appId: '1:980357888516:web:6e7bb1e5d02d2eac481351'
        })

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.$store.dispatch('autoLoginUser', user)
            }
        })
    },
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
