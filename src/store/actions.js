import {
  ADD_COUNT, 
  ADD_TO_CART, 
} from './mutations-types'

export default {
  addCart(context, product) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === product.iid)
      if (oldProduct) {
        context.commit(ADD_COUNT, oldProduct)
        resolve('当前商品数量+1')
      } else {
        context.commit(ADD_TO_CART, product)
        resolve('添加了新的商品')
      }
    })
  }
}