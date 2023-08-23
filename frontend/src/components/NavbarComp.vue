<template>
    <div>
        <hr>
          <div class="justify-content-center w-100"  id="title">LuxeGem Jewels</div>
          <hr> 
         <nav class="navbar navbar-expand-lg bg-">
    <div class="container-fluid">
      <router-link class="navbar-brand links text-white" to="/"></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav m-auto gap-3">  
          <li class="nav-item">
              <router-link class="nav-link links fw-bold text-white" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link links fw-bold text-white" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link links fw-bold text-white" to="/products">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link links fw-bold text-white" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link links fw-bold text-white" to="/admin">Admin</router-link>
            </li>
        </ul>
      </div>
    </div>
  </nav>  
    </div>
   
     
  </template>
  <script>
      export default {
  
      }
  </script>
  
  <style scoped>
  #title {
    
    font-size: 50px;
    color:black;
  }
  .navbar-nav .nav-item{
    margin-inline: 3rem!important;
    font-size: 1.2rem;
    text-decoration: none;
  }
  .nav-item{
    text-decoration: none;
    color:black;
  }
  /* Reset default margin and padding for the navbar */
  .navbar {
  margin: 0;
  padding: 0;
  }
  
  /* Style the navbar */
  .navbar {
  background-color:black; /* Set the background color */
  color:black; /* Set the text color */
  font-family: Arial, sans-serif; /* Set the font */
  }
  
  /* Style the navigation list */
  .nav-list {
  list-style: none; /* Remove the default list styles */
  display: flex; /* Display the list items horizontally */
  justify-content: center; /* Center-align the items horizontally */
  padding: 10px 0; /* Add some padding for spacing */
  }
  
  /* Style the list items */
  .nav-list li {
  margin: 0 15px; /* Add spacing between the list items */
  }
  
  /* Style the links */
  .nav-list li a {
  text-decoration: none; /* Remove underlines from links */
  color: white; /* Set link color */
  position: relative; /* Set position to enable absolute positioning for the underline */
  transition: color 0.3s ease; /* Add smooth color transition */
  }
  
  /* Add underline to links on hover */
  .nav-list li a::before {
  content: ''; /* Create a pseudo-element for the underline */
  position: absolute; /* Position the underline absolutely */
  width: 100%; /* Set the width to 100% of the link */
  height: 2px; /* Set the height of the underline */
  bottom: -5px; /* Position the underline slightly below the text */
  background-color: #66ccff; /* Set the underline color */
  transform: scaleX(0); /* Start with no width (hidden) */
  transition: transform 0.3s ease; /* Add a smooth transition to the width */
  }
  
  /* Expand the underline on hover */
  .nav-list li a:hover::before {
  transform: scaleX(1); /* Expand the underline to full width */
  }
  
  </style>