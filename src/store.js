import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0,
      cart: [{
        product_idx: 34,
        product_name: 'iPhone case01',
        category: 'case'
      }],
      message: 'default message'
    }
  },

  getters: {
    cartCount: (state) => {
      return state.cart.length;
    },

    message: state => state.message
  },

  mutations: {
    increment: state => state.count++,

    setMessage: (state, payload) => 
      state.message = payload
    
  },

  actions: {
    doUpdate({ commit }, message) {
      commit('setMessage', message);
    }
  }
})

export default store;