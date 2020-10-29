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

var rpc_marketdata_types_pb = require('./rpc_marketdata_types_pb.js')
const proto = require('./rpc_marketdata_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.MarketDataRpcServiceClient =
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
proto.MarketDataRpcServicePromiseClient =
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
const methodDescriptor_MarketDataRpcService_login = new grpc.web.MethodDescriptor(
  '/MarketDataRpcService/login',
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
const methodInfo_MarketDataRpcService_login = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.MarketDataRpcServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/MarketDataRpcService/login',
      request,
      metadata || {},
      methodDescriptor_MarketDataRpcService_login,
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
proto.MarketDataRpcServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/MarketDataRpcService/login',
      request,
      metadata || {},
      methodDescriptor_MarketDataRpcService_login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.LogoutRequest,
 *   !proto.LogoutResponse>}
 */
const methodDescriptor_MarketDataRpcService_logout = new grpc.web.MethodDescriptor(
  '/MarketDataRpcService/logout',
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
const methodInfo_MarketDataRpcService_logout = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.MarketDataRpcServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/MarketDataRpcService/logout',
      request,
      metadata || {},
      methodDescriptor_MarketDataRpcService_logout,
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
proto.MarketDataRpcServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/MarketDataRpcService/logout',
      request,
      metadata || {},
      methodDescriptor_MarketDataRpcService_logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.HeartbeatRequest,
 *   !proto.HeartbeatResponse>}
 */
const methodDescriptor_MarketDataRpcService_heartbeat = new grpc.web.MethodDescriptor(
  '/MarketDataRpcService/heartbeat',
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
const methodInfo_MarketDataRpcService_heartbeat = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.MarketDataRpcServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/MarketDataRpcService/heartbeat',
      request,
      metadata || {},
      methodDescriptor_MarketDataRpcService_heartbeat,
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
proto.MarketDataRpcServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/MarketDataRpcService/heartbeat',
      request,
      metadata || {},
      methodDescriptor_MarketDataRpcService_heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.MarketDataRequest,
 *   !proto.EventsResponse>}
 */
const methodDescriptor_MarketDataRpcService_request = new grpc.web.MethodDescriptor(
  '/MarketDataRpcService/request',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.MarketDataRequest,
  proto.EventsResponse,
  /**
   * @param {!proto.MarketDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.EventsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.MarketDataRequest,
 *   !proto.EventsResponse>}
 */
const methodInfo_MarketDataRpcService_request = new grpc.web.AbstractClientBase.MethodInfo(
  proto.EventsResponse,
  /**
   * @param {!proto.MarketDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.EventsResponse.deserializeBinary
);


/**
 * @param {!proto.MarketDataRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.EventsResponse>}
 *     The XHR Node Readable Stream
 */
proto.MarketDataRpcServiceClient.prototype.request =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/MarketDataRpcService/request',
      request,
      metadata || {},
      methodDescriptor_MarketDataRpcService_request);
};


/**
 * @param {!proto.MarketDataRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.EventsResponse>}
 *     The XHR Node Readable Stream
 */
proto.MarketDataRpcServicePromiseClient.prototype.request =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/MarketDataRpcService/request',
      request,
      metadata || {},
      methodDescriptor_MarketDataRpcService_request);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CancelRequest,
 *   !proto.CancelResponse>}
 */
const methodDescriptor_MarketDataRpcService_cancel = new grpc.web.MethodDescriptor(
  '/MarketDataRpcService/cancel',
  grpc.web.MethodType.UNARY,
  proto.CancelRequest,
  proto.CancelResponse,
  /**
   * @param {!proto.CancelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CancelResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.CancelRequest,
 *   !proto.CancelResponse>}
 */
const methodInfo_MarketDataRpcService_cancel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.CancelResponse,
  /**
   * @param {!proto.CancelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CancelResponse.deserializeBinary
);


/**
 * @param {!proto.CancelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.CancelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CancelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.MarketDataRpcServiceClient.prototype.cancel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/MarketDataRpcService/cancel',
      request,
      metadata || {},
      methodDescriptor_MarketDataRpcService_cancel,
      callback);
};


/**
 * @param {!proto.CancelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CancelResponse>}
 *     Promise that resolves to the response
 */
proto.MarketDataRpcServicePromiseClient.prototype.cancel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/MarketDataRpcService/cancel',
      request,
      metadata || {},
      methodDescriptor_MarketDataRpcService_cancel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SnapshotRequest,
 *   !proto.SnapshotResponse>}
 */
const methodDescriptor_MarketDataRpcService_getSnapshot = new grpc.web.MethodDescriptor(
  '/MarketDataRpcService/getSnapshot',
  grpc.web.MethodType.UNARY,
  proto.SnapshotRequest,
  proto.SnapshotResponse,
  /**
   * @param {!proto.SnapshotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SnapshotResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SnapshotRequest,
 *   !proto.SnapshotResponse>}
 */
const methodInfo_MarketDataRpcService_getSnapshot = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SnapshotResponse,
  /**
   * @param {!proto.SnapshotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SnapshotResponse.deserializeBinary
);


/**
 * @param {!proto.SnapshotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SnapshotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SnapshotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.MarketDataRpcServiceClient.prototype.getSnapshot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/MarketDataRpcService/getSnapshot',
      request,
      metadata || {},
      methodDescriptor_MarketDataRpcService_getSnapshot,
      callback);
};


/**
 * @param {!proto.SnapshotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SnapshotResponse>}
 *     Promise that resolves to the response
 */
proto.MarketDataRpcServicePromiseClient.prototype.getSnapshot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/MarketDataRpcService/getSnapshot',
      request,
      metadata || {},
      methodDescriptor_MarketDataRpcService_getSnapshot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AvailableCapabilityRequest,
 *   !proto.AvailableCapabilityResponse>}
 */
const methodDescriptor_MarketDataRpcService_getAvailableCapability = new grpc.web.MethodDescriptor(
  '/MarketDataRpcService/getAvailableCapability',
  grpc.web.MethodType.UNARY,
  proto.AvailableCapabilityRequest,
  proto.AvailableCapabilityResponse,
  /**
   * @param {!proto.AvailableCapabilityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AvailableCapabilityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AvailableCapabilityRequest,
 *   !proto.AvailableCapabilityResponse>}
 */
const methodInfo_MarketDataRpcService_getAvailableCapability = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AvailableCapabilityResponse,
  /**
   * @param {!proto.AvailableCapabilityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AvailableCapabilityResponse.deserializeBinary
);


/**
 * @param {!proto.AvailableCapabilityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AvailableCapabilityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AvailableCapabilityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.MarketDataRpcServiceClient.prototype.getAvailableCapability =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/MarketDataRpcService/getAvailableCapability',
      request,
      metadata || {},
      methodDescriptor_MarketDataRpcService_getAvailableCapability,
      callback);
};


/**
 * @param {!proto.AvailableCapabilityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AvailableCapabilityResponse>}
 *     Promise that resolves to the response
 */
proto.MarketDataRpcServicePromiseClient.prototype.getAvailableCapability =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/MarketDataRpcService/getAvailableCapability',
      request,
      metadata || {},
      methodDescriptor_MarketDataRpcService_getAvailableCapability);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AddMarketDataStatusListenerRequest,
 *   !proto.MarketDataStatusListenerResponse>}
 */
const methodDescriptor_MarketDataRpcService_addMarketDataStatusListener = new grpc.web.MethodDescriptor(
  '/MarketDataRpcService/addMarketDataStatusListener',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.AddMarketDataStatusListenerRequest,
  proto.MarketDataStatusListenerResponse,
  /**
   * @param {!proto.AddMarketDataStatusListenerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.MarketDataStatusListenerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AddMarketDataStatusListenerRequest,
 *   !proto.MarketDataStatusListenerResponse>}
 */
const methodInfo_MarketDataRpcService_addMarketDataStatusListener = new grpc.web.AbstractClientBase.MethodInfo(
  proto.MarketDataStatusListenerResponse,
  /**
   * @param {!proto.AddMarketDataStatusListenerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.MarketDataStatusListenerResponse.deserializeBinary
);


/**
 * @param {!proto.AddMarketDataStatusListenerRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.MarketDataStatusListenerResponse>}
 *     The XHR Node Readable Stream
 */
proto.MarketDataRpcServiceClient.prototype.addMarketDataStatusListener =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/MarketDataRpcService/addMarketDataStatusListener',
      request,
      metadata || {},
      methodDescriptor_MarketDataRpcService_addMarketDataStatusListener);
};


/**
 * @param {!proto.AddMarketDataStatusListenerRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.MarketDataStatusListenerResponse>}
 *     The XHR Node Readable Stream
 */
proto.MarketDataRpcServicePromiseClient.prototype.addMarketDataStatusListener =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/MarketDataRpcService/addMarketDataStatusListener',
      request,
      metadata || {},
      methodDescriptor_MarketDataRpcService_addMarketDataStatusListener);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.RemoveMarketDataStatusListenerRequest,
 *   !proto.RemoveMarketDataStatusListenerResponse>}
 */
const methodDescriptor_MarketDataRpcService_removeMarketDataStatusListener = new grpc.web.MethodDescriptor(
  '/MarketDataRpcService/removeMarketDataStatusListener',
  grpc.web.MethodType.UNARY,
  proto.RemoveMarketDataStatusListenerRequest,
  proto.RemoveMarketDataStatusListenerResponse,
  /**
   * @param {!proto.RemoveMarketDataStatusListenerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.RemoveMarketDataStatusListenerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.RemoveMarketDataStatusListenerRequest,
 *   !proto.RemoveMarketDataStatusListenerResponse>}
 */
const methodInfo_MarketDataRpcService_removeMarketDataStatusListener = new grpc.web.AbstractClientBase.MethodInfo(
  proto.RemoveMarketDataStatusListenerResponse,
  /**
   * @param {!proto.RemoveMarketDataStatusListenerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.RemoveMarketDataStatusListenerResponse.deserializeBinary
);


/**
 * @param {!proto.RemoveMarketDataStatusListenerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.RemoveMarketDataStatusListenerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.RemoveMarketDataStatusListenerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.MarketDataRpcServiceClient.prototype.removeMarketDataStatusListener =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/MarketDataRpcService/removeMarketDataStatusListener',
      request,
      metadata || {},
      methodDescriptor_MarketDataRpcService_removeMarketDataStatusListener,
      callback);
};


/**
 * @param {!proto.RemoveMarketDataStatusListenerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.RemoveMarketDataStatusListenerResponse>}
 *     Promise that resolves to the response
 */
proto.MarketDataRpcServicePromiseClient.prototype.removeMarketDataStatusListener =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/MarketDataRpcService/removeMarketDataStatusListener',
      request,
      metadata || {},
      methodDescriptor_MarketDataRpcService_removeMarketDataStatusListener);
};


module.exports = proto;

