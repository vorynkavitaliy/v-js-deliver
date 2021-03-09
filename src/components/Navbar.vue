<template>
    <v-container>
        <v-navigation-drawer app dark flat v-model="drawer">
            <v-list>
                <v-list-item-group>
                    <v-list-item v-for="(link, id) of links" :key="link.title + id" :to="link.url">
                        <v-list-item-title>
                            <v-icon left medium>{{ link.icon }}</v-icon>
                            {{ link.title }}
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="onLogout" v-if="isUserLoggedIn">
                        <v-list-item-title>
                            <v-icon left>mdi-logout-variant</v-icon>
                            Выйти
                        </v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app flat dark color="dark">
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
                class="hidden-md-and-up"
            ></v-app-bar-nav-icon>

            <v-toolbar-title>
                <router-link to="/" class="pointer" custom v-slot="{ navigate }">
                    <span @click="navigate" @keypress.enter="navigate" role="link"
                        >JS Deliver App</span
                    >
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <search />
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                    icon
                    v-for="(link, id) of links"
                    :key="link.title + id"
                    :to="link.url"
                    width="auto"
                    class="pl-2 pr-2 ml-2"
                >
                    <v-icon left medium>{{ link.icon }}</v-icon>
                    {{ link.title }}
                </v-btn>

                <v-btn
                    text
                    @click="onLogout"
                    v-if="isUserLoggedIn"
                    width="auto"
                    class="pl-2 pr-2 ml-2"
                >
                    <v-icon left>mdi-logout-variant</v-icon>
                    Выйти
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
    </v-container>
</template>

<script>
import Search from './Search.vue'
export default {
    name: 'Navbar',
    components: { Search },

    data() {
        return {
            drawer: false,
            dialog: false,
            search: ''
        }
    },

    computed: {
        isUserLoggedIn() {
            return this.$store.getters.isUserLoggedIn
        },

        links() {
            if (this.isUserLoggedIn) {
                return [
                    { title: 'Главная', icon: 'mdi-home', url: '/' },
                    { title: 'Контакты', icon: 'mdi-checkbox-blank-circle', url: '/about' }
                ]
            }

            return [
                { title: 'Войти', icon: 'mdi-login', url: '/login' },
                { title: 'Регистрация', icon: 'mdi-account-plus', url: '/registration' }
            ]
        }
    },

    methods: {
        onLogout() {
            this.$store.dispatch('logoutUser')
            this.$router.push('/').catch(() => {})
        }
    }
}
</script>
<style lang="sass" scoped>
.pointer
    cursor: pointer
</style>
