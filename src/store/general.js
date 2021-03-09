export default {
    state: {
        loading: false,
        error: null,
        success: null
    },
    mutations: {
        setLoading: (state, payload) => (state.loading = payload),

        setError: (state, payload) => (state.error = payload),

        setSuccess: (state, payload) => (state.success = payload),

        clearError: state => (state.error = null),

        clearSuccess: state => (state.success = null)
    },

    actions: {
        setLoading: ({ commit }, payload) => commit('setLoading', payload),
        setError: ({ commit }, payload) => commit('setLoading', payload),
        setSuccess: ({ commit }, payload) => commit('setSuccess', payload),
        clearError: ({ commit }) => commit('clearError'),
        clearSuccess: ({ commit }) => commit('clearSuccess')
    },

    getters: {
        loading: state => state.loading,
        error: state => state.error,
        success: state => state.success
    }
}
