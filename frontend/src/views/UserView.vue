<template>
    <div v-if="user" class="product_details" :key="user.userID" :user="user">
        <div class="card mx-auto">
            <div class="card text-black border-white border-2 text-center ">
            <img :src="user.userProfile" :alt="user.firstName"/>
            <h2 class="fs-4">
                {{ user.firstName }}
            </h2>
                <div class="card-body m-2">
                    <p>{{ user.emailAdd }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["id"],
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