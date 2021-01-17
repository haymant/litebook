import firebase from '@/firebase'

export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools, marketDataService, tradeService }) => ({
  /**
   * @description 登录
   * @param {Object} data 登录携带的信息
   */
  SYS_USER_LOGIN (data = {}) {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(data.username, data.password).then(result => {
        resolve(result)
      }).catch(err => {
        return reject(err)
      })
    })
  }
})
