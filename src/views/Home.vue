<template>
    <div class="home">
        <v-layout column v-if="getPackages.length > 0">
            <h1>Таблица пакетов</h1>

            <Table :packagesArray="getPackages" />
        </v-layout>
        <v-layout v-else align-center justify-center>
            Введите данные для поиска
        </v-layout>
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
