<template>
<div>
  <!--the card-container-->

<div class="card-container">
    <div class="card">
      <img
        src="https://i.postimg.cc/BQ3FsNMV/2021-09-16-NK-Dear-Rae-Custom-017-copy.webp"
        alt="Image 1"
      />
    </div>
    <div class="card">
      <img
        src="https://i.postimg.cc/PqbW1c3Y/Local-South-African-Jewellery-Design-Brands-Dear-Rae.jpg"
        alt="Image 2"
      />
    </div>
    <div class="card">
      <img
        src="https://i.postimg.cc/prH3qgRv/Local-South-African-Jewellery-Design-Brands-Meraki-Jewellery.jpg"
        alt="Image 3"
      />
    </div>
  </div>
  <!--end of card container-->
  <h2 class="story">Our LuxeGem Jewels Story</h2> 
  <p class="par">It has been such a humbling experience for us to witness how LuxeGem Jewels and its community has flourished over the last few years. In 2020, with an ever-expanding   of locally , it made sense for us to update our  online store for  customers in other provinces besides Western Cape. We identified the need to create a more streamlined logistics approach to how we sell in other provinces and after a few nights around the brainstorming table, LuxeGem Jewels was born.
Our new website, LuxeGem Jewels.com, offers a user-friendly experience that ensures hassle-free product delivery from Western Cape Cape , to our main fulfilment centre and handpicked team in Gauteng. This makes delivery much faster and customs pricing more affordable so that no matter where you are in the South Africa, purchasing and coveting a LuxeGem Jewels piece is now fully accessible.</p>
<h2 class="story">Meet our amazing team</h2>

<!--start of team-->
<div class="team">
  <div class="card us" style="width: 18rem;">
  <img src="https://i.postimg.cc/C5yj7LsP/C12-C1-Lisa-Mbuwa-3.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
  

<div class="card us" style="width: 18rem;">
  <img src="https://i.postimg.cc/kMZNMwrN/C12-Ayesha-Galant-Class1-1.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
  

<div class="card us" style="width: 18rem;">
  <img src="https://i.postimg.cc/MT0Tk68r/Zulaigh-s.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h3>zuzulaigh Benjamin</h3>
    <p class="card-text">Designer</p>
  </div>
</div>
  

<div class="card us" style="width: 18rem;">
  <img src="https://i.postimg.cc/BntBJybC/C12-Samkelo-Mpokela-Class1-1.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>

<!--end of team-->
  
  </div>
</template>
<script>
export default {
    
}
</script>

<style scooped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  flex: 1;
  max-width: calc(33.33% - 10px); /* Adjust the width  */
  margin: 5px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: 100%;
}

.card-content {
  padding: 10px;
}

.par {
  text-align: center;
  max-width: 80%; /* Adjust the maximum width of the paragraph */
  padding: 20px;
  font-size: 16px; /* Adjust the font size as needed */
  margin-left: 60px;
}
.story {
  text-align: center;
}
.team {
display: flex;
}

/* .card {
  position: relative;
  width: 300px;
  height: 200px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
} */



 


</style>

