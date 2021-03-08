<template>
    <div class="home">
        <v-layout column v-if="getPackages.length > 0">
            <h1>Таблица пакетов</h1>

            <Table :packagesArray="getPackages" />
        </v-layout>
        <v-alert class="absolute" dense outlined text dark type="error">
            I'm an alert with a top border and red color
        </v-alert>
    </div>
</template>

<script>
import Table from '../components/Table.vue'
export default {
    name: 'Home',
    components: { Table },
    computed: {
        getPackages() {
            return this.$store.getters.packages
        }
    }
}
</script>

<style lang="sass" scoped>
.home
    display: flex
</style>
