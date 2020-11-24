import api from '@/api'

export default {
  namespaced: true,
  state: {
    orders: {}
  },
  actions: {
    async getReports  ({ state, dispatch }, {
      sessionId = ''
    } = {}) {
      await api.GET_TRADE_REPORTS({ sessionId })
    },
    async getPositionAsOf  ({ state, dispatch }, {
      sessionId = ''
    } = {}) {
      await api.GET_POSITION_OF({ sessionId })
    },
    async getLatestExecutionReportForOrderChain  ({ state, dispatch }, {
      sessionId = ''
    } = {}) {
      await api.GET_EXE_REPORTS({ sessionId })
    },
    async getAllPositionsAsOf  ({ state, dispatch }, {
      sessionId = ''
    } = {}) {
      await api.GET_ALL_POSITION_OF({ sessionId })
    },
    async getAllPositionsByRootAsOf  ({ state, dispatch }, {
      sessionId = ''
    } = {}) {
      await api.GET_ALL_POSITION_BY_ROOT({ sessionId })
    },
    async getFills  ({ state, dispatch }, {
      sessionId = ''
    } = {}) {
      await api.GET_FILLS({ sessionId })
    },
    async getAverageFillPrices  ({ state, dispatch }, {
      sessionId = ''
    } = {}) {
      await api.GET_AVG_FILL_PRICE({ sessionId })
    },
    async getOrders  ({ state, dispatch }, {
      sessionId = ''
    } = {}) {
      const ords = await api.GET_OPEN_ORDERS({ sessionId })
      const list = ords.getOrdersList()
      if (list === undefined) {
        return { code: 1, msg: 'failure', data: {} }
      }
      var ordA = []
      list.forEach(ord => {
        ordA.push({
          ordId: ord.getOrderid(),
          broker: ord.getBrokerid(),
          px: ord.getOrderprice().getQty() / Math.pow(10, ord.getOrderprice().getScale()),
          qty: ord.getOrderquantity().getQty() / Math.pow(10, ord.getOrderquantity().getScale())
        })
      })
      return { code: 0, msg: 'success', data: { records: ordA } }
    },
    async placeOrder  ({ state, dispatch }, {
      sessionId = ''
    } = {}) {
      await api.PLACE_ORDER({ sessionId })
    }
  }
}
