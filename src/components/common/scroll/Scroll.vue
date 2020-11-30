<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      // console.log(this.$refs.wrapper)
      //1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: true
      })
      //2.监听滚动的位置
      if(this.probeType ===2 || this.probeType === 3) {
        this.scroll.on('scroll',(position) => {
          this.$emit('scroll', position)
        })
      }
      //图片加载完重新计算可滚动高度scrollerHeight


      //3.监听上拉事件
      if(this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          //上拉事件发出去
          this.$emit('pullingUp')
        })

      }

    },
    methods: {
      scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
      },
      refresh() {
        /**
         * 图片异步加载，第一次height可滚动区域并没有计算图片的高度，
         * 需要全部加载完成之后重新计算高度
         */
        this.scroll && this.scroll.refresh()
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>