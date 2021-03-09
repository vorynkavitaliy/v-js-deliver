<template>
    <v-card>
        <v-expansion-panels>
            <v-expansion-panel v-for="(item, i) in getPackage" :key="item.name + i">
                <v-expansion-panel-header>
                    {{ item.name }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-data-table
                        :headers="headers"
                        :items="item.files"
                        item-key="version"
                        class="elevation-1"
                    ></v-data-table>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-card>
</template>

<script>
export default {
    name: 'Modal',
    props: ['dialog'],
    computed: {
        getPackage() {
            return this.$store.getters.packageBiVersion
        },

        headers() {
            return [
                { text: 'Name', value: 'name' },
                { text: 'Hash', value: 'hash' },
                { text: 'Time', value: 'time' }
            ]
        }
    }
}
</script>

<style></style>
