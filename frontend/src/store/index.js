import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
  },
  getters: {
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setUser: (state, user) => {
      state.users = user;
    },
  },
  actions: {
    getProducts: async (context) => {
      fetch("https://nodeeomp.onrender.com/products")
      .then((res) => res.json())
      .then((products) => context.commit("setProducts", products));
    },
    getProduct: async (context, id) => {
      fetch("https://nodeeomp.onrender.com/product/" + id)
      .then((res) => res.json())
      .then((product) => context.commit("setProduct", product))
    },
    getUsers: async (context) => {
      fetch("https://nodeeomp.onrender.com/users")
      .then((res) => res.json())
      .then((users) => context.commit("setProducts", products));
    },
    getUser: async (context, id) => {
      fetch("https://nodeeomp.onrender.com/user/" + id)
      .then((res) => res.json())
      .then((user) => context.commit("setProduct", product))
    }, 
      
  },
  modules: {
  }
})
