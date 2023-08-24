<template>
  <NavbarComp/>
  <router-view/>
  <Footercomp/>
</template>


<script>
import NavbarComp from './components/NavbarComp.vue';
import Footercomp from './components/Footercomp.vue';

export default {
  components: {
    NavbarComp, Footercomp,
}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:black;
  background-color:rgb(244,210,179) ;

}
::-webkit-scrollbar {
  display: none;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
