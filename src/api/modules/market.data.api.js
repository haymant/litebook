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
    marketDataRequest.setRequest('requestid=' + rId + ':symbols=' + data.symbol + ':content=LATEST_TICK,MARKET_STAT,TOP_OF_BOOK:assetclass=EQUITY')
    return new Promise((resolve, reject) => {
      marketDataService.request(marketDataRequest, { })
      resolve({})
    })
  },
  GET_MARKETDATA_SNAPSHOT (data) {
    var snapshotRequest = new SnapshotRequest()
    snapshotRequest.setSessionid(data.sessionId)
    var instrument = new Instrument()
    instrument.setSymbol('AAPL')
    instrument.setSecuritytype(SecurityType.COMMONSTOCK)
    snapshotRequest.setInstrument(instrument)
    snapshotRequest.setContent(ContentAndCapability.LATEST_TICK)
    var page = new PageRequest()
    page.setPage(0)
    page.setSize(10)
    snapshotRequest.setPage(page)
    return new Promise((resolve, reject) => {
      marketDataService.getSnapshot(snapshotRequest, { }, (err, response) => {
        if (err) {
          return reject(err)
        } else {
          const res = response.getEventList()[0].getTradeevent().getMarketdataevent()
          debugger
          return resolve({
            exch: res.getExchange(),
            symbol: res.getInstrument().getSymbol(),
            px: res.getPrice(),
            qty: res.getSize()
           })
        }
      })
    })
  }
})
