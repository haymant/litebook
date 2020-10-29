import api from '@/api'

export default {
  namespaced: true,
  actions: {
    async postRequest  ({ state, dispatch }, {
      symbol = '',
      sessionId = ''
    } = {}) {
      await api.REQUEST_MARKET_DATA({ symbol, sessionId })
    },
    async getSnapshot  ({ state, dispatch }, {
      sessionId = ''
    } = {}) {
      const res = await api.GET_MARKETDATA_SNAPSHOT({ sessionId })
      return { code: 0, msg: 'success', data: { records: [res] } }
    }
  }
}
