<template>
    <div v-if="products" class="flex-container row row-cols-3">
        <CardComp v-for="product of products" :key="product.prodID" :product="product" />
    </div>
    <div v-else>Loading...</div>
</template>
<script>
import CardComp from '@/components/CardComp.vue';
export default {
    computed: {
        products() {
            return this.$store.state.products
        }
    },

    mounted() {
        this.$store.dispatch("getProducts")
    },

    components: {CardComp},
}
</script>
<style>
</style>