import { createStore } from "vuex";
import Vuex from 'vuex';

export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
  },
  getters: {},
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
      state.user = user;
    },
    
    sortProducts: (state) => {
      state.products.sort ((a, b) => {
        return a.Price - b.Price;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc= !state.asc
    },
  },
  actions: {
    getProducts: async (context) => {
      fetch("https://nodeeomp.onrender.com/products")
        .then((res) => res.json())
        .then((products) => context.commit("setProducts", products));
    },

    // getProduct: async (context, id) => {
    //   fetch("https://nodeeomp.onrender.com/products/" + id)
    //     .then((res) => res.json())
    //     .then((product) => context.commit("setProduct", product));
    // },
    getProduct: async (context, id) => {
      try {
        const response = await fetch(`https://nodeeomp.onrender.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const product = await response.json();

     
        context.commit("setProduct", product);
      } catch (error) {
        console.error(error);

      }
    },

    getUsers: async (context) => {
      fetch("https://nodeeomp.onrender.com/users")
        .then((res) => res.json())
        .then((users) => context.commit("setUsers", users));
    },
    getUser: async (context, id) => {
      try {
        const res = await fetch(`https://nodeeomp.onrender.com/users/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch user by ID");
        }
        const user = await res.json();

        context.commit("setUser", user);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
