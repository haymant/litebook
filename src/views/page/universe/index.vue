<template>
  <d2-container type="full" class="page">
    <d2-grid-layout
      v-bind="layout"
      @layout-updated="layoutUpdatedHandler">
      <d2-grid-item
        v-for="(item, index) in layout.layout"
        :key="index"
        v-bind="item"
        @resize="resizeHandler"
        @move="moveHandler"
        @resized="resizedHandler"
        @moved="movedHandler">
        <el-card shadow="never" class="page_card">
          <template v-if="item.i === '2'">
            <proto-table :options="orderOptions" :getData="fetchOrders"></proto-table >
          </template>
        </el-card>
      </d2-grid-item>
    </d2-grid-layout>
  </d2-container>
</template>

<script>
import Vue from 'vue'
import { GridLayout, GridItem } from 'vue-grid-layout'
import TradingVue from 'trading-vue-js'
import { dashboardOptions } from './dashboard'
import ProtoTable from '@/components/proto-table'
import { orderOptions } from './crud'
import { mapState, mapActions } from 'vuex'

Vue.component('d2-grid-layout', GridLayout)
Vue.component('d2-grid-item', GridItem)
Vue.component('d2-trading', TradingVue)
Vue.component('proto-table', ProtoTable)

export default {
  name: 'universe',
  data () {
    return {
      layout: dashboardOptions.layout,
      // to listen window resizing and move to component
      height: window.innerHeight / 4 - 80,
      width: window.innerWidth / 4 - 80,
      orderOptions,
      chart: {
        ohlcv: [
          [1551128400000, 33, 37.1, 14, 14, 196],
          [1551132000000, 13.7, 30, 6.6, 30, 206],
          [1551135600000, 29.9, 33, 21.3, 21.8, 74],
          [1551139200000, 21.7, 25.9, 18, 24, 140],
          [1551142800000, 24.1, 24.1, 24, 24.1, 29]
        ]
      }
    }
  },
  computed: {
    ...mapState('d2admin', {
      sessionId: state => state.user.info.sessionId
    })
  },
  mounted () {
    // 加载完成后显示提示
    this.showInfo()
  },
  methods: {
    ...mapActions('d2admin/trade', [
      'getOrders'
    ]),
    fetchOrders () {
      return this.getOrders({ sessionId: this.sessionId })
    },
    log (arg1 = 'log', ...logs) {
      if (logs.length === 0) {
        console.log(arg1)
      } else {
        console.group(arg1)
        logs.forEach(e => {
          console.log(e)
        })
        console.groupEnd()
      }
    },
    // 显示提示
    showInfo () {
      this.$notify({
        title: '提示',
        message: '你可以按住卡片拖拽改变位置；或者在每个卡片的右下角拖动，调整卡片大小'
      })
    },
    // 测试代码
    layoutUpdatedHandler (newLayout) {
      console.group('layoutUpdatedHandler')
      newLayout.forEach(e => {
        console.log(`{'x': ${e.x}, 'y': ${e.y}, 'w': ${e.w}, 'h': ${e.h}, 'i': '${e.i}'},`)
      })
      console.groupEnd()
    },
    resizeHandler (i, newH, newW) {
      this.log('resizeHandler', `i: ${i}, newH: ${newH}, newW: ${newW}`)
    },
    moveHandler (i, newX, newY) {
      this.log('moveHandler', `i: ${i}, newX: ${newX}, newY: ${newY}`)
    },
    resizedHandler (i, newH, newW, newHPx, newWPx) {
      this.log('resizedHandler', `i: ${i}, newH: ${newH}, newW: ${newW}, newHPx: ${newHPx}, newWPx: ${newWPx}`)
    },
    movedHandler (i, newX, newY) {
      this.log('movedHandler', `i: ${i}, newX: ${newX}, newY: ${newY}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  .vue-grid-layout {
    border-radius: 4px;
    margin: -10px;
    .page_card {
      height: 100%;
      @extend %unable-select;
    }
    .vue-resizable-handle {
      opacity: .3;
      &:hover{
        opacity: 1;
      }
    }
  }
}
.d2-page-cover {
  @extend %full;
  @extend %unable-select;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  .d2-page-cover__logo {
    img {
      width: 200px;
    }
  }
  .d2-page-cover__title {
    margin: 0px;
    margin-bottom: 20px;
    font-weight: bold;
    color: $color-text-main;
  }
  .d2-page-cover__sub-title {
    margin: 0px;
    margin-bottom: 5px;
    color: $color-text-normal;
  }
  .d2-page-cover__build-time {
    margin: 0px;
    margin-bottom: 10px;
    font-size: 12px;
    color: $color-text-placehoder;
  }
}
</style>

