<template>
    <v-data-table
        :headers="headers"
        :items="packagesArray"
        item-key="version"
        class="elevation-1"
        :search="search"
        :custom-filter="filterOnlyCapsText"
    >
        <template v-slot:top>
            <v-text-field
                v-model="search"
                label="Найти версию"
                v-mask="'#.#.#'"
                class="mx-4"
            ></v-text-field>
        </template>

        <template v-slot:item.actions="{ item }">
            <v-dialog transition="dialog-bottom-transition" max-width="600">
                <template v-slot:activator="{ on, attrs }">
                    <v-icon
                        small
                        class="mr-2"
                        v-bind="attrs"
                        v-on="on"
                        @click="viewPackageDetails(item)"
                    >
                        mdi-eye
                    </v-icon>
                </template>
                <template v-slot:default="dialog">
                    <Modal :dialog="dialog" />
                </template>
            </v-dialog>
        </template>
    </v-data-table>
</template>

<script>
import Modal from './Modal.vue'
export default {
    name: 'Table',
    components: { Modal },
    props: {
        packagesArray: {
            type: Array,
            require: true
        }
    },
    data() {
        return {
            search: '',
            dialog: false
        }
    },

    computed: {
        headers() {
            return [
                { text: 'Name', sortable: false, value: 'name' },
                { text: 'Version', value: 'version' },
                { text: 'Details', value: 'actions', sortable: false }
            ]
        }
    },

    methods: {
        filterOnlyCapsText(value, search) {
            return (
                value != null &&
                search != null &&
                typeof value === 'string' &&
                value
                    .toString()
                    .toLocaleUpperCase()
                    .indexOf(search) !== -1
            )
        },

        viewPackageDetails(item) {
            this.$store.dispatch('fetchPackageByVersion', item)
        }
    }
}
</script>

<style></style>
