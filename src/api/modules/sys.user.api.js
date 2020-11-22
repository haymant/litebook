import { LoginRequest } from '@/proto/rpc_base_pb'

export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools, marketDataService, tradeService }) => ({
  /**
   * @description 登录
   * @param {Object} data 登录携带的信息
   */
  SYS_USER_LOGIN (data = {}) {
    const loginRequest = new LoginRequest()
    loginRequest.setAppid('AdminRpcClient/4.0.2-SNAPSHOT')
    loginRequest.setVersionid('4.0.2-SNAPSHOT')
    loginRequest.setClientid('9325ad14-25f3-4a9a-98b1-0b15485286a5')
    loginRequest.setUsername(data.username)
    loginRequest.setPassword(data.password)
    return new Promise((resolve, reject) => {
      tradeService.login(loginRequest, { }, (err, response) => {
        if (err) {
          return reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }
})
