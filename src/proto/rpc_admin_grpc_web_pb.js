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
const proto = require('./rpc_admin_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.AdminRpcServiceClient =
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
proto.AdminRpcServicePromiseClient =
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
const methodDescriptor_AdminRpcService_login = new grpc.web.MethodDescriptor(
  '/AdminRpcService/login',
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
const methodInfo_AdminRpcService_login = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.AdminRpcServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AdminRpcService/login',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_login,
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
proto.AdminRpcServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AdminRpcService/login',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.LogoutRequest,
 *   !proto.LogoutResponse>}
 */
const methodDescriptor_AdminRpcService_logout = new grpc.web.MethodDescriptor(
  '/AdminRpcService/logout',
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
const methodInfo_AdminRpcService_logout = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.AdminRpcServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AdminRpcService/logout',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_logout,
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
proto.AdminRpcServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AdminRpcService/logout',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.HeartbeatRequest,
 *   !proto.HeartbeatResponse>}
 */
const methodDescriptor_AdminRpcService_heartbeat = new grpc.web.MethodDescriptor(
  '/AdminRpcService/heartbeat',
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
const methodInfo_AdminRpcService_heartbeat = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.AdminRpcServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AdminRpcService/heartbeat',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_heartbeat,
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
proto.AdminRpcServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AdminRpcService/heartbeat',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.PermissionsForUsernameRequest,
 *   !proto.PermissionsForUsernameResponse>}
 */
const methodDescriptor_AdminRpcService_getPermissionsForUsername = new grpc.web.MethodDescriptor(
  '/AdminRpcService/getPermissionsForUsername',
  grpc.web.MethodType.UNARY,
  proto.PermissionsForUsernameRequest,
  proto.PermissionsForUsernameResponse,
  /**
   * @param {!proto.PermissionsForUsernameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.PermissionsForUsernameResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.PermissionsForUsernameRequest,
 *   !proto.PermissionsForUsernameResponse>}
 */
const methodInfo_AdminRpcService_getPermissionsForUsername = new grpc.web.AbstractClientBase.MethodInfo(
  proto.PermissionsForUsernameResponse,
  /**
   * @param {!proto.PermissionsForUsernameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.PermissionsForUsernameResponse.deserializeBinary
);


/**
 * @param {!proto.PermissionsForUsernameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.PermissionsForUsernameResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.PermissionsForUsernameResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AdminRpcServiceClient.prototype.getPermissionsForUsername =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AdminRpcService/getPermissionsForUsername',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_getPermissionsForUsername,
      callback);
};


/**
 * @param {!proto.PermissionsForUsernameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.PermissionsForUsernameResponse>}
 *     Promise that resolves to the response
 */
proto.AdminRpcServicePromiseClient.prototype.getPermissionsForUsername =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AdminRpcService/getPermissionsForUsername',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_getPermissionsForUsername);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetCurrentUserRequest,
 *   !proto.GetCurrentUserResponse>}
 */
const methodDescriptor_AdminRpcService_getCurrentUser = new grpc.web.MethodDescriptor(
  '/AdminRpcService/getCurrentUser',
  grpc.web.MethodType.UNARY,
  proto.GetCurrentUserRequest,
  proto.GetCurrentUserResponse,
  /**
   * @param {!proto.GetCurrentUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetCurrentUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetCurrentUserRequest,
 *   !proto.GetCurrentUserResponse>}
 */
const methodInfo_AdminRpcService_getCurrentUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetCurrentUserResponse,
  /**
   * @param {!proto.GetCurrentUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetCurrentUserResponse.deserializeBinary
);


/**
 * @param {!proto.GetCurrentUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetCurrentUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetCurrentUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AdminRpcServiceClient.prototype.getCurrentUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AdminRpcService/getCurrentUser',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_getCurrentUser,
      callback);
};


/**
 * @param {!proto.GetCurrentUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetCurrentUserResponse>}
 *     Promise that resolves to the response
 */
proto.AdminRpcServicePromiseClient.prototype.getCurrentUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AdminRpcService/getCurrentUser',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_getCurrentUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CreateUserRequest,
 *   !proto.CreateUserResponse>}
 */
const methodDescriptor_AdminRpcService_createUser = new grpc.web.MethodDescriptor(
  '/AdminRpcService/createUser',
  grpc.web.MethodType.UNARY,
  proto.CreateUserRequest,
  proto.CreateUserResponse,
  /**
   * @param {!proto.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.CreateUserRequest,
 *   !proto.CreateUserResponse>}
 */
const methodInfo_AdminRpcService_createUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.CreateUserResponse,
  /**
   * @param {!proto.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateUserResponse.deserializeBinary
);


/**
 * @param {!proto.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.CreateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CreateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AdminRpcServiceClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AdminRpcService/createUser',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_createUser,
      callback);
};


/**
 * @param {!proto.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CreateUserResponse>}
 *     Promise that resolves to the response
 */
proto.AdminRpcServicePromiseClient.prototype.createUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AdminRpcService/createUser',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_createUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ReadUsersRequest,
 *   !proto.ReadUsersResponse>}
 */
const methodDescriptor_AdminRpcService_readUsers = new grpc.web.MethodDescriptor(
  '/AdminRpcService/readUsers',
  grpc.web.MethodType.UNARY,
  proto.ReadUsersRequest,
  proto.ReadUsersResponse,
  /**
   * @param {!proto.ReadUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ReadUsersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ReadUsersRequest,
 *   !proto.ReadUsersResponse>}
 */
const methodInfo_AdminRpcService_readUsers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ReadUsersResponse,
  /**
   * @param {!proto.ReadUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ReadUsersResponse.deserializeBinary
);


/**
 * @param {!proto.ReadUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ReadUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ReadUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AdminRpcServiceClient.prototype.readUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AdminRpcService/readUsers',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_readUsers,
      callback);
};


/**
 * @param {!proto.ReadUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ReadUsersResponse>}
 *     Promise that resolves to the response
 */
proto.AdminRpcServicePromiseClient.prototype.readUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AdminRpcService/readUsers',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_readUsers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UpdateUserRequest,
 *   !proto.UpdateUserResponse>}
 */
const methodDescriptor_AdminRpcService_updateUser = new grpc.web.MethodDescriptor(
  '/AdminRpcService/updateUser',
  grpc.web.MethodType.UNARY,
  proto.UpdateUserRequest,
  proto.UpdateUserResponse,
  /**
   * @param {!proto.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UpdateUserRequest,
 *   !proto.UpdateUserResponse>}
 */
const methodInfo_AdminRpcService_updateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.UpdateUserResponse,
  /**
   * @param {!proto.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateUserResponse.deserializeBinary
);


/**
 * @param {!proto.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.UpdateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UpdateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AdminRpcServiceClient.prototype.updateUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AdminRpcService/updateUser',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_updateUser,
      callback);
};


/**
 * @param {!proto.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UpdateUserResponse>}
 *     Promise that resolves to the response
 */
proto.AdminRpcServicePromiseClient.prototype.updateUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AdminRpcService/updateUser',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_updateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DeleteUserRequest,
 *   !proto.DeleteUserResponse>}
 */
const methodDescriptor_AdminRpcService_deleteUser = new grpc.web.MethodDescriptor(
  '/AdminRpcService/deleteUser',
  grpc.web.MethodType.UNARY,
  proto.DeleteUserRequest,
  proto.DeleteUserResponse,
  /**
   * @param {!proto.DeleteUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeleteUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DeleteUserRequest,
 *   !proto.DeleteUserResponse>}
 */
const methodInfo_AdminRpcService_deleteUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.DeleteUserResponse,
  /**
   * @param {!proto.DeleteUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeleteUserResponse.deserializeBinary
);


/**
 * @param {!proto.DeleteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.DeleteUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DeleteUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AdminRpcServiceClient.prototype.deleteUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AdminRpcService/deleteUser',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_deleteUser,
      callback);
};


/**
 * @param {!proto.DeleteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DeleteUserResponse>}
 *     Promise that resolves to the response
 */
proto.AdminRpcServicePromiseClient.prototype.deleteUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AdminRpcService/deleteUser',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_deleteUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DeactivateUserRequest,
 *   !proto.DeactivateUserResponse>}
 */
const methodDescriptor_AdminRpcService_deactivateUser = new grpc.web.MethodDescriptor(
  '/AdminRpcService/deactivateUser',
  grpc.web.MethodType.UNARY,
  proto.DeactivateUserRequest,
  proto.DeactivateUserResponse,
  /**
   * @param {!proto.DeactivateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeactivateUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DeactivateUserRequest,
 *   !proto.DeactivateUserResponse>}
 */
const methodInfo_AdminRpcService_deactivateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.DeactivateUserResponse,
  /**
   * @param {!proto.DeactivateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeactivateUserResponse.deserializeBinary
);


/**
 * @param {!proto.DeactivateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.DeactivateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DeactivateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AdminRpcServiceClient.prototype.deactivateUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AdminRpcService/deactivateUser',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_deactivateUser,
      callback);
};


/**
 * @param {!proto.DeactivateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DeactivateUserResponse>}
 *     Promise that resolves to the response
 */
proto.AdminRpcServicePromiseClient.prototype.deactivateUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AdminRpcService/deactivateUser',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_deactivateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ChangeUserPasswordRequest,
 *   !proto.ChangeUserPasswordResponse>}
 */
const methodDescriptor_AdminRpcService_changeUserPassword = new grpc.web.MethodDescriptor(
  '/AdminRpcService/changeUserPassword',
  grpc.web.MethodType.UNARY,
  proto.ChangeUserPasswordRequest,
  proto.ChangeUserPasswordResponse,
  /**
   * @param {!proto.ChangeUserPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ChangeUserPasswordResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ChangeUserPasswordRequest,
 *   !proto.ChangeUserPasswordResponse>}
 */
const methodInfo_AdminRpcService_changeUserPassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ChangeUserPasswordResponse,
  /**
   * @param {!proto.ChangeUserPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ChangeUserPasswordResponse.deserializeBinary
);


/**
 * @param {!proto.ChangeUserPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ChangeUserPasswordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ChangeUserPasswordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AdminRpcServiceClient.prototype.changeUserPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AdminRpcService/changeUserPassword',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_changeUserPassword,
      callback);
};


/**
 * @param {!proto.ChangeUserPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ChangeUserPasswordResponse>}
 *     Promise that resolves to the response
 */
proto.AdminRpcServicePromiseClient.prototype.changeUserPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AdminRpcService/changeUserPassword',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_changeUserPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CreatePermissionRequest,
 *   !proto.CreatePermissionResponse>}
 */
const methodDescriptor_AdminRpcService_createPermission = new grpc.web.MethodDescriptor(
  '/AdminRpcService/createPermission',
  grpc.web.MethodType.UNARY,
  proto.CreatePermissionRequest,
  proto.CreatePermissionResponse,
  /**
   * @param {!proto.CreatePermissionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreatePermissionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.CreatePermissionRequest,
 *   !proto.CreatePermissionResponse>}
 */
const methodInfo_AdminRpcService_createPermission = new grpc.web.AbstractClientBase.MethodInfo(
  proto.CreatePermissionResponse,
  /**
   * @param {!proto.CreatePermissionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreatePermissionResponse.deserializeBinary
);


/**
 * @param {!proto.CreatePermissionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.CreatePermissionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CreatePermissionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AdminRpcServiceClient.prototype.createPermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AdminRpcService/createPermission',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_createPermission,
      callback);
};


/**
 * @param {!proto.CreatePermissionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CreatePermissionResponse>}
 *     Promise that resolves to the response
 */
proto.AdminRpcServicePromiseClient.prototype.createPermission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AdminRpcService/createPermission',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_createPermission);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ReadPermissionsRequest,
 *   !proto.ReadPermissionsResponse>}
 */
const methodDescriptor_AdminRpcService_readPermissions = new grpc.web.MethodDescriptor(
  '/AdminRpcService/readPermissions',
  grpc.web.MethodType.UNARY,
  proto.ReadPermissionsRequest,
  proto.ReadPermissionsResponse,
  /**
   * @param {!proto.ReadPermissionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ReadPermissionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ReadPermissionsRequest,
 *   !proto.ReadPermissionsResponse>}
 */
const methodInfo_AdminRpcService_readPermissions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ReadPermissionsResponse,
  /**
   * @param {!proto.ReadPermissionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ReadPermissionsResponse.deserializeBinary
);


/**
 * @param {!proto.ReadPermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ReadPermissionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ReadPermissionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AdminRpcServiceClient.prototype.readPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AdminRpcService/readPermissions',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_readPermissions,
      callback);
};


/**
 * @param {!proto.ReadPermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ReadPermissionsResponse>}
 *     Promise that resolves to the response
 */
proto.AdminRpcServicePromiseClient.prototype.readPermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AdminRpcService/readPermissions',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_readPermissions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UpdatePermissionRequest,
 *   !proto.UpdatePermissionResponse>}
 */
const methodDescriptor_AdminRpcService_updatePermission = new grpc.web.MethodDescriptor(
  '/AdminRpcService/updatePermission',
  grpc.web.MethodType.UNARY,
  proto.UpdatePermissionRequest,
  proto.UpdatePermissionResponse,
  /**
   * @param {!proto.UpdatePermissionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdatePermissionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UpdatePermissionRequest,
 *   !proto.UpdatePermissionResponse>}
 */
const methodInfo_AdminRpcService_updatePermission = new grpc.web.AbstractClientBase.MethodInfo(
  proto.UpdatePermissionResponse,
  /**
   * @param {!proto.UpdatePermissionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdatePermissionResponse.deserializeBinary
);


/**
 * @param {!proto.UpdatePermissionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.UpdatePermissionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UpdatePermissionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AdminRpcServiceClient.prototype.updatePermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AdminRpcService/updatePermission',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_updatePermission,
      callback);
};


/**
 * @param {!proto.UpdatePermissionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UpdatePermissionResponse>}
 *     Promise that resolves to the response
 */
proto.AdminRpcServicePromiseClient.prototype.updatePermission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AdminRpcService/updatePermission',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_updatePermission);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DeletePermissionRequest,
 *   !proto.DeletePermissionResponse>}
 */
const methodDescriptor_AdminRpcService_deletePermission = new grpc.web.MethodDescriptor(
  '/AdminRpcService/deletePermission',
  grpc.web.MethodType.UNARY,
  proto.DeletePermissionRequest,
  proto.DeletePermissionResponse,
  /**
   * @param {!proto.DeletePermissionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeletePermissionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DeletePermissionRequest,
 *   !proto.DeletePermissionResponse>}
 */
const methodInfo_AdminRpcService_deletePermission = new grpc.web.AbstractClientBase.MethodInfo(
  proto.DeletePermissionResponse,
  /**
   * @param {!proto.DeletePermissionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeletePermissionResponse.deserializeBinary
);


/**
 * @param {!proto.DeletePermissionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.DeletePermissionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DeletePermissionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AdminRpcServiceClient.prototype.deletePermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AdminRpcService/deletePermission',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_deletePermission,
      callback);
};


/**
 * @param {!proto.DeletePermissionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DeletePermissionResponse>}
 *     Promise that resolves to the response
 */
proto.AdminRpcServicePromiseClient.prototype.deletePermission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AdminRpcService/deletePermission',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_deletePermission);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CreateRoleRequest,
 *   !proto.CreateRoleResponse>}
 */
const methodDescriptor_AdminRpcService_createRole = new grpc.web.MethodDescriptor(
  '/AdminRpcService/createRole',
  grpc.web.MethodType.UNARY,
  proto.CreateRoleRequest,
  proto.CreateRoleResponse,
  /**
   * @param {!proto.CreateRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateRoleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.CreateRoleRequest,
 *   !proto.CreateRoleResponse>}
 */
const methodInfo_AdminRpcService_createRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.CreateRoleResponse,
  /**
   * @param {!proto.CreateRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateRoleResponse.deserializeBinary
);


/**
 * @param {!proto.CreateRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.CreateRoleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CreateRoleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AdminRpcServiceClient.prototype.createRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AdminRpcService/createRole',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_createRole,
      callback);
};


/**
 * @param {!proto.CreateRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CreateRoleResponse>}
 *     Promise that resolves to the response
 */
proto.AdminRpcServicePromiseClient.prototype.createRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AdminRpcService/createRole',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_createRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ReadRolesRequest,
 *   !proto.ReadRolesResponse>}
 */
const methodDescriptor_AdminRpcService_readRoles = new grpc.web.MethodDescriptor(
  '/AdminRpcService/readRoles',
  grpc.web.MethodType.UNARY,
  proto.ReadRolesRequest,
  proto.ReadRolesResponse,
  /**
   * @param {!proto.ReadRolesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ReadRolesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ReadRolesRequest,
 *   !proto.ReadRolesResponse>}
 */
const methodInfo_AdminRpcService_readRoles = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ReadRolesResponse,
  /**
   * @param {!proto.ReadRolesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ReadRolesResponse.deserializeBinary
);


/**
 * @param {!proto.ReadRolesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ReadRolesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ReadRolesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AdminRpcServiceClient.prototype.readRoles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AdminRpcService/readRoles',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_readRoles,
      callback);
};


/**
 * @param {!proto.ReadRolesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ReadRolesResponse>}
 *     Promise that resolves to the response
 */
proto.AdminRpcServicePromiseClient.prototype.readRoles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AdminRpcService/readRoles',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_readRoles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UpdateRoleRequest,
 *   !proto.UpdateRoleResponse>}
 */
const methodDescriptor_AdminRpcService_updateRole = new grpc.web.MethodDescriptor(
  '/AdminRpcService/updateRole',
  grpc.web.MethodType.UNARY,
  proto.UpdateRoleRequest,
  proto.UpdateRoleResponse,
  /**
   * @param {!proto.UpdateRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateRoleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UpdateRoleRequest,
 *   !proto.UpdateRoleResponse>}
 */
const methodInfo_AdminRpcService_updateRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.UpdateRoleResponse,
  /**
   * @param {!proto.UpdateRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateRoleResponse.deserializeBinary
);


/**
 * @param {!proto.UpdateRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.UpdateRoleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UpdateRoleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AdminRpcServiceClient.prototype.updateRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AdminRpcService/updateRole',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_updateRole,
      callback);
};


/**
 * @param {!proto.UpdateRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UpdateRoleResponse>}
 *     Promise that resolves to the response
 */
proto.AdminRpcServicePromiseClient.prototype.updateRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AdminRpcService/updateRole',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_updateRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DeleteRoleRequest,
 *   !proto.DeleteRoleResponse>}
 */
const methodDescriptor_AdminRpcService_deleteRole = new grpc.web.MethodDescriptor(
  '/AdminRpcService/deleteRole',
  grpc.web.MethodType.UNARY,
  proto.DeleteRoleRequest,
  proto.DeleteRoleResponse,
  /**
   * @param {!proto.DeleteRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeleteRoleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DeleteRoleRequest,
 *   !proto.DeleteRoleResponse>}
 */
const methodInfo_AdminRpcService_deleteRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.DeleteRoleResponse,
  /**
   * @param {!proto.DeleteRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeleteRoleResponse.deserializeBinary
);


/**
 * @param {!proto.DeleteRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.DeleteRoleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DeleteRoleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AdminRpcServiceClient.prototype.deleteRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AdminRpcService/deleteRole',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_deleteRole,
      callback);
};


/**
 * @param {!proto.DeleteRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DeleteRoleResponse>}
 *     Promise that resolves to the response
 */
proto.AdminRpcServicePromiseClient.prototype.deleteRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AdminRpcService/deleteRole',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_deleteRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ReadUserAttributeRequest,
 *   !proto.ReadUserAttributeResponse>}
 */
const methodDescriptor_AdminRpcService_readUserAttribute = new grpc.web.MethodDescriptor(
  '/AdminRpcService/readUserAttribute',
  grpc.web.MethodType.UNARY,
  proto.ReadUserAttributeRequest,
  proto.ReadUserAttributeResponse,
  /**
   * @param {!proto.ReadUserAttributeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ReadUserAttributeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ReadUserAttributeRequest,
 *   !proto.ReadUserAttributeResponse>}
 */
const methodInfo_AdminRpcService_readUserAttribute = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ReadUserAttributeResponse,
  /**
   * @param {!proto.ReadUserAttributeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ReadUserAttributeResponse.deserializeBinary
);


/**
 * @param {!proto.ReadUserAttributeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ReadUserAttributeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ReadUserAttributeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AdminRpcServiceClient.prototype.readUserAttribute =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AdminRpcService/readUserAttribute',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_readUserAttribute,
      callback);
};


/**
 * @param {!proto.ReadUserAttributeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ReadUserAttributeResponse>}
 *     Promise that resolves to the response
 */
proto.AdminRpcServicePromiseClient.prototype.readUserAttribute =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AdminRpcService/readUserAttribute',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_readUserAttribute);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.WriteUserAttributeRequest,
 *   !proto.WriteUserAttributeResponse>}
 */
const methodDescriptor_AdminRpcService_writeUserAttribute = new grpc.web.MethodDescriptor(
  '/AdminRpcService/writeUserAttribute',
  grpc.web.MethodType.UNARY,
  proto.WriteUserAttributeRequest,
  proto.WriteUserAttributeResponse,
  /**
   * @param {!proto.WriteUserAttributeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.WriteUserAttributeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.WriteUserAttributeRequest,
 *   !proto.WriteUserAttributeResponse>}
 */
const methodInfo_AdminRpcService_writeUserAttribute = new grpc.web.AbstractClientBase.MethodInfo(
  proto.WriteUserAttributeResponse,
  /**
   * @param {!proto.WriteUserAttributeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.WriteUserAttributeResponse.deserializeBinary
);


/**
 * @param {!proto.WriteUserAttributeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.WriteUserAttributeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.WriteUserAttributeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AdminRpcServiceClient.prototype.writeUserAttribute =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AdminRpcService/writeUserAttribute',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_writeUserAttribute,
      callback);
};


/**
 * @param {!proto.WriteUserAttributeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.WriteUserAttributeResponse>}
 *     Promise that resolves to the response
 */
proto.AdminRpcServicePromiseClient.prototype.writeUserAttribute =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AdminRpcService/writeUserAttribute',
      request,
      metadata || {},
      methodDescriptor_AdminRpcService_writeUserAttribute);
};


module.exports = proto;

