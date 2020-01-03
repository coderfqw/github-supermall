import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  cartList: []
}

const store = new Vuex.Store({
  state,
  // mutations: {
  //   addToCart(state, product) {
  //     // let newProduct = true;
  //     // for(let item of state.cartList) {
  //     //   if (item.iid === product.iid) {
  //     //     item.count += 1
  //     //     newProduct = false
  //     //   }
  //     // }
  //     // if (newProduct) {
  //     //   product.count = 1
  //     //   state.cartList.push(product)
  //     // }
      
  //     let oldProduct = state.cartList.find(item => item.iid === product.iid)
  //     if (oldProduct) {
  //       oldProduct.count += 1
  //     } else {
  //       product.count = 1
  //       state.cartList.push(product)
  //     }
  //   },
  // },
  mutations,
  actions,
})

export default store