<template>
    <div>
    <!-- ... Other content ... -->
    <button @click="toggleSort">
      {{ isAscending ? 'Sort by Price (Low to High)' : 'Sort by Price (High to Low)' }}
    </button>
    <!-- ... Product listing ... -->
  </div>
<div class="body" v-if="products">
          <div class="row table-container">
            <div class="col-12">
              <h1>Products</h1>
              <button>
                <router-link to="/admin/add/product"> Add Product </router-link>
              </button>
            </div>
            <div class="col">
              <table class="table is-striped is-bordered mt-2 is-fullwidth array-listsarray-lists"  @submit="deleteProduct">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Image</th>
                    <th>Edit/Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in products" :key="product.prodID" class="bord">
                    <td>{{ product.prodID }}</td>
                    <td>{{ product.prodName }}</td>
                    <td>R {{ product.amount }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.quantity }}</td>
                    <td><img class="tableImg" :src="product.prodUrl" alt="" /></td>
                    <td>
                      
                      <button
                        type="button"
                        class="btn bton"
                        data-bs-toggle="modal"
                        data-bs-target="#editProductModal"
                        id="edit-row"
                      >
                        Edit
                      </button>
                      <button
                        type="submit"
                        class="btn btton"
                        @click= deleteProduct(product.prodID)
                        id="delete-row"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

</template>

<script>

import axios from 'axios'

export default {
// props: ["product"],
computed: {
products() {
  return this.$store.state.products
}
},

mounted() {
this.$store.dispatch("getProducts")
},

methods: {
    async deleteProduct(id) {
      try {
        await axios.delete(`https://nodeeomp.onrender.com/products/${id}`);
        this.$store.dispatch("getProducts")
      } catch (err) {
        alert(err);
      }
    },
  },


};




</script>

<style scoped>
.tableImg{
    width : 65px;
}

</style>