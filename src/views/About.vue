<template>
    <div class="about">
        <v-card class="mx-auto" max-width="344">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

            <v-card-title>
                Vorynka Vitaliy
            </v-card-title>

            <v-card-subtitle>
                Fron-end developer
                <br />
                <v-btn href="tel:+380500604470" class="mt-5">+380500604470</v-btn>
            </v-card-subtitle>

            <v-card-actions>
                <v-btn color="orange lighten-2" text @click="show = !show">
                    Детальнее
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon @click="show = !show">
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                        Привет! Меня зовут Виталий, и я опытный Front end разработчик.<br />
                        Мои навыки:
                        <v-list>
                            <v-list-item v-for="skill of skills" :key="skill">
                                - {{ skill }}
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </div>
</template>

<script>
export default {
    data: () => ({
        show: false,
        skills: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Nuxt', 'React', 'Redux', 'ReactNative', 'SCSS', 'SASS']
    })
}
</script>
