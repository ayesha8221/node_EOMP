<template>
    <div v-if="product" class="product_details" :key="product.id" :product="product">
        <div class="card mx-auto">
            <div class="card text-black border-white border-2 text-center ">
            <img :src="product.image" :alt="product.name"/>
            <h2 class="fs-4">
                {{ product.name }}
            </h2>
                <div class="card-body m-2">
                    <p>{{ product.price }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    // props: ["id"],
    computed: {
        product() {
            return this.$store.state.product
        },
        id () {
            return this.$route.params.id
        }
        
    },

    mounted() {
        this.$store.dispatch("getProduct", this.id)
    },
    
}
</script>
<style>
    
</style>