<template>
    <v-card>
        <!-- <v-toolbar color="primary" dark>{{getPackage.name}}</v-toolbar>
        <v-card-text>
            <div class="text-h2 pa-12"></div>
        </v-card-text>
        <v-card-actions class="justify-end">
            <v-btn text @click="dialog.value = false">Close</v-btn>
        </v-card-actions> -->

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
                { text: 'Time', value: 'time' },
            ]
        }
    }
}
</script>

<style></style>
