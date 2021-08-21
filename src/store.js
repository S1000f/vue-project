import { createStore } from 'vuex'
import mock from '@/mock'

const products = {
  namespaced: true,
  state: {
    detail: {}
  },

  getters: {
    detail: state => state.detail
  },

  mutations: {
    set(state, { detail }) { state.detail = detail },
    clear(state) { state.detail = {} }
  },

  actions: {
    load({ commit }, id) {
      mock.asyncFind(id, detail => {
        commit('set', { detail });
      })
    },

    destroy({ commit }) {
      commit('clear');
    }
  }
}

const storeA = {
  namespaced: true,
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
}

const storeB = {
  namespaced: true,
  state() {
    return {
      count: 10
    }
  },

  getters: {
    getCount: (state) => state.count
  },

  mutations: {
    increment: state => state.count++
  },

  actions: {
    doUpdate({ commit }) {
      commit('increment')
    }
  }
}

const store = createStore({
  modules: {
    storeA,
    storeB,
    products
  }
})

export default store;