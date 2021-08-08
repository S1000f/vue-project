import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0,
      cart: [{
        product_idx: 34,
        product_name: 'iPhone case01',
        category: 'case'
      }]
    }
  },

  getters: {
    cartCount: (state) => {
      return state.cart.length;
    }
  },

  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store;