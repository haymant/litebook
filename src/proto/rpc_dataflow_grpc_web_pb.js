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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = require('./rpc_dataflow_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.DataFlowRpcServiceClient =
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
proto.DataFlowRpcServicePromiseClient =
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
const methodDescriptor_DataFlowRpcService_login = new grpc.web.MethodDescriptor(
  '/DataFlowRpcService/login',
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
const methodInfo_DataFlowRpcService_login = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.DataFlowRpcServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DataFlowRpcService/login',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_login,
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
proto.DataFlowRpcServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DataFlowRpcService/login',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.LogoutRequest,
 *   !proto.LogoutResponse>}
 */
const methodDescriptor_DataFlowRpcService_logout = new grpc.web.MethodDescriptor(
  '/DataFlowRpcService/logout',
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
const methodInfo_DataFlowRpcService_logout = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.DataFlowRpcServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DataFlowRpcService/logout',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_logout,
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
proto.DataFlowRpcServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DataFlowRpcService/logout',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.HeartbeatRequest,
 *   !proto.HeartbeatResponse>}
 */
const methodDescriptor_DataFlowRpcService_heartbeat = new grpc.web.MethodDescriptor(
  '/DataFlowRpcService/heartbeat',
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
const methodInfo_DataFlowRpcService_heartbeat = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.DataFlowRpcServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DataFlowRpcService/heartbeat',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_heartbeat,
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
proto.DataFlowRpcServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DataFlowRpcService/heartbeat',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ProvidersRequest,
 *   !proto.ProvidersResponse>}
 */
const methodDescriptor_DataFlowRpcService_getProviders = new grpc.web.MethodDescriptor(
  '/DataFlowRpcService/getProviders',
  grpc.web.MethodType.UNARY,
  proto.ProvidersRequest,
  proto.ProvidersResponse,
  /**
   * @param {!proto.ProvidersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ProvidersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ProvidersRequest,
 *   !proto.ProvidersResponse>}
 */
const methodInfo_DataFlowRpcService_getProviders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ProvidersResponse,
  /**
   * @param {!proto.ProvidersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ProvidersResponse.deserializeBinary
);


/**
 * @param {!proto.ProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ProvidersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ProvidersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DataFlowRpcServiceClient.prototype.getProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DataFlowRpcService/getProviders',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_getProviders,
      callback);
};


/**
 * @param {!proto.ProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ProvidersResponse>}
 *     Promise that resolves to the response
 */
proto.DataFlowRpcServicePromiseClient.prototype.getProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DataFlowRpcService/getProviders',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_getProviders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.InstancesRequest,
 *   !proto.InstancesResponse>}
 */
const methodDescriptor_DataFlowRpcService_getInstances = new grpc.web.MethodDescriptor(
  '/DataFlowRpcService/getInstances',
  grpc.web.MethodType.UNARY,
  proto.InstancesRequest,
  proto.InstancesResponse,
  /**
   * @param {!proto.InstancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.InstancesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.InstancesRequest,
 *   !proto.InstancesResponse>}
 */
const methodInfo_DataFlowRpcService_getInstances = new grpc.web.AbstractClientBase.MethodInfo(
  proto.InstancesResponse,
  /**
   * @param {!proto.InstancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.InstancesResponse.deserializeBinary
);


/**
 * @param {!proto.InstancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.InstancesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.InstancesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DataFlowRpcServiceClient.prototype.getInstances =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DataFlowRpcService/getInstances',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_getInstances,
      callback);
};


/**
 * @param {!proto.InstancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.InstancesResponse>}
 *     Promise that resolves to the response
 */
proto.DataFlowRpcServicePromiseClient.prototype.getInstances =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DataFlowRpcService/getInstances',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_getInstances);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ModuleInfoRequest,
 *   !proto.ModuleInfoResponse>}
 */
const methodDescriptor_DataFlowRpcService_getModuleInfo = new grpc.web.MethodDescriptor(
  '/DataFlowRpcService/getModuleInfo',
  grpc.web.MethodType.UNARY,
  proto.ModuleInfoRequest,
  proto.ModuleInfoResponse,
  /**
   * @param {!proto.ModuleInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ModuleInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ModuleInfoRequest,
 *   !proto.ModuleInfoResponse>}
 */
const methodInfo_DataFlowRpcService_getModuleInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ModuleInfoResponse,
  /**
   * @param {!proto.ModuleInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ModuleInfoResponse.deserializeBinary
);


/**
 * @param {!proto.ModuleInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ModuleInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ModuleInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DataFlowRpcServiceClient.prototype.getModuleInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DataFlowRpcService/getModuleInfo',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_getModuleInfo,
      callback);
};


/**
 * @param {!proto.ModuleInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ModuleInfoResponse>}
 *     Promise that resolves to the response
 */
proto.DataFlowRpcServicePromiseClient.prototype.getModuleInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DataFlowRpcService/getModuleInfo',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_getModuleInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.StartModuleRequest,
 *   !proto.StartModuleResponse>}
 */
const methodDescriptor_DataFlowRpcService_startModule = new grpc.web.MethodDescriptor(
  '/DataFlowRpcService/startModule',
  grpc.web.MethodType.UNARY,
  proto.StartModuleRequest,
  proto.StartModuleResponse,
  /**
   * @param {!proto.StartModuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StartModuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.StartModuleRequest,
 *   !proto.StartModuleResponse>}
 */
const methodInfo_DataFlowRpcService_startModule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.StartModuleResponse,
  /**
   * @param {!proto.StartModuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StartModuleResponse.deserializeBinary
);


/**
 * @param {!proto.StartModuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.StartModuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.StartModuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DataFlowRpcServiceClient.prototype.startModule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DataFlowRpcService/startModule',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_startModule,
      callback);
};


/**
 * @param {!proto.StartModuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.StartModuleResponse>}
 *     Promise that resolves to the response
 */
proto.DataFlowRpcServicePromiseClient.prototype.startModule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DataFlowRpcService/startModule',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_startModule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.StopModuleRequest,
 *   !proto.StopModuleResponse>}
 */
const methodDescriptor_DataFlowRpcService_stopModule = new grpc.web.MethodDescriptor(
  '/DataFlowRpcService/stopModule',
  grpc.web.MethodType.UNARY,
  proto.StopModuleRequest,
  proto.StopModuleResponse,
  /**
   * @param {!proto.StopModuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StopModuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.StopModuleRequest,
 *   !proto.StopModuleResponse>}
 */
const methodInfo_DataFlowRpcService_stopModule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.StopModuleResponse,
  /**
   * @param {!proto.StopModuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StopModuleResponse.deserializeBinary
);


/**
 * @param {!proto.StopModuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.StopModuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.StopModuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DataFlowRpcServiceClient.prototype.stopModule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DataFlowRpcService/stopModule',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_stopModule,
      callback);
};


/**
 * @param {!proto.StopModuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.StopModuleResponse>}
 *     Promise that resolves to the response
 */
proto.DataFlowRpcServicePromiseClient.prototype.stopModule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DataFlowRpcService/stopModule',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_stopModule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DeleteModuleRequest,
 *   !proto.DeleteModuleResponse>}
 */
const methodDescriptor_DataFlowRpcService_deleteModule = new grpc.web.MethodDescriptor(
  '/DataFlowRpcService/deleteModule',
  grpc.web.MethodType.UNARY,
  proto.DeleteModuleRequest,
  proto.DeleteModuleResponse,
  /**
   * @param {!proto.DeleteModuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeleteModuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DeleteModuleRequest,
 *   !proto.DeleteModuleResponse>}
 */
const methodInfo_DataFlowRpcService_deleteModule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.DeleteModuleResponse,
  /**
   * @param {!proto.DeleteModuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeleteModuleResponse.deserializeBinary
);


/**
 * @param {!proto.DeleteModuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.DeleteModuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DeleteModuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DataFlowRpcServiceClient.prototype.deleteModule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DataFlowRpcService/deleteModule',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_deleteModule,
      callback);
};


/**
 * @param {!proto.DeleteModuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DeleteModuleResponse>}
 *     Promise that resolves to the response
 */
proto.DataFlowRpcServicePromiseClient.prototype.deleteModule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DataFlowRpcService/deleteModule',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_deleteModule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CreateModuleRequest,
 *   !proto.CreateModuleResponse>}
 */
const methodDescriptor_DataFlowRpcService_createModule = new grpc.web.MethodDescriptor(
  '/DataFlowRpcService/createModule',
  grpc.web.MethodType.UNARY,
  proto.CreateModuleRequest,
  proto.CreateModuleResponse,
  /**
   * @param {!proto.CreateModuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateModuleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.CreateModuleRequest,
 *   !proto.CreateModuleResponse>}
 */
const methodInfo_DataFlowRpcService_createModule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.CreateModuleResponse,
  /**
   * @param {!proto.CreateModuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateModuleResponse.deserializeBinary
);


/**
 * @param {!proto.CreateModuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.CreateModuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CreateModuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DataFlowRpcServiceClient.prototype.createModule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DataFlowRpcService/createModule',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_createModule,
      callback);
};


/**
 * @param {!proto.CreateModuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CreateModuleResponse>}
 *     Promise that resolves to the response
 */
proto.DataFlowRpcServicePromiseClient.prototype.createModule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DataFlowRpcService/createModule',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_createModule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CreateDataFlowRequest,
 *   !proto.CreateDataFlowResponse>}
 */
const methodDescriptor_DataFlowRpcService_createDataFlow = new grpc.web.MethodDescriptor(
  '/DataFlowRpcService/createDataFlow',
  grpc.web.MethodType.UNARY,
  proto.CreateDataFlowRequest,
  proto.CreateDataFlowResponse,
  /**
   * @param {!proto.CreateDataFlowRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateDataFlowResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.CreateDataFlowRequest,
 *   !proto.CreateDataFlowResponse>}
 */
const methodInfo_DataFlowRpcService_createDataFlow = new grpc.web.AbstractClientBase.MethodInfo(
  proto.CreateDataFlowResponse,
  /**
   * @param {!proto.CreateDataFlowRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateDataFlowResponse.deserializeBinary
);


/**
 * @param {!proto.CreateDataFlowRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.CreateDataFlowResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CreateDataFlowResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DataFlowRpcServiceClient.prototype.createDataFlow =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DataFlowRpcService/createDataFlow',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_createDataFlow,
      callback);
};


/**
 * @param {!proto.CreateDataFlowRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CreateDataFlowResponse>}
 *     Promise that resolves to the response
 */
proto.DataFlowRpcServicePromiseClient.prototype.createDataFlow =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DataFlowRpcService/createDataFlow',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_createDataFlow);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CancelDataFlowRequest,
 *   !proto.CancelDataFlowResponse>}
 */
const methodDescriptor_DataFlowRpcService_cancelDataFlow = new grpc.web.MethodDescriptor(
  '/DataFlowRpcService/cancelDataFlow',
  grpc.web.MethodType.UNARY,
  proto.CancelDataFlowRequest,
  proto.CancelDataFlowResponse,
  /**
   * @param {!proto.CancelDataFlowRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CancelDataFlowResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.CancelDataFlowRequest,
 *   !proto.CancelDataFlowResponse>}
 */
const methodInfo_DataFlowRpcService_cancelDataFlow = new grpc.web.AbstractClientBase.MethodInfo(
  proto.CancelDataFlowResponse,
  /**
   * @param {!proto.CancelDataFlowRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CancelDataFlowResponse.deserializeBinary
);


/**
 * @param {!proto.CancelDataFlowRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.CancelDataFlowResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CancelDataFlowResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DataFlowRpcServiceClient.prototype.cancelDataFlow =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DataFlowRpcService/cancelDataFlow',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_cancelDataFlow,
      callback);
};


/**
 * @param {!proto.CancelDataFlowRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CancelDataFlowResponse>}
 *     Promise that resolves to the response
 */
proto.DataFlowRpcServicePromiseClient.prototype.cancelDataFlow =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DataFlowRpcService/cancelDataFlow',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_cancelDataFlow);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetDataFlowInfoRequest,
 *   !proto.GetDataFlowInfoResponse>}
 */
const methodDescriptor_DataFlowRpcService_getDataFlowInfo = new grpc.web.MethodDescriptor(
  '/DataFlowRpcService/getDataFlowInfo',
  grpc.web.MethodType.UNARY,
  proto.GetDataFlowInfoRequest,
  proto.GetDataFlowInfoResponse,
  /**
   * @param {!proto.GetDataFlowInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetDataFlowInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetDataFlowInfoRequest,
 *   !proto.GetDataFlowInfoResponse>}
 */
const methodInfo_DataFlowRpcService_getDataFlowInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetDataFlowInfoResponse,
  /**
   * @param {!proto.GetDataFlowInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetDataFlowInfoResponse.deserializeBinary
);


/**
 * @param {!proto.GetDataFlowInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetDataFlowInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetDataFlowInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DataFlowRpcServiceClient.prototype.getDataFlowInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DataFlowRpcService/getDataFlowInfo',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_getDataFlowInfo,
      callback);
};


/**
 * @param {!proto.GetDataFlowInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetDataFlowInfoResponse>}
 *     Promise that resolves to the response
 */
proto.DataFlowRpcServicePromiseClient.prototype.getDataFlowInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DataFlowRpcService/getDataFlowInfo',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_getDataFlowInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetDataFlowsRequest,
 *   !proto.GetDataFlowsResponse>}
 */
const methodDescriptor_DataFlowRpcService_getDataFlows = new grpc.web.MethodDescriptor(
  '/DataFlowRpcService/getDataFlows',
  grpc.web.MethodType.UNARY,
  proto.GetDataFlowsRequest,
  proto.GetDataFlowsResponse,
  /**
   * @param {!proto.GetDataFlowsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetDataFlowsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetDataFlowsRequest,
 *   !proto.GetDataFlowsResponse>}
 */
const methodInfo_DataFlowRpcService_getDataFlows = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetDataFlowsResponse,
  /**
   * @param {!proto.GetDataFlowsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetDataFlowsResponse.deserializeBinary
);


/**
 * @param {!proto.GetDataFlowsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetDataFlowsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetDataFlowsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DataFlowRpcServiceClient.prototype.getDataFlows =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DataFlowRpcService/getDataFlows',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_getDataFlows,
      callback);
};


/**
 * @param {!proto.GetDataFlowsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetDataFlowsResponse>}
 *     Promise that resolves to the response
 */
proto.DataFlowRpcServicePromiseClient.prototype.getDataFlows =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DataFlowRpcService/getDataFlows',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_getDataFlows);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetDataFlowHistoryRequest,
 *   !proto.GetDataFlowHistoryResponse>}
 */
const methodDescriptor_DataFlowRpcService_getDataFlowHistory = new grpc.web.MethodDescriptor(
  '/DataFlowRpcService/getDataFlowHistory',
  grpc.web.MethodType.UNARY,
  proto.GetDataFlowHistoryRequest,
  proto.GetDataFlowHistoryResponse,
  /**
   * @param {!proto.GetDataFlowHistoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetDataFlowHistoryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetDataFlowHistoryRequest,
 *   !proto.GetDataFlowHistoryResponse>}
 */
const methodInfo_DataFlowRpcService_getDataFlowHistory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetDataFlowHistoryResponse,
  /**
   * @param {!proto.GetDataFlowHistoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetDataFlowHistoryResponse.deserializeBinary
);


/**
 * @param {!proto.GetDataFlowHistoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetDataFlowHistoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetDataFlowHistoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DataFlowRpcServiceClient.prototype.getDataFlowHistory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DataFlowRpcService/getDataFlowHistory',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_getDataFlowHistory,
      callback);
};


/**
 * @param {!proto.GetDataFlowHistoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetDataFlowHistoryResponse>}
 *     Promise that resolves to the response
 */
proto.DataFlowRpcServicePromiseClient.prototype.getDataFlowHistory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DataFlowRpcService/getDataFlowHistory',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_getDataFlowHistory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AddDataReceiverRequest,
 *   !proto.DataReceiverResponse>}
 */
const methodDescriptor_DataFlowRpcService_addDataReceiver = new grpc.web.MethodDescriptor(
  '/DataFlowRpcService/addDataReceiver',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.AddDataReceiverRequest,
  proto.DataReceiverResponse,
  /**
   * @param {!proto.AddDataReceiverRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DataReceiverResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AddDataReceiverRequest,
 *   !proto.DataReceiverResponse>}
 */
const methodInfo_DataFlowRpcService_addDataReceiver = new grpc.web.AbstractClientBase.MethodInfo(
  proto.DataReceiverResponse,
  /**
   * @param {!proto.AddDataReceiverRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DataReceiverResponse.deserializeBinary
);


/**
 * @param {!proto.AddDataReceiverRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.DataReceiverResponse>}
 *     The XHR Node Readable Stream
 */
proto.DataFlowRpcServiceClient.prototype.addDataReceiver =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/DataFlowRpcService/addDataReceiver',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_addDataReceiver);
};


/**
 * @param {!proto.AddDataReceiverRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.DataReceiverResponse>}
 *     The XHR Node Readable Stream
 */
proto.DataFlowRpcServicePromiseClient.prototype.addDataReceiver =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/DataFlowRpcService/addDataReceiver',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_addDataReceiver);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.RemoveDataReceiverRequest,
 *   !proto.RemoveDataReceiverResponse>}
 */
const methodDescriptor_DataFlowRpcService_removeDataReceiver = new grpc.web.MethodDescriptor(
  '/DataFlowRpcService/removeDataReceiver',
  grpc.web.MethodType.UNARY,
  proto.RemoveDataReceiverRequest,
  proto.RemoveDataReceiverResponse,
  /**
   * @param {!proto.RemoveDataReceiverRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.RemoveDataReceiverResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.RemoveDataReceiverRequest,
 *   !proto.RemoveDataReceiverResponse>}
 */
const methodInfo_DataFlowRpcService_removeDataReceiver = new grpc.web.AbstractClientBase.MethodInfo(
  proto.RemoveDataReceiverResponse,
  /**
   * @param {!proto.RemoveDataReceiverRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.RemoveDataReceiverResponse.deserializeBinary
);


/**
 * @param {!proto.RemoveDataReceiverRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.RemoveDataReceiverResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.RemoveDataReceiverResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DataFlowRpcServiceClient.prototype.removeDataReceiver =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DataFlowRpcService/removeDataReceiver',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_removeDataReceiver,
      callback);
};


/**
 * @param {!proto.RemoveDataReceiverRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.RemoveDataReceiverResponse>}
 *     Promise that resolves to the response
 */
proto.DataFlowRpcServicePromiseClient.prototype.removeDataReceiver =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DataFlowRpcService/removeDataReceiver',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_removeDataReceiver);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SendDataRequest,
 *   !proto.SendDataResponse>}
 */
const methodDescriptor_DataFlowRpcService_sendData = new grpc.web.MethodDescriptor(
  '/DataFlowRpcService/sendData',
  grpc.web.MethodType.UNARY,
  proto.SendDataRequest,
  proto.SendDataResponse,
  /**
   * @param {!proto.SendDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SendDataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SendDataRequest,
 *   !proto.SendDataResponse>}
 */
const methodInfo_DataFlowRpcService_sendData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SendDataResponse,
  /**
   * @param {!proto.SendDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SendDataResponse.deserializeBinary
);


/**
 * @param {!proto.SendDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SendDataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SendDataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DataFlowRpcServiceClient.prototype.sendData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DataFlowRpcService/sendData',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_sendData,
      callback);
};


/**
 * @param {!proto.SendDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SendDataResponse>}
 *     Promise that resolves to the response
 */
proto.DataFlowRpcServicePromiseClient.prototype.sendData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DataFlowRpcService/sendData',
      request,
      metadata || {},
      methodDescriptor_DataFlowRpcService_sendData);
};


module.exports = proto;

