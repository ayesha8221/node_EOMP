<template>
    <div v-if="product" class="product_details" :key="product.prodID" :product="product">
        <div class="card mx-auto" id="that">
            <div class="card text-black border-white border-2 text-center ">
            <img :src="product.prodUrl" :alt="product.prodName"/>
            <h2 class="fs-4">
                {{ product.prodName }}
            </h2>
                <div class="card-body m-2">
                    <p>R  {{ product.amount }}</p>
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
<style scoped>
    img{
        width: 300px;
    }
    .that {
        width: 300px;
        height: 400px;
    }

</style>