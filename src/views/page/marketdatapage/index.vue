<template>
  <d2-container>
    <template slot='header'>
      Market Data
      <el-button slot="header" class="d2-mb-5" size="small" type="primary" @click="addRow">Add Symbol</el-button>
      <el-button slot="header" class="d2-mb-5" size="small" type="warning" @click="fetchReports">Refresh</el-button>
    </template>
    <d2-crud-x ref='d2Crud'
    :pagination="null"
    v-bind="_crudProps"
    v-on="_crudListeners">
    </d2-crud-x>
    <crud-footer ref="footer"
                     :current="crud.page.current"
                     :size="crud.page.size"
                     :total="crud.page.total"
                     @change="handlePaginationChange"
    >
    </crud-footer>
  </d2-container>
</template>

<script>
import { crudOptions } from './crud'
import { d2CrudPlus } from 'd2-crud-plus'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'marketdatapage',
  mixins: [d2CrudPlus.crud],
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
    ...mapState('d2admin', {
      sessionId: state => state.user.info.sessionId,
      data: state => state.marketdata.data,
      updateSwitch: state => state.marketdata.updateSwitch
    })
  },
  watch: {
    updateSwitch: {
      handler: function (to, from) {
        this.doRefresh()
      },
      deep: true
    }
  },
  methods: {
    ...mapActions('d2admin/marketdata', [
      'postRequest',
      'getSnapshot'
    ]),
    ...mapActions('d2admin/trade', [
      'getReports',
      'getOrders',
      'getPositionAsOf',
      'getLatestExecutionReportForOrderChain',
      'getAllPositionsAsOf',
      'getAllPositionsByRootAsOf',
      'getFills',
      'getAverageFillPrices',
      'placeOrder'
    ]),
    addRequest (data) {
      return this.postRequest({ symbol: data.symbol, sessionId: this.sessionId })
    },
    getCrudOptions () {
      return crudOptions
    },
    fetchReports () {
      return this.getOrders({ sessionId: this.sessionId })
    },
    pageRequest (query) {
      return new Promise((resolve, reject) => {
        const mkt = []
        for (const [, value] of this.data) {
          mkt.push(value)
        }
        return resolve({ code: 0, msg: 'success', data: { records: mkt } })
      })
    }
  }
}
</script>
