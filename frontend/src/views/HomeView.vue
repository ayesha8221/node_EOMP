<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/Navabarcomp.vue'
import footer from '@/components/Footercomp.vue'


export default {
  name: 'HomeView',
  components: {
    navbar,
    footer,
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>