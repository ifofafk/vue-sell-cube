import { get } from './helpers'

// const getSeller = get('api/seller')
// const getGoods = get('api/goods')
// const getRatings = get('api/ratings')

const getSeller = get('/vue-sell/goods')
const getGoods = get('/vue-sell/goods').goods
const getRatings = get('/vue-sell/goods')

export {
  getSeller,
  getGoods,
  getRatings
}
