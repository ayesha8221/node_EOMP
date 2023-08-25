<template>
    <div>
      
    <input type="text" v-model="searchQuery" @input="performSearch" placeholder="Search products🔎" />
    <select v-model="selectedCategory" @change="filter">
      <option value="">All</option>
      <option v-for="category in categories" :key="category">{{ category }}</option>
    </select>
    <select v-model="sortOrder" @change="sortProducts">
      <option value="asc">Low to High</option>
      <option value="desc">High to Low</option>
    </select>



    <!-- Display filtered products -->
    <div v-for="product in filteredProducts" :key="product.prodID">
      <img :src="product.prodUrl" alt="Product Image" class="product-image" />
        <h3>{{ product.prodName }}</h3>
  <p>Price: R {{ product.amount }}</p>
  <p>Quantity: {{ product.quantity }}</p>
    </div>
    

    <div v-if="products" class="flex-container row row-cols-3">
        <CardComp v-for="product of products" :key="product.prodID" :product="product" />
        
    </div>
    <loading-spinner v-else/>
  </div>

   <!-- <div>
    search
    <input type="text" v-model="searchQuery" @input="performSearch" placeholder="Search products🔎" />
    <div>

      sort by price
      <div>
        
      </div>

<select v-model="sortOrder" @change="sortProducts">
  <option value="asc">Low to High</option>
  <option value="desc">High to Low</option>
</select>
      filter by category
<select v-model="selectedCategory" @change="filter">
      <option value="">All</option>
      <option value="Necklaces">Necklaces</option>
      <option v-for="category in categories" :key="category">{{ category }}</option>
    </select>

    <div v-for="product in filteredProducts" :key="product.prodID">
        <img :src="product.prodUrl" alt="Product Image" class="product-image" />
        <h3>{{ product.prodName }}</h3>
  <p>Price: R {{ product.amount }}</p>
  <p>Quantity: {{ product.quantity }}</p>
  
    </div>
    </div>
<div v-if="products" class="flex-container row row-cols-3">
        <CardComp v-for="product of products" :key="product.prodID" :product="product" />
    </div>
    
        <div v-else class="loader"></div>
   </div> -->
</template>
<script>

import LoadingSpinner from '@/components/LoadingSpinner.vue';
import CardComp from '@/components/CardComp.vue';
export default {

    data() {
    return {
      selectedCategory: "", // Holds the selected category
      filteredProducts: [], // Holds the filtered products
      categories: ["Necklace", "Watch", "Earrings", "Ring"],
      searchQuery: "",
      sortOrder: "asc",
      // isLoading: true,
    };
  },

    computed: {
        products() {
            return this.$store.state.products
            
        }
    },
    methods: {

    filter() {
      this.filteredProducts = this.products.filter(product => {
        return this.selectedCategory === "" || product.category === this.selectedCategory;
      });
    },

    performSearch() {
    this.filteredProducts = this.products.filter(product => {
      const productName = product.prodName.toLowerCase();
      return productName.includes(this.searchQuery.toLowerCase());
    });
  },
  sortProducts() {
    this.products.sort((a, b) => {
      if (this.sortOrder === "asc") {
        return a.amount - b.amount;
      } else {
        return b.amount - a.amount;
      }
    });

    // If products are currently being filtered, update the filteredProducts array
    if (this.selectedCategory || this.searchQuery) {
      this.filter();
    }
  }



  },

  
    mounted() {
        this.$store.dispatch("getProducts")
    },

    components: {CardComp, LoadingSpinner},
}
</script>
<style>

/* .loader {
    align-items: center;
    justify-content: center;
    text-align: center;
    justify-items: center;
  border: 7px solid #fff9e4;
  border-top: 7px solid #0a0b0c; 
  border-radius: 50%;
  width: 35px;
  height: 35px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
} */

</style>