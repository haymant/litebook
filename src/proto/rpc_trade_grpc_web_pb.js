/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var rpc_base_pb = require('./rpc_base_pb.js')

var rpc_paging_pb = require('./rpc_paging_pb.js')

var rpc_trade_types_pb = require('./rpc_trade_types_pb.js')

var rpc_fix_admin_pb = require('./rpc_fix_admin_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = require('./rpc_trade_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.TradeRpcServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.TradeRpcServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.LoginRequest,
 *   !proto.LoginResponse>}
 */
const methodDescriptor_TradeRpcService_login = new grpc.web.MethodDescriptor(
  '/TradeRpcService/login',
  grpc.web.MethodType.UNARY,
  rpc_base_pb.LoginRequest,
  rpc_base_pb.LoginResponse,
  /**
   * @param {!proto.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  rpc_base_pb.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.LoginRequest,
 *   !proto.LoginResponse>}
 */
const methodInfo_TradeRpcService_login = new grpc.web.AbstractClientBase.MethodInfo(
  rpc_base_pb.LoginResponse,
  /**
   * @param {!proto.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  rpc_base_pb.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TradeRpcServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TradeRpcService/login',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_login,
      callback);
};


/**
 * @param {!proto.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.TradeRpcServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TradeRpcService/login',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.LogoutRequest,
 *   !proto.LogoutResponse>}
 */
const methodDescriptor_TradeRpcService_logout = new grpc.web.MethodDescriptor(
  '/TradeRpcService/logout',
  grpc.web.MethodType.UNARY,
  rpc_base_pb.LogoutRequest,
  rpc_base_pb.LogoutResponse,
  /**
   * @param {!proto.LogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  rpc_base_pb.LogoutResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.LogoutRequest,
 *   !proto.LogoutResponse>}
 */
const methodInfo_TradeRpcService_logout = new grpc.web.AbstractClientBase.MethodInfo(
  rpc_base_pb.LogoutResponse,
  /**
   * @param {!proto.LogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  rpc_base_pb.LogoutResponse.deserializeBinary
);


/**
 * @param {!proto.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.LogoutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.LogoutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TradeRpcServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TradeRpcService/logout',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_logout,
      callback);
};


/**
 * @param {!proto.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.LogoutResponse>}
 *     Promise that resolves to the response
 */
proto.TradeRpcServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TradeRpcService/logout',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.HeartbeatRequest,
 *   !proto.HeartbeatResponse>}
 */
const methodDescriptor_TradeRpcService_heartbeat = new grpc.web.MethodDescriptor(
  '/TradeRpcService/heartbeat',
  grpc.web.MethodType.UNARY,
  rpc_base_pb.HeartbeatRequest,
  rpc_base_pb.HeartbeatResponse,
  /**
   * @param {!proto.HeartbeatRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  rpc_base_pb.HeartbeatResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.HeartbeatRequest,
 *   !proto.HeartbeatResponse>}
 */
const methodInfo_TradeRpcService_heartbeat = new grpc.web.AbstractClientBase.MethodInfo(
  rpc_base_pb.HeartbeatResponse,
  /**
   * @param {!proto.HeartbeatRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  rpc_base_pb.HeartbeatResponse.deserializeBinary
);


/**
 * @param {!proto.HeartbeatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.HeartbeatResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.HeartbeatResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TradeRpcServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TradeRpcService/heartbeat',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_heartbeat,
      callback);
};


/**
 * @param {!proto.HeartbeatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.HeartbeatResponse>}
 *     Promise that resolves to the response
 */
proto.TradeRpcServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TradeRpcService/heartbeat',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.OpenOrdersRequest,
 *   !proto.OpenOrdersResponse>}
 */
const methodDescriptor_TradeRpcService_getOpenOrders = new grpc.web.MethodDescriptor(
  '/TradeRpcService/getOpenOrders',
  grpc.web.MethodType.UNARY,
  proto.OpenOrdersRequest,
  proto.OpenOrdersResponse,
  /**
   * @param {!proto.OpenOrdersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.OpenOrdersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.OpenOrdersRequest,
 *   !proto.OpenOrdersResponse>}
 */
const methodInfo_TradeRpcService_getOpenOrders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.OpenOrdersResponse,
  /**
   * @param {!proto.OpenOrdersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.OpenOrdersResponse.deserializeBinary
);


/**
 * @param {!proto.OpenOrdersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.OpenOrdersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.OpenOrdersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TradeRpcServiceClient.prototype.getOpenOrders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TradeRpcService/getOpenOrders',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_getOpenOrders,
      callback);
};


/**
 * @param {!proto.OpenOrdersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.OpenOrdersResponse>}
 *     Promise that resolves to the response
 */
proto.TradeRpcServicePromiseClient.prototype.getOpenOrders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TradeRpcService/getOpenOrders',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_getOpenOrders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SendOrderRequest,
 *   !proto.SendOrderResponse>}
 */
const methodDescriptor_TradeRpcService_sendOrders = new grpc.web.MethodDescriptor(
  '/TradeRpcService/sendOrders',
  grpc.web.MethodType.UNARY,
  proto.SendOrderRequest,
  proto.SendOrderResponse,
  /**
   * @param {!proto.SendOrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SendOrderResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SendOrderRequest,
 *   !proto.SendOrderResponse>}
 */
const methodInfo_TradeRpcService_sendOrders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SendOrderResponse,
  /**
   * @param {!proto.SendOrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SendOrderResponse.deserializeBinary
);


/**
 * @param {!proto.SendOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SendOrderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SendOrderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TradeRpcServiceClient.prototype.sendOrders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TradeRpcService/sendOrders',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_sendOrders,
      callback);
};


/**
 * @param {!proto.SendOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SendOrderResponse>}
 *     Promise that resolves to the response
 */
proto.TradeRpcServicePromiseClient.prototype.sendOrders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TradeRpcService/sendOrders',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_sendOrders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AddTradeMessageListenerRequest,
 *   !proto.TradeMessageListenerResponse>}
 */
const methodDescriptor_TradeRpcService_addTradeMessageListener = new grpc.web.MethodDescriptor(
  '/TradeRpcService/addTradeMessageListener',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.AddTradeMessageListenerRequest,
  proto.TradeMessageListenerResponse,
  /**
   * @param {!proto.AddTradeMessageListenerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TradeMessageListenerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AddTradeMessageListenerRequest,
 *   !proto.TradeMessageListenerResponse>}
 */
const methodInfo_TradeRpcService_addTradeMessageListener = new grpc.web.AbstractClientBase.MethodInfo(
  proto.TradeMessageListenerResponse,
  /**
   * @param {!proto.AddTradeMessageListenerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TradeMessageListenerResponse.deserializeBinary
);


/**
 * @param {!proto.AddTradeMessageListenerRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.TradeMessageListenerResponse>}
 *     The XHR Node Readable Stream
 */
proto.TradeRpcServiceClient.prototype.addTradeMessageListener =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/TradeRpcService/addTradeMessageListener',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_addTradeMessageListener);
};


/**
 * @param {!proto.AddTradeMessageListenerRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.TradeMessageListenerResponse>}
 *     The XHR Node Readable Stream
 */
proto.TradeRpcServicePromiseClient.prototype.addTradeMessageListener =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/TradeRpcService/addTradeMessageListener',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_addTradeMessageListener);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.RemoveTradeMessageListenerRequest,
 *   !proto.RemoveTradeMessageListenerResponse>}
 */
const methodDescriptor_TradeRpcService_removeTradeMessageListener = new grpc.web.MethodDescriptor(
  '/TradeRpcService/removeTradeMessageListener',
  grpc.web.MethodType.UNARY,
  proto.RemoveTradeMessageListenerRequest,
  proto.RemoveTradeMessageListenerResponse,
  /**
   * @param {!proto.RemoveTradeMessageListenerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.RemoveTradeMessageListenerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.RemoveTradeMessageListenerRequest,
 *   !proto.RemoveTradeMessageListenerResponse>}
 */
const methodInfo_TradeRpcService_removeTradeMessageListener = new grpc.web.AbstractClientBase.MethodInfo(
  proto.RemoveTradeMessageListenerResponse,
  /**
   * @param {!proto.RemoveTradeMessageListenerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.RemoveTradeMessageListenerResponse.deserializeBinary
);


/**
 * @param {!proto.RemoveTradeMessageListenerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.RemoveTradeMessageListenerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.RemoveTradeMessageListenerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TradeRpcServiceClient.prototype.removeTradeMessageListener =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TradeRpcService/removeTradeMessageListener',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_removeTradeMessageListener,
      callback);
};


/**
 * @param {!proto.RemoveTradeMessageListenerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.RemoveTradeMessageListenerResponse>}
 *     Promise that resolves to the response
 */
proto.TradeRpcServicePromiseClient.prototype.removeTradeMessageListener =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TradeRpcService/removeTradeMessageListener',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_removeTradeMessageListener);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ResolveSymbolRequest,
 *   !proto.ResolveSymbolResponse>}
 */
const methodDescriptor_TradeRpcService_resolveSymbol = new grpc.web.MethodDescriptor(
  '/TradeRpcService/resolveSymbol',
  grpc.web.MethodType.UNARY,
  proto.ResolveSymbolRequest,
  proto.ResolveSymbolResponse,
  /**
   * @param {!proto.ResolveSymbolRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ResolveSymbolResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ResolveSymbolRequest,
 *   !proto.ResolveSymbolResponse>}
 */
const methodInfo_TradeRpcService_resolveSymbol = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ResolveSymbolResponse,
  /**
   * @param {!proto.ResolveSymbolRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ResolveSymbolResponse.deserializeBinary
);


/**
 * @param {!proto.ResolveSymbolRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ResolveSymbolResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ResolveSymbolResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TradeRpcServiceClient.prototype.resolveSymbol =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TradeRpcService/resolveSymbol',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_resolveSymbol,
      callback);
};


/**
 * @param {!proto.ResolveSymbolRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ResolveSymbolResponse>}
 *     Promise that resolves to the response
 */
proto.TradeRpcServicePromiseClient.prototype.resolveSymbol =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TradeRpcService/resolveSymbol',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_resolveSymbol);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.FindRootOrderIdRequest,
 *   !proto.FindRootOrderIdResponse>}
 */
const methodDescriptor_TradeRpcService_findRootOrderId = new grpc.web.MethodDescriptor(
  '/TradeRpcService/findRootOrderId',
  grpc.web.MethodType.UNARY,
  proto.FindRootOrderIdRequest,
  proto.FindRootOrderIdResponse,
  /**
   * @param {!proto.FindRootOrderIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.FindRootOrderIdResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.FindRootOrderIdRequest,
 *   !proto.FindRootOrderIdResponse>}
 */
const methodInfo_TradeRpcService_findRootOrderId = new grpc.web.AbstractClientBase.MethodInfo(
  proto.FindRootOrderIdResponse,
  /**
   * @param {!proto.FindRootOrderIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.FindRootOrderIdResponse.deserializeBinary
);


/**
 * @param {!proto.FindRootOrderIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.FindRootOrderIdResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.FindRootOrderIdResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TradeRpcServiceClient.prototype.findRootOrderId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TradeRpcService/findRootOrderId',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_findRootOrderId,
      callback);
};


/**
 * @param {!proto.FindRootOrderIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.FindRootOrderIdResponse>}
 *     Promise that resolves to the response
 */
proto.TradeRpcServicePromiseClient.prototype.findRootOrderId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TradeRpcService/findRootOrderId',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_findRootOrderId);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetLatestExecutionReportForOrderChainRequest,
 *   !proto.GetLatestExecutionReportForOrderChainResponse>}
 */
const methodDescriptor_TradeRpcService_getLatestExecutionReportForOrderChain = new grpc.web.MethodDescriptor(
  '/TradeRpcService/getLatestExecutionReportForOrderChain',
  grpc.web.MethodType.UNARY,
  proto.GetLatestExecutionReportForOrderChainRequest,
  proto.GetLatestExecutionReportForOrderChainResponse,
  /**
   * @param {!proto.GetLatestExecutionReportForOrderChainRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetLatestExecutionReportForOrderChainResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetLatestExecutionReportForOrderChainRequest,
 *   !proto.GetLatestExecutionReportForOrderChainResponse>}
 */
const methodInfo_TradeRpcService_getLatestExecutionReportForOrderChain = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetLatestExecutionReportForOrderChainResponse,
  /**
   * @param {!proto.GetLatestExecutionReportForOrderChainRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetLatestExecutionReportForOrderChainResponse.deserializeBinary
);


/**
 * @param {!proto.GetLatestExecutionReportForOrderChainRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetLatestExecutionReportForOrderChainResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetLatestExecutionReportForOrderChainResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TradeRpcServiceClient.prototype.getLatestExecutionReportForOrderChain =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TradeRpcService/getLatestExecutionReportForOrderChain',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_getLatestExecutionReportForOrderChain,
      callback);
};


/**
 * @param {!proto.GetLatestExecutionReportForOrderChainRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetLatestExecutionReportForOrderChainResponse>}
 *     Promise that resolves to the response
 */
proto.TradeRpcServicePromiseClient.prototype.getLatestExecutionReportForOrderChain =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TradeRpcService/getLatestExecutionReportForOrderChain',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_getLatestExecutionReportForOrderChain);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetPositionAsOfRequest,
 *   !proto.GetPositionAsOfResponse>}
 */
const methodDescriptor_TradeRpcService_getPositionAsOf = new grpc.web.MethodDescriptor(
  '/TradeRpcService/getPositionAsOf',
  grpc.web.MethodType.UNARY,
  proto.GetPositionAsOfRequest,
  proto.GetPositionAsOfResponse,
  /**
   * @param {!proto.GetPositionAsOfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetPositionAsOfResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetPositionAsOfRequest,
 *   !proto.GetPositionAsOfResponse>}
 */
const methodInfo_TradeRpcService_getPositionAsOf = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetPositionAsOfResponse,
  /**
   * @param {!proto.GetPositionAsOfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetPositionAsOfResponse.deserializeBinary
);


/**
 * @param {!proto.GetPositionAsOfRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetPositionAsOfResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetPositionAsOfResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TradeRpcServiceClient.prototype.getPositionAsOf =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TradeRpcService/getPositionAsOf',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_getPositionAsOf,
      callback);
};


/**
 * @param {!proto.GetPositionAsOfRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetPositionAsOfResponse>}
 *     Promise that resolves to the response
 */
proto.TradeRpcServicePromiseClient.prototype.getPositionAsOf =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TradeRpcService/getPositionAsOf',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_getPositionAsOf);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetAllPositionsAsOfRequest,
 *   !proto.GetAllPositionsAsOfResponse>}
 */
const methodDescriptor_TradeRpcService_getAllPositionsAsOf = new grpc.web.MethodDescriptor(
  '/TradeRpcService/getAllPositionsAsOf',
  grpc.web.MethodType.UNARY,
  proto.GetAllPositionsAsOfRequest,
  proto.GetAllPositionsAsOfResponse,
  /**
   * @param {!proto.GetAllPositionsAsOfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetAllPositionsAsOfResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetAllPositionsAsOfRequest,
 *   !proto.GetAllPositionsAsOfResponse>}
 */
const methodInfo_TradeRpcService_getAllPositionsAsOf = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetAllPositionsAsOfResponse,
  /**
   * @param {!proto.GetAllPositionsAsOfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetAllPositionsAsOfResponse.deserializeBinary
);


/**
 * @param {!proto.GetAllPositionsAsOfRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetAllPositionsAsOfResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetAllPositionsAsOfResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TradeRpcServiceClient.prototype.getAllPositionsAsOf =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TradeRpcService/getAllPositionsAsOf',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_getAllPositionsAsOf,
      callback);
};


/**
 * @param {!proto.GetAllPositionsAsOfRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetAllPositionsAsOfResponse>}
 *     Promise that resolves to the response
 */
proto.TradeRpcServicePromiseClient.prototype.getAllPositionsAsOf =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TradeRpcService/getAllPositionsAsOf',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_getAllPositionsAsOf);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetAllPositionsByRootAsOfRequest,
 *   !proto.GetAllPositionsByRootAsOfResponse>}
 */
const methodDescriptor_TradeRpcService_getAllPositionsByRootAsOf = new grpc.web.MethodDescriptor(
  '/TradeRpcService/getAllPositionsByRootAsOf',
  grpc.web.MethodType.UNARY,
  proto.GetAllPositionsByRootAsOfRequest,
  proto.GetAllPositionsByRootAsOfResponse,
  /**
   * @param {!proto.GetAllPositionsByRootAsOfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetAllPositionsByRootAsOfResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetAllPositionsByRootAsOfRequest,
 *   !proto.GetAllPositionsByRootAsOfResponse>}
 */
const methodInfo_TradeRpcService_getAllPositionsByRootAsOf = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetAllPositionsByRootAsOfResponse,
  /**
   * @param {!proto.GetAllPositionsByRootAsOfRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetAllPositionsByRootAsOfResponse.deserializeBinary
);


/**
 * @param {!proto.GetAllPositionsByRootAsOfRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetAllPositionsByRootAsOfResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetAllPositionsByRootAsOfResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TradeRpcServiceClient.prototype.getAllPositionsByRootAsOf =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TradeRpcService/getAllPositionsByRootAsOf',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_getAllPositionsByRootAsOf,
      callback);
};


/**
 * @param {!proto.GetAllPositionsByRootAsOfRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetAllPositionsByRootAsOfResponse>}
 *     Promise that resolves to the response
 */
proto.TradeRpcServicePromiseClient.prototype.getAllPositionsByRootAsOf =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TradeRpcService/getAllPositionsByRootAsOf',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_getAllPositionsByRootAsOf);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AddReportRequest,
 *   !proto.AddReportResponse>}
 */
const methodDescriptor_TradeRpcService_addReport = new grpc.web.MethodDescriptor(
  '/TradeRpcService/addReport',
  grpc.web.MethodType.UNARY,
  proto.AddReportRequest,
  proto.AddReportResponse,
  /**
   * @param {!proto.AddReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AddReportResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AddReportRequest,
 *   !proto.AddReportResponse>}
 */
const methodInfo_TradeRpcService_addReport = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AddReportResponse,
  /**
   * @param {!proto.AddReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AddReportResponse.deserializeBinary
);


/**
 * @param {!proto.AddReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AddReportResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AddReportResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TradeRpcServiceClient.prototype.addReport =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TradeRpcService/addReport',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_addReport,
      callback);
};


/**
 * @param {!proto.AddReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AddReportResponse>}
 *     Promise that resolves to the response
 */
proto.TradeRpcServicePromiseClient.prototype.addReport =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TradeRpcService/addReport',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_addReport);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DeleteReportRequest,
 *   !proto.DeleteReportResponse>}
 */
const methodDescriptor_TradeRpcService_deleteReport = new grpc.web.MethodDescriptor(
  '/TradeRpcService/deleteReport',
  grpc.web.MethodType.UNARY,
  proto.DeleteReportRequest,
  proto.DeleteReportResponse,
  /**
   * @param {!proto.DeleteReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeleteReportResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DeleteReportRequest,
 *   !proto.DeleteReportResponse>}
 */
const methodInfo_TradeRpcService_deleteReport = new grpc.web.AbstractClientBase.MethodInfo(
  proto.DeleteReportResponse,
  /**
   * @param {!proto.DeleteReportRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeleteReportResponse.deserializeBinary
);


/**
 * @param {!proto.DeleteReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.DeleteReportResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DeleteReportResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TradeRpcServiceClient.prototype.deleteReport =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TradeRpcService/deleteReport',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_deleteReport,
      callback);
};


/**
 * @param {!proto.DeleteReportRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DeleteReportResponse>}
 *     Promise that resolves to the response
 */
proto.TradeRpcServicePromiseClient.prototype.deleteReport =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TradeRpcService/deleteReport',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_deleteReport);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ReadAvailableFixInitiatorSessionsRequest,
 *   !proto.ReadAvailableFixInitiatorSessionsResponse>}
 */
const methodDescriptor_TradeRpcService_readAvailableFixInitiatorSessions = new grpc.web.MethodDescriptor(
  '/TradeRpcService/readAvailableFixInitiatorSessions',
  grpc.web.MethodType.UNARY,
  proto.ReadAvailableFixInitiatorSessionsRequest,
  proto.ReadAvailableFixInitiatorSessionsResponse,
  /**
   * @param {!proto.ReadAvailableFixInitiatorSessionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ReadAvailableFixInitiatorSessionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ReadAvailableFixInitiatorSessionsRequest,
 *   !proto.ReadAvailableFixInitiatorSessionsResponse>}
 */
const methodInfo_TradeRpcService_readAvailableFixInitiatorSessions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ReadAvailableFixInitiatorSessionsResponse,
  /**
   * @param {!proto.ReadAvailableFixInitiatorSessionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ReadAvailableFixInitiatorSessionsResponse.deserializeBinary
);


/**
 * @param {!proto.ReadAvailableFixInitiatorSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ReadAvailableFixInitiatorSessionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ReadAvailableFixInitiatorSessionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TradeRpcServiceClient.prototype.readAvailableFixInitiatorSessions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TradeRpcService/readAvailableFixInitiatorSessions',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_readAvailableFixInitiatorSessions,
      callback);
};


/**
 * @param {!proto.ReadAvailableFixInitiatorSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ReadAvailableFixInitiatorSessionsResponse>}
 *     Promise that resolves to the response
 */
proto.TradeRpcServicePromiseClient.prototype.readAvailableFixInitiatorSessions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TradeRpcService/readAvailableFixInitiatorSessions',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_readAvailableFixInitiatorSessions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetReportsRequest,
 *   !proto.GetReportsResponse>}
 */
const methodDescriptor_TradeRpcService_getReports = new grpc.web.MethodDescriptor(
  '/TradeRpcService/getReports',
  grpc.web.MethodType.UNARY,
  proto.GetReportsRequest,
  proto.GetReportsResponse,
  /**
   * @param {!proto.GetReportsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetReportsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetReportsRequest,
 *   !proto.GetReportsResponse>}
 */
const methodInfo_TradeRpcService_getReports = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetReportsResponse,
  /**
   * @param {!proto.GetReportsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetReportsResponse.deserializeBinary
);


/**
 * @param {!proto.GetReportsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetReportsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetReportsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TradeRpcServiceClient.prototype.getReports =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TradeRpcService/getReports',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_getReports,
      callback);
};


/**
 * @param {!proto.GetReportsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetReportsResponse>}
 *     Promise that resolves to the response
 */
proto.TradeRpcServicePromiseClient.prototype.getReports =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TradeRpcService/getReports',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_getReports);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetFillsRequest,
 *   !proto.GetFillsResponse>}
 */
const methodDescriptor_TradeRpcService_getFills = new grpc.web.MethodDescriptor(
  '/TradeRpcService/getFills',
  grpc.web.MethodType.UNARY,
  proto.GetFillsRequest,
  proto.GetFillsResponse,
  /**
   * @param {!proto.GetFillsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetFillsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetFillsRequest,
 *   !proto.GetFillsResponse>}
 */
const methodInfo_TradeRpcService_getFills = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetFillsResponse,
  /**
   * @param {!proto.GetFillsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetFillsResponse.deserializeBinary
);


/**
 * @param {!proto.GetFillsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetFillsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetFillsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TradeRpcServiceClient.prototype.getFills =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TradeRpcService/getFills',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_getFills,
      callback);
};


/**
 * @param {!proto.GetFillsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetFillsResponse>}
 *     Promise that resolves to the response
 */
proto.TradeRpcServicePromiseClient.prototype.getFills =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TradeRpcService/getFills',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_getFills);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetAverageFillPricesRequest,
 *   !proto.GetAverageFillPricesResponse>}
 */
const methodDescriptor_TradeRpcService_getAverageFillPrices = new grpc.web.MethodDescriptor(
  '/TradeRpcService/getAverageFillPrices',
  grpc.web.MethodType.UNARY,
  proto.GetAverageFillPricesRequest,
  proto.GetAverageFillPricesResponse,
  /**
   * @param {!proto.GetAverageFillPricesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetAverageFillPricesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetAverageFillPricesRequest,
 *   !proto.GetAverageFillPricesResponse>}
 */
const methodInfo_TradeRpcService_getAverageFillPrices = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetAverageFillPricesResponse,
  /**
   * @param {!proto.GetAverageFillPricesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetAverageFillPricesResponse.deserializeBinary
);


/**
 * @param {!proto.GetAverageFillPricesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetAverageFillPricesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetAverageFillPricesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TradeRpcServiceClient.prototype.getAverageFillPrices =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TradeRpcService/getAverageFillPrices',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_getAverageFillPrices,
      callback);
};


/**
 * @param {!proto.GetAverageFillPricesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetAverageFillPricesResponse>}
 *     Promise that resolves to the response
 */
proto.TradeRpcServicePromiseClient.prototype.getAverageFillPrices =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TradeRpcService/getAverageFillPrices',
      request,
      metadata || {},
      methodDescriptor_TradeRpcService_getAverageFillPrices);
};


module.exports = proto;

