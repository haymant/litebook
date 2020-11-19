import { MarketDataRequest, SnapshotRequest } from '@/proto/rpc_marketdata_grpc_web_pb'
import { SecurityType, Instrument } from '@/proto/rpc_trade_types_pb'
import { ContentAndCapability } from '@/proto/rpc_marketdata_types_pb'
import { PageRequest } from '@/proto/rpc_paging_pb'

export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools, marketDataService }) => ({
  REQUEST_MARKET_DATA (data) {
    const marketDataRequest = new MarketDataRequest()
    marketDataRequest.setSessionid(data.sessionId)
    const rId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0
      var v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
    marketDataRequest.setRequest('requestid=' + rId + ':symbols=' + data.symbol + ':content=LATEST_TICK,MARKET_STAT,TOP_OF_BOOK:assetclass=EQUITY' + ':parameters=range\\=5d\\:types\\=QUOTE,CHART')
    return new Promise((resolve, reject) => {
      var stream = marketDataService.request(marketDataRequest, { })
      resolve(stream)
    })
  },
  GET_MARKETDATA_SNAPSHOT (data) {
    var snapshotRequest = new SnapshotRequest()
    snapshotRequest.setSessionid(data.sessionId)
    var instrument = new Instrument()
    instrument.setSymbol('FB')
    instrument.setSecuritytype(SecurityType.COMMONSTOCK)
    snapshotRequest.setInstrument(instrument)
    var page = new PageRequest()
    page.setPage(0)
    page.setSize(10)
    snapshotRequest.setPage(page)
    const p1 = new Promise((resolve, reject) => {
      snapshotRequest.setContent(ContentAndCapability.LATEST_TICK)
      marketDataService.getSnapshot(snapshotRequest, { }, (err, response) => {
        if (err) {
          return reject(err)
        } else {
          if (response.getEventList().length < 1) {
            return resolve({
              symbol: 'FE'
            })
          }
          const res = response.getEventList()[0].getTradeevent().getMarketdataevent()
          return resolve({
            exch: res.getExchange(),
            symbol: res.getInstrument().getSymbol(),
            px: res.getPrice().getQty() / Math.pow(10, res.getPrice().getScale()),
            qty: res.getSize().getQty() / Math.pow(10, res.getSize().getScale())
          })
        }
      })
    })
    const p2 = new Promise((resolve, reject) => {
      snapshotRequest.setContent(ContentAndCapability.MARKET_STAT)
      marketDataService.getSnapshot(snapshotRequest, { }, (err, response) => {
        if (err) {
          return reject(err)
        } else {
          if (response.getEventList().length < 1) {
            return resolve({
            })
          }
          const res = response.getEventList()[0].getMarketstatevent()
          return resolve({
            open: res.getOpen().getQty() / Math.pow(10, res.getOpen().getScale()),
            close: res.getClose().getQty() / Math.pow(10, res.getClose().getScale()),
            high: res.getHigh().getQty() / Math.pow(10, res.getHigh().getScale()),
            low: res.getLow().getQty() / Math.pow(10, res.getLow().getScale()),
            volume: res.getVolume().getQty() / Math.pow(10, res.getVolume().getScale())
          })
        }
      })
    })
    const p3 = new Promise((resolve, reject) => {
      snapshotRequest.setContent(ContentAndCapability.TOP_OF_BOOK)
      marketDataService.getSnapshot(snapshotRequest, { }, (err, response) => {
        if (err) {
          return reject(err)
        } else {
          if (response.getEventList().length < 1) {
            return resolve({
            })
          }
          const bid = response.getEventList()[0].getQuoteevent().getMarketdataevent()
          const ask = response.getEventList()[1].getQuoteevent().getMarketdataevent()
          return resolve({
            bidpx: bid.getPrice().getQty() / Math.pow(10, bid.getPrice().getScale()),
            bidqty: bid.getSize().getQty() / Math.pow(10, bid.getSize().getScale()),
            offerpx: ask.getPrice().getQty() / Math.pow(10, ask.getPrice().getScale()),
            offerqty: ask.getSize().getQty() / Math.pow(10, ask.getSize().getScale())
          })
        }
      })
    })
    return Promise.all([p1, p2, p3])
  }
})
