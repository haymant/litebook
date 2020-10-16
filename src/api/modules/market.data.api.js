const data = [
  { symbol: 'APPL' }
]

export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({
  GET_MARKET_DATA () {
    // 模拟数据
    mock
      .onAny('/getMarketData')
      .reply(config => {
        return data
      })
    // 接口请求
    return requestForMock({
      url: '/getMarketData',
      method: 'get',
      data
    })
  }
})
