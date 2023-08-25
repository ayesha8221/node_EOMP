<template>
    <div>
          <div>
            <div v-if="product">
            <label class="label">Product Name</label>
                    <input
                      class="input"
                      v-model="product.prodName"
                      type="text"
                      placeholder="Product Name"
                      required
                    />
                    <label class="label">Quantity</label>
                    <input
                      class="input"
                      v-model="product.quantity"
                      type="text"
                      placeholder="quantity"
                      required
                    />
                    <label class="label">Price</label>
                    <input
                      class="input"
                      v-model="product.amount"
                      type="number"
                      placeholder="R"
                      required
                    />
                    <label class="label">Category</label>
                    <input
                      class="input"
                      v-model="product.category"
                      type="text"
                      placeholder="category"
                      required
                    />
                    <label class="label">Image</label>
                    <input
                      class="input"
                      v-model="product.prodUrl"
                      type="text"
                      placeholder="http://"
                      required
                    />
                    <button
                      class="btn btn-success mt-3"
                      @click="updateProduct"
                    >
                      Update
                    </button>
            </div>
            
          </div>
        </div>
      </template>
      
      <script>
      import axios from "axios";
      
      export default {
        data() {
          return {
            prodName: '',
            quantity: '',
            amount: '',
            category: '',
            prodUrl: '',
          };
        },
        methods: {
          async updateProduct() {
            try {
              await axios.put(
                `https://nodeeomp.onrender.com/products/${this.$route.params.id}`,
                {
                    prodName: this.product.prodName,
                    quantity: this.product.quantity,
                    amount: this.product.amount,
                  category: this.product.category,
                  prodUrl: this.product.prodUrl,
                }
              );
              this.prodName = '';
              this.quantity = '';
              this.amount = '';
              this.category = '';
              this.prodUrl = '';
              this.$router.push("/admin");
            } catch (err) {
              alert('Product Updated successfully! ');
            }
          },
        },
        props: ["id"],
        computed: {
          product() {
            return this.$store.state.product;
          },
        },
        mounted() {
          this.$store.dispatch("getProduct", this.id),
          this.$store.dispatch("getProducts");
        },
      };
      </script>
      <style>
    </style>