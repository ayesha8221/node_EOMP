<template>
  <div class="container">
    <div class="card mx-auto my-2" id="body">
      <router-link :to="{ name: 'product', params: { id: product.prodID } }">
        <img :src="product.prodUrl" :alt="product.prodName" class="picture" />
        <h3>{{ product.prodName }}</h3>
        <p> R {{ product.amount }}</p>
        <button v-on:click="addToCart" class="addbtn">View more</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style>
.picture {
  width: 350px !important;
  height: 350px !important;
  transition: 1s;
  /* border-radius: 50px; */
  
}
.picture:hover {
  transition: 1s;
  width: 390px !important;

}
#body {
  width: 350px !important;
  height: 475px !important;
  border: 300px !important;
  transition: 1s;
  /* border-radius: 50px; */
}
#body:hover {
  transition: 1s;
  height: 480px;
  width: 390px !important;
}
</style>
