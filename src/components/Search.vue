<template>
    <v-layout align-center>
        <v-form @submit.prevent="getPackages">
            <v-text-field
                v-model="name"
                label="NPM Пакет"
                clearable
                hide-details="true"
            ></v-text-field>
        </v-form>
    </v-layout>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            name: ''
        }
    },

    methods: {
        getPackages() {
            if (this.$store.getters.counter < 3) {
                const formData = {
                    name: this.name
                }
                this.$store.dispatch('fetchPackages', formData)
            } else {
                console.log('need login');
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.v-btn
    &::after, &::before
        display: none!important
</style>
