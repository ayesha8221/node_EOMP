<template>
  <Navbarcomp />
  <router-view />
  <Footercomp />
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

