<template>
 <div v-if="user" class="product_details" :key="user.userID" :user="user">
        <div class="card mx-auto">
      <div class="container">
    <div class="card mx-auto my-2">
      <router-link :to="{ name: 'admin user', params: { id: user.userID } }">
        <img :src="user.userProfile" :alt="user.firstName" />
        <h3>{{ user.firstName }}</h3>
        <p>{{ user.lastName }}</p>
        <p>{{ user.userAge }}</p>
        <p>{{ user.Gender }}</p>
        <p>{{ user.userRole }}</p>
        <p>{{ user.emailAdd }}</p>
      </router-link>
    </div>
  </div>
        </div>
        </div>
</template>
<script>
export default {
    // props: ["id"],
    computed: {
        user() {
            return this.$store.state.user
        },
        id () {
            return this.$route.params.id
        }
         
    },

    mounted() {
        this.$store.dispatch("getUser", this.id)
    },
    
}
</script>
<style>

</style>