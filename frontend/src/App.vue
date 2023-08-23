<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/admin">Admin</router-link> |
    <router-link to="/users">Users</router-link> |
  </nav> -->
  <NavbarComp/>
  <router-view/>
<CardComp/>
<UserCard/>
<AdminTable/>
<Footercomp/>
</template>


<script>
import NavbarComp from './components/NavbarComp.vue';
import Footercomp from './components/Footercomp.vue';
import CardComp from './components/CardComp.vue';
import UserCard from './components/UserCard.vue';
import AdminTable from './components/AdminTable.vue';


export default {
  components: {
    NavbarComp, Footercomp,
    CardComp, UserCard, AdminTable
}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
