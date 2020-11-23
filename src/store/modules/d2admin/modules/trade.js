import api from '@/api'

export default {
  namespaced: true,
  state: {
    data: {}
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
      await api.GET_OPEN_ORDERS({ sessionId })
    },
    async placeOrder  ({ state, dispatch }, {
      sessionId = ''
    } = {}) {
      await api.PLACE_ORDER({ sessionId })
    }
  }
}
