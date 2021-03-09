<template>
    <v-alert class="alert" :class="{ active: isAlert }" dense outlined text dark type="error">
        Для того что бы продолжить поиск <br />
        <router-link to="/login">
            <span>Войдите в аккаутн</span>
        </router-link>
        или
        <router-link to="/registration">
            <span>Зарегестрируйтесь</span>
        </router-link>
    </v-alert>
</template>

<script>
export default {
    name: 'Alert',
    props: {
        isAlert: {
            type: Boolean,
            require: true
        }
    }
}
</script>

<style></style>
