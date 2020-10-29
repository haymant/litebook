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
const proto = require('./rpc_sample_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.SampleRpcServiceClient =
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
proto.SampleRpcServicePromiseClient =
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
const methodDescriptor_SampleRpcService_login = new grpc.web.MethodDescriptor(
  '/SampleRpcService/login',
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
const methodInfo_SampleRpcService_login = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.SampleRpcServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SampleRpcService/login',
      request,
      metadata || {},
      methodDescriptor_SampleRpcService_login,
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
proto.SampleRpcServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SampleRpcService/login',
      request,
      metadata || {},
      methodDescriptor_SampleRpcService_login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.LogoutRequest,
 *   !proto.LogoutResponse>}
 */
const methodDescriptor_SampleRpcService_logout = new grpc.web.MethodDescriptor(
  '/SampleRpcService/logout',
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
const methodInfo_SampleRpcService_logout = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.SampleRpcServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SampleRpcService/logout',
      request,
      metadata || {},
      methodDescriptor_SampleRpcService_logout,
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
proto.SampleRpcServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SampleRpcService/logout',
      request,
      metadata || {},
      methodDescriptor_SampleRpcService_logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.HeartbeatRequest,
 *   !proto.HeartbeatResponse>}
 */
const methodDescriptor_SampleRpcService_heartbeat = new grpc.web.MethodDescriptor(
  '/SampleRpcService/heartbeat',
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
const methodInfo_SampleRpcService_heartbeat = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.SampleRpcServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SampleRpcService/heartbeat',
      request,
      metadata || {},
      methodDescriptor_SampleRpcService_heartbeat,
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
proto.SampleRpcServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SampleRpcService/heartbeat',
      request,
      metadata || {},
      methodDescriptor_SampleRpcService_heartbeat);
};


module.exports = proto;

