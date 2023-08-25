<template lang="">
  <div class="d-flex justify-content-center mb-3">
    <!-- <b-spinner label="Loading..."></b-spinner> -->
    <div class="loader"></div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.loader {
  border: 7px solid #fff9e4; /* Light grey */
  border-top: 7px solid #0a0b0c; /* Blue */
  border-radius: 50%;
  width: 35px;
  height: 35px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>