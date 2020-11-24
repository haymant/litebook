import {
  GetReportsRequest,
  OpenOrdersRequest,
  GetPositionAsOfRequest,
  GetLatestExecutionReportForOrderChainRequest,
  GetAllPositionsAsOfRequest,
  GetAllPositionsByRootAsOfRequest,
  GetFillsRequest,
  GetAverageFillPricesRequest,
  SendOrderRequest
} from '@/proto/rpc_trade_pb'
import { SecurityType, Instrument, Order, OrderBase, Side, OrderType } from '@/proto/rpc_trade_types_pb'
import { PageRequest } from '@/proto/rpc_paging_pb'
import { Qty } from '@/proto/rpc_base_pb'

var timestampPb = require('google-protobuf/google/protobuf/timestamp_pb.js')

export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools, marketDataService, tradeService }) => ({
  GET_TRADE_REPORTS (data = {}) {
    const getReportsRequest = new GetReportsRequest()
    getReportsRequest.setSessionid(data.sessionId)
    var page = new PageRequest()
    page.setPage(0)
    page.setSize(10)
    getReportsRequest.setPagerequest(page)
    return new Promise((resolve, reject) => {
      tradeService.getReports(getReportsRequest, { }, (err, response) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  },
  GET_OPEN_ORDERS (data = {}) {
    const openOrdersRequest = new OpenOrdersRequest()
    openOrdersRequest.setSessionid(data.sessionId)
    var page = new PageRequest()
    page.setPage(0)
    page.setSize(10)
    openOrdersRequest.setPagerequest(page)
    return new Promise((resolve, reject) => {
      tradeService.getOpenOrders(openOrdersRequest, { }, (err, response) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  },
  GET_POSITION_OF (data = {}) {
    const getPositionAsOfRequest = new GetPositionAsOfRequest()
    getPositionAsOfRequest.setSessionid(data.sessionId)
    var instrument = new Instrument()
    instrument.setSymbol('FB')
    instrument.setSecuritytype(SecurityType.COMMONSTOCK)
    getPositionAsOfRequest.setInstrument(instrument)
    var time = new timestampPb.Timestamp()
    time.fromDate(new Date())
    /*
        const timeMS = Date.now();
        time.setSeconds(timeMS / 1000);
        time.setNanos((timeMS % 1000) * 1e6);
        */
    getPositionAsOfRequest.setTimestamp(time)
    return tradeService.getPositionAsOf(getPositionAsOfRequest, { }, (err, response) => {
      if (err) {
        console.log(err)
      }
    })
  },
  GET_EXE_REPORTS (data = {}) {
    const getLatestExecutionReportForOrderChainRequest = new GetLatestExecutionReportForOrderChainRequest()
    getLatestExecutionReportForOrderChainRequest.setSessionid(data.sessionId)
    getLatestExecutionReportForOrderChainRequest.setOrderid('1')
    return tradeService.getLatestExecutionReportForOrderChain(getLatestExecutionReportForOrderChainRequest, { }, (err, response) => {
      if (err) {
        console.log(err)
      }
    })
  },
  GET_ALL_POSITION_OF (data = {}) {
    const getAllPositionsAsOfRequest = new GetAllPositionsAsOfRequest()
    getAllPositionsAsOfRequest.setSessionid(data.sessionId)
    var time = new timestampPb.Timestamp()
    time.fromDate(new Date())
    getAllPositionsAsOfRequest.setTimestamp(time)
    return tradeService.getAllPositionsAsOf(getAllPositionsAsOfRequest, { }, (err, response) => {
      if (err) {
        console.log(err)
      }
    })
  },
  GET_ALL_POSITION_BY_ROOT (data = {}) {
    const getAllPositionsByRootAsOfRequest = new GetAllPositionsByRootAsOfRequest()
    getAllPositionsByRootAsOfRequest.setSessionid(data.sessionId)
    var time = new timestampPb.Timestamp()
    time.fromDate(new Date())
    getAllPositionsByRootAsOfRequest.setTimestamp(time)
    getAllPositionsByRootAsOfRequest.setRootList([])
    return tradeService.getAllPositionsByRootAsOf(getAllPositionsByRootAsOfRequest, { }, (err, response) => {
      if (err) {
        console.log(err)
      }
    })
  },
  GET_FILLS (data = {}) {
    const getFillsRequest = new GetFillsRequest()
    getFillsRequest.setSessionid(data.sessionId)
    var page = new PageRequest()
    page.setPage(0)
    page.setSize(10)
    getFillsRequest.setPagerequest(page)
    return tradeService.getFills(getFillsRequest, { }, (err, response) => {
      if (err) {
        console.log(err)
      }
    })
  },
  GET_AVG_FILL_PRICE (data = {}) {
    const getAverageFillPricesRequest = new GetAverageFillPricesRequest()
    getAverageFillPricesRequest.setSessionid(data.sessionId)
    var page = new PageRequest()
    page.setPage(0)
    page.setSize(10)
    getAverageFillPricesRequest.setPagerequest(page)
    return tradeService.getAverageFillPrices(getAverageFillPricesRequest, { }, (err, response) => {
      if (err) {
        console.log(err)
      }
    })
  },
  PLACE_ORDER (data = {}) {
    const sendOrderRequest = new SendOrderRequest()
    sendOrderRequest.setSessionid(data.sessionId)
    var order = new Order()
    var orderB = new OrderBase()
    var instrument = new Instrument()
    instrument.setSymbol('FB')
    instrument.setSecuritytype(SecurityType.COMMONSTOCK)
    orderB.setInstrument(instrument)
    orderB.setOrderid('1111')
    var qty = new Qty()
    qty.setQty(100)
    orderB.setQuantity(qty)
    var px = new Qty()
    px.setQty(100)
    orderB.setPrice(px)
    orderB.setSide(Side.BUY)
    orderB.setOrdertype(OrderType.LIMIT)
    order.setOrderbase(orderB)
    sendOrderRequest.setOrderList([order])
    return tradeService.sendOrders(sendOrderRequest, { }, (err, response) => {
      if (err) {
        console.log(err)
      }
    })
  }
})
