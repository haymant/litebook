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

goog.exportSymbol('proto.PageRequest', null, global);
goog.exportSymbol('proto.PageResponse', null, global);
goog.exportSymbol('proto.Sort', null, global);
goog.exportSymbol('proto.SortDirection', null, global);
goog.exportSymbol('proto.SortOrder', null, global);

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
proto.PageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PageRequest.displayName = 'proto.PageRequest';
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
proto.PageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.PageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    page: jspb.Message.getFieldWithDefault(msg, 1, 0),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sortorder: (f = msg.getSortorder()) && proto.SortOrder.toObject(includeInstance, f)
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
 * @return {!proto.PageRequest}
 */
proto.PageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PageRequest;
  return proto.PageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PageRequest}
 */
proto.PageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSize(value);
      break;
    case 3:
      var value = new proto.SortOrder;
      reader.readMessage(value,proto.SortOrder.deserializeBinaryFromReader);
      msg.setSortorder(value);
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
proto.PageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPage();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSortorder();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.SortOrder.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 page = 1;
 * @return {number}
 */
proto.PageRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.PageRequest.prototype.setPage = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 size = 2;
 * @return {number}
 */
proto.PageRequest.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.PageRequest.prototype.setSize = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional SortOrder sortOrder = 3;
 * @return {?proto.SortOrder}
 */
proto.PageRequest.prototype.getSortorder = function() {
  return /** @type{?proto.SortOrder} */ (
    jspb.Message.getWrapperField(this, proto.SortOrder, 3));
};


/** @param {?proto.SortOrder|undefined} value */
proto.PageRequest.prototype.setSortorder = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.PageRequest.prototype.clearSortorder = function() {
  this.setSortorder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.PageRequest.prototype.hasSortorder = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.PageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PageResponse.displayName = 'proto.PageResponse';
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
proto.PageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.PageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalsize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    totalpages: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pagenumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pagesize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pagemaxsize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    sortorder: (f = msg.getSortorder()) && proto.SortOrder.toObject(includeInstance, f)
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
 * @return {!proto.PageResponse}
 */
proto.PageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PageResponse;
  return proto.PageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PageResponse}
 */
proto.PageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalsize(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalpages(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPagenumber(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPagesize(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPagemaxsize(value);
      break;
    case 6:
      var value = new proto.SortOrder;
      reader.readMessage(value,proto.SortOrder.deserializeBinaryFromReader);
      msg.setSortorder(value);
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
proto.PageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalsize();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getTotalpages();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPagenumber();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPagesize();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getPagemaxsize();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getSortorder();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.SortOrder.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 totalSize = 1;
 * @return {number}
 */
proto.PageResponse.prototype.getTotalsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.PageResponse.prototype.setTotalsize = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 totalPages = 2;
 * @return {number}
 */
proto.PageResponse.prototype.getTotalpages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.PageResponse.prototype.setTotalpages = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 pageNumber = 3;
 * @return {number}
 */
proto.PageResponse.prototype.getPagenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.PageResponse.prototype.setPagenumber = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 pageSize = 4;
 * @return {number}
 */
proto.PageResponse.prototype.getPagesize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.PageResponse.prototype.setPagesize = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 pageMaxSize = 5;
 * @return {number}
 */
proto.PageResponse.prototype.getPagemaxsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.PageResponse.prototype.setPagemaxsize = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional SortOrder sortOrder = 6;
 * @return {?proto.SortOrder}
 */
proto.PageResponse.prototype.getSortorder = function() {
  return /** @type{?proto.SortOrder} */ (
    jspb.Message.getWrapperField(this, proto.SortOrder, 6));
};


/** @param {?proto.SortOrder|undefined} value */
proto.PageResponse.prototype.setSortorder = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.PageResponse.prototype.clearSortorder = function() {
  this.setSortorder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.PageResponse.prototype.hasSortorder = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.Sort = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Sort, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Sort.displayName = 'proto.Sort';
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
proto.Sort.prototype.toObject = function(opt_includeInstance) {
  return proto.Sort.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Sort} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Sort.toObject = function(includeInstance, msg) {
  var f, obj = {
    property: jspb.Message.getFieldWithDefault(msg, 1, ""),
    direction: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.Sort}
 */
proto.Sort.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Sort;
  return proto.Sort.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Sort} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Sort}
 */
proto.Sort.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProperty(value);
      break;
    case 2:
      var value = /** @type {!proto.SortDirection} */ (reader.readEnum());
      msg.setDirection(value);
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
proto.Sort.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Sort.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Sort} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Sort.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProperty();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string property = 1;
 * @return {string}
 */
proto.Sort.prototype.getProperty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Sort.prototype.setProperty = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SortDirection direction = 2;
 * @return {!proto.SortDirection}
 */
proto.Sort.prototype.getDirection = function() {
  return /** @type {!proto.SortDirection} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.SortDirection} value */
proto.Sort.prototype.setDirection = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
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
proto.SortOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SortOrder.repeatedFields_, null);
};
goog.inherits(proto.SortOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SortOrder.displayName = 'proto.SortOrder';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SortOrder.repeatedFields_ = [1];



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
proto.SortOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.SortOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SortOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SortOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    sortList: jspb.Message.toObjectList(msg.getSortList(),
    proto.Sort.toObject, includeInstance)
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
 * @return {!proto.SortOrder}
 */
proto.SortOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SortOrder;
  return proto.SortOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SortOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SortOrder}
 */
proto.SortOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Sort;
      reader.readMessage(value,proto.Sort.deserializeBinaryFromReader);
      msg.addSort(value);
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
proto.SortOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SortOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SortOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SortOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSortList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Sort.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Sort sort = 1;
 * @return {!Array<!proto.Sort>}
 */
proto.SortOrder.prototype.getSortList = function() {
  return /** @type{!Array<!proto.Sort>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Sort, 1));
};


/** @param {!Array<!proto.Sort>} value */
proto.SortOrder.prototype.setSortList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Sort=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Sort}
 */
proto.SortOrder.prototype.addSort = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Sort, opt_index);
};


proto.SortOrder.prototype.clearSortList = function() {
  this.setSortList([]);
};


/**
 * @enum {number}
 */
proto.SortDirection = {
  ASCENDING: 0,
  DESCENDING: 1
};

goog.object.extend(exports, proto);