import { createStore } from "vuex";

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
      state.users = user;
    },
  },
  actions: {
    getProducts: async (context) => {
      fetch("https://nodeeomp.onrender.com/products")
        .then((res) => res.json())
        .then((products) => context.commit("setProducts", products));
    },
    // getProduct: async (context, id) => {
    //   fetch(`https://nodeeomp.onrender.com/products`)
    //     .then((res) => res.json())
    //     .then(({ products }) => {
    //       let product;
    //       products.forEach((prod) => {
    //         if (prod.id == id) {
    //           product = prod;
    //         }
    //       });
    //       context.commit("setProduct", product);
    //     });
    // },
    getProduct: async (context, id) => {
      fetch("https://nodeeomp.onrender.com/products/" + id)
        .then((res) => res.json())
        .then((product) => context.commit("setProduct", product));
    },

    getUsers: async (context) => {
      fetch("https://nodeeomp.onrender.com/users")
        .then((res) => res.json())
        .then((users) => context.commit("setUsers", users));
    },
    getUser: async (context, id) => {
      fetch("https://nodeeomp.onrender.com/users/" + id)
        .then((res) => res.json())
        .then((user) => context.commit("setUser", user));
    },
  },
  modules: {},
});
