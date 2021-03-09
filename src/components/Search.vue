<template>
    <v-layout align-center class="navbar-search">
        <v-form @submit.prevent="getPackages">
            <v-layout>
                <v-text-field
                    v-model.trim="name"
                    label="NPM Пакет"
                    clearable
                    hide-details="true"
                ></v-text-field>
                <v-btn dark type="submit">
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
            </v-layout>
        </v-form>

        <Alert :isAlert="isAlert" />
    </v-layout>
</template>

<script>
import Alert from './Alert.vue'
export default {
    name: 'Search',
    components: { Alert },
    data() {
        return {
            name: '',
            isAlert: false
        }
    },

    methods: {
        getPackages() {
            if (this.$store.getters.counter < 3 || this.$store.getters.isUserLoggedIn) {
                if (this.name !== '') {
                    const formData = {
                        name: this.name.toLowerCase()
                    }
                    if (window.location.pathname !== '/') {
                        this.$router.push('/')
                    }
                    this.$store.dispatch('fetchPackages', formData)
                }
            } else {
                if (this.$store.getters.counter >= 3 && !this.$store.getters.isUserLoggedIn) {
                    this.isAlert = true
                    setTimeout(() => (this.isAlert = false), 3000)
                }
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.v-btn
    &::after, &::before
        display: none!important

.alert
    position: fixed!important
    top: 30%
    left: 50%
    transform: translateX(-50%)
    z-index: 100
    background-color: #fff!important
    opacity: 0
    pointer-events: none
    transition: opacity 0.2 easy

    &.active
        opacity: 1
        pointer-events: inherit
</style>
