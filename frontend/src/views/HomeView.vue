<template>
<div>
  <!-- free shipping -->
<div class="color">Free Shipping on overs R600 🚚</div>
<!--start of main section-->
<!-- <main>
  <div class="p-5 text-center hero">
        <h4 class="m-5">BUY ANY 5 ITEMS & GET</h4>
        <h1 class="m-5">30% OFF</h1>
        <router-link to="/products" class="btn">SHOP NOW!!&#8594;</router-link>
      </div>
</main> -->
<!--end of main section-->
<!--Start of slide-->
<div
    id="carouselExampleAutoplaying"
    class="carousel slide boss-lisa mt-5"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://i.postimg.cc/prXSFf2Q/Lovisa-retailer-image-1.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://i.postimg.cc/ThvWs9pg/ERIN-3-LANDSCAPE-1024x683.webp"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://i.postimg.cc/htp05Xqv/ca.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying "
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div> -->
  <!-- <NavbarComp/> -->
  <!-- <Footercomp/> -->
  </div>
  <!--End of slide-->
<!--cards-->
<div class="love">
  <div class="card m-3" id="hun" style="width: 18rem ;">
  <img src="https://i.postimg.cc/MTvHnRQh/earrcover.jpg" class="card-img-top" id="stub" alt="...">
  <div class="card-body">
    <p class="card-text">Earrings</p>
  </div>
</div>
<div class="card m-3" id="hun" style="width: 18rem;">
  <img src="https://i.postimg.cc/7Lqq2zpK/watccover.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Watches</p>
  </div>
</div>
<div class="card m-3" id="hun" style="width: 18rem;">
  <img src="https://i.postimg.cc/154n8kp8/necklaces-cover.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Necklaces</p>
  </div>
</div>
</div>
<!--end of cards-->
</div>
</template>

<script>
// @ is an alias to /src
import NavbarComp from '@/components/NavbarComp.vue'
// import Footercomp from '@/components/Footercomp.vue'


export default {
  name: 'HomeView',
  components: {
    NavbarComp , 
  
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
/* main {
  background-image: url(https://i.postimg.cc/rpWfmC3P/Lovisa-hero.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
} */
.m-5 {
  margin-right: 800px !important;
  font-size: 30px;
  margin-bottom: 300px;
}
.btn {
  margin-right: 800px !important;
}
.love{
  display: flex;
}
carousel-item {
  width: 100%;
  height: 100%;
}

.carousel {
  width: 85% !important;
  margin: auto;
  height: 100%;
}
.card-img-top {
  width: 100%;
  height: auto !important;
}
#hun.card {
  height:60%;
}


/* .carousel-item {
  width: 100%;
  height: 100%;
  
}

.carousel {
  width: 85% !important;
  margin: auto;
  height: 100%;
}
.dd {
  justify-content: center;
  margin-left: 35%;
} */
.color {
  background-color: white;
}
</style>