<template>
    <div v-if="users" class="flex-container row row-cols-3">
        <UserCard v-for="user of users" :key="user.userID" :user="user" />
    </div>
    <div v-else>Loading...</div>
</template>
<script>
import UserCard from '@/components/UserCard.vue';
export default {
    computed: {
        users() {
            return this.$store.state.users
        }
    },

    mounted() {
        this.$store.dispatch("getUsers")
    },

    components: {UserCard},
}
</script>
<style>
</style>