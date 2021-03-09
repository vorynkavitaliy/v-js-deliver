import firebase from 'firebase/app'

class User {
    constructor(id) {
        this.id = id
    }
}

export default {
    state: {
        user: 0
    },

    mutations: {
        setUser(state, payload) {
            state.user = payload
        }
    },

    actions: {
        async registerUser({ commit }, payload) {
            commit('clearError')
            commit('setLoading', true)
            const { email, password } = { ...payload }

            try {
                const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
                commit('setUser', new User(user.uid))
                commit('setLoading', false)
                commit('setSuccess', `Поздравляю, вы зарегестрировали свой аккаунт`)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },

        async loginUser({ commit }, { email, password }) {
            commit('clearError')
            commit('clearSuccess')
            commit('setLoading', true)

            try {
                const user = await firebase.auth().signInWithEmailAndPassword(email, password)
                commit('setUser', new User(user.uid))
                commit('setLoading', false)
                commit('setSuccess', `Поздравляю, вы вошли в свой аккаунт`)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },

        autoLoginUser({ commit }, payload) {
            commit('setUser', new User(payload.uid))
        },

        logoutUser({ commit }) {
            firebase.auth().signOut()
            commit('setUser', 0)
        }
    },

    getters: {
        user: state => state.user,
        isUserLoggedIn: state => state.user !== 0
    }
}
