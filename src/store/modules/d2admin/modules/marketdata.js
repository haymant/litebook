import api from '@/api'

export default {
  namespaced: true,
  actions: {
    async getList  ({ dispatch }) {
      const res = await api.GET_MARKET_DATA()
      await dispatch('litebook/marketdata/set', { data: res })
    }
  }
}
