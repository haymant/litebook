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
    }
  }
}
