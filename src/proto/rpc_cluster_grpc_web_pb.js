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
const proto = require('./rpc_cluster_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ClusterRpcServiceClient =
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
proto.ClusterRpcServicePromiseClient =
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
const methodDescriptor_ClusterRpcService_login = new grpc.web.MethodDescriptor(
  '/ClusterRpcService/login',
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
const methodInfo_ClusterRpcService_login = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ClusterRpcServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ClusterRpcService/login',
      request,
      metadata || {},
      methodDescriptor_ClusterRpcService_login,
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
proto.ClusterRpcServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ClusterRpcService/login',
      request,
      metadata || {},
      methodDescriptor_ClusterRpcService_login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.LogoutRequest,
 *   !proto.LogoutResponse>}
 */
const methodDescriptor_ClusterRpcService_logout = new grpc.web.MethodDescriptor(
  '/ClusterRpcService/logout',
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
const methodInfo_ClusterRpcService_logout = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ClusterRpcServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ClusterRpcService/logout',
      request,
      metadata || {},
      methodDescriptor_ClusterRpcService_logout,
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
proto.ClusterRpcServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ClusterRpcService/logout',
      request,
      metadata || {},
      methodDescriptor_ClusterRpcService_logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.HeartbeatRequest,
 *   !proto.HeartbeatResponse>}
 */
const methodDescriptor_ClusterRpcService_heartbeat = new grpc.web.MethodDescriptor(
  '/ClusterRpcService/heartbeat',
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
const methodInfo_ClusterRpcService_heartbeat = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ClusterRpcServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ClusterRpcService/heartbeat',
      request,
      metadata || {},
      methodDescriptor_ClusterRpcService_heartbeat,
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
proto.ClusterRpcServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ClusterRpcService/heartbeat',
      request,
      metadata || {},
      methodDescriptor_ClusterRpcService_heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ReadClusterMembersRequest,
 *   !proto.ReadClusterMembersResponse>}
 */
const methodDescriptor_ClusterRpcService_readClusterMembers = new grpc.web.MethodDescriptor(
  '/ClusterRpcService/readClusterMembers',
  grpc.web.MethodType.UNARY,
  proto.ReadClusterMembersRequest,
  proto.ReadClusterMembersResponse,
  /**
   * @param {!proto.ReadClusterMembersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ReadClusterMembersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ReadClusterMembersRequest,
 *   !proto.ReadClusterMembersResponse>}
 */
const methodInfo_ClusterRpcService_readClusterMembers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ReadClusterMembersResponse,
  /**
   * @param {!proto.ReadClusterMembersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ReadClusterMembersResponse.deserializeBinary
);


/**
 * @param {!proto.ReadClusterMembersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ReadClusterMembersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ReadClusterMembersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ClusterRpcServiceClient.prototype.readClusterMembers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ClusterRpcService/readClusterMembers',
      request,
      metadata || {},
      methodDescriptor_ClusterRpcService_readClusterMembers,
      callback);
};


/**
 * @param {!proto.ReadClusterMembersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ReadClusterMembersResponse>}
 *     Promise that resolves to the response
 */
proto.ClusterRpcServicePromiseClient.prototype.readClusterMembers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ClusterRpcService/readClusterMembers',
      request,
      metadata || {},
      methodDescriptor_ClusterRpcService_readClusterMembers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ReadClusterDataRequest,
 *   !proto.ReadClusterDataResponse>}
 */
const methodDescriptor_ClusterRpcService_readClusterData = new grpc.web.MethodDescriptor(
  '/ClusterRpcService/readClusterData',
  grpc.web.MethodType.UNARY,
  proto.ReadClusterDataRequest,
  proto.ReadClusterDataResponse,
  /**
   * @param {!proto.ReadClusterDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ReadClusterDataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ReadClusterDataRequest,
 *   !proto.ReadClusterDataResponse>}
 */
const methodInfo_ClusterRpcService_readClusterData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ReadClusterDataResponse,
  /**
   * @param {!proto.ReadClusterDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ReadClusterDataResponse.deserializeBinary
);


/**
 * @param {!proto.ReadClusterDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ReadClusterDataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ReadClusterDataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ClusterRpcServiceClient.prototype.readClusterData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ClusterRpcService/readClusterData',
      request,
      metadata || {},
      methodDescriptor_ClusterRpcService_readClusterData,
      callback);
};


/**
 * @param {!proto.ReadClusterDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ReadClusterDataResponse>}
 *     Promise that resolves to the response
 */
proto.ClusterRpcServicePromiseClient.prototype.readClusterData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ClusterRpcService/readClusterData',
      request,
      metadata || {},
      methodDescriptor_ClusterRpcService_readClusterData);
};


module.exports = proto;

