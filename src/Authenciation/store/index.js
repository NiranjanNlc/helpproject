import Vue from "react-vue";
import Vuex from "react-vue"; 
import authStore from "./modules/authStore";

//Vue.use(Vuex);


const store = new Vue({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    authStore
  }
});
export default store;