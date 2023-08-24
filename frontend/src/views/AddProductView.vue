<template lang="">
    <div>
      <div>
        <label class="label">Product Name</label>
                <input
                  class="input"
                  v-model="prodName"
                  type="text"
                  placeholder="Product Name"
                  required
                />
                <label class="label">Quantity</label>
                <input
                  class="input"
                  v-model="quantity"
                  type="text"
                  placeholder="quantity"
                  required
                />
                <label class="label">Price</label>
                <input
                  class="input"
                  v-model="amount"
                  type="number"
                  placeholder="R"
                  required
                />
                <label class="label">Category</label>
                <input
                  class="input"
                  v-model="category"
                  type="text"
                  placeholder="Name"
                  required
                />
                <label class="label">Image</label>
                <input
                  class="input"
                  v-model="prodUrl"
                  type="text"
                  placeholder="http://"
                  required
                />
                <button
                  class="btn btn-success mt-3"
                  @click="addProduct"
                >
                  Add
                </button>
      </div>
    </div>
    </template>
    <script>
    
    import axios from 'axios'
    
    export default {
        data() {
            return {
                    prodName: '',
                    quantity: '',
                    amount: '',
                    category: '',
                    prodUrl: ''
            }
        },
        methods: {
            async addProduct(){
                try {
                    await axios.post('https://nodeeomp.onrender.com/products/', {
                        prodName: this.prodName,
                        quantity: this.quantity,
                        amount: this.amount,
                        category: this.category,
                        prodUrl: this.prodUrl
                    })
                    this.prodName = '';
                    this.quantity = '';
                    this.amount = '';
                    this.category = '';
                    this.img = '';
                    this.$router.push('/admin')                
                } catch ( err ){
                  alert( err )
                }
            }
        }
    };
    
    </script>
    <style lang="">
    
    </style>