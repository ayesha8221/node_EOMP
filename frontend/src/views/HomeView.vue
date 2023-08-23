<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <!-- <NavbarComp/> -->
  <!-- <Footercomp/> -->
</template>

<script>
// @ is an alias to /src
import NavbarComp from '@/components/NavbarComp.vue'
import Footercomp from '@/components/Footercomp.vue'


export default {
  name: 'HomeView',
  components: {
    NavbarComp,
    Footercomp,
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>