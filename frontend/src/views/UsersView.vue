<template>
    <div>
<div v-if="users" class="flex-container row row-cols-3">
        <UserCard v-for="user of users" :key="user.userID" :user="user" />
    </div>
        <loading-spinner v-else/>
    </div>
    

    
</template>
<script>

import LoadingSpinner from '@/components/LoadingSpinner.vue';
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

    components: {UserCard, LoadingSpinner},
}
</script>
<style>



</style>