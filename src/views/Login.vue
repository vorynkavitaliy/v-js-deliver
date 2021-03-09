<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>
                <v-card class="elevation-12">
                    <v-toolbar dark color="dark">
                        <v-toolbar-title>Войти в аккаунт</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" validation>
                            <v-text-field
                                prepend-icon="mdi-account"
                                name="email"
                                label="Email"
                                type="email"
                                :rules="emailRules"
                                v-model="email"
                            ></v-text-field>

                            <v-text-field
                                prepend-icon="mdi-lock"
                                name="password"
                                label="Password"
                                type="password"
                                :rules="passwordRules"
                                :counter="6"
                                v-model="password"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            @click="onSumbit"
                            :loading="loading"
                            :disabled="!valid || loading"
                            >Login</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            valid: false,
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 6) || 'Password must be equal or more than 6 symbol'
            ]
        }
    },

    computed: {
        loading() {
            return this.$store.getters.loading
        }
    },

    methods: {
        onSumbit() {
            if (this.$refs.form.validate()) {
                const user = {
                    email: this.email,
                    password: this.password
                }
                this.$store
                    .dispatch('loginUser', user)
                    .then(() => {
                        this.$router.push('/')
                    })
                    .catch(err => console.log(err))
            }
        }
    },

    created() {
        if (this.$store.query) {
            if (this.$store.query['loginError']) {
                this.$store.dispatch('setError', 'Please login to access this page.')
            }
        }
    }
}
</script>
