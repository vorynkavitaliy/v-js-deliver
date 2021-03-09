<template>
    <v-app>
        <navbar />
        <v-main>
            <v-container>
                <router-view />
            </v-container>
        </v-main>

        <Footer />

        <template v-if="success">
            <v-snackbar
                color="success"
                :multi-line="true"
                :value="true"
                @input="closeError"
                :timeout="2000"
            >
                <v-layout align-center justify-space-between>
                    {{ success }}
                    <v-btn dark text @click.native="closeError">
                        Закрыть
                    </v-btn>
                </v-layout>
            </v-snackbar>
        </template>

        <template v-else-if="error">
            <v-snackbar
                color="error"
                :multi-line="true"
                :value="true"
                @input="closeError"
                :timeout="2000"
            >
                <v-layout align-center justify-space-between>
                    {{ error }}

                    <v-btn dark text @click.native="closeError">
                        Закрыть
                    </v-btn>
                </v-layout>
            </v-snackbar>
        </template>
    </v-app>
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
export default {
    name: 'App',
    components: { Navbar, Footer },

    computed: {
        success() {
            return this.$store.getters.success
        },

        error() {
            return this.$store.getters.error
        },

        isUserLoggerIn() {
            return this.$store.getters.isUserLoggerIn
        }
    },

    methods: {
        closeError() {
            this.$store.dispatch('clearError')
        }
    }
}
</script>
