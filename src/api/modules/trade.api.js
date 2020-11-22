import { GetReportsRequest } from '@/proto/rpc_trade_pb'
import { PageRequest } from '@/proto/rpc_paging_pb'

export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools, marketDataService, tradeService }) => ({
  GET_TRADE_REPORTS (data = {}) {
    const getReportsRequest = new GetReportsRequest()
    getReportsRequest.setSessionid(data.sessionId)
    var page = new PageRequest()
    page.setPage(0)
    page.setSize(10)
    getReportsRequest.setPagerequest(page)
    return tradeService.getReports(getReportsRequest, { }, (err, response) => {
      if (err) {
        console.log(err)
      }
    })
  }
})
