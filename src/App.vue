<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab-warpper">
      <tab :tabs="tabs"></tab>
    </div>
  </div>
</template>

<script>
  import qs from 'query-string'
  import VHeader from 'components/v-header/v-header'
  import Goods from 'components/goods/goods'
  import Sellers from 'components/sellers/sellers'
  import Ratings from 'components/ratings/ratings'
  import Tab from 'components/tab/tab'
  import { getSeller } from 'api'

  export default {
    name: 'app',
    // 引入一个组件，需要注册
    data() {
      return {
        seller: {
          id: qs.parse(location.search).id
        }
      }
    },
    computed: {
      tabs() {
        return [
          {
            label: '商品',
            component: Goods,
            data: {
              seller: this.seller
            }
          },
          {
            label: '评价',
            component: Ratings,
            data: {
              seller: this.seller
            }
          },
          {
            label: '商家',
            component: Sellers,
            data: {
              seller: this.seller
            }
          }
        ]
      }
    },
    created() {
      this._getSeller()
    },
    methods: {
      // 额外做了一层_getSeller的封装，再在created里调用
      _getSeller() {
        getSeller().then((seller) => {
          this.seller = seller;
          console.log(seller)
        })
      }
    },
    components: {
      VHeader,
      Tab
    }
  }
</script>
<style lang="stylus">
  #app
    .tab-warpper
      position: fixed
      top: 136px
      left: 0
      right: 0
      bottom: 0
</style>
