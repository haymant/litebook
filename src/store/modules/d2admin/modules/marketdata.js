import api from '@/api'

export default {
  namespaced: true,
  state: {
    data: new Map() // { code: 0, msg: 'success',  data: { current: 0, size: 1, total: 1, records: [] } }
  },
  actions: {
    async postRequest  ({ state, dispatch }, {
      symbol = '',
      sessionId = ''
    } = {}) {
      await api.REQUEST_MARKET_DATA({ symbol, sessionId }).then(stream => {
        stream.on('data', function (response) {
          if (response.getEvent() === undefined) {
            return
          }

          const evt = response.getEvent().toObject()
          let item = {}
          let symbol = ''
          let newInfo = {}
          if (evt.quoteevent !== undefined) {
            symbol = evt.quoteevent.marketdataevent.instrument.symbol
            item = state.data.get(symbol)
            const px = evt.quoteevent.marketdataevent.price.qty / Math.pow(10, evt.quoteevent.marketdataevent.price.scale)
            const qty = evt.quoteevent.marketdataevent.size.qty / Math.pow(10, evt.quoteevent.marketdataevent.size.scale)
            if (evt.quoteevent.isbid) {
              newInfo = {
                bidpx: px,
                bidqty: qty
              }
            } else {
              newInfo = {
                offerpx: px,
                offerqty: qty
              }
            }
          }
          if (evt.tradeevent !== undefined) {
            item = state.data.get(evt.tradeevent.marketdataevent.instrument.symbol)
            symbol = evt.tradeevent.marketdataevent.instrument.symbol
            newInfo = {
              exch: evt.tradeevent.marketdataevent.exchange,
              symbol: evt.tradeevent.marketdataevent.instrument.symbol,
              px: evt.tradeevent.marketdataevent.price.qty / Math.pow(10, evt.tradeevent.marketdataevent.price.scale),
              qty: evt.tradeevent.marketdataevent.size.qty / Math.pow(10, evt.tradeevent.marketdataevent.size.scale)
            }
          }
          if (evt.marketstatevent !== undefined) {
            item = state.data.get(evt.marketstatevent.instrument.symbol)
            newInfo = {
              open: evt.marketstatevent.open.qty / Math.pow(10, evt.marketstatevent.open.scale),
              close: evt.marketstatevent.close.qty / Math.pow(10, evt.marketstatevent.close.scale),
              high: evt.marketstatevent.high.qty / Math.pow(10, evt.marketstatevent.high.scale),
              low: evt.marketstatevent.low.qty / Math.pow(10, evt.marketstatevent.low.scale),
              volume: evt.marketstatevent.volume.qty / Math.pow(10, evt.marketstatevent.volume.scale)
            }
          }
          item = item === undefined ? {} : item
          state.data.set(symbol, { ...item, ...newInfo })
        })
        stream.on('status', function (status) {
          if (status.metadata) {
            console.log('Received metadata')
            console.log(status.metadata)
          }
        })
        stream.on('error', function (err) {
          console.log('Error code: ' + err.code + ' "' + err.message + '"')
        })
        stream.on('end', function () {
          console.log('stream end signal received')
        })
      })
    },
    async getSnapshot  ({ state, dispatch }, {
      sessionId = ''
    } = {}) {
      const res = await api.GET_MARKETDATA_SNAPSHOT({ sessionId })
      return { code: 0, msg: 'success', data: { records: [Object.assign({}, ...res)] } }
    }
  }
}
