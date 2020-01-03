import {
  ADD_COUNT, 
  ADD_TO_CART, 
} from './mutations-types'

export default {
  [ADD_COUNT](state, product) {
    product.count ++
  },
  [ADD_TO_CART](state, product) {
    product.isChecked = false
    product.count = 1
    state.cartList.push(product)
  },
}