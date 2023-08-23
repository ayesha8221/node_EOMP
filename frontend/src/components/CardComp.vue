<template>
  <div class="container">
    <div class="card mx-auto my-2">
      <router-link :to="{ name: 'product', params: { id: product.prodID } }">
        <img :src="product.prodUrl" :alt="product.prodName" />
        <h3>{{ product.prodName }}</h3>
        <p>{{ product.amount }}</p>
        <button v-on:click="addToCart" class="addbtn">Add to cart</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style></style>
