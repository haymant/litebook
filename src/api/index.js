import { assign, map } from 'lodash'
import faker from 'faker/locale/zh_CN'
import { service, request, serviceForMock, requestForMock, mock } from './service'
import * as tools from './tools'
import { MarketDataRpcServiceClient } from '@/proto/rpc_marketdata_grpc_web_pb'
import { TradeRpcServiceClient } from '@/proto/rpc_trade_grpc_web_pb'

const files = require.context('./modules', true, /\.api\.js$/)
const generators = files.keys().map(key => files(key).default)

const serverURL = 'http://localhost:8011'
const marketDataService = new MarketDataRpcServiceClient(serverURL, null, null)
const tradeService = new TradeRpcServiceClient(serverURL, null, null)

export default assign({}, ...map(generators, generator => generator({
  service,
  request,
  serviceForMock,
  requestForMock,
  mock,
  faker,
  tools,
  marketDataService,
  tradeService
})))
