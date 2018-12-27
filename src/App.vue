<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
import { getSeller } from 'api'

export default {
  name: 'app',
  /* 引入一个组件，需要注册 */
  data() {
    return {
        seller: {}
    }
  },
  created() {
    this._getSeller()
  },
  methods: {
    /*额外做了一层_getSeller的封装，再在created里调用*/
    _getSeller() {
        getSeller().then((seller) => {
            this.seller = seller
        })
    }  
  },
  components: {
    VHeader
  }
}
</script>
<style lang="stylus">
</style>
