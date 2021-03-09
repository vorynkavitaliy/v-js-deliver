<template>
    <v-footer dark padless>
        <v-card class="flex" flat tile>
            <v-card-title class="teal">
                <strong class="subheading">Get connected with us on social networks!</strong>

                <v-spacer></v-spacer>

                <v-btn
                    v-for="link in mediaLinks"
                    :key="link.url"
                    class="mx-4"
                    dark
                    icon
                    :href="link.url"
                >
                    <v-icon size="34px">
                        {{ link.icon }}
                    </v-icon>
                </v-btn>
            </v-card-title>

            <v-card-text class="py-2 white--text text-center">
                {{ new Date().getFullYear() }} — <strong>App by Vitaliy V.</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            mediaLinks: [
                { url: 'https://github.com/vorynkavitaliy?tab=repositories', icon: 'mdi-github' },
                { url: 'https://t.me/vorynkavitaliy', icon: 'mdi-telegram' }
            ]
        }
    }
}
</script>

<style></style>
