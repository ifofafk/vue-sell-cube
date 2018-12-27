<template>
	<span class="support-ico" :class="iconCls"></span>
</template>

<script type="text/javascript">
	export default {
		name: 'support-ico',
		props: {
			size: {
				type: Number
			},
			type: {
				type: Number
			}
		},
		computed: {
			iconCls() {
				const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
				return `icon-${this.size} ${classMap[this.type]}`
			}
		}
	}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
	
  .support-ico 
	  display inline-block
	  background-repeat no-repeat

  .icon-1
	  width $iconSize12
  	height $iconSize12
	  background-size $iconSize12 $iconSize12
	  &.decrease
	    bg-image('decrease_1')
	  &.discount
	    bg-image('discount_1')
		&.guarantee
		  bg-image('guarantee_1')
  	&.invoice
	    bg-image('invoice_1')	
	  &.special
	    bg-image('special_1')

  .icon-2
  	width $iconSize16
	  height $iconSize16
	  background-size $iconSize16 $iconSize16
	  &.decrease
	    bg-image('decrease_2')
	  &.discount
	    bg-image('discount_2')
	  &.guarantee
	    bg-image('guarantee_2')
	  &.invoice
	    bg-image('invoice_2')	
	  &.special
	    bg-image('special_2')

  .icon-3
	  width $iconSize12
  	height $iconSize12
	  background-size $iconSize12 $iconSize12
	  &.decrease
	    bg-image('decrease_3')
	  &.discount
	    bg-image('discount_3')	
	  &.guarantee
	    bg-image('guarantee_3')
	  &.invoice
	    bg-image('invoice_3')		 
	  &.special
	    bg-image('special_3')

  .icon-4
	  width $iconSize16
	  height $iconSize16
	  background-size $iconSize16 $iconSize16
  	&.decrease
	    bg-image('decrease_4')	
	  &.discount
	    bg-image('discount_4')
  	&.guarantee
	    bg-image('guarantee_4')
		&.invoice
			bg-image('invoice_4')
		&.special
      bg-image('special_4')

</style>
