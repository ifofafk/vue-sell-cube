import { get } from './helpers'

// const getSeller = get('api/seller')
// const getGoods = get('api/goods')
// const getRatings = get('api/ratings')

const getSeller = get('http://localhost:8080/vue-sell/goods')
const getGoods = get('http://localhost:8080/vue-sell/goods')
const getRatings = get('http://localhost:8080/vue-sell/goods')

export {
  getSeller,
  getGoods,
  getRatings
}
