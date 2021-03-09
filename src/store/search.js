const apiKey = ({ name, version, stats }) =>
    `https://data.jsdelivr.com/v1/package/npm/${name}${version ? '@' + version : ''}${
        stats ? '/' + stats : ''
    }`

export default {
    state: {
        packages: [],
        packagesDetailsByVersion: [],
        counter: 0
    },
    mutations: {
        setPackages: (state, payload) => (state.packages = payload),
        setPackageByVersion: (state, payload) => (state.packagesDetailsByVersion = payload),
        plusCounter: state => ++state.counter
    },
    actions: {
        async fetchPackages({ commit }, payload) {
            commit('clearError')
            commit('setLoading', true)
            try {
                const response = await fetch(apiKey(payload))
                const data = await response.json()
                commit('plusCounter')
                if (data.versions) {
                    const result = data.versions.map(res => ({ name: payload.name, version: res }))
                    commit('setPackages', result)
                    commit('clearError')
                    commit('setLoading', false)
                } else {
                    commit('setError', 'По вашему запросу ничего не найдено')
                    commit('setLoading', false)
                }
            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error.message
            }
        },

        async fetchPackageByVersion({ commit }, payload) {
            commit('clearError')
            commit('setLoading', true)
            try {
                const response = await fetch(apiKey(payload))
                const result = await response.json()
                commit('setPackageByVersion', result.files)
                commit('clearError')
                commit('setLoading', false)
            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error.message
            }
        }
    },
    getters: {
        packages: state => state.packages,
        packageBiVersion: state => state.packagesDetailsByVersion,
        counter: state => state.counter
    }
}
