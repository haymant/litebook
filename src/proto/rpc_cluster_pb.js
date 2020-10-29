/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var rpc_base_pb = require('./rpc_base_pb.js');
goog.exportSymbol('proto.ClusterData', null, global);
goog.exportSymbol('proto.ClusterMember', null, global);
goog.exportSymbol('proto.ReadClusterDataRequest', null, global);
goog.exportSymbol('proto.ReadClusterDataResponse', null, global);
goog.exportSymbol('proto.ReadClusterMembersRequest', null, global);
goog.exportSymbol('proto.ReadClusterMembersResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ClusterData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ClusterData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ClusterData.displayName = 'proto.ClusterData';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ClusterData.prototype.toObject = function(opt_includeInstance) {
  return proto.ClusterData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ClusterData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClusterData.toObject = function(includeInstance, msg) {
  var f, obj = {
    hostid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hostnumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    instancenumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalinstances: jspb.Message.getFieldWithDefault(msg, 4, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ClusterData}
 */
proto.ClusterData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ClusterData;
  return proto.ClusterData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClusterData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClusterData}
 */
proto.ClusterData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHostnumber(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setInstancenumber(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalinstances(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ClusterData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ClusterData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ClusterData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClusterData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHostid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHostnumber();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getInstancenumber();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTotalinstances();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string hostId = 1;
 * @return {string}
 */
proto.ClusterData.prototype.getHostid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ClusterData.prototype.setHostid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 hostNumber = 2;
 * @return {number}
 */
proto.ClusterData.prototype.getHostnumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.ClusterData.prototype.setHostnumber = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 instanceNumber = 3;
 * @return {number}
 */
proto.ClusterData.prototype.getInstancenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.ClusterData.prototype.setInstancenumber = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 totalInstances = 4;
 * @return {number}
 */
proto.ClusterData.prototype.getTotalinstances = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.ClusterData.prototype.setTotalinstances = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string uuid = 5;
 * @return {string}
 */
proto.ClusterData.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.ClusterData.prototype.setUuid = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ClusterMember = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ClusterMember, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ClusterMember.displayName = 'proto.ClusterMember';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ClusterMember.prototype.toObject = function(opt_includeInstance) {
  return proto.ClusterMember.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ClusterMember} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClusterMember.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ClusterMember}
 */
proto.ClusterMember.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ClusterMember;
  return proto.ClusterMember.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClusterMember} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClusterMember}
 */
proto.ClusterMember.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ClusterMember.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ClusterMember.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ClusterMember} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClusterMember.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.ClusterMember.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ClusterMember.prototype.setUuid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ReadClusterMembersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ReadClusterMembersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ReadClusterMembersRequest.displayName = 'proto.ReadClusterMembersRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ReadClusterMembersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ReadClusterMembersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ReadClusterMembersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReadClusterMembersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ReadClusterMembersRequest}
 */
proto.ReadClusterMembersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ReadClusterMembersRequest;
  return proto.ReadClusterMembersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ReadClusterMembersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ReadClusterMembersRequest}
 */
proto.ReadClusterMembersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ReadClusterMembersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ReadClusterMembersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ReadClusterMembersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReadClusterMembersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string sessionId = 1;
 * @return {string}
 */
proto.ReadClusterMembersRequest.prototype.getSessionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ReadClusterMembersRequest.prototype.setSessionid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ReadClusterMembersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ReadClusterMembersResponse.repeatedFields_, null);
};
goog.inherits(proto.ReadClusterMembersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ReadClusterMembersResponse.displayName = 'proto.ReadClusterMembersResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ReadClusterMembersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ReadClusterMembersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ReadClusterMembersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ReadClusterMembersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReadClusterMembersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    clustermemberList: jspb.Message.toObjectList(msg.getClustermemberList(),
    proto.ClusterMember.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ReadClusterMembersResponse}
 */
proto.ReadClusterMembersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ReadClusterMembersResponse;
  return proto.ReadClusterMembersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ReadClusterMembersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ReadClusterMembersResponse}
 */
proto.ReadClusterMembersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ClusterMember;
      reader.readMessage(value,proto.ClusterMember.deserializeBinaryFromReader);
      msg.addClustermember(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ReadClusterMembersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ReadClusterMembersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ReadClusterMembersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReadClusterMembersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClustermemberList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ClusterMember.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ClusterMember clusterMember = 1;
 * @return {!Array<!proto.ClusterMember>}
 */
proto.ReadClusterMembersResponse.prototype.getClustermemberList = function() {
  return /** @type{!Array<!proto.ClusterMember>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ClusterMember, 1));
};


/** @param {!Array<!proto.ClusterMember>} value */
proto.ReadClusterMembersResponse.prototype.setClustermemberList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ClusterMember=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ClusterMember}
 */
proto.ReadClusterMembersResponse.prototype.addClustermember = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ClusterMember, opt_index);
};


proto.ReadClusterMembersResponse.prototype.clearClustermemberList = function() {
  this.setClustermemberList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ReadClusterDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ReadClusterDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ReadClusterDataRequest.displayName = 'proto.ReadClusterDataRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ReadClusterDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ReadClusterDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ReadClusterDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReadClusterDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ReadClusterDataRequest}
 */
proto.ReadClusterDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ReadClusterDataRequest;
  return proto.ReadClusterDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ReadClusterDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ReadClusterDataRequest}
 */
proto.ReadClusterDataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ReadClusterDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ReadClusterDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ReadClusterDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReadClusterDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string sessionId = 1;
 * @return {string}
 */
proto.ReadClusterDataRequest.prototype.getSessionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ReadClusterDataRequest.prototype.setSessionid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ReadClusterDataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ReadClusterDataResponse.repeatedFields_, null);
};
goog.inherits(proto.ReadClusterDataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ReadClusterDataResponse.displayName = 'proto.ReadClusterDataResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ReadClusterDataResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ReadClusterDataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ReadClusterDataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ReadClusterDataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReadClusterDataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterdataList: jspb.Message.toObjectList(msg.getClusterdataList(),
    proto.ClusterData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ReadClusterDataResponse}
 */
proto.ReadClusterDataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ReadClusterDataResponse;
  return proto.ReadClusterDataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ReadClusterDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ReadClusterDataResponse}
 */
proto.ReadClusterDataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ClusterData;
      reader.readMessage(value,proto.ClusterData.deserializeBinaryFromReader);
      msg.addClusterdata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ReadClusterDataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ReadClusterDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ReadClusterDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReadClusterDataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClusterdataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ClusterData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ClusterData clusterData = 1;
 * @return {!Array<!proto.ClusterData>}
 */
proto.ReadClusterDataResponse.prototype.getClusterdataList = function() {
  return /** @type{!Array<!proto.ClusterData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ClusterData, 1));
};


/** @param {!Array<!proto.ClusterData>} value */
proto.ReadClusterDataResponse.prototype.setClusterdataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ClusterData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ClusterData}
 */
proto.ReadClusterDataResponse.prototype.addClusterdata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ClusterData, opt_index);
};


proto.ReadClusterDataResponse.prototype.clearClusterdataList = function() {
  this.setClusterdataList([]);
};


goog.object.extend(exports, proto);
