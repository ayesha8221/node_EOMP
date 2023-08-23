<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">Products</router-link>
  </nav>
  <router-view/>
</template>
  
<script>
import Navbarcomp from './components/Navabarcomp.vue';
import Footercomp from './components/Footercomp.vue';
export default {
  components: {
    Navbarcomp,
    Footercomp,
  },
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
</style>

