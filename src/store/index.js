import Vue from 'vue'
import Vuex from 'vuex'
import general from './general'
import search from './search'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { general, search, auth }
})
