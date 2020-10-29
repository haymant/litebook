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

var rpc_cluster_pb = require('./rpc_cluster_pb.js')
const proto = require('./rpc_fix_admin_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.FixAdminRpcServiceClient =
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
proto.FixAdminRpcServicePromiseClient =
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
const methodDescriptor_FixAdminRpcService_login = new grpc.web.MethodDescriptor(
  '/FixAdminRpcService/login',
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
const methodInfo_FixAdminRpcService_login = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.FixAdminRpcServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FixAdminRpcService/login',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_login,
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
proto.FixAdminRpcServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FixAdminRpcService/login',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.LogoutRequest,
 *   !proto.LogoutResponse>}
 */
const methodDescriptor_FixAdminRpcService_logout = new grpc.web.MethodDescriptor(
  '/FixAdminRpcService/logout',
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
const methodInfo_FixAdminRpcService_logout = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.FixAdminRpcServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FixAdminRpcService/logout',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_logout,
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
proto.FixAdminRpcServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FixAdminRpcService/logout',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.HeartbeatRequest,
 *   !proto.HeartbeatResponse>}
 */
const methodDescriptor_FixAdminRpcService_heartbeat = new grpc.web.MethodDescriptor(
  '/FixAdminRpcService/heartbeat',
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
const methodInfo_FixAdminRpcService_heartbeat = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.FixAdminRpcServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FixAdminRpcService/heartbeat',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_heartbeat,
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
proto.FixAdminRpcServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FixAdminRpcService/heartbeat',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CreateFixSessionRequest,
 *   !proto.CreateFixSessionResponse>}
 */
const methodDescriptor_FixAdminRpcService_createFixSession = new grpc.web.MethodDescriptor(
  '/FixAdminRpcService/createFixSession',
  grpc.web.MethodType.UNARY,
  proto.CreateFixSessionRequest,
  proto.CreateFixSessionResponse,
  /**
   * @param {!proto.CreateFixSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateFixSessionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.CreateFixSessionRequest,
 *   !proto.CreateFixSessionResponse>}
 */
const methodInfo_FixAdminRpcService_createFixSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.CreateFixSessionResponse,
  /**
   * @param {!proto.CreateFixSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateFixSessionResponse.deserializeBinary
);


/**
 * @param {!proto.CreateFixSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.CreateFixSessionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CreateFixSessionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FixAdminRpcServiceClient.prototype.createFixSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FixAdminRpcService/createFixSession',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_createFixSession,
      callback);
};


/**
 * @param {!proto.CreateFixSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CreateFixSessionResponse>}
 *     Promise that resolves to the response
 */
proto.FixAdminRpcServicePromiseClient.prototype.createFixSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FixAdminRpcService/createFixSession',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_createFixSession);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ReadFixSessionsRequest,
 *   !proto.ReadFixSessionsResponse>}
 */
const methodDescriptor_FixAdminRpcService_readFixSessions = new grpc.web.MethodDescriptor(
  '/FixAdminRpcService/readFixSessions',
  grpc.web.MethodType.UNARY,
  proto.ReadFixSessionsRequest,
  proto.ReadFixSessionsResponse,
  /**
   * @param {!proto.ReadFixSessionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ReadFixSessionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ReadFixSessionsRequest,
 *   !proto.ReadFixSessionsResponse>}
 */
const methodInfo_FixAdminRpcService_readFixSessions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ReadFixSessionsResponse,
  /**
   * @param {!proto.ReadFixSessionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ReadFixSessionsResponse.deserializeBinary
);


/**
 * @param {!proto.ReadFixSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ReadFixSessionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ReadFixSessionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FixAdminRpcServiceClient.prototype.readFixSessions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FixAdminRpcService/readFixSessions',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_readFixSessions,
      callback);
};


/**
 * @param {!proto.ReadFixSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ReadFixSessionsResponse>}
 *     Promise that resolves to the response
 */
proto.FixAdminRpcServicePromiseClient.prototype.readFixSessions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FixAdminRpcService/readFixSessions',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_readFixSessions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UpdateFixSessionRequest,
 *   !proto.UpdateFixSessionResponse>}
 */
const methodDescriptor_FixAdminRpcService_updateFixSession = new grpc.web.MethodDescriptor(
  '/FixAdminRpcService/updateFixSession',
  grpc.web.MethodType.UNARY,
  proto.UpdateFixSessionRequest,
  proto.UpdateFixSessionResponse,
  /**
   * @param {!proto.UpdateFixSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateFixSessionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UpdateFixSessionRequest,
 *   !proto.UpdateFixSessionResponse>}
 */
const methodInfo_FixAdminRpcService_updateFixSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.UpdateFixSessionResponse,
  /**
   * @param {!proto.UpdateFixSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateFixSessionResponse.deserializeBinary
);


/**
 * @param {!proto.UpdateFixSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.UpdateFixSessionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UpdateFixSessionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FixAdminRpcServiceClient.prototype.updateFixSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FixAdminRpcService/updateFixSession',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_updateFixSession,
      callback);
};


/**
 * @param {!proto.UpdateFixSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UpdateFixSessionResponse>}
 *     Promise that resolves to the response
 */
proto.FixAdminRpcServicePromiseClient.prototype.updateFixSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FixAdminRpcService/updateFixSession',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_updateFixSession);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ReadFixSessionAttributeDescriptorsRequest,
 *   !proto.ReadFixSessionAttributeDescriptorsResponse>}
 */
const methodDescriptor_FixAdminRpcService_readFixSessionAttributeDescriptors = new grpc.web.MethodDescriptor(
  '/FixAdminRpcService/readFixSessionAttributeDescriptors',
  grpc.web.MethodType.UNARY,
  proto.ReadFixSessionAttributeDescriptorsRequest,
  proto.ReadFixSessionAttributeDescriptorsResponse,
  /**
   * @param {!proto.ReadFixSessionAttributeDescriptorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ReadFixSessionAttributeDescriptorsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ReadFixSessionAttributeDescriptorsRequest,
 *   !proto.ReadFixSessionAttributeDescriptorsResponse>}
 */
const methodInfo_FixAdminRpcService_readFixSessionAttributeDescriptors = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ReadFixSessionAttributeDescriptorsResponse,
  /**
   * @param {!proto.ReadFixSessionAttributeDescriptorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ReadFixSessionAttributeDescriptorsResponse.deserializeBinary
);


/**
 * @param {!proto.ReadFixSessionAttributeDescriptorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ReadFixSessionAttributeDescriptorsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ReadFixSessionAttributeDescriptorsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FixAdminRpcServiceClient.prototype.readFixSessionAttributeDescriptors =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FixAdminRpcService/readFixSessionAttributeDescriptors',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_readFixSessionAttributeDescriptors,
      callback);
};


/**
 * @param {!proto.ReadFixSessionAttributeDescriptorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ReadFixSessionAttributeDescriptorsResponse>}
 *     Promise that resolves to the response
 */
proto.FixAdminRpcServicePromiseClient.prototype.readFixSessionAttributeDescriptors =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FixAdminRpcService/readFixSessionAttributeDescriptors',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_readFixSessionAttributeDescriptors);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.EnableFixSessionRequest,
 *   !proto.EnableFixSessionResponse>}
 */
const methodDescriptor_FixAdminRpcService_enableFixSession = new grpc.web.MethodDescriptor(
  '/FixAdminRpcService/enableFixSession',
  grpc.web.MethodType.UNARY,
  proto.EnableFixSessionRequest,
  proto.EnableFixSessionResponse,
  /**
   * @param {!proto.EnableFixSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.EnableFixSessionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EnableFixSessionRequest,
 *   !proto.EnableFixSessionResponse>}
 */
const methodInfo_FixAdminRpcService_enableFixSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.EnableFixSessionResponse,
  /**
   * @param {!proto.EnableFixSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.EnableFixSessionResponse.deserializeBinary
);


/**
 * @param {!proto.EnableFixSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.EnableFixSessionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.EnableFixSessionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FixAdminRpcServiceClient.prototype.enableFixSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FixAdminRpcService/enableFixSession',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_enableFixSession,
      callback);
};


/**
 * @param {!proto.EnableFixSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.EnableFixSessionResponse>}
 *     Promise that resolves to the response
 */
proto.FixAdminRpcServicePromiseClient.prototype.enableFixSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FixAdminRpcService/enableFixSession',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_enableFixSession);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DisableFixSessionRequest,
 *   !proto.DisableFixSessionResponse>}
 */
const methodDescriptor_FixAdminRpcService_disableFixSession = new grpc.web.MethodDescriptor(
  '/FixAdminRpcService/disableFixSession',
  grpc.web.MethodType.UNARY,
  proto.DisableFixSessionRequest,
  proto.DisableFixSessionResponse,
  /**
   * @param {!proto.DisableFixSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DisableFixSessionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DisableFixSessionRequest,
 *   !proto.DisableFixSessionResponse>}
 */
const methodInfo_FixAdminRpcService_disableFixSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.DisableFixSessionResponse,
  /**
   * @param {!proto.DisableFixSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DisableFixSessionResponse.deserializeBinary
);


/**
 * @param {!proto.DisableFixSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.DisableFixSessionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DisableFixSessionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FixAdminRpcServiceClient.prototype.disableFixSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FixAdminRpcService/disableFixSession',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_disableFixSession,
      callback);
};


/**
 * @param {!proto.DisableFixSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DisableFixSessionResponse>}
 *     Promise that resolves to the response
 */
proto.FixAdminRpcServicePromiseClient.prototype.disableFixSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FixAdminRpcService/disableFixSession',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_disableFixSession);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DeleteFixSessionRequest,
 *   !proto.DeleteFixSessionResponse>}
 */
const methodDescriptor_FixAdminRpcService_deleteFixSession = new grpc.web.MethodDescriptor(
  '/FixAdminRpcService/deleteFixSession',
  grpc.web.MethodType.UNARY,
  proto.DeleteFixSessionRequest,
  proto.DeleteFixSessionResponse,
  /**
   * @param {!proto.DeleteFixSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeleteFixSessionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DeleteFixSessionRequest,
 *   !proto.DeleteFixSessionResponse>}
 */
const methodInfo_FixAdminRpcService_deleteFixSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.DeleteFixSessionResponse,
  /**
   * @param {!proto.DeleteFixSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeleteFixSessionResponse.deserializeBinary
);


/**
 * @param {!proto.DeleteFixSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.DeleteFixSessionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DeleteFixSessionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FixAdminRpcServiceClient.prototype.deleteFixSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FixAdminRpcService/deleteFixSession',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_deleteFixSession,
      callback);
};


/**
 * @param {!proto.DeleteFixSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DeleteFixSessionResponse>}
 *     Promise that resolves to the response
 */
proto.FixAdminRpcServicePromiseClient.prototype.deleteFixSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FixAdminRpcService/deleteFixSession',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_deleteFixSession);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.StartFixSessionRequest,
 *   !proto.StartFixSessionResponse>}
 */
const methodDescriptor_FixAdminRpcService_startFixSession = new grpc.web.MethodDescriptor(
  '/FixAdminRpcService/startFixSession',
  grpc.web.MethodType.UNARY,
  proto.StartFixSessionRequest,
  proto.StartFixSessionResponse,
  /**
   * @param {!proto.StartFixSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StartFixSessionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.StartFixSessionRequest,
 *   !proto.StartFixSessionResponse>}
 */
const methodInfo_FixAdminRpcService_startFixSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.StartFixSessionResponse,
  /**
   * @param {!proto.StartFixSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StartFixSessionResponse.deserializeBinary
);


/**
 * @param {!proto.StartFixSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.StartFixSessionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.StartFixSessionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FixAdminRpcServiceClient.prototype.startFixSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FixAdminRpcService/startFixSession',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_startFixSession,
      callback);
};


/**
 * @param {!proto.StartFixSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.StartFixSessionResponse>}
 *     Promise that resolves to the response
 */
proto.FixAdminRpcServicePromiseClient.prototype.startFixSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FixAdminRpcService/startFixSession',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_startFixSession);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.StopFixSessionRequest,
 *   !proto.StopFixSessionResponse>}
 */
const methodDescriptor_FixAdminRpcService_stopFixSession = new grpc.web.MethodDescriptor(
  '/FixAdminRpcService/stopFixSession',
  grpc.web.MethodType.UNARY,
  proto.StopFixSessionRequest,
  proto.StopFixSessionResponse,
  /**
   * @param {!proto.StopFixSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StopFixSessionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.StopFixSessionRequest,
 *   !proto.StopFixSessionResponse>}
 */
const methodInfo_FixAdminRpcService_stopFixSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.StopFixSessionResponse,
  /**
   * @param {!proto.StopFixSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StopFixSessionResponse.deserializeBinary
);


/**
 * @param {!proto.StopFixSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.StopFixSessionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.StopFixSessionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FixAdminRpcServiceClient.prototype.stopFixSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FixAdminRpcService/stopFixSession',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_stopFixSession,
      callback);
};


/**
 * @param {!proto.StopFixSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.StopFixSessionResponse>}
 *     Promise that resolves to the response
 */
proto.FixAdminRpcServicePromiseClient.prototype.stopFixSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FixAdminRpcService/stopFixSession',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_stopFixSession);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UpdateSequenceNumbersRequest,
 *   !proto.UpdateSequenceNumbersResponse>}
 */
const methodDescriptor_FixAdminRpcService_updateSequenceNumbers = new grpc.web.MethodDescriptor(
  '/FixAdminRpcService/updateSequenceNumbers',
  grpc.web.MethodType.UNARY,
  proto.UpdateSequenceNumbersRequest,
  proto.UpdateSequenceNumbersResponse,
  /**
   * @param {!proto.UpdateSequenceNumbersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateSequenceNumbersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UpdateSequenceNumbersRequest,
 *   !proto.UpdateSequenceNumbersResponse>}
 */
const methodInfo_FixAdminRpcService_updateSequenceNumbers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.UpdateSequenceNumbersResponse,
  /**
   * @param {!proto.UpdateSequenceNumbersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateSequenceNumbersResponse.deserializeBinary
);


/**
 * @param {!proto.UpdateSequenceNumbersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.UpdateSequenceNumbersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UpdateSequenceNumbersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FixAdminRpcServiceClient.prototype.updateSequenceNumbers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FixAdminRpcService/updateSequenceNumbers',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_updateSequenceNumbers,
      callback);
};


/**
 * @param {!proto.UpdateSequenceNumbersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UpdateSequenceNumbersResponse>}
 *     Promise that resolves to the response
 */
proto.FixAdminRpcServicePromiseClient.prototype.updateSequenceNumbers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FixAdminRpcService/updateSequenceNumbers',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_updateSequenceNumbers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AddBrokerStatusListenerRequest,
 *   !proto.BrokerStatusListenerResponse>}
 */
const methodDescriptor_FixAdminRpcService_addBrokerStatusListener = new grpc.web.MethodDescriptor(
  '/FixAdminRpcService/addBrokerStatusListener',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.AddBrokerStatusListenerRequest,
  proto.BrokerStatusListenerResponse,
  /**
   * @param {!proto.AddBrokerStatusListenerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.BrokerStatusListenerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AddBrokerStatusListenerRequest,
 *   !proto.BrokerStatusListenerResponse>}
 */
const methodInfo_FixAdminRpcService_addBrokerStatusListener = new grpc.web.AbstractClientBase.MethodInfo(
  proto.BrokerStatusListenerResponse,
  /**
   * @param {!proto.AddBrokerStatusListenerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.BrokerStatusListenerResponse.deserializeBinary
);


/**
 * @param {!proto.AddBrokerStatusListenerRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.BrokerStatusListenerResponse>}
 *     The XHR Node Readable Stream
 */
proto.FixAdminRpcServiceClient.prototype.addBrokerStatusListener =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/FixAdminRpcService/addBrokerStatusListener',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_addBrokerStatusListener);
};


/**
 * @param {!proto.AddBrokerStatusListenerRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.BrokerStatusListenerResponse>}
 *     The XHR Node Readable Stream
 */
proto.FixAdminRpcServicePromiseClient.prototype.addBrokerStatusListener =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/FixAdminRpcService/addBrokerStatusListener',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_addBrokerStatusListener);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.RemoveBrokerStatusListenerRequest,
 *   !proto.RemoveBrokerStatusListenerResponse>}
 */
const methodDescriptor_FixAdminRpcService_removeBrokerStatusListener = new grpc.web.MethodDescriptor(
  '/FixAdminRpcService/removeBrokerStatusListener',
  grpc.web.MethodType.UNARY,
  proto.RemoveBrokerStatusListenerRequest,
  proto.RemoveBrokerStatusListenerResponse,
  /**
   * @param {!proto.RemoveBrokerStatusListenerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.RemoveBrokerStatusListenerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.RemoveBrokerStatusListenerRequest,
 *   !proto.RemoveBrokerStatusListenerResponse>}
 */
const methodInfo_FixAdminRpcService_removeBrokerStatusListener = new grpc.web.AbstractClientBase.MethodInfo(
  proto.RemoveBrokerStatusListenerResponse,
  /**
   * @param {!proto.RemoveBrokerStatusListenerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.RemoveBrokerStatusListenerResponse.deserializeBinary
);


/**
 * @param {!proto.RemoveBrokerStatusListenerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.RemoveBrokerStatusListenerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.RemoveBrokerStatusListenerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FixAdminRpcServiceClient.prototype.removeBrokerStatusListener =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FixAdminRpcService/removeBrokerStatusListener',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_removeBrokerStatusListener,
      callback);
};


/**
 * @param {!proto.RemoveBrokerStatusListenerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.RemoveBrokerStatusListenerResponse>}
 *     Promise that resolves to the response
 */
proto.FixAdminRpcServicePromiseClient.prototype.removeBrokerStatusListener =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FixAdminRpcService/removeBrokerStatusListener',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_removeBrokerStatusListener);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.InstanceDataRequest,
 *   !proto.InstanceDataResponse>}
 */
const methodDescriptor_FixAdminRpcService_getInstanceData = new grpc.web.MethodDescriptor(
  '/FixAdminRpcService/getInstanceData',
  grpc.web.MethodType.UNARY,
  proto.InstanceDataRequest,
  proto.InstanceDataResponse,
  /**
   * @param {!proto.InstanceDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.InstanceDataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.InstanceDataRequest,
 *   !proto.InstanceDataResponse>}
 */
const methodInfo_FixAdminRpcService_getInstanceData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.InstanceDataResponse,
  /**
   * @param {!proto.InstanceDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.InstanceDataResponse.deserializeBinary
);


/**
 * @param {!proto.InstanceDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.InstanceDataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.InstanceDataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.FixAdminRpcServiceClient.prototype.getInstanceData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/FixAdminRpcService/getInstanceData',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_getInstanceData,
      callback);
};


/**
 * @param {!proto.InstanceDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.InstanceDataResponse>}
 *     Promise that resolves to the response
 */
proto.FixAdminRpcServicePromiseClient.prototype.getInstanceData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/FixAdminRpcService/getInstanceData',
      request,
      metadata || {},
      methodDescriptor_FixAdminRpcService_getInstanceData);
};


module.exports = proto;

