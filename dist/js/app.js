(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(strings) {
  if (typeof strings === 'string') strings = [strings]
  var exprs = [].slice.call(arguments,1)
  var parts = []
  for (var i = 0; i < strings.length-1; i++) {
    parts.push(strings[i], exprs[i] || '')
  }
  parts.push(strings[i])
  return parts.join('')
}

},{}],2:[function(require,module,exports){
/*!
 * @license twgl.js 4.2.0 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/greggman/twgl.js for details
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["twgl"] = factory();
	else
		root["twgl"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Copy named properties
 *
 * @param {string[]} names names of properties to copy
 * @param {object} src object to copy properties from
 * @param {object} dst object to copy properties to
 */
function copyNamedProperties(names, src, dst) {
  names.forEach(function (name) {
    var value = src[name];
    if (value !== undefined) {
      dst[name] = value;
    }
  });
}

/**
 * Copies properties from source to dest only if a matching key is in dest
 *
 * @param {Object.<string, ?>} src the source
 * @param {Object.<string, ?>} dst the dest
 */
function copyExistingProperties(src, dst) {
  Object.keys(dst).forEach(function (key) {
    if (dst.hasOwnProperty(key) && src.hasOwnProperty(key)) {
      dst[key] = src[key];
    }
  });
}

var error = window.console && window.console.error && typeof window.console.error === "function" ? window.console.error.bind(window.console) : function () {};

var warn = window.console && window.console.warn && typeof window.console.warn === "function" ? window.console.warn.bind(window.console) : function () {};

exports.copyExistingProperties = copyExistingProperties;
exports.copyNamedProperties = copyNamedProperties;
exports.error = error;
exports.warn = warn;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Low level shader typed array related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibily they are available at both `twgl.typedArray` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/typedArray
 */

// make sure we don't see a global gl
var gl = undefined; // eslint-disable-line

/* DataType */
var BYTE = 0x1400;
var UNSIGNED_BYTE = 0x1401;
var SHORT = 0x1402;
var UNSIGNED_SHORT = 0x1403;
var INT = 0x1404;
var UNSIGNED_INT = 0x1405;
var FLOAT = 0x1406;
var UNSIGNED_SHORT_4_4_4_4 = 0x8033;
var UNSIGNED_SHORT_5_5_5_1 = 0x8034;
var UNSIGNED_SHORT_5_6_5 = 0x8363;
var HALF_FLOAT = 0x140B;
var UNSIGNED_INT_2_10_10_10_REV = 0x8368;
var UNSIGNED_INT_10F_11F_11F_REV = 0x8C3B;
var UNSIGNED_INT_5_9_9_9_REV = 0x8C3E;
var FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8DAD;
var UNSIGNED_INT_24_8 = 0x84FA;

var glTypeToTypedArray = {};
{
  var tt = glTypeToTypedArray;
  tt[BYTE] = Int8Array;
  tt[UNSIGNED_BYTE] = Uint8Array;
  tt[SHORT] = Int16Array;
  tt[UNSIGNED_SHORT] = Uint16Array;
  tt[INT] = Int32Array;
  tt[UNSIGNED_INT] = Uint32Array;
  tt[FLOAT] = Float32Array;
  tt[UNSIGNED_SHORT_4_4_4_4] = Uint16Array;
  tt[UNSIGNED_SHORT_5_5_5_1] = Uint16Array;
  tt[UNSIGNED_SHORT_5_6_5] = Uint16Array;
  tt[HALF_FLOAT] = Uint16Array;
  tt[UNSIGNED_INT_2_10_10_10_REV] = Uint32Array;
  tt[UNSIGNED_INT_10F_11F_11F_REV] = Uint32Array;
  tt[UNSIGNED_INT_5_9_9_9_REV] = Uint32Array;
  tt[FLOAT_32_UNSIGNED_INT_24_8_REV] = Uint32Array;
  tt[UNSIGNED_INT_24_8] = Uint32Array;
}

/**
 * Get the GL type for a typedArray
 * @param {ArrayBuffer|ArrayBufferView} typedArray a typedArray
 * @return {number} the GL type for array. For example pass in an `Int8Array` and `gl.BYTE` will
 *   be returned. Pass in a `Uint32Array` and `gl.UNSIGNED_INT` will be returned
 * @memberOf module:twgl/typedArray
 */
function getGLTypeForTypedArray(typedArray) {
  if (typedArray instanceof Int8Array) {
    return BYTE;
  } // eslint-disable-line
  if (typedArray instanceof Uint8Array) {
    return UNSIGNED_BYTE;
  } // eslint-disable-line
  if (typedArray instanceof Uint8ClampedArray) {
    return UNSIGNED_BYTE;
  } // eslint-disable-line
  if (typedArray instanceof Int16Array) {
    return SHORT;
  } // eslint-disable-line
  if (typedArray instanceof Uint16Array) {
    return UNSIGNED_SHORT;
  } // eslint-disable-line
  if (typedArray instanceof Int32Array) {
    return INT;
  } // eslint-disable-line
  if (typedArray instanceof Uint32Array) {
    return UNSIGNED_INT;
  } // eslint-disable-line
  if (typedArray instanceof Float32Array) {
    return FLOAT;
  } // eslint-disable-line
  throw "unsupported typed array type";
}

/**
 * Get the GL type for a typedArray type
 * @param {ArrayBufferViewType} typedArrayType a typedArray constructor
 * @return {number} the GL type for type. For example pass in `Int8Array` and `gl.BYTE` will
 *   be returned. Pass in `Uint32Array` and `gl.UNSIGNED_INT` will be returned
 * @memberOf module:twgl/typedArray
 */
function getGLTypeForTypedArrayType(typedArrayType) {
  if (typedArrayType === Int8Array) {
    return BYTE;
  } // eslint-disable-line
  if (typedArrayType === Uint8Array) {
    return UNSIGNED_BYTE;
  } // eslint-disable-line
  if (typedArrayType === Uint8ClampedArray) {
    return UNSIGNED_BYTE;
  } // eslint-disable-line
  if (typedArrayType === Int16Array) {
    return SHORT;
  } // eslint-disable-line
  if (typedArrayType === Uint16Array) {
    return UNSIGNED_SHORT;
  } // eslint-disable-line
  if (typedArrayType === Int32Array) {
    return INT;
  } // eslint-disable-line
  if (typedArrayType === Uint32Array) {
    return UNSIGNED_INT;
  } // eslint-disable-line
  if (typedArrayType === Float32Array) {
    return FLOAT;
  } // eslint-disable-line
  throw "unsupported typed array type";
}

/**
 * Get the typed array constructor for a given GL type
 * @param {number} type the GL type. (eg: `gl.UNSIGNED_INT`)
 * @return {function} the constructor for a the corresponding typed array. (eg. `Uint32Array`).
 * @memberOf module:twgl/typedArray
 */
function getTypedArrayTypeForGLType(type) {
  var CTOR = glTypeToTypedArray[type];
  if (!CTOR) {
    throw "unknown gl type";
  }
  return CTOR;
}

var isArrayBuffer = window.SharedArrayBuffer ? function isArrayBufferOrSharedArrayBuffer(a) {
  return a && a.buffer && (a.buffer instanceof ArrayBuffer || a.buffer instanceof window.SharedArrayBuffer);
} : function isArrayBuffer(a) {
  return a && a.buffer && a.buffer instanceof ArrayBuffer;
};

exports.getGLTypeForTypedArray = getGLTypeForTypedArray;
exports.getGLTypeForTypedArrayType = getGLTypeForTypedArrayType;
exports.getTypedArrayTypeForGLType = getTypedArrayTypeForGLType;
exports.isArrayBuffer = isArrayBuffer;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindUniformBlock = exports.setBlockUniforms = exports.setUniformBlock = exports.setUniforms = exports.setBuffersAndAttributes = exports.setAttributes = exports.bindTransformFeedbackInfo = exports.createTransformFeedbackInfo = exports.createTransformFeedback = exports.createUniformBlockInfo = exports.createUniformBlockInfoFromProgram = exports.createUniformBlockSpecFromProgram = exports.createUniformSetters = exports.createProgramInfoFromProgram = exports.createProgramInfo = exports.createProgramFromSources = exports.createProgramFromScripts = exports.createProgram = exports.createAttributeSetters = undefined;

var _utils = __webpack_require__(3);

var utils = _interopRequireWildcard(_utils);

var _helper = __webpack_require__(0);

var helper = _interopRequireWildcard(_helper);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Low level shader program related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibily they are available at both `twgl.programs` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/programs
 */

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var error = helper.error;
var warn = helper.warn;

var FLOAT = 0x1406;
var FLOAT_VEC2 = 0x8B50;
var FLOAT_VEC3 = 0x8B51;
var FLOAT_VEC4 = 0x8B52;
var INT = 0x1404;
var INT_VEC2 = 0x8B53;
var INT_VEC3 = 0x8B54;
var INT_VEC4 = 0x8B55;
var BOOL = 0x8B56;
var BOOL_VEC2 = 0x8B57;
var BOOL_VEC3 = 0x8B58;
var BOOL_VEC4 = 0x8B59;
var FLOAT_MAT2 = 0x8B5A;
var FLOAT_MAT3 = 0x8B5B;
var FLOAT_MAT4 = 0x8B5C;
var SAMPLER_2D = 0x8B5E;
var SAMPLER_CUBE = 0x8B60;
var SAMPLER_3D = 0x8B5F;
var SAMPLER_2D_SHADOW = 0x8B62;
var FLOAT_MAT2x3 = 0x8B65;
var FLOAT_MAT2x4 = 0x8B66;
var FLOAT_MAT3x2 = 0x8B67;
var FLOAT_MAT3x4 = 0x8B68;
var FLOAT_MAT4x2 = 0x8B69;
var FLOAT_MAT4x3 = 0x8B6A;
var SAMPLER_2D_ARRAY = 0x8DC1;
var SAMPLER_2D_ARRAY_SHADOW = 0x8DC4;
var SAMPLER_CUBE_SHADOW = 0x8DC5;
var UNSIGNED_INT = 0x1405;
var UNSIGNED_INT_VEC2 = 0x8DC6;
var UNSIGNED_INT_VEC3 = 0x8DC7;
var UNSIGNED_INT_VEC4 = 0x8DC8;
var INT_SAMPLER_2D = 0x8DCA;
var INT_SAMPLER_3D = 0x8DCB;
var INT_SAMPLER_CUBE = 0x8DCC;
var INT_SAMPLER_2D_ARRAY = 0x8DCF;
var UNSIGNED_INT_SAMPLER_2D = 0x8DD2;
var UNSIGNED_INT_SAMPLER_3D = 0x8DD3;
var UNSIGNED_INT_SAMPLER_CUBE = 0x8DD4;
var UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8DD7;

var TEXTURE_2D = 0x0DE1;
var TEXTURE_CUBE_MAP = 0x8513;
var TEXTURE_3D = 0x806F;
var TEXTURE_2D_ARRAY = 0x8C1A;

var typeMap = {};

/**
 * Returns the corresponding bind point for a given sampler type
 */
function getBindPointForSamplerType(gl, type) {
  return typeMap[type].bindPoint;
}

// This kind of sucks! If you could compose functions as in `var fn = gl[name];`
// this code could be a lot smaller but that is sadly really slow (T_T)

function floatSetter(gl, location) {
  return function (v) {
    gl.uniform1f(location, v);
  };
}

function floatArraySetter(gl, location) {
  return function (v) {
    gl.uniform1fv(location, v);
  };
}

function floatVec2Setter(gl, location) {
  return function (v) {
    gl.uniform2fv(location, v);
  };
}

function floatVec3Setter(gl, location) {
  return function (v) {
    gl.uniform3fv(location, v);
  };
}

function floatVec4Setter(gl, location) {
  return function (v) {
    gl.uniform4fv(location, v);
  };
}

function intSetter(gl, location) {
  return function (v) {
    gl.uniform1i(location, v);
  };
}

function intArraySetter(gl, location) {
  return function (v) {
    gl.uniform1iv(location, v);
  };
}

function intVec2Setter(gl, location) {
  return function (v) {
    gl.uniform2iv(location, v);
  };
}

function intVec3Setter(gl, location) {
  return function (v) {
    gl.uniform3iv(location, v);
  };
}

function intVec4Setter(gl, location) {
  return function (v) {
    gl.uniform4iv(location, v);
  };
}

function uintSetter(gl, location) {
  return function (v) {
    gl.uniform1ui(location, v);
  };
}

function uintArraySetter(gl, location) {
  return function (v) {
    gl.uniform1uiv(location, v);
  };
}

function uintVec2Setter(gl, location) {
  return function (v) {
    gl.uniform2uiv(location, v);
  };
}

function uintVec3Setter(gl, location) {
  return function (v) {
    gl.uniform3uiv(location, v);
  };
}

function uintVec4Setter(gl, location) {
  return function (v) {
    gl.uniform4uiv(location, v);
  };
}

function floatMat2Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix2fv(location, false, v);
  };
}

function floatMat3Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix3fv(location, false, v);
  };
}

function floatMat4Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix4fv(location, false, v);
  };
}

function floatMat23Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix2x3fv(location, false, v);
  };
}

function floatMat32Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix3x2fv(location, false, v);
  };
}

function floatMat24Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix2x4fv(location, false, v);
  };
}

function floatMat42Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix4x2fv(location, false, v);
  };
}

function floatMat34Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix3x4fv(location, false, v);
  };
}

function floatMat43Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix4x3fv(location, false, v);
  };
}

function samplerSetter(gl, type, unit, location) {
  var bindPoint = getBindPointForSamplerType(gl, type);
  return utils.isWebGL2(gl) ? function (textureOrPair) {
    var texture = void 0;
    var sampler = void 0;
    if (textureOrPair instanceof WebGLTexture) {
      texture = textureOrPair;
      sampler = null;
    } else {
      texture = textureOrPair.texture;
      sampler = textureOrPair.sampler;
    }
    gl.uniform1i(location, unit);
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(bindPoint, texture);
    gl.bindSampler(unit, sampler);
  } : function (texture) {
    gl.uniform1i(location, unit);
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(bindPoint, texture);
  };
}

function samplerArraySetter(gl, type, unit, location, size) {
  var bindPoint = getBindPointForSamplerType(gl, type);
  var units = new Int32Array(size);
  for (var ii = 0; ii < size; ++ii) {
    units[ii] = unit + ii;
  }

  return utils.isWebGL2(gl) ? function (textures) {
    gl.uniform1iv(location, units);
    textures.forEach(function (textureOrPair, index) {
      gl.activeTexture(gl.TEXTURE0 + units[index]);
      var texture = void 0;
      var sampler = void 0;
      if (textureOrPair instanceof WebGLTexture) {
        texture = textureOrPair;
        sampler = null;
      } else {
        texture = textureOrPair.texture;
        sampler = textureOrPair.sampler;
      }
      gl.bindSampler(unit, sampler);
      gl.bindTexture(bindPoint, texture);
    });
  } : function (textures) {
    gl.uniform1iv(location, units);
    textures.forEach(function (texture, index) {
      gl.activeTexture(gl.TEXTURE0 + units[index]);
      gl.bindTexture(bindPoint, texture);
    });
  };
}

typeMap[FLOAT] = { Type: Float32Array, size: 4, setter: floatSetter, arraySetter: floatArraySetter };
typeMap[FLOAT_VEC2] = { Type: Float32Array, size: 8, setter: floatVec2Setter };
typeMap[FLOAT_VEC3] = { Type: Float32Array, size: 12, setter: floatVec3Setter };
typeMap[FLOAT_VEC4] = { Type: Float32Array, size: 16, setter: floatVec4Setter };
typeMap[INT] = { Type: Int32Array, size: 4, setter: intSetter, arraySetter: intArraySetter };
typeMap[INT_VEC2] = { Type: Int32Array, size: 8, setter: intVec2Setter };
typeMap[INT_VEC3] = { Type: Int32Array, size: 12, setter: intVec3Setter };
typeMap[INT_VEC4] = { Type: Int32Array, size: 16, setter: intVec4Setter };
typeMap[UNSIGNED_INT] = { Type: Uint32Array, size: 4, setter: uintSetter, arraySetter: uintArraySetter };
typeMap[UNSIGNED_INT_VEC2] = { Type: Uint32Array, size: 8, setter: uintVec2Setter };
typeMap[UNSIGNED_INT_VEC3] = { Type: Uint32Array, size: 12, setter: uintVec3Setter };
typeMap[UNSIGNED_INT_VEC4] = { Type: Uint32Array, size: 16, setter: uintVec4Setter };
typeMap[BOOL] = { Type: Uint32Array, size: 4, setter: intSetter, arraySetter: intArraySetter };
typeMap[BOOL_VEC2] = { Type: Uint32Array, size: 8, setter: intVec2Setter };
typeMap[BOOL_VEC3] = { Type: Uint32Array, size: 12, setter: intVec3Setter };
typeMap[BOOL_VEC4] = { Type: Uint32Array, size: 16, setter: intVec4Setter };
typeMap[FLOAT_MAT2] = { Type: Float32Array, size: 16, setter: floatMat2Setter };
typeMap[FLOAT_MAT3] = { Type: Float32Array, size: 36, setter: floatMat3Setter };
typeMap[FLOAT_MAT4] = { Type: Float32Array, size: 64, setter: floatMat4Setter };
typeMap[FLOAT_MAT2x3] = { Type: Float32Array, size: 24, setter: floatMat23Setter };
typeMap[FLOAT_MAT2x4] = { Type: Float32Array, size: 32, setter: floatMat24Setter };
typeMap[FLOAT_MAT3x2] = { Type: Float32Array, size: 24, setter: floatMat32Setter };
typeMap[FLOAT_MAT3x4] = { Type: Float32Array, size: 48, setter: floatMat34Setter };
typeMap[FLOAT_MAT4x2] = { Type: Float32Array, size: 32, setter: floatMat42Setter };
typeMap[FLOAT_MAT4x3] = { Type: Float32Array, size: 48, setter: floatMat43Setter };
typeMap[SAMPLER_2D] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D };
typeMap[SAMPLER_CUBE] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP };
typeMap[SAMPLER_3D] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D };
typeMap[SAMPLER_2D_SHADOW] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D };
typeMap[SAMPLER_2D_ARRAY] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY };
typeMap[SAMPLER_2D_ARRAY_SHADOW] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY };
typeMap[SAMPLER_CUBE_SHADOW] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP };
typeMap[INT_SAMPLER_2D] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D };
typeMap[INT_SAMPLER_3D] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D };
typeMap[INT_SAMPLER_CUBE] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP };
typeMap[INT_SAMPLER_2D_ARRAY] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY };
typeMap[UNSIGNED_INT_SAMPLER_2D] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D };
typeMap[UNSIGNED_INT_SAMPLER_3D] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D };
typeMap[UNSIGNED_INT_SAMPLER_CUBE] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP };
typeMap[UNSIGNED_INT_SAMPLER_2D_ARRAY] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY };

function floatAttribSetter(gl, index) {
  return function (b) {
    gl.bindBuffer(gl.ARRAY_BUFFER, b.buffer);
    gl.enableVertexAttribArray(index);
    gl.vertexAttribPointer(index, b.numComponents || b.size, b.type || gl.FLOAT, b.normalize || false, b.stride || 0, b.offset || 0);
    if (b.divisor !== undefined) {
      gl.vertexAttribDivisor(index, b.divisor);
    }
  };
}

function intAttribSetter(gl, index) {
  return function (b) {
    gl.bindBuffer(gl.ARRAY_BUFFER, b.buffer);
    gl.enableVertexAttribArray(index);
    gl.vertexAttribIPointer(index, b.numComponents || b.size, b.type || gl.INT, b.stride || 0, b.offset || 0);
    if (b.divisor !== undefined) {
      gl.vertexAttribDivisor(index, b.divisor);
    }
  };
}

function matAttribSetter(gl, index, typeInfo) {
  var defaultSize = typeInfo.size;
  var count = typeInfo.count;

  return function (b) {
    gl.bindBuffer(gl.ARRAY_BUFFER, b.buffer);
    var numComponents = b.size || b.numComponents || defaultSize;
    var size = numComponents / count;
    var type = b.type || gl.FLOAT;
    var typeInfo = typeMap[type];
    var stride = typeInfo.size * numComponents;
    var normalize = b.normalize || false;
    var offset = b.offset || 0;
    var rowOffset = stride / count;
    for (var i = 0; i < count; ++i) {
      gl.enableVertexAttribArray(index + i);
      gl.vertexAttribPointer(index + i, size, type, normalize, stride, offset + rowOffset * i);
      if (b.divisor !== undefined) {
        gl.vertexAttribDivisor(index + i, b.divisor);
      }
    }
  };
}

var attrTypeMap = {};
attrTypeMap[FLOAT] = { size: 4, setter: floatAttribSetter };
attrTypeMap[FLOAT_VEC2] = { size: 8, setter: floatAttribSetter };
attrTypeMap[FLOAT_VEC3] = { size: 12, setter: floatAttribSetter };
attrTypeMap[FLOAT_VEC4] = { size: 16, setter: floatAttribSetter };
attrTypeMap[INT] = { size: 4, setter: intAttribSetter };
attrTypeMap[INT_VEC2] = { size: 8, setter: intAttribSetter };
attrTypeMap[INT_VEC3] = { size: 12, setter: intAttribSetter };
attrTypeMap[INT_VEC4] = { size: 16, setter: intAttribSetter };
attrTypeMap[UNSIGNED_INT] = { size: 4, setter: intAttribSetter };
attrTypeMap[UNSIGNED_INT_VEC2] = { size: 8, setter: intAttribSetter };
attrTypeMap[UNSIGNED_INT_VEC3] = { size: 12, setter: intAttribSetter };
attrTypeMap[UNSIGNED_INT_VEC4] = { size: 16, setter: intAttribSetter };
attrTypeMap[BOOL] = { size: 4, setter: intAttribSetter };
attrTypeMap[BOOL_VEC2] = { size: 8, setter: intAttribSetter };
attrTypeMap[BOOL_VEC3] = { size: 12, setter: intAttribSetter };
attrTypeMap[BOOL_VEC4] = { size: 16, setter: intAttribSetter };
attrTypeMap[FLOAT_MAT2] = { size: 4, setter: matAttribSetter, count: 2 };
attrTypeMap[FLOAT_MAT3] = { size: 9, setter: matAttribSetter, count: 3 };
attrTypeMap[FLOAT_MAT4] = { size: 16, setter: matAttribSetter, count: 4 };

// make sure we don't see a global gl
var gl = undefined; // eslint-disable-line

/**
 * Error Callback
 * @callback ErrorCallback
 * @param {string} msg error message.
 * @param {number} [lineOffset] amount to add to line number
 * @memberOf module:twgl
 */

function addLineNumbers(src, lineOffset) {
  lineOffset = lineOffset || 0;
  ++lineOffset;

  return src.split("\n").map(function (line, ndx) {
    return ndx + lineOffset + ": " + line;
  }).join("\n");
}

var spaceRE = /^[ \t]*\n/;

/**
 * Loads a shader.
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {string} shaderSource The shader source.
 * @param {number} shaderType The type of shader.
 * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors.
 * @return {WebGLShader} The created shader.
 */
function loadShader(gl, shaderSource, shaderType, opt_errorCallback) {
  var errFn = opt_errorCallback || error;
  // Create the shader object
  var shader = gl.createShader(shaderType);

  // Remove the first end of line because WebGL 2.0 requires
  // #version 300 es
  // as the first line. No whitespace allowed before that line
  // so
  //
  // <script>
  // #version 300 es
  // </script>
  //
  // Has one line before it which is invalid according to GLSL ES 3.00
  //
  var lineOffset = 0;
  if (spaceRE.test(shaderSource)) {
    lineOffset = 1;
    shaderSource = shaderSource.replace(spaceRE, '');
  }

  // Load the shader source
  gl.shaderSource(shader, shaderSource);

  // Compile the shader
  gl.compileShader(shader);

  // Check the compile status
  var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!compiled) {
    // Something went wrong during compilation; get the error
    var lastError = gl.getShaderInfoLog(shader);
    errFn(addLineNumbers(shaderSource, lineOffset) + "\n*** Error compiling shader: " + lastError);
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

/**
 * @typedef {Object} ProgramOptions
 * @property {function(string)} [errorCallback] callback for errors
 * @property {Object.<string,number>} [attribLocations] a attribute name to location map
 * @property {(module:twgl.BufferInfo|Object.<string,module:twgl.AttribInfo>|string[])} [transformFeedbackVaryings] If passed
 *   a BufferInfo will use the attribs names inside. If passed an object of AttribInfos will use the names from that object. Otherwise
 *   you can pass an array of names.
 * @property {number} [transformFeedbackMode] the mode to pass `gl.transformFeedbackVaryings`. Defaults to `SEPARATE_ATTRIBS`.
 * @memberOf module:twgl
 */

/**
 * Gets the program options based on all these optional arguments
 * @param {module:twgl.ProgramOptions|string[]} [opt_attribs] Options for the program or an array of attribs names. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {module:twgl.ProgramOptions} an instance of ProgramOptions based on the arguments pased on
 */
function getProgramOptions(opt_attribs, opt_locations, opt_errorCallback) {
  var transformFeedbackVaryings = void 0;
  if (typeof opt_locations === 'function') {
    opt_errorCallback = opt_locations;
    opt_locations = undefined;
  }
  if (typeof opt_attribs === 'function') {
    opt_errorCallback = opt_attribs;
    opt_attribs = undefined;
  } else if (opt_attribs && !Array.isArray(opt_attribs)) {
    // If we have an errorCallback we can just return this object
    // Otherwise we need to construct one with default errorCallback
    if (opt_attribs.errorCallback) {
      return opt_attribs;
    }
    var opt = opt_attribs;
    opt_errorCallback = opt.errorCallback;
    opt_attribs = opt.attribLocations;
    transformFeedbackVaryings = opt.transformFeedbackVaryings;
  }

  var options = {
    errorCallback: opt_errorCallback || error,
    transformFeedbackVaryings: transformFeedbackVaryings
  };

  if (opt_attribs) {
    var attribLocations = {};
    if (Array.isArray(opt_attribs)) {
      opt_attribs.forEach(function (attrib, ndx) {
        attribLocations[attrib] = opt_locations ? opt_locations[ndx] : ndx;
      });
    } else {
      attribLocations = opt_attribs;
    }
    options.attribLocations = attribLocations;
  }

  return options;
}

var defaultShaderType = ["VERTEX_SHADER", "FRAGMENT_SHADER"];

function getShaderTypeFromScriptType(scriptType) {
  if (scriptType.indexOf("frag") >= 0) {
    return gl.FRAGMENT_SHADER;
  } else if (scriptType.indexOf("vert") >= 0) {
    return gl.VERTEX_SHADER;
  }
  return undefined;
}

function deleteShaders(gl, shaders) {
  shaders.forEach(function (shader) {
    gl.deleteShader(shader);
  });
}

/**
 * Creates a program, attaches (and/or compiles) shaders, binds attrib locations, links the
 * program and calls useProgram.
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgram(gl, [vs, fs], options);
 *     twgl.createProgram(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgram(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgram(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLShader[]|string[]} shaders The shaders to attach, or element ids for their source, or strings that contain their source
 * @param {module:twgl.ProgramOptions|string[]} [opt_attribs] Options for the program or an array of attribs names. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {WebGLProgram?} the created program or null if error.
 * @memberOf module:twgl/programs
 */
function createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback) {
  var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
  var realShaders = [];
  var newShaders = [];
  for (var ndx = 0; ndx < shaders.length; ++ndx) {
    var shader = shaders[ndx];
    if (typeof shader === 'string') {
      var elem = document.getElementById(shader);
      var src = elem ? elem.text : shader;
      var type = gl[defaultShaderType[ndx]];
      if (elem && elem.type) {
        type = getShaderTypeFromScriptType(elem.type) || type;
      }
      shader = loadShader(gl, src, type, progOptions.errorCallback);
      newShaders.push(shader);
    }
    if (shader instanceof WebGLShader) {
      realShaders.push(shader);
    }
  }

  if (realShaders.length !== shaders.length) {
    progOptions.errorCallback("not enough shaders for program");
    deleteShaders(gl, newShaders);
    return null;
  }

  var program = gl.createProgram();
  realShaders.forEach(function (shader) {
    gl.attachShader(program, shader);
  });
  if (progOptions.attribLocations) {
    Object.keys(progOptions.attribLocations).forEach(function (attrib) {
      gl.bindAttribLocation(program, progOptions.attribLocations[attrib], attrib);
    });
  }
  var varyings = progOptions.transformFeedbackVaryings;
  if (varyings) {
    if (varyings.attribs) {
      varyings = varyings.attribs;
    }
    if (!Array.isArray(varyings)) {
      varyings = Object.keys(varyings);
    }
    gl.transformFeedbackVaryings(program, varyings, progOptions.transformFeedbackMode || gl.SEPARATE_ATTRIBS);
  }
  gl.linkProgram(program);

  // Check the link status
  var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!linked) {
    // something went wrong with the link
    var lastError = gl.getProgramInfoLog(program);
    progOptions.errorCallback("Error in program linking:" + lastError);

    gl.deleteProgram(program);
    deleteShaders(gl, newShaders);
    return null;
  }
  return program;
}

/**
 * Loads a shader from a script tag.
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {string} scriptId The id of the script tag.
 * @param {number} [opt_shaderType] The type of shader. If not passed in it will
 *     be derived from the type of the script tag.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors.
 * @return {WebGLShader?} The created shader or null if error.
 */
function createShaderFromScript(gl, scriptId, opt_shaderType, opt_errorCallback) {
  var shaderSource = "";
  var shaderScript = document.getElementById(scriptId);
  if (!shaderScript) {
    throw "*** Error: unknown script element" + scriptId;
  }
  shaderSource = shaderScript.text;

  var shaderType = opt_shaderType || getShaderTypeFromScriptType(shaderScript.type);
  if (!shaderType) {
    throw "*** Error: unknown shader type";
  }

  return loadShader(gl, shaderSource, shaderType, opt_errorCallback);
}

/**
 * Creates a program from 2 script tags.
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_options);
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderScriptIds Array of ids of the script
 *        tags for the shaders. The first is assumed to be the
 *        vertex shader, the second the fragment shader.
 * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
 * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {WebGLProgram} The created program.
 * @memberOf module:twgl/programs
 */
function createProgramFromScripts(gl, shaderScriptIds, opt_attribs, opt_locations, opt_errorCallback) {
  var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
  var shaders = [];
  for (var ii = 0; ii < shaderScriptIds.length; ++ii) {
    var shader = createShaderFromScript(gl, shaderScriptIds[ii], gl[defaultShaderType[ii]], progOptions.errorCallback);
    if (!shader) {
      return null;
    }
    shaders.push(shader);
  }
  return createProgram(gl, shaders, progOptions);
}

/**
 * Creates a program from 2 sources.
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_options);
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderSources Array of sources for the
 *        shaders. The first is assumed to be the vertex shader,
 *        the second the fragment shader.
 * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
 * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {WebGLProgram} The created program.
 * @memberOf module:twgl/programs
 */
function createProgramFromSources(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
  var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
  var shaders = [];
  for (var ii = 0; ii < shaderSources.length; ++ii) {
    var shader = loadShader(gl, shaderSources[ii], gl[defaultShaderType[ii]], progOptions.errorCallback);
    if (!shader) {
      return null;
    }
    shaders.push(shader);
  }
  return createProgram(gl, shaders, progOptions);
}

/**
 * Returns true if attribute/uniform is a reserved/built in
 *
 * It makes no sense to me why GL returns these because it's
 * illegal to call `gl.getUniformLocation` and `gl.getAttribLocation`
 * with names that start with `gl_` (and `webgl_` in WebGL)
 *
 * I can only assume they are there because they might count
 * when computing the number of uniforms/attributes used when you want to
 * know if you are near the limit. That doesn't really make sense
 * to me but the fact that these get returned are in the spec.
 *
 * @param {WebGLActiveInfo} info As returned from `gl.getActiveUniform` or
 *    `gl.getActiveAttrib`.
 * @return {bool} true if it's reserved
 */
function isBuiltIn(info) {
  var name = info.name;
  return name.startsWith("gl_") || name.startsWith("webgl_");
}

/**
 * Creates setter functions for all uniforms of a shader
 * program.
 *
 * @see {@link module:twgl.setUniforms}
 *
 * @param {WebGLProgram} program the program to create setters for.
 * @returns {Object.<string, function>} an object with a setter by name for each uniform
 * @memberOf module:twgl/programs
 */
function createUniformSetters(gl, program) {
  var textureUnit = 0;

  /**
   * Creates a setter for a uniform of the given program with it's
   * location embedded in the setter.
   * @param {WebGLProgram} program
   * @param {WebGLUniformInfo} uniformInfo
   * @returns {function} the created setter.
   */
  function createUniformSetter(program, uniformInfo) {
    var location = gl.getUniformLocation(program, uniformInfo.name);
    var isArray = uniformInfo.size > 1 && uniformInfo.name.substr(-3) === "[0]";
    var type = uniformInfo.type;
    var typeInfo = typeMap[type];
    if (!typeInfo) {
      throw "unknown type: 0x" + type.toString(16); // we should never get here.
    }
    var setter = void 0;
    if (typeInfo.bindPoint) {
      // it's a sampler
      var unit = textureUnit;
      textureUnit += uniformInfo.size;
      if (isArray) {
        setter = typeInfo.arraySetter(gl, type, unit, location, uniformInfo.size);
      } else {
        setter = typeInfo.setter(gl, type, unit, location, uniformInfo.size);
      }
    } else {
      if (typeInfo.arraySetter && isArray) {
        setter = typeInfo.arraySetter(gl, location);
      } else {
        setter = typeInfo.setter(gl, location);
      }
    }
    setter.location = location;
    return setter;
  }

  var uniformSetters = {};
  var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

  for (var ii = 0; ii < numUniforms; ++ii) {
    var uniformInfo = gl.getActiveUniform(program, ii);
    if (isBuiltIn(uniformInfo)) {
      continue;
    }
    var name = uniformInfo.name;
    // remove the array suffix.
    if (name.substr(-3) === "[0]") {
      name = name.substr(0, name.length - 3);
    }
    var setter = createUniformSetter(program, uniformInfo);
    uniformSetters[name] = setter;
  }
  return uniformSetters;
}

/**
 * @typedef {Object} TransformFeedbackInfo
 * @property {number} index index of transform feedback
 * @property {number} type GL type
 * @property {number} size 1 - 4
 * @memberOf module:twgl
 */

/**
 * Create TransformFeedbackInfo for passing to bind/unbindTransformFeedbackInfo.
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLProgram} program an existing WebGLProgram.
 * @return {Object<string, module:twgl.TransformFeedbackInfo>}
 * @memberOf module:twgl
 */
function createTransformFeedbackInfo(gl, program) {
  var info = {};
  var numVaryings = gl.getProgramParameter(program, gl.TRANSFORM_FEEDBACK_VARYINGS);
  for (var ii = 0; ii < numVaryings; ++ii) {
    var varying = gl.getTransformFeedbackVarying(program, ii);
    info[varying.name] = {
      index: ii,
      type: varying.type,
      size: varying.size
    };
  }
  return info;
}

/**
 * Binds buffers for transform feedback.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {(module:twgl.ProgramInfo|Object<string, module:twgl.TransformFeedbackInfo>)} transformFeedbackInfo A ProgramInfo or TransformFeedbackInfo.
 * @param {(module:twgl.BufferInfo|Object<string, module:twgl.AttribInfo>)} [bufferInfo] A BufferInfo or set of AttribInfos.
 * @memberOf module:twgl
 */
function bindTransformFeedbackInfo(gl, transformFeedbackInfo, bufferInfo) {
  if (transformFeedbackInfo.transformFeedbackInfo) {
    transformFeedbackInfo = transformFeedbackInfo.transformFeedbackInfo;
  }
  if (bufferInfo.attribs) {
    bufferInfo = bufferInfo.attribs;
  }
  for (var name in bufferInfo) {
    var varying = transformFeedbackInfo[name];
    if (varying) {
      var buf = bufferInfo[name];
      if (buf.offset) {
        gl.bindBufferRange(gl.TRANSFORM_FEEDBACK_BUFFER, varying.index, buf.buffer, buf.offset, buf.size);
      } else {
        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, varying.index, buf.buffer);
      }
    }
  }
}

/**
 * Unbinds buffers afetr transform feedback.
 *
 * Buffers can not be bound to 2 bind points so if you try to bind a buffer used
 * in a transform feedback as an ARRAY_BUFFER for an attribute it will fail.
 *
 * This function unbinds all buffers that were bound with {@link module:twgl.bindTransformFeedbackInfo}.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {(module:twgl.ProgramInfo|Object<string, module:twgl.TransformFeedbackInfo>)} transformFeedbackInfo A ProgramInfo or TransformFeedbackInfo.
 * @param {(module:twgl.BufferInfo|Object<string, module:twgl.AttribInfo>)} [bufferInfo] A BufferInfo or set of AttribInfos.
 */
function unbindTransformFeedbackInfo(gl, transformFeedbackInfo, bufferInfo) {
  if (transformFeedbackInfo.transformFeedbackInfo) {
    transformFeedbackInfo = transformFeedbackInfo.transformFeedbackInfo;
  }
  if (bufferInfo.attribs) {
    bufferInfo = bufferInfo.attribs;
  }
  for (var name in bufferInfo) {
    var varying = transformFeedbackInfo[name];
    if (varying) {
      gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, varying.index, null);
    }
  }
}

/**
 * Creates a transform feedback and sets the buffers
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {module:twgl.ProgramInfo} programInfo A ProgramInfo as returned from {@link module:twgl.createProgramInfo}
 * @param {(module:twgl.BufferInfo|Object<string, module:twgl.AttribInfo>)} [bufferInfo] A BufferInfo or set of AttribInfos.
 * @return {WebGLTransformFeedback} the created transform feedback
 * @memberOf module:twgl
 */
function createTransformFeedback(gl, programInfo, bufferInfo) {
  var tf = gl.createTransformFeedback();
  gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, tf);
  gl.useProgram(programInfo.program);
  bindTransformFeedbackInfo(gl, programInfo, bufferInfo);
  gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);
  // This is only needed because of a bug in Chrome 56. Will remove
  // when chrome fixes it.
  unbindTransformFeedbackInfo(gl, programInfo, bufferInfo);
  return tf;
}

/**
 * @typedef {Object} UniformData
 * @property {number} type The WebGL type enum for this uniform
 * @property {number} size The number of elements for this uniform
 * @property {number} blockNdx The block index this uniform appears in
 * @property {number} offset The byte offset in the block for this uniform's value
 * @memberOf module:twgl
 */

/**
 * The specification for one UniformBlockObject
 *
 * @typedef {Object} BlockSpec
 * @property {number} index The index of the block.
 * @property {number} size The size in bytes needed for the block
 * @property {number[]} uniformIndices The indices of the uniforms used by the block. These indices
 *    correspond to entries in a UniformData array in the {@link module:twgl.UniformBlockSpec}.
 * @property {bool} usedByVertexShader Self explanitory
 * @property {bool} usedByFragmentShader Self explanitory
 * @property {bool} used Self explanitory
 * @memberOf module:twgl
 */

/**
 * A `UniformBlockSpec` represents the data needed to create and bind
 * UniformBlockObjects for a given program
 *
 * @typedef {Object} UniformBlockSpec
 * @property {Object.<string, module:twgl.BlockSpec> blockSpecs The BlockSpec for each block by block name
 * @property {UniformData[]} uniformData An array of data for each uniform by uniform index.
 * @memberOf module:twgl
 */

/**
 * Creates a UniformBlockSpec for the given program.
 *
 * A UniformBlockSpec represents the data needed to create and bind
 * UniformBlockObjects
 *
 * @param {WebGL2RenderingContext} gl A WebGL2 Rendering Context
 * @param {WebGLProgram} program A WebGLProgram for a successfully linked program
 * @return {module:twgl.UniformBlockSpec} The created UniformBlockSpec
 * @memberOf module:twgl/programs
 */
function createUniformBlockSpecFromProgram(gl, program) {
  var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
  var uniformData = [];
  var uniformIndices = [];

  for (var ii = 0; ii < numUniforms; ++ii) {
    uniformIndices.push(ii);
    uniformData.push({});
    var uniformInfo = gl.getActiveUniform(program, ii);
    if (isBuiltIn(uniformInfo)) {
      break;
    }
    // REMOVE [0]?
    uniformData[ii].name = uniformInfo.name;
  }

  [["UNIFORM_TYPE", "type"], ["UNIFORM_SIZE", "size"], // num elements
  ["UNIFORM_BLOCK_INDEX", "blockNdx"], ["UNIFORM_OFFSET", "offset"]].forEach(function (pair) {
    var pname = pair[0];
    var key = pair[1];
    gl.getActiveUniforms(program, uniformIndices, gl[pname]).forEach(function (value, ndx) {
      uniformData[ndx][key] = value;
    });
  });

  var blockSpecs = {};

  var numUniformBlocks = gl.getProgramParameter(program, gl.ACTIVE_UNIFORM_BLOCKS);
  for (var _ii = 0; _ii < numUniformBlocks; ++_ii) {
    var name = gl.getActiveUniformBlockName(program, _ii);
    var blockSpec = {
      index: _ii,
      usedByVertexShader: gl.getActiveUniformBlockParameter(program, _ii, gl.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER),
      usedByFragmentShader: gl.getActiveUniformBlockParameter(program, _ii, gl.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER),
      size: gl.getActiveUniformBlockParameter(program, _ii, gl.UNIFORM_BLOCK_DATA_SIZE),
      uniformIndices: gl.getActiveUniformBlockParameter(program, _ii, gl.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES)
    };
    blockSpec.used = blockSpec.usedByVertexSahder || blockSpec.usedByFragmentShader;
    blockSpecs[name] = blockSpec;
  }

  return {
    blockSpecs: blockSpecs,
    uniformData: uniformData
  };
}

var arraySuffixRE = /\[\d+\]\.$/; // better way to check?

/**
 * Represents a UniformBlockObject including an ArrayBuffer with all the uniform values
 * and a corresponding WebGLBuffer to hold those values on the GPU
 *
 * @typedef {Object} UniformBlockInfo
 * @property {string} name The name of the block
 * @property {ArrayBuffer} array The array buffer that contains the uniform values
 * @property {Float32Array} asFloat A float view on the array buffer. This is useful
 *    inspecting the contents of the buffer in the debugger.
 * @property {WebGLBuffer} buffer A WebGL buffer that will hold a copy of the uniform values for rendering.
 * @property {number} [offset] offset into buffer
 * @property {Object.<string, ArrayBufferView>} uniforms A uniform name to ArrayBufferView map.
 *   each Uniform has a correctly typed `ArrayBufferView` into array at the correct offset
 *   and length of that uniform. So for example a float uniform would have a 1 float `Float32Array`
 *   view. A single mat4 would have a 16 element `Float32Array` view. An ivec2 would have an
 *   `Int32Array` view, etc.
 * @memberOf module:twgl
 */

/**
 * Creates a `UniformBlockInfo` for the specified block
 *
 * Note: **If the blockName matches no existing blocks a warning is printed to the console and a dummy
 * `UniformBlockInfo` is returned**. This is because when debugging GLSL
 * it is common to comment out large portions of a shader or for example set
 * the final output to a constant. When that happens blocks get optimized out.
 * If this function did not create dummy blocks your code would crash when debugging.
 *
 * @param {WebGL2RenderingContext} gl A WebGL2RenderingContext
 * @param {WebGLProgram} program A WebGLProgram
 * @param {module:twgl.UniformBlockSpec} uinformBlockSpec. A UniformBlockSpec as returned
 *     from {@link module:twgl.createUniformBlockSpecFromProgram}.
 * @param {string} blockName The name of the block.
 * @return {module:twgl.UniformBlockInfo} The created UniformBlockInfo
 * @memberOf module:twgl/programs
 */
function createUniformBlockInfoFromProgram(gl, program, uniformBlockSpec, blockName) {
  var blockSpecs = uniformBlockSpec.blockSpecs;
  var uniformData = uniformBlockSpec.uniformData;
  var blockSpec = blockSpecs[blockName];
  if (!blockSpec) {
    warn("no uniform block object named:", blockName);
    return {
      name: blockName,
      uniforms: {}
    };
  }
  var array = new ArrayBuffer(blockSpec.size);
  var buffer = gl.createBuffer();
  var uniformBufferIndex = blockSpec.index;
  gl.bindBuffer(gl.UNIFORM_BUFFER, buffer);
  gl.uniformBlockBinding(program, blockSpec.index, uniformBufferIndex);

  var prefix = blockName + ".";
  if (arraySuffixRE.test(prefix)) {
    prefix = prefix.replace(arraySuffixRE, ".");
  }
  var uniforms = {};
  blockSpec.uniformIndices.forEach(function (uniformNdx) {
    var data = uniformData[uniformNdx];
    var typeInfo = typeMap[data.type];
    var Type = typeInfo.Type;
    var length = data.size * typeInfo.size;
    var name = data.name;
    if (name.substr(0, prefix.length) === prefix) {
      name = name.substr(prefix.length);
    }
    uniforms[name] = new Type(array, data.offset, length / Type.BYTES_PER_ELEMENT);
  });
  return {
    name: blockName,
    array: array,
    asFloat: new Float32Array(array), // for debugging
    buffer: buffer,
    uniforms: uniforms
  };
}

/**
 * Creates a `UniformBlockInfo` for the specified block
 *
 * Note: **If the blockName matches no existing blocks a warning is printed to the console and a dummy
 * `UniformBlockInfo` is returned**. This is because when debugging GLSL
 * it is common to comment out large portions of a shader or for example set
 * the final output to a constant. When that happens blocks get optimized out.
 * If this function did not create dummy blocks your code would crash when debugging.
 *
 * @param {WebGL2RenderingContext} gl A WebGL2RenderingContext
 * @param {module:twgl.ProgramInfo} programInfo a `ProgramInfo`
 *     as returned from {@link module:twgl.createProgramInfo}
 * @param {string} blockName The name of the block.
 * @return {module:twgl.UniformBlockInfo} The created UniformBlockInfo
 * @memberOf module:twgl/programs
 */
function createUniformBlockInfo(gl, programInfo, blockName) {
  return createUniformBlockInfoFromProgram(gl, programInfo.program, programInfo.uniformBlockSpec, blockName);
}

/**
 * Binds a unform block to the matching uniform block point.
 * Matches by blocks by name so blocks must have the same name not just the same
 * structure.
 *
 * If you have changed any values and you upload the valus into the corresponding WebGLBuffer
 * call {@link module:twgl.setUniformBlock} instead.
 *
 * @param {WebGL2RenderingContext} gl A WebGL 2 rendering context.
 * @param {(module:twgl.ProgramInfo|module:twgl.UniformBlockSpec)} programInfo a `ProgramInfo`
 *     as returned from {@link module:twgl.createProgramInfo} or or `UniformBlockSpec` as
 *     returned from {@link module:twgl.createUniformBlockSpecFromProgram}.
 * @param {module:twgl.UniformBlockInfo} uniformBlockInfo a `UniformBlockInfo` as returned from
 *     {@link module:twgl.createUniformBlockInfo}.
 * @return {bool} true if buffer was bound. If the programInfo has no block with the same block name
 *     no buffer is bound.
 * @memberOf module:twgl/programs
 */
function bindUniformBlock(gl, programInfo, uniformBlockInfo) {
  var uniformBlockSpec = programInfo.uniformBlockSpec || programInfo;
  var blockSpec = uniformBlockSpec.blockSpecs[uniformBlockInfo.name];
  if (blockSpec) {
    var bufferBindIndex = blockSpec.index;
    gl.bindBufferRange(gl.UNIFORM_BUFFER, bufferBindIndex, uniformBlockInfo.buffer, uniformBlockInfo.offset || 0, uniformBlockInfo.array.byteLength);
    return true;
  }
  return false;
}

/**
 * Uploads the current uniform values to the corresponding WebGLBuffer
 * and binds that buffer to the program's corresponding bind point for the uniform block object.
 *
 * If you haven't changed any values and you only need to bind the uniform block object
 * call {@link module:twgl.bindUniformBlock} instead.
 *
 * @param {WebGL2RenderingContext} gl A WebGL 2 rendering context.
 * @param {(module:twgl.ProgramInfo|module:twgl.UniformBlockSpec)} programInfo a `ProgramInfo`
 *     as returned from {@link module:twgl.createProgramInfo} or or `UniformBlockSpec` as
 *     returned from {@link module:twgl.createUniformBlockSpecFromProgram}.
 * @param {module:twgl.UniformBlockInfo} uniformBlockInfo a `UniformBlockInfo` as returned from
 *     {@link module:twgl.createUniformBlockInfo}.
 * @memberOf module:twgl/programs
 */
function setUniformBlock(gl, programInfo, uniformBlockInfo) {
  if (bindUniformBlock(gl, programInfo, uniformBlockInfo)) {
    gl.bufferData(gl.UNIFORM_BUFFER, uniformBlockInfo.array, gl.DYNAMIC_DRAW);
  }
}

/**
 * Sets values of a uniform block object
 *
 * @param {module:twgl.UniformBlockInfo} uniformBlockInfo A UniformBlockInfo as returned by {@link module:twgl.createUniformBlockInfo}.
 * @param {Object.<string, ?>} values A uniform name to value map where the value is correct for the given
 *    type of uniform. So for example given a block like
 *
 *       uniform SomeBlock {
 *         float someFloat;
 *         vec2 someVec2;
 *         vec3 someVec3Array[2];
 *         int someInt;
 *       }
 *
 *  You can set the values of the uniform block with
 *
 *       twgl.setBlockUniforms(someBlockInfo, {
 *          someFloat: 12.3,
 *          someVec2: [1, 2],
 *          someVec3Array: [1, 2, 3, 4, 5, 6],
 *          someInt: 5,
 *       }
 *
 *  Arrays can be JavaScript arrays or typed arrays
 *
 *  Any name that doesn't match will be ignored
 * @memberOf module:twgl/programs
 */
function setBlockUniforms(uniformBlockInfo, values) {
  var uniforms = uniformBlockInfo.uniforms;
  for (var name in values) {
    var array = uniforms[name];
    if (array) {
      var value = values[name];
      if (value.length) {
        array.set(value);
      } else {
        array[0] = value;
      }
    }
  }
}

/**
 * Set uniforms and binds related textures.
 *
 * example:
 *
 *     const programInfo = createProgramInfo(
 *         gl, ["some-vs", "some-fs"]);
 *
 *     const tex1 = gl.createTexture();
 *     const tex2 = gl.createTexture();
 *
 *     ... assume we setup the textures with data ...
 *
 *     const uniforms = {
 *       u_someSampler: tex1,
 *       u_someOtherSampler: tex2,
 *       u_someColor: [1,0,0,1],
 *       u_somePosition: [0,1,1],
 *       u_someMatrix: [
 *         1,0,0,0,
 *         0,1,0,0,
 *         0,0,1,0,
 *         0,0,0,0,
 *       ],
 *     };
 *
 *     gl.useProgram(program);
 *
 * This will automatically bind the textures AND set the
 * uniforms.
 *
 *     twgl.setUniforms(programInfo, uniforms);
 *
 * For the example above it is equivalent to
 *
 *     var texUnit = 0;
 *     gl.activeTexture(gl.TEXTURE0 + texUnit);
 *     gl.bindTexture(gl.TEXTURE_2D, tex1);
 *     gl.uniform1i(u_someSamplerLocation, texUnit++);
 *     gl.activeTexture(gl.TEXTURE0 + texUnit);
 *     gl.bindTexture(gl.TEXTURE_2D, tex2);
 *     gl.uniform1i(u_someSamplerLocation, texUnit++);
 *     gl.uniform4fv(u_someColorLocation, [1, 0, 0, 1]);
 *     gl.uniform3fv(u_somePositionLocation, [0, 1, 1]);
 *     gl.uniformMatrix4fv(u_someMatrix, false, [
 *         1,0,0,0,
 *         0,1,0,0,
 *         0,0,1,0,
 *         0,0,0,0,
 *       ]);
 *
 * Note it is perfectly reasonable to call `setUniforms` multiple times. For example
 *
 *     const uniforms = {
 *       u_someSampler: tex1,
 *       u_someOtherSampler: tex2,
 *     };
 *
 *     const moreUniforms {
 *       u_someColor: [1,0,0,1],
 *       u_somePosition: [0,1,1],
 *       u_someMatrix: [
 *         1,0,0,0,
 *         0,1,0,0,
 *         0,0,1,0,
 *         0,0,0,0,
 *       ],
 *     };
 *
 *     twgl.setUniforms(programInfo, uniforms);
 *     twgl.setUniforms(programInfo, moreUniforms);
 *
 * You can also add WebGLSamplers to uniform samplers as in
 *
 *     const uniforms = {
 *       u_someSampler: {
 *         texture: someWebGLTexture,
 *         sampler: someWebGLSampler,
 *       },
 *     };
 *
 * In which case both the sampler and texture will be bound to the
 * same unit.
 *
 * @param {(module:twgl.ProgramInfo|Object.<string, function>)} setters a `ProgramInfo` as returned from `createProgramInfo` or the setters returned from
 *        `createUniformSetters`.
 * @param {Object.<string, ?>} values an object with values for the
 *        uniforms.
 *   You can pass multiple objects by putting them in an array or by calling with more arguments.For example
 *
 *     const sharedUniforms = {
 *       u_fogNear: 10,
 *       u_projection: ...
 *       ...
 *     };
 *
 *     const localUniforms = {
 *       u_world: ...
 *       u_diffuseColor: ...
 *     };
 *
 *     twgl.setUniforms(programInfo, sharedUniforms, localUniforms);
 *
 *     // is the same as
 *
 *     twgl.setUniforms(programInfo, [sharedUniforms, localUniforms]);
 *
 *     // is the same as
 *
 *     twgl.setUniforms(programInfo, sharedUniforms);
 *     twgl.setUniforms(programInfo, localUniforms};
 *
 * @memberOf module:twgl/programs
 */
function setUniforms(setters, values) {
  // eslint-disable-line
  var actualSetters = setters.uniformSetters || setters;
  var numArgs = arguments.length;
  for (var andx = 1; andx < numArgs; ++andx) {
    var vals = arguments[andx];
    if (Array.isArray(vals)) {
      var numValues = vals.length;
      for (var ii = 0; ii < numValues; ++ii) {
        setUniforms(actualSetters, vals[ii]);
      }
    } else {
      for (var name in vals) {
        var setter = actualSetters[name];
        if (setter) {
          setter(vals[name]);
        }
      }
    }
  }
}

/**
 * Creates setter functions for all attributes of a shader
 * program. You can pass this to {@link module:twgl.setBuffersAndAttributes} to set all your buffers and attributes.
 *
 * @see {@link module:twgl.setAttributes} for example
 * @param {WebGLProgram} program the program to create setters for.
 * @return {Object.<string, function>} an object with a setter for each attribute by name.
 * @memberOf module:twgl/programs
 */
function createAttributeSetters(gl, program) {
  var attribSetters = {};

  var numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
  for (var ii = 0; ii < numAttribs; ++ii) {
    var attribInfo = gl.getActiveAttrib(program, ii);
    if (isBuiltIn(attribInfo)) {
      continue;
    }
    var index = gl.getAttribLocation(program, attribInfo.name);
    var typeInfo = attrTypeMap[attribInfo.type];
    var setter = typeInfo.setter(gl, index, typeInfo);
    setter.location = index;
    attribSetters[attribInfo.name] = setter;
  }

  return attribSetters;
}

/**
 * Sets attributes and binds buffers (deprecated... use {@link module:twgl.setBuffersAndAttributes})
 *
 * Example:
 *
 *     const program = createProgramFromScripts(
 *         gl, ["some-vs", "some-fs");
 *
 *     const attribSetters = createAttributeSetters(program);
 *
 *     const positionBuffer = gl.createBuffer();
 *     const texcoordBuffer = gl.createBuffer();
 *
 *     const attribs = {
 *       a_position: {buffer: positionBuffer, numComponents: 3},
 *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
 *     };
 *
 *     gl.useProgram(program);
 *
 * This will automatically bind the buffers AND set the
 * attributes.
 *
 *     setAttributes(attribSetters, attribs);
 *
 * Properties of attribs. For each attrib you can add
 * properties:
 *
 * *   type: the type of data in the buffer. Default = gl.FLOAT
 * *   normalize: whether or not to normalize the data. Default = false
 * *   stride: the stride. Default = 0
 * *   offset: offset into the buffer. Default = 0
 * *   divisor: the divisor for instances. Default = undefined
 *
 * For example if you had 3 value float positions, 2 value
 * float texcoord and 4 value uint8 colors you'd setup your
 * attribs like this
 *
 *     const attribs = {
 *       a_position: {buffer: positionBuffer, numComponents: 3},
 *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
 *       a_color: {
 *         buffer: colorBuffer,
 *         numComponents: 4,
 *         type: gl.UNSIGNED_BYTE,
 *         normalize: true,
 *       },
 *     };
 *
 * @param {Object.<string, function>} setters Attribute setters as returned from createAttributeSetters
 * @param {Object.<string, module:twgl.AttribInfo>} buffers AttribInfos mapped by attribute name.
 * @memberOf module:twgl/programs
 * @deprecated use {@link module:twgl.setBuffersAndAttributes}
 */
function setAttributes(setters, buffers) {
  for (var name in buffers) {
    var setter = setters[name];
    if (setter) {
      setter(buffers[name]);
    }
  }
}

/**
 * Sets attributes and buffers including the `ELEMENT_ARRAY_BUFFER` if appropriate
 *
 * Example:
 *
 *     const programInfo = createProgramInfo(
 *         gl, ["some-vs", "some-fs");
 *
 *     const arrays = {
 *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *     };
 *
 *     const bufferInfo = createBufferInfoFromArrays(gl, arrays);
 *
 *     gl.useProgram(programInfo.program);
 *
 * This will automatically bind the buffers AND set the
 * attributes.
 *
 *     setBuffersAndAttributes(gl, programInfo, bufferInfo);
 *
 * For the example above it is equivilent to
 *
 *     gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
 *     gl.enableVertexAttribArray(a_positionLocation);
 *     gl.vertexAttribPointer(a_positionLocation, 3, gl.FLOAT, false, 0, 0);
 *     gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
 *     gl.enableVertexAttribArray(a_texcoordLocation);
 *     gl.vertexAttribPointer(a_texcoordLocation, 4, gl.FLOAT, false, 0, 0);
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
 * @param {(module:twgl.ProgramInfo|Object.<string, function>)} setters A `ProgramInfo` as returned from {@link module:twgl.createProgrmaInfo} or Attribute setters as returned from {@link module:twgl.createAttributeSetters}
 * @param {(module:twgl.BufferInfo|module:twgl.vertexArrayInfo)} buffers a `BufferInfo` as returned from {@link module:twgl.createBufferInfoFromArrays}.
 *   or a `VertexArrayInfo` as returned from {@link module:twgl.createVertexArrayInfo}
 * @memberOf module:twgl/programs
 */
function setBuffersAndAttributes(gl, programInfo, buffers) {
  if (buffers.vertexArrayObject) {
    gl.bindVertexArray(buffers.vertexArrayObject);
  } else {
    setAttributes(programInfo.attribSetters || programInfo, buffers.attribs);
    if (buffers.indices) {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
    }
  }
}

/**
 * @typedef {Object} ProgramInfo
 * @property {WebGLProgram} program A shader program
 * @property {Object<string, function>} uniformSetters object of setters as returned from createUniformSetters,
 * @property {Object<string, function>} attribSetters object of setters as returned from createAttribSetters,
 * @propetty {module:twgl.UniformBlockSpec} [uniformBlockSpace] a uniform block spec for making UniformBlockInfos with createUniformBlockInfo etc..
 * @property {Object<string, module:twgl.TransformFeedbackInfo>} [transformFeedbackInfo] info for transform feedbacks
 * @memberOf module:twgl
 */

/**
 * Creates a ProgramInfo from an existing program.
 *
 * A ProgramInfo contains
 *
 *     programInfo = {
 *        program: WebGLProgram,
 *        uniformSetters: object of setters as returned from createUniformSetters,
 *        attribSetters: object of setters as returned from createAttribSetters,
 *     }
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {WebGLProgram} program an existing WebGLProgram.
 * @return {module:twgl.ProgramInfo} The created ProgramInfo.
 * @memberOf module:twgl/programs
 */
function createProgramInfoFromProgram(gl, program) {
  var uniformSetters = createUniformSetters(gl, program);
  var attribSetters = createAttributeSetters(gl, program);
  var programInfo = {
    program: program,
    uniformSetters: uniformSetters,
    attribSetters: attribSetters
  };

  if (utils.isWebGL2(gl)) {
    programInfo.uniformBlockSpec = createUniformBlockSpecFromProgram(gl, program);
    programInfo.transformFeedbackInfo = createTransformFeedbackInfo(gl, program);
  }

  return programInfo;
}

/**
 * Creates a ProgramInfo from 2 sources.
 *
 * A ProgramInfo contains
 *
 *     programInfo = {
 *        program: WebGLProgram,
 *        uniformSetters: object of setters as returned from createUniformSetters,
 *        attribSetters: object of setters as returned from createAttribSetters,
 *     }
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgramInfo(gl, [vs, fs], options);
 *     twgl.createProgramInfo(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgramInfo(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgramInfo(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderSources Array of sources for the
 *        shaders or ids. The first is assumed to be the vertex shader,
 *        the second the fragment shader.
 * @param {module:twgl.ProgramOptions|string[]} [opt_attribs] Options for the program or an array of attribs names. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations] The locations for the attributes. A parallel array to opt_attribs letting you assign locations.
 * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {module:twgl.ProgramInfo?} The created ProgramInfo or null if it failed to link or compile
 * @memberOf module:twgl/programs
 */
function createProgramInfo(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
  var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
  var good = true;
  shaderSources = shaderSources.map(function (source) {
    // Lets assume if there is no \n it's an id
    if (source.indexOf("\n") < 0) {
      var script = document.getElementById(source);
      if (!script) {
        progOptions.errorCallback("no element with id: " + source);
        good = false;
      } else {
        source = script.text;
      }
    }
    return source;
  });
  if (!good) {
    return null;
  }
  var program = createProgramFromSources(gl, shaderSources, progOptions);
  if (!program) {
    return null;
  }
  return createProgramInfoFromProgram(gl, program);
}

exports.createAttributeSetters = createAttributeSetters;
exports.createProgram = createProgram;
exports.createProgramFromScripts = createProgramFromScripts;
exports.createProgramFromSources = createProgramFromSources;
exports.createProgramInfo = createProgramInfo;
exports.createProgramInfoFromProgram = createProgramInfoFromProgram;
exports.createUniformSetters = createUniformSetters;
exports.createUniformBlockSpecFromProgram = createUniformBlockSpecFromProgram;
exports.createUniformBlockInfoFromProgram = createUniformBlockInfoFromProgram;
exports.createUniformBlockInfo = createUniformBlockInfo;
exports.createTransformFeedback = createTransformFeedback;
exports.createTransformFeedbackInfo = createTransformFeedbackInfo;
exports.bindTransformFeedbackInfo = bindTransformFeedbackInfo;
exports.setAttributes = setAttributes;
exports.setBuffersAndAttributes = setBuffersAndAttributes;
exports.setUniforms = setUniforms;
exports.setUniformBlock = setUniformBlock;
exports.setBlockUniforms = setBlockUniforms;
exports.bindUniformBlock = bindUniformBlock;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Copyright 2017, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Gets the gl version as a number
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @return {number} version of gl
 */
//function getVersionAsNumber(gl) {
//  return parseFloat(gl.getParameter(gl.VERSION).substr(6));
//}

/**
 * Check if context is WebGL 2.0
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @return {bool} true if it's WebGL 2.0
 * @memberOf module:twgl
 */
function isWebGL2(gl) {
  // This is the correct check but it's slow
  //  return gl.getParameter(gl.VERSION).indexOf("WebGL 2.0") === 0;
  // This might also be the correct check but I'm assuming it's slow-ish
  // return gl instanceof WebGL2RenderingContext;
  return !!gl.texStorage2D;
}

/**
 * Check if context is WebGL 1.0
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @return {bool} true if it's WebGL 1.0
 * @memberOf module:twgl
 */
function isWebGL1(gl) {
  // This is the correct check but it's slow
  // const version = getVersionAsNumber(gl);
  // return version <= 1.0 && version > 0.0;  // because as of 2016/5 Edge returns 0.96
  // This might also be the correct check but I'm assuming it's slow-ish
  // return gl instanceof WebGLRenderingContext;
  return !gl.texStorage2D;
}

/**
 * Gets a string for WebGL enum
 *
 * Note: Several enums are the same. Without more
 * context (which function) it's impossible to always
 * give the correct enum. As it is, for matching values
 * it gives all enums. Checking the WebGL2RenderingContext
 * that means
 *
 *      0     = ZERO | POINT | NONE | NO_ERROR
 *      1     = ONE | LINES | SYNC_FLUSH_COMMANDS_BIT
 *      32777 = BLEND_EQUATION_RGB | BLEND_EQUATION_RGB
 *      36662 = COPY_READ_BUFFER | COPY_READ_BUFFER_BINDING
 *      36663 = COPY_WRITE_BUFFER | COPY_WRITE_BUFFER_BINDING
 *      36006 = FRAMEBUFFER_BINDING | DRAW_FRAMEBUFFER_BINDING
 *
 * It's also not useful for bits really unless you pass in individual bits.
 * In other words
 *
 *     const bits = gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT;
 *     twgl.glEnumToString(gl, bits);  // not going to work
 *
 * Note that some enums only exist on extensions. If you
 * want them to show up you need to pass the extension at least
 * once. For example
 *
 *     const ext = gl.getExtension('WEBGL_compressed_texture_s3tc`);
 *     if (ext) {
 *        twgl.glEnumToString(ext, 0);  // just prime the function
 *
 *        ..later..
 *
 *        const internalFormat = ext.COMPRESSED_RGB_S3TC_DXT1_EXT;
 *        console.log(twgl.glEnumToString(gl, internalFormat));
 *
 * Notice I didn't have to pass the extension the second time. This means
 * you can have place that generically gets an enum for texture formats for example.
 * and as long as you primed the function with the extensions
 *
 * If you're using `twgl.addExtensionsToContext` to enable your extensions
 * then twgl will automatically get the extension's enums.
 *
 * @param {WebGLRenderingContext|Extension} gl A WebGLRenderingContext or any extension object
 * @param {number} value the value of the enum you want to look up.
 * @memberOf module:twgl
 */
var glEnumToString = function () {
  var haveEnumsForType = {};
  var enums = {};

  function addEnums(gl) {
    var type = gl.constructor.name;
    if (!haveEnumsForType[type]) {
      for (var key in gl) {
        if (typeof gl[key] === 'number') {
          var existing = enums[gl[key]];
          enums[gl[key]] = existing ? existing + " | " + key : key;
        }
      }
      haveEnumsForType[type] = true;
    }
  }

  return function glEnumToString(gl, value) {
    addEnums(gl);
    return enums[value] || "0x" + value.toString(16);
  };
}();

exports.glEnumToString = glEnumToString;
exports.isWebGL1 = isWebGL1;
exports.isWebGL2 = isWebGL2;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 *
 * Vec3 math math functions.
 *
 * Almost all functions take an optional `dst` argument. If it is not passed in the
 * functions will create a new Vec3. In other words you can do this
 *
 *     var v = v3.cross(v1, v2);  // Creates a new Vec3 with the cross product of v1 x v2.
 *
 * or
 *
 *     var v3 = v3.create();
 *     v3.cross(v1, v2, v);  // Puts the cross product of v1 x v2 in v
 *
 * The first style is often easier but depending on where it's used it generates garbage where
 * as there is almost never allocation with the second style.
 *
 * It is always save to pass any vector as the destination. So for example
 *
 *     v3.cross(v1, v2, v1);  // Puts the cross product of v1 x v2 in v1
 *
 * @module twgl/v3
 */

var VecType = Float32Array;

/**
 * A JavaScript array with 3 values or a Float32Array with 3 values.
 * When created by the library will create the default type which is `Float32Array`
 * but can be set by calling {@link module:twgl/v3.setDefaultType}.
 * @typedef {(number[]|Float32Array)} Vec3
 * @memberOf module:twgl/v3
 */

/**
 * Sets the type this library creates for a Vec3
 * @param {constructor} ctor the constructor for the type. Either `Float32Array` or `Array`
 * @return {constructor} previous constructor for Vec3
 */
function setDefaultType(ctor) {
  var oldType = VecType;
  VecType = ctor;
  return oldType;
}

/**
 * Creates a vec3; may be called with x, y, z to set initial values.
 * @return {Vec3} the created vector
 * @memberOf module:twgl/v3
 */
function create(x, y, z) {
  var dst = new VecType(3);
  if (x) {
    dst[0] = x;
  }
  if (y) {
    dst[1] = y;
  }
  if (z) {
    dst[2] = z;
  }
  return dst;
}

/**
 * Adds two vectors; assumes a and b have the same dimension.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @memberOf module:twgl/v3
 */
function add(a, b, dst) {
  dst = dst || new VecType(3);

  dst[0] = a[0] + b[0];
  dst[1] = a[1] + b[1];
  dst[2] = a[2] + b[2];

  return dst;
}

/**
 * Subtracts two vectors.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @memberOf module:twgl/v3
 */
function subtract(a, b, dst) {
  dst = dst || new VecType(3);

  dst[0] = a[0] - b[0];
  dst[1] = a[1] - b[1];
  dst[2] = a[2] - b[2];

  return dst;
}

/**
 * Performs linear interpolation on two vectors.
 * Given vectors a and b and interpolation coefficient t, returns
 * (1 - t) * a + t * b.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {number} t Interpolation coefficient.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @memberOf module:twgl/v3
 */
function lerp(a, b, t, dst) {
  dst = dst || new VecType(3);

  dst[0] = (1 - t) * a[0] + t * b[0];
  dst[1] = (1 - t) * a[1] + t * b[1];
  dst[2] = (1 - t) * a[2] + t * b[2];

  return dst;
}

/**
 * Mutiplies a vector by a scalar.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {number} k The scalar.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} dst.
 * @memberOf module:twgl/v3
 */
function mulScalar(v, k, dst) {
  dst = dst || new VecType(3);

  dst[0] = v[0] * k;
  dst[1] = v[1] * k;
  dst[2] = v[2] * k;

  return dst;
}

/**
 * Divides a vector by a scalar.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {number} k The scalar.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} dst.
 * @memberOf module:twgl/v3
 */
function divScalar(v, k, dst) {
  dst = dst || new VecType(3);

  dst[0] = v[0] / k;
  dst[1] = v[1] / k;
  dst[2] = v[2] / k;

  return dst;
}

/**
 * Computes the cross product of two vectors; assumes both vectors have
 * three entries.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} The vector a cross b.
 * @memberOf module:twgl/v3
 */
function cross(a, b, dst) {
  dst = dst || new VecType(3);

  var t1 = a[2] * b[0] - a[0] * b[2];
  var t2 = a[0] * b[1] - a[1] * b[0];
  dst[0] = a[1] * b[2] - a[2] * b[1];
  dst[1] = t1;
  dst[2] = t2;

  return dst;
}

/**
 * Computes the dot product of two vectors; assumes both vectors have
 * three entries.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @return {number} dot product
 * @memberOf module:twgl/v3
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the length of vector
 * @param {module:twgl/v3.Vec3} v vector.
 * @return {number} length of vector.
 * @memberOf module:twgl/v3
 */
function length(v) {
  return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
}

/**
 * Computes the square of the length of vector
 * @param {module:twgl/v3.Vec3} v vector.
 * @return {number} square of the length of vector.
 * @memberOf module:twgl/v3
 */
function lengthSq(v) {
  return v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
}

/**
 * Computes the distance between 2 points
 * @param {module:twgl/v3.Vec3} a vector.
 * @param {module:twgl/v3.Vec3} b vector.
 * @return {number} distance between a and b
 * @memberOf module:twgl/v3
 */
function distance(a, b) {
  var dx = a[0] - b[0];
  var dy = a[1] - b[1];
  var dz = a[2] - b[2];
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

/**
 * Computes the square of the distance between 2 points
 * @param {module:twgl/v3.Vec3} a vector.
 * @param {module:twgl/v3.Vec3} b vector.
 * @return {number} square of the distance between a and b
 * @memberOf module:twgl/v3
 */
function distanceSq(a, b) {
  var dx = a[0] - b[0];
  var dy = a[1] - b[1];
  var dz = a[2] - b[2];
  return dx * dx + dy * dy + dz * dz;
}

/**
 * Divides a vector by its Euclidean length and returns the quotient.
 * @param {module:twgl/v3.Vec3} a The vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} The normalized vector.
 * @memberOf module:twgl/v3
 */
function normalize(a, dst) {
  dst = dst || new VecType(3);

  var lenSq = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
  var len = Math.sqrt(lenSq);
  if (len > 0.00001) {
    dst[0] = a[0] / len;
    dst[1] = a[1] / len;
    dst[2] = a[2] / len;
  } else {
    dst[0] = 0;
    dst[1] = 0;
    dst[2] = 0;
  }

  return dst;
}

/**
 * Negates a vector.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} -v.
 * @memberOf module:twgl/v3
 */
function negate(v, dst) {
  dst = dst || new VecType(3);

  dst[0] = -v[0];
  dst[1] = -v[1];
  dst[2] = -v[2];

  return dst;
}

/**
 * Copies a vector.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} A copy of v.
 * @memberOf module:twgl/v3
 */
function copy(v, dst) {
  dst = dst || new VecType(3);

  dst[0] = v[0];
  dst[1] = v[1];
  dst[2] = v[2];

  return dst;
}

/**
 * Multiplies a vector by another vector (component-wise); assumes a and
 * b have the same length.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} The vector of products of entries of a and
 *     b.
 * @memberOf module:twgl/v3
 */
function multiply(a, b, dst) {
  dst = dst || new VecType(3);

  dst[0] = a[0] * b[0];
  dst[1] = a[1] * b[1];
  dst[2] = a[2] * b[2];

  return dst;
}

/**
 * Divides a vector by another vector (component-wise); assumes a and
 * b have the same length.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} The vector of quotients of entries of a and
 *     b.
 * @memberOf module:twgl/v3
 */
function divide(a, b, dst) {
  dst = dst || new VecType(3);

  dst[0] = a[0] / b[0];
  dst[1] = a[1] / b[1];
  dst[2] = a[2] / b[2];

  return dst;
}

exports.add = add;
exports.copy = copy;
exports.create = create;
exports.cross = cross;
exports.distance = distance;
exports.distanceSq = distanceSq;
exports.divide = divide;
exports.divScalar = divScalar;
exports.dot = dot;
exports.lerp = lerp;
exports.length = length;
exports.lengthSq = lengthSq;
exports.mulScalar = mulScalar;
exports.multiply = multiply;
exports.negate = negate;
exports.normalize = normalize;
exports.setDefaultType = setDefaultType;
exports.subtract = subtract;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArray_ = exports.getNumComponents_ = exports.setAttributeDefaults_ = exports.setAttributePrefix = exports.setAttribInfoBufferFromArray = exports.createBufferInfoFromArrays = exports.createBufferFromTypedArray = exports.createBufferFromArray = exports.createBuffersFromArrays = exports.createAttribsFromArrays = undefined;

var _typedarrays = __webpack_require__(1);

var typedArrays = _interopRequireWildcard(_typedarrays);

var _helper = __webpack_require__(0);

var helper = _interopRequireWildcard(_helper);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Low level attribute and buffer related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibily they are available at both `twgl.attributes` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/attributes
 */

// make sure we don't see a global gl
/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var gl = undefined; // eslint-disable-line
var defaults = {
  attribPrefix: ""
};

/**
 * Sets the default attrib prefix
 *
 * When writing shaders I prefer to name attributes with `a_`, uniforms with `u_` and varyings with `v_`
 * as it makes it clear where they came from. But, when building geometry I prefer using unprefixed names.
 *
 * In otherwords I'll create arrays of geometry like this
 *
 *     var arrays = {
 *       position: ...
 *       normal: ...
 *       texcoord: ...
 *     };
 *
 * But need those mapped to attributes and my attributes start with `a_`.
 *
 * @deprecated see {@link module:twgl.setDefaults}
 * @param {string} prefix prefix for attribs
 * @memberOf module:twgl/attributes
 */
function setAttributePrefix(prefix) {
  defaults.attribPrefix = prefix;
}

function setDefaults(newDefaults) {
  helper.copyExistingProperties(newDefaults, defaults);
}

function setBufferFromTypedArray(gl, type, buffer, array, drawType) {
  gl.bindBuffer(type, buffer);
  gl.bufferData(type, array, drawType || gl.STATIC_DRAW);
}

/**
 * Given typed array creates a WebGLBuffer and copies the typed array
 * into it.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {ArrayBuffer|SharedArrayBuffer|ArrayBufferView|WebGLBuffer} typedArray the typed array. Note: If a WebGLBuffer is passed in it will just be returned. No action will be taken
 * @param {number} [type] the GL bind type for the buffer. Default = `gl.ARRAY_BUFFER`.
 * @param {number} [drawType] the GL draw type for the buffer. Default = 'gl.STATIC_DRAW`.
 * @return {WebGLBuffer} the created WebGLBuffer
 * @memberOf module:twgl/attributes
 */
function createBufferFromTypedArray(gl, typedArray, type, drawType) {
  if (typedArray instanceof WebGLBuffer) {
    return typedArray;
  }
  type = type || gl.ARRAY_BUFFER;
  var buffer = gl.createBuffer();
  setBufferFromTypedArray(gl, type, buffer, typedArray, drawType);
  return buffer;
}

function isIndices(name) {
  return name === "indices";
}

// This is really just a guess. Though I can't really imagine using
// anything else? Maybe for some compression?
function getNormalizationForTypedArray(typedArray) {
  if (typedArray instanceof Int8Array) {
    return true;
  } // eslint-disable-line
  if (typedArray instanceof Uint8Array) {
    return true;
  } // eslint-disable-line
  return false;
}

// This is really just a guess. Though I can't really imagine using
// anything else? Maybe for some compression?
function getNormalizationForTypedArrayType(typedArrayType) {
  if (typedArrayType === Int8Array) {
    return true;
  } // eslint-disable-line
  if (typedArrayType === Uint8Array) {
    return true;
  } // eslint-disable-line
  return false;
}

function getArray(array) {
  return array.length ? array : array.data;
}

var texcoordRE = /coord|texture/i;
var colorRE = /color|colour/i;

function guessNumComponentsFromName(name, length) {
  var numComponents = void 0;
  if (texcoordRE.test(name)) {
    numComponents = 2;
  } else if (colorRE.test(name)) {
    numComponents = 4;
  } else {
    numComponents = 3; // position, normals, indices ...
  }

  if (length % numComponents > 0) {
    throw "Can not guess numComponents for attribute '" + name + "'. Tried " + numComponents + " but " + length + " values is not evenly divisible by " + numComponents + ". You should specify it.";
  }

  return numComponents;
}

function getNumComponents(array, arrayName) {
  return array.numComponents || array.size || guessNumComponentsFromName(arrayName, getArray(array).length);
}

function makeTypedArray(array, name) {
  if (typedArrays.isArrayBuffer(array)) {
    return array;
  }

  if (typedArrays.isArrayBuffer(array.data)) {
    return array.data;
  }

  if (Array.isArray(array)) {
    array = {
      data: array
    };
  }

  var Type = array.type;
  if (!Type) {
    if (isIndices(name)) {
      Type = Uint16Array;
    } else {
      Type = Float32Array;
    }
  }
  return new Type(array.data);
}

/**
 * The info for an attribute. This is effectively just the arguments to `gl.vertexAttribPointer` plus the WebGLBuffer
 * for the attribute.
 *
 * @typedef {Object} AttribInfo
 * @property {number} [numComponents] the number of components for this attribute.
 * @property {number} [size] synonym for `numComponents`.
 * @property {number} [type] the type of the attribute (eg. `gl.FLOAT`, `gl.UNSIGNED_BYTE`, etc...) Default = `gl.FLOAT`
 * @property {boolean} [normalize] whether or not to normalize the data. Default = false
 * @property {number} [offset] offset into buffer in bytes. Default = 0
 * @property {number} [stride] the stride in bytes per element. Default = 0
 * @property {number} [divisor] the divisor in instances. Default = undefined. Note: undefined = don't call gl.vertexAttribDivisor
 *    where as anything else = do call it with this value
 * @property {WebGLBuffer} buffer the buffer that contains the data for this attribute
 * @property {number} [drawType] the draw type passed to gl.bufferData. Default = gl.STATIC_DRAW
 * @memberOf module:twgl
 */

/**
 * Use this type of array spec when TWGL can't guess the type or number of compoments of an array
 * @typedef {Object} FullArraySpec
 * @property {(number|number[]|ArrayBufferView)} data The data of the array. A number alone becomes the number of elements of type.
 * @property {number} [numComponents] number of components for `vertexAttribPointer`. Default is based on the name of the array.
 *    If `coord` is in the name assumes `numComponents = 2`.
 *    If `color` is in the name assumes `numComponents = 4`.
 *    otherwise assumes `numComponents = 3`
 * @property {constructor} type The type. This is only used if `data` is a JavaScript array. It is the constructor for the typedarray. (eg. `Uint8Array`).
 * For example if you want colors in a `Uint8Array` you might have a `FullArraySpec` like `{ type: Uint8Array, data: [255,0,255,255, ...], }`.
 * @property {number} [size] synonym for `numComponents`.
 * @property {boolean} [normalize] normalize for `vertexAttribPointer`. Default is true if type is `Int8Array` or `Uint8Array` otherwise false.
 * @property {number} [stride] stride for `vertexAttribPointer`. Default = 0
 * @property {number} [offset] offset for `vertexAttribPointer`. Default = 0
 * @property {number} [divisor] divisor for `vertexAttribDivisor`. Default = undefined. Note: undefined = don't call gl.vertexAttribDivisor
 *    where as anything else = do call it with this value
 * @property {string} [attrib] name of attribute this array maps to. Defaults to same name as array prefixed by the default attribPrefix.
 * @property {string} [name] synonym for `attrib`.
 * @property {string} [attribName] synonym for `attrib`.
 * @memberOf module:twgl
 */

/**
 * An individual array in {@link module:twgl.Arrays}
 *
 * When passed to {@link module:twgl.createBufferInfoFromArrays} if an ArraySpec is `number[]` or `ArrayBufferView`
 * the types will be guessed based on the name. `indices` will be `Uint16Array`, everything else will
 * be `Float32Array`. If an ArraySpec is a number it's the number of floats for an empty (zeroed) buffer.
 *
 * @typedef {(number|number[]|ArrayBufferView|module:twgl.FullArraySpec)} ArraySpec
 * @memberOf module:twgl
 */

/**
 * This is a JavaScript object of arrays by name. The names should match your shader's attributes. If your
 * attributes have a common prefix you can specify it by calling {@link module:twgl.setAttributePrefix}.
 *
 *     Bare JavaScript Arrays
 *
 *         var arrays = {
 *            position: [-1, 1, 0],
 *            normal: [0, 1, 0],
 *            ...
 *         }
 *
 *     Bare TypedArrays
 *
 *         var arrays = {
 *            position: new Float32Array([-1, 1, 0]),
 *            color: new Uint8Array([255, 128, 64, 255]),
 *            ...
 *         }
 *
 * *   Will guess at `numComponents` if not specified based on name.
 *
 *     If `coord` is in the name assumes `numComponents = 2`
 *
 *     If `color` is in the name assumes `numComponents = 4`
 *
 *     otherwise assumes `numComponents = 3`
 *
 * Objects with various fields. See {@link module:twgl.FullArraySpec}.
 *
 *     var arrays = {
 *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *       normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
 *       indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
 *     };
 *
 * @typedef {Object.<string, module:twgl.ArraySpec>} Arrays
 * @memberOf module:twgl
 */

/**
 * Creates a set of attribute data and WebGLBuffers from set of arrays
 *
 * Given
 *
 *      var arrays = {
 *        position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *        texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *        normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
 *        color:    { numComponents: 4, data: [255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255], type: Uint8Array, },
 *        indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
 *      };
 *
 * returns something like
 *
 *      var attribs = {
 *        position: { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
 *        texcoord: { numComponents: 2, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
 *        normal:   { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
 *        color:    { numComponents: 4, type: gl.UNSIGNED_BYTE, normalize: true,  buffer: WebGLBuffer, },
 *      };
 *
 * notes:
 *
 * *   Arrays can take various forms
 *
 *     Bare JavaScript Arrays
 *
 *         var arrays = {
 *            position: [-1, 1, 0],
 *            normal: [0, 1, 0],
 *            ...
 *         }
 *
 *     Bare TypedArrays
 *
 *         var arrays = {
 *            position: new Float32Array([-1, 1, 0]),
 *            color: new Uint8Array([255, 128, 64, 255]),
 *            ...
 *         }
 *
 * *   Will guess at `numComponents` if not specified based on name.
 *
 *     If `coord` is in the name assumes `numComponents = 2`
 *
 *     If `color` is in the name assumes `numComponents = 4`
 *
 *     otherwise assumes `numComponents = 3`
 *
 * @param {WebGLRenderingContext} gl The webgl rendering context.
 * @param {module:twgl.Arrays} arrays The arrays
 * @return {Object.<string, module:twgl.AttribInfo>} the attribs
 * @memberOf module:twgl/attributes
 */
function createAttribsFromArrays(gl, arrays) {
  var attribs = {};
  Object.keys(arrays).forEach(function (arrayName) {
    if (!isIndices(arrayName)) {
      var array = arrays[arrayName];
      var attribName = array.attrib || array.name || array.attribName || defaults.attribPrefix + arrayName;
      var buffer = void 0;
      var type = void 0;
      var normalization = void 0;
      var numComponents = void 0;
      var numValues = void 0;
      if (typeof array === "number" || typeof array.data === "number") {
        numValues = array.data || array;
        var arrayType = array.type || Float32Array;
        var numBytes = numValues * arrayType.BYTES_PER_ELEMENT;
        type = typedArrays.getGLTypeForTypedArrayType(arrayType);
        normalization = array.normalize !== undefined ? array.normalize : getNormalizationForTypedArrayType(arrayType);
        numComponents = array.numComponents || array.size || guessNumComponentsFromName(arrayName, numValues);
        buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, numBytes, array.drawType || gl.STATIC_DRAW);
      } else {
        var typedArray = makeTypedArray(array, arrayName);
        buffer = createBufferFromTypedArray(gl, typedArray, undefined, array.drawType);
        type = typedArrays.getGLTypeForTypedArray(typedArray);
        normalization = array.normalize !== undefined ? array.normalize : getNormalizationForTypedArray(typedArray);
        numComponents = getNumComponents(array, arrayName);
        numValues = typedArray.length;
      }
      attribs[attribName] = {
        buffer: buffer,
        numComponents: numComponents,
        type: type,
        normalize: normalization,
        stride: array.stride || 0,
        offset: array.offset || 0,
        divisor: array.divisor === undefined ? undefined : array.divisor,
        drawType: array.drawType
      };
    }
  });
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  return attribs;
}

/**
 * Sets the contents of a buffer attached to an attribInfo
 *
 * This is helper function to dynamically update a buffer.
 *
 * Let's say you make a bufferInfo
 *
 *     var arrays = {
 *        position: new Float32Array([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]),
 *        texcoord: new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
 *        normal:   new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
 *        indices:  new Uint16Array([0, 1, 2, 1, 2, 3]),
 *     };
 *     var bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
 *
 *  And you want to dynamically upate the positions. You could do this
 *
 *     // assuming arrays.position has already been updated with new data.
 *     twgl.setAttribInfoBufferFromArray(gl, bufferInfo.attribs.position, arrays.position);
 *
 * @param {WebGLRenderingContext} gl
 * @param {AttribInfo} attribInfo The attribInfo who's buffer contents to set. NOTE: If you have an attribute prefix
 *   the name of the attribute will include the prefix.
 * @param {ArraySpec} array Note: it is arguably ineffient to pass in anything but a typed array because anything
 *    else will have to be converted to a typed array before it can be used by WebGL. During init time that
 *    inefficiency is usually not important but if you're updating data dynamically best to be efficient.
 * @param {number} [offset] an optional offset into the buffer. This is only an offset into the WebGL buffer
 *    not the array. To pass in an offset into the array itself use a typed array and create an `ArrayBufferView`
 *    for the portion of the array you want to use.
 *
 *        var someArray = new Float32Array(1000); // an array with 1000 floats
 *        var someSubArray = new Float32Array(someArray.buffer, offsetInBytes, sizeInUnits); // a view into someArray
 *
 *    Now you can pass `someSubArray` into setAttribInfoBufferFromArray`
 * @memberOf module:twgl/attributes
 */
function setAttribInfoBufferFromArray(gl, attribInfo, array, offset) {
  array = makeTypedArray(array);
  if (offset !== undefined) {
    gl.bindBuffer(gl.ARRAY_BUFFER, attribInfo.buffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, offset, array);
  } else {
    setBufferFromTypedArray(gl, gl.ARRAY_BUFFER, attribInfo.buffer, array, attribInfo.drawType);
  }
}

function getBytesPerValueForGLType(gl, type) {
  if (type === gl.BYTE) return 1; // eslint-disable-line
  if (type === gl.UNSIGNED_BYTE) return 1; // eslint-disable-line
  if (type === gl.SHORT) return 2; // eslint-disable-line
  if (type === gl.UNSIGNED_SHORT) return 2; // eslint-disable-line
  if (type === gl.INT) return 4; // eslint-disable-line
  if (type === gl.UNSIGNED_INT) return 4; // eslint-disable-line
  if (type === gl.FLOAT) return 4; // eslint-disable-line
  return 0;
}

/**
 * tries to get the number of elements from a set of arrays.
 */
var positionKeys = ['position', 'positions', 'a_position'];
function getNumElementsFromNonIndexedArrays(arrays) {
  var key = void 0;
  for (var _ii = 0; _ii < positionKeys.length; ++_ii) {
    key = positionKeys[_ii];
    if (key in arrays) {
      break;
    }
  }
  if (ii === positionKeys.length) {
    key = Object.keys(arrays)[0];
  }
  var array = arrays[key];
  var length = getArray(array).length;
  var numComponents = getNumComponents(array, key);
  var numElements = length / numComponents;
  if (length % numComponents > 0) {
    throw "numComponents " + numComponents + " not correct for length " + length;
  }
  return numElements;
}

function getNumElementsFromAttributes(gl, attribs) {
  var key = void 0;
  var ii = void 0;
  for (ii = 0; ii < positionKeys.length; ++ii) {
    key = positionKeys[ii];
    if (key in attribs) {
      break;
    }
    key = defaults.attribPrefix + key;
    if (key in attribs) {
      break;
    }
  }
  if (ii === positionKeys.length) {
    key = Object.keys(attribs)[0];
  }
  var attrib = attribs[key];
  gl.bindBuffer(gl.ARRAY_BUFFER, attrib.buffer);
  var numBytes = gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  var bytesPerValue = getBytesPerValueForGLType(gl, attrib.type);
  var totalElements = numBytes / bytesPerValue;
  var numComponents = attrib.numComponents || attrib.size;
  // TODO: check stride
  var numElements = totalElements / numComponents;
  if (numElements % 1 !== 0) {
    throw "numComponents " + numComponents + " not correct for length " + length;
  }
  return numElements;
}

/**
 * @typedef {Object} BufferInfo
 * @property {number} numElements The number of elements to pass to `gl.drawArrays` or `gl.drawElements`.
 * @property {number} [elementType] The type of indices `UNSIGNED_BYTE`, `UNSIGNED_SHORT` etc..
 * @property {WebGLBuffer} [indices] The indices `ELEMENT_ARRAY_BUFFER` if any indices exist.
 * @property {Object.<string, module:twgl.AttribInfo>} [attribs] The attribs approriate to call `setAttributes`
 * @memberOf module:twgl
 */

/**
 * Creates a BufferInfo from an object of arrays.
 *
 * This can be passed to {@link module:twgl.setBuffersAndAttributes} and to
 * {@link module:twgl:drawBufferInfo}.
 *
 * Given an object like
 *
 *     var arrays = {
 *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *       normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
 *       indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
 *     };
 *
 *  Creates an BufferInfo like this
 *
 *     bufferInfo = {
 *       numElements: 4,        // or whatever the number of elements is
 *       indices: WebGLBuffer,  // this property will not exist if there are no indices
 *       attribs: {
 *         a_position: { buffer: WebGLBuffer, numComponents: 3, },
 *         a_normal:   { buffer: WebGLBuffer, numComponents: 3, },
 *         a_texcoord: { buffer: WebGLBuffer, numComponents: 2, },
 *       },
 *     };
 *
 *  The properties of arrays can be JavaScript arrays in which case the number of components
 *  will be guessed.
 *
 *     var arrays = {
 *        position: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0],
 *        texcoord: [0, 0, 0, 1, 1, 0, 1, 1],
 *        normal:   [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
 *        indices:  [0, 1, 2, 1, 2, 3],
 *     };
 *
 *  They can also by TypedArrays
 *
 *     var arrays = {
 *        position: new Float32Array([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]),
 *        texcoord: new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
 *        normal:   new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
 *        indices:  new Uint16Array([0, 1, 2, 1, 2, 3]),
 *     };
 *
 *  Or augmentedTypedArrays
 *
 *     var positions = createAugmentedTypedArray(3, 4);
 *     var texcoords = createAugmentedTypedArray(2, 4);
 *     var normals   = createAugmentedTypedArray(3, 4);
 *     var indices   = createAugmentedTypedArray(3, 2, Uint16Array);
 *
 *     positions.push([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]);
 *     texcoords.push([0, 0, 0, 1, 1, 0, 1, 1]);
 *     normals.push([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
 *     indices.push([0, 1, 2, 1, 2, 3]);
 *
 *     var arrays = {
 *        position: positions,
 *        texcoord: texcoords,
 *        normal:   normals,
 *        indices:  indices,
 *     };
 *
 * For the last example it is equivalent to
 *
 *     var bufferInfo = {
 *       attribs: {
 *         a_position: { numComponents: 3, buffer: gl.createBuffer(), },
 *         a_texcoods: { numComponents: 2, buffer: gl.createBuffer(), },
 *         a_normals: { numComponents: 3, buffer: gl.createBuffer(), },
 *       },
 *       indices: gl.createBuffer(),
 *       numElements: 6,
 *     };
 *
 *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_position.buffer);
 *     gl.bufferData(gl.ARRAY_BUFFER, arrays.position, gl.STATIC_DRAW);
 *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_texcoord.buffer);
 *     gl.bufferData(gl.ARRAY_BUFFER, arrays.texcoord, gl.STATIC_DRAW);
 *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_normal.buffer);
 *     gl.bufferData(gl.ARRAY_BUFFER, arrays.normal, gl.STATIC_DRAW);
 *     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferInfo.indices);
 *     gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, arrays.indices, gl.STATIC_DRAW);
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {module:twgl.Arrays} arrays Your data
 * @return {module:twgl.BufferInfo} A BufferInfo
 * @memberOf module:twgl/attributes
 */
function createBufferInfoFromArrays(gl, arrays) {
  var bufferInfo = {
    attribs: createAttribsFromArrays(gl, arrays)
  };
  var indices = arrays.indices;
  if (indices) {
    var newIndices = makeTypedArray(indices, "indices");
    bufferInfo.indices = createBufferFromTypedArray(gl, newIndices, gl.ELEMENT_ARRAY_BUFFER);
    bufferInfo.numElements = newIndices.length;
    bufferInfo.elementType = typedArrays.getGLTypeForTypedArray(newIndices);
  } else {
    bufferInfo.numElements = getNumElementsFromAttributes(gl, bufferInfo.attribs);
  }

  return bufferInfo;
}

/**
 * Creates a buffer from an array, typed array, or array spec
 *
 * Given something like this
 *
 *     [1, 2, 3],
 *
 * or
 *
 *     new Uint16Array([1,2,3]);
 *
 * or
 *
 *     {
 *        data: [1, 2, 3],
 *        type: Uint8Array,
 *     }
 *
 * returns a WebGLBuffer that constains the given data.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
 * @param {module:twgl.ArraySpec} array an array, typed array, or array spec.
 * @param {string} arrayName name of array. Used to guess the type if type can not be dervied other wise.
 * @return {WebGLBuffer} a WebGLBuffer containing the data in array.
 * @memberOf module:twgl/attributes
 */
function createBufferFromArray(gl, array, arrayName) {
  var type = arrayName === "indices" ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;
  var typedArray = makeTypedArray(array, arrayName);
  return createBufferFromTypedArray(gl, typedArray, type);
}

/**
 * Creates buffers from arrays or typed arrays
 *
 * Given something like this
 *
 *     var arrays = {
 *        positions: [1, 2, 3],
 *        normals: [0, 0, 1],
 *     }
 *
 * returns something like
 *
 *     buffers = {
 *       positions: WebGLBuffer,
 *       normals: WebGLBuffer,
 *     }
 *
 * If the buffer is named 'indices' it will be made an ELEMENT_ARRAY_BUFFER.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
 * @param {module:twgl.Arrays} arrays
 * @return {Object<string, WebGLBuffer>} returns an object with one WebGLBuffer per array
 * @memberOf module:twgl/attributes
 */
function createBuffersFromArrays(gl, arrays) {
  var buffers = {};
  Object.keys(arrays).forEach(function (key) {
    buffers[key] = createBufferFromArray(gl, arrays[key], key);
  });

  // Ugh!
  if (arrays.indices) {
    buffers.numElements = arrays.indices.length;
    buffers.elementType = typedArrays.getGLTypeForTypedArray(makeTypedArray(arrays.indices), 'indices');
  } else {
    buffers.numElements = getNumElementsFromNonIndexedArrays(arrays);
  }

  return buffers;
}

exports.createAttribsFromArrays = createAttribsFromArrays;
exports.createBuffersFromArrays = createBuffersFromArrays;
exports.createBufferFromArray = createBufferFromArray;
exports.createBufferFromTypedArray = createBufferFromTypedArray;
exports.createBufferInfoFromArrays = createBufferInfoFromArrays;
exports.setAttribInfoBufferFromArray = setAttribInfoBufferFromArray;
exports.setAttributePrefix = setAttributePrefix;
exports.setAttributeDefaults_ = setDefaults;
exports.getNumComponents_ = getNumComponents;
exports.getArray_ = getArray;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBytesPerElementForInternalFormat = exports.getNumComponentsForFormat = exports.resizeTexture = exports.createTextures = exports.setDefaultTextureColor = exports.setTextureParameters = exports.setTextureFilteringForSize = exports.setTextureFromElement = exports.loadTextureFromUrl = exports.setTextureFromArray = exports.setEmptyTexture = exports.createTexture = exports.setSamplerParameters = exports.createSamplers = exports.createSampler = exports.setTextureDefaults_ = undefined;

var _utils = __webpack_require__(3);

var utils = _interopRequireWildcard(_utils);

var _typedarrays = __webpack_require__(1);

var typedArrays = _interopRequireWildcard(_typedarrays);

var _helper = __webpack_require__(0);

var helper = _interopRequireWildcard(_helper);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Low level texture related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibily they are available at both `twgl.textures` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/textures
 */

// make sure we don't see a global gl
var gl = undefined; // eslint-disable-line
/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var defaults = {
  textureColor: new Uint8Array([128, 192, 255, 255]),
  textureOptions: {},
  crossOrigin: undefined
};
var isArrayBuffer = typedArrays.isArrayBuffer;

// Should we make this on demand?
var ctx = document.createElement("canvas").getContext("2d");

/* PixelFormat */
var ALPHA = 0x1906;
var RGB = 0x1907;
var RGBA = 0x1908;
var LUMINANCE = 0x1909;
var LUMINANCE_ALPHA = 0x190A;
var DEPTH_COMPONENT = 0x1902;
var DEPTH_STENCIL = 0x84F9;

/* TextureWrapMode */
var REPEAT = 0x2901; // eslint-disable-line
var MIRRORED_REPEAT = 0x8370; // eslint-disable-line

/* TextureMagFilter */
var NEAREST = 0x2600; // eslint-disable-line

/* TextureMinFilter */
var NEAREST_MIPMAP_NEAREST = 0x2700; // eslint-disable-line
var LINEAR_MIPMAP_NEAREST = 0x2701; // eslint-disable-line
var NEAREST_MIPMAP_LINEAR = 0x2702; // eslint-disable-line
var LINEAR_MIPMAP_LINEAR = 0x2703; // eslint-disable-line

var R8 = 0x8229;
var R8_SNORM = 0x8F94;
var R16F = 0x822D;
var R32F = 0x822E;
var R8UI = 0x8232;
var R8I = 0x8231;
var RG16UI = 0x823A;
var RG16I = 0x8239;
var RG32UI = 0x823C;
var RG32I = 0x823B;
var RG8 = 0x822B;
var RG8_SNORM = 0x8F95;
var RG16F = 0x822F;
var RG32F = 0x8230;
var RG8UI = 0x8238;
var RG8I = 0x8237;
var R16UI = 0x8234;
var R16I = 0x8233;
var R32UI = 0x8236;
var R32I = 0x8235;
var RGB8 = 0x8051;
var SRGB8 = 0x8C41;
var RGB565 = 0x8D62;
var RGB8_SNORM = 0x8F96;
var R11F_G11F_B10F = 0x8C3A;
var RGB9_E5 = 0x8C3D;
var RGB16F = 0x881B;
var RGB32F = 0x8815;
var RGB8UI = 0x8D7D;
var RGB8I = 0x8D8F;
var RGB16UI = 0x8D77;
var RGB16I = 0x8D89;
var RGB32UI = 0x8D71;
var RGB32I = 0x8D83;
var RGBA8 = 0x8058;
var SRGB8_ALPHA8 = 0x8C43;
var RGBA8_SNORM = 0x8F97;
var RGB5_A1 = 0x8057;
var RGBA4 = 0x8056;
var RGB10_A2 = 0x8059;
var RGBA16F = 0x881A;
var RGBA32F = 0x8814;
var RGBA8UI = 0x8D7C;
var RGBA8I = 0x8D8E;
var RGB10_A2UI = 0x906F;
var RGBA16UI = 0x8D76;
var RGBA16I = 0x8D88;
var RGBA32I = 0x8D82;
var RGBA32UI = 0x8D70;

var DEPTH_COMPONENT16 = 0x81A5;
var DEPTH_COMPONENT24 = 0x81A6;
var DEPTH_COMPONENT32F = 0x8CAC;
var DEPTH32F_STENCIL8 = 0x8CAD;
var DEPTH24_STENCIL8 = 0x88F0;

/* DataType */
var BYTE = 0x1400;
var UNSIGNED_BYTE = 0x1401;
var SHORT = 0x1402;
var UNSIGNED_SHORT = 0x1403;
var INT = 0x1404;
var UNSIGNED_INT = 0x1405;
var FLOAT = 0x1406;
var UNSIGNED_SHORT_4_4_4_4 = 0x8033;
var UNSIGNED_SHORT_5_5_5_1 = 0x8034;
var UNSIGNED_SHORT_5_6_5 = 0x8363;
var HALF_FLOAT = 0x140B;
var HALF_FLOAT_OES = 0x8D61; // Thanks Khronos for making this different >:(
var UNSIGNED_INT_2_10_10_10_REV = 0x8368;
var UNSIGNED_INT_10F_11F_11F_REV = 0x8C3B;
var UNSIGNED_INT_5_9_9_9_REV = 0x8C3E;
var FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8DAD;
var UNSIGNED_INT_24_8 = 0x84FA;

var RG = 0x8227;
var RG_INTEGER = 0x8228;
var RED = 0x1903;
var RED_INTEGER = 0x8D94;
var RGB_INTEGER = 0x8D98;
var RGBA_INTEGER = 0x8D99;

var formatInfo = {};
{
  // NOTE: this is named `numColorComponents` vs `numComponents` so we can let Uglify mangle
  // the name.
  var f = formatInfo;
  f[ALPHA] = { numColorComponents: 1 };
  f[LUMINANCE] = { numColorComponents: 1 };
  f[LUMINANCE_ALPHA] = { numColorComponents: 2 };
  f[RGB] = { numColorComponents: 3 };
  f[RGBA] = { numColorComponents: 4 };
  f[RED] = { numColorComponents: 1 };
  f[RED_INTEGER] = { numColorComponents: 1 };
  f[RG] = { numColorComponents: 2 };
  f[RG_INTEGER] = { numColorComponents: 2 };
  f[RGB] = { numColorComponents: 3 };
  f[RGB_INTEGER] = { numColorComponents: 3 };
  f[RGBA] = { numColorComponents: 4 };
  f[RGBA_INTEGER] = { numColorComponents: 4 };
  f[DEPTH_COMPONENT] = { numColorComponents: 1 };
  f[DEPTH_STENCIL] = { numColorComponents: 2 };
}

var textureInternalFormatInfo = {};
{
  // NOTE: these properties need unique names so we can let Uglify mangle the name.
  var t = textureInternalFormatInfo;
  // unsized formats
  t[ALPHA] = { textureFormat: ALPHA, colorRenderable: true, textureFilterable: true, bytesPerElement: [1, 2, 2, 4], type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT] };
  t[LUMINANCE] = { textureFormat: LUMINANCE, colorRenderable: true, textureFilterable: true, bytesPerElement: [1, 2, 2, 4], type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT] };
  t[LUMINANCE_ALPHA] = { textureFormat: LUMINANCE_ALPHA, colorRenderable: true, textureFilterable: true, bytesPerElement: [2, 4, 4, 8], type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT] };
  t[RGB] = { textureFormat: RGB, colorRenderable: true, textureFilterable: true, bytesPerElement: [3, 6, 6, 12, 2], type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT, UNSIGNED_SHORT_5_6_5] };
  t[RGBA] = { textureFormat: RGBA, colorRenderable: true, textureFilterable: true, bytesPerElement: [4, 8, 8, 16, 2, 2], type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT, UNSIGNED_SHORT_4_4_4_4, UNSIGNED_SHORT_5_5_5_1] };

  // sized formats
  t[R8] = { textureFormat: RED, colorRenderable: true, textureFilterable: true, bytesPerElement: 1, type: UNSIGNED_BYTE };
  t[R8_SNORM] = { textureFormat: RED, colorRenderable: false, textureFilterable: true, bytesPerElement: 1, type: BYTE };
  t[R16F] = { textureFormat: RED, colorRenderable: false, textureFilterable: true, bytesPerElement: [4, 2], type: [FLOAT, HALF_FLOAT] };
  t[R32F] = { textureFormat: RED, colorRenderable: false, textureFilterable: false, bytesPerElement: 4, type: FLOAT };
  t[R8UI] = { textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 1, type: UNSIGNED_BYTE };
  t[R8I] = { textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 1, type: BYTE };
  t[R16UI] = { textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 2, type: UNSIGNED_SHORT };
  t[R16I] = { textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 2, type: SHORT };
  t[R32UI] = { textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: UNSIGNED_INT };
  t[R32I] = { textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: INT };
  t[RG8] = { textureFormat: RG, colorRenderable: true, textureFilterable: true, bytesPerElement: 2, type: UNSIGNED_BYTE };
  t[RG8_SNORM] = { textureFormat: RG, colorRenderable: false, textureFilterable: true, bytesPerElement: 2, type: BYTE };
  t[RG16F] = { textureFormat: RG, colorRenderable: false, textureFilterable: true, bytesPerElement: [8, 4], type: [FLOAT, HALF_FLOAT] };
  t[RG32F] = { textureFormat: RG, colorRenderable: false, textureFilterable: false, bytesPerElement: 8, type: FLOAT };
  t[RG8UI] = { textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 2, type: UNSIGNED_BYTE };
  t[RG8I] = { textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 2, type: BYTE };
  t[RG16UI] = { textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: UNSIGNED_SHORT };
  t[RG16I] = { textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: SHORT };
  t[RG32UI] = { textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 8, type: UNSIGNED_INT };
  t[RG32I] = { textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 8, type: INT };
  t[RGB8] = { textureFormat: RGB, colorRenderable: true, textureFilterable: true, bytesPerElement: 3, type: UNSIGNED_BYTE };
  t[SRGB8] = { textureFormat: RGB, colorRenderable: false, textureFilterable: true, bytesPerElement: 3, type: UNSIGNED_BYTE };
  t[RGB565] = { textureFormat: RGB, colorRenderable: true, textureFilterable: true, bytesPerElement: [3, 2], type: [UNSIGNED_BYTE, UNSIGNED_SHORT_5_6_5] };
  t[RGB8_SNORM] = { textureFormat: RGB, colorRenderable: false, textureFilterable: true, bytesPerElement: 3, type: BYTE };
  t[R11F_G11F_B10F] = { textureFormat: RGB, colorRenderable: false, textureFilterable: true, bytesPerElement: [12, 6, 4], type: [FLOAT, HALF_FLOAT, UNSIGNED_INT_10F_11F_11F_REV] };
  t[RGB9_E5] = { textureFormat: RGB, colorRenderable: false, textureFilterable: true, bytesPerElement: [12, 6, 4], type: [FLOAT, HALF_FLOAT, UNSIGNED_INT_5_9_9_9_REV] };
  t[RGB16F] = { textureFormat: RGB, colorRenderable: false, textureFilterable: true, bytesPerElement: [12, 6], type: [FLOAT, HALF_FLOAT] };
  t[RGB32F] = { textureFormat: RGB, colorRenderable: false, textureFilterable: false, bytesPerElement: 12, type: FLOAT };
  t[RGB8UI] = { textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: 3, type: UNSIGNED_BYTE };
  t[RGB8I] = { textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: 3, type: BYTE };
  t[RGB16UI] = { textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: 6, type: UNSIGNED_SHORT };
  t[RGB16I] = { textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: 6, type: SHORT };
  t[RGB32UI] = { textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: 12, type: UNSIGNED_INT };
  t[RGB32I] = { textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: 12, type: INT };
  t[RGBA8] = { textureFormat: RGBA, colorRenderable: true, textureFilterable: true, bytesPerElement: 4, type: UNSIGNED_BYTE };
  t[SRGB8_ALPHA8] = { textureFormat: RGBA, colorRenderable: true, textureFilterable: true, bytesPerElement: 4, type: UNSIGNED_BYTE };
  t[RGBA8_SNORM] = { textureFormat: RGBA, colorRenderable: false, textureFilterable: true, bytesPerElement: 4, type: BYTE };
  t[RGB5_A1] = { textureFormat: RGBA, colorRenderable: true, textureFilterable: true, bytesPerElement: [4, 2, 4], type: [UNSIGNED_BYTE, UNSIGNED_SHORT_5_5_5_1, UNSIGNED_INT_2_10_10_10_REV] };
  t[RGBA4] = { textureFormat: RGBA, colorRenderable: true, textureFilterable: true, bytesPerElement: [4, 2], type: [UNSIGNED_BYTE, UNSIGNED_SHORT_4_4_4_4] };
  t[RGB10_A2] = { textureFormat: RGBA, colorRenderable: true, textureFilterable: true, bytesPerElement: 4, type: UNSIGNED_INT_2_10_10_10_REV };
  t[RGBA16F] = { textureFormat: RGBA, colorRenderable: false, textureFilterable: true, bytesPerElement: [16, 8], type: [FLOAT, HALF_FLOAT] };
  t[RGBA32F] = { textureFormat: RGBA, colorRenderable: false, textureFilterable: false, bytesPerElement: 16, type: FLOAT };
  t[RGBA8UI] = { textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: UNSIGNED_BYTE };
  t[RGBA8I] = { textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: BYTE };
  t[RGB10_A2UI] = { textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: UNSIGNED_INT_2_10_10_10_REV };
  t[RGBA16UI] = { textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 8, type: UNSIGNED_SHORT };
  t[RGBA16I] = { textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 8, type: SHORT };
  t[RGBA32I] = { textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 16, type: INT };
  t[RGBA32UI] = { textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 16, type: UNSIGNED_INT };
  // Sized Internal
  t[DEPTH_COMPONENT16] = { textureFormat: DEPTH_COMPONENT, colorRenderable: true, textureFilterable: false, bytesPerElement: [2, 4], type: [UNSIGNED_SHORT, UNSIGNED_INT] };
  t[DEPTH_COMPONENT24] = { textureFormat: DEPTH_COMPONENT, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: UNSIGNED_INT };
  t[DEPTH_COMPONENT32F] = { textureFormat: DEPTH_COMPONENT, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: FLOAT };
  t[DEPTH24_STENCIL8] = { textureFormat: DEPTH_STENCIL, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: UNSIGNED_INT_24_8 };
  t[DEPTH32F_STENCIL8] = { textureFormat: DEPTH_STENCIL, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: FLOAT_32_UNSIGNED_INT_24_8_REV };

  Object.keys(t).forEach(function (internalFormat) {
    var info = t[internalFormat];
    info.bytesPerElementMap = {};
    if (Array.isArray(info.bytesPerElement)) {
      info.bytesPerElement.forEach(function (bytesPerElement, ndx) {
        var type = info.type[ndx];
        info.bytesPerElementMap[type] = bytesPerElement;
      });
    } else {
      var type = info.type;
      info.bytesPerElementMap[type] = info.bytesPerElement;
    }
  });
}

/**
 * Gets the number of bytes per element for a given internalFormat / type
 * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
 * @param {number} type The type parameter for texImage2D etc..
 * @return {number} the number of bytes per element for the given internalFormat, type combo
 * @memberOf module:twgl/textures
 */
function getBytesPerElementForInternalFormat(internalFormat, type) {
  var info = textureInternalFormatInfo[internalFormat];
  if (!info) {
    throw "unknown internal format";
  }
  var bytesPerElement = info.bytesPerElementMap[type];
  if (bytesPerElement === undefined) {
    throw "unknown internal format";
  }
  return bytesPerElement;
}

/**
 * Gets the format for a given internalFormat
 *
 * @param {number} internalFormat The internal format
 * @return {{format:number, type:number}} the corresponding format and type
 */
function getFormatAndTypeForInternalFormat(internalFormat) {
  var info = textureInternalFormatInfo[internalFormat];
  if (!info) {
    throw "unknown internal format";
  }
  return {
    format: info.textureFormat,
    type: Array.isArray(info.type) ? info.type[0] : info.type
  };
}

/**
 * Returns true if value is power of 2
 * @param {number} value number to check.
 * @return true if value is power of 2
 */
function isPowerOf2(value) {
  return (value & value - 1) === 0;
}

/**
 * Gets whether or not we can generate mips for the given format
 * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
 * @param {number} type The type parameter for texImage2D etc..
 * @return {boolean} true if we can generate mips
 */
function canGenerateMipmap(gl, width, height, internalFormat /*, type */) {
  if (!utils.isWebGL2(gl)) {
    return isPowerOf2(width) && isPowerOf2(height);
  }
  var info = textureInternalFormatInfo[internalFormat];
  if (!info) {
    throw "unknown internal format";
  }
  return info.colorRenderable && info.textureFilterable;
}

/**
 * Gets whether or not we can generate mips for the given format
 * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
 * @param {number} type The type parameter for texImage2D etc..
 * @return {boolean} true if we can generate mips
 */
function canFilter(internalFormat /*, type */) {
  var info = textureInternalFormatInfo[internalFormat];
  if (!info) {
    throw "unknown internal format";
  }
  return info.textureFilterable;
}

/**
 * Gets the number of compontents for a given image format.
 * @param {number} format the format.
 * @return {number} the number of components for the format.
 * @memberOf module:twgl/textures
 */
function getNumComponentsForFormat(format) {
  var info = formatInfo[format];
  if (!info) {
    throw "unknown format: " + format;
  }
  return info.numColorComponents;
}

/**
 * Gets the texture type for a given array type.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @return {number} the gl texture type
 */
function getTextureTypeForArrayType(gl, src, defaultType) {
  if (isArrayBuffer(src)) {
    return typedArrays.getGLTypeForTypedArray(src);
  }
  return defaultType || gl.UNSIGNED_BYTE;
}

function guessDimensions(gl, target, width, height, numElements) {
  if (numElements % 1 !== 0) {
    throw "can't guess dimensions";
  }
  if (!width && !height) {
    var size = Math.sqrt(numElements / (target === gl.TEXTURE_CUBE_MAP ? 6 : 1));
    if (size % 1 === 0) {
      width = size;
      height = size;
    } else {
      width = numElements;
      height = 1;
    }
  } else if (!height) {
    height = numElements / width;
    if (height % 1) {
      throw "can't guess dimensions";
    }
  } else if (!width) {
    width = numElements / height;
    if (width % 1) {
      throw "can't guess dimensions";
    }
  }
  return {
    width: width,
    height: height
  };
}

/**
 * Sets the default texture color.
 *
 * The default texture color is used when loading textures from
 * urls. Because the URL will be loaded async we'd like to be
 * able to use the texture immediately. By putting a 1x1 pixel
 * color in the texture we can start using the texture before
 * the URL has loaded.
 *
 * @param {number[]} color Array of 4 values in the range 0 to 1
 * @deprecated see {@link module:twgl.setDefaults}
 * @memberOf module:twgl/textures
 */
function setDefaultTextureColor(color) {
  defaults.textureColor = new Uint8Array([color[0] * 255, color[1] * 255, color[2] * 255, color[3] * 255]);
}

function setDefaults(newDefaults) {
  helper.copyExistingProperties(newDefaults, defaults);
  if (newDefaults.textureColor) {
    setDefaultTextureColor(newDefaults.textureColor);
  }
}

/**
 * A function to generate the source for a texture.
 * @callback TextureFunc
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {module:twgl.TextureOptions} options the texture options
 * @return {*} Returns any of the things documentented for `src` for {@link module:twgl.TextureOptions}.
 * @memberOf module:twgl
 */

/**
 * Texture options passed to most texture functions. Each function will use whatever options
 * are appropriate for its needs. This lets you pass the same options to all functions.
 *
 * @typedef {Object} TextureOptions
 * @property {number} [target] the type of texture `gl.TEXTURE_2D` or `gl.TEXTURE_CUBE_MAP`. Defaults to `gl.TEXTURE_2D`.
 * @property {number} [level] the mip level to affect. Defaults to 0. Note, if set auto will be considered false unless explicitly set to true.
 * @property {number} [width] the width of the texture. Only used if src is an array or typed array or null.
 * @property {number} [height] the height of a texture. Only used if src is an array or typed array or null.
 * @property {number} [depth] the depth of a texture. Only used if src is an array or type array or null and target is `TEXTURE_3D` .
 * @property {number} [min] the min filter setting (eg. `gl.LINEAR`). Defaults to `gl.NEAREST_MIPMAP_LINEAR`
 *     or if texture is not a power of 2 on both dimensions then defaults to `gl.LINEAR`.
 * @property {number} [mag] the mag filter setting (eg. `gl.LINEAR`). Defaults to `gl.LINEAR`
 * @property {number} [minMag] both the min and mag filter settings.
 * @property {number} [internalFormat] internal format for texture. Defaults to `gl.RGBA`
 * @property {number} [format] format for texture. Defaults to `gl.RGBA`.
 * @property {number} [type] type for texture. Defaults to `gl.UNSIGNED_BYTE` unless `src` is ArrayBufferView. If `src`
 *     is ArrayBufferView defaults to type that matches ArrayBufferView type.
 * @property {number} [wrap] Texture wrapping for both S and T (and R if TEXTURE_3D or WebGLSampler). Defaults to `gl.REPEAT` for 2D unless src is WebGL1 and src not npot and `gl.CLAMP_TO_EDGE` for cube
 * @property {number} [wrapS] Texture wrapping for S. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
 * @property {number} [wrapT] Texture wrapping for T. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
 * @property {number} [wrapR] Texture wrapping for R. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
 * @property {number} [minLod] TEXTURE_MIN_LOD setting
 * @property {number} [maxLod] TEXTURE_MAX_LOD setting
 * @property {number} [baseLevel] TEXTURE_BASE_LEVEL setting
 * @property {number} [maxLevel] TEXTURE_MAX_LEVEL setting
 * @property {number} [unpackAlignment] The `gl.UNPACK_ALIGNMENT` used when uploading an array. Defaults to 1.
 * @property {number} [premultiplyAlpha] Whether or not to premultiply alpha. Defaults to whatever the current setting is.
 *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
 *     the current setting for specific textures.
 * @property {number} [flipY] Whether or not to flip the texture vertically on upload. Defaults to whatever the current setting is.
 *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
 *     the current setting for specific textures.
 * @property {number} [colorspaceConversion] Whether or not to let the browser do colorspace conversion of the texture on upload. Defaults to whatever the current setting is.
 *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
 *     the current setting for specific textures.
 * @property {(number[]|ArrayBufferView)} color color used as temporary 1x1 pixel color for textures loaded async when src is a string.
 *    If it's a JavaScript array assumes color is 0 to 1 like most GL colors as in `[1, 0, 0, 1] = red=1, green=0, blue=0, alpha=0`.
 *    Defaults to `[0.5, 0.75, 1, 1]`. See {@link module:twgl.setDefaultTextureColor}. If `false` texture is set. Can be used to re-load a texture
 * @property {boolean} [auto] If `undefined` or `true`, in WebGL1, texture filtering is set automatically for non-power of 2 images and
 *    mips are generated for power of 2 images. In WebGL2 mips are generated if they can be. Note: if `level` is set above
 *    then then `auto` is assumed to be `false` unless explicity set to `true`.
 * @property {number[]} [cubeFaceOrder] The order that cube faces are pulled out of an img or set of images. The default is
 *
 *     [gl.TEXTURE_CUBE_MAP_POSITIVE_X,
 *      gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
 *      gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
 *      gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
 *      gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
 *      gl.TEXTURE_CUBE_MAP_NEGATIVE_Z]
 *
 * @property {(number[]|ArrayBufferView|HTMLCanvasElement|HTMLImageElement|HTMLVideoElement|string|string[]|module:twgl.TextureFunc)} [src] source for texture
 *
 *    If `string` then it's assumed to be a URL to an image. The image will be downloaded async. A usable
 *    1x1 pixel texture will be returned immediatley. The texture will be updated once the image has downloaded.
 *    If `target` is `gl.TEXTURE_CUBE_MAP` will attempt to divide image into 6 square pieces. 1x6, 6x1, 3x2, 2x3.
 *    The pieces will be uploaded in `cubeFaceOrder`
 *
 *    If `string[]` then it must have 6 entries, one for each face of a cube map. Target must be `gl.TEXTURE_CUBE_MAP`.
 *
 *    If `HTMLElement` then it wil be used immediately to create the contents of the texture. Examples `HTMLImageElement`,
 *    `HTMLCanvasElement`, `HTMLVideoElement`.
 *
 *    If `number[]` or `ArrayBufferView` it's assumed to be data for a texture. If `width` or `height` is
 *    not specified it is guessed as follows. First the number of elements is computed by `src.length / numComponents`
 *    where `numComponents` is derived from `format`. If `target` is `gl.TEXTURE_CUBE_MAP` then `numElements` is divided
 *    by 6. Then
 *
 *    *   If neither `width` nor `height` are specified and `sqrt(numElements)` is an integer then width and height
 *        are set to `sqrt(numElements)`. Otherwise `width = numElements` and `height = 1`.
 *
 *    *   If only one of `width` or `height` is specified then the other equals `numElements / specifiedDimension`.
 *
 * If `number[]` will be converted to `type`.
 *
 * If `src` is a function it will be called with a `WebGLRenderingContext` and these options.
 * Whatever it returns is subject to these rules. So it can return a string url, an `HTMLElement`
 * an array etc...
 *
 * If `src` is undefined then an empty texture will be created of size `width` by `height`.
 *
 * @property {string} [crossOrigin] What to set the crossOrigin property of images when they are downloaded.
 *    default: undefined. Also see {@link module:twgl.setDefaults}.
 *
 * @memberOf module:twgl
 */

// NOTE: While querying GL is considered slow it's not remotely as slow
// as uploading a texture. On top of that you're unlikely to call this in
// a perf critical loop. Even if upload a texture every frame that's unlikely
// to be more than 1 or 2 textures a frame. In other words, the benefits of
// making the API easy to use outweigh any supposed perf benefits
var lastPackState = {};

/**
 * Saves any packing state that will be set based on the options.
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 */
function savePackState(gl, options) {
  if (options.colorspaceConversion !== undefined) {
    lastPackState.colorspaceConversion = gl.getParameter(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL);
    gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, options.colorspaceConversion);
  }
  if (options.premultiplyAlpha !== undefined) {
    lastPackState.premultiplyAlpha = gl.getParameter(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, options.premultiplyAlpha);
  }
  if (options.flipY !== undefined) {
    lastPackState.flipY = gl.getParameter(gl.UNPACK_FLIP_Y_WEBGL);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, options.flipY);
  }
}

/**
 * Restores any packing state that was set based on the options.
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 */
function restorePackState(gl, options) {
  if (options.colorspaceConversion !== undefined) {
    gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, lastPackState.colorspaceConversion);
  }
  if (options.premultiplyAlpha !== undefined) {
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, lastPackState.premultiplyAlpha);
  }
  if (options.flipY !== undefined) {
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, lastPackState.flipY);
  }
}

var WebGLSamplerCtor = window.WebGLSampler || function NotWebGLSampler() {};

/**
 * Sets the parameters of a texture or sampler
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {number|WebGLSampler} target texture target or sampler
 * @param {function()} parameteriFn texParamteri or samplerParameteri fn
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 */
function setTextureSamplerParameters(gl, target, parameteriFn, options) {
  if (options.minMag) {
    parameteriFn.call(gl, target, gl.TEXTURE_MIN_FILTER, options.minMag);
    parameteriFn.call(gl, target, gl.TEXTURE_MAG_FILTER, options.minMag);
  }
  if (options.min) {
    parameteriFn.call(gl, target, gl.TEXTURE_MIN_FILTER, options.min);
  }
  if (options.mag) {
    parameteriFn.call(gl, target, gl.TEXTURE_MAG_FILTER, options.mag);
  }
  if (options.wrap) {
    parameteriFn.call(gl, target, gl.TEXTURE_WRAP_S, options.wrap);
    parameteriFn.call(gl, target, gl.TEXTURE_WRAP_T, options.wrap);
    if (target === gl.TEXTURE_3D || target instanceof WebGLSamplerCtor) {
      parameteriFn.call(gl, target, gl.TEXTURE_WRAP_R, options.wrap);
    }
  }
  if (options.wrapR) {
    parameteriFn.call(gl, target, gl.TEXTURE_WRAP_R, options.wrapR);
  }
  if (options.wrapS) {
    parameteriFn.call(gl, target, gl.TEXTURE_WRAP_S, options.wrapS);
  }
  if (options.wrapT) {
    parameteriFn.call(gl, target, gl.TEXTURE_WRAP_T, options.wrapT);
  }
  if (options.minLod) {
    parameteriFn.call(gl, target, gl.TEXTURE_MIN_LOD, options.minLod);
  }
  if (options.maxLod) {
    parameteriFn.call(gl, target, gl.TEXTURE_MAX_LOD, options.maxLod);
  }
  if (options.baseLevel) {
    parameteriFn.call(gl, target, gl.TEXTURE_BASE_LEVEL, options.baseLevel);
  }
  if (options.maxLevel) {
    parameteriFn.call(gl, target, gl.TEXTURE_MAX_LEVEL, options.maxLevel);
  }
}

/**
 * Sets the texture parameters of a texture.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 */
function setTextureParameters(gl, tex, options) {
  var target = options.target || gl.TEXTURE_2D;
  gl.bindTexture(target, tex);
  setTextureSamplerParameters(gl, target, gl.texParameteri, options);
}

/**
 * Sets the sampler parameters of a sampler.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLSampler} sampler the WebGLSampler to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @memberOf module:twgl/textures
 */
function setSamplerParameters(gl, sampler, options) {
  setTextureSamplerParameters(gl, sampler, gl.samplerParameteri, options);
}

/**
 * Creates a new sampler object and sets parameters.
 *
 * Example:
 *
 *      const sampler = twgl.createSampler(gl, {
 *        minMag: gl.NEAREST,         // sets both TEXTURE_MIN_FILTER and TEXTURE_MAG_FILTER
 *        wrap: gl.CLAMP_TO_NEAREST,  // sets both TEXTURE_WRAP_S and TEXTURE_WRAP_T and TEXTURE_WRAP_R
 *      });
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {Object.<string,module:twgl.TextureOptions>} options A object of TextureOptions one per sampler.
 * @return {Object.<string,WebGLSampler>} the created samplers by name
 */
function createSampler(gl, options) {
  var sampler = gl.createSampler();
  setSamplerParameters(gl, sampler, options);
  return sampler;
}

/**
 * Creates a multiple sampler objects and sets parameters on each.
 *
 * Example:
 *
 *      const samplers = twgl.createSamplers(gl, {
 *        nearest: {
 *          minMag: gl.NEAREST,
 *        },
 *        nearestClampS: {
 *          minMag: gl.NEAREST,
 *          wrapS: gl.CLAMP_TO_NEAREST,
 *        },
 *        linear: {
 *          minMag: gl.LINEAR,
 *        },
 *        nearestClamp: {
 *          minMag: gl.NEAREST,
 *          wrap: gl.CLAMP_TO_EDGE,
 *        },
 *        linearClamp: {
 *          minMag: gl.LINEAR,
 *          wrap: gl.CLAMP_TO_EDGE,
 *        },
 *        linearClampT: {
 *          minMag: gl.LINEAR,
 *          wrapT: gl.CLAMP_TO_EDGE,
 *        },
 *      });
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set on the sampler
 */
function createSamplers(gl, samplerOptions) {
  var samplers = {};
  Object.keys(samplerOptions).forEach(function (name) {
    samplers[name] = createSampler(gl, samplerOptions[name]);
  });
  return samplers;
}

/**
 * Makes a 1x1 pixel
 * If no color is passed in uses the default color which can be set by calling `setDefaultTextureColor`.
 * @param {(number[]|ArrayBufferView)} [color] The color using 0-1 values
 * @return {Uint8Array} Unit8Array with color.
 */
function make1Pixel(color) {
  color = color || defaults.textureColor;
  if (isArrayBuffer(color)) {
    return color;
  }
  return new Uint8Array([color[0] * 255, color[1] * 255, color[2] * 255, color[3] * 255]);
}

/**
 * Sets filtering or generates mips for texture based on width or height
 * If width or height is not passed in uses `options.width` and//or `options.height`
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @param {number} [width] width of texture
 * @param {number} [height] height of texture
 * @param {number} [internalFormat] The internalFormat parameter from texImage2D etc..
 * @param {number} [type] The type parameter for texImage2D etc..
 * @memberOf module:twgl/textures
 */
function setTextureFilteringForSize(gl, tex, options, width, height, internalFormat, type) {
  options = options || defaults.textureOptions;
  internalFormat = internalFormat || gl.RGBA;
  type = type || gl.UNSIGNED_BYTE;
  var target = options.target || gl.TEXTURE_2D;
  width = width || options.width;
  height = height || options.height;
  gl.bindTexture(target, tex);
  if (canGenerateMipmap(gl, width, height, internalFormat, type)) {
    gl.generateMipmap(target);
  } else {
    var filtering = canFilter(internalFormat, type) ? gl.LINEAR : gl.NEAREST;
    gl.texParameteri(target, gl.TEXTURE_MIN_FILTER, filtering);
    gl.texParameteri(target, gl.TEXTURE_MAG_FILTER, filtering);
    gl.texParameteri(target, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(target, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  }
}

function shouldAutomaticallySetTextureFilteringForSize(options) {
  return options.auto === true || options.auto === undefined && options.level === undefined;
}

/**
 * Gets an array of cubemap face enums
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @return {number[]} cubemap face enums
 */
function getCubeFaceOrder(gl, options) {
  options = options || {};
  return options.cubeFaceOrder || [gl.TEXTURE_CUBE_MAP_POSITIVE_X, gl.TEXTURE_CUBE_MAP_NEGATIVE_X, gl.TEXTURE_CUBE_MAP_POSITIVE_Y, gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, gl.TEXTURE_CUBE_MAP_POSITIVE_Z, gl.TEXTURE_CUBE_MAP_NEGATIVE_Z];
}

/**
 * @typedef {Object} FaceInfo
 * @property {number} face gl enum for texImage2D
 * @property {number} ndx face index (0 - 5) into source data
 * @ignore
 */

/**
 * Gets an array of FaceInfos
 * There's a bug in some NVidia drivers that will crash the driver if
 * `gl.TEXTURE_CUBE_MAP_POSITIVE_X` is not uploaded first. So, we take
 * the user's desired order from his faces to WebGL and make sure we
 * do the faces in WebGL order
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @return {FaceInfo[]} cubemap face infos. Arguably the `face` property of each element is redundent but
 *    it's needed internally to sort the array of `ndx` properties by `face`.
 */
function getCubeFacesWithNdx(gl, options) {
  var faces = getCubeFaceOrder(gl, options);
  // work around bug in NVidia drivers. We have to upload the first face first else the driver crashes :(
  var facesWithNdx = faces.map(function (face, ndx) {
    return { face: face, ndx: ndx };
  });
  facesWithNdx.sort(function (a, b) {
    return a.face - b.face;
  });
  return facesWithNdx;
}

/**
 * Set a texture from the contents of an element. Will also set
 * texture filtering or generate mips based on the dimensions of the element
 * unless `options.auto === false`. If `target === gl.TEXTURE_CUBE_MAP` will
 * attempt to slice image into 1x6, 2x3, 3x2, or 6x1 images, one for each face.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {HTMLElement} element a canvas, img, or video element.
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 * @kind function
 */
function setTextureFromElement(gl, tex, element, options) {
  options = options || defaults.textureOptions;
  var target = options.target || gl.TEXTURE_2D;
  var level = options.level || 0;
  var width = element.width;
  var height = element.height;
  var internalFormat = options.internalFormat || options.format || gl.RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || formatType.type;
  savePackState(gl, options);
  gl.bindTexture(target, tex);
  if (target === gl.TEXTURE_CUBE_MAP) {
    // guess the parts
    var imgWidth = element.width;
    var imgHeight = element.height;
    var size = void 0;
    var slices = void 0;
    if (imgWidth / 6 === imgHeight) {
      // It's 6x1
      size = imgHeight;
      slices = [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0];
    } else if (imgHeight / 6 === imgWidth) {
      // It's 1x6
      size = imgWidth;
      slices = [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5];
    } else if (imgWidth / 3 === imgHeight / 2) {
      // It's 3x2
      size = imgWidth / 3;
      slices = [0, 0, 1, 0, 2, 0, 0, 1, 1, 1, 2, 1];
    } else if (imgWidth / 2 === imgHeight / 3) {
      // It's 2x3
      size = imgWidth / 2;
      slices = [0, 0, 1, 0, 0, 1, 1, 1, 0, 2, 1, 2];
    } else {
      throw "can't figure out cube map from element: " + (element.src ? element.src : element.nodeName);
    }
    ctx.canvas.width = size;
    ctx.canvas.height = size;
    width = size;
    height = size;
    getCubeFacesWithNdx(gl, options).forEach(function (f) {
      var xOffset = slices[f.ndx * 2 + 0] * size;
      var yOffset = slices[f.ndx * 2 + 1] * size;
      ctx.drawImage(element, xOffset, yOffset, size, size, 0, 0, size, size);
      gl.texImage2D(f.face, level, internalFormat, format, type, ctx.canvas);
    });
    // Free up the canvas memory
    ctx.canvas.width = 1;
    ctx.canvas.height = 1;
  } else if (target === gl.TEXTURE_3D) {
    var smallest = Math.min(element.width, element.height);
    var largest = Math.max(element.width, element.height);
    var depth = largest / smallest;
    if (depth % 1 !== 0) {
      throw "can not compute 3D dimensions of element";
    }
    var xMult = element.width === largest ? 1 : 0;
    var yMult = element.height === largest ? 1 : 0;
    gl.texImage3D(target, level, internalFormat, smallest, smallest, smallest, 0, format, type, null);
    // remove this is texSubImage3D gets width and height arguments
    ctx.canvas.width = smallest;
    ctx.canvas.height = smallest;
    for (var d = 0; d < depth; ++d) {
      //gl.pixelStorei(gl.UNPACK_SKIP_PIXELS, d * smallest);
      //gl.texSubImage3D(target, 0, 0, 0, d, format, type, element);
      var srcX = d * smallest * xMult;
      var srcY = d * smallest * yMult;
      var srcW = smallest;
      var srcH = smallest;
      var dstX = 0;
      var dstY = 0;
      var dstW = smallest;
      var dstH = smallest;
      ctx.drawImage(element, srcX, srcY, srcW, srcH, dstX, dstY, dstW, dstH);
      gl.texSubImage3D(target, level, 0, 0, d, smallest, smallest, 1, format, type, ctx.canvas);
    }
    ctx.canvas.width = 0;
    ctx.canvas.height = 0;
    //FIX (save state)
    gl.pixelStorei(gl.UNPACK_SKIP_PIXELS, 0);
  } else {
    gl.texImage2D(target, level, internalFormat, format, type, element);
  }
  restorePackState(gl, options);
  if (shouldAutomaticallySetTextureFilteringForSize(options)) {
    setTextureFilteringForSize(gl, tex, options, width, height, internalFormat, type);
  }
  setTextureParameters(gl, tex, options);
}

function noop() {}

/**
 * Loads an image
 * @param {string} url url to image
 * @param {function(err, img)} [callback] a callback that's passed an error and the image. The error will be non-null
 *     if there was an error
 * @return {HTMLImageElement} the image being loaded.
 */
function loadImage(url, crossOrigin, callback) {
  callback = callback || noop;
  var img = new Image();
  crossOrigin = crossOrigin !== undefined ? crossOrigin : defaults.crossOrigin;
  if (crossOrigin !== undefined) {
    img.crossOrigin = crossOrigin;
  }

  function clearEventHandlers() {
    img.removeEventListener('error', onError); // eslint-disable-line
    img.removeEventListener('load', onLoad); // eslint-disable-line
    img = null;
  }

  function onError() {
    var msg = "couldn't load image: " + url;
    helper.error(msg);
    callback(msg, img);
    clearEventHandlers();
  }

  function onLoad() {
    callback(null, img);
    clearEventHandlers();
  }

  img.addEventListener('error', onError);
  img.addEventListener('load', onLoad);
  img.src = url;
  return img;
}

/**
 * Sets a texture to a 1x1 pixel color. If `options.color === false` is nothing happens. If it's not set
 * the default texture color is used which can be set by calling `setDefaultTextureColor`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 */
function setTextureTo1PixelColor(gl, tex, options) {
  options = options || defaults.textureOptions;
  var target = options.target || gl.TEXTURE_2D;
  gl.bindTexture(target, tex);
  if (options.color === false) {
    return;
  }
  // Assume it's a URL
  // Put 1x1 pixels in texture. That makes it renderable immediately regardless of filtering.
  var color = make1Pixel(options.color);
  if (target === gl.TEXTURE_CUBE_MAP) {
    for (var ii = 0; ii < 6; ++ii) {
      gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + ii, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, color);
    }
  } else if (target === gl.TEXTURE_3D || target === gl.TEXTURE_2D_ARRAY) {
    gl.texImage3D(target, 0, gl.RGBA, 1, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, color);
  } else {
    gl.texImage2D(target, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, color);
  }
}

/**
 * The src image(s) used to create a texture.
 *
 * When you call {@link module:twgl.createTexture} or {@link module:twgl.createTextures}
 * you can pass in urls for images to load into the textures. If it's a single url
 * then this will be a single HTMLImageElement. If it's an array of urls used for a cubemap
 * this will be a corresponding array of images for the cubemap.
 *
 * @typedef {HTMLImageElement|HTMLImageElement[]} TextureSrc
 * @memberOf module:twgl
 */

/**
 * A callback for when an image finished downloading and been uploaded into a texture
 * @callback TextureReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {WebGLTexture} texture the texture.
 * @param {module:twgl.TextureSrc} souce image(s) used to as the src for the texture
 * @memberOf module:twgl
 */

/**
 * A callback for when all images have finished downloading and been uploaded into their respective textures
 * @callback TexturesReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {Object.<string, WebGLTexture>} textures the created textures by name. Same as returned by {@link module:twgl.createTextures}.
 * @param {Object.<string, module:twgl.TextureSrc>} sources the image(s) used for the texture by name.
 * @memberOf module:twgl
 */

/**
 * A callback for when an image finished downloading and been uploaded into a texture
 * @callback CubemapReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {WebGLTexture} tex the texture.
 * @param {HTMLImageElement[]} imgs the images for each face.
 * @memberOf module:twgl
 */

/**
 * A callback for when an image finished downloading and been uploaded into a texture
 * @callback ThreeDReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {WebGLTexture} tex the texture.
 * @param {HTMLImageElement[]} imgs the images for each slice.
 * @memberOf module:twgl
 */

/**
 * Loads a texture from an image from a Url as specified in `options.src`
 * If `options.color !== false` will set the texture to a 1x1 pixel color so that the texture is
 * immediately useable. It will be updated with the contents of the image once the image has finished
 * downloading. Filtering options will be set as approriate for image unless `options.auto === false`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.TextureReadyCallback} [callback] A function to be called when the image has finished loading. err will
 *    be non null if there was an error.
 * @return {HTMLImageElement} the image being downloaded.
 * @memberOf module:twgl/textures
 */
function loadTextureFromUrl(gl, tex, options, callback) {
  callback = callback || noop;
  options = options || defaults.textureOptions;
  setTextureTo1PixelColor(gl, tex, options);
  // Because it's async we need to copy the options.
  options = Object.assign({}, options);
  var img = loadImage(options.src, options.crossOrigin, function (err, img) {
    if (err) {
      callback(err, tex, img);
    } else {
      setTextureFromElement(gl, tex, img, options);
      callback(null, tex, img);
    }
  });
  return img;
}

/**
 * Loads a cubemap from 6 urls as specified in `options.src`. Will set the cubemap to a 1x1 pixel color
 * so that it is usable immediately unless `option.color === false`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.CubemapReadyCallback} [callback] A function to be called when all the images have finished loading. err will
 *    be non null if there was an error.
 * @memberOf module:twgl/textures
 */
function loadCubemapFromUrls(gl, tex, options, callback) {
  callback = callback || noop;
  var urls = options.src;
  if (urls.length !== 6) {
    throw "there must be 6 urls for a cubemap";
  }
  var level = options.level || 0;
  var internalFormat = options.internalFormat || options.format || gl.RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || gl.UNSIGNED_BYTE;
  var target = options.target || gl.TEXTURE_2D;
  if (target !== gl.TEXTURE_CUBE_MAP) {
    throw "target must be TEXTURE_CUBE_MAP";
  }
  setTextureTo1PixelColor(gl, tex, options);
  // Because it's async we need to copy the options.
  options = Object.assign({}, options);
  var numToLoad = 6;
  var errors = [];
  var faces = getCubeFaceOrder(gl, options);
  var imgs = void 0; // eslint-disable-line

  function uploadImg(faceTarget) {
    return function (err, img) {
      --numToLoad;
      if (err) {
        errors.push(err);
      } else {
        if (img.width !== img.height) {
          errors.push("cubemap face img is not a square: " + img.src);
        } else {
          savePackState(gl, options);
          gl.bindTexture(target, tex);

          // So assuming this is the first image we now have one face that's img sized
          // and 5 faces that are 1x1 pixel so size the other faces
          if (numToLoad === 5) {
            // use the default order
            getCubeFaceOrder(gl).forEach(function (otherTarget) {
              // Should we re-use the same face or a color?
              gl.texImage2D(otherTarget, level, internalFormat, format, type, img);
            });
          } else {
            gl.texImage2D(faceTarget, level, internalFormat, format, type, img);
          }

          restorePackState(gl, options);
          if (shouldAutomaticallySetTextureFilteringForSize(options)) {
            gl.generateMipmap(target);
          }
        }
      }

      if (numToLoad === 0) {
        callback(errors.length ? errors : undefined, imgs, tex);
      }
    };
  }

  imgs = urls.map(function (url, ndx) {
    return loadImage(url, options.crossOrigin, uploadImg(faces[ndx]));
  });
}

/**
 * Loads a 2d array or 3d texture from urls as specified in `options.src`.
 * Will set the texture to a 1x1 pixel color
 * so that it is usable immediately unless `option.color === false`.
 *
 * If the width and height is not specified the width and height of the first
 * image loaded will be used. Note that since images are loaded async
 * which image downloads first is unknown.
 *
 * If an image is not the same size as the width and height it will be scaled
 * to that width and height.
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.ThreeDReadyCallback} [callback] A function to be called when all the images have finished loading. err will
 *    be non null if there was an error.
 * @memberOf module:twgl/textures
 */
function loadSlicesFromUrls(gl, tex, options, callback) {
  callback = callback || noop;
  var urls = options.src;
  var internalFormat = options.internalFormat || options.format || gl.RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || gl.UNSIGNED_BYTE;
  var target = options.target || gl.TEXTURE_2D_ARRAY;
  if (target !== gl.TEXTURE_3D && target !== gl.TEXTURE_2D_ARRAY) {
    throw "target must be TEXTURE_3D or TEXTURE_2D_ARRAY";
  }
  setTextureTo1PixelColor(gl, tex, options);
  // Because it's async we need to copy the options.
  options = Object.assign({}, options);
  var numToLoad = urls.length;
  var errors = [];
  var imgs = void 0; // eslint-disable-line
  var level = options.level || 0;
  var width = options.width;
  var height = options.height;
  var depth = urls.length;
  var firstImage = true;

  function uploadImg(slice) {
    return function (err, img) {
      --numToLoad;
      if (err) {
        errors.push(err);
      } else {
        savePackState(gl, options);
        gl.bindTexture(target, tex);

        if (firstImage) {
          firstImage = false;
          width = options.width || img.width;
          height = options.height || img.height;
          gl.texImage3D(target, level, internalFormat, width, height, depth, 0, format, type, null);

          // put it in every slice otherwise some slices will be 0,0,0,0
          for (var s = 0; s < depth; ++s) {
            gl.texSubImage3D(target, level, 0, 0, s, width, height, 1, format, type, img);
          }
        } else {
          var src = img;
          if (img.width !== width || img.height !== height) {
            // Size the image to fix
            src = ctx.canvas;
            ctx.canvas.width = width;
            ctx.canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
          }

          gl.texSubImage3D(target, level, 0, 0, slice, width, height, 1, format, type, src);

          // free the canvas memory
          if (src === ctx.canvas) {
            ctx.canvas.width = 0;
            ctx.canvas.height = 0;
          }
        }

        restorePackState(gl, options);
        if (shouldAutomaticallySetTextureFilteringForSize(options)) {
          gl.generateMipmap(target);
        }
      }

      if (numToLoad === 0) {
        callback(errors.length ? errors : undefined, imgs, tex);
      }
    };
  }

  imgs = urls.map(function (url, ndx) {
    return loadImage(url, options.crossOrigin, uploadImg(ndx));
  });
}

/**
 * Sets a texture from an array or typed array. If the width or height is not provided will attempt to
 * guess the size. See {@link module:twgl.TextureOptions}.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {(number[]|ArrayBufferView)} src An array or typed arry with texture data.
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 */
function setTextureFromArray(gl, tex, src, options) {
  options = options || defaults.textureOptions;
  var target = options.target || gl.TEXTURE_2D;
  gl.bindTexture(target, tex);
  var width = options.width;
  var height = options.height;
  var depth = options.depth;
  var level = options.level || 0;
  var internalFormat = options.internalFormat || options.format || gl.RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || getTextureTypeForArrayType(gl, src, formatType.type);
  if (!isArrayBuffer(src)) {
    var Type = typedArrays.getTypedArrayTypeForGLType(type);
    src = new Type(src);
  } else {
    if (src instanceof Uint8ClampedArray) {
      src = new Uint8Array(src.buffer);
    }
  }
  var bytesPerElement = getBytesPerElementForInternalFormat(internalFormat, type);
  var numElements = src.byteLength / bytesPerElement; // TODO: check UNPACK_ALIGNMENT?
  if (numElements % 1) {
    throw "length wrong size for format: " + utils.glEnumToString(gl, format);
  }
  var dimensions = void 0;
  if (target === gl.TEXTURE_3D) {
    if (!width && !height && !depth) {
      var size = Math.cbrt(numElements);
      if (size % 1 !== 0) {
        throw "can't guess cube size of array of numElements: " + numElements;
      }
      width = size;
      height = size;
      depth = size;
    } else if (width && (!height || !depth)) {
      dimensions = guessDimensions(gl, target, height, depth, numElements / width);
      height = dimensions.width;
      depth = dimensions.height;
    } else if (height && (!width || !depth)) {
      dimensions = guessDimensions(gl, target, width, depth, numElements / height);
      width = dimensions.width;
      depth = dimensions.height;
    } else {
      dimensions = guessDimensions(gl, target, width, height, numElements / depth);
      width = dimensions.width;
      height = dimensions.height;
    }
  } else {
    dimensions = guessDimensions(gl, target, width, height, numElements);
    width = dimensions.width;
    height = dimensions.height;
  }
  gl.pixelStorei(gl.UNPACK_ALIGNMENT, options.unpackAlignment || 1);
  savePackState(gl, options);
  if (target === gl.TEXTURE_CUBE_MAP) {
    var elementsPerElement = bytesPerElement / src.BYTES_PER_ELEMENT;
    var faceSize = numElements / 6 * elementsPerElement;

    getCubeFacesWithNdx(gl, options).forEach(function (f) {
      var offset = faceSize * f.ndx;
      var data = src.subarray(offset, offset + faceSize);
      gl.texImage2D(f.face, level, internalFormat, width, height, 0, format, type, data);
    });
  } else if (target === gl.TEXTURE_3D) {
    gl.texImage3D(target, level, internalFormat, width, height, depth, 0, format, type, src);
  } else {
    gl.texImage2D(target, level, internalFormat, width, height, 0, format, type, src);
  }
  restorePackState(gl, options);
  return {
    width: width,
    height: height,
    depth: depth,
    type: type
  };
}

/**
 * Sets a texture with no contents of a certain size. In other words calls `gl.texImage2D` with `null`.
 * You must set `options.width` and `options.height`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @memberOf module:twgl/textures
 */
function setEmptyTexture(gl, tex, options) {
  var target = options.target || gl.TEXTURE_2D;
  gl.bindTexture(target, tex);
  var level = options.level || 0;
  var internalFormat = options.internalFormat || options.format || gl.RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || formatType.type;
  savePackState(gl, options);
  if (target === gl.TEXTURE_CUBE_MAP) {
    for (var ii = 0; ii < 6; ++ii) {
      gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + ii, level, internalFormat, options.width, options.height, 0, format, type, null);
    }
  } else if (target === gl.TEXTURE_3D) {
    gl.texImage3D(target, level, internalFormat, options.width, options.height, options.depth, 0, format, type, null);
  } else {
    gl.texImage2D(target, level, internalFormat, options.width, options.height, 0, format, type, null);
  }
  restorePackState(gl, options);
}

/**
 * Creates a texture based on the options passed in.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.TextureReadyCallback} [callback] A callback called when an image has been downloaded and uploaded to the texture.
 * @return {WebGLTexture} the created texture.
 * @memberOf module:twgl/textures
 */
function createTexture(gl, options, callback) {
  callback = callback || noop;
  options = options || defaults.textureOptions;
  var tex = gl.createTexture();
  var target = options.target || gl.TEXTURE_2D;
  var width = options.width || 1;
  var height = options.height || 1;
  var internalFormat = options.internalFormat || gl.RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var type = options.type || formatType.type;
  gl.bindTexture(target, tex);
  if (target === gl.TEXTURE_CUBE_MAP) {
    // this should have been the default for CUBEMAPS :(
    gl.texParameteri(target, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(target, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  }
  var src = options.src;
  if (src) {
    if (typeof src === "function") {
      src = src(gl, options);
    }
    if (typeof src === "string") {
      loadTextureFromUrl(gl, tex, options, callback);
    } else if (isArrayBuffer(src) || Array.isArray(src) && (typeof src[0] === 'number' || Array.isArray(src[0]) || isArrayBuffer(src[0]))) {
      var dimensions = setTextureFromArray(gl, tex, src, options);
      width = dimensions.width;
      height = dimensions.height;
      type = dimensions.type;
    } else if (Array.isArray(src) && typeof src[0] === 'string') {
      if (target === gl.TEXTURE_CUBE_MAP) {
        loadCubemapFromUrls(gl, tex, options, callback);
      } else {
        loadSlicesFromUrls(gl, tex, options, callback);
      }
    } else if (src instanceof HTMLElement) {
      setTextureFromElement(gl, tex, src, options);
      width = src.width;
      height = src.height;
    } else {
      throw "unsupported src type";
    }
  } else {
    setEmptyTexture(gl, tex, options);
  }
  if (shouldAutomaticallySetTextureFilteringForSize(options)) {
    setTextureFilteringForSize(gl, tex, options, width, height, internalFormat, type);
  }
  setTextureParameters(gl, tex, options);
  return tex;
}

/**
 * Resizes a texture based on the options passed in.
 *
 * Note: This is not a generic resize anything function.
 * It's mostly used by {@link module:twgl.resizeFramebufferInfo}
 * It will use `options.src` if it exists to try to determine a `type`
 * otherwise it will assume `gl.UNSIGNED_BYTE`. No data is provided
 * for the texture. Texture parameters will be set accordingly
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the texture to resize
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {number} [width] the new width. If not passed in will use `options.width`
 * @param {number} [height] the new height. If not passed in will use `options.height`
 * @memberOf module:twgl/textures
 */
function resizeTexture(gl, tex, options, width, height) {
  width = width || options.width;
  height = height || options.height;
  var target = options.target || gl.TEXTURE_2D;
  gl.bindTexture(target, tex);
  var level = options.level || 0;
  var internalFormat = options.internalFormat || options.format || gl.RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = void 0;
  var src = options.src;
  if (!src) {
    type = options.type || formatType.type;
  } else if (isArrayBuffer(src) || Array.isArray(src) && typeof src[0] === 'number') {
    type = options.type || getTextureTypeForArrayType(gl, src, formatType.type);
  } else {
    type = options.type || formatType.type;
  }
  if (target === gl.TEXTURE_CUBE_MAP) {
    for (var ii = 0; ii < 6; ++ii) {
      gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + ii, level, internalFormat, width, height, 0, format, type, null);
    }
  } else {
    gl.texImage2D(target, level, internalFormat, width, height, 0, format, type, null);
  }
}

/**
 * Check if a src is an async request.
 * if src is a string we're going to download an image
 * if src is an array of strings we're going to download cubemap images
 * @param {*} src The src from a TextureOptions
 * @returns {bool} true if src is async.
 */
function isAsyncSrc(src) {
  return typeof src === 'string' || Array.isArray(src) && typeof src[0] === 'string';
}

/**
 * Creates a bunch of textures based on the passed in options.
 *
 * Example:
 *
 *     const textures = twgl.createTextures(gl, {
 *       // a power of 2 image
 *       hftIcon: { src: "images/hft-icon-16.png", mag: gl.NEAREST },
 *       // a non-power of 2 image
 *       clover: { src: "images/clover.jpg" },
 *       // From a canvas
 *       fromCanvas: { src: ctx.canvas },
 *       // A cubemap from 6 images
 *       yokohama: {
 *         target: gl.TEXTURE_CUBE_MAP,
 *         src: [
 *           'images/yokohama/posx.jpg',
 *           'images/yokohama/negx.jpg',
 *           'images/yokohama/posy.jpg',
 *           'images/yokohama/negy.jpg',
 *           'images/yokohama/posz.jpg',
 *           'images/yokohama/negz.jpg',
 *         ],
 *       },
 *       // A cubemap from 1 image (can be 1x6, 2x3, 3x2, 6x1)
 *       goldengate: {
 *         target: gl.TEXTURE_CUBE_MAP,
 *         src: 'images/goldengate.jpg',
 *       },
 *       // A 2x2 pixel texture from a JavaScript array
 *       checker: {
 *         mag: gl.NEAREST,
 *         min: gl.LINEAR,
 *         src: [
 *           255,255,255,255,
 *           192,192,192,255,
 *           192,192,192,255,
 *           255,255,255,255,
 *         ],
 *       },
 *       // a 1x2 pixel texture from a typed array.
 *       stripe: {
 *         mag: gl.NEAREST,
 *         min: gl.LINEAR,
 *         format: gl.LUMINANCE,
 *         src: new Uint8Array([
 *           255,
 *           128,
 *           255,
 *           128,
 *           255,
 *           128,
 *           255,
 *           128,
 *         ]),
 *         width: 1,
 *       },
 *     });
 *
 * Now
 *
 * *   `textures.hftIcon` will be a 2d texture
 * *   `textures.clover` will be a 2d texture
 * *   `textures.fromCanvas` will be a 2d texture
 * *   `textures.yohohama` will be a cubemap texture
 * *   `textures.goldengate` will be a cubemap texture
 * *   `textures.checker` will be a 2d texture
 * *   `textures.stripe` will be a 2d texture
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {Object.<string,module:twgl.TextureOptions>} options A object of TextureOptions one per texture.
 * @param {module:twgl.TexturesReadyCallback} [callback] A callback called when all textures have been downloaded.
 * @return {Object.<string,WebGLTexture>} the created textures by name
 * @memberOf module:twgl/textures
 */
function createTextures(gl, textureOptions, callback) {
  callback = callback || noop;
  var numDownloading = 0;
  var errors = [];
  var textures = {};
  var images = {};

  function callCallbackIfReady() {
    if (numDownloading === 0) {
      setTimeout(function () {
        callback(errors.length ? errors : undefined, textures, images);
      }, 0);
    }
  }

  Object.keys(textureOptions).forEach(function (name) {
    var options = textureOptions[name];
    var onLoadFn = void 0;
    if (isAsyncSrc(options.src)) {
      onLoadFn = function onLoadFn(err, tex, img) {
        images[name] = img;
        --numDownloading;
        if (err) {
          errors.push(err);
        }
        callCallbackIfReady();
      };
      ++numDownloading;
    }
    textures[name] = createTexture(gl, options, onLoadFn);
  });

  // queue the callback if there are no images to download.
  // We do this because if your code is structured to wait for
  // images to download but then you comment out all the async
  // images your code would break.
  callCallbackIfReady();

  return textures;
}

// Using quotes prevents Uglify from changing the names.
// No speed diff AFAICT.
exports.setTextureDefaults_ = setDefaults;
exports.createSampler = createSampler;
exports.createSamplers = createSamplers;
exports.setSamplerParameters = setSamplerParameters;
exports.createTexture = createTexture;
exports.setEmptyTexture = setEmptyTexture;
exports.setTextureFromArray = setTextureFromArray;
exports.loadTextureFromUrl = loadTextureFromUrl;
exports.setTextureFromElement = setTextureFromElement;
exports.setTextureFilteringForSize = setTextureFilteringForSize;
exports.setTextureParameters = setTextureParameters;
exports.setDefaultTextureColor = setDefaultTextureColor;
exports.createTextures = createTextures;
exports.resizeTexture = resizeTexture;
exports.getNumComponentsForFormat = getNumComponentsForFormat;
exports.getBytesPerElementForInternalFormat = getBytesPerElementForInternalFormat;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transpose = exports.translation = exports.translate = exports.transformPoint = exports.transformNormal = exports.transformDirection = exports.setTranslation = exports.setDefaultType = exports.setAxis = exports.scaling = exports.scale = exports.rotationZ = exports.rotationY = exports.rotationX = exports.rotateZ = exports.rotateY = exports.rotateX = exports.perspective = exports.ortho = exports.negate = exports.multiply = exports.lookAt = exports.inverse = exports.identity = exports.getTranslation = exports.getAxis = exports.frustum = exports.copy = exports.axisRotation = exports.axisRotate = undefined;

var _v = __webpack_require__(4);

var v3 = _interopRequireWildcard(_v);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * 4x4 Matrix math math functions.
 *
 * Almost all functions take an optional `dst` argument. If it is not passed in the
 * functions will create a new matrix. In other words you can do this
 *
 *     const mat = m4.translation([1, 2, 3]);  // Creates a new translation matrix
 *
 * or
 *
 *     const mat = m4.create();
 *     m4.translation([1, 2, 3], mat);  // Puts translation matrix in mat.
 *
 * The first style is often easier but depending on where it's used it generates garbage where
 * as there is almost never allocation with the second style.
 *
 * It is always save to pass any matrix as the destination. So for example
 *
 *     const mat = m4.identity();
 *     const trans = m4.translation([1, 2, 3]);
 *     m4.multiply(mat, trans, mat);  // Multiplies mat * trans and puts result in mat.
 *
 * @module twgl/m4
 */
var MatType = Float32Array; /*
                             * Copyright 2015, Gregg Tavares.
                             * All rights reserved.
                             *
                             * Redistribution and use in source and binary forms, with or without
                             * modification, are permitted provided that the following conditions are
                             * met:
                             *
                             *     * Redistributions of source code must retain the above copyright
                             * notice, this list of conditions and the following disclaimer.
                             *     * Redistributions in binary form must reproduce the above
                             * copyright notice, this list of conditions and the following disclaimer
                             * in the documentation and/or other materials provided with the
                             * distribution.
                             *     * Neither the name of Gregg Tavares. nor the names of his
                             * contributors may be used to endorse or promote products derived from
                             * this software without specific prior written permission.
                             *
                             * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
                             * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
                             * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
                             * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
                             * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
                             * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
                             * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
                             * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
                             * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
                             * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                             * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                             */

var tempV3a = v3.create();
var tempV3b = v3.create();
var tempV3c = v3.create();

/**
 * A JavaScript array with 16 values or a Float32Array with 16 values.
 * When created by the library will create the default type which is `Float32Array`
 * but can be set by calling {@link module:twgl/m4.setDefaultType}.
 * @typedef {(number[]|Float32Array)} Mat4
 * @memberOf module:twgl/m4
 */

/**
 * Sets the type this library creates for a Mat4
 * @param {constructor} ctor the constructor for the type. Either `Float32Array` or `Array`
 * @return {constructor} previous constructor for Mat4
 */
function setDefaultType(ctor) {
  var oldType = MatType;
  MatType = ctor;
  return oldType;
}

/**
 * Negates a matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} -m.
 * @memberOf module:twgl/m4
 */
function negate(m, dst) {
  dst = dst || new MatType(16);

  dst[0] = -m[0];
  dst[1] = -m[1];
  dst[2] = -m[2];
  dst[3] = -m[3];
  dst[4] = -m[4];
  dst[5] = -m[5];
  dst[6] = -m[6];
  dst[7] = -m[7];
  dst[8] = -m[8];
  dst[9] = -m[9];
  dst[10] = -m[10];
  dst[11] = -m[11];
  dst[12] = -m[12];
  dst[13] = -m[13];
  dst[14] = -m[14];
  dst[15] = -m[15];

  return dst;
}

/**
 * Copies a matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] The matrix.
 * @return {module:twgl/m4.Mat4} A copy of m.
 * @memberOf module:twgl/m4
 */
function copy(m, dst) {
  dst = dst || new MatType(16);

  dst[0] = m[0];
  dst[1] = m[1];
  dst[2] = m[2];
  dst[3] = m[3];
  dst[4] = m[4];
  dst[5] = m[5];
  dst[6] = m[6];
  dst[7] = m[7];
  dst[8] = m[8];
  dst[9] = m[9];
  dst[10] = m[10];
  dst[11] = m[11];
  dst[12] = m[12];
  dst[13] = m[13];
  dst[14] = m[14];
  dst[15] = m[15];

  return dst;
}

/**
 * Creates an n-by-n identity matrix.
 *
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} An n-by-n identity matrix.
 * @memberOf module:twgl/m4
 */
function identity(dst) {
  dst = dst || new MatType(16);

  dst[0] = 1;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 1;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = 1;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;

  return dst;
}

/**
 * Takes the transpose of a matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The transpose of m.
 * @memberOf module:twgl/m4
 */
function transpose(m, dst) {
  dst = dst || new MatType(16);
  if (dst === m) {
    var t = void 0;

    t = m[1];
    m[1] = m[4];
    m[4] = t;

    t = m[2];
    m[2] = m[8];
    m[8] = t;

    t = m[3];
    m[3] = m[12];
    m[12] = t;

    t = m[6];
    m[6] = m[9];
    m[9] = t;

    t = m[7];
    m[7] = m[13];
    m[13] = t;

    t = m[11];
    m[11] = m[14];
    m[14] = t;
    return dst;
  }

  var m00 = m[0 * 4 + 0];
  var m01 = m[0 * 4 + 1];
  var m02 = m[0 * 4 + 2];
  var m03 = m[0 * 4 + 3];
  var m10 = m[1 * 4 + 0];
  var m11 = m[1 * 4 + 1];
  var m12 = m[1 * 4 + 2];
  var m13 = m[1 * 4 + 3];
  var m20 = m[2 * 4 + 0];
  var m21 = m[2 * 4 + 1];
  var m22 = m[2 * 4 + 2];
  var m23 = m[2 * 4 + 3];
  var m30 = m[3 * 4 + 0];
  var m31 = m[3 * 4 + 1];
  var m32 = m[3 * 4 + 2];
  var m33 = m[3 * 4 + 3];

  dst[0] = m00;
  dst[1] = m10;
  dst[2] = m20;
  dst[3] = m30;
  dst[4] = m01;
  dst[5] = m11;
  dst[6] = m21;
  dst[7] = m31;
  dst[8] = m02;
  dst[9] = m12;
  dst[10] = m22;
  dst[11] = m32;
  dst[12] = m03;
  dst[13] = m13;
  dst[14] = m23;
  dst[15] = m33;

  return dst;
}

/**
 * Computes the inverse of a 4-by-4 matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The inverse of m.
 * @memberOf module:twgl/m4
 */
function inverse(m, dst) {
  dst = dst || new MatType(16);

  var m00 = m[0 * 4 + 0];
  var m01 = m[0 * 4 + 1];
  var m02 = m[0 * 4 + 2];
  var m03 = m[0 * 4 + 3];
  var m10 = m[1 * 4 + 0];
  var m11 = m[1 * 4 + 1];
  var m12 = m[1 * 4 + 2];
  var m13 = m[1 * 4 + 3];
  var m20 = m[2 * 4 + 0];
  var m21 = m[2 * 4 + 1];
  var m22 = m[2 * 4 + 2];
  var m23 = m[2 * 4 + 3];
  var m30 = m[3 * 4 + 0];
  var m31 = m[3 * 4 + 1];
  var m32 = m[3 * 4 + 2];
  var m33 = m[3 * 4 + 3];
  var tmp_0 = m22 * m33;
  var tmp_1 = m32 * m23;
  var tmp_2 = m12 * m33;
  var tmp_3 = m32 * m13;
  var tmp_4 = m12 * m23;
  var tmp_5 = m22 * m13;
  var tmp_6 = m02 * m33;
  var tmp_7 = m32 * m03;
  var tmp_8 = m02 * m23;
  var tmp_9 = m22 * m03;
  var tmp_10 = m02 * m13;
  var tmp_11 = m12 * m03;
  var tmp_12 = m20 * m31;
  var tmp_13 = m30 * m21;
  var tmp_14 = m10 * m31;
  var tmp_15 = m30 * m11;
  var tmp_16 = m10 * m21;
  var tmp_17 = m20 * m11;
  var tmp_18 = m00 * m31;
  var tmp_19 = m30 * m01;
  var tmp_20 = m00 * m21;
  var tmp_21 = m20 * m01;
  var tmp_22 = m00 * m11;
  var tmp_23 = m10 * m01;

  var t0 = tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31 - (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
  var t1 = tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31 - (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
  var t2 = tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31 - (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
  var t3 = tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21 - (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);

  var d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);

  dst[0] = d * t0;
  dst[1] = d * t1;
  dst[2] = d * t2;
  dst[3] = d * t3;
  dst[4] = d * (tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30 - (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30));
  dst[5] = d * (tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30 - (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30));
  dst[6] = d * (tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30 - (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30));
  dst[7] = d * (tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20 - (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20));
  dst[8] = d * (tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33 - (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33));
  dst[9] = d * (tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33 - (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33));
  dst[10] = d * (tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33 - (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33));
  dst[11] = d * (tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23 - (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23));
  dst[12] = d * (tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12 - (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22));
  dst[13] = d * (tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22 - (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02));
  dst[14] = d * (tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02 - (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12));
  dst[15] = d * (tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12 - (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02));

  return dst;
}

/**
 * Multiplies two 4-by-4 matrices with a on the left and b on the right
 * @param {module:twgl/m4.Mat4} a The matrix on the left.
 * @param {module:twgl/m4.Mat4} b The matrix on the right.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The matrix product of a and b.
 * @memberOf module:twgl/m4
 */
function multiply(a, b, dst) {
  dst = dst || new MatType(16);

  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4 + 0];
  var a11 = a[4 + 1];
  var a12 = a[4 + 2];
  var a13 = a[4 + 3];
  var a20 = a[8 + 0];
  var a21 = a[8 + 1];
  var a22 = a[8 + 2];
  var a23 = a[8 + 3];
  var a30 = a[12 + 0];
  var a31 = a[12 + 1];
  var a32 = a[12 + 2];
  var a33 = a[12 + 3];
  var b00 = b[0];
  var b01 = b[1];
  var b02 = b[2];
  var b03 = b[3];
  var b10 = b[4 + 0];
  var b11 = b[4 + 1];
  var b12 = b[4 + 2];
  var b13 = b[4 + 3];
  var b20 = b[8 + 0];
  var b21 = b[8 + 1];
  var b22 = b[8 + 2];
  var b23 = b[8 + 3];
  var b30 = b[12 + 0];
  var b31 = b[12 + 1];
  var b32 = b[12 + 2];
  var b33 = b[12 + 3];

  dst[0] = a00 * b00 + a10 * b01 + a20 * b02 + a30 * b03;
  dst[1] = a01 * b00 + a11 * b01 + a21 * b02 + a31 * b03;
  dst[2] = a02 * b00 + a12 * b01 + a22 * b02 + a32 * b03;
  dst[3] = a03 * b00 + a13 * b01 + a23 * b02 + a33 * b03;
  dst[4] = a00 * b10 + a10 * b11 + a20 * b12 + a30 * b13;
  dst[5] = a01 * b10 + a11 * b11 + a21 * b12 + a31 * b13;
  dst[6] = a02 * b10 + a12 * b11 + a22 * b12 + a32 * b13;
  dst[7] = a03 * b10 + a13 * b11 + a23 * b12 + a33 * b13;
  dst[8] = a00 * b20 + a10 * b21 + a20 * b22 + a30 * b23;
  dst[9] = a01 * b20 + a11 * b21 + a21 * b22 + a31 * b23;
  dst[10] = a02 * b20 + a12 * b21 + a22 * b22 + a32 * b23;
  dst[11] = a03 * b20 + a13 * b21 + a23 * b22 + a33 * b23;
  dst[12] = a00 * b30 + a10 * b31 + a20 * b32 + a30 * b33;
  dst[13] = a01 * b30 + a11 * b31 + a21 * b32 + a31 * b33;
  dst[14] = a02 * b30 + a12 * b31 + a22 * b32 + a32 * b33;
  dst[15] = a03 * b30 + a13 * b31 + a23 * b32 + a33 * b33;

  return dst;
}

/**
 * Sets the translation component of a 4-by-4 matrix to the given
 * vector.
 * @param {module:twgl/m4.Mat4} a The matrix.
 * @param {Vec3} v The vector.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} a once modified.
 * @memberOf module:twgl/m4
 */
function setTranslation(a, v, dst) {
  dst = dst || identity();
  if (a !== dst) {
    dst[0] = a[0];
    dst[1] = a[1];
    dst[2] = a[2];
    dst[3] = a[3];
    dst[4] = a[4];
    dst[5] = a[5];
    dst[6] = a[6];
    dst[7] = a[7];
    dst[8] = a[8];
    dst[9] = a[9];
    dst[10] = a[10];
    dst[11] = a[11];
  }
  dst[12] = v[0];
  dst[13] = v[1];
  dst[14] = v[2];
  dst[15] = 1;
  return dst;
}

/**
 * Returns the translation component of a 4-by-4 matrix as a vector with 3
 * entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {Vec3} [dst] vector..
 * @return {Vec3} The translation component of m.
 * @memberOf module:twgl/m4
 */
function getTranslation(m, dst) {
  dst = dst || v3.create();
  dst[0] = m[12];
  dst[1] = m[13];
  dst[2] = m[14];
  return dst;
}

/**
 * Returns an axis of a 4x4 matrix as a vector with 3 entries
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} axis The axis 0 = x, 1 = y, 2 = z;
 * @return {Vec3} [dst] vector.
 * @return {Vec3} The axis component of m.
 * @memberOf module:twgl/m4
 */
function getAxis(m, axis, dst) {
  dst = dst || v3.create();
  var off = axis * 4;
  dst[0] = m[off + 0];
  dst[1] = m[off + 1];
  dst[2] = m[off + 2];
  return dst;
}

/**
 * Sets an axis of a 4x4 matrix as a vector with 3 entries
 * @param {Vec3} v the axis vector
 * @param {number} axis The axis  0 = x, 1 = y, 2 = z;
 * @param {module:twgl/m4.Mat4} [dst] The matrix to set. If none a new one is created
 * @return {module:twgl/m4.Mat4} dst
 * @memberOf module:twgl/m4
 */
function setAxis(a, v, axis, dst) {
  if (dst !== a) {
    dst = copy(a, dst);
  }
  var off = axis * 4;
  dst[off + 0] = v[0];
  dst[off + 1] = v[1];
  dst[off + 2] = v[2];
  return dst;
}

/**
 * Computes a 4-by-4 perspective transformation matrix given the angular height
 * of the frustum, the aspect ratio, and the near and far clipping planes.  The
 * arguments define a frustum extending in the negative z direction.  The given
 * angle is the vertical angle of the frustum, and the horizontal angle is
 * determined to produce the given aspect ratio.  The arguments near and far are
 * the distances to the near and far clipping planes.  Note that near and far
 * are not z coordinates, but rather they are distances along the negative
 * z-axis.  The matrix generated sends the viewing frustum to the unit box.
 * We assume a unit box extending from -1 to 1 in the x and y dimensions and
 * from 0 to 1 in the z dimension.
 * @param {number} fieldOfViewYInRadians The camera angle from top to bottom (in radians).
 * @param {number} aspect The aspect ratio width / height.
 * @param {number} zNear The depth (negative z coordinate)
 *     of the near clipping plane.
 * @param {number} zFar The depth (negative z coordinate)
 *     of the far clipping plane.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The perspective matrix.
 * @memberOf module:twgl/m4
 */
function perspective(fieldOfViewYInRadians, aspect, zNear, zFar, dst) {
  dst = dst || new MatType(16);

  var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewYInRadians);
  var rangeInv = 1.0 / (zNear - zFar);

  dst[0] = f / aspect;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;

  dst[4] = 0;
  dst[5] = f;
  dst[6] = 0;
  dst[7] = 0;

  dst[8] = 0;
  dst[9] = 0;
  dst[10] = (zNear + zFar) * rangeInv;
  dst[11] = -1;

  dst[12] = 0;
  dst[13] = 0;
  dst[14] = zNear * zFar * rangeInv * 2;
  dst[15] = 0;

  return dst;
}

/**
 * Computes a 4-by-4 othogonal transformation matrix given the left, right,
 * bottom, and top dimensions of the near clipping plane as well as the
 * near and far clipping plane distances.
 * @param {number} left Left side of the near clipping plane viewport.
 * @param {number} right Right side of the near clipping plane viewport.
 * @param {number} top Top of the near clipping plane viewport.
 * @param {number} bottom Bottom of the near clipping plane viewport.
 * @param {number} near The depth (negative z coordinate)
 *     of the near clipping plane.
 * @param {number} far The depth (negative z coordinate)
 *     of the far clipping plane.
 * @param {module:twgl/m4.Mat4} [dst] Output matrix.
 * @return {module:twgl/m4.Mat4} The perspective matrix.
 * @memberOf module:twgl/m4
 */
function ortho(left, right, bottom, top, near, far, dst) {
  dst = dst || new MatType(16);

  dst[0] = 2 / (right - left);
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;

  dst[4] = 0;
  dst[5] = 2 / (top - bottom);
  dst[6] = 0;
  dst[7] = 0;

  dst[8] = 0;
  dst[9] = 0;
  dst[10] = 2 / (near - far);
  dst[11] = 0;

  dst[12] = (right + left) / (left - right);
  dst[13] = (top + bottom) / (bottom - top);
  dst[14] = (far + near) / (near - far);
  dst[15] = 1;

  return dst;
}

/**
 * Computes a 4-by-4 perspective transformation matrix given the left, right,
 * top, bottom, near and far clipping planes. The arguments define a frustum
 * extending in the negative z direction. The arguments near and far are the
 * distances to the near and far clipping planes. Note that near and far are not
 * z coordinates, but rather they are distances along the negative z-axis. The
 * matrix generated sends the viewing frustum to the unit box. We assume a unit
 * box extending from -1 to 1 in the x and y dimensions and from 0 to 1 in the z
 * dimension.
 * @param {number} left The x coordinate of the left plane of the box.
 * @param {number} right The x coordinate of the right plane of the box.
 * @param {number} bottom The y coordinate of the bottom plane of the box.
 * @param {number} top The y coordinate of the right plane of the box.
 * @param {number} near The negative z coordinate of the near plane of the box.
 * @param {number} far The negative z coordinate of the far plane of the box.
 * @param {module:twgl/m4.Mat4} [dst] Output matrix.
 * @return {module:twgl/m4.Mat4} The perspective projection matrix.
 * @memberOf module:twgl/m4
 */
function frustum(left, right, bottom, top, near, far, dst) {
  dst = dst || new MatType(16);

  var dx = right - left;
  var dy = top - bottom;
  var dz = near - far;

  dst[0] = 2 * near / dx;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 2 * near / dy;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = (left + right) / dx;
  dst[9] = (top + bottom) / dy;
  dst[10] = far / dz;
  dst[11] = -1;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = near * far / dz;
  dst[15] = 0;

  return dst;
}

/**
 * Computes a 4-by-4 look-at transformation.
 *
 * This is a matrix which positions the camera itself. If you want
 * a view matrix (a matrix which moves things in front of the camera)
 * take the inverse of this.
 *
 * @param {Vec3} eye The position of the eye.
 * @param {Vec3} target The position meant to be viewed.
 * @param {Vec3} up A vector pointing up.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The look-at matrix.
 * @memberOf module:twgl/m4
 */
function lookAt(eye, target, up, dst) {
  dst = dst || new MatType(16);

  var xAxis = tempV3a;
  var yAxis = tempV3b;
  var zAxis = tempV3c;

  v3.normalize(v3.subtract(eye, target, zAxis), zAxis);
  v3.normalize(v3.cross(up, zAxis, xAxis), xAxis);
  v3.normalize(v3.cross(zAxis, xAxis, yAxis), yAxis);

  dst[0] = xAxis[0];
  dst[1] = xAxis[1];
  dst[2] = xAxis[2];
  dst[3] = 0;
  dst[4] = yAxis[0];
  dst[5] = yAxis[1];
  dst[6] = yAxis[2];
  dst[7] = 0;
  dst[8] = zAxis[0];
  dst[9] = zAxis[1];
  dst[10] = zAxis[2];
  dst[11] = 0;
  dst[12] = eye[0];
  dst[13] = eye[1];
  dst[14] = eye[2];
  dst[15] = 1;

  return dst;
}

/**
 * Creates a 4-by-4 matrix which translates by the given vector v.
 * @param {Vec3} v The vector by
 *     which to translate.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The translation matrix.
 * @memberOf module:twgl/m4
 */
function translation(v, dst) {
  dst = dst || new MatType(16);

  dst[0] = 1;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 1;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = 1;
  dst[11] = 0;
  dst[12] = v[0];
  dst[13] = v[1];
  dst[14] = v[2];
  dst[15] = 1;
  return dst;
}

/**
 * Modifies the given 4-by-4 matrix by translation by the given vector v.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {Vec3} v The vector by
 *     which to translate.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} m once modified.
 * @memberOf module:twgl/m4
 */
function translate(m, v, dst) {
  dst = dst || new MatType(16);

  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  var m00 = m[0];
  var m01 = m[1];
  var m02 = m[2];
  var m03 = m[3];
  var m10 = m[1 * 4 + 0];
  var m11 = m[1 * 4 + 1];
  var m12 = m[1 * 4 + 2];
  var m13 = m[1 * 4 + 3];
  var m20 = m[2 * 4 + 0];
  var m21 = m[2 * 4 + 1];
  var m22 = m[2 * 4 + 2];
  var m23 = m[2 * 4 + 3];
  var m30 = m[3 * 4 + 0];
  var m31 = m[3 * 4 + 1];
  var m32 = m[3 * 4 + 2];
  var m33 = m[3 * 4 + 3];

  if (m !== dst) {
    dst[0] = m00;
    dst[1] = m01;
    dst[2] = m02;
    dst[3] = m03;
    dst[4] = m10;
    dst[5] = m11;
    dst[6] = m12;
    dst[7] = m13;
    dst[8] = m20;
    dst[9] = m21;
    dst[10] = m22;
    dst[11] = m23;
  }

  dst[12] = m00 * v0 + m10 * v1 + m20 * v2 + m30;
  dst[13] = m01 * v0 + m11 * v1 + m21 * v2 + m31;
  dst[14] = m02 * v0 + m12 * v1 + m22 * v2 + m32;
  dst[15] = m03 * v0 + m13 * v1 + m23 * v2 + m33;

  return dst;
}

/**
 * Creates a 4-by-4 matrix which rotates around the x-axis by the given angle.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The rotation matrix.
 * @memberOf module:twgl/m4
 */
function rotationX(angleInRadians, dst) {
  dst = dst || new MatType(16);

  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);

  dst[0] = 1;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = c;
  dst[6] = s;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = -s;
  dst[10] = c;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;

  return dst;
}

/**
 * Modifies the given 4-by-4 matrix by a rotation around the x-axis by the given
 * angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} m once modified.
 * @memberOf module:twgl/m4
 */
function rotateX(m, angleInRadians, dst) {
  dst = dst || new MatType(16);

  var m10 = m[4];
  var m11 = m[5];
  var m12 = m[6];
  var m13 = m[7];
  var m20 = m[8];
  var m21 = m[9];
  var m22 = m[10];
  var m23 = m[11];
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);

  dst[4] = c * m10 + s * m20;
  dst[5] = c * m11 + s * m21;
  dst[6] = c * m12 + s * m22;
  dst[7] = c * m13 + s * m23;
  dst[8] = c * m20 - s * m10;
  dst[9] = c * m21 - s * m11;
  dst[10] = c * m22 - s * m12;
  dst[11] = c * m23 - s * m13;

  if (m !== dst) {
    dst[0] = m[0];
    dst[1] = m[1];
    dst[2] = m[2];
    dst[3] = m[3];
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}

/**
 * Creates a 4-by-4 matrix which rotates around the y-axis by the given angle.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The rotation matrix.
 * @memberOf module:twgl/m4
 */
function rotationY(angleInRadians, dst) {
  dst = dst || new MatType(16);

  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);

  dst[0] = c;
  dst[1] = 0;
  dst[2] = -s;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 1;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = s;
  dst[9] = 0;
  dst[10] = c;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;

  return dst;
}

/**
 * Modifies the given 4-by-4 matrix by a rotation around the y-axis by the given
 * angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} m once modified.
 * @memberOf module:twgl/m4
 */
function rotateY(m, angleInRadians, dst) {
  dst = dst || new MatType(16);

  var m00 = m[0 * 4 + 0];
  var m01 = m[0 * 4 + 1];
  var m02 = m[0 * 4 + 2];
  var m03 = m[0 * 4 + 3];
  var m20 = m[2 * 4 + 0];
  var m21 = m[2 * 4 + 1];
  var m22 = m[2 * 4 + 2];
  var m23 = m[2 * 4 + 3];
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);

  dst[0] = c * m00 - s * m20;
  dst[1] = c * m01 - s * m21;
  dst[2] = c * m02 - s * m22;
  dst[3] = c * m03 - s * m23;
  dst[8] = c * m20 + s * m00;
  dst[9] = c * m21 + s * m01;
  dst[10] = c * m22 + s * m02;
  dst[11] = c * m23 + s * m03;

  if (m !== dst) {
    dst[4] = m[4];
    dst[5] = m[5];
    dst[6] = m[6];
    dst[7] = m[7];
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}

/**
 * Creates a 4-by-4 matrix which rotates around the z-axis by the given angle.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The rotation matrix.
 * @memberOf module:twgl/m4
 */
function rotationZ(angleInRadians, dst) {
  dst = dst || new MatType(16);

  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);

  dst[0] = c;
  dst[1] = s;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = -s;
  dst[5] = c;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = 1;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;

  return dst;
}

/**
 * Modifies the given 4-by-4 matrix by a rotation around the z-axis by the given
 * angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} m once modified.
 * @memberOf module:twgl/m4
 */
function rotateZ(m, angleInRadians, dst) {
  dst = dst || new MatType(16);

  var m00 = m[0 * 4 + 0];
  var m01 = m[0 * 4 + 1];
  var m02 = m[0 * 4 + 2];
  var m03 = m[0 * 4 + 3];
  var m10 = m[1 * 4 + 0];
  var m11 = m[1 * 4 + 1];
  var m12 = m[1 * 4 + 2];
  var m13 = m[1 * 4 + 3];
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);

  dst[0] = c * m00 + s * m10;
  dst[1] = c * m01 + s * m11;
  dst[2] = c * m02 + s * m12;
  dst[3] = c * m03 + s * m13;
  dst[4] = c * m10 - s * m00;
  dst[5] = c * m11 - s * m01;
  dst[6] = c * m12 - s * m02;
  dst[7] = c * m13 - s * m03;

  if (m !== dst) {
    dst[8] = m[8];
    dst[9] = m[9];
    dst[10] = m[10];
    dst[11] = m[11];
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}

/**
 * Creates a 4-by-4 matrix which rotates around the given axis by the given
 * angle.
 * @param {Vec3} axis The axis
 *     about which to rotate.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} A matrix which rotates angle radians
 *     around the axis.
 * @memberOf module:twgl/m4
 */
function axisRotation(axis, angleInRadians, dst) {
  dst = dst || new MatType(16);

  var x = axis[0];
  var y = axis[1];
  var z = axis[2];
  var n = Math.sqrt(x * x + y * y + z * z);
  x /= n;
  y /= n;
  z /= n;
  var xx = x * x;
  var yy = y * y;
  var zz = z * z;
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  var oneMinusCosine = 1 - c;

  dst[0] = xx + (1 - xx) * c;
  dst[1] = x * y * oneMinusCosine + z * s;
  dst[2] = x * z * oneMinusCosine - y * s;
  dst[3] = 0;
  dst[4] = x * y * oneMinusCosine - z * s;
  dst[5] = yy + (1 - yy) * c;
  dst[6] = y * z * oneMinusCosine + x * s;
  dst[7] = 0;
  dst[8] = x * z * oneMinusCosine + y * s;
  dst[9] = y * z * oneMinusCosine - x * s;
  dst[10] = zz + (1 - zz) * c;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;

  return dst;
}

/**
 * Modifies the given 4-by-4 matrix by rotation around the given axis by the
 * given angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {Vec3} axis The axis
 *     about which to rotate.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} m once modified.
 * @memberOf module:twgl/m4
 */
function axisRotate(m, axis, angleInRadians, dst) {
  dst = dst || new MatType(16);

  var x = axis[0];
  var y = axis[1];
  var z = axis[2];
  var n = Math.sqrt(x * x + y * y + z * z);
  x /= n;
  y /= n;
  z /= n;
  var xx = x * x;
  var yy = y * y;
  var zz = z * z;
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  var oneMinusCosine = 1 - c;

  var r00 = xx + (1 - xx) * c;
  var r01 = x * y * oneMinusCosine + z * s;
  var r02 = x * z * oneMinusCosine - y * s;
  var r10 = x * y * oneMinusCosine - z * s;
  var r11 = yy + (1 - yy) * c;
  var r12 = y * z * oneMinusCosine + x * s;
  var r20 = x * z * oneMinusCosine + y * s;
  var r21 = y * z * oneMinusCosine - x * s;
  var r22 = zz + (1 - zz) * c;

  var m00 = m[0];
  var m01 = m[1];
  var m02 = m[2];
  var m03 = m[3];
  var m10 = m[4];
  var m11 = m[5];
  var m12 = m[6];
  var m13 = m[7];
  var m20 = m[8];
  var m21 = m[9];
  var m22 = m[10];
  var m23 = m[11];

  dst[0] = r00 * m00 + r01 * m10 + r02 * m20;
  dst[1] = r00 * m01 + r01 * m11 + r02 * m21;
  dst[2] = r00 * m02 + r01 * m12 + r02 * m22;
  dst[3] = r00 * m03 + r01 * m13 + r02 * m23;
  dst[4] = r10 * m00 + r11 * m10 + r12 * m20;
  dst[5] = r10 * m01 + r11 * m11 + r12 * m21;
  dst[6] = r10 * m02 + r11 * m12 + r12 * m22;
  dst[7] = r10 * m03 + r11 * m13 + r12 * m23;
  dst[8] = r20 * m00 + r21 * m10 + r22 * m20;
  dst[9] = r20 * m01 + r21 * m11 + r22 * m21;
  dst[10] = r20 * m02 + r21 * m12 + r22 * m22;
  dst[11] = r20 * m03 + r21 * m13 + r22 * m23;

  if (m !== dst) {
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}

/**
 * Creates a 4-by-4 matrix which scales in each dimension by an amount given by
 * the corresponding entry in the given vector; assumes the vector has three
 * entries.
 * @param {Vec3} v A vector of
 *     three entries specifying the factor by which to scale in each dimension.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The scaling matrix.
 * @memberOf module:twgl/m4
 */
function scaling(v, dst) {
  dst = dst || new MatType(16);

  dst[0] = v[0];
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = v[1];
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = v[2];
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;

  return dst;
}

/**
 * Modifies the given 4-by-4 matrix, scaling in each dimension by an amount
 * given by the corresponding entry in the given vector; assumes the vector has
 * three entries.
 * @param {module:twgl/m4.Mat4} m The matrix to be modified.
 * @param {Vec3} v A vector of three entries specifying the
 *     factor by which to scale in each dimension.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} m once modified.
 * @memberOf module:twgl/m4
 */
function scale(m, v, dst) {
  dst = dst || new MatType(16);

  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];

  dst[0] = v0 * m[0 * 4 + 0];
  dst[1] = v0 * m[0 * 4 + 1];
  dst[2] = v0 * m[0 * 4 + 2];
  dst[3] = v0 * m[0 * 4 + 3];
  dst[4] = v1 * m[1 * 4 + 0];
  dst[5] = v1 * m[1 * 4 + 1];
  dst[6] = v1 * m[1 * 4 + 2];
  dst[7] = v1 * m[1 * 4 + 3];
  dst[8] = v2 * m[2 * 4 + 0];
  dst[9] = v2 * m[2 * 4 + 1];
  dst[10] = v2 * m[2 * 4 + 2];
  dst[11] = v2 * m[2 * 4 + 3];

  if (m !== dst) {
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}

/**
 * Takes a 4-by-4 matrix and a vector with 3 entries,
 * interprets the vector as a point, transforms that point by the matrix, and
 * returns the result as a vector with 3 entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {Vec3} v The point.
 * @param {Vec3} dst optional vec3 to store result
 * @return {Vec3} dst or new vec3 if not provided
 * @memberOf module:twgl/m4
 */
function transformPoint(m, v, dst) {
  dst = dst || v3.create();
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  var d = v0 * m[0 * 4 + 3] + v1 * m[1 * 4 + 3] + v2 * m[2 * 4 + 3] + m[3 * 4 + 3];

  dst[0] = (v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0] + m[3 * 4 + 0]) / d;
  dst[1] = (v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1] + m[3 * 4 + 1]) / d;
  dst[2] = (v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2] + m[3 * 4 + 2]) / d;

  return dst;
}

/**
 * Takes a 4-by-4 matrix and a vector with 3 entries, interprets the vector as a
 * direction, transforms that direction by the matrix, and returns the result;
 * assumes the transformation of 3-dimensional space represented by the matrix
 * is parallel-preserving, i.e. any combination of rotation, scaling and
 * translation, but not a perspective distortion. Returns a vector with 3
 * entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {Vec3} v The direction.
 * @param {Vec3} dst optional Vec3 to store result
 * @return {Vec3} dst or new Vec3 if not provided
 * @memberOf module:twgl/m4
 */
function transformDirection(m, v, dst) {
  dst = dst || v3.create();

  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];

  dst[0] = v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0];
  dst[1] = v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1];
  dst[2] = v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2];

  return dst;
}

/**
 * Takes a 4-by-4 matrix m and a vector v with 3 entries, interprets the vector
 * as a normal to a surface, and computes a vector which is normal upon
 * transforming that surface by the matrix. The effect of this function is the
 * same as transforming v (as a direction) by the inverse-transpose of m.  This
 * function assumes the transformation of 3-dimensional space represented by the
 * matrix is parallel-preserving, i.e. any combination of rotation, scaling and
 * translation, but not a perspective distortion.  Returns a vector with 3
 * entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {Vec3} v The normal.
 * @param {Vec3} [dst] The direction.
 * @return {Vec3} The transformed direction.
 * @memberOf module:twgl/m4
 */
function transformNormal(m, v, dst) {
  dst = dst || v3.create();
  var mi = inverse(m);
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];

  dst[0] = v0 * mi[0 * 4 + 0] + v1 * mi[0 * 4 + 1] + v2 * mi[0 * 4 + 2];
  dst[1] = v0 * mi[1 * 4 + 0] + v1 * mi[1 * 4 + 1] + v2 * mi[1 * 4 + 2];
  dst[2] = v0 * mi[2 * 4 + 0] + v1 * mi[2 * 4 + 1] + v2 * mi[2 * 4 + 2];

  return dst;
}

exports.axisRotate = axisRotate;
exports.axisRotation = axisRotation;
exports.copy = copy;
exports.frustum = frustum;
exports.getAxis = getAxis;
exports.getTranslation = getTranslation;
exports.identity = identity;
exports.inverse = inverse;
exports.lookAt = lookAt;
exports.multiply = multiply;
exports.negate = negate;
exports.ortho = ortho;
exports.perspective = perspective;
exports.rotateX = rotateX;
exports.rotateY = rotateY;
exports.rotateZ = rotateZ;
exports.rotationX = rotationX;
exports.rotationY = rotationY;
exports.rotationZ = rotationZ;
exports.scale = scale;
exports.scaling = scaling;
exports.setAxis = setAxis;
exports.setDefaultType = setDefaultType;
exports.setTranslation = setTranslation;
exports.transformDirection = transformDirection;
exports.transformNormal = transformNormal;
exports.transformPoint = transformPoint;
exports.translate = translate;
exports.translation = translation;
exports.transpose = transpose;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.primitives = exports.v3 = exports.m4 = undefined;

var _twgl = __webpack_require__(9);

Object.keys(_twgl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _twgl[key];
    }
  });
});

var _m = __webpack_require__(7);

var m4 = _interopRequireWildcard(_m);

var _v = __webpack_require__(4);

var v3 = _interopRequireWildcard(_v);

var _primitives = __webpack_require__(13);

var primitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.m4 = m4;
exports.v3 = v3;
exports.primitives = primitives;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDefaults = exports.resizeCanvasToDisplaySize = exports.getWebGLContext = exports.getContext = exports.addExtensionsToContext = undefined;

var _attributes = __webpack_require__(5);

Object.keys(_attributes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _attributes[key];
    }
  });
});

var _draw = __webpack_require__(10);

Object.keys(_draw).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _draw[key];
    }
  });
});

var _framebuffers = __webpack_require__(11);

Object.keys(_framebuffers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _framebuffers[key];
    }
  });
});

var _programs = __webpack_require__(2);

Object.keys(_programs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _programs[key];
    }
  });
});

var _textures = __webpack_require__(6);

Object.keys(_textures).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _textures[key];
    }
  });
});

var _typedarrays = __webpack_require__(1);

Object.keys(_typedarrays).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _typedarrays[key];
    }
  });
});

var _utils = __webpack_require__(3);

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});

var _vertexArrays = __webpack_require__(12);

Object.keys(_vertexArrays).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _vertexArrays[key];
    }
  });
});

var attributes = _interopRequireWildcard(_attributes);

var textures = _interopRequireWildcard(_textures);

var _helper = __webpack_require__(0);

var helper = _interopRequireWildcard(_helper);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * The main TWGL module.
 *
 * For most use cases you shouldn't need anything outside this module.
 * Exceptions between the stuff added to twgl-full (v3, m4, primitives)
 *
 * @module twgl
 * @borrows module:twgl/attributes.setAttribInfoBufferFromArray as setAttribInfoBufferFromArray
 * @borrows module:twgl/attributes.createBufferInfoFromArrays as createBufferInfoFromArrays
 * @borrows module:twgl/attributes.createVertexArrayInfo as createVertexArrayInfo
 * @borrows module:twgl/draw.drawBufferInfo as drawBufferInfo
 * @borrows module:twgl/draw.drawObjectList as drawObjectList
 * @borrows module:twgl/framebuffers.createFramebufferInfo as createFramebufferInfo
 * @borrows module:twgl/framebuffers.resizeFramebufferInfo as resizeFramebufferInfo
 * @borrows module:twgl/framebuffers.bindFramebufferInfo as bindFramebufferInfo
 * @borrows module:twgl/programs.createProgramInfo as createProgramInfo
 * @borrows module:twgl/programs.createUniformBlockInfo as createUniformBlockInfo
 * @borrows module:twgl/programs.bindUniformBlock as bindUniformBlock
 * @borrows module:twgl/programs.setUniformBlock as setUniformBlock
 * @borrows module:twgl/programs.setBlockUniforms as setBlockUniforms
 * @borrows module:twgl/programs.setUniforms as setUniforms
 * @borrows module:twgl/programs.setBuffersAndAttributes as setBuffersAndAttributes
 * @borrows module:twgl/textures.setTextureFromArray as setTextureFromArray
 * @borrows module:twgl/textures.createTexture as createTexture
 * @borrows module:twgl/textures.resizeTexture as resizeTexture
 * @borrows module:twgl/textures.createTextures as createTextures
 */

// make sure we don't see a global gl
/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var gl = undefined; // eslint-disable-line
var defaults = {
  addExtensionsToContext: true
};

/**
 * Various default settings for twgl.
 *
 * Note: You can call this any number of times. Example:
 *
 *     twgl.setDefaults({ textureColor: [1, 0, 0, 1] });
 *     twgl.setDefaults({ attribPrefix: 'a_' });
 *
 * is equivalent to
 *
 *     twgl.setDefaults({
 *       textureColor: [1, 0, 0, 1],
 *       attribPrefix: 'a_',
 *     });
 *
 * @typedef {Object} Defaults
 * @property {string} attribPrefix The prefix to stick on attributes
 *
 *   When writing shaders I prefer to name attributes with `a_`, uniforms with `u_` and varyings with `v_`
 *   as it makes it clear where they came from. But, when building geometry I prefer using unprefixed names.
 *
 *   In otherwords I'll create arrays of geometry like this
 *
 *       const arrays = {
 *         position: ...
 *         normal: ...
 *         texcoord: ...
 *       };
 *
 *   But need those mapped to attributes and my attributes start with `a_`.
 *
 *   Default: `""`
 *
 * @property {number[]} textureColor Array of 4 values in the range 0 to 1
 *
 *   The default texture color is used when loading textures from
 *   urls. Because the URL will be loaded async we'd like to be
 *   able to use the texture immediately. By putting a 1x1 pixel
 *   color in the texture we can start using the texture before
 *   the URL has loaded.
 *
 *   Default: `[0.5, 0.75, 1, 1]`
 *
 * @property {string} crossOrigin
 *
 *   If not undefined sets the crossOrigin attribute on images
 *   that twgl creates when downloading images for textures.
 *
 *   Also see {@link module:twgl.TextureOptions}.
 *
 * @property {bool} addExtensionsToContext
 *
 *   If true, then, when twgl will try to add any supported WebGL extensions
 *   directly to the context under their normal GL names. For example
 *   if ANGLE_instances_arrays exists then twgl would enable it,
 *   add the functions `vertexAttribDivisor`, `drawArraysInstanced`,
 *   `drawElementsInstanced`, and the constant `VERTEX_ATTRIB_ARRAY_DIVISOR`
 *   to the `WebGLRenderingContext`.
 *
 * @memberOf module:twgl
 */

/**
 * Sets various defaults for twgl.
 *
 * In the interest of terseness which is kind of the point
 * of twgl I've integrated a few of the older functions here
 *
 * @param {module:twgl.Defaults} newDefaults The default settings.
 * @memberOf module:twgl
 */
function setDefaults(newDefaults) {
  helper.copyExistingProperties(newDefaults, defaults);
  attributes.setAttributeDefaults_(newDefaults); // eslint-disable-line
  textures.setTextureDefaults_(newDefaults); // eslint-disable-line
}

var prefixRE = /^(.*?)_/;
function addExtensionToContext(gl, extensionName) {
  utils.glEnumToString(gl, 0);
  var ext = gl.getExtension(extensionName);
  if (ext) {
    var enums = {};
    var fnSuffix = prefixRE.exec(extensionName)[1];
    var enumSuffix = '_' + fnSuffix;
    for (var key in ext) {
      var value = ext[key];
      var isFunc = typeof value === 'function';
      var suffix = isFunc ? fnSuffix : enumSuffix;
      var name = key;
      // examples of where this is not true are WEBGL_compressed_texture_s3tc
      // and WEBGL_compressed_texture_pvrtc
      if (key.endsWith(suffix)) {
        name = key.substring(0, key.length - suffix.length);
      }
      if (gl[name] !== undefined) {
        if (!isFunc && gl[name] !== value) {
          helper.warn(name, gl[name], value, key);
        }
      } else {
        if (isFunc) {
          gl[name] = function (origFn) {
            return function () {
              return origFn.apply(ext, arguments);
            };
          }(value);
        } else {
          gl[name] = value;
          enums[name] = value;
        }
      }
    }
    // pass the modified enums to glEnumToString
    enums.constructor = {
      name: ext.constructor.name
    };
    utils.glEnumToString(enums, 0);
  }
  return ext;
}

var supportedExtensions = ['ANGLE_instanced_arrays', 'EXT_blend_minmax', 'EXT_color_buffer_float', 'EXT_color_buffer_half_float', 'EXT_disjoint_timer_query', 'EXT_disjoint_timer_query_webgl2', 'EXT_frag_depth', 'EXT_sRGB', 'EXT_shader_texture_lod', 'EXT_texture_filter_anisotropic', 'OES_element_index_uint', 'OES_standard_derivatives', 'OES_texture_float', 'OES_texture_float_linear', 'OES_texture_half_float', 'OES_texture_half_float_linear', 'OES_vertex_array_object', 'WEBGL_color_buffer_float', 'WEBGL_compressed_texture_atc', 'WEBGL_compressed_texture_etc1', 'WEBGL_compressed_texture_pvrtc', 'WEBGL_compressed_texture_s3tc', 'WEBGL_compressed_texture_s3tc_srgb', 'WEBGL_depth_texture', 'WEBGL_draw_buffers'];

/**
 * Attempts to enable all of the following extensions
 * and add their functions and constants to the
 * `WebGLRenderingContext` using their normal non-extension like names.
 *
 *      ANGLE_instanced_arrays
 *      EXT_blend_minmax
 *      EXT_color_buffer_float
 *      EXT_color_buffer_half_float
 *      EXT_disjoint_timer_query
 *      EXT_disjoint_timer_query_webgl2
 *      EXT_frag_depth
 *      EXT_sRGB
 *      EXT_shader_texture_lod
 *      EXT_texture_filter_anisotropic
 *      OES_element_index_uint
 *      OES_standard_derivatives
 *      OES_texture_float
 *      OES_texture_float_linear
 *      OES_texture_half_float
 *      OES_texture_half_float_linear
 *      OES_vertex_array_object
 *      WEBGL_color_buffer_float
 *      WEBGL_compressed_texture_atc
 *      WEBGL_compressed_texture_etc1
 *      WEBGL_compressed_texture_pvrtc
 *      WEBGL_compressed_texture_s3tc
 *      WEBGL_compressed_texture_s3tc_srgb
 *      WEBGL_depth_texture
 *      WEBGL_draw_buffers
 *
 * For example if `ANGLE_instanced_arrays` exists then the functions
 * `drawArraysInstanced`, `drawElementsInstanced`, `vertexAttribDivisor`
 * and the constant `VERTEX_ATTRIB_ARRAY_DIVISOR` are added to the
 * `WebGLRenderingContext`.
 *
 * Note that if you want to know if the extension exists you should
 * probably call `gl.getExtension` for each extension. Alternatively
 * you can check for the existance of the functions or constants that
 * are expected to be added. For example
 *
 *    if (gl.drawBuffers) {
 *      // Either WEBGL_draw_buffers was enabled OR you're running in WebGL2
 *      ....
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @memberOf module:twgl
 */
function addExtensionsToContext(gl) {
  for (var ii = 0; ii < supportedExtensions.length; ++ii) {
    addExtensionToContext(gl, supportedExtensions[ii]);
  }
}

/**
 * Creates a webgl context.
 * @param {HTMLCanvasElement} canvas The canvas tag to get
 *     context from. If one is not passed in one will be
 *     created.
 * @return {WebGLRenderingContext} The created context.
 */
function create3DContext(canvas, opt_attribs) {
  var names = ["webgl", "experimental-webgl"];
  var context = null;
  for (var ii = 0; ii < names.length; ++ii) {
    context = canvas.getContext(names[ii], opt_attribs);
    if (context) {
      if (defaults.addExtensionsToContext) {
        addExtensionsToContext(context);
      }
      break;
    }
  }
  return context;
}

/**
 * Gets a WebGL1 context.
 *
 * Note: Will attempt to enable Vertex Array Objects
 * and add WebGL2 entry points. (unless you first set defaults with
 * `twgl.setDefaults({enableVertexArrayObjects: false})`;
 *
 * @param {HTMLCanvasElement} canvas a canvas element.
 * @param {WebGLContextCreationAttirbutes} [opt_attribs] optional webgl context creation attributes
 * @memberOf module:twgl
 */
function getWebGLContext(canvas, opt_attribs) {
  var gl = create3DContext(canvas, opt_attribs);
  return gl;
}

/**
 * Creates a webgl context.
 *
 * Will return a WebGL2 context if possible.
 *
 * You can check if it's WebGL2 with
 *
 *     twgl.isWebGL2(gl);
 *
 * @param {HTMLCanvasElement} canvas The canvas tag to get
 *     context from. If one is not passed in one will be
 *     created.
 * @return {WebGLRenderingContext} The created context.
 */
function createContext(canvas, opt_attribs) {
  var names = ["webgl2", "webgl", "experimental-webgl"];
  var context = null;
  for (var ii = 0; ii < names.length; ++ii) {
    context = canvas.getContext(names[ii], opt_attribs);
    if (context) {
      if (defaults.addExtensionsToContext) {
        addExtensionsToContext(context);
      }
      break;
    }
  }
  return context;
}

/**
 * Gets a WebGL context.  Will create a WebGL2 context if possible.
 *
 * You can check if it's WebGL2 with
 *
 *    function isWebGL2(gl) {
 *      return gl.getParameter(gl.VERSION).indexOf("WebGL 2.0 ") == 0;
 *    }
 *
 * Note: For a WebGL1 context will attempt to enable Vertex Array Objects
 * and add WebGL2 entry points. (unless you first set defaults with
 * `twgl.setDefaults({enableVertexArrayObjects: false})`;
 *
 * @param {HTMLCanvasElement} canvas a canvas element.
 * @param {WebGLContextCreationAttirbutes} [opt_attribs] optional webgl context creation attributes
 * @return {WebGLRenderingContext} The created context.
 * @memberOf module:twgl
 */
function getContext(canvas, opt_attribs) {
  var gl = createContext(canvas, opt_attribs);
  return gl;
}

/**
 * Resize a canvas to match the size it's displayed.
 * @param {HTMLCanvasElement} canvas The canvas to resize.
 * @param {number} [multiplier] So you can pass in `window.devicePixelRatio` or other scale value if you want to.
 * @return {boolean} true if the canvas was resized.
 * @memberOf module:twgl
 */
function resizeCanvasToDisplaySize(canvas, multiplier) {
  multiplier = multiplier || 1;
  multiplier = Math.max(0, multiplier);
  var width = canvas.clientWidth * multiplier | 0;
  var height = canvas.clientHeight * multiplier | 0;
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true;
  }
  return false;
}

exports.addExtensionsToContext = addExtensionsToContext;
exports.getContext = getContext;
exports.getWebGLContext = getWebGLContext;
exports.resizeCanvasToDisplaySize = resizeCanvasToDisplaySize;
exports.setDefaults = setDefaults;

// function notPrivate(name) {
//   return name[name.length - 1] !== '_';
// }
//
// function copyPublicProperties(src, dst) {
//   Object.keys(src).filter(notPrivate).forEach(function(key) {
//     dst[key] = src[key];
//   });
//   return dst;
// }

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawObjectList = exports.drawBufferInfo = undefined;

var _programs = __webpack_require__(2);

var programs = _interopRequireWildcard(_programs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Drawing related functions
 *
 * For backward compatibily they are available at both `twgl.draw` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/draw
 */

/**
 * Calls `gl.drawElements` or `gl.drawArrays`, whichever is appropriate
 *
 * normally you'd call `gl.drawElements` or `gl.drawArrays` yourself
 * but calling this means if you switch from indexed data to non-indexed
 * data you don't have to remember to update your draw call.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {(module:twgl.BufferInfo|module:twgl.VertexArrayInfo)} bufferInfo A BufferInfo as returned from {@link module:twgl.createBufferInfoFromArrays} or
 *   a VertexArrayInfo as returned from {@link module:twgl.createVertexArrayInfo}
 * @param {enum} [type] eg (gl.TRIANGLES, gl.LINES, gl.POINTS, gl.TRIANGLE_STRIP, ...). Defaults to `gl.TRIANGLES`
 * @param {number} [count] An optional count. Defaults to bufferInfo.numElements
 * @param {number} [offset] An optional offset. Defaults to 0.
 * @param {number} [instanceCount] An optional instanceCount. if set then `drawArraysInstanced` or `drawElementsInstanced` will be called
 * @memberOf module:twgl/draw
 */
function drawBufferInfo(gl, bufferInfo, type, count, offset, instanceCount) {
  type = type === undefined ? gl.TRIANGLES : type;
  var indices = bufferInfo.indices;
  var elementType = bufferInfo.elementType;
  var numElements = count === undefined ? bufferInfo.numElements : count;
  offset = offset === undefined ? 0 : offset;
  if (elementType || indices) {
    if (instanceCount !== undefined) {
      gl.drawElementsInstanced(type, numElements, elementType === undefined ? gl.UNSIGNED_SHORT : bufferInfo.elementType, offset, instanceCount);
    } else {
      gl.drawElements(type, numElements, elementType === undefined ? gl.UNSIGNED_SHORT : bufferInfo.elementType, offset);
    }
  } else {
    if (instanceCount !== undefined) {
      gl.drawArraysInstanced(type, offset, numElements, instanceCount);
    } else {
      gl.drawArrays(type, offset, numElements);
    }
  }
}

/**
 * A DrawObject is useful for putting objects in to an array and passing them to {@link module:twgl.drawObjectList}.
 *
 * You need either a `BufferInfo` or a `VertexArrayInfo`.
 *
 * @typedef {Object} DrawObject
 * @property {boolean} [active] whether or not to draw. Default = `true` (must be `false` to be not true). In otherwords `undefined` = `true`
 * @property {number} [type] type to draw eg. `gl.TRIANGLES`, `gl.LINES`, etc...
 * @property {module:twgl.ProgramInfo} programInfo A ProgramInfo as returned from {@link module:twgl.createProgramInfo}
 * @property {module:twgl.BufferInfo} [bufferInfo] A BufferInfo as returned from {@link module:twgl.createBufferInfoFromArrays}
 * @property {module:twgl.VertexArrayInfo} [vertexArrayInfo] A VertexArrayInfo as returned from {@link module:twgl.createVertexArrayInfo}
 * @property {Object<string, ?>} uniforms The values for the uniforms.
 *   You can pass multiple objects by putting them in an array. For example
 *
 *     var sharedUniforms = {
 *       u_fogNear: 10,
 *       u_projection: ...
 *       ...
 *     };
 *
 *     var localUniforms = {
 *       u_world: ...
 *       u_diffuseColor: ...
 *     };
 *
 *     var drawObj = {
 *       ...
 *       uniforms: [sharedUniforms, localUniforms],
 *     };
 *
 * @property {number} [offset] the offset to pass to `gl.drawArrays` or `gl.drawElements`. Defaults to 0.
 * @property {number} [count] the count to pass to `gl.drawArrays` or `gl.drawElemnts`. Defaults to bufferInfo.numElements.
 * @property {number} [instanceCount] the number of instances. Defaults to undefined.
 * @memberOf module:twgl
 */

/**
 * Draws a list of objects
 * @param {DrawObject[]} objectsToDraw an array of objects to draw.
 * @memberOf module:twgl/draw
 */
/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

function drawObjectList(gl, objectsToDraw) {
  var lastUsedProgramInfo = null;
  var lastUsedBufferInfo = null;

  objectsToDraw.forEach(function (object) {
    if (object.active === false) {
      return;
    }

    var programInfo = object.programInfo;
    var bufferInfo = object.vertexArrayInfo || object.bufferInfo;
    var bindBuffers = false;
    var type = object.type === undefined ? gl.TRIANGLES : object.type;

    if (programInfo !== lastUsedProgramInfo) {
      lastUsedProgramInfo = programInfo;
      gl.useProgram(programInfo.program);

      // We have to rebind buffers when changing programs because we
      // only bind buffers the program uses. So if 2 programs use the same
      // bufferInfo but the 1st one uses only positions the when the
      // we switch to the 2nd one some of the attributes will not be on.
      bindBuffers = true;
    }

    // Setup all the needed attributes.
    if (bindBuffers || bufferInfo !== lastUsedBufferInfo) {
      if (lastUsedBufferInfo && lastUsedBufferInfo.vertexArrayObject && !bufferInfo.vertexArrayObject) {
        gl.bindVertexArray(null);
      }
      lastUsedBufferInfo = bufferInfo;
      programs.setBuffersAndAttributes(gl, programInfo, bufferInfo);
    }

    // Set the uniforms.
    programs.setUniforms(programInfo, object.uniforms);

    // Draw
    drawBufferInfo(gl, bufferInfo, type, object.count, object.offset, object.instanceCount);
  });

  if (lastUsedBufferInfo.vertexArrayObject) {
    gl.bindVertexArray(null);
  }
}

exports.drawBufferInfo = drawBufferInfo;
exports.drawObjectList = drawObjectList;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizeFramebufferInfo = exports.createFramebufferInfo = exports.bindFramebufferInfo = undefined;

var _textures = __webpack_require__(6);

var textures = _interopRequireWildcard(_textures);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Framebuffer related functions
 *
 * For backward compatibily they are available at both `twgl.framebuffer` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/framebuffers
 */

// make sure we don't see a global gl
var gl = undefined; // eslint-disable-line

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var UNSIGNED_BYTE = 0x1401;

/* PixelFormat */
var DEPTH_COMPONENT = 0x1902;
var RGBA = 0x1908;

/* Framebuffer Object. */
var RGBA4 = 0x8056;
var RGB5_A1 = 0x8057;
var RGB565 = 0x8D62;
var DEPTH_COMPONENT16 = 0x81A5;
var STENCIL_INDEX = 0x1901;
var STENCIL_INDEX8 = 0x8D48;
var DEPTH_STENCIL = 0x84F9;
var COLOR_ATTACHMENT0 = 0x8CE0;
var DEPTH_ATTACHMENT = 0x8D00;
var STENCIL_ATTACHMENT = 0x8D20;
var DEPTH_STENCIL_ATTACHMENT = 0x821A;

/* TextureWrapMode */
var REPEAT = 0x2901; // eslint-disable-line
var CLAMP_TO_EDGE = 0x812F;
var MIRRORED_REPEAT = 0x8370; // eslint-disable-line

/* TextureMagFilter */
var NEAREST = 0x2600; // eslint-disable-line
var LINEAR = 0x2601;

/* TextureMinFilter */
var NEAREST_MIPMAP_NEAREST = 0x2700; // eslint-disable-line
var LINEAR_MIPMAP_NEAREST = 0x2701; // eslint-disable-line
var NEAREST_MIPMAP_LINEAR = 0x2702; // eslint-disable-line
var LINEAR_MIPMAP_LINEAR = 0x2703; // eslint-disable-line

/**
 * The options for a framebuffer attachment.
 *
 * Note: For a `format` that is a texture include all the texture
 * options from {@link module:twgl.TextureOptions} for example
 * `min`, `mag`, `clamp`, etc... Note that unlike {@link module:twgl.TextureOptions}
 * `auto` defaults to `false` for attachment textures but `min` and `mag` default
 * to `gl.LINEAR` and `wrap` defaults to `CLAMP_TO_EDGE`
 *
 * @typedef {Object} AttachmentOptions
 * @property {number} [attach] The attachment point. Defaults
 *   to `gl.COLOR_ATTACTMENT0 + ndx` unless type is a depth or stencil type
 *   then it's gl.DEPTH_ATTACHMENT or `gl.DEPTH_STENCIL_ATTACHMENT` depending
 *   on the format or attachment type.
 * @property {number} [format] The format. If one of `gl.RGBA4`,
 *   `gl.RGB565`, `gl.RGB5_A1`, `gl.DEPTH_COMPONENT16`,
 *   `gl.STENCIL_INDEX8` or `gl.DEPTH_STENCIL` then will create a
 *   renderbuffer. Otherwise will create a texture. Default = `gl.RGBA`
 * @property {number} [type] The type. Used for texture. Default = `gl.UNSIGNED_BYTE`.
 * @property {number} [target] The texture target for `gl.framebufferTexture2D`.
 *   Defaults to `gl.TEXTURE_2D`. Set to appropriate face for cube maps.
 * @property {number} [level] level for `gl.framebufferTexture2D`. Defaults to 0.
 * @property {WebGLObject} [attachment] An existing renderbuffer or texture.
 *    If provided will attach this Object. This allows you to share
 *    attachemnts across framebuffers.
 * @memberOf module:twgl
 */

var defaultAttachments = [{ format: RGBA, type: UNSIGNED_BYTE, min: LINEAR, wrap: CLAMP_TO_EDGE }, { format: DEPTH_STENCIL }];

var attachmentsByFormat = {};
attachmentsByFormat[DEPTH_STENCIL] = DEPTH_STENCIL_ATTACHMENT;
attachmentsByFormat[STENCIL_INDEX] = STENCIL_ATTACHMENT;
attachmentsByFormat[STENCIL_INDEX8] = STENCIL_ATTACHMENT;
attachmentsByFormat[DEPTH_COMPONENT] = DEPTH_ATTACHMENT;
attachmentsByFormat[DEPTH_COMPONENT16] = DEPTH_ATTACHMENT;

function getAttachmentPointForFormat(format) {
  return attachmentsByFormat[format];
}

var renderbufferFormats = {};
renderbufferFormats[RGBA4] = true;
renderbufferFormats[RGB5_A1] = true;
renderbufferFormats[RGB565] = true;
renderbufferFormats[DEPTH_STENCIL] = true;
renderbufferFormats[DEPTH_COMPONENT16] = true;
renderbufferFormats[STENCIL_INDEX] = true;
renderbufferFormats[STENCIL_INDEX8] = true;

function isRenderbufferFormat(format) {
  return renderbufferFormats[format];
}

/**
 * @typedef {Object} FramebufferInfo
 * @property {WebGLFramebuffer} framebuffer The WebGLFramebuffer for this framebufferInfo
 * @property {WebGLObject[]} attachments The created attachments in the same order as passed in to {@link module:twgl.createFramebufferInfo}.
 * @memberOf module:twgl
 */

/**
 * Creates a framebuffer and attachments.
 *
 * This returns a {@link module:twgl.FramebufferInfo} because it needs to return the attachments as well as the framebuffer.
 *
 * The simplest usage
 *
 *     // create an RGBA/UNSIGNED_BYTE texture and DEPTH_STENCIL renderbuffer
 *     const fbi = twgl.createFramebufferInfo(gl);
 *
 * More complex usage
 *
 *     // create an RGB565 renderbuffer and a STENCIL_INDEX8 renderbuffer
 *     const attachments = [
 *       { format: RGB565, mag: NEAREST },
 *       { format: STENCIL_INDEX8 },
 *     ]
 *     const fbi = twgl.createFramebufferInfo(gl, attachments);
 *
 * Passing in a specific size
 *
 *     const width = 256;
 *     const height = 256;
 *     const fbi = twgl.createFramebufferInfo(gl, attachments, width, height);
 *
 * **Note!!** It is up to you to check if the framebuffer is renderable by calling `gl.checkFramebufferStatus`.
 * [WebGL only guarantees 3 combinations of attachments work](https://www.khronos.org/registry/webgl/specs/latest/1.0/#6.6).
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.AttachmentOptions[]} [attachments] which attachments to create. If not provided the default is a framebuffer with an
 *    `RGBA`, `UNSIGNED_BYTE` texture `COLOR_ATTACHMENT0` and a `DEPTH_STENCIL` renderbuffer `DEPTH_STENCIL_ATTACHMENT`.
 * @param {number} [width] the width for the attachments. Default = size of drawingBuffer
 * @param {number} [height] the height for the attachments. Defautt = size of drawingBuffer
 * @return {module:twgl.FramebufferInfo} the framebuffer and attachments.
 * @memberOf module:twgl/framebuffers
 */
function createFramebufferInfo(gl, attachments, width, height) {
  var target = gl.FRAMEBUFFER;
  var fb = gl.createFramebuffer();
  gl.bindFramebuffer(target, fb);
  width = width || gl.drawingBufferWidth;
  height = height || gl.drawingBufferHeight;
  attachments = attachments || defaultAttachments;
  var colorAttachmentCount = 0;
  var framebufferInfo = {
    framebuffer: fb,
    attachments: [],
    width: width,
    height: height
  };
  attachments.forEach(function (attachmentOptions) {
    var attachment = attachmentOptions.attachment;
    var format = attachmentOptions.format;
    var attachmentPoint = getAttachmentPointForFormat(format);
    if (!attachmentPoint) {
      attachmentPoint = COLOR_ATTACHMENT0 + colorAttachmentCount++;
    }
    if (!attachment) {
      if (isRenderbufferFormat(format)) {
        attachment = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, attachment);
        gl.renderbufferStorage(gl.RENDERBUFFER, format, width, height);
      } else {
        var textureOptions = Object.assign({}, attachmentOptions);
        textureOptions.width = width;
        textureOptions.height = height;
        if (textureOptions.auto === undefined) {
          textureOptions.auto = false;
          textureOptions.min = textureOptions.min || textureOptions.minMag || gl.LINEAR;
          textureOptions.mag = textureOptions.mag || textureOptions.minMag || gl.LINEAR;
          textureOptions.wrapS = textureOptions.wrapS || textureOptions.wrap || gl.CLAMP_TO_EDGE;
          textureOptions.wrapT = textureOptions.wrapT || textureOptions.wrap || gl.CLAMP_TO_EDGE;
        }
        attachment = textures.createTexture(gl, textureOptions);
      }
    }
    if (attachment instanceof WebGLRenderbuffer) {
      gl.framebufferRenderbuffer(target, attachmentPoint, gl.RENDERBUFFER, attachment);
    } else if (attachment instanceof WebGLTexture) {
      gl.framebufferTexture2D(target, attachmentPoint, attachmentOptions.texTarget || gl.TEXTURE_2D, attachment, attachmentOptions.level || 0);
    } else {
      throw "unknown attachment type";
    }
    framebufferInfo.attachments.push(attachment);
  });
  return framebufferInfo;
}

/**
 * Resizes the attachments of a framebuffer.
 *
 * You need to pass in the same `attachments` as you passed in {@link module:twgl.createFramebufferInfo}
 * because TWGL has no idea the format/type of each attachment.
 *
 * The simplest usage
 *
 *     // create an RGBA/UNSIGNED_BYTE texture and DEPTH_STENCIL renderbuffer
 *     const fbi = twgl.createFramebufferInfo(gl);
 *
 *     ...
 *
 *     function render() {
 *       if (twgl.resizeCanvasToDisplaySize(gl.canvas)) {
 *         // resize the attachments
 *         twgl.resizeFramebufferInfo(gl, fbi);
 *       }
 *
 * More complex usage
 *
 *     // create an RGB565 renderbuffer and a STENCIL_INDEX8 renderbuffer
 *     const attachments = [
 *       { format: RGB565, mag: NEAREST },
 *       { format: STENCIL_INDEX8 },
 *     ]
 *     const fbi = twgl.createFramebufferInfo(gl, attachments);
 *
 *     ...
 *
 *     function render() {
 *       if (twgl.resizeCanvasToDisplaySize(gl.canvas)) {
 *         // resize the attachments to match
 *         twgl.resizeFramebufferInfo(gl, fbi, attachments);
 *       }
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.FramebufferInfo} framebufferInfo a framebufferInfo as returned from {@link module:twgl.createFramebufferInfo}.
 * @param {module:twgl.AttachmentOptions[]} [attachments] the same attachments options as passed to {@link module:twgl.createFramebufferInfo}.
 * @param {number} [width] the width for the attachments. Default = size of drawingBuffer
 * @param {number} [height] the height for the attachments. Defautt = size of drawingBuffer
 * @memberOf module:twgl/framebuffers
 */
function resizeFramebufferInfo(gl, framebufferInfo, attachments, width, height) {
  width = width || gl.drawingBufferWidth;
  height = height || gl.drawingBufferHeight;
  framebufferInfo.width = width;
  framebufferInfo.height = height;
  attachments = attachments || defaultAttachments;
  attachments.forEach(function (attachmentOptions, ndx) {
    var attachment = framebufferInfo.attachments[ndx];
    var format = attachmentOptions.format;
    if (attachment instanceof WebGLRenderbuffer) {
      gl.bindRenderbuffer(gl.RENDERBUFFER, attachment);
      gl.renderbufferStorage(gl.RENDERBUFFER, format, width, height);
    } else if (attachment instanceof WebGLTexture) {
      textures.resizeTexture(gl, attachment, attachmentOptions, width, height);
    } else {
      throw "unknown attachment type";
    }
  });
}

/**
 * Binds a framebuffer
 *
 * This function pretty much soley exists because I spent hours
 * trying to figure out why something I wrote wasn't working only
 * to realize I forget to set the viewport dimensions.
 * My hope is this function will fix that.
 *
 * It is effectively the same as
 *
 *     gl.bindFramebuffer(gl.FRAMEBUFFER, someFramebufferInfo.framebuffer);
 *     gl.viewport(0, 0, someFramebufferInfo.width, someFramebufferInfo.height);
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.FramebufferInfo} [framebufferInfo] a framebufferInfo as returned from {@link module:twgl.createFramebufferInfo}.
 *   If not passed will bind the canvas.
 * @param {number} [target] The target. If not passed `gl.FRAMEBUFFER` will be used.
 * @memberOf module:twgl/framebuffers
 */

function bindFramebufferInfo(gl, framebufferInfo, target) {
  target = target || gl.FRAMEBUFFER;
  if (framebufferInfo) {
    gl.bindFramebuffer(target, framebufferInfo.framebuffer);
    gl.viewport(0, 0, framebufferInfo.width, framebufferInfo.height);
  } else {
    gl.bindFramebuffer(target, null);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  }
}

exports.bindFramebufferInfo = bindFramebufferInfo;
exports.createFramebufferInfo = createFramebufferInfo;
exports.resizeFramebufferInfo = resizeFramebufferInfo;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createVAOFromBufferInfo = exports.createVAOAndSetAttributes = exports.createVertexArrayInfo = undefined;

var _programs = __webpack_require__(2);

var programs = _interopRequireWildcard(_programs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * vertex array object related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibily they are available at both `twgl.attributes` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/vertexArrays
 */

/**
 * @typedef {Object} VertexArrayInfo
 * @property {number} numElements The number of elements to pass to `gl.drawArrays` or `gl.drawElements`.
 * @property {number} [elementType] The type of indices `UNSIGNED_BYTE`, `UNSIGNED_SHORT` etc..
 * @property {WebGLVertexArrayObject} [vertexArrayObject] a vertex array object
 * @memberOf module:twgl
 */

/**
 * Creates a VertexArrayInfo from a BufferInfo and one or more ProgramInfos
 *
 * This can be passed to {@link module:twgl.setBuffersAndAttributes} and to
 * {@link module:twgl:drawBufferInfo}.
 *
 * > **IMPORTANT:** Vertex Array Objects are **not** a direct analog for a BufferInfo. Vertex Array Objects
 *   assign buffers to specific attributes at creation time. That means they can only be used with programs
 *   who's attributes use the same attribute locations for the same purposes.
 *
 * > Bind your attribute locations by passing an array of attribute names to {@link module:twgl.createProgramInfo}
 *   or use WebGL 2's GLSL ES 3's `layout(location = <num>)` to make sure locations match.
 *
 * also
 *
 * > **IMPORTANT:** After calling twgl.setBuffersAndAttribute with a BufferInfo that uses a Vertex Array Object
 *   that Vertex Array Object will be bound. That means **ANY MANIPULATION OF ELEMENT_ARRAY_BUFFER or ATTRIBUTES**
 *   will affect the Vertex Array Object state.
 *
 * > Call `gl.bindVertexArray(null)` to get back manipulating the global attributes and ELEMENT_ARRAY_BUFFER.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {module:twgl.ProgramInfo|module:twgl.ProgramInfo[]} programInfo a programInfo or array of programInfos
 * @param {module:twgl.BufferInfo} bufferInfo BufferInfo as returned from createBufferInfoFromArrays etc...
 *
 *    You need to make sure every attribute that will be used is bound. So for example assume shader 1
 *    uses attributes A, B, C and shader 2 uses attributes A, B, D. If you only pass in the programInfo
 *    for shader 1 then only attributes A, B, and C will have their attributes set because TWGL doesn't
 *    now attribute D's location.
 *
 *    So, you can pass in both shader 1 and shader 2's programInfo
 *
 * @return {module:twgl.VertexArrayInfo} The created VertexArrayInfo
 *
 * @memberOf module:twgl/vertexArrays
 */
function createVertexArrayInfo(gl, programInfos, bufferInfo) {
  var vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
  if (!programInfos.length) {
    programInfos = [programInfos];
  }
  programInfos.forEach(function (programInfo) {
    programs.setBuffersAndAttributes(gl, programInfo, bufferInfo);
  });
  gl.bindVertexArray(null);
  return {
    numElements: bufferInfo.numElements,
    elementType: bufferInfo.elementType,
    vertexArrayObject: vao
  };
}

/**
 * Creates a vertex array object and then sets the attributes on it
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {Object.<string, function>} setters Attribute setters as returned from createAttributeSetters
 * @param {Object.<string, module:twgl.AttribInfo>} attribs AttribInfos mapped by attribute name.
 * @param {WebGLBuffer} [indices] an optional ELEMENT_ARRAY_BUFFER of indices
 * @memberOf module:twgl/vertexArrays
 */
/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

function createVAOAndSetAttributes(gl, setters, attribs, indices) {
  var vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
  programs.setAttributes(setters, attribs);
  if (indices) {
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indices);
  }
  // We unbind this because otherwise any change to ELEMENT_ARRAY_BUFFER
  // like when creating buffers for other stuff will mess up this VAO's binding
  gl.bindVertexArray(null);
  return vao;
}

/**
 * Creates a vertex array object and then sets the attributes
 * on it
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {Object.<string, function>| module:twgl.ProgramInfo} programInfo as returned from createProgramInfo or Attribute setters as returned from createAttributeSetters
 * @param {module:twgl.BufferInfo} bufferInfo BufferInfo as returned from createBufferInfoFromArrays etc...
 * @param {WebGLBuffer} [indices] an optional ELEMENT_ARRAY_BUFFER of indices
 * @memberOf module:twgl/vertexArrays
 */
function createVAOFromBufferInfo(gl, programInfo, bufferInfo) {
  return createVAOAndSetAttributes(gl, programInfo.attribSetters || programInfo, bufferInfo.attribs, bufferInfo.indices);
}

exports.createVertexArrayInfo = createVertexArrayInfo;
exports.createVAOAndSetAttributes = createVAOAndSetAttributes;
exports.createVAOFromBufferInfo = createVAOFromBufferInfo;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicateVertices = exports.concatVertices = exports.reorientVertices = exports.reorientPositions = exports.reorientNormals = exports.reorientDirections = exports.makeRandomVertexColors = exports.flattenNormals = exports.deindexVertices = exports.createDiscVertices = exports.createDiscBuffers = exports.createDiscBufferInfo = exports.createTorusVertices = exports.createTorusBuffers = exports.createTorusBufferInfo = exports.createCylinderVertices = exports.createCylinderBuffers = exports.createCylinderBufferInfo = exports.createCresentVertices = exports.createCresentBuffers = exports.createCresentBufferInfo = exports.createXYQuadVertices = exports.createXYQuadBuffers = exports.createXYQuadBufferInfo = exports.createTruncatedConeVertices = exports.createTruncatedConeBuffers = exports.createTruncatedConeBufferInfo = exports.createSphereVertices = exports.createSphereBuffers = exports.createSphereBufferInfo = exports.createPlaneVertices = exports.createPlaneBuffers = exports.createPlaneBufferInfo = exports.createCubeVertices = exports.createCubeBuffers = exports.createCubeBufferInfo = exports.createAugmentedTypedArray = exports.create3DFVertices = exports.create3DFBuffers = exports.create3DFBufferInfo = undefined;

var _attributes = __webpack_require__(5);

var attributes = _interopRequireWildcard(_attributes);

var _helper = __webpack_require__(0);

var helper = _interopRequireWildcard(_helper);

var _typedarrays = __webpack_require__(1);

var typedArrays = _interopRequireWildcard(_typedarrays);

var _m = __webpack_require__(7);

var m4 = _interopRequireWildcard(_m);

var _v = __webpack_require__(4);

var v3 = _interopRequireWildcard(_v);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var getArray = attributes.getArray_; // eslint-disable-line
/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Various functions to make simple primitives
 *
 * note: Most primitive functions come in 3 styles
 *
 * *  `createSomeShapeBufferInfo`
 *
 *    These functions are almost always the functions you want to call. They
 *    create vertices then make WebGLBuffers and create {@link module:twgl.AttribInfo}s
 *    returing a {@link module:twgl.BufferInfo} you can pass to {@link module:twgl.setBuffersAndAttributes}
 *    and {@link module:twgl.drawBufferInfo} etc...
 *
 * *  `createSomeShapeBuffers`
 *
 *    These create WebGLBuffers and put your data in them but nothing else.
 *    It's a shortcut to doing it yourself if you don't want to use
 *    the higher level functions.
 *
 * *  `createSomeShapeVertices`
 *
 *    These just create vertices, no buffers. This allows you to manipulate the vertices
 *    or add more data before generating a {@link module:twgl.BufferInfo}. Once you're finished
 *    manipulating the vertices call {@link module:twgl.createBufferInfoFromArrays}.
 *
 *    example:
 *
 *        const arrays = twgl.primitives.createPlaneArrays(1);
 *        twgl.primitives.reorientVertices(arrays, m4.rotationX(Math.PI * 0.5));
 *        const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
 *
 * @module twgl/primitives
 */
var getNumComponents = attributes.getNumComponents_; // eslint-disable-line

/**
 * Add `push` to a typed array. It just keeps a 'cursor'
 * and allows use to `push` values into the array so we
 * don't have to manually compute offsets
 * @param {TypedArray} typedArray TypedArray to augment
 * @param {number} numComponents number of components.
 */
function augmentTypedArray(typedArray, numComponents) {
  var cursor = 0;
  typedArray.push = function () {
    for (var ii = 0; ii < arguments.length; ++ii) {
      var value = arguments[ii];
      if (value instanceof Array || typedArrays.isArrayBuffer(value)) {
        for (var jj = 0; jj < value.length; ++jj) {
          typedArray[cursor++] = value[jj];
        }
      } else {
        typedArray[cursor++] = value;
      }
    }
  };
  typedArray.reset = function (opt_index) {
    cursor = opt_index || 0;
  };
  typedArray.numComponents = numComponents;
  Object.defineProperty(typedArray, 'numElements', {
    get: function get() {
      return this.length / this.numComponents | 0;
    }
  });
  return typedArray;
}

/**
 * creates a typed array with a `push` function attached
 * so that you can easily *push* values.
 *
 * `push` can take multiple arguments. If an argument is an array each element
 * of the array will be added to the typed array.
 *
 * Example:
 *
 *     const array = createAugmentedTypedArray(3, 2);  // creates a Float32Array with 6 values
 *     array.push(1, 2, 3);
 *     array.push([4, 5, 6]);
 *     // array now contains [1, 2, 3, 4, 5, 6]
 *
 * Also has `numComponents` and `numElements` properties.
 *
 * @param {number} numComponents number of components
 * @param {number} numElements number of elements. The total size of the array will be `numComponents * numElements`.
 * @param {constructor} opt_type A constructor for the type. Default = `Float32Array`.
 * @return {ArrayBufferView} A typed array.
 * @memberOf module:twgl/primitives
 */
function createAugmentedTypedArray(numComponents, numElements, opt_type) {
  var Type = opt_type || Float32Array;
  return augmentTypedArray(new Type(numComponents * numElements), numComponents);
}

function allButIndices(name) {
  return name !== "indices";
}

/**
 * Given indexed vertices creates a new set of vertices unindexed by expanding the indexed vertices.
 * @param {Object.<string, TypedArray>} vertices The indexed vertices to deindex
 * @return {Object.<string, TypedArray>} The deindexed vertices
 * @memberOf module:twgl/primitives
 */
function deindexVertices(vertices) {
  var indices = vertices.indices;
  var newVertices = {};
  var numElements = indices.length;

  function expandToUnindexed(channel) {
    var srcBuffer = vertices[channel];
    var numComponents = srcBuffer.numComponents;
    var dstBuffer = createAugmentedTypedArray(numComponents, numElements, srcBuffer.constructor);
    for (var ii = 0; ii < numElements; ++ii) {
      var ndx = indices[ii];
      var offset = ndx * numComponents;
      for (var jj = 0; jj < numComponents; ++jj) {
        dstBuffer.push(srcBuffer[offset + jj]);
      }
    }
    newVertices[channel] = dstBuffer;
  }

  Object.keys(vertices).filter(allButIndices).forEach(expandToUnindexed);

  return newVertices;
}

/**
 * flattens the normals of deindexed vertices in place.
 * @param {Object.<string, TypedArray>} vertices The deindexed vertices who's normals to flatten
 * @return {Object.<string, TypedArray>} The flattened vertices (same as was passed in)
 * @memberOf module:twgl/primitives
 */
function flattenNormals(vertices) {
  if (vertices.indices) {
    throw "can't flatten normals of indexed vertices. deindex them first";
  }

  var normals = vertices.normal;
  var numNormals = normals.length;
  for (var ii = 0; ii < numNormals; ii += 9) {
    // pull out the 3 normals for this triangle
    var nax = normals[ii + 0];
    var nay = normals[ii + 1];
    var naz = normals[ii + 2];

    var nbx = normals[ii + 3];
    var nby = normals[ii + 4];
    var nbz = normals[ii + 5];

    var ncx = normals[ii + 6];
    var ncy = normals[ii + 7];
    var ncz = normals[ii + 8];

    // add them
    var nx = nax + nbx + ncx;
    var ny = nay + nby + ncy;
    var nz = naz + nbz + ncz;

    // normalize them
    var length = Math.sqrt(nx * nx + ny * ny + nz * nz);

    nx /= length;
    ny /= length;
    nz /= length;

    // copy them back in
    normals[ii + 0] = nx;
    normals[ii + 1] = ny;
    normals[ii + 2] = nz;

    normals[ii + 3] = nx;
    normals[ii + 4] = ny;
    normals[ii + 5] = nz;

    normals[ii + 6] = nx;
    normals[ii + 7] = ny;
    normals[ii + 8] = nz;
  }

  return vertices;
}

function applyFuncToV3Array(array, matrix, fn) {
  var len = array.length;
  var tmp = new Float32Array(3);
  for (var ii = 0; ii < len; ii += 3) {
    fn(matrix, [array[ii], array[ii + 1], array[ii + 2]], tmp);
    array[ii] = tmp[0];
    array[ii + 1] = tmp[1];
    array[ii + 2] = tmp[2];
  }
}

function transformNormal(mi, v, dst) {
  dst = dst || v3.create();
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];

  dst[0] = v0 * mi[0 * 4 + 0] + v1 * mi[0 * 4 + 1] + v2 * mi[0 * 4 + 2];
  dst[1] = v0 * mi[1 * 4 + 0] + v1 * mi[1 * 4 + 1] + v2 * mi[1 * 4 + 2];
  dst[2] = v0 * mi[2 * 4 + 0] + v1 * mi[2 * 4 + 1] + v2 * mi[2 * 4 + 2];

  return dst;
}

/**
 * Reorients directions by the given matrix..
 * @param {number[]|TypedArray} array The array. Assumes value floats per element.
 * @param {Matrix} matrix A matrix to multiply by.
 * @return {number[]|TypedArray} the same array that was passed in
 * @memberOf module:twgl/primitives
 */
function reorientDirections(array, matrix) {
  applyFuncToV3Array(array, matrix, m4.transformDirection);
  return array;
}

/**
 * Reorients normals by the inverse-transpose of the given
 * matrix..
 * @param {number[]|TypedArray} array The array. Assumes value floats per element.
 * @param {Matrix} matrix A matrix to multiply by.
 * @return {number[]|TypedArray} the same array that was passed in
 * @memberOf module:twgl/primitives
 */
function reorientNormals(array, matrix) {
  applyFuncToV3Array(array, m4.inverse(matrix), transformNormal);
  return array;
}

/**
 * Reorients positions by the given matrix. In other words, it
 * multiplies each vertex by the given matrix.
 * @param {number[]|TypedArray} array The array. Assumes value floats per element.
 * @param {Matrix} matrix A matrix to multiply by.
 * @return {number[]|TypedArray} the same array that was passed in
 * @memberOf module:twgl/primitives
 */
function reorientPositions(array, matrix) {
  applyFuncToV3Array(array, matrix, m4.transformPoint);
  return array;
}

/**
 * Reorients arrays by the given matrix. Assumes arrays have
 * names that contains 'pos' could be reoriented as positions,
 * 'binorm' or 'tan' as directions, and 'norm' as normals.
 *
 * @param {Object.<string, (number[]|TypedArray)>} arrays The vertices to reorient
 * @param {Matrix} matrix matrix to reorient by.
 * @return {Object.<string, (number[]|TypedArray)>} same arrays that were passed in.
 * @memberOf module:twgl/primitives
 */
function reorientVertices(arrays, matrix) {
  Object.keys(arrays).forEach(function (name) {
    var array = arrays[name];
    if (name.indexOf("pos") >= 0) {
      reorientPositions(array, matrix);
    } else if (name.indexOf("tan") >= 0 || name.indexOf("binorm") >= 0) {
      reorientDirections(array, matrix);
    } else if (name.indexOf("norm") >= 0) {
      reorientNormals(array, matrix);
    }
  });
  return arrays;
}

/**
 * Creates XY quad BufferInfo
 *
 * The default with no parameters will return a 2x2 quad with values from -1 to +1.
 * If you want a unit quad with that goes from 0 to 1 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0.5, 0.5);
 *
 * If you want a unit quad centered above 0,0 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0, 0.5);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
 * @param {number} [xOffset] the amount to offset the quad in X
 * @param {number} [yOffset] the amount to offset the quad in Y
 * @return {Object.<string, WebGLBuffer>} the created XY Quad BufferInfo
 * @memberOf module:twgl/primitives
 * @function createXYQuadBufferInfo
 */

/**
 * Creates XY quad Buffers
 *
 * The default with no parameters will return a 2x2 quad with values from -1 to +1.
 * If you want a unit quad with that goes from 0 to 1 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0.5, 0.5);
 *
 * If you want a unit quad centered above 0,0 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0, 0.5);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
 * @param {number} [xOffset] the amount to offset the quad in X
 * @param {number} [yOffset] the amount to offset the quad in Y
 * @return {module:twgl.BufferInfo} the created XY Quad buffers
 * @memberOf module:twgl/primitives
 * @function createXYQuadBuffers
 */

/**
 * Creates XY quad vertices
 *
 * The default with no parameters will return a 2x2 quad with values from -1 to +1.
 * If you want a unit quad with that goes from 0 to 1 you'd call it with
 *
 *     twgl.primitives.createXYQuadVertices(1, 0.5, 0.5);
 *
 * If you want a unit quad centered above 0,0 you'd call it with
 *
 *     twgl.primitives.createXYQuadVertices(1, 0, 0.5);
 *
 * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
 * @param {number} [xOffset] the amount to offset the quad in X
 * @param {number} [yOffset] the amount to offset the quad in Y
 * @return {Object.<string, TypedArray> the created XY Quad vertices
 * @memberOf module:twgl/primitives
 */
function createXYQuadVertices(size, xOffset, yOffset) {
  size = size || 2;
  xOffset = xOffset || 0;
  yOffset = yOffset || 0;
  size *= 0.5;
  return {
    position: {
      numComponents: 2,
      data: [xOffset + -1 * size, yOffset + -1 * size, xOffset + 1 * size, yOffset + -1 * size, xOffset + -1 * size, yOffset + 1 * size, xOffset + 1 * size, yOffset + 1 * size]
    },
    normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    texcoord: [0, 0, 1, 0, 0, 1, 1, 1],
    indices: [0, 1, 2, 2, 1, 3]
  };
}

/**
 * Creates XZ plane BufferInfo.
 *
 * The created plane has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [width] Width of the plane. Default = 1
 * @param {number} [depth] Depth of the plane. Default = 1
 * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
 * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
 * @param {Matrix4} [matrix] A matrix by which to multiply all the vertices.
 * @return {@module:twgl.BufferInfo} The created plane BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createPlaneBufferInfo
 */

/**
 * Creates XZ plane buffers.
 *
 * The created plane has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [width] Width of the plane. Default = 1
 * @param {number} [depth] Depth of the plane. Default = 1
 * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
 * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
 * @param {Matrix4} [matrix] A matrix by which to multiply all the vertices.
 * @return {Object.<string, WebGLBuffer>} The created plane buffers.
 * @memberOf module:twgl/primitives
 * @function createPlaneBuffers
 */

/**
 * Creates XZ plane vertices.
 *
 * The created plane has position, normal, and texcoord data
 *
 * @param {number} [width] Width of the plane. Default = 1
 * @param {number} [depth] Depth of the plane. Default = 1
 * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
 * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
 * @param {Matrix4} [matrix] A matrix by which to multiply all the vertices.
 * @return {Object.<string, TypedArray>} The created plane vertices.
 * @memberOf module:twgl/primitives
 */
function createPlaneVertices(width, depth, subdivisionsWidth, subdivisionsDepth, matrix) {
  width = width || 1;
  depth = depth || 1;
  subdivisionsWidth = subdivisionsWidth || 1;
  subdivisionsDepth = subdivisionsDepth || 1;
  matrix = matrix || m4.identity();

  var numVertices = (subdivisionsWidth + 1) * (subdivisionsDepth + 1);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);

  for (var z = 0; z <= subdivisionsDepth; z++) {
    for (var x = 0; x <= subdivisionsWidth; x++) {
      var u = x / subdivisionsWidth;
      var v = z / subdivisionsDepth;
      positions.push(width * u - width * 0.5, 0, depth * v - depth * 0.5);
      normals.push(0, 1, 0);
      texcoords.push(u, v);
    }
  }

  var numVertsAcross = subdivisionsWidth + 1;
  var indices = createAugmentedTypedArray(3, subdivisionsWidth * subdivisionsDepth * 2, Uint16Array);

  for (var _z = 0; _z < subdivisionsDepth; _z++) {
    // eslint-disable-line
    for (var _x = 0; _x < subdivisionsWidth; _x++) {
      // eslint-disable-line
      // Make triangle 1 of quad.
      indices.push((_z + 0) * numVertsAcross + _x, (_z + 1) * numVertsAcross + _x, (_z + 0) * numVertsAcross + _x + 1);

      // Make triangle 2 of quad.
      indices.push((_z + 1) * numVertsAcross + _x, (_z + 1) * numVertsAcross + _x + 1, (_z + 0) * numVertsAcross + _x + 1);
    }
  }

  var arrays = reorientVertices({
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  }, matrix);
  return arrays;
}

/**
 * Creates sphere BufferInfo.
 *
 * The created sphere has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of the sphere.
 * @param {number} subdivisionsAxis number of steps around the sphere.
 * @param {number} subdivisionsHeight number of vertically on the sphere.
 * @param {number} [opt_startLatitudeInRadians] where to start the
 *     top of the sphere. Default = 0.
 * @param {number} [opt_endLatitudeInRadians] Where to end the
 *     bottom of the sphere. Default = Math.PI.
 * @param {number} [opt_startLongitudeInRadians] where to start
 *     wrapping the sphere. Default = 0.
 * @param {number} [opt_endLongitudeInRadians] where to end
 *     wrapping the sphere. Default = 2 * Math.PI.
 * @return {module:twgl.BufferInfo} The created sphere BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createSphereBufferInfo
 */

/**
 * Creates sphere buffers.
 *
 * The created sphere has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of the sphere.
 * @param {number} subdivisionsAxis number of steps around the sphere.
 * @param {number} subdivisionsHeight number of vertically on the sphere.
 * @param {number} [opt_startLatitudeInRadians] where to start the
 *     top of the sphere. Default = 0.
 * @param {number} [opt_endLatitudeInRadians] Where to end the
 *     bottom of the sphere. Default = Math.PI.
 * @param {number} [opt_startLongitudeInRadians] where to start
 *     wrapping the sphere. Default = 0.
 * @param {number} [opt_endLongitudeInRadians] where to end
 *     wrapping the sphere. Default = 2 * Math.PI.
 * @return {Object.<string, WebGLBuffer>} The created sphere buffers.
 * @memberOf module:twgl/primitives
 * @function createSphereBuffers
 */

/**
 * Creates sphere vertices.
 *
 * The created sphere has position, normal, and texcoord data
 *
 * @param {number} radius radius of the sphere.
 * @param {number} subdivisionsAxis number of steps around the sphere.
 * @param {number} subdivisionsHeight number of vertically on the sphere.
 * @param {number} [opt_startLatitudeInRadians] where to start the
 *     top of the sphere. Default = 0.
 * @param {number} [opt_endLatitudeInRadians] Where to end the
 *     bottom of the sphere. Default = Math.PI.
 * @param {number} [opt_startLongitudeInRadians] where to start
 *     wrapping the sphere. Default = 0.
 * @param {number} [opt_endLongitudeInRadians] where to end
 *     wrapping the sphere. Default = 2 * Math.PI.
 * @return {Object.<string, TypedArray>} The created sphere vertices.
 * @memberOf module:twgl/primitives
 */
function createSphereVertices(radius, subdivisionsAxis, subdivisionsHeight, opt_startLatitudeInRadians, opt_endLatitudeInRadians, opt_startLongitudeInRadians, opt_endLongitudeInRadians) {
  if (subdivisionsAxis <= 0 || subdivisionsHeight <= 0) {
    throw Error('subdivisionAxis and subdivisionHeight must be > 0');
  }

  opt_startLatitudeInRadians = opt_startLatitudeInRadians || 0;
  opt_endLatitudeInRadians = opt_endLatitudeInRadians || Math.PI;
  opt_startLongitudeInRadians = opt_startLongitudeInRadians || 0;
  opt_endLongitudeInRadians = opt_endLongitudeInRadians || Math.PI * 2;

  var latRange = opt_endLatitudeInRadians - opt_startLatitudeInRadians;
  var longRange = opt_endLongitudeInRadians - opt_startLongitudeInRadians;

  // We are going to generate our sphere by iterating through its
  // spherical coordinates and generating 2 triangles for each quad on a
  // ring of the sphere.
  var numVertices = (subdivisionsAxis + 1) * (subdivisionsHeight + 1);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);

  // Generate the individual vertices in our vertex buffer.
  for (var y = 0; y <= subdivisionsHeight; y++) {
    for (var x = 0; x <= subdivisionsAxis; x++) {
      // Generate a vertex based on its spherical coordinates
      var u = x / subdivisionsAxis;
      var v = y / subdivisionsHeight;
      var theta = longRange * u;
      var phi = latRange * v;
      var sinTheta = Math.sin(theta);
      var cosTheta = Math.cos(theta);
      var sinPhi = Math.sin(phi);
      var cosPhi = Math.cos(phi);
      var ux = cosTheta * sinPhi;
      var uy = cosPhi;
      var uz = sinTheta * sinPhi;
      positions.push(radius * ux, radius * uy, radius * uz);
      normals.push(ux, uy, uz);
      texcoords.push(1 - u, v);
    }
  }

  var numVertsAround = subdivisionsAxis + 1;
  var indices = createAugmentedTypedArray(3, subdivisionsAxis * subdivisionsHeight * 2, Uint16Array);
  for (var _x2 = 0; _x2 < subdivisionsAxis; _x2++) {
    // eslint-disable-line
    for (var _y = 0; _y < subdivisionsHeight; _y++) {
      // eslint-disable-line
      // Make triangle 1 of quad.
      indices.push((_y + 0) * numVertsAround + _x2, (_y + 0) * numVertsAround + _x2 + 1, (_y + 1) * numVertsAround + _x2);

      // Make triangle 2 of quad.
      indices.push((_y + 1) * numVertsAround + _x2, (_y + 0) * numVertsAround + _x2 + 1, (_y + 1) * numVertsAround + _x2 + 1);
    }
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}

/**
 * Array of the indices of corners of each face of a cube.
 * @type {Array.<number[]>}
 */
var CUBE_FACE_INDICES = [[3, 7, 5, 1], // right
[6, 2, 0, 4], // left
[6, 7, 3, 2], // ??
[0, 1, 5, 4], // ??
[7, 6, 4, 5], // front
[2, 3, 1, 0]];

/**
 * Creates a BufferInfo for a cube.
 *
 * The cube is created around the origin. (-size / 2, size / 2).
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] width, height and depth of the cube.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCubeBufferInfo
 */

/**
 * Creates the buffers and indices for a cube.
 *
 * The cube is created around the origin. (-size / 2, size / 2).
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] width, height and depth of the cube.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCubeBuffers
 */

/**
 * Creates the vertices and indices for a cube.
 *
 * The cube is created around the origin. (-size / 2, size / 2).
 *
 * @param {number} [size] width, height and depth of the cube.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */
function createCubeVertices(size) {
  size = size || 1;
  var k = size / 2;

  var cornerVertices = [[-k, -k, -k], [+k, -k, -k], [-k, +k, -k], [+k, +k, -k], [-k, -k, +k], [+k, -k, +k], [-k, +k, +k], [+k, +k, +k]];

  var faceNormals = [[+1, +0, +0], [-1, +0, +0], [+0, +1, +0], [+0, -1, +0], [+0, +0, +1], [+0, +0, -1]];

  var uvCoords = [[1, 0], [0, 0], [0, 1], [1, 1]];

  var numVertices = 6 * 4;
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);
  var indices = createAugmentedTypedArray(3, 6 * 2, Uint16Array);

  for (var f = 0; f < 6; ++f) {
    var faceIndices = CUBE_FACE_INDICES[f];
    for (var v = 0; v < 4; ++v) {
      var position = cornerVertices[faceIndices[v]];
      var normal = faceNormals[f];
      var uv = uvCoords[v];

      // Each face needs all four vertices because the normals and texture
      // coordinates are not all the same.
      positions.push(position);
      normals.push(normal);
      texcoords.push(uv);
    }
    // Two triangles make a square face.
    var offset = 4 * f;
    indices.push(offset + 0, offset + 1, offset + 2);
    indices.push(offset + 0, offset + 2, offset + 3);
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}

/**
 * Creates a BufferInfo for a truncated cone, which is like a cylinder
 * except that it has different top and bottom radii. A truncated cone
 * can also be used to create cylinders and regular cones. The
 * truncated cone will be created centered about the origin, with the
 * y axis as its vertical axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} bottomRadius Bottom radius of truncated cone.
 * @param {number} topRadius Top radius of truncated cone.
 * @param {number} height Height of truncated cone.
 * @param {number} radialSubdivisions The number of subdivisions around the
 *     truncated cone.
 * @param {number} verticalSubdivisions The number of subdivisions down the
 *     truncated cone.
 * @param {boolean} [opt_topCap] Create top cap. Default = true.
 * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
 * @return {module:twgl.BufferInfo} The created cone BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createTruncatedConeBufferInfo
 */

/**
 * Creates buffers for a truncated cone, which is like a cylinder
 * except that it has different top and bottom radii. A truncated cone
 * can also be used to create cylinders and regular cones. The
 * truncated cone will be created centered about the origin, with the
 * y axis as its vertical axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} bottomRadius Bottom radius of truncated cone.
 * @param {number} topRadius Top radius of truncated cone.
 * @param {number} height Height of truncated cone.
 * @param {number} radialSubdivisions The number of subdivisions around the
 *     truncated cone.
 * @param {number} verticalSubdivisions The number of subdivisions down the
 *     truncated cone.
 * @param {boolean} [opt_topCap] Create top cap. Default = true.
 * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, WebGLBuffer>} The created cone buffers.
 * @memberOf module:twgl/primitives
 * @function createTruncatedConeBuffers
 */

/**
 * Creates vertices for a truncated cone, which is like a cylinder
 * except that it has different top and bottom radii. A truncated cone
 * can also be used to create cylinders and regular cones. The
 * truncated cone will be created centered about the origin, with the
 * y axis as its vertical axis. .
 *
 * @param {number} bottomRadius Bottom radius of truncated cone.
 * @param {number} topRadius Top radius of truncated cone.
 * @param {number} height Height of truncated cone.
 * @param {number} radialSubdivisions The number of subdivisions around the
 *     truncated cone.
 * @param {number} verticalSubdivisions The number of subdivisions down the
 *     truncated cone.
 * @param {boolean} [opt_topCap] Create top cap. Default = true.
 * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, TypedArray>} The created cone vertices.
 * @memberOf module:twgl/primitives
 */
function createTruncatedConeVertices(bottomRadius, topRadius, height, radialSubdivisions, verticalSubdivisions, opt_topCap, opt_bottomCap) {
  if (radialSubdivisions < 3) {
    throw Error('radialSubdivisions must be 3 or greater');
  }

  if (verticalSubdivisions < 1) {
    throw Error('verticalSubdivisions must be 1 or greater');
  }

  var topCap = opt_topCap === undefined ? true : opt_topCap;
  var bottomCap = opt_bottomCap === undefined ? true : opt_bottomCap;

  var extra = (topCap ? 2 : 0) + (bottomCap ? 2 : 0);

  var numVertices = (radialSubdivisions + 1) * (verticalSubdivisions + 1 + extra);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);
  var indices = createAugmentedTypedArray(3, radialSubdivisions * (verticalSubdivisions + extra) * 2, Uint16Array);

  var vertsAroundEdge = radialSubdivisions + 1;

  // The slant of the cone is constant across its surface
  var slant = Math.atan2(bottomRadius - topRadius, height);
  var cosSlant = Math.cos(slant);
  var sinSlant = Math.sin(slant);

  var start = topCap ? -2 : 0;
  var end = verticalSubdivisions + (bottomCap ? 2 : 0);

  for (var yy = start; yy <= end; ++yy) {
    var v = yy / verticalSubdivisions;
    var y = height * v;
    var ringRadius = void 0;
    if (yy < 0) {
      y = 0;
      v = 1;
      ringRadius = bottomRadius;
    } else if (yy > verticalSubdivisions) {
      y = height;
      v = 1;
      ringRadius = topRadius;
    } else {
      ringRadius = bottomRadius + (topRadius - bottomRadius) * (yy / verticalSubdivisions);
    }
    if (yy === -2 || yy === verticalSubdivisions + 2) {
      ringRadius = 0;
      v = 0;
    }
    y -= height / 2;
    for (var ii = 0; ii < vertsAroundEdge; ++ii) {
      var sin = Math.sin(ii * Math.PI * 2 / radialSubdivisions);
      var cos = Math.cos(ii * Math.PI * 2 / radialSubdivisions);
      positions.push(sin * ringRadius, y, cos * ringRadius);
      normals.push(yy < 0 || yy > verticalSubdivisions ? 0 : sin * cosSlant, yy < 0 ? -1 : yy > verticalSubdivisions ? 1 : sinSlant, yy < 0 || yy > verticalSubdivisions ? 0 : cos * cosSlant);
      texcoords.push(ii / radialSubdivisions, 1 - v);
    }
  }

  for (var _yy = 0; _yy < verticalSubdivisions + extra; ++_yy) {
    // eslint-disable-line
    for (var _ii = 0; _ii < radialSubdivisions; ++_ii) {
      // eslint-disable-line
      indices.push(vertsAroundEdge * (_yy + 0) + 0 + _ii, vertsAroundEdge * (_yy + 0) + 1 + _ii, vertsAroundEdge * (_yy + 1) + 1 + _ii);
      indices.push(vertsAroundEdge * (_yy + 0) + 0 + _ii, vertsAroundEdge * (_yy + 1) + 1 + _ii, vertsAroundEdge * (_yy + 1) + 0 + _ii);
    }
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}

/**
 * Expands RLE data
 * @param {number[]} rleData data in format of run-length, x, y, z, run-length, x, y, z
 * @param {number[]} [padding] value to add each entry with.
 * @return {number[]} the expanded rleData
 */
function expandRLEData(rleData, padding) {
  padding = padding || [];
  var data = [];
  for (var ii = 0; ii < rleData.length; ii += 4) {
    var runLength = rleData[ii];
    var element = rleData.slice(ii + 1, ii + 4);
    element.push.apply(element, padding);
    for (var jj = 0; jj < runLength; ++jj) {
      data.push.apply(data, element);
    }
  }
  return data;
}

/**
 * Creates 3D 'F' BufferInfo.
 * An 'F' is useful because you can easily tell which way it is oriented.
 * The created 'F' has position, normal, texcoord, and color buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function create3DFBufferInfo
 */

/**
 * Creates 3D 'F' buffers.
 * An 'F' is useful because you can easily tell which way it is oriented.
 * The created 'F' has position, normal, texcoord, and color buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function create3DFBuffers
 */

/**
 * Creates 3D 'F' vertices.
 * An 'F' is useful because you can easily tell which way it is oriented.
 * The created 'F' has position, normal, texcoord, and color arrays.
 *
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */
function create3DFVertices() {

  var positions = [
  // left column front
  0, 0, 0, 0, 150, 0, 30, 0, 0, 0, 150, 0, 30, 150, 0, 30, 0, 0,

  // top rung front
  30, 0, 0, 30, 30, 0, 100, 0, 0, 30, 30, 0, 100, 30, 0, 100, 0, 0,

  // middle rung front
  30, 60, 0, 30, 90, 0, 67, 60, 0, 30, 90, 0, 67, 90, 0, 67, 60, 0,

  // left column back
  0, 0, 30, 30, 0, 30, 0, 150, 30, 0, 150, 30, 30, 0, 30, 30, 150, 30,

  // top rung back
  30, 0, 30, 100, 0, 30, 30, 30, 30, 30, 30, 30, 100, 0, 30, 100, 30, 30,

  // middle rung back
  30, 60, 30, 67, 60, 30, 30, 90, 30, 30, 90, 30, 67, 60, 30, 67, 90, 30,

  // top
  0, 0, 0, 100, 0, 0, 100, 0, 30, 0, 0, 0, 100, 0, 30, 0, 0, 30,

  // top rung front
  100, 0, 0, 100, 30, 0, 100, 30, 30, 100, 0, 0, 100, 30, 30, 100, 0, 30,

  // under top rung
  30, 30, 0, 30, 30, 30, 100, 30, 30, 30, 30, 0, 100, 30, 30, 100, 30, 0,

  // between top rung and middle
  30, 30, 0, 30, 60, 30, 30, 30, 30, 30, 30, 0, 30, 60, 0, 30, 60, 30,

  // top of middle rung
  30, 60, 0, 67, 60, 30, 30, 60, 30, 30, 60, 0, 67, 60, 0, 67, 60, 30,

  // front of middle rung
  67, 60, 0, 67, 90, 30, 67, 60, 30, 67, 60, 0, 67, 90, 0, 67, 90, 30,

  // bottom of middle rung.
  30, 90, 0, 30, 90, 30, 67, 90, 30, 30, 90, 0, 67, 90, 30, 67, 90, 0,

  // front of bottom
  30, 90, 0, 30, 150, 30, 30, 90, 30, 30, 90, 0, 30, 150, 0, 30, 150, 30,

  // bottom
  0, 150, 0, 0, 150, 30, 30, 150, 30, 0, 150, 0, 30, 150, 30, 30, 150, 0,

  // left side
  0, 0, 0, 0, 0, 30, 0, 150, 30, 0, 0, 0, 0, 150, 30, 0, 150, 0];

  var texcoords = [
  // left column front
  0.22, 0.19, 0.22, 0.79, 0.34, 0.19, 0.22, 0.79, 0.34, 0.79, 0.34, 0.19,

  // top rung front
  0.34, 0.19, 0.34, 0.31, 0.62, 0.19, 0.34, 0.31, 0.62, 0.31, 0.62, 0.19,

  // middle rung front
  0.34, 0.43, 0.34, 0.55, 0.49, 0.43, 0.34, 0.55, 0.49, 0.55, 0.49, 0.43,

  // left column back
  0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1,

  // top rung back
  0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1,

  // middle rung back
  0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1,

  // top
  0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1,

  // top rung front
  0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1,

  // under top rung
  0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0,

  // between top rung and middle
  0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1,

  // top of middle rung
  0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1,

  // front of middle rung
  0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1,

  // bottom of middle rung.
  0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0,

  // front of bottom
  0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1,

  // bottom
  0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0,

  // left side
  0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0];

  var normals = expandRLEData([
  // left column front
  // top rung front
  // middle rung front
  18, 0, 0, 1,

  // left column back
  // top rung back
  // middle rung back
  18, 0, 0, -1,

  // top
  6, 0, 1, 0,

  // top rung front
  6, 1, 0, 0,

  // under top rung
  6, 0, -1, 0,

  // between top rung and middle
  6, 1, 0, 0,

  // top of middle rung
  6, 0, 1, 0,

  // front of middle rung
  6, 1, 0, 0,

  // bottom of middle rung.
  6, 0, -1, 0,

  // front of bottom
  6, 1, 0, 0,

  // bottom
  6, 0, -1, 0,

  // left side
  6, -1, 0, 0]);

  var colors = expandRLEData([
  // left column front
  // top rung front
  // middle rung front
  18, 200, 70, 120,

  // left column back
  // top rung back
  // middle rung back
  18, 80, 70, 200,

  // top
  6, 70, 200, 210,

  // top rung front
  6, 200, 200, 70,

  // under top rung
  6, 210, 100, 70,

  // between top rung and middle
  6, 210, 160, 70,

  // top of middle rung
  6, 70, 180, 210,

  // front of middle rung
  6, 100, 70, 210,

  // bottom of middle rung.
  6, 76, 210, 100,

  // front of bottom
  6, 140, 210, 80,

  // bottom
  6, 90, 130, 110,

  // left side
  6, 160, 160, 220], [255]);

  var numVerts = positions.length / 3;

  var arrays = {
    position: createAugmentedTypedArray(3, numVerts),
    texcoord: createAugmentedTypedArray(2, numVerts),
    normal: createAugmentedTypedArray(3, numVerts),
    color: createAugmentedTypedArray(4, numVerts, Uint8Array),
    indices: createAugmentedTypedArray(3, numVerts / 3, Uint16Array)
  };

  arrays.position.push(positions);
  arrays.texcoord.push(texcoords);
  arrays.normal.push(normals);
  arrays.color.push(colors);

  for (var ii = 0; ii < numVerts; ++ii) {
    arrays.indices.push(ii);
  }

  return arrays;
}

/**
 * Creates cresent BufferInfo.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} verticalRadius The vertical radius of the cresent.
 * @param {number} outerRadius The outer radius of the cresent.
 * @param {number} innerRadius The inner radius of the cresent.
 * @param {number} thickness The thickness of the cresent.
 * @param {number} subdivisionsDown number of steps around the cresent.
 * @param {number} subdivisionsThick number of vertically on the cresent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCresentBufferInfo
 */

/**
 * Creates cresent buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} verticalRadius The vertical radius of the cresent.
 * @param {number} outerRadius The outer radius of the cresent.
 * @param {number} innerRadius The inner radius of the cresent.
 * @param {number} thickness The thickness of the cresent.
 * @param {number} subdivisionsDown number of steps around the cresent.
 * @param {number} subdivisionsThick number of vertically on the cresent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCresentBuffers
 */

/**
 * Creates cresent vertices.
 *
 * @param {number} verticalRadius The vertical radius of the cresent.
 * @param {number} outerRadius The outer radius of the cresent.
 * @param {number} innerRadius The inner radius of the cresent.
 * @param {number} thickness The thickness of the cresent.
 * @param {number} subdivisionsDown number of steps around the cresent.
 * @param {number} subdivisionsThick number of vertically on the cresent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */
function createCresentVertices(verticalRadius, outerRadius, innerRadius, thickness, subdivisionsDown, startOffset, endOffset) {
  if (subdivisionsDown <= 0) {
    throw Error('subdivisionDown must be > 0');
  }

  startOffset = startOffset || 0;
  endOffset = endOffset || 1;

  var subdivisionsThick = 2;

  var offsetRange = endOffset - startOffset;
  var numVertices = (subdivisionsDown + 1) * 2 * (2 + subdivisionsThick);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);

  function lerp(a, b, s) {
    return a + (b - a) * s;
  }

  function createArc(arcRadius, x, normalMult, normalAdd, uMult, uAdd) {
    for (var z = 0; z <= subdivisionsDown; z++) {
      var uBack = x / (subdivisionsThick - 1);
      var v = z / subdivisionsDown;
      var xBack = (uBack - 0.5) * 2;
      var angle = (startOffset + v * offsetRange) * Math.PI;
      var s = Math.sin(angle);
      var c = Math.cos(angle);
      var radius = lerp(verticalRadius, arcRadius, s);
      var px = xBack * thickness;
      var py = c * verticalRadius;
      var pz = s * radius;
      positions.push(px, py, pz);
      var n = v3.add(v3.multiply([0, s, c], normalMult), normalAdd);
      normals.push(n);
      texcoords.push(uBack * uMult + uAdd, v);
    }
  }

  // Generate the individual vertices in our vertex buffer.
  for (var x = 0; x < subdivisionsThick; x++) {
    var uBack = (x / (subdivisionsThick - 1) - 0.5) * 2;
    createArc(outerRadius, x, [1, 1, 1], [0, 0, 0], 1, 0);
    createArc(outerRadius, x, [0, 0, 0], [uBack, 0, 0], 0, 0);
    createArc(innerRadius, x, [1, 1, 1], [0, 0, 0], 1, 0);
    createArc(innerRadius, x, [0, 0, 0], [uBack, 0, 0], 0, 1);
  }

  // Do outer surface.
  var indices = createAugmentedTypedArray(3, subdivisionsDown * 2 * (2 + subdivisionsThick), Uint16Array);

  function createSurface(leftArcOffset, rightArcOffset) {
    for (var z = 0; z < subdivisionsDown; ++z) {
      // Make triangle 1 of quad.
      indices.push(leftArcOffset + z + 0, leftArcOffset + z + 1, rightArcOffset + z + 0);

      // Make triangle 2 of quad.
      indices.push(leftArcOffset + z + 1, rightArcOffset + z + 1, rightArcOffset + z + 0);
    }
  }

  var numVerticesDown = subdivisionsDown + 1;
  // front
  createSurface(numVerticesDown * 0, numVerticesDown * 4);
  // right
  createSurface(numVerticesDown * 5, numVerticesDown * 7);
  // back
  createSurface(numVerticesDown * 6, numVerticesDown * 2);
  // left
  createSurface(numVerticesDown * 3, numVerticesDown * 1);

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}

/**
 * Creates cylinder BufferInfo. The cylinder will be created around the origin
 * along the y-axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of cylinder.
 * @param {number} height Height of cylinder.
 * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
 * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
 * @param {boolean} [topCap] Create top cap. Default = true.
 * @param {boolean} [bottomCap] Create bottom cap. Default = true.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCylinderBufferInfo
 */

/**
 * Creates cylinder buffers. The cylinder will be created around the origin
 * along the y-axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of cylinder.
 * @param {number} height Height of cylinder.
 * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
 * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
 * @param {boolean} [topCap] Create top cap. Default = true.
 * @param {boolean} [bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCylinderBuffers
 */

/**
 * Creates cylinder vertices. The cylinder will be created around the origin
 * along the y-axis.
 *
 * @param {number} radius Radius of cylinder.
 * @param {number} height Height of cylinder.
 * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
 * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
 * @param {boolean} [topCap] Create top cap. Default = true.
 * @param {boolean} [bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */
function createCylinderVertices(radius, height, radialSubdivisions, verticalSubdivisions, topCap, bottomCap) {
  return createTruncatedConeVertices(radius, radius, height, radialSubdivisions, verticalSubdivisions, topCap, bottomCap);
}

/**
 * Creates BufferInfo for a torus
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of center of torus circle.
 * @param {number} thickness radius of torus ring.
 * @param {number} radialSubdivisions The number of subdivisions around the torus.
 * @param {number} bodySubdivisions The number of subdivisions around the body torus.
 * @param {boolean} [startAngle] start angle in radians. Default = 0.
 * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createTorusBufferInfo
 */

/**
 * Creates buffers for a torus
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of center of torus circle.
 * @param {number} thickness radius of torus ring.
 * @param {number} radialSubdivisions The number of subdivisions around the torus.
 * @param {number} bodySubdivisions The number of subdivisions around the body torus.
 * @param {boolean} [startAngle] start angle in radians. Default = 0.
 * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createTorusBuffers
 */

/**
 * Creates vertices for a torus
 *
 * @param {number} radius radius of center of torus circle.
 * @param {number} thickness radius of torus ring.
 * @param {number} radialSubdivisions The number of subdivisions around the torus.
 * @param {number} bodySubdivisions The number of subdivisions around the body torus.
 * @param {boolean} [startAngle] start angle in radians. Default = 0.
 * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */
function createTorusVertices(radius, thickness, radialSubdivisions, bodySubdivisions, startAngle, endAngle) {
  if (radialSubdivisions < 3) {
    throw Error('radialSubdivisions must be 3 or greater');
  }

  if (bodySubdivisions < 3) {
    throw Error('verticalSubdivisions must be 3 or greater');
  }

  startAngle = startAngle || 0;
  endAngle = endAngle || Math.PI * 2;
  var range = endAngle - startAngle;

  var radialParts = radialSubdivisions + 1;
  var bodyParts = bodySubdivisions + 1;
  var numVertices = radialParts * bodyParts;
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);
  var indices = createAugmentedTypedArray(3, radialSubdivisions * bodySubdivisions * 2, Uint16Array);

  for (var slice = 0; slice < bodyParts; ++slice) {
    var v = slice / bodySubdivisions;
    var sliceAngle = v * Math.PI * 2;
    var sliceSin = Math.sin(sliceAngle);
    var ringRadius = radius + sliceSin * thickness;
    var ny = Math.cos(sliceAngle);
    var y = ny * thickness;
    for (var ring = 0; ring < radialParts; ++ring) {
      var u = ring / radialSubdivisions;
      var ringAngle = startAngle + u * range;
      var xSin = Math.sin(ringAngle);
      var zCos = Math.cos(ringAngle);
      var x = xSin * ringRadius;
      var z = zCos * ringRadius;
      var nx = xSin * sliceSin;
      var nz = zCos * sliceSin;
      positions.push(x, y, z);
      normals.push(nx, ny, nz);
      texcoords.push(u, 1 - v);
    }
  }

  for (var _slice = 0; _slice < bodySubdivisions; ++_slice) {
    // eslint-disable-line
    for (var _ring = 0; _ring < radialSubdivisions; ++_ring) {
      // eslint-disable-line
      var nextRingIndex = 1 + _ring;
      var nextSliceIndex = 1 + _slice;
      indices.push(radialParts * _slice + _ring, radialParts * nextSliceIndex + _ring, radialParts * _slice + nextRingIndex);
      indices.push(radialParts * nextSliceIndex + _ring, radialParts * nextSliceIndex + nextRingIndex, radialParts * _slice + nextRingIndex);
    }
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}

/**
 * Creates a disc BufferInfo. The disc will be in the xz plane, centered at
 * the origin. When creating, at least 3 divisions, or pie
 * pieces, need to be specified, otherwise the triangles making
 * up the disc will be degenerate. You can also specify the
 * number of radial pieces `stacks`. A value of 1 for
 * stacks will give you a simple disc of pie pieces.  If you
 * want to create an annulus you can set `innerRadius` to a
 * value > 0. Finally, `stackPower` allows you to have the widths
 * increase or decrease as you move away from the center. This
 * is particularly useful when using the disc as a ground plane
 * with a fixed camera such that you don't need the resolution
 * of small triangles near the perimeter. For example, a value
 * of 2 will produce stacks whose ouside radius increases with
 * the square of the stack index. A value of 1 will give uniform
 * stacks.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of the ground plane.
 * @param {number} divisions Number of triangles in the ground plane (at least 3).
 * @param {number} [stacks] Number of radial divisions (default=1).
 * @param {number} [innerRadius] Default 0.
 * @param {number} [stackPower] Power to raise stack size to for decreasing width.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createDiscBufferInfo
 */

/**
 * Creates disc buffers. The disc will be in the xz plane, centered at
 * the origin. When creating, at least 3 divisions, or pie
 * pieces, need to be specified, otherwise the triangles making
 * up the disc will be degenerate. You can also specify the
 * number of radial pieces `stacks`. A value of 1 for
 * stacks will give you a simple disc of pie pieces.  If you
 * want to create an annulus you can set `innerRadius` to a
 * value > 0. Finally, `stackPower` allows you to have the widths
 * increase or decrease as you move away from the center. This
 * is particularly useful when using the disc as a ground plane
 * with a fixed camera such that you don't need the resolution
 * of small triangles near the perimeter. For example, a value
 * of 2 will produce stacks whose ouside radius increases with
 * the square of the stack index. A value of 1 will give uniform
 * stacks.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of the ground plane.
 * @param {number} divisions Number of triangles in the ground plane (at least 3).
 * @param {number} [stacks] Number of radial divisions (default=1).
 * @param {number} [innerRadius] Default 0.
 * @param {number} [stackPower] Power to raise stack size to for decreasing width.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createDiscBuffers
 */

/**
 * Creates disc vertices. The disc will be in the xz plane, centered at
 * the origin. When creating, at least 3 divisions, or pie
 * pieces, need to be specified, otherwise the triangles making
 * up the disc will be degenerate. You can also specify the
 * number of radial pieces `stacks`. A value of 1 for
 * stacks will give you a simple disc of pie pieces.  If you
 * want to create an annulus you can set `innerRadius` to a
 * value > 0. Finally, `stackPower` allows you to have the widths
 * increase or decrease as you move away from the center. This
 * is particularly useful when using the disc as a ground plane
 * with a fixed camera such that you don't need the resolution
 * of small triangles near the perimeter. For example, a value
 * of 2 will produce stacks whose ouside radius increases with
 * the square of the stack index. A value of 1 will give uniform
 * stacks.
 *
 * @param {number} radius Radius of the ground plane.
 * @param {number} divisions Number of triangles in the ground plane (at least 3).
 * @param {number} [stacks] Number of radial divisions (default=1).
 * @param {number} [innerRadius] Default 0.
 * @param {number} [stackPower] Power to raise stack size to for decreasing width.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */
function createDiscVertices(radius, divisions, stacks, innerRadius, stackPower) {
  if (divisions < 3) {
    throw Error('divisions must be at least 3');
  }

  stacks = stacks ? stacks : 1;
  stackPower = stackPower ? stackPower : 1;
  innerRadius = innerRadius ? innerRadius : 0;

  // Note: We don't share the center vertex because that would
  // mess up texture coordinates.
  var numVertices = (divisions + 1) * (stacks + 1);

  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);
  var indices = createAugmentedTypedArray(3, stacks * divisions * 2, Uint16Array);

  var firstIndex = 0;
  var radiusSpan = radius - innerRadius;
  var pointsPerStack = divisions + 1;

  // Build the disk one stack at a time.
  for (var stack = 0; stack <= stacks; ++stack) {
    var stackRadius = innerRadius + radiusSpan * Math.pow(stack / stacks, stackPower);

    for (var i = 0; i <= divisions; ++i) {
      var theta = 2.0 * Math.PI * i / divisions;
      var x = stackRadius * Math.cos(theta);
      var z = stackRadius * Math.sin(theta);

      positions.push(x, 0, z);
      normals.push(0, 1, 0);
      texcoords.push(1 - i / divisions, stack / stacks);
      if (stack > 0 && i !== divisions) {
        // a, b, c and d are the indices of the vertices of a quad.  unless
        // the current stack is the one closest to the center, in which case
        // the vertices a and b connect to the center vertex.
        var a = firstIndex + (i + 1);
        var b = firstIndex + i;
        var c = firstIndex + i - pointsPerStack;
        var d = firstIndex + (i + 1) - pointsPerStack;

        // Make a quad of the vertices a, b, c, d.
        indices.push(a, b, c);
        indices.push(a, c, d);
      }
    }

    firstIndex += divisions + 1;
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}

/**
 * creates a random integer between 0 and range - 1 inclusive.
 * @param {number} range
 * @return {number} random value between 0 and range - 1 inclusive.
 */
function randInt(range) {
  return Math.random() * range | 0;
}

/**
 * Used to supply random colors
 * @callback RandomColorFunc
 * @param {number} ndx index of triangle/quad if unindexed or index of vertex if indexed
 * @param {number} channel 0 = red, 1 = green, 2 = blue, 3 = alpha
 * @return {number} a number from 0 to 255
 * @memberOf module:twgl/primitives
 */

/**
 * @typedef {Object} RandomVerticesOptions
 * @property {number} [vertsPerColor] Defaults to 3 for non-indexed vertices
 * @property {module:twgl/primitives.RandomColorFunc} [rand] A function to generate random numbers
 * @memberOf module:twgl/primitives
 */

/**
 * Creates an augmentedTypedArray of random vertex colors.
 * If the vertices are indexed (have an indices array) then will
 * just make random colors. Otherwise assumes they are triangles
 * and makes one random color for every 3 vertices.
 * @param {Object.<string, augmentedTypedArray>} vertices Vertices as returned from one of the createXXXVertices functions.
 * @param {module:twgl/primitives.RandomVerticesOptions} [options] options.
 * @return {Object.<string, augmentedTypedArray>} same vertices as passed in with `color` added.
 * @memberOf module:twgl/primitives
 */
function makeRandomVertexColors(vertices, options) {
  options = options || {};
  var numElements = vertices.position.numElements;
  var vcolors = createAugmentedTypedArray(4, numElements, Uint8Array);
  var rand = options.rand || function (ndx, channel) {
    return channel < 3 ? randInt(256) : 255;
  };
  vertices.color = vcolors;
  if (vertices.indices) {
    // just make random colors if index
    for (var ii = 0; ii < numElements; ++ii) {
      vcolors.push(rand(ii, 0), rand(ii, 1), rand(ii, 2), rand(ii, 3));
    }
  } else {
    // make random colors per triangle
    var numVertsPerColor = options.vertsPerColor || 3;
    var numSets = numElements / numVertsPerColor;
    for (var _ii2 = 0; _ii2 < numSets; ++_ii2) {
      // eslint-disable-line
      var color = [rand(_ii2, 0), rand(_ii2, 1), rand(_ii2, 2), rand(_ii2, 3)];
      for (var jj = 0; jj < numVertsPerColor; ++jj) {
        vcolors.push(color);
      }
    }
  }
  return vertices;
}

/**
 * creates a function that calls fn to create vertices and then
 * creates a buffers for them
 */
function createBufferFunc(fn) {
  return function (gl) {
    var arrays = fn.apply(this, Array.prototype.slice.call(arguments, 1));
    return attributes.createBuffersFromArrays(gl, arrays);
  };
}

/**
 * creates a function that calls fn to create vertices and then
 * creates a bufferInfo object for them
 */
function createBufferInfoFunc(fn) {
  return function (gl) {
    var arrays = fn.apply(null, Array.prototype.slice.call(arguments, 1));
    return attributes.createBufferInfoFromArrays(gl, arrays);
  };
}

var arraySpecPropertyNames = ["numComponents", "size", "type", "normalize", "stride", "offset", "attrib", "name", "attribName"];

/**
 * Copy elements from one array to another
 *
 * @param {Array|TypedArray} src source array
 * @param {Array|TypedArray} dst dest array
 * @param {number} dstNdx index in dest to copy src
 * @param {number} [offset] offset to add to copied values
 */
function copyElements(src, dst, dstNdx, offset) {
  offset = offset || 0;
  var length = src.length;
  for (var ii = 0; ii < length; ++ii) {
    dst[dstNdx + ii] = src[ii] + offset;
  }
}

/**
 * Creates an array of the same time
 *
 * @param {(number[]|ArrayBufferView|module:twgl.FullArraySpec)} srcArray array who's type to copy
 * @param {number} length size of new array
 * @return {(number[]|ArrayBufferView|module:twgl.FullArraySpec)} array with same type as srcArray
 */
function createArrayOfSameType(srcArray, length) {
  var arraySrc = getArray(srcArray);
  var newArray = new arraySrc.constructor(length);
  var newArraySpec = newArray;
  // If it appears to have been augmented make new one augemented
  if (arraySrc.numComponents && arraySrc.numElements) {
    augmentTypedArray(newArray, arraySrc.numComponents);
  }
  // If it was a fullspec make new one a fullspec
  if (srcArray.data) {
    newArraySpec = {
      data: newArray
    };
    helper.copyNamedProperties(arraySpecPropertyNames, srcArray, newArraySpec);
  }
  return newArraySpec;
}

/**
 * Concatinates sets of vertices
 *
 * Assumes the vertices match in composition. For example
 * if one set of vertices has positions, normals, and indices
 * all sets of vertices must have positions, normals, and indices
 * and of the same type.
 *
 * Example:
 *
 *      const cubeVertices = twgl.primtiives.createCubeVertices(2);
 *      const sphereVertices = twgl.primitives.createSphereVertices(1, 10, 10);
 *      // move the sphere 2 units up
 *      twgl.primitives.reorientVertices(
 *          sphereVertices, twgl.m4.translation([0, 2, 0]));
 *      // merge the sphere with the cube
 *      const cubeSphereVertices = twgl.primitives.concatVertices(
 *          [cubeVertices, sphereVertices]);
 *      // turn them into WebGL buffers and attrib data
 *      const bufferInfo = twgl.createBufferInfoFromArrays(gl, cubeSphereVertices);
 *
 * @param {module:twgl.Arrays[]} arrays Array of arrays of vertices
 * @return {module:twgl.Arrays} The concatinated vertices.
 * @memberOf module:twgl/primitives
 */
function concatVertices(arrayOfArrays) {
  var names = {};
  var baseName = void 0;
  // get names of all arrays.
  // and numElements for each set of vertices

  var _loop = function _loop(ii) {
    var arrays = arrayOfArrays[ii];
    Object.keys(arrays).forEach(function (name) {
      // eslint-disable-line
      if (!names[name]) {
        names[name] = [];
      }
      if (!baseName && name !== 'indices') {
        baseName = name;
      }
      var arrayInfo = arrays[name];
      var numComponents = getNumComponents(arrayInfo, name);
      var array = getArray(arrayInfo);
      var numElements = array.length / numComponents;
      names[name].push(numElements);
    });
  };

  for (var ii = 0; ii < arrayOfArrays.length; ++ii) {
    _loop(ii);
  }

  // compute length of combined array
  // and return one for reference
  function getLengthOfCombinedArrays(name) {
    var length = 0;
    var arraySpec = void 0;
    for (var ii = 0; ii < arrayOfArrays.length; ++ii) {
      var _arrays = arrayOfArrays[ii];
      var arrayInfo = _arrays[name];
      var array = getArray(arrayInfo);
      length += array.length;
      if (!arraySpec || arrayInfo.data) {
        arraySpec = arrayInfo;
      }
    }
    return {
      length: length,
      spec: arraySpec
    };
  }

  function copyArraysToNewArray(name, base, newArray) {
    var baseIndex = 0;
    var offset = 0;
    for (var ii = 0; ii < arrayOfArrays.length; ++ii) {
      var _arrays2 = arrayOfArrays[ii];
      var arrayInfo = _arrays2[name];
      var array = getArray(arrayInfo);
      if (name === 'indices') {
        copyElements(array, newArray, offset, baseIndex);
        baseIndex += base[ii];
      } else {
        copyElements(array, newArray, offset);
      }
      offset += array.length;
    }
  }

  var base = names[baseName];

  var newArrays = {};
  Object.keys(names).forEach(function (name) {
    var info = getLengthOfCombinedArrays(name);
    var newArraySpec = createArrayOfSameType(info.spec, info.length);
    copyArraysToNewArray(name, base, getArray(newArraySpec));
    newArrays[name] = newArraySpec;
  });
  return newArrays;
}

/**
 * Creates a duplicate set of vertices
 *
 * This is useful for calling reorientVertices when you
 * also want to keep the original available
 *
 * @param {module:twgl.Arrays} arrays of vertices
 * @return {module:twgl.Arrays} The dupilicated vertices.
 * @memberOf module:twgl/primitives
 */
function duplicateVertices(arrays) {
  var newArrays = {};
  Object.keys(arrays).forEach(function (name) {
    var arraySpec = arrays[name];
    var srcArray = getArray(arraySpec);
    var newArraySpec = createArrayOfSameType(arraySpec, srcArray.length);
    copyElements(srcArray, getArray(newArraySpec), 0);
    newArrays[name] = newArraySpec;
  });
  return newArrays;
}

var create3DFBufferInfo = createBufferInfoFunc(create3DFVertices);
var create3DFBuffers = createBufferFunc(create3DFVertices);
var createCubeBufferInfo = createBufferInfoFunc(createCubeVertices);
var createCubeBuffers = createBufferFunc(createCubeVertices);
var createPlaneBufferInfo = createBufferInfoFunc(createPlaneVertices);
var createPlaneBuffers = createBufferFunc(createPlaneVertices);
var createSphereBufferInfo = createBufferInfoFunc(createSphereVertices);
var createSphereBuffers = createBufferFunc(createSphereVertices);
var createTruncatedConeBufferInfo = createBufferInfoFunc(createTruncatedConeVertices);
var createTruncatedConeBuffers = createBufferFunc(createTruncatedConeVertices);
var createXYQuadBufferInfo = createBufferInfoFunc(createXYQuadVertices);
var createXYQuadBuffers = createBufferFunc(createXYQuadVertices);
var createCresentBufferInfo = createBufferInfoFunc(createCresentVertices);
var createCresentBuffers = createBufferFunc(createCresentVertices);
var createCylinderBufferInfo = createBufferInfoFunc(createCylinderVertices);
var createCylinderBuffers = createBufferFunc(createCylinderVertices);
var createTorusBufferInfo = createBufferInfoFunc(createTorusVertices);
var createTorusBuffers = createBufferFunc(createTorusVertices);
var createDiscBufferInfo = createBufferInfoFunc(createDiscVertices);
var createDiscBuffers = createBufferFunc(createDiscVertices);

exports.create3DFBufferInfo = create3DFBufferInfo;
exports.create3DFBuffers = create3DFBuffers;
exports.create3DFVertices = create3DFVertices;
exports.createAugmentedTypedArray = createAugmentedTypedArray;
exports.createCubeBufferInfo = createCubeBufferInfo;
exports.createCubeBuffers = createCubeBuffers;
exports.createCubeVertices = createCubeVertices;
exports.createPlaneBufferInfo = createPlaneBufferInfo;
exports.createPlaneBuffers = createPlaneBuffers;
exports.createPlaneVertices = createPlaneVertices;
exports.createSphereBufferInfo = createSphereBufferInfo;
exports.createSphereBuffers = createSphereBuffers;
exports.createSphereVertices = createSphereVertices;
exports.createTruncatedConeBufferInfo = createTruncatedConeBufferInfo;
exports.createTruncatedConeBuffers = createTruncatedConeBuffers;
exports.createTruncatedConeVertices = createTruncatedConeVertices;
exports.createXYQuadBufferInfo = createXYQuadBufferInfo;
exports.createXYQuadBuffers = createXYQuadBuffers;
exports.createXYQuadVertices = createXYQuadVertices;
exports.createCresentBufferInfo = createCresentBufferInfo;
exports.createCresentBuffers = createCresentBuffers;
exports.createCresentVertices = createCresentVertices;
exports.createCylinderBufferInfo = createCylinderBufferInfo;
exports.createCylinderBuffers = createCylinderBuffers;
exports.createCylinderVertices = createCylinderVertices;
exports.createTorusBufferInfo = createTorusBufferInfo;
exports.createTorusBuffers = createTorusBuffers;
exports.createTorusVertices = createTorusVertices;
exports.createDiscBufferInfo = createDiscBufferInfo;
exports.createDiscBuffers = createDiscBuffers;
exports.createDiscVertices = createDiscVertices;
exports.deindexVertices = deindexVertices;
exports.flattenNormals = flattenNormals;
exports.makeRandomVertexColors = makeRandomVertexColors;
exports.reorientDirections = reorientDirections;
exports.reorientNormals = reorientNormals;
exports.reorientPositions = reorientPositions;
exports.reorientVertices = reorientVertices;
exports.concatVertices = concatVertices;
exports.duplicateVertices = duplicateVertices;

/***/ })
/******/ ]);
});
},{}],3:[function(require,module,exports){
"use strict";

var glsl = require("glslify");
var twgl = require("twgl.js");

var vertexShader = glsl(["#define GLSLIFY 1\nattribute vec4 position;\n\nvoid main() {\n  gl_Position = position;\n}"]);
var fragmentShader = glsl(["precision mediump float;\n#define GLSLIFY 1\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nvec3 color(vec3 thingToColor, vec3 theColor) {\n\n    return thingToColor + theColor;\n}\n\nvoid main() {\n     vec2 st = gl_FragCoord.xy/u_resolution;\n    vec3 pos = vec3(st.xy, u_time);\n    vec3 rgb = vec3(0.1, cos(u_time), 0.5);\n    gl_FragColor = vec4(color(vec3(snoise(pos),snoise(pos),snoise(pos)), rgb), 1.0);\n}"]);

var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
var gl = canvas.getContext("webgl");

var programInfo = twgl.createProgramInfo(gl, [vertexShader, fragmentShader]);
var mouse = [0, 0];

var arrays = {
  position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0]
};
var bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

function render(time) {
  twgl.resizeCanvasToDisplaySize(gl.canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  var uniforms = {
    u_time: time * 0.001,
    u_resolution: [gl.canvas.width, gl.canvas.height],
    u_mouse: mouse
  };

  gl.useProgram(programInfo.program);
  twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
  twgl.setUniforms(programInfo, uniforms);
  twgl.drawBufferInfo(gl, bufferInfo);

  requestAnimationFrame(render);
}
requestAnimationFrame(render);

document.addEventListener("mousemove", function (e) {
  mouse[0] = e.pageX;
  mouse[1] = e.pageY;
});

},{"glslify":1,"twgl.js":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZ2xzbGlmeS9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3R3Z2wuanMvZGlzdC80LngvdHdnbC1mdWxsLmpzIiwic3JjXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2poU0E7O0FBRUEsSUFBTSxPQUFPLFFBQVEsU0FBUixDQUFiO0FBQ0EsSUFBTSxPQUFPLFFBQVEsU0FBUixDQUFiOztBQUVBLElBQU0sZUFBZSxLQUFLLENBQUMsNEZBQUQsQ0FBTCxDQUFyQjtBQUNBLElBQU0saUJBQWlCLEtBQUssQ0FBQyx1MEdBQUQsQ0FBTCxDQUF2Qjs7QUFFQSxJQUFNLFNBQVMsU0FBUyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQSxTQUFTLElBQVQsQ0FBYyxXQUFkLENBQTBCLE1BQTFCO0FBQ0EsSUFBTSxLQUFLLE9BQU8sVUFBUCxDQUFrQixPQUFsQixDQUFYOztBQUVBLElBQU0sY0FBYyxLQUFLLGlCQUFMLENBQXVCLEVBQXZCLEVBQTJCLENBQUMsWUFBRCxFQUFlLGNBQWYsQ0FBM0IsQ0FBcEI7QUFDQSxJQUFJLFFBQVEsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFaOztBQUVBLElBQU0sU0FBUztBQUNiLFlBQVUsQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFDLENBQU4sRUFBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQUMsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBQyxDQUF2QixFQUEwQixDQUExQixFQUE2QixDQUE3QixFQUFnQyxDQUFDLENBQWpDLEVBQW9DLENBQXBDLEVBQXVDLENBQXZDLEVBQTBDLENBQTFDLEVBQTZDLENBQUMsQ0FBOUMsRUFBaUQsQ0FBakQsRUFBb0QsQ0FBcEQsRUFBdUQsQ0FBdkQsRUFBMEQsQ0FBMUQ7QUFERyxDQUFmO0FBR0EsSUFBTSxhQUFhLEtBQUssMEJBQUwsQ0FBZ0MsRUFBaEMsRUFBb0MsTUFBcEMsQ0FBbkI7O0FBRUEsU0FBUyxNQUFULENBQWdCLElBQWhCLEVBQXNCO0FBQ3BCLE9BQUsseUJBQUwsQ0FBK0IsR0FBRyxNQUFsQztBQUNBLEtBQUcsUUFBSCxDQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCLEdBQUcsTUFBSCxDQUFVLEtBQTVCLEVBQW1DLEdBQUcsTUFBSCxDQUFVLE1BQTdDOztBQUVBLE1BQU0sV0FBVztBQUNmLFlBQVEsT0FBTyxLQURBO0FBRWYsa0JBQWMsQ0FBQyxHQUFHLE1BQUgsQ0FBVSxLQUFYLEVBQWtCLEdBQUcsTUFBSCxDQUFVLE1BQTVCLENBRkM7QUFHZixhQUFTO0FBSE0sR0FBakI7O0FBTUEsS0FBRyxVQUFILENBQWMsWUFBWSxPQUExQjtBQUNBLE9BQUssdUJBQUwsQ0FBNkIsRUFBN0IsRUFBaUMsV0FBakMsRUFBOEMsVUFBOUM7QUFDQSxPQUFLLFdBQUwsQ0FBaUIsV0FBakIsRUFBOEIsUUFBOUI7QUFDQSxPQUFLLGNBQUwsQ0FBb0IsRUFBcEIsRUFBd0IsVUFBeEI7O0FBRUEsd0JBQXNCLE1BQXRCO0FBQ0Q7QUFDRCxzQkFBc0IsTUFBdEI7O0FBRUEsU0FBUyxnQkFBVCxDQUEwQixXQUExQixFQUF1QyxhQUFLO0FBQzFDLFFBQU0sQ0FBTixJQUFXLEVBQUUsS0FBYjtBQUNBLFFBQU0sQ0FBTixJQUFXLEVBQUUsS0FBYjtBQUNELENBSEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzdHJpbmdzKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5ncyA9PT0gJ3N0cmluZycpIHN0cmluZ3MgPSBbc3RyaW5nc11cbiAgdmFyIGV4cHJzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsMSlcbiAgdmFyIHBhcnRzID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aC0xOyBpKyspIHtcbiAgICBwYXJ0cy5wdXNoKHN0cmluZ3NbaV0sIGV4cHJzW2ldIHx8ICcnKVxuICB9XG4gIHBhcnRzLnB1c2goc3RyaW5nc1tpXSlcbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG4iLCIvKiFcbiAqIEBsaWNlbnNlIHR3Z2wuanMgNC4yLjAgQ29weXJpZ2h0IChjKSAyMDE1LCBHcmVnZyBUYXZhcmVzIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBBdmFpbGFibGUgdmlhIHRoZSBNSVQgbGljZW5zZS5cbiAqIHNlZTogaHR0cDovL2dpdGh1Yi5jb20vZ3JlZ2dtYW4vdHdnbC5qcyBmb3IgZGV0YWlsc1xuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0d2dsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInR3Z2xcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vKlxuICogQ29weXJpZ2h0IDIwMTUsIEdyZWdnIFRhdmFyZXMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuICogbWV0OlxuICpcbiAqICAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4gKiBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4gKiBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4gKiBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4gKiBkaXN0cmlidXRpb24uXG4gKiAgICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdyZWdnIFRhdmFyZXMuIG5vciB0aGUgbmFtZXMgb2YgaGlzXG4gKiBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuICogdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4gKiBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4gKiBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1JcbiAqIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4gKiBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbiAqIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1RcbiAqIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4gKiBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4gKiAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0VcbiAqIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuLyoqXG4gKiBDb3B5IG5hbWVkIHByb3BlcnRpZXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBuYW1lcyBuYW1lcyBvZiBwcm9wZXJ0aWVzIHRvIGNvcHlcbiAqIEBwYXJhbSB7b2JqZWN0fSBzcmMgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge29iamVjdH0gZHN0IG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG9cbiAqL1xuZnVuY3Rpb24gY29weU5hbWVkUHJvcGVydGllcyhuYW1lcywgc3JjLCBkc3QpIHtcbiAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciB2YWx1ZSA9IHNyY1tuYW1lXTtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZHN0W25hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBmcm9tIHNvdXJjZSB0byBkZXN0IG9ubHkgaWYgYSBtYXRjaGluZyBrZXkgaXMgaW4gZGVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsID8+fSBzcmMgdGhlIHNvdXJjZVxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgPz59IGRzdCB0aGUgZGVzdFxuICovXG5mdW5jdGlvbiBjb3B5RXhpc3RpbmdQcm9wZXJ0aWVzKHNyYywgZHN0KSB7XG4gIE9iamVjdC5rZXlzKGRzdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGRzdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHNyYy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBkc3Rba2V5XSA9IHNyY1trZXldO1xuICAgIH1cbiAgfSk7XG59XG5cbnZhciBlcnJvciA9IHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLmVycm9yICYmIHR5cGVvZiB3aW5kb3cuY29uc29sZS5lcnJvciA9PT0gXCJmdW5jdGlvblwiID8gd2luZG93LmNvbnNvbGUuZXJyb3IuYmluZCh3aW5kb3cuY29uc29sZSkgOiBmdW5jdGlvbiAoKSB7fTtcblxudmFyIHdhcm4gPSB3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS53YXJuICYmIHR5cGVvZiB3aW5kb3cuY29uc29sZS53YXJuID09PSBcImZ1bmN0aW9uXCIgPyB3aW5kb3cuY29uc29sZS53YXJuLmJpbmQod2luZG93LmNvbnNvbGUpIDogZnVuY3Rpb24gKCkge307XG5cbmV4cG9ydHMuY29weUV4aXN0aW5nUHJvcGVydGllcyA9IGNvcHlFeGlzdGluZ1Byb3BlcnRpZXM7XG5leHBvcnRzLmNvcHlOYW1lZFByb3BlcnRpZXMgPSBjb3B5TmFtZWRQcm9wZXJ0aWVzO1xuZXhwb3J0cy5lcnJvciA9IGVycm9yO1xuZXhwb3J0cy53YXJuID0gd2FybjtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vKlxuICogQ29weXJpZ2h0IDIwMTUsIEdyZWdnIFRhdmFyZXMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuICogbWV0OlxuICpcbiAqICAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4gKiBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4gKiBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4gKiBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4gKiBkaXN0cmlidXRpb24uXG4gKiAgICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdyZWdnIFRhdmFyZXMuIG5vciB0aGUgbmFtZXMgb2YgaGlzXG4gKiBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuICogdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4gKiBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4gKiBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1JcbiAqIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4gKiBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbiAqIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1RcbiAqIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4gKiBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4gKiAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0VcbiAqIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuLyoqXG4gKiBMb3cgbGV2ZWwgc2hhZGVyIHR5cGVkIGFycmF5IHJlbGF0ZWQgZnVuY3Rpb25zXG4gKlxuICogWW91IHNob3VsZCBnZW5lcmFsbHkgbm90IG5lZWQgdG8gdXNlIHRoZXNlIGZ1bmN0aW9ucy4gVGhleSBhcmUgcHJvdmlkZWRcbiAqIGZvciB0aG9zZSBjYXNlcyB3aGVyZSB5b3UncmUgZG9pbmcgc29tZXRoaW5nIG91dCBvZiB0aGUgb3JkaW5hcnlcbiAqIGFuZCB5b3UgbmVlZCBsb3dlciBsZXZlbCBhY2Nlc3MuXG4gKlxuICogRm9yIGJhY2t3YXJkIGNvbXBhdGliaWx5IHRoZXkgYXJlIGF2YWlsYWJsZSBhdCBib3RoIGB0d2dsLnR5cGVkQXJyYXlgIGFuZCBgdHdnbGBcbiAqIGl0c2VsZlxuICpcbiAqIFNlZSB7QGxpbmsgbW9kdWxlOnR3Z2x9IGZvciBjb3JlIGZ1bmN0aW9uc1xuICpcbiAqIEBtb2R1bGUgdHdnbC90eXBlZEFycmF5XG4gKi9cblxuLy8gbWFrZSBzdXJlIHdlIGRvbid0IHNlZSBhIGdsb2JhbCBnbFxudmFyIGdsID0gdW5kZWZpbmVkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbi8qIERhdGFUeXBlICovXG52YXIgQllURSA9IDB4MTQwMDtcbnZhciBVTlNJR05FRF9CWVRFID0gMHgxNDAxO1xudmFyIFNIT1JUID0gMHgxNDAyO1xudmFyIFVOU0lHTkVEX1NIT1JUID0gMHgxNDAzO1xudmFyIElOVCA9IDB4MTQwNDtcbnZhciBVTlNJR05FRF9JTlQgPSAweDE0MDU7XG52YXIgRkxPQVQgPSAweDE0MDY7XG52YXIgVU5TSUdORURfU0hPUlRfNF80XzRfNCA9IDB4ODAzMztcbnZhciBVTlNJR05FRF9TSE9SVF81XzVfNV8xID0gMHg4MDM0O1xudmFyIFVOU0lHTkVEX1NIT1JUXzVfNl81ID0gMHg4MzYzO1xudmFyIEhBTEZfRkxPQVQgPSAweDE0MEI7XG52YXIgVU5TSUdORURfSU5UXzJfMTBfMTBfMTBfUkVWID0gMHg4MzY4O1xudmFyIFVOU0lHTkVEX0lOVF8xMEZfMTFGXzExRl9SRVYgPSAweDhDM0I7XG52YXIgVU5TSUdORURfSU5UXzVfOV85XzlfUkVWID0gMHg4QzNFO1xudmFyIEZMT0FUXzMyX1VOU0lHTkVEX0lOVF8yNF84X1JFViA9IDB4OERBRDtcbnZhciBVTlNJR05FRF9JTlRfMjRfOCA9IDB4ODRGQTtcblxudmFyIGdsVHlwZVRvVHlwZWRBcnJheSA9IHt9O1xue1xuICB2YXIgdHQgPSBnbFR5cGVUb1R5cGVkQXJyYXk7XG4gIHR0W0JZVEVdID0gSW50OEFycmF5O1xuICB0dFtVTlNJR05FRF9CWVRFXSA9IFVpbnQ4QXJyYXk7XG4gIHR0W1NIT1JUXSA9IEludDE2QXJyYXk7XG4gIHR0W1VOU0lHTkVEX1NIT1JUXSA9IFVpbnQxNkFycmF5O1xuICB0dFtJTlRdID0gSW50MzJBcnJheTtcbiAgdHRbVU5TSUdORURfSU5UXSA9IFVpbnQzMkFycmF5O1xuICB0dFtGTE9BVF0gPSBGbG9hdDMyQXJyYXk7XG4gIHR0W1VOU0lHTkVEX1NIT1JUXzRfNF80XzRdID0gVWludDE2QXJyYXk7XG4gIHR0W1VOU0lHTkVEX1NIT1JUXzVfNV81XzFdID0gVWludDE2QXJyYXk7XG4gIHR0W1VOU0lHTkVEX1NIT1JUXzVfNl81XSA9IFVpbnQxNkFycmF5O1xuICB0dFtIQUxGX0ZMT0FUXSA9IFVpbnQxNkFycmF5O1xuICB0dFtVTlNJR05FRF9JTlRfMl8xMF8xMF8xMF9SRVZdID0gVWludDMyQXJyYXk7XG4gIHR0W1VOU0lHTkVEX0lOVF8xMEZfMTFGXzExRl9SRVZdID0gVWludDMyQXJyYXk7XG4gIHR0W1VOU0lHTkVEX0lOVF81XzlfOV85X1JFVl0gPSBVaW50MzJBcnJheTtcbiAgdHRbRkxPQVRfMzJfVU5TSUdORURfSU5UXzI0XzhfUkVWXSA9IFVpbnQzMkFycmF5O1xuICB0dFtVTlNJR05FRF9JTlRfMjRfOF0gPSBVaW50MzJBcnJheTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIEdMIHR5cGUgZm9yIGEgdHlwZWRBcnJheVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcnxBcnJheUJ1ZmZlclZpZXd9IHR5cGVkQXJyYXkgYSB0eXBlZEFycmF5XG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBHTCB0eXBlIGZvciBhcnJheS4gRm9yIGV4YW1wbGUgcGFzcyBpbiBhbiBgSW50OEFycmF5YCBhbmQgYGdsLkJZVEVgIHdpbGxcbiAqICAgYmUgcmV0dXJuZWQuIFBhc3MgaW4gYSBgVWludDMyQXJyYXlgIGFuZCBgZ2wuVU5TSUdORURfSU5UYCB3aWxsIGJlIHJldHVybmVkXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdHlwZWRBcnJheVxuICovXG5mdW5jdGlvbiBnZXRHTFR5cGVGb3JUeXBlZEFycmF5KHR5cGVkQXJyYXkpIHtcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBJbnQ4QXJyYXkpIHtcbiAgICByZXR1cm4gQllURTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgIHJldHVybiBVTlNJR05FRF9CWVRFO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSkge1xuICAgIHJldHVybiBVTlNJR05FRF9CWVRFO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBJbnQxNkFycmF5KSB7XG4gICAgcmV0dXJuIFNIT1JUO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBVaW50MTZBcnJheSkge1xuICAgIHJldHVybiBVTlNJR05FRF9TSE9SVDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgSW50MzJBcnJheSkge1xuICAgIHJldHVybiBJTlQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQzMkFycmF5KSB7XG4gICAgcmV0dXJuIFVOU0lHTkVEX0lOVDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgRmxvYXQzMkFycmF5KSB7XG4gICAgcmV0dXJuIEZMT0FUO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgdGhyb3cgXCJ1bnN1cHBvcnRlZCB0eXBlZCBhcnJheSB0eXBlXCI7XG59XG5cbi8qKlxuICogR2V0IHRoZSBHTCB0eXBlIGZvciBhIHR5cGVkQXJyYXkgdHlwZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlclZpZXdUeXBlfSB0eXBlZEFycmF5VHlwZSBhIHR5cGVkQXJyYXkgY29uc3RydWN0b3JcbiAqIEByZXR1cm4ge251bWJlcn0gdGhlIEdMIHR5cGUgZm9yIHR5cGUuIEZvciBleGFtcGxlIHBhc3MgaW4gYEludDhBcnJheWAgYW5kIGBnbC5CWVRFYCB3aWxsXG4gKiAgIGJlIHJldHVybmVkLiBQYXNzIGluIGBVaW50MzJBcnJheWAgYW5kIGBnbC5VTlNJR05FRF9JTlRgIHdpbGwgYmUgcmV0dXJuZWRcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90eXBlZEFycmF5XG4gKi9cbmZ1bmN0aW9uIGdldEdMVHlwZUZvclR5cGVkQXJyYXlUeXBlKHR5cGVkQXJyYXlUeXBlKSB7XG4gIGlmICh0eXBlZEFycmF5VHlwZSA9PT0gSW50OEFycmF5KSB7XG4gICAgcmV0dXJuIEJZVEU7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheVR5cGUgPT09IFVpbnQ4QXJyYXkpIHtcbiAgICByZXR1cm4gVU5TSUdORURfQllURTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5VHlwZSA9PT0gVWludDhDbGFtcGVkQXJyYXkpIHtcbiAgICByZXR1cm4gVU5TSUdORURfQllURTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5VHlwZSA9PT0gSW50MTZBcnJheSkge1xuICAgIHJldHVybiBTSE9SVDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5VHlwZSA9PT0gVWludDE2QXJyYXkpIHtcbiAgICByZXR1cm4gVU5TSUdORURfU0hPUlQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheVR5cGUgPT09IEludDMyQXJyYXkpIHtcbiAgICByZXR1cm4gSU5UO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXlUeXBlID09PSBVaW50MzJBcnJheSkge1xuICAgIHJldHVybiBVTlNJR05FRF9JTlQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheVR5cGUgPT09IEZsb2F0MzJBcnJheSkge1xuICAgIHJldHVybiBGTE9BVDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIHRocm93IFwidW5zdXBwb3J0ZWQgdHlwZWQgYXJyYXkgdHlwZVwiO1xufVxuXG4vKipcbiAqIEdldCB0aGUgdHlwZWQgYXJyYXkgY29uc3RydWN0b3IgZm9yIGEgZ2l2ZW4gR0wgdHlwZVxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgdGhlIEdMIHR5cGUuIChlZzogYGdsLlVOU0lHTkVEX0lOVGApXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn0gdGhlIGNvbnN0cnVjdG9yIGZvciBhIHRoZSBjb3JyZXNwb25kaW5nIHR5cGVkIGFycmF5LiAoZWcuIGBVaW50MzJBcnJheWApLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3R5cGVkQXJyYXlcbiAqL1xuZnVuY3Rpb24gZ2V0VHlwZWRBcnJheVR5cGVGb3JHTFR5cGUodHlwZSkge1xuICB2YXIgQ1RPUiA9IGdsVHlwZVRvVHlwZWRBcnJheVt0eXBlXTtcbiAgaWYgKCFDVE9SKSB7XG4gICAgdGhyb3cgXCJ1bmtub3duIGdsIHR5cGVcIjtcbiAgfVxuICByZXR1cm4gQ1RPUjtcbn1cblxudmFyIGlzQXJyYXlCdWZmZXIgPSB3aW5kb3cuU2hhcmVkQXJyYXlCdWZmZXIgPyBmdW5jdGlvbiBpc0FycmF5QnVmZmVyT3JTaGFyZWRBcnJheUJ1ZmZlcihhKSB7XG4gIHJldHVybiBhICYmIGEuYnVmZmVyICYmIChhLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IGEuYnVmZmVyIGluc3RhbmNlb2Ygd2luZG93LlNoYXJlZEFycmF5QnVmZmVyKTtcbn0gOiBmdW5jdGlvbiBpc0FycmF5QnVmZmVyKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5idWZmZXIgJiYgYS5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcjtcbn07XG5cbmV4cG9ydHMuZ2V0R0xUeXBlRm9yVHlwZWRBcnJheSA9IGdldEdMVHlwZUZvclR5cGVkQXJyYXk7XG5leHBvcnRzLmdldEdMVHlwZUZvclR5cGVkQXJyYXlUeXBlID0gZ2V0R0xUeXBlRm9yVHlwZWRBcnJheVR5cGU7XG5leHBvcnRzLmdldFR5cGVkQXJyYXlUeXBlRm9yR0xUeXBlID0gZ2V0VHlwZWRBcnJheVR5cGVGb3JHTFR5cGU7XG5leHBvcnRzLmlzQXJyYXlCdWZmZXIgPSBpc0FycmF5QnVmZmVyO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYmluZFVuaWZvcm1CbG9jayA9IGV4cG9ydHMuc2V0QmxvY2tVbmlmb3JtcyA9IGV4cG9ydHMuc2V0VW5pZm9ybUJsb2NrID0gZXhwb3J0cy5zZXRVbmlmb3JtcyA9IGV4cG9ydHMuc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXMgPSBleHBvcnRzLnNldEF0dHJpYnV0ZXMgPSBleHBvcnRzLmJpbmRUcmFuc2Zvcm1GZWVkYmFja0luZm8gPSBleHBvcnRzLmNyZWF0ZVRyYW5zZm9ybUZlZWRiYWNrSW5mbyA9IGV4cG9ydHMuY3JlYXRlVHJhbnNmb3JtRmVlZGJhY2sgPSBleHBvcnRzLmNyZWF0ZVVuaWZvcm1CbG9ja0luZm8gPSBleHBvcnRzLmNyZWF0ZVVuaWZvcm1CbG9ja0luZm9Gcm9tUHJvZ3JhbSA9IGV4cG9ydHMuY3JlYXRlVW5pZm9ybUJsb2NrU3BlY0Zyb21Qcm9ncmFtID0gZXhwb3J0cy5jcmVhdGVVbmlmb3JtU2V0dGVycyA9IGV4cG9ydHMuY3JlYXRlUHJvZ3JhbUluZm9Gcm9tUHJvZ3JhbSA9IGV4cG9ydHMuY3JlYXRlUHJvZ3JhbUluZm8gPSBleHBvcnRzLmNyZWF0ZVByb2dyYW1Gcm9tU291cmNlcyA9IGV4cG9ydHMuY3JlYXRlUHJvZ3JhbUZyb21TY3JpcHRzID0gZXhwb3J0cy5jcmVhdGVQcm9ncmFtID0gZXhwb3J0cy5jcmVhdGVBdHRyaWJ1dGVTZXR0ZXJzID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxudmFyIHV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWxzKTtcblxudmFyIF9oZWxwZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgaGVscGVyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hlbHBlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8qKlxuICogTG93IGxldmVsIHNoYWRlciBwcm9ncmFtIHJlbGF0ZWQgZnVuY3Rpb25zXG4gKlxuICogWW91IHNob3VsZCBnZW5lcmFsbHkgbm90IG5lZWQgdG8gdXNlIHRoZXNlIGZ1bmN0aW9ucy4gVGhleSBhcmUgcHJvdmlkZWRcbiAqIGZvciB0aG9zZSBjYXNlcyB3aGVyZSB5b3UncmUgZG9pbmcgc29tZXRoaW5nIG91dCBvZiB0aGUgb3JkaW5hcnlcbiAqIGFuZCB5b3UgbmVlZCBsb3dlciBsZXZlbCBhY2Nlc3MuXG4gKlxuICogRm9yIGJhY2t3YXJkIGNvbXBhdGliaWx5IHRoZXkgYXJlIGF2YWlsYWJsZSBhdCBib3RoIGB0d2dsLnByb2dyYW1zYCBhbmQgYHR3Z2xgXG4gKiBpdHNlbGZcbiAqXG4gKiBTZWUge0BsaW5rIG1vZHVsZTp0d2dsfSBmb3IgY29yZSBmdW5jdGlvbnNcbiAqXG4gKiBAbW9kdWxlIHR3Z2wvcHJvZ3JhbXNcbiAqL1xuXG4vKlxuICogQ29weXJpZ2h0IDIwMTUsIEdyZWdnIFRhdmFyZXMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuICogbWV0OlxuICpcbiAqICAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4gKiBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4gKiBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4gKiBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4gKiBkaXN0cmlidXRpb24uXG4gKiAgICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdyZWdnIFRhdmFyZXMuIG5vciB0aGUgbmFtZXMgb2YgaGlzXG4gKiBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuICogdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4gKiBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4gKiBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1JcbiAqIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4gKiBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbiAqIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1RcbiAqIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4gKiBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4gKiAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0VcbiAqIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxudmFyIGVycm9yID0gaGVscGVyLmVycm9yO1xudmFyIHdhcm4gPSBoZWxwZXIud2FybjtcblxudmFyIEZMT0FUID0gMHgxNDA2O1xudmFyIEZMT0FUX1ZFQzIgPSAweDhCNTA7XG52YXIgRkxPQVRfVkVDMyA9IDB4OEI1MTtcbnZhciBGTE9BVF9WRUM0ID0gMHg4QjUyO1xudmFyIElOVCA9IDB4MTQwNDtcbnZhciBJTlRfVkVDMiA9IDB4OEI1MztcbnZhciBJTlRfVkVDMyA9IDB4OEI1NDtcbnZhciBJTlRfVkVDNCA9IDB4OEI1NTtcbnZhciBCT09MID0gMHg4QjU2O1xudmFyIEJPT0xfVkVDMiA9IDB4OEI1NztcbnZhciBCT09MX1ZFQzMgPSAweDhCNTg7XG52YXIgQk9PTF9WRUM0ID0gMHg4QjU5O1xudmFyIEZMT0FUX01BVDIgPSAweDhCNUE7XG52YXIgRkxPQVRfTUFUMyA9IDB4OEI1QjtcbnZhciBGTE9BVF9NQVQ0ID0gMHg4QjVDO1xudmFyIFNBTVBMRVJfMkQgPSAweDhCNUU7XG52YXIgU0FNUExFUl9DVUJFID0gMHg4QjYwO1xudmFyIFNBTVBMRVJfM0QgPSAweDhCNUY7XG52YXIgU0FNUExFUl8yRF9TSEFET1cgPSAweDhCNjI7XG52YXIgRkxPQVRfTUFUMngzID0gMHg4QjY1O1xudmFyIEZMT0FUX01BVDJ4NCA9IDB4OEI2NjtcbnZhciBGTE9BVF9NQVQzeDIgPSAweDhCNjc7XG52YXIgRkxPQVRfTUFUM3g0ID0gMHg4QjY4O1xudmFyIEZMT0FUX01BVDR4MiA9IDB4OEI2OTtcbnZhciBGTE9BVF9NQVQ0eDMgPSAweDhCNkE7XG52YXIgU0FNUExFUl8yRF9BUlJBWSA9IDB4OERDMTtcbnZhciBTQU1QTEVSXzJEX0FSUkFZX1NIQURPVyA9IDB4OERDNDtcbnZhciBTQU1QTEVSX0NVQkVfU0hBRE9XID0gMHg4REM1O1xudmFyIFVOU0lHTkVEX0lOVCA9IDB4MTQwNTtcbnZhciBVTlNJR05FRF9JTlRfVkVDMiA9IDB4OERDNjtcbnZhciBVTlNJR05FRF9JTlRfVkVDMyA9IDB4OERDNztcbnZhciBVTlNJR05FRF9JTlRfVkVDNCA9IDB4OERDODtcbnZhciBJTlRfU0FNUExFUl8yRCA9IDB4OERDQTtcbnZhciBJTlRfU0FNUExFUl8zRCA9IDB4OERDQjtcbnZhciBJTlRfU0FNUExFUl9DVUJFID0gMHg4RENDO1xudmFyIElOVF9TQU1QTEVSXzJEX0FSUkFZID0gMHg4RENGO1xudmFyIFVOU0lHTkVEX0lOVF9TQU1QTEVSXzJEID0gMHg4REQyO1xudmFyIFVOU0lHTkVEX0lOVF9TQU1QTEVSXzNEID0gMHg4REQzO1xudmFyIFVOU0lHTkVEX0lOVF9TQU1QTEVSX0NVQkUgPSAweDhERDQ7XG52YXIgVU5TSUdORURfSU5UX1NBTVBMRVJfMkRfQVJSQVkgPSAweDhERDc7XG5cbnZhciBURVhUVVJFXzJEID0gMHgwREUxO1xudmFyIFRFWFRVUkVfQ1VCRV9NQVAgPSAweDg1MTM7XG52YXIgVEVYVFVSRV8zRCA9IDB4ODA2RjtcbnZhciBURVhUVVJFXzJEX0FSUkFZID0gMHg4QzFBO1xuXG52YXIgdHlwZU1hcCA9IHt9O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgYmluZCBwb2ludCBmb3IgYSBnaXZlbiBzYW1wbGVyIHR5cGVcbiAqL1xuZnVuY3Rpb24gZ2V0QmluZFBvaW50Rm9yU2FtcGxlclR5cGUoZ2wsIHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVNYXBbdHlwZV0uYmluZFBvaW50O1xufVxuXG4vLyBUaGlzIGtpbmQgb2Ygc3Vja3MhIElmIHlvdSBjb3VsZCBjb21wb3NlIGZ1bmN0aW9ucyBhcyBpbiBgdmFyIGZuID0gZ2xbbmFtZV07YFxuLy8gdGhpcyBjb2RlIGNvdWxkIGJlIGEgbG90IHNtYWxsZXIgYnV0IHRoYXQgaXMgc2FkbHkgcmVhbGx5IHNsb3cgKFRfVClcblxuZnVuY3Rpb24gZmxvYXRTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm0xZihsb2NhdGlvbiwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZsb2F0QXJyYXlTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm0xZnYobG9jYXRpb24sIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmbG9hdFZlYzJTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm0yZnYobG9jYXRpb24sIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmbG9hdFZlYzNTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm0zZnYobG9jYXRpb24sIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmbG9hdFZlYzRTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm00ZnYobG9jYXRpb24sIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpbnRTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm0xaShsb2NhdGlvbiwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludEFycmF5U2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtMWl2KGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW50VmVjMlNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybTJpdihsb2NhdGlvbiwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludFZlYzNTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm0zaXYobG9jYXRpb24sIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpbnRWZWM0U2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtNGl2KGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdWludFNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybTF1aShsb2NhdGlvbiwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVpbnRBcnJheVNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybTF1aXYobG9jYXRpb24sIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB1aW50VmVjMlNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybTJ1aXYobG9jYXRpb24sIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB1aW50VmVjM1NldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybTN1aXYobG9jYXRpb24sIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB1aW50VmVjNFNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybTR1aXYobG9jYXRpb24sIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmbG9hdE1hdDJTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm1NYXRyaXgyZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRNYXQzU2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtTWF0cml4M2Z2KGxvY2F0aW9uLCBmYWxzZSwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZsb2F0TWF0NFNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybU1hdHJpeDRmdihsb2NhdGlvbiwgZmFsc2UsIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmbG9hdE1hdDIzU2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtTWF0cml4MngzZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRNYXQzMlNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybU1hdHJpeDN4MmZ2KGxvY2F0aW9uLCBmYWxzZSwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZsb2F0TWF0MjRTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm1NYXRyaXgyeDRmdihsb2NhdGlvbiwgZmFsc2UsIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmbG9hdE1hdDQyU2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtTWF0cml4NHgyZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRNYXQzNFNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybU1hdHJpeDN4NGZ2KGxvY2F0aW9uLCBmYWxzZSwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZsb2F0TWF0NDNTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm1NYXRyaXg0eDNmdihsb2NhdGlvbiwgZmFsc2UsIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzYW1wbGVyU2V0dGVyKGdsLCB0eXBlLCB1bml0LCBsb2NhdGlvbikge1xuICB2YXIgYmluZFBvaW50ID0gZ2V0QmluZFBvaW50Rm9yU2FtcGxlclR5cGUoZ2wsIHR5cGUpO1xuICByZXR1cm4gdXRpbHMuaXNXZWJHTDIoZ2wpID8gZnVuY3Rpb24gKHRleHR1cmVPclBhaXIpIHtcbiAgICB2YXIgdGV4dHVyZSA9IHZvaWQgMDtcbiAgICB2YXIgc2FtcGxlciA9IHZvaWQgMDtcbiAgICBpZiAodGV4dHVyZU9yUGFpciBpbnN0YW5jZW9mIFdlYkdMVGV4dHVyZSkge1xuICAgICAgdGV4dHVyZSA9IHRleHR1cmVPclBhaXI7XG4gICAgICBzYW1wbGVyID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGV4dHVyZSA9IHRleHR1cmVPclBhaXIudGV4dHVyZTtcbiAgICAgIHNhbXBsZXIgPSB0ZXh0dXJlT3JQYWlyLnNhbXBsZXI7XG4gICAgfVxuICAgIGdsLnVuaWZvcm0xaShsb2NhdGlvbiwgdW5pdCk7XG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCArIHVuaXQpO1xuICAgIGdsLmJpbmRUZXh0dXJlKGJpbmRQb2ludCwgdGV4dHVyZSk7XG4gICAgZ2wuYmluZFNhbXBsZXIodW5pdCwgc2FtcGxlcik7XG4gIH0gOiBmdW5jdGlvbiAodGV4dHVyZSkge1xuICAgIGdsLnVuaWZvcm0xaShsb2NhdGlvbiwgdW5pdCk7XG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCArIHVuaXQpO1xuICAgIGdsLmJpbmRUZXh0dXJlKGJpbmRQb2ludCwgdGV4dHVyZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNhbXBsZXJBcnJheVNldHRlcihnbCwgdHlwZSwgdW5pdCwgbG9jYXRpb24sIHNpemUpIHtcbiAgdmFyIGJpbmRQb2ludCA9IGdldEJpbmRQb2ludEZvclNhbXBsZXJUeXBlKGdsLCB0eXBlKTtcbiAgdmFyIHVuaXRzID0gbmV3IEludDMyQXJyYXkoc2l6ZSk7XG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBzaXplOyArK2lpKSB7XG4gICAgdW5pdHNbaWldID0gdW5pdCArIGlpO1xuICB9XG5cbiAgcmV0dXJuIHV0aWxzLmlzV2ViR0wyKGdsKSA/IGZ1bmN0aW9uICh0ZXh0dXJlcykge1xuICAgIGdsLnVuaWZvcm0xaXYobG9jYXRpb24sIHVuaXRzKTtcbiAgICB0ZXh0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXh0dXJlT3JQYWlyLCBpbmRleCkge1xuICAgICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCArIHVuaXRzW2luZGV4XSk7XG4gICAgICB2YXIgdGV4dHVyZSA9IHZvaWQgMDtcbiAgICAgIHZhciBzYW1wbGVyID0gdm9pZCAwO1xuICAgICAgaWYgKHRleHR1cmVPclBhaXIgaW5zdGFuY2VvZiBXZWJHTFRleHR1cmUpIHtcbiAgICAgICAgdGV4dHVyZSA9IHRleHR1cmVPclBhaXI7XG4gICAgICAgIHNhbXBsZXIgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dHVyZSA9IHRleHR1cmVPclBhaXIudGV4dHVyZTtcbiAgICAgICAgc2FtcGxlciA9IHRleHR1cmVPclBhaXIuc2FtcGxlcjtcbiAgICAgIH1cbiAgICAgIGdsLmJpbmRTYW1wbGVyKHVuaXQsIHNhbXBsZXIpO1xuICAgICAgZ2wuYmluZFRleHR1cmUoYmluZFBvaW50LCB0ZXh0dXJlKTtcbiAgICB9KTtcbiAgfSA6IGZ1bmN0aW9uICh0ZXh0dXJlcykge1xuICAgIGdsLnVuaWZvcm0xaXYobG9jYXRpb24sIHVuaXRzKTtcbiAgICB0ZXh0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXh0dXJlLCBpbmRleCkge1xuICAgICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCArIHVuaXRzW2luZGV4XSk7XG4gICAgICBnbC5iaW5kVGV4dHVyZShiaW5kUG9pbnQsIHRleHR1cmUpO1xuICAgIH0pO1xuICB9O1xufVxuXG50eXBlTWFwW0ZMT0FUXSA9IHsgVHlwZTogRmxvYXQzMkFycmF5LCBzaXplOiA0LCBzZXR0ZXI6IGZsb2F0U2V0dGVyLCBhcnJheVNldHRlcjogZmxvYXRBcnJheVNldHRlciB9O1xudHlwZU1hcFtGTE9BVF9WRUMyXSA9IHsgVHlwZTogRmxvYXQzMkFycmF5LCBzaXplOiA4LCBzZXR0ZXI6IGZsb2F0VmVjMlNldHRlciB9O1xudHlwZU1hcFtGTE9BVF9WRUMzXSA9IHsgVHlwZTogRmxvYXQzMkFycmF5LCBzaXplOiAxMiwgc2V0dGVyOiBmbG9hdFZlYzNTZXR0ZXIgfTtcbnR5cGVNYXBbRkxPQVRfVkVDNF0gPSB7IFR5cGU6IEZsb2F0MzJBcnJheSwgc2l6ZTogMTYsIHNldHRlcjogZmxvYXRWZWM0U2V0dGVyIH07XG50eXBlTWFwW0lOVF0gPSB7IFR5cGU6IEludDMyQXJyYXksIHNpemU6IDQsIHNldHRlcjogaW50U2V0dGVyLCBhcnJheVNldHRlcjogaW50QXJyYXlTZXR0ZXIgfTtcbnR5cGVNYXBbSU5UX1ZFQzJdID0geyBUeXBlOiBJbnQzMkFycmF5LCBzaXplOiA4LCBzZXR0ZXI6IGludFZlYzJTZXR0ZXIgfTtcbnR5cGVNYXBbSU5UX1ZFQzNdID0geyBUeXBlOiBJbnQzMkFycmF5LCBzaXplOiAxMiwgc2V0dGVyOiBpbnRWZWMzU2V0dGVyIH07XG50eXBlTWFwW0lOVF9WRUM0XSA9IHsgVHlwZTogSW50MzJBcnJheSwgc2l6ZTogMTYsIHNldHRlcjogaW50VmVjNFNldHRlciB9O1xudHlwZU1hcFtVTlNJR05FRF9JTlRdID0geyBUeXBlOiBVaW50MzJBcnJheSwgc2l6ZTogNCwgc2V0dGVyOiB1aW50U2V0dGVyLCBhcnJheVNldHRlcjogdWludEFycmF5U2V0dGVyIH07XG50eXBlTWFwW1VOU0lHTkVEX0lOVF9WRUMyXSA9IHsgVHlwZTogVWludDMyQXJyYXksIHNpemU6IDgsIHNldHRlcjogdWludFZlYzJTZXR0ZXIgfTtcbnR5cGVNYXBbVU5TSUdORURfSU5UX1ZFQzNdID0geyBUeXBlOiBVaW50MzJBcnJheSwgc2l6ZTogMTIsIHNldHRlcjogdWludFZlYzNTZXR0ZXIgfTtcbnR5cGVNYXBbVU5TSUdORURfSU5UX1ZFQzRdID0geyBUeXBlOiBVaW50MzJBcnJheSwgc2l6ZTogMTYsIHNldHRlcjogdWludFZlYzRTZXR0ZXIgfTtcbnR5cGVNYXBbQk9PTF0gPSB7IFR5cGU6IFVpbnQzMkFycmF5LCBzaXplOiA0LCBzZXR0ZXI6IGludFNldHRlciwgYXJyYXlTZXR0ZXI6IGludEFycmF5U2V0dGVyIH07XG50eXBlTWFwW0JPT0xfVkVDMl0gPSB7IFR5cGU6IFVpbnQzMkFycmF5LCBzaXplOiA4LCBzZXR0ZXI6IGludFZlYzJTZXR0ZXIgfTtcbnR5cGVNYXBbQk9PTF9WRUMzXSA9IHsgVHlwZTogVWludDMyQXJyYXksIHNpemU6IDEyLCBzZXR0ZXI6IGludFZlYzNTZXR0ZXIgfTtcbnR5cGVNYXBbQk9PTF9WRUM0XSA9IHsgVHlwZTogVWludDMyQXJyYXksIHNpemU6IDE2LCBzZXR0ZXI6IGludFZlYzRTZXR0ZXIgfTtcbnR5cGVNYXBbRkxPQVRfTUFUMl0gPSB7IFR5cGU6IEZsb2F0MzJBcnJheSwgc2l6ZTogMTYsIHNldHRlcjogZmxvYXRNYXQyU2V0dGVyIH07XG50eXBlTWFwW0ZMT0FUX01BVDNdID0geyBUeXBlOiBGbG9hdDMyQXJyYXksIHNpemU6IDM2LCBzZXR0ZXI6IGZsb2F0TWF0M1NldHRlciB9O1xudHlwZU1hcFtGTE9BVF9NQVQ0XSA9IHsgVHlwZTogRmxvYXQzMkFycmF5LCBzaXplOiA2NCwgc2V0dGVyOiBmbG9hdE1hdDRTZXR0ZXIgfTtcbnR5cGVNYXBbRkxPQVRfTUFUMngzXSA9IHsgVHlwZTogRmxvYXQzMkFycmF5LCBzaXplOiAyNCwgc2V0dGVyOiBmbG9hdE1hdDIzU2V0dGVyIH07XG50eXBlTWFwW0ZMT0FUX01BVDJ4NF0gPSB7IFR5cGU6IEZsb2F0MzJBcnJheSwgc2l6ZTogMzIsIHNldHRlcjogZmxvYXRNYXQyNFNldHRlciB9O1xudHlwZU1hcFtGTE9BVF9NQVQzeDJdID0geyBUeXBlOiBGbG9hdDMyQXJyYXksIHNpemU6IDI0LCBzZXR0ZXI6IGZsb2F0TWF0MzJTZXR0ZXIgfTtcbnR5cGVNYXBbRkxPQVRfTUFUM3g0XSA9IHsgVHlwZTogRmxvYXQzMkFycmF5LCBzaXplOiA0OCwgc2V0dGVyOiBmbG9hdE1hdDM0U2V0dGVyIH07XG50eXBlTWFwW0ZMT0FUX01BVDR4Ml0gPSB7IFR5cGU6IEZsb2F0MzJBcnJheSwgc2l6ZTogMzIsIHNldHRlcjogZmxvYXRNYXQ0MlNldHRlciB9O1xudHlwZU1hcFtGTE9BVF9NQVQ0eDNdID0geyBUeXBlOiBGbG9hdDMyQXJyYXksIHNpemU6IDQ4LCBzZXR0ZXI6IGZsb2F0TWF0NDNTZXR0ZXIgfTtcbnR5cGVNYXBbU0FNUExFUl8yRF0gPSB7IFR5cGU6IG51bGwsIHNpemU6IDAsIHNldHRlcjogc2FtcGxlclNldHRlciwgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlciwgYmluZFBvaW50OiBURVhUVVJFXzJEIH07XG50eXBlTWFwW1NBTVBMRVJfQ1VCRV0gPSB7IFR5cGU6IG51bGwsIHNpemU6IDAsIHNldHRlcjogc2FtcGxlclNldHRlciwgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlciwgYmluZFBvaW50OiBURVhUVVJFX0NVQkVfTUFQIH07XG50eXBlTWFwW1NBTVBMRVJfM0RdID0geyBUeXBlOiBudWxsLCBzaXplOiAwLCBzZXR0ZXI6IHNhbXBsZXJTZXR0ZXIsIGFycmF5U2V0dGVyOiBzYW1wbGVyQXJyYXlTZXR0ZXIsIGJpbmRQb2ludDogVEVYVFVSRV8zRCB9O1xudHlwZU1hcFtTQU1QTEVSXzJEX1NIQURPV10gPSB7IFR5cGU6IG51bGwsIHNpemU6IDAsIHNldHRlcjogc2FtcGxlclNldHRlciwgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlciwgYmluZFBvaW50OiBURVhUVVJFXzJEIH07XG50eXBlTWFwW1NBTVBMRVJfMkRfQVJSQVldID0geyBUeXBlOiBudWxsLCBzaXplOiAwLCBzZXR0ZXI6IHNhbXBsZXJTZXR0ZXIsIGFycmF5U2V0dGVyOiBzYW1wbGVyQXJyYXlTZXR0ZXIsIGJpbmRQb2ludDogVEVYVFVSRV8yRF9BUlJBWSB9O1xudHlwZU1hcFtTQU1QTEVSXzJEX0FSUkFZX1NIQURPV10gPSB7IFR5cGU6IG51bGwsIHNpemU6IDAsIHNldHRlcjogc2FtcGxlclNldHRlciwgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlciwgYmluZFBvaW50OiBURVhUVVJFXzJEX0FSUkFZIH07XG50eXBlTWFwW1NBTVBMRVJfQ1VCRV9TSEFET1ddID0geyBUeXBlOiBudWxsLCBzaXplOiAwLCBzZXR0ZXI6IHNhbXBsZXJTZXR0ZXIsIGFycmF5U2V0dGVyOiBzYW1wbGVyQXJyYXlTZXR0ZXIsIGJpbmRQb2ludDogVEVYVFVSRV9DVUJFX01BUCB9O1xudHlwZU1hcFtJTlRfU0FNUExFUl8yRF0gPSB7IFR5cGU6IG51bGwsIHNpemU6IDAsIHNldHRlcjogc2FtcGxlclNldHRlciwgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlciwgYmluZFBvaW50OiBURVhUVVJFXzJEIH07XG50eXBlTWFwW0lOVF9TQU1QTEVSXzNEXSA9IHsgVHlwZTogbnVsbCwgc2l6ZTogMCwgc2V0dGVyOiBzYW1wbGVyU2V0dGVyLCBhcnJheVNldHRlcjogc2FtcGxlckFycmF5U2V0dGVyLCBiaW5kUG9pbnQ6IFRFWFRVUkVfM0QgfTtcbnR5cGVNYXBbSU5UX1NBTVBMRVJfQ1VCRV0gPSB7IFR5cGU6IG51bGwsIHNpemU6IDAsIHNldHRlcjogc2FtcGxlclNldHRlciwgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlciwgYmluZFBvaW50OiBURVhUVVJFX0NVQkVfTUFQIH07XG50eXBlTWFwW0lOVF9TQU1QTEVSXzJEX0FSUkFZXSA9IHsgVHlwZTogbnVsbCwgc2l6ZTogMCwgc2V0dGVyOiBzYW1wbGVyU2V0dGVyLCBhcnJheVNldHRlcjogc2FtcGxlckFycmF5U2V0dGVyLCBiaW5kUG9pbnQ6IFRFWFRVUkVfMkRfQVJSQVkgfTtcbnR5cGVNYXBbVU5TSUdORURfSU5UX1NBTVBMRVJfMkRdID0geyBUeXBlOiBudWxsLCBzaXplOiAwLCBzZXR0ZXI6IHNhbXBsZXJTZXR0ZXIsIGFycmF5U2V0dGVyOiBzYW1wbGVyQXJyYXlTZXR0ZXIsIGJpbmRQb2ludDogVEVYVFVSRV8yRCB9O1xudHlwZU1hcFtVTlNJR05FRF9JTlRfU0FNUExFUl8zRF0gPSB7IFR5cGU6IG51bGwsIHNpemU6IDAsIHNldHRlcjogc2FtcGxlclNldHRlciwgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlciwgYmluZFBvaW50OiBURVhUVVJFXzNEIH07XG50eXBlTWFwW1VOU0lHTkVEX0lOVF9TQU1QTEVSX0NVQkVdID0geyBUeXBlOiBudWxsLCBzaXplOiAwLCBzZXR0ZXI6IHNhbXBsZXJTZXR0ZXIsIGFycmF5U2V0dGVyOiBzYW1wbGVyQXJyYXlTZXR0ZXIsIGJpbmRQb2ludDogVEVYVFVSRV9DVUJFX01BUCB9O1xudHlwZU1hcFtVTlNJR05FRF9JTlRfU0FNUExFUl8yRF9BUlJBWV0gPSB7IFR5cGU6IG51bGwsIHNpemU6IDAsIHNldHRlcjogc2FtcGxlclNldHRlciwgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlciwgYmluZFBvaW50OiBURVhUVVJFXzJEX0FSUkFZIH07XG5cbmZ1bmN0aW9uIGZsb2F0QXR0cmliU2V0dGVyKGdsLCBpbmRleCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYi5idWZmZXIpO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGluZGV4KTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGluZGV4LCBiLm51bUNvbXBvbmVudHMgfHwgYi5zaXplLCBiLnR5cGUgfHwgZ2wuRkxPQVQsIGIubm9ybWFsaXplIHx8IGZhbHNlLCBiLnN0cmlkZSB8fCAwLCBiLm9mZnNldCB8fCAwKTtcbiAgICBpZiAoYi5kaXZpc29yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGdsLnZlcnRleEF0dHJpYkRpdmlzb3IoaW5kZXgsIGIuZGl2aXNvcik7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnRBdHRyaWJTZXR0ZXIoZ2wsIGluZGV4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBiLmJ1ZmZlcik7XG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoaW5kZXgpO1xuICAgIGdsLnZlcnRleEF0dHJpYklQb2ludGVyKGluZGV4LCBiLm51bUNvbXBvbmVudHMgfHwgYi5zaXplLCBiLnR5cGUgfHwgZ2wuSU5ULCBiLnN0cmlkZSB8fCAwLCBiLm9mZnNldCB8fCAwKTtcbiAgICBpZiAoYi5kaXZpc29yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGdsLnZlcnRleEF0dHJpYkRpdmlzb3IoaW5kZXgsIGIuZGl2aXNvcik7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBtYXRBdHRyaWJTZXR0ZXIoZ2wsIGluZGV4LCB0eXBlSW5mbykge1xuICB2YXIgZGVmYXVsdFNpemUgPSB0eXBlSW5mby5zaXplO1xuICB2YXIgY291bnQgPSB0eXBlSW5mby5jb3VudDtcblxuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYi5idWZmZXIpO1xuICAgIHZhciBudW1Db21wb25lbnRzID0gYi5zaXplIHx8IGIubnVtQ29tcG9uZW50cyB8fCBkZWZhdWx0U2l6ZTtcbiAgICB2YXIgc2l6ZSA9IG51bUNvbXBvbmVudHMgLyBjb3VudDtcbiAgICB2YXIgdHlwZSA9IGIudHlwZSB8fCBnbC5GTE9BVDtcbiAgICB2YXIgdHlwZUluZm8gPSB0eXBlTWFwW3R5cGVdO1xuICAgIHZhciBzdHJpZGUgPSB0eXBlSW5mby5zaXplICogbnVtQ29tcG9uZW50cztcbiAgICB2YXIgbm9ybWFsaXplID0gYi5ub3JtYWxpemUgfHwgZmFsc2U7XG4gICAgdmFyIG9mZnNldCA9IGIub2Zmc2V0IHx8IDA7XG4gICAgdmFyIHJvd09mZnNldCA9IHN0cmlkZSAvIGNvdW50O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoaW5kZXggKyBpKTtcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoaW5kZXggKyBpLCBzaXplLCB0eXBlLCBub3JtYWxpemUsIHN0cmlkZSwgb2Zmc2V0ICsgcm93T2Zmc2V0ICogaSk7XG4gICAgICBpZiAoYi5kaXZpc29yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliRGl2aXNvcihpbmRleCArIGksIGIuZGl2aXNvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG52YXIgYXR0clR5cGVNYXAgPSB7fTtcbmF0dHJUeXBlTWFwW0ZMT0FUXSA9IHsgc2l6ZTogNCwgc2V0dGVyOiBmbG9hdEF0dHJpYlNldHRlciB9O1xuYXR0clR5cGVNYXBbRkxPQVRfVkVDMl0gPSB7IHNpemU6IDgsIHNldHRlcjogZmxvYXRBdHRyaWJTZXR0ZXIgfTtcbmF0dHJUeXBlTWFwW0ZMT0FUX1ZFQzNdID0geyBzaXplOiAxMiwgc2V0dGVyOiBmbG9hdEF0dHJpYlNldHRlciB9O1xuYXR0clR5cGVNYXBbRkxPQVRfVkVDNF0gPSB7IHNpemU6IDE2LCBzZXR0ZXI6IGZsb2F0QXR0cmliU2V0dGVyIH07XG5hdHRyVHlwZU1hcFtJTlRdID0geyBzaXplOiA0LCBzZXR0ZXI6IGludEF0dHJpYlNldHRlciB9O1xuYXR0clR5cGVNYXBbSU5UX1ZFQzJdID0geyBzaXplOiA4LCBzZXR0ZXI6IGludEF0dHJpYlNldHRlciB9O1xuYXR0clR5cGVNYXBbSU5UX1ZFQzNdID0geyBzaXplOiAxMiwgc2V0dGVyOiBpbnRBdHRyaWJTZXR0ZXIgfTtcbmF0dHJUeXBlTWFwW0lOVF9WRUM0XSA9IHsgc2l6ZTogMTYsIHNldHRlcjogaW50QXR0cmliU2V0dGVyIH07XG5hdHRyVHlwZU1hcFtVTlNJR05FRF9JTlRdID0geyBzaXplOiA0LCBzZXR0ZXI6IGludEF0dHJpYlNldHRlciB9O1xuYXR0clR5cGVNYXBbVU5TSUdORURfSU5UX1ZFQzJdID0geyBzaXplOiA4LCBzZXR0ZXI6IGludEF0dHJpYlNldHRlciB9O1xuYXR0clR5cGVNYXBbVU5TSUdORURfSU5UX1ZFQzNdID0geyBzaXplOiAxMiwgc2V0dGVyOiBpbnRBdHRyaWJTZXR0ZXIgfTtcbmF0dHJUeXBlTWFwW1VOU0lHTkVEX0lOVF9WRUM0XSA9IHsgc2l6ZTogMTYsIHNldHRlcjogaW50QXR0cmliU2V0dGVyIH07XG5hdHRyVHlwZU1hcFtCT09MXSA9IHsgc2l6ZTogNCwgc2V0dGVyOiBpbnRBdHRyaWJTZXR0ZXIgfTtcbmF0dHJUeXBlTWFwW0JPT0xfVkVDMl0gPSB7IHNpemU6IDgsIHNldHRlcjogaW50QXR0cmliU2V0dGVyIH07XG5hdHRyVHlwZU1hcFtCT09MX1ZFQzNdID0geyBzaXplOiAxMiwgc2V0dGVyOiBpbnRBdHRyaWJTZXR0ZXIgfTtcbmF0dHJUeXBlTWFwW0JPT0xfVkVDNF0gPSB7IHNpemU6IDE2LCBzZXR0ZXI6IGludEF0dHJpYlNldHRlciB9O1xuYXR0clR5cGVNYXBbRkxPQVRfTUFUMl0gPSB7IHNpemU6IDQsIHNldHRlcjogbWF0QXR0cmliU2V0dGVyLCBjb3VudDogMiB9O1xuYXR0clR5cGVNYXBbRkxPQVRfTUFUM10gPSB7IHNpemU6IDksIHNldHRlcjogbWF0QXR0cmliU2V0dGVyLCBjb3VudDogMyB9O1xuYXR0clR5cGVNYXBbRkxPQVRfTUFUNF0gPSB7IHNpemU6IDE2LCBzZXR0ZXI6IG1hdEF0dHJpYlNldHRlciwgY291bnQ6IDQgfTtcblxuLy8gbWFrZSBzdXJlIHdlIGRvbid0IHNlZSBhIGdsb2JhbCBnbFxudmFyIGdsID0gdW5kZWZpbmVkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbi8qKlxuICogRXJyb3IgQ2FsbGJhY2tcbiAqIEBjYWxsYmFjayBFcnJvckNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW2xpbmVPZmZzZXRdIGFtb3VudCB0byBhZGQgdG8gbGluZSBudW1iZXJcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbmZ1bmN0aW9uIGFkZExpbmVOdW1iZXJzKHNyYywgbGluZU9mZnNldCkge1xuICBsaW5lT2Zmc2V0ID0gbGluZU9mZnNldCB8fCAwO1xuICArK2xpbmVPZmZzZXQ7XG5cbiAgcmV0dXJuIHNyYy5zcGxpdChcIlxcblwiKS5tYXAoZnVuY3Rpb24gKGxpbmUsIG5keCkge1xuICAgIHJldHVybiBuZHggKyBsaW5lT2Zmc2V0ICsgXCI6IFwiICsgbGluZTtcbiAgfSkuam9pbihcIlxcblwiKTtcbn1cblxudmFyIHNwYWNlUkUgPSAvXlsgXFx0XSpcXG4vO1xuXG4vKipcbiAqIExvYWRzIGEgc2hhZGVyLlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQgdG8gdXNlLlxuICogQHBhcmFtIHtzdHJpbmd9IHNoYWRlclNvdXJjZSBUaGUgc2hhZGVyIHNvdXJjZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzaGFkZXJUeXBlIFRoZSB0eXBlIG9mIHNoYWRlci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuRXJyb3JDYWxsYmFja30gb3B0X2Vycm9yQ2FsbGJhY2sgY2FsbGJhY2sgZm9yIGVycm9ycy5cbiAqIEByZXR1cm4ge1dlYkdMU2hhZGVyfSBUaGUgY3JlYXRlZCBzaGFkZXIuXG4gKi9cbmZ1bmN0aW9uIGxvYWRTaGFkZXIoZ2wsIHNoYWRlclNvdXJjZSwgc2hhZGVyVHlwZSwgb3B0X2Vycm9yQ2FsbGJhY2spIHtcbiAgdmFyIGVyckZuID0gb3B0X2Vycm9yQ2FsbGJhY2sgfHwgZXJyb3I7XG4gIC8vIENyZWF0ZSB0aGUgc2hhZGVyIG9iamVjdFxuICB2YXIgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHNoYWRlclR5cGUpO1xuXG4gIC8vIFJlbW92ZSB0aGUgZmlyc3QgZW5kIG9mIGxpbmUgYmVjYXVzZSBXZWJHTCAyLjAgcmVxdWlyZXNcbiAgLy8gI3ZlcnNpb24gMzAwIGVzXG4gIC8vIGFzIHRoZSBmaXJzdCBsaW5lLiBObyB3aGl0ZXNwYWNlIGFsbG93ZWQgYmVmb3JlIHRoYXQgbGluZVxuICAvLyBzb1xuICAvL1xuICAvLyA8c2NyaXB0PlxuICAvLyAjdmVyc2lvbiAzMDAgZXNcbiAgLy8gPC9zY3JpcHQ+XG4gIC8vXG4gIC8vIEhhcyBvbmUgbGluZSBiZWZvcmUgaXQgd2hpY2ggaXMgaW52YWxpZCBhY2NvcmRpbmcgdG8gR0xTTCBFUyAzLjAwXG4gIC8vXG4gIHZhciBsaW5lT2Zmc2V0ID0gMDtcbiAgaWYgKHNwYWNlUkUudGVzdChzaGFkZXJTb3VyY2UpKSB7XG4gICAgbGluZU9mZnNldCA9IDE7XG4gICAgc2hhZGVyU291cmNlID0gc2hhZGVyU291cmNlLnJlcGxhY2Uoc3BhY2VSRSwgJycpO1xuICB9XG5cbiAgLy8gTG9hZCB0aGUgc2hhZGVyIHNvdXJjZVxuICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTb3VyY2UpO1xuXG4gIC8vIENvbXBpbGUgdGhlIHNoYWRlclxuICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgLy8gQ2hlY2sgdGhlIGNvbXBpbGUgc3RhdHVzXG4gIHZhciBjb21waWxlZCA9IGdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKTtcbiAgaWYgKCFjb21waWxlZCkge1xuICAgIC8vIFNvbWV0aGluZyB3ZW50IHdyb25nIGR1cmluZyBjb21waWxhdGlvbjsgZ2V0IHRoZSBlcnJvclxuICAgIHZhciBsYXN0RXJyb3IgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XG4gICAgZXJyRm4oYWRkTGluZU51bWJlcnMoc2hhZGVyU291cmNlLCBsaW5lT2Zmc2V0KSArIFwiXFxuKioqIEVycm9yIGNvbXBpbGluZyBzaGFkZXI6IFwiICsgbGFzdEVycm9yKTtcbiAgICBnbC5kZWxldGVTaGFkZXIoc2hhZGVyKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBzaGFkZXI7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gUHJvZ3JhbU9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb24oc3RyaW5nKX0gW2Vycm9yQ2FsbGJhY2tdIGNhbGxiYWNrIGZvciBlcnJvcnNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0LjxzdHJpbmcsbnVtYmVyPn0gW2F0dHJpYkxvY2F0aW9uc10gYSBhdHRyaWJ1dGUgbmFtZSB0byBsb2NhdGlvbiBtYXBcbiAqIEBwcm9wZXJ0eSB7KG1vZHVsZTp0d2dsLkJ1ZmZlckluZm98T2JqZWN0LjxzdHJpbmcsbW9kdWxlOnR3Z2wuQXR0cmliSW5mbz58c3RyaW5nW10pfSBbdHJhbnNmb3JtRmVlZGJhY2tWYXJ5aW5nc10gSWYgcGFzc2VkXG4gKiAgIGEgQnVmZmVySW5mbyB3aWxsIHVzZSB0aGUgYXR0cmlicyBuYW1lcyBpbnNpZGUuIElmIHBhc3NlZCBhbiBvYmplY3Qgb2YgQXR0cmliSW5mb3Mgd2lsbCB1c2UgdGhlIG5hbWVzIGZyb20gdGhhdCBvYmplY3QuIE90aGVyd2lzZVxuICogICB5b3UgY2FuIHBhc3MgYW4gYXJyYXkgb2YgbmFtZXMuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3RyYW5zZm9ybUZlZWRiYWNrTW9kZV0gdGhlIG1vZGUgdG8gcGFzcyBgZ2wudHJhbnNmb3JtRmVlZGJhY2tWYXJ5aW5nc2AuIERlZmF1bHRzIHRvIGBTRVBBUkFURV9BVFRSSUJTYC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogR2V0cyB0aGUgcHJvZ3JhbSBvcHRpb25zIGJhc2VkIG9uIGFsbCB0aGVzZSBvcHRpb25hbCBhcmd1bWVudHNcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuUHJvZ3JhbU9wdGlvbnN8c3RyaW5nW119IFtvcHRfYXR0cmlic10gT3B0aW9ucyBmb3IgdGhlIHByb2dyYW0gb3IgYW4gYXJyYXkgb2YgYXR0cmlicyBuYW1lcy4gTG9jYXRpb25zIHdpbGwgYmUgYXNzaWduZWQgYnkgaW5kZXggaWYgbm90IHBhc3NlZCBpblxuICogQHBhcmFtIHtudW1iZXJbXX0gW29wdF9sb2NhdGlvbnNdIFRoZSBsb2NhdGlvbnMgZm9yIHRoZS4gQSBwYXJhbGxlbCBhcnJheSB0byBvcHRfYXR0cmlicyBsZXR0aW5nIHlvdSBhc3NpZ24gbG9jYXRpb25zLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5FcnJvckNhbGxiYWNrfSBbb3B0X2Vycm9yQ2FsbGJhY2tdIGNhbGxiYWNrIGZvciBlcnJvcnMuIEJ5IGRlZmF1bHQgaXQganVzdCBwcmludHMgYW4gZXJyb3IgdG8gdGhlIGNvbnNvbGVcbiAqICAgICAgICBvbiBlcnJvci4gSWYgeW91IHdhbnQgc29tZXRoaW5nIGVsc2UgcGFzcyBhbiBjYWxsYmFjay4gSXQncyBwYXNzZWQgYW4gZXJyb3IgbWVzc2FnZS5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLlByb2dyYW1PcHRpb25zfSBhbiBpbnN0YW5jZSBvZiBQcm9ncmFtT3B0aW9ucyBiYXNlZCBvbiB0aGUgYXJndW1lbnRzIHBhc2VkIG9uXG4gKi9cbmZ1bmN0aW9uIGdldFByb2dyYW1PcHRpb25zKG9wdF9hdHRyaWJzLCBvcHRfbG9jYXRpb25zLCBvcHRfZXJyb3JDYWxsYmFjaykge1xuICB2YXIgdHJhbnNmb3JtRmVlZGJhY2tWYXJ5aW5ncyA9IHZvaWQgMDtcbiAgaWYgKHR5cGVvZiBvcHRfbG9jYXRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0X2Vycm9yQ2FsbGJhY2sgPSBvcHRfbG9jYXRpb25zO1xuICAgIG9wdF9sb2NhdGlvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBvcHRfYXR0cmlicyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdF9lcnJvckNhbGxiYWNrID0gb3B0X2F0dHJpYnM7XG4gICAgb3B0X2F0dHJpYnMgPSB1bmRlZmluZWQ7XG4gIH0gZWxzZSBpZiAob3B0X2F0dHJpYnMgJiYgIUFycmF5LmlzQXJyYXkob3B0X2F0dHJpYnMpKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBhbiBlcnJvckNhbGxiYWNrIHdlIGNhbiBqdXN0IHJldHVybiB0aGlzIG9iamVjdFxuICAgIC8vIE90aGVyd2lzZSB3ZSBuZWVkIHRvIGNvbnN0cnVjdCBvbmUgd2l0aCBkZWZhdWx0IGVycm9yQ2FsbGJhY2tcbiAgICBpZiAob3B0X2F0dHJpYnMuZXJyb3JDYWxsYmFjaykge1xuICAgICAgcmV0dXJuIG9wdF9hdHRyaWJzO1xuICAgIH1cbiAgICB2YXIgb3B0ID0gb3B0X2F0dHJpYnM7XG4gICAgb3B0X2Vycm9yQ2FsbGJhY2sgPSBvcHQuZXJyb3JDYWxsYmFjaztcbiAgICBvcHRfYXR0cmlicyA9IG9wdC5hdHRyaWJMb2NhdGlvbnM7XG4gICAgdHJhbnNmb3JtRmVlZGJhY2tWYXJ5aW5ncyA9IG9wdC50cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzO1xuICB9XG5cbiAgdmFyIG9wdGlvbnMgPSB7XG4gICAgZXJyb3JDYWxsYmFjazogb3B0X2Vycm9yQ2FsbGJhY2sgfHwgZXJyb3IsXG4gICAgdHJhbnNmb3JtRmVlZGJhY2tWYXJ5aW5nczogdHJhbnNmb3JtRmVlZGJhY2tWYXJ5aW5nc1xuICB9O1xuXG4gIGlmIChvcHRfYXR0cmlicykge1xuICAgIHZhciBhdHRyaWJMb2NhdGlvbnMgPSB7fTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRfYXR0cmlicykpIHtcbiAgICAgIG9wdF9hdHRyaWJzLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYiwgbmR4KSB7XG4gICAgICAgIGF0dHJpYkxvY2F0aW9uc1thdHRyaWJdID0gb3B0X2xvY2F0aW9ucyA/IG9wdF9sb2NhdGlvbnNbbmR4XSA6IG5keDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdHRyaWJMb2NhdGlvbnMgPSBvcHRfYXR0cmlicztcbiAgICB9XG4gICAgb3B0aW9ucy5hdHRyaWJMb2NhdGlvbnMgPSBhdHRyaWJMb2NhdGlvbnM7XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxudmFyIGRlZmF1bHRTaGFkZXJUeXBlID0gW1wiVkVSVEVYX1NIQURFUlwiLCBcIkZSQUdNRU5UX1NIQURFUlwiXTtcblxuZnVuY3Rpb24gZ2V0U2hhZGVyVHlwZUZyb21TY3JpcHRUeXBlKHNjcmlwdFR5cGUpIHtcbiAgaWYgKHNjcmlwdFR5cGUuaW5kZXhPZihcImZyYWdcIikgPj0gMCkge1xuICAgIHJldHVybiBnbC5GUkFHTUVOVF9TSEFERVI7XG4gIH0gZWxzZSBpZiAoc2NyaXB0VHlwZS5pbmRleE9mKFwidmVydFwiKSA+PSAwKSB7XG4gICAgcmV0dXJuIGdsLlZFUlRFWF9TSEFERVI7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVsZXRlU2hhZGVycyhnbCwgc2hhZGVycykge1xuICBzaGFkZXJzLmZvckVhY2goZnVuY3Rpb24gKHNoYWRlcikge1xuICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcHJvZ3JhbSwgYXR0YWNoZXMgKGFuZC9vciBjb21waWxlcykgc2hhZGVycywgYmluZHMgYXR0cmliIGxvY2F0aW9ucywgbGlua3MgdGhlXG4gKiBwcm9ncmFtIGFuZCBjYWxscyB1c2VQcm9ncmFtLlxuICpcbiAqIE5PVEU6IFRoZXJlIGFyZSA0IHNpZ25hdHVyZXMgZm9yIHRoaXMgZnVuY3Rpb25cbiAqXG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtKGdsLCBbdnMsIGZzXSwgb3B0aW9ucyk7XG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtKGdsLCBbdnMsIGZzXSwgb3B0X2VyckZ1bmMpO1xuICogICAgIHR3Z2wuY3JlYXRlUHJvZ3JhbShnbCwgW3ZzLCBmc10sIG9wdF9hdHRyaWJzLCBvcHRfZXJyRnVuYyk7XG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtKGdsLCBbdnMsIGZzXSwgb3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJGdW5jKTtcbiAqXG4gKiBAcGFyYW0ge1dlYkdMU2hhZGVyW118c3RyaW5nW119IHNoYWRlcnMgVGhlIHNoYWRlcnMgdG8gYXR0YWNoLCBvciBlbGVtZW50IGlkcyBmb3IgdGhlaXIgc291cmNlLCBvciBzdHJpbmdzIHRoYXQgY29udGFpbiB0aGVpciBzb3VyY2VcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuUHJvZ3JhbU9wdGlvbnN8c3RyaW5nW119IFtvcHRfYXR0cmlic10gT3B0aW9ucyBmb3IgdGhlIHByb2dyYW0gb3IgYW4gYXJyYXkgb2YgYXR0cmlicyBuYW1lcy4gTG9jYXRpb25zIHdpbGwgYmUgYXNzaWduZWQgYnkgaW5kZXggaWYgbm90IHBhc3NlZCBpblxuICogQHBhcmFtIHtudW1iZXJbXX0gW29wdF9sb2NhdGlvbnNdIFRoZSBsb2NhdGlvbnMgZm9yIHRoZS4gQSBwYXJhbGxlbCBhcnJheSB0byBvcHRfYXR0cmlicyBsZXR0aW5nIHlvdSBhc3NpZ24gbG9jYXRpb25zLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5FcnJvckNhbGxiYWNrfSBbb3B0X2Vycm9yQ2FsbGJhY2tdIGNhbGxiYWNrIGZvciBlcnJvcnMuIEJ5IGRlZmF1bHQgaXQganVzdCBwcmludHMgYW4gZXJyb3IgdG8gdGhlIGNvbnNvbGVcbiAqICAgICAgICBvbiBlcnJvci4gSWYgeW91IHdhbnQgc29tZXRoaW5nIGVsc2UgcGFzcyBhbiBjYWxsYmFjay4gSXQncyBwYXNzZWQgYW4gZXJyb3IgbWVzc2FnZS5cbiAqIEByZXR1cm4ge1dlYkdMUHJvZ3JhbT99IHRoZSBjcmVhdGVkIHByb2dyYW0gb3IgbnVsbCBpZiBlcnJvci5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcm9ncmFtc1xuICovXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtKGdsLCBzaGFkZXJzLCBvcHRfYXR0cmlicywgb3B0X2xvY2F0aW9ucywgb3B0X2Vycm9yQ2FsbGJhY2spIHtcbiAgdmFyIHByb2dPcHRpb25zID0gZ2V0UHJvZ3JhbU9wdGlvbnMob3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJvckNhbGxiYWNrKTtcbiAgdmFyIHJlYWxTaGFkZXJzID0gW107XG4gIHZhciBuZXdTaGFkZXJzID0gW107XG4gIGZvciAodmFyIG5keCA9IDA7IG5keCA8IHNoYWRlcnMubGVuZ3RoOyArK25keCkge1xuICAgIHZhciBzaGFkZXIgPSBzaGFkZXJzW25keF07XG4gICAgaWYgKHR5cGVvZiBzaGFkZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNoYWRlcik7XG4gICAgICB2YXIgc3JjID0gZWxlbSA/IGVsZW0udGV4dCA6IHNoYWRlcjtcbiAgICAgIHZhciB0eXBlID0gZ2xbZGVmYXVsdFNoYWRlclR5cGVbbmR4XV07XG4gICAgICBpZiAoZWxlbSAmJiBlbGVtLnR5cGUpIHtcbiAgICAgICAgdHlwZSA9IGdldFNoYWRlclR5cGVGcm9tU2NyaXB0VHlwZShlbGVtLnR5cGUpIHx8IHR5cGU7XG4gICAgICB9XG4gICAgICBzaGFkZXIgPSBsb2FkU2hhZGVyKGdsLCBzcmMsIHR5cGUsIHByb2dPcHRpb25zLmVycm9yQ2FsbGJhY2spO1xuICAgICAgbmV3U2hhZGVycy5wdXNoKHNoYWRlcik7XG4gICAgfVxuICAgIGlmIChzaGFkZXIgaW5zdGFuY2VvZiBXZWJHTFNoYWRlcikge1xuICAgICAgcmVhbFNoYWRlcnMucHVzaChzaGFkZXIpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChyZWFsU2hhZGVycy5sZW5ndGggIT09IHNoYWRlcnMubGVuZ3RoKSB7XG4gICAgcHJvZ09wdGlvbnMuZXJyb3JDYWxsYmFjayhcIm5vdCBlbm91Z2ggc2hhZGVycyBmb3IgcHJvZ3JhbVwiKTtcbiAgICBkZWxldGVTaGFkZXJzKGdsLCBuZXdTaGFkZXJzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICByZWFsU2hhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChzaGFkZXIpIHtcbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgc2hhZGVyKTtcbiAgfSk7XG4gIGlmIChwcm9nT3B0aW9ucy5hdHRyaWJMb2NhdGlvbnMpIHtcbiAgICBPYmplY3Qua2V5cyhwcm9nT3B0aW9ucy5hdHRyaWJMb2NhdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYikge1xuICAgICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIHByb2dPcHRpb25zLmF0dHJpYkxvY2F0aW9uc1thdHRyaWJdLCBhdHRyaWIpO1xuICAgIH0pO1xuICB9XG4gIHZhciB2YXJ5aW5ncyA9IHByb2dPcHRpb25zLnRyYW5zZm9ybUZlZWRiYWNrVmFyeWluZ3M7XG4gIGlmICh2YXJ5aW5ncykge1xuICAgIGlmICh2YXJ5aW5ncy5hdHRyaWJzKSB7XG4gICAgICB2YXJ5aW5ncyA9IHZhcnlpbmdzLmF0dHJpYnM7XG4gICAgfVxuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YXJ5aW5ncykpIHtcbiAgICAgIHZhcnlpbmdzID0gT2JqZWN0LmtleXModmFyeWluZ3MpO1xuICAgIH1cbiAgICBnbC50cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzKHByb2dyYW0sIHZhcnlpbmdzLCBwcm9nT3B0aW9ucy50cmFuc2Zvcm1GZWVkYmFja01vZGUgfHwgZ2wuU0VQQVJBVEVfQVRUUklCUyk7XG4gIH1cbiAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG5cbiAgLy8gQ2hlY2sgdGhlIGxpbmsgc3RhdHVzXG4gIHZhciBsaW5rZWQgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKTtcbiAgaWYgKCFsaW5rZWQpIHtcbiAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIHRoZSBsaW5rXG4gICAgdmFyIGxhc3RFcnJvciA9IGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pO1xuICAgIHByb2dPcHRpb25zLmVycm9yQ2FsbGJhY2soXCJFcnJvciBpbiBwcm9ncmFtIGxpbmtpbmc6XCIgKyBsYXN0RXJyb3IpO1xuXG4gICAgZ2wuZGVsZXRlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICBkZWxldGVTaGFkZXJzKGdsLCBuZXdTaGFkZXJzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gcHJvZ3JhbTtcbn1cblxuLyoqXG4gKiBMb2FkcyBhIHNoYWRlciBmcm9tIGEgc2NyaXB0IHRhZy5cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0IHRvIHVzZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzY3JpcHRJZCBUaGUgaWQgb2YgdGhlIHNjcmlwdCB0YWcuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdF9zaGFkZXJUeXBlXSBUaGUgdHlwZSBvZiBzaGFkZXIuIElmIG5vdCBwYXNzZWQgaW4gaXQgd2lsbFxuICogICAgIGJlIGRlcml2ZWQgZnJvbSB0aGUgdHlwZSBvZiB0aGUgc2NyaXB0IHRhZy5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuRXJyb3JDYWxsYmFja30gW29wdF9lcnJvckNhbGxiYWNrXSBjYWxsYmFjayBmb3IgZXJyb3JzLlxuICogQHJldHVybiB7V2ViR0xTaGFkZXI/fSBUaGUgY3JlYXRlZCBzaGFkZXIgb3IgbnVsbCBpZiBlcnJvci5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlU2hhZGVyRnJvbVNjcmlwdChnbCwgc2NyaXB0SWQsIG9wdF9zaGFkZXJUeXBlLCBvcHRfZXJyb3JDYWxsYmFjaykge1xuICB2YXIgc2hhZGVyU291cmNlID0gXCJcIjtcbiAgdmFyIHNoYWRlclNjcmlwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNjcmlwdElkKTtcbiAgaWYgKCFzaGFkZXJTY3JpcHQpIHtcbiAgICB0aHJvdyBcIioqKiBFcnJvcjogdW5rbm93biBzY3JpcHQgZWxlbWVudFwiICsgc2NyaXB0SWQ7XG4gIH1cbiAgc2hhZGVyU291cmNlID0gc2hhZGVyU2NyaXB0LnRleHQ7XG5cbiAgdmFyIHNoYWRlclR5cGUgPSBvcHRfc2hhZGVyVHlwZSB8fCBnZXRTaGFkZXJUeXBlRnJvbVNjcmlwdFR5cGUoc2hhZGVyU2NyaXB0LnR5cGUpO1xuICBpZiAoIXNoYWRlclR5cGUpIHtcbiAgICB0aHJvdyBcIioqKiBFcnJvcjogdW5rbm93biBzaGFkZXIgdHlwZVwiO1xuICB9XG5cbiAgcmV0dXJuIGxvYWRTaGFkZXIoZ2wsIHNoYWRlclNvdXJjZSwgc2hhZGVyVHlwZSwgb3B0X2Vycm9yQ2FsbGJhY2spO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwcm9ncmFtIGZyb20gMiBzY3JpcHQgdGFncy5cbiAqXG4gKiBOT1RFOiBUaGVyZSBhcmUgNCBzaWduYXR1cmVzIGZvciB0aGlzIGZ1bmN0aW9uXG4gKlxuICogICAgIHR3Z2wuY3JlYXRlUHJvZ3JhbUZyb21TY3JpcHRzKGdsLCBbdnMsIGZzXSwgb3B0X29wdGlvbnMpO1xuICogICAgIHR3Z2wuY3JlYXRlUHJvZ3JhbUZyb21TY3JpcHRzKGdsLCBbdnMsIGZzXSwgb3B0X2VyckZ1bmMpO1xuICogICAgIHR3Z2wuY3JlYXRlUHJvZ3JhbUZyb21TY3JpcHRzKGdsLCBbdnMsIGZzXSwgb3B0X2F0dHJpYnMsIG9wdF9lcnJGdW5jKTtcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1Gcm9tU2NyaXB0cyhnbCwgW3ZzLCBmc10sIG9wdF9hdHRyaWJzLCBvcHRfbG9jYXRpb25zLCBvcHRfZXJyRnVuYyk7XG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqICAgICAgICB0byB1c2UuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBzaGFkZXJTY3JpcHRJZHMgQXJyYXkgb2YgaWRzIG9mIHRoZSBzY3JpcHRcbiAqICAgICAgICB0YWdzIGZvciB0aGUgc2hhZGVycy4gVGhlIGZpcnN0IGlzIGFzc3VtZWQgdG8gYmUgdGhlXG4gKiAgICAgICAgdmVydGV4IHNoYWRlciwgdGhlIHNlY29uZCB0aGUgZnJhZ21lbnQgc2hhZGVyLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gW29wdF9hdHRyaWJzXSBBbiBhcnJheSBvZiBhdHRyaWJzIG5hbWVzLiBMb2NhdGlvbnMgd2lsbCBiZSBhc3NpZ25lZCBieSBpbmRleCBpZiBub3QgcGFzc2VkIGluXG4gKiBAcGFyYW0ge251bWJlcltdfSBbb3B0X2xvY2F0aW9uc10gVGhlIGxvY2F0aW9ucyBmb3IgdGhlLiBBIHBhcmFsbGVsIGFycmF5IHRvIG9wdF9hdHRyaWJzIGxldHRpbmcgeW91IGFzc2lnbiBsb2NhdGlvbnMuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkVycm9yQ2FsbGJhY2t9IG9wdF9lcnJvckNhbGxiYWNrIGNhbGxiYWNrIGZvciBlcnJvcnMuIEJ5IGRlZmF1bHQgaXQganVzdCBwcmludHMgYW4gZXJyb3IgdG8gdGhlIGNvbnNvbGVcbiAqICAgICAgICBvbiBlcnJvci4gSWYgeW91IHdhbnQgc29tZXRoaW5nIGVsc2UgcGFzcyBhbiBjYWxsYmFjay4gSXQncyBwYXNzZWQgYW4gZXJyb3IgbWVzc2FnZS5cbiAqIEByZXR1cm4ge1dlYkdMUHJvZ3JhbX0gVGhlIGNyZWF0ZWQgcHJvZ3JhbS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcm9ncmFtc1xuICovXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtRnJvbVNjcmlwdHMoZ2wsIHNoYWRlclNjcmlwdElkcywgb3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJvckNhbGxiYWNrKSB7XG4gIHZhciBwcm9nT3B0aW9ucyA9IGdldFByb2dyYW1PcHRpb25zKG9wdF9hdHRyaWJzLCBvcHRfbG9jYXRpb25zLCBvcHRfZXJyb3JDYWxsYmFjayk7XG4gIHZhciBzaGFkZXJzID0gW107XG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBzaGFkZXJTY3JpcHRJZHMubGVuZ3RoOyArK2lpKSB7XG4gICAgdmFyIHNoYWRlciA9IGNyZWF0ZVNoYWRlckZyb21TY3JpcHQoZ2wsIHNoYWRlclNjcmlwdElkc1tpaV0sIGdsW2RlZmF1bHRTaGFkZXJUeXBlW2lpXV0sIHByb2dPcHRpb25zLmVycm9yQ2FsbGJhY2spO1xuICAgIGlmICghc2hhZGVyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc2hhZGVycy5wdXNoKHNoYWRlcik7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVByb2dyYW0oZ2wsIHNoYWRlcnMsIHByb2dPcHRpb25zKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcHJvZ3JhbSBmcm9tIDIgc291cmNlcy5cbiAqXG4gKiBOT1RFOiBUaGVyZSBhcmUgNCBzaWduYXR1cmVzIGZvciB0aGlzIGZ1bmN0aW9uXG4gKlxuICogICAgIHR3Z2wuY3JlYXRlUHJvZ3JhbUZyb21Tb3VyY2UoZ2wsIFt2cywgZnNdLCBvcHRfb3B0aW9ucyk7XG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtRnJvbVNvdXJjZShnbCwgW3ZzLCBmc10sIG9wdF9lcnJGdW5jKTtcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1Gcm9tU291cmNlKGdsLCBbdnMsIGZzXSwgb3B0X2F0dHJpYnMsIG9wdF9lcnJGdW5jKTtcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1Gcm9tU291cmNlKGdsLCBbdnMsIGZzXSwgb3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJGdW5jKTtcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogICAgICAgIHRvIHVzZS5cbiAqIEBwYXJhbSB7c3RyaW5nW119IHNoYWRlclNvdXJjZXMgQXJyYXkgb2Ygc291cmNlcyBmb3IgdGhlXG4gKiAgICAgICAgc2hhZGVycy4gVGhlIGZpcnN0IGlzIGFzc3VtZWQgdG8gYmUgdGhlIHZlcnRleCBzaGFkZXIsXG4gKiAgICAgICAgdGhlIHNlY29uZCB0aGUgZnJhZ21lbnQgc2hhZGVyLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gW29wdF9hdHRyaWJzXSBBbiBhcnJheSBvZiBhdHRyaWJzIG5hbWVzLiBMb2NhdGlvbnMgd2lsbCBiZSBhc3NpZ25lZCBieSBpbmRleCBpZiBub3QgcGFzc2VkIGluXG4gKiBAcGFyYW0ge251bWJlcltdfSBbb3B0X2xvY2F0aW9uc10gVGhlIGxvY2F0aW9ucyBmb3IgdGhlLiBBIHBhcmFsbGVsIGFycmF5IHRvIG9wdF9hdHRyaWJzIGxldHRpbmcgeW91IGFzc2lnbiBsb2NhdGlvbnMuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkVycm9yQ2FsbGJhY2t9IG9wdF9lcnJvckNhbGxiYWNrIGNhbGxiYWNrIGZvciBlcnJvcnMuIEJ5IGRlZmF1bHQgaXQganVzdCBwcmludHMgYW4gZXJyb3IgdG8gdGhlIGNvbnNvbGVcbiAqICAgICAgICBvbiBlcnJvci4gSWYgeW91IHdhbnQgc29tZXRoaW5nIGVsc2UgcGFzcyBhbiBjYWxsYmFjay4gSXQncyBwYXNzZWQgYW4gZXJyb3IgbWVzc2FnZS5cbiAqIEByZXR1cm4ge1dlYkdMUHJvZ3JhbX0gVGhlIGNyZWF0ZWQgcHJvZ3JhbS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcm9ncmFtc1xuICovXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtRnJvbVNvdXJjZXMoZ2wsIHNoYWRlclNvdXJjZXMsIG9wdF9hdHRyaWJzLCBvcHRfbG9jYXRpb25zLCBvcHRfZXJyb3JDYWxsYmFjaykge1xuICB2YXIgcHJvZ09wdGlvbnMgPSBnZXRQcm9ncmFtT3B0aW9ucyhvcHRfYXR0cmlicywgb3B0X2xvY2F0aW9ucywgb3B0X2Vycm9yQ2FsbGJhY2spO1xuICB2YXIgc2hhZGVycyA9IFtdO1xuICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgc2hhZGVyU291cmNlcy5sZW5ndGg7ICsraWkpIHtcbiAgICB2YXIgc2hhZGVyID0gbG9hZFNoYWRlcihnbCwgc2hhZGVyU291cmNlc1tpaV0sIGdsW2RlZmF1bHRTaGFkZXJUeXBlW2lpXV0sIHByb2dPcHRpb25zLmVycm9yQ2FsbGJhY2spO1xuICAgIGlmICghc2hhZGVyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc2hhZGVycy5wdXNoKHNoYWRlcik7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVByb2dyYW0oZ2wsIHNoYWRlcnMsIHByb2dPcHRpb25zKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYXR0cmlidXRlL3VuaWZvcm0gaXMgYSByZXNlcnZlZC9idWlsdCBpblxuICpcbiAqIEl0IG1ha2VzIG5vIHNlbnNlIHRvIG1lIHdoeSBHTCByZXR1cm5zIHRoZXNlIGJlY2F1c2UgaXQnc1xuICogaWxsZWdhbCB0byBjYWxsIGBnbC5nZXRVbmlmb3JtTG9jYXRpb25gIGFuZCBgZ2wuZ2V0QXR0cmliTG9jYXRpb25gXG4gKiB3aXRoIG5hbWVzIHRoYXQgc3RhcnQgd2l0aCBgZ2xfYCAoYW5kIGB3ZWJnbF9gIGluIFdlYkdMKVxuICpcbiAqIEkgY2FuIG9ubHkgYXNzdW1lIHRoZXkgYXJlIHRoZXJlIGJlY2F1c2UgdGhleSBtaWdodCBjb3VudFxuICogd2hlbiBjb21wdXRpbmcgdGhlIG51bWJlciBvZiB1bmlmb3Jtcy9hdHRyaWJ1dGVzIHVzZWQgd2hlbiB5b3Ugd2FudCB0b1xuICoga25vdyBpZiB5b3UgYXJlIG5lYXIgdGhlIGxpbWl0LiBUaGF0IGRvZXNuJ3QgcmVhbGx5IG1ha2Ugc2Vuc2VcbiAqIHRvIG1lIGJ1dCB0aGUgZmFjdCB0aGF0IHRoZXNlIGdldCByZXR1cm5lZCBhcmUgaW4gdGhlIHNwZWMuXG4gKlxuICogQHBhcmFtIHtXZWJHTEFjdGl2ZUluZm99IGluZm8gQXMgcmV0dXJuZWQgZnJvbSBgZ2wuZ2V0QWN0aXZlVW5pZm9ybWAgb3JcbiAqICAgIGBnbC5nZXRBY3RpdmVBdHRyaWJgLlxuICogQHJldHVybiB7Ym9vbH0gdHJ1ZSBpZiBpdCdzIHJlc2VydmVkXG4gKi9cbmZ1bmN0aW9uIGlzQnVpbHRJbihpbmZvKSB7XG4gIHZhciBuYW1lID0gaW5mby5uYW1lO1xuICByZXR1cm4gbmFtZS5zdGFydHNXaXRoKFwiZ2xfXCIpIHx8IG5hbWUuc3RhcnRzV2l0aChcIndlYmdsX1wiKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIHNldHRlciBmdW5jdGlvbnMgZm9yIGFsbCB1bmlmb3JtcyBvZiBhIHNoYWRlclxuICogcHJvZ3JhbS5cbiAqXG4gKiBAc2VlIHtAbGluayBtb2R1bGU6dHdnbC5zZXRVbmlmb3Jtc31cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUHJvZ3JhbX0gcHJvZ3JhbSB0aGUgcHJvZ3JhbSB0byBjcmVhdGUgc2V0dGVycyBmb3IuXG4gKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gYW4gb2JqZWN0IHdpdGggYSBzZXR0ZXIgYnkgbmFtZSBmb3IgZWFjaCB1bmlmb3JtXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlVW5pZm9ybVNldHRlcnMoZ2wsIHByb2dyYW0pIHtcbiAgdmFyIHRleHR1cmVVbml0ID0gMDtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHNldHRlciBmb3IgYSB1bmlmb3JtIG9mIHRoZSBnaXZlbiBwcm9ncmFtIHdpdGggaXQnc1xuICAgKiBsb2NhdGlvbiBlbWJlZGRlZCBpbiB0aGUgc2V0dGVyLlxuICAgKiBAcGFyYW0ge1dlYkdMUHJvZ3JhbX0gcHJvZ3JhbVxuICAgKiBAcGFyYW0ge1dlYkdMVW5pZm9ybUluZm99IHVuaWZvcm1JbmZvXG4gICAqIEByZXR1cm5zIHtmdW5jdGlvbn0gdGhlIGNyZWF0ZWQgc2V0dGVyLlxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlVW5pZm9ybVNldHRlcihwcm9ncmFtLCB1bmlmb3JtSW5mbykge1xuICAgIHZhciBsb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCB1bmlmb3JtSW5mby5uYW1lKTtcbiAgICB2YXIgaXNBcnJheSA9IHVuaWZvcm1JbmZvLnNpemUgPiAxICYmIHVuaWZvcm1JbmZvLm5hbWUuc3Vic3RyKC0zKSA9PT0gXCJbMF1cIjtcbiAgICB2YXIgdHlwZSA9IHVuaWZvcm1JbmZvLnR5cGU7XG4gICAgdmFyIHR5cGVJbmZvID0gdHlwZU1hcFt0eXBlXTtcbiAgICBpZiAoIXR5cGVJbmZvKSB7XG4gICAgICB0aHJvdyBcInVua25vd24gdHlwZTogMHhcIiArIHR5cGUudG9TdHJpbmcoMTYpOyAvLyB3ZSBzaG91bGQgbmV2ZXIgZ2V0IGhlcmUuXG4gICAgfVxuICAgIHZhciBzZXR0ZXIgPSB2b2lkIDA7XG4gICAgaWYgKHR5cGVJbmZvLmJpbmRQb2ludCkge1xuICAgICAgLy8gaXQncyBhIHNhbXBsZXJcbiAgICAgIHZhciB1bml0ID0gdGV4dHVyZVVuaXQ7XG4gICAgICB0ZXh0dXJlVW5pdCArPSB1bmlmb3JtSW5mby5zaXplO1xuICAgICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgc2V0dGVyID0gdHlwZUluZm8uYXJyYXlTZXR0ZXIoZ2wsIHR5cGUsIHVuaXQsIGxvY2F0aW9uLCB1bmlmb3JtSW5mby5zaXplKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldHRlciA9IHR5cGVJbmZvLnNldHRlcihnbCwgdHlwZSwgdW5pdCwgbG9jYXRpb24sIHVuaWZvcm1JbmZvLnNpemUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZUluZm8uYXJyYXlTZXR0ZXIgJiYgaXNBcnJheSkge1xuICAgICAgICBzZXR0ZXIgPSB0eXBlSW5mby5hcnJheVNldHRlcihnbCwgbG9jYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0dGVyID0gdHlwZUluZm8uc2V0dGVyKGdsLCBsb2NhdGlvbik7XG4gICAgICB9XG4gICAgfVxuICAgIHNldHRlci5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIHJldHVybiBzZXR0ZXI7XG4gIH1cblxuICB2YXIgdW5pZm9ybVNldHRlcnMgPSB7fTtcbiAgdmFyIG51bVVuaWZvcm1zID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5BQ1RJVkVfVU5JRk9STVMpO1xuXG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBudW1Vbmlmb3JtczsgKytpaSkge1xuICAgIHZhciB1bmlmb3JtSW5mbyA9IGdsLmdldEFjdGl2ZVVuaWZvcm0ocHJvZ3JhbSwgaWkpO1xuICAgIGlmIChpc0J1aWx0SW4odW5pZm9ybUluZm8pKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIG5hbWUgPSB1bmlmb3JtSW5mby5uYW1lO1xuICAgIC8vIHJlbW92ZSB0aGUgYXJyYXkgc3VmZml4LlxuICAgIGlmIChuYW1lLnN1YnN0cigtMykgPT09IFwiWzBdXCIpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigwLCBuYW1lLmxlbmd0aCAtIDMpO1xuICAgIH1cbiAgICB2YXIgc2V0dGVyID0gY3JlYXRlVW5pZm9ybVNldHRlcihwcm9ncmFtLCB1bmlmb3JtSW5mbyk7XG4gICAgdW5pZm9ybVNldHRlcnNbbmFtZV0gPSBzZXR0ZXI7XG4gIH1cbiAgcmV0dXJuIHVuaWZvcm1TZXR0ZXJzO1xufVxuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRyYW5zZm9ybUZlZWRiYWNrSW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IGluZGV4IGluZGV4IG9mIHRyYW5zZm9ybSBmZWVkYmFja1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHR5cGUgR0wgdHlwZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNpemUgMSAtIDRcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQ3JlYXRlIFRyYW5zZm9ybUZlZWRiYWNrSW5mbyBmb3IgcGFzc2luZyB0byBiaW5kL3VuYmluZFRyYW5zZm9ybUZlZWRiYWNrSW5mby5cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0IHRvIHVzZS5cbiAqIEBwYXJhbSB7V2ViR0xQcm9ncmFtfSBwcm9ncmFtIGFuIGV4aXN0aW5nIFdlYkdMUHJvZ3JhbS5cbiAqIEByZXR1cm4ge09iamVjdDxzdHJpbmcsIG1vZHVsZTp0d2dsLlRyYW5zZm9ybUZlZWRiYWNrSW5mbz59XG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuZnVuY3Rpb24gY3JlYXRlVHJhbnNmb3JtRmVlZGJhY2tJbmZvKGdsLCBwcm9ncmFtKSB7XG4gIHZhciBpbmZvID0ge307XG4gIHZhciBudW1WYXJ5aW5ncyA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuVFJBTlNGT1JNX0ZFRURCQUNLX1ZBUllJTkdTKTtcbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG51bVZhcnlpbmdzOyArK2lpKSB7XG4gICAgdmFyIHZhcnlpbmcgPSBnbC5nZXRUcmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmcocHJvZ3JhbSwgaWkpO1xuICAgIGluZm9bdmFyeWluZy5uYW1lXSA9IHtcbiAgICAgIGluZGV4OiBpaSxcbiAgICAgIHR5cGU6IHZhcnlpbmcudHlwZSxcbiAgICAgIHNpemU6IHZhcnlpbmcuc2l6ZVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIGluZm87XG59XG5cbi8qKlxuICogQmluZHMgYnVmZmVycyBmb3IgdHJhbnNmb3JtIGZlZWRiYWNrLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0IHRvIHVzZS5cbiAqIEBwYXJhbSB7KG1vZHVsZTp0d2dsLlByb2dyYW1JbmZvfE9iamVjdDxzdHJpbmcsIG1vZHVsZTp0d2dsLlRyYW5zZm9ybUZlZWRiYWNrSW5mbz4pfSB0cmFuc2Zvcm1GZWVkYmFja0luZm8gQSBQcm9ncmFtSW5mbyBvciBUcmFuc2Zvcm1GZWVkYmFja0luZm8uXG4gKiBAcGFyYW0geyhtb2R1bGU6dHdnbC5CdWZmZXJJbmZvfE9iamVjdDxzdHJpbmcsIG1vZHVsZTp0d2dsLkF0dHJpYkluZm8+KX0gW2J1ZmZlckluZm9dIEEgQnVmZmVySW5mbyBvciBzZXQgb2YgQXR0cmliSW5mb3MuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuZnVuY3Rpb24gYmluZFRyYW5zZm9ybUZlZWRiYWNrSW5mbyhnbCwgdHJhbnNmb3JtRmVlZGJhY2tJbmZvLCBidWZmZXJJbmZvKSB7XG4gIGlmICh0cmFuc2Zvcm1GZWVkYmFja0luZm8udHJhbnNmb3JtRmVlZGJhY2tJbmZvKSB7XG4gICAgdHJhbnNmb3JtRmVlZGJhY2tJbmZvID0gdHJhbnNmb3JtRmVlZGJhY2tJbmZvLnRyYW5zZm9ybUZlZWRiYWNrSW5mbztcbiAgfVxuICBpZiAoYnVmZmVySW5mby5hdHRyaWJzKSB7XG4gICAgYnVmZmVySW5mbyA9IGJ1ZmZlckluZm8uYXR0cmlicztcbiAgfVxuICBmb3IgKHZhciBuYW1lIGluIGJ1ZmZlckluZm8pIHtcbiAgICB2YXIgdmFyeWluZyA9IHRyYW5zZm9ybUZlZWRiYWNrSW5mb1tuYW1lXTtcbiAgICBpZiAodmFyeWluZykge1xuICAgICAgdmFyIGJ1ZiA9IGJ1ZmZlckluZm9bbmFtZV07XG4gICAgICBpZiAoYnVmLm9mZnNldCkge1xuICAgICAgICBnbC5iaW5kQnVmZmVyUmFuZ2UoZ2wuVFJBTlNGT1JNX0ZFRURCQUNLX0JVRkZFUiwgdmFyeWluZy5pbmRleCwgYnVmLmJ1ZmZlciwgYnVmLm9mZnNldCwgYnVmLnNpemUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2wuYmluZEJ1ZmZlckJhc2UoZ2wuVFJBTlNGT1JNX0ZFRURCQUNLX0JVRkZFUiwgdmFyeWluZy5pbmRleCwgYnVmLmJ1ZmZlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVW5iaW5kcyBidWZmZXJzIGFmZXRyIHRyYW5zZm9ybSBmZWVkYmFjay5cbiAqXG4gKiBCdWZmZXJzIGNhbiBub3QgYmUgYm91bmQgdG8gMiBiaW5kIHBvaW50cyBzbyBpZiB5b3UgdHJ5IHRvIGJpbmQgYSBidWZmZXIgdXNlZFxuICogaW4gYSB0cmFuc2Zvcm0gZmVlZGJhY2sgYXMgYW4gQVJSQVlfQlVGRkVSIGZvciBhbiBhdHRyaWJ1dGUgaXQgd2lsbCBmYWlsLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gdW5iaW5kcyBhbGwgYnVmZmVycyB0aGF0IHdlcmUgYm91bmQgd2l0aCB7QGxpbmsgbW9kdWxlOnR3Z2wuYmluZFRyYW5zZm9ybUZlZWRiYWNrSW5mb30uXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQgdG8gdXNlLlxuICogQHBhcmFtIHsobW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm98T2JqZWN0PHN0cmluZywgbW9kdWxlOnR3Z2wuVHJhbnNmb3JtRmVlZGJhY2tJbmZvPil9IHRyYW5zZm9ybUZlZWRiYWNrSW5mbyBBIFByb2dyYW1JbmZvIG9yIFRyYW5zZm9ybUZlZWRiYWNrSW5mby5cbiAqIEBwYXJhbSB7KG1vZHVsZTp0d2dsLkJ1ZmZlckluZm98T2JqZWN0PHN0cmluZywgbW9kdWxlOnR3Z2wuQXR0cmliSW5mbz4pfSBbYnVmZmVySW5mb10gQSBCdWZmZXJJbmZvIG9yIHNldCBvZiBBdHRyaWJJbmZvcy5cbiAqL1xuZnVuY3Rpb24gdW5iaW5kVHJhbnNmb3JtRmVlZGJhY2tJbmZvKGdsLCB0cmFuc2Zvcm1GZWVkYmFja0luZm8sIGJ1ZmZlckluZm8pIHtcbiAgaWYgKHRyYW5zZm9ybUZlZWRiYWNrSW5mby50cmFuc2Zvcm1GZWVkYmFja0luZm8pIHtcbiAgICB0cmFuc2Zvcm1GZWVkYmFja0luZm8gPSB0cmFuc2Zvcm1GZWVkYmFja0luZm8udHJhbnNmb3JtRmVlZGJhY2tJbmZvO1xuICB9XG4gIGlmIChidWZmZXJJbmZvLmF0dHJpYnMpIHtcbiAgICBidWZmZXJJbmZvID0gYnVmZmVySW5mby5hdHRyaWJzO1xuICB9XG4gIGZvciAodmFyIG5hbWUgaW4gYnVmZmVySW5mbykge1xuICAgIHZhciB2YXJ5aW5nID0gdHJhbnNmb3JtRmVlZGJhY2tJbmZvW25hbWVdO1xuICAgIGlmICh2YXJ5aW5nKSB7XG4gICAgICBnbC5iaW5kQnVmZmVyQmFzZShnbC5UUkFOU0ZPUk1fRkVFREJBQ0tfQlVGRkVSLCB2YXJ5aW5nLmluZGV4LCBudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdHJhbnNmb3JtIGZlZWRiYWNrIGFuZCBzZXRzIHRoZSBidWZmZXJzXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dCB0byB1c2UuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlByb2dyYW1JbmZvfSBwcm9ncmFtSW5mbyBBIFByb2dyYW1JbmZvIGFzIHJldHVybmVkIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVByb2dyYW1JbmZvfVxuICogQHBhcmFtIHsobW9kdWxlOnR3Z2wuQnVmZmVySW5mb3xPYmplY3Q8c3RyaW5nLCBtb2R1bGU6dHdnbC5BdHRyaWJJbmZvPil9IFtidWZmZXJJbmZvXSBBIEJ1ZmZlckluZm8gb3Igc2V0IG9mIEF0dHJpYkluZm9zLlxuICogQHJldHVybiB7V2ViR0xUcmFuc2Zvcm1GZWVkYmFja30gdGhlIGNyZWF0ZWQgdHJhbnNmb3JtIGZlZWRiYWNrXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuZnVuY3Rpb24gY3JlYXRlVHJhbnNmb3JtRmVlZGJhY2soZ2wsIHByb2dyYW1JbmZvLCBidWZmZXJJbmZvKSB7XG4gIHZhciB0ZiA9IGdsLmNyZWF0ZVRyYW5zZm9ybUZlZWRiYWNrKCk7XG4gIGdsLmJpbmRUcmFuc2Zvcm1GZWVkYmFjayhnbC5UUkFOU0ZPUk1fRkVFREJBQ0ssIHRmKTtcbiAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtSW5mby5wcm9ncmFtKTtcbiAgYmluZFRyYW5zZm9ybUZlZWRiYWNrSW5mbyhnbCwgcHJvZ3JhbUluZm8sIGJ1ZmZlckluZm8pO1xuICBnbC5iaW5kVHJhbnNmb3JtRmVlZGJhY2soZ2wuVFJBTlNGT1JNX0ZFRURCQUNLLCBudWxsKTtcbiAgLy8gVGhpcyBpcyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGEgYnVnIGluIENocm9tZSA1Ni4gV2lsbCByZW1vdmVcbiAgLy8gd2hlbiBjaHJvbWUgZml4ZXMgaXQuXG4gIHVuYmluZFRyYW5zZm9ybUZlZWRiYWNrSW5mbyhnbCwgcHJvZ3JhbUluZm8sIGJ1ZmZlckluZm8pO1xuICByZXR1cm4gdGY7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gVW5pZm9ybURhdGFcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0eXBlIFRoZSBXZWJHTCB0eXBlIGVudW0gZm9yIHRoaXMgdW5pZm9ybVxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNpemUgVGhlIG51bWJlciBvZiBlbGVtZW50cyBmb3IgdGhpcyB1bmlmb3JtXG4gKiBAcHJvcGVydHkge251bWJlcn0gYmxvY2tOZHggVGhlIGJsb2NrIGluZGV4IHRoaXMgdW5pZm9ybSBhcHBlYXJzIGluXG4gKiBAcHJvcGVydHkge251bWJlcn0gb2Zmc2V0IFRoZSBieXRlIG9mZnNldCBpbiB0aGUgYmxvY2sgZm9yIHRoaXMgdW5pZm9ybSdzIHZhbHVlXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIFRoZSBzcGVjaWZpY2F0aW9uIGZvciBvbmUgVW5pZm9ybUJsb2NrT2JqZWN0XG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gQmxvY2tTcGVjXG4gKiBAcHJvcGVydHkge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBibG9jay5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzaXplIFRoZSBzaXplIGluIGJ5dGVzIG5lZWRlZCBmb3IgdGhlIGJsb2NrXG4gKiBAcHJvcGVydHkge251bWJlcltdfSB1bmlmb3JtSW5kaWNlcyBUaGUgaW5kaWNlcyBvZiB0aGUgdW5pZm9ybXMgdXNlZCBieSB0aGUgYmxvY2suIFRoZXNlIGluZGljZXNcbiAqICAgIGNvcnJlc3BvbmQgdG8gZW50cmllcyBpbiBhIFVuaWZvcm1EYXRhIGFycmF5IGluIHRoZSB7QGxpbmsgbW9kdWxlOnR3Z2wuVW5pZm9ybUJsb2NrU3BlY30uXG4gKiBAcHJvcGVydHkge2Jvb2x9IHVzZWRCeVZlcnRleFNoYWRlciBTZWxmIGV4cGxhbml0b3J5XG4gKiBAcHJvcGVydHkge2Jvb2x9IHVzZWRCeUZyYWdtZW50U2hhZGVyIFNlbGYgZXhwbGFuaXRvcnlcbiAqIEBwcm9wZXJ0eSB7Ym9vbH0gdXNlZCBTZWxmIGV4cGxhbml0b3J5XG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIEEgYFVuaWZvcm1CbG9ja1NwZWNgIHJlcHJlc2VudHMgdGhlIGRhdGEgbmVlZGVkIHRvIGNyZWF0ZSBhbmQgYmluZFxuICogVW5pZm9ybUJsb2NrT2JqZWN0cyBmb3IgYSBnaXZlbiBwcm9ncmFtXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gVW5pZm9ybUJsb2NrU3BlY1xuICogQHByb3BlcnR5IHtPYmplY3QuPHN0cmluZywgbW9kdWxlOnR3Z2wuQmxvY2tTcGVjPiBibG9ja1NwZWNzIFRoZSBCbG9ja1NwZWMgZm9yIGVhY2ggYmxvY2sgYnkgYmxvY2sgbmFtZVxuICogQHByb3BlcnR5IHtVbmlmb3JtRGF0YVtdfSB1bmlmb3JtRGF0YSBBbiBhcnJheSBvZiBkYXRhIGZvciBlYWNoIHVuaWZvcm0gYnkgdW5pZm9ybSBpbmRleC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIFVuaWZvcm1CbG9ja1NwZWMgZm9yIHRoZSBnaXZlbiBwcm9ncmFtLlxuICpcbiAqIEEgVW5pZm9ybUJsb2NrU3BlYyByZXByZXNlbnRzIHRoZSBkYXRhIG5lZWRlZCB0byBjcmVhdGUgYW5kIGJpbmRcbiAqIFVuaWZvcm1CbG9ja09iamVjdHNcbiAqXG4gKiBAcGFyYW0ge1dlYkdMMlJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0wyIFJlbmRlcmluZyBDb250ZXh0XG4gKiBAcGFyYW0ge1dlYkdMUHJvZ3JhbX0gcHJvZ3JhbSBBIFdlYkdMUHJvZ3JhbSBmb3IgYSBzdWNjZXNzZnVsbHkgbGlua2VkIHByb2dyYW1cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLlVuaWZvcm1CbG9ja1NwZWN9IFRoZSBjcmVhdGVkIFVuaWZvcm1CbG9ja1NwZWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcm9ncmFtc1xuICovXG5mdW5jdGlvbiBjcmVhdGVVbmlmb3JtQmxvY2tTcGVjRnJvbVByb2dyYW0oZ2wsIHByb2dyYW0pIHtcbiAgdmFyIG51bVVuaWZvcm1zID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5BQ1RJVkVfVU5JRk9STVMpO1xuICB2YXIgdW5pZm9ybURhdGEgPSBbXTtcbiAgdmFyIHVuaWZvcm1JbmRpY2VzID0gW107XG5cbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG51bVVuaWZvcm1zOyArK2lpKSB7XG4gICAgdW5pZm9ybUluZGljZXMucHVzaChpaSk7XG4gICAgdW5pZm9ybURhdGEucHVzaCh7fSk7XG4gICAgdmFyIHVuaWZvcm1JbmZvID0gZ2wuZ2V0QWN0aXZlVW5pZm9ybShwcm9ncmFtLCBpaSk7XG4gICAgaWYgKGlzQnVpbHRJbih1bmlmb3JtSW5mbykpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSRU1PVkUgWzBdP1xuICAgIHVuaWZvcm1EYXRhW2lpXS5uYW1lID0gdW5pZm9ybUluZm8ubmFtZTtcbiAgfVxuXG4gIFtbXCJVTklGT1JNX1RZUEVcIiwgXCJ0eXBlXCJdLCBbXCJVTklGT1JNX1NJWkVcIiwgXCJzaXplXCJdLCAvLyBudW0gZWxlbWVudHNcbiAgW1wiVU5JRk9STV9CTE9DS19JTkRFWFwiLCBcImJsb2NrTmR4XCJdLCBbXCJVTklGT1JNX09GRlNFVFwiLCBcIm9mZnNldFwiXV0uZm9yRWFjaChmdW5jdGlvbiAocGFpcikge1xuICAgIHZhciBwbmFtZSA9IHBhaXJbMF07XG4gICAgdmFyIGtleSA9IHBhaXJbMV07XG4gICAgZ2wuZ2V0QWN0aXZlVW5pZm9ybXMocHJvZ3JhbSwgdW5pZm9ybUluZGljZXMsIGdsW3BuYW1lXSkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIG5keCkge1xuICAgICAgdW5pZm9ybURhdGFbbmR4XVtrZXldID0gdmFsdWU7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHZhciBibG9ja1NwZWNzID0ge307XG5cbiAgdmFyIG51bVVuaWZvcm1CbG9ja3MgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkFDVElWRV9VTklGT1JNX0JMT0NLUyk7XG4gIGZvciAodmFyIF9paSA9IDA7IF9paSA8IG51bVVuaWZvcm1CbG9ja3M7ICsrX2lpKSB7XG4gICAgdmFyIG5hbWUgPSBnbC5nZXRBY3RpdmVVbmlmb3JtQmxvY2tOYW1lKHByb2dyYW0sIF9paSk7XG4gICAgdmFyIGJsb2NrU3BlYyA9IHtcbiAgICAgIGluZGV4OiBfaWksXG4gICAgICB1c2VkQnlWZXJ0ZXhTaGFkZXI6IGdsLmdldEFjdGl2ZVVuaWZvcm1CbG9ja1BhcmFtZXRlcihwcm9ncmFtLCBfaWksIGdsLlVOSUZPUk1fQkxPQ0tfUkVGRVJFTkNFRF9CWV9WRVJURVhfU0hBREVSKSxcbiAgICAgIHVzZWRCeUZyYWdtZW50U2hhZGVyOiBnbC5nZXRBY3RpdmVVbmlmb3JtQmxvY2tQYXJhbWV0ZXIocHJvZ3JhbSwgX2lpLCBnbC5VTklGT1JNX0JMT0NLX1JFRkVSRU5DRURfQllfRlJBR01FTlRfU0hBREVSKSxcbiAgICAgIHNpemU6IGdsLmdldEFjdGl2ZVVuaWZvcm1CbG9ja1BhcmFtZXRlcihwcm9ncmFtLCBfaWksIGdsLlVOSUZPUk1fQkxPQ0tfREFUQV9TSVpFKSxcbiAgICAgIHVuaWZvcm1JbmRpY2VzOiBnbC5nZXRBY3RpdmVVbmlmb3JtQmxvY2tQYXJhbWV0ZXIocHJvZ3JhbSwgX2lpLCBnbC5VTklGT1JNX0JMT0NLX0FDVElWRV9VTklGT1JNX0lORElDRVMpXG4gICAgfTtcbiAgICBibG9ja1NwZWMudXNlZCA9IGJsb2NrU3BlYy51c2VkQnlWZXJ0ZXhTYWhkZXIgfHwgYmxvY2tTcGVjLnVzZWRCeUZyYWdtZW50U2hhZGVyO1xuICAgIGJsb2NrU3BlY3NbbmFtZV0gPSBibG9ja1NwZWM7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJsb2NrU3BlY3M6IGJsb2NrU3BlY3MsXG4gICAgdW5pZm9ybURhdGE6IHVuaWZvcm1EYXRhXG4gIH07XG59XG5cbnZhciBhcnJheVN1ZmZpeFJFID0gL1xcW1xcZCtcXF1cXC4kLzsgLy8gYmV0dGVyIHdheSB0byBjaGVjaz9cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgVW5pZm9ybUJsb2NrT2JqZWN0IGluY2x1ZGluZyBhbiBBcnJheUJ1ZmZlciB3aXRoIGFsbCB0aGUgdW5pZm9ybSB2YWx1ZXNcbiAqIGFuZCBhIGNvcnJlc3BvbmRpbmcgV2ViR0xCdWZmZXIgdG8gaG9sZCB0aG9zZSB2YWx1ZXMgb24gdGhlIEdQVVxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFVuaWZvcm1CbG9ja0luZm9cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBibG9ja1xuICogQHByb3BlcnR5IHtBcnJheUJ1ZmZlcn0gYXJyYXkgVGhlIGFycmF5IGJ1ZmZlciB0aGF0IGNvbnRhaW5zIHRoZSB1bmlmb3JtIHZhbHVlc1xuICogQHByb3BlcnR5IHtGbG9hdDMyQXJyYXl9IGFzRmxvYXQgQSBmbG9hdCB2aWV3IG9uIHRoZSBhcnJheSBidWZmZXIuIFRoaXMgaXMgdXNlZnVsXG4gKiAgICBpbnNwZWN0aW5nIHRoZSBjb250ZW50cyBvZiB0aGUgYnVmZmVyIGluIHRoZSBkZWJ1Z2dlci5cbiAqIEBwcm9wZXJ0eSB7V2ViR0xCdWZmZXJ9IGJ1ZmZlciBBIFdlYkdMIGJ1ZmZlciB0aGF0IHdpbGwgaG9sZCBhIGNvcHkgb2YgdGhlIHVuaWZvcm0gdmFsdWVzIGZvciByZW5kZXJpbmcuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW29mZnNldF0gb2Zmc2V0IGludG8gYnVmZmVyXG4gKiBAcHJvcGVydHkge09iamVjdC48c3RyaW5nLCBBcnJheUJ1ZmZlclZpZXc+fSB1bmlmb3JtcyBBIHVuaWZvcm0gbmFtZSB0byBBcnJheUJ1ZmZlclZpZXcgbWFwLlxuICogICBlYWNoIFVuaWZvcm0gaGFzIGEgY29ycmVjdGx5IHR5cGVkIGBBcnJheUJ1ZmZlclZpZXdgIGludG8gYXJyYXkgYXQgdGhlIGNvcnJlY3Qgb2Zmc2V0XG4gKiAgIGFuZCBsZW5ndGggb2YgdGhhdCB1bmlmb3JtLiBTbyBmb3IgZXhhbXBsZSBhIGZsb2F0IHVuaWZvcm0gd291bGQgaGF2ZSBhIDEgZmxvYXQgYEZsb2F0MzJBcnJheWBcbiAqICAgdmlldy4gQSBzaW5nbGUgbWF0NCB3b3VsZCBoYXZlIGEgMTYgZWxlbWVudCBgRmxvYXQzMkFycmF5YCB2aWV3LiBBbiBpdmVjMiB3b3VsZCBoYXZlIGFuXG4gKiAgIGBJbnQzMkFycmF5YCB2aWV3LCBldGMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBgVW5pZm9ybUJsb2NrSW5mb2AgZm9yIHRoZSBzcGVjaWZpZWQgYmxvY2tcbiAqXG4gKiBOb3RlOiAqKklmIHRoZSBibG9ja05hbWUgbWF0Y2hlcyBubyBleGlzdGluZyBibG9ja3MgYSB3YXJuaW5nIGlzIHByaW50ZWQgdG8gdGhlIGNvbnNvbGUgYW5kIGEgZHVtbXlcbiAqIGBVbmlmb3JtQmxvY2tJbmZvYCBpcyByZXR1cm5lZCoqLiBUaGlzIGlzIGJlY2F1c2Ugd2hlbiBkZWJ1Z2dpbmcgR0xTTFxuICogaXQgaXMgY29tbW9uIHRvIGNvbW1lbnQgb3V0IGxhcmdlIHBvcnRpb25zIG9mIGEgc2hhZGVyIG9yIGZvciBleGFtcGxlIHNldFxuICogdGhlIGZpbmFsIG91dHB1dCB0byBhIGNvbnN0YW50LiBXaGVuIHRoYXQgaGFwcGVucyBibG9ja3MgZ2V0IG9wdGltaXplZCBvdXQuXG4gKiBJZiB0aGlzIGZ1bmN0aW9uIGRpZCBub3QgY3JlYXRlIGR1bW15IGJsb2NrcyB5b3VyIGNvZGUgd291bGQgY3Jhc2ggd2hlbiBkZWJ1Z2dpbmcuXG4gKlxuICogQHBhcmFtIHtXZWJHTDJSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMMlJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7V2ViR0xQcm9ncmFtfSBwcm9ncmFtIEEgV2ViR0xQcm9ncmFtXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlVuaWZvcm1CbG9ja1NwZWN9IHVpbmZvcm1CbG9ja1NwZWMuIEEgVW5pZm9ybUJsb2NrU3BlYyBhcyByZXR1cm5lZFxuICogICAgIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVVuaWZvcm1CbG9ja1NwZWNGcm9tUHJvZ3JhbX0uXG4gKiBAcGFyYW0ge3N0cmluZ30gYmxvY2tOYW1lIFRoZSBuYW1lIG9mIHRoZSBibG9jay5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLlVuaWZvcm1CbG9ja0luZm99IFRoZSBjcmVhdGVkIFVuaWZvcm1CbG9ja0luZm9cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcm9ncmFtc1xuICovXG5mdW5jdGlvbiBjcmVhdGVVbmlmb3JtQmxvY2tJbmZvRnJvbVByb2dyYW0oZ2wsIHByb2dyYW0sIHVuaWZvcm1CbG9ja1NwZWMsIGJsb2NrTmFtZSkge1xuICB2YXIgYmxvY2tTcGVjcyA9IHVuaWZvcm1CbG9ja1NwZWMuYmxvY2tTcGVjcztcbiAgdmFyIHVuaWZvcm1EYXRhID0gdW5pZm9ybUJsb2NrU3BlYy51bmlmb3JtRGF0YTtcbiAgdmFyIGJsb2NrU3BlYyA9IGJsb2NrU3BlY3NbYmxvY2tOYW1lXTtcbiAgaWYgKCFibG9ja1NwZWMpIHtcbiAgICB3YXJuKFwibm8gdW5pZm9ybSBibG9jayBvYmplY3QgbmFtZWQ6XCIsIGJsb2NrTmFtZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGJsb2NrTmFtZSxcbiAgICAgIHVuaWZvcm1zOiB7fVxuICAgIH07XG4gIH1cbiAgdmFyIGFycmF5ID0gbmV3IEFycmF5QnVmZmVyKGJsb2NrU3BlYy5zaXplKTtcbiAgdmFyIGJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICB2YXIgdW5pZm9ybUJ1ZmZlckluZGV4ID0gYmxvY2tTcGVjLmluZGV4O1xuICBnbC5iaW5kQnVmZmVyKGdsLlVOSUZPUk1fQlVGRkVSLCBidWZmZXIpO1xuICBnbC51bmlmb3JtQmxvY2tCaW5kaW5nKHByb2dyYW0sIGJsb2NrU3BlYy5pbmRleCwgdW5pZm9ybUJ1ZmZlckluZGV4KTtcblxuICB2YXIgcHJlZml4ID0gYmxvY2tOYW1lICsgXCIuXCI7XG4gIGlmIChhcnJheVN1ZmZpeFJFLnRlc3QocHJlZml4KSkge1xuICAgIHByZWZpeCA9IHByZWZpeC5yZXBsYWNlKGFycmF5U3VmZml4UkUsIFwiLlwiKTtcbiAgfVxuICB2YXIgdW5pZm9ybXMgPSB7fTtcbiAgYmxvY2tTcGVjLnVuaWZvcm1JbmRpY2VzLmZvckVhY2goZnVuY3Rpb24gKHVuaWZvcm1OZHgpIHtcbiAgICB2YXIgZGF0YSA9IHVuaWZvcm1EYXRhW3VuaWZvcm1OZHhdO1xuICAgIHZhciB0eXBlSW5mbyA9IHR5cGVNYXBbZGF0YS50eXBlXTtcbiAgICB2YXIgVHlwZSA9IHR5cGVJbmZvLlR5cGU7XG4gICAgdmFyIGxlbmd0aCA9IGRhdGEuc2l6ZSAqIHR5cGVJbmZvLnNpemU7XG4gICAgdmFyIG5hbWUgPSBkYXRhLm5hbWU7XG4gICAgaWYgKG5hbWUuc3Vic3RyKDAsIHByZWZpeC5sZW5ndGgpID09PSBwcmVmaXgpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cihwcmVmaXgubGVuZ3RoKTtcbiAgICB9XG4gICAgdW5pZm9ybXNbbmFtZV0gPSBuZXcgVHlwZShhcnJheSwgZGF0YS5vZmZzZXQsIGxlbmd0aCAvIFR5cGUuQllURVNfUEVSX0VMRU1FTlQpO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBibG9ja05hbWUsXG4gICAgYXJyYXk6IGFycmF5LFxuICAgIGFzRmxvYXQ6IG5ldyBGbG9hdDMyQXJyYXkoYXJyYXkpLCAvLyBmb3IgZGVidWdnaW5nXG4gICAgYnVmZmVyOiBidWZmZXIsXG4gICAgdW5pZm9ybXM6IHVuaWZvcm1zXG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGBVbmlmb3JtQmxvY2tJbmZvYCBmb3IgdGhlIHNwZWNpZmllZCBibG9ja1xuICpcbiAqIE5vdGU6ICoqSWYgdGhlIGJsb2NrTmFtZSBtYXRjaGVzIG5vIGV4aXN0aW5nIGJsb2NrcyBhIHdhcm5pbmcgaXMgcHJpbnRlZCB0byB0aGUgY29uc29sZSBhbmQgYSBkdW1teVxuICogYFVuaWZvcm1CbG9ja0luZm9gIGlzIHJldHVybmVkKiouIFRoaXMgaXMgYmVjYXVzZSB3aGVuIGRlYnVnZ2luZyBHTFNMXG4gKiBpdCBpcyBjb21tb24gdG8gY29tbWVudCBvdXQgbGFyZ2UgcG9ydGlvbnMgb2YgYSBzaGFkZXIgb3IgZm9yIGV4YW1wbGUgc2V0XG4gKiB0aGUgZmluYWwgb3V0cHV0IHRvIGEgY29uc3RhbnQuIFdoZW4gdGhhdCBoYXBwZW5zIGJsb2NrcyBnZXQgb3B0aW1pemVkIG91dC5cbiAqIElmIHRoaXMgZnVuY3Rpb24gZGlkIG5vdCBjcmVhdGUgZHVtbXkgYmxvY2tzIHlvdXIgY29kZSB3b3VsZCBjcmFzaCB3aGVuIGRlYnVnZ2luZy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMMlJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0wyUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5Qcm9ncmFtSW5mb30gcHJvZ3JhbUluZm8gYSBgUHJvZ3JhbUluZm9gXG4gKiAgICAgYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlUHJvZ3JhbUluZm99XG4gKiBAcGFyYW0ge3N0cmluZ30gYmxvY2tOYW1lIFRoZSBuYW1lIG9mIHRoZSBibG9jay5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLlVuaWZvcm1CbG9ja0luZm99IFRoZSBjcmVhdGVkIFVuaWZvcm1CbG9ja0luZm9cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcm9ncmFtc1xuICovXG5mdW5jdGlvbiBjcmVhdGVVbmlmb3JtQmxvY2tJbmZvKGdsLCBwcm9ncmFtSW5mbywgYmxvY2tOYW1lKSB7XG4gIHJldHVybiBjcmVhdGVVbmlmb3JtQmxvY2tJbmZvRnJvbVByb2dyYW0oZ2wsIHByb2dyYW1JbmZvLnByb2dyYW0sIHByb2dyYW1JbmZvLnVuaWZvcm1CbG9ja1NwZWMsIGJsb2NrTmFtZSk7XG59XG5cbi8qKlxuICogQmluZHMgYSB1bmZvcm0gYmxvY2sgdG8gdGhlIG1hdGNoaW5nIHVuaWZvcm0gYmxvY2sgcG9pbnQuXG4gKiBNYXRjaGVzIGJ5IGJsb2NrcyBieSBuYW1lIHNvIGJsb2NrcyBtdXN0IGhhdmUgdGhlIHNhbWUgbmFtZSBub3QganVzdCB0aGUgc2FtZVxuICogc3RydWN0dXJlLlxuICpcbiAqIElmIHlvdSBoYXZlIGNoYW5nZWQgYW55IHZhbHVlcyBhbmQgeW91IHVwbG9hZCB0aGUgdmFsdXMgaW50byB0aGUgY29ycmVzcG9uZGluZyBXZWJHTEJ1ZmZlclxuICogY2FsbCB7QGxpbmsgbW9kdWxlOnR3Z2wuc2V0VW5pZm9ybUJsb2NrfSBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7V2ViR0wyUmVuZGVyaW5nQ29udGV4dH0gZ2wgQSBXZWJHTCAyIHJlbmRlcmluZyBjb250ZXh0LlxuICogQHBhcmFtIHsobW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm98bW9kdWxlOnR3Z2wuVW5pZm9ybUJsb2NrU3BlYyl9IHByb2dyYW1JbmZvIGEgYFByb2dyYW1JbmZvYFxuICogICAgIGFzIHJldHVybmVkIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVByb2dyYW1JbmZvfSBvciBvciBgVW5pZm9ybUJsb2NrU3BlY2AgYXNcbiAqICAgICByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVVbmlmb3JtQmxvY2tTcGVjRnJvbVByb2dyYW19LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5Vbmlmb3JtQmxvY2tJbmZvfSB1bmlmb3JtQmxvY2tJbmZvIGEgYFVuaWZvcm1CbG9ja0luZm9gIGFzIHJldHVybmVkIGZyb21cbiAqICAgICB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlVW5pZm9ybUJsb2NrSW5mb30uXG4gKiBAcmV0dXJuIHtib29sfSB0cnVlIGlmIGJ1ZmZlciB3YXMgYm91bmQuIElmIHRoZSBwcm9ncmFtSW5mbyBoYXMgbm8gYmxvY2sgd2l0aCB0aGUgc2FtZSBibG9jayBuYW1lXG4gKiAgICAgbm8gYnVmZmVyIGlzIGJvdW5kLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cbmZ1bmN0aW9uIGJpbmRVbmlmb3JtQmxvY2soZ2wsIHByb2dyYW1JbmZvLCB1bmlmb3JtQmxvY2tJbmZvKSB7XG4gIHZhciB1bmlmb3JtQmxvY2tTcGVjID0gcHJvZ3JhbUluZm8udW5pZm9ybUJsb2NrU3BlYyB8fCBwcm9ncmFtSW5mbztcbiAgdmFyIGJsb2NrU3BlYyA9IHVuaWZvcm1CbG9ja1NwZWMuYmxvY2tTcGVjc1t1bmlmb3JtQmxvY2tJbmZvLm5hbWVdO1xuICBpZiAoYmxvY2tTcGVjKSB7XG4gICAgdmFyIGJ1ZmZlckJpbmRJbmRleCA9IGJsb2NrU3BlYy5pbmRleDtcbiAgICBnbC5iaW5kQnVmZmVyUmFuZ2UoZ2wuVU5JRk9STV9CVUZGRVIsIGJ1ZmZlckJpbmRJbmRleCwgdW5pZm9ybUJsb2NrSW5mby5idWZmZXIsIHVuaWZvcm1CbG9ja0luZm8ub2Zmc2V0IHx8IDAsIHVuaWZvcm1CbG9ja0luZm8uYXJyYXkuYnl0ZUxlbmd0aCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFVwbG9hZHMgdGhlIGN1cnJlbnQgdW5pZm9ybSB2YWx1ZXMgdG8gdGhlIGNvcnJlc3BvbmRpbmcgV2ViR0xCdWZmZXJcbiAqIGFuZCBiaW5kcyB0aGF0IGJ1ZmZlciB0byB0aGUgcHJvZ3JhbSdzIGNvcnJlc3BvbmRpbmcgYmluZCBwb2ludCBmb3IgdGhlIHVuaWZvcm0gYmxvY2sgb2JqZWN0LlxuICpcbiAqIElmIHlvdSBoYXZlbid0IGNoYW5nZWQgYW55IHZhbHVlcyBhbmQgeW91IG9ubHkgbmVlZCB0byBiaW5kIHRoZSB1bmlmb3JtIGJsb2NrIG9iamVjdFxuICogY2FsbCB7QGxpbmsgbW9kdWxlOnR3Z2wuYmluZFVuaWZvcm1CbG9ja30gaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMMlJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0wgMiByZW5kZXJpbmcgY29udGV4dC5cbiAqIEBwYXJhbSB7KG1vZHVsZTp0d2dsLlByb2dyYW1JbmZvfG1vZHVsZTp0d2dsLlVuaWZvcm1CbG9ja1NwZWMpfSBwcm9ncmFtSW5mbyBhIGBQcm9ncmFtSW5mb2BcbiAqICAgICBhcyByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVQcm9ncmFtSW5mb30gb3Igb3IgYFVuaWZvcm1CbG9ja1NwZWNgIGFzXG4gKiAgICAgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlVW5pZm9ybUJsb2NrU3BlY0Zyb21Qcm9ncmFtfS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVW5pZm9ybUJsb2NrSW5mb30gdW5pZm9ybUJsb2NrSW5mbyBhIGBVbmlmb3JtQmxvY2tJbmZvYCBhcyByZXR1cm5lZCBmcm9tXG4gKiAgICAge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVVuaWZvcm1CbG9ja0luZm99LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cbmZ1bmN0aW9uIHNldFVuaWZvcm1CbG9jayhnbCwgcHJvZ3JhbUluZm8sIHVuaWZvcm1CbG9ja0luZm8pIHtcbiAgaWYgKGJpbmRVbmlmb3JtQmxvY2soZ2wsIHByb2dyYW1JbmZvLCB1bmlmb3JtQmxvY2tJbmZvKSkge1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuVU5JRk9STV9CVUZGRVIsIHVuaWZvcm1CbG9ja0luZm8uYXJyYXksIGdsLkRZTkFNSUNfRFJBVyk7XG4gIH1cbn1cblxuLyoqXG4gKiBTZXRzIHZhbHVlcyBvZiBhIHVuaWZvcm0gYmxvY2sgb2JqZWN0XG4gKlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5Vbmlmb3JtQmxvY2tJbmZvfSB1bmlmb3JtQmxvY2tJbmZvIEEgVW5pZm9ybUJsb2NrSW5mbyBhcyByZXR1cm5lZCBieSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlVW5pZm9ybUJsb2NrSW5mb30uXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCA/Pn0gdmFsdWVzIEEgdW5pZm9ybSBuYW1lIHRvIHZhbHVlIG1hcCB3aGVyZSB0aGUgdmFsdWUgaXMgY29ycmVjdCBmb3IgdGhlIGdpdmVuXG4gKiAgICB0eXBlIG9mIHVuaWZvcm0uIFNvIGZvciBleGFtcGxlIGdpdmVuIGEgYmxvY2sgbGlrZVxuICpcbiAqICAgICAgIHVuaWZvcm0gU29tZUJsb2NrIHtcbiAqICAgICAgICAgZmxvYXQgc29tZUZsb2F0O1xuICogICAgICAgICB2ZWMyIHNvbWVWZWMyO1xuICogICAgICAgICB2ZWMzIHNvbWVWZWMzQXJyYXlbMl07XG4gKiAgICAgICAgIGludCBzb21lSW50O1xuICogICAgICAgfVxuICpcbiAqICBZb3UgY2FuIHNldCB0aGUgdmFsdWVzIG9mIHRoZSB1bmlmb3JtIGJsb2NrIHdpdGhcbiAqXG4gKiAgICAgICB0d2dsLnNldEJsb2NrVW5pZm9ybXMoc29tZUJsb2NrSW5mbywge1xuICogICAgICAgICAgc29tZUZsb2F0OiAxMi4zLFxuICogICAgICAgICAgc29tZVZlYzI6IFsxLCAyXSxcbiAqICAgICAgICAgIHNvbWVWZWMzQXJyYXk6IFsxLCAyLCAzLCA0LCA1LCA2XSxcbiAqICAgICAgICAgIHNvbWVJbnQ6IDUsXG4gKiAgICAgICB9XG4gKlxuICogIEFycmF5cyBjYW4gYmUgSmF2YVNjcmlwdCBhcnJheXMgb3IgdHlwZWQgYXJyYXlzXG4gKlxuICogIEFueSBuYW1lIHRoYXQgZG9lc24ndCBtYXRjaCB3aWxsIGJlIGlnbm9yZWRcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcm9ncmFtc1xuICovXG5mdW5jdGlvbiBzZXRCbG9ja1VuaWZvcm1zKHVuaWZvcm1CbG9ja0luZm8sIHZhbHVlcykge1xuICB2YXIgdW5pZm9ybXMgPSB1bmlmb3JtQmxvY2tJbmZvLnVuaWZvcm1zO1xuICBmb3IgKHZhciBuYW1lIGluIHZhbHVlcykge1xuICAgIHZhciBhcnJheSA9IHVuaWZvcm1zW25hbWVdO1xuICAgIGlmIChhcnJheSkge1xuICAgICAgdmFyIHZhbHVlID0gdmFsdWVzW25hbWVdO1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xuICAgICAgICBhcnJheS5zZXQodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlbMF0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBTZXQgdW5pZm9ybXMgYW5kIGJpbmRzIHJlbGF0ZWQgdGV4dHVyZXMuXG4gKlxuICogZXhhbXBsZTpcbiAqXG4gKiAgICAgY29uc3QgcHJvZ3JhbUluZm8gPSBjcmVhdGVQcm9ncmFtSW5mbyhcbiAqICAgICAgICAgZ2wsIFtcInNvbWUtdnNcIiwgXCJzb21lLWZzXCJdKTtcbiAqXG4gKiAgICAgY29uc3QgdGV4MSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAqICAgICBjb25zdCB0ZXgyID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICpcbiAqICAgICAuLi4gYXNzdW1lIHdlIHNldHVwIHRoZSB0ZXh0dXJlcyB3aXRoIGRhdGEgLi4uXG4gKlxuICogICAgIGNvbnN0IHVuaWZvcm1zID0ge1xuICogICAgICAgdV9zb21lU2FtcGxlcjogdGV4MSxcbiAqICAgICAgIHVfc29tZU90aGVyU2FtcGxlcjogdGV4MixcbiAqICAgICAgIHVfc29tZUNvbG9yOiBbMSwwLDAsMV0sXG4gKiAgICAgICB1X3NvbWVQb3NpdGlvbjogWzAsMSwxXSxcbiAqICAgICAgIHVfc29tZU1hdHJpeDogW1xuICogICAgICAgICAxLDAsMCwwLFxuICogICAgICAgICAwLDEsMCwwLFxuICogICAgICAgICAwLDAsMSwwLFxuICogICAgICAgICAwLDAsMCwwLFxuICogICAgICAgXSxcbiAqICAgICB9O1xuICpcbiAqICAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xuICpcbiAqIFRoaXMgd2lsbCBhdXRvbWF0aWNhbGx5IGJpbmQgdGhlIHRleHR1cmVzIEFORCBzZXQgdGhlXG4gKiB1bmlmb3Jtcy5cbiAqXG4gKiAgICAgdHdnbC5zZXRVbmlmb3Jtcyhwcm9ncmFtSW5mbywgdW5pZm9ybXMpO1xuICpcbiAqIEZvciB0aGUgZXhhbXBsZSBhYm92ZSBpdCBpcyBlcXVpdmFsZW50IHRvXG4gKlxuICogICAgIHZhciB0ZXhVbml0ID0gMDtcbiAqICAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgdGV4VW5pdCk7XG4gKiAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4MSk7XG4gKiAgICAgZ2wudW5pZm9ybTFpKHVfc29tZVNhbXBsZXJMb2NhdGlvbiwgdGV4VW5pdCsrKTtcbiAqICAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgdGV4VW5pdCk7XG4gKiAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4Mik7XG4gKiAgICAgZ2wudW5pZm9ybTFpKHVfc29tZVNhbXBsZXJMb2NhdGlvbiwgdGV4VW5pdCsrKTtcbiAqICAgICBnbC51bmlmb3JtNGZ2KHVfc29tZUNvbG9yTG9jYXRpb24sIFsxLCAwLCAwLCAxXSk7XG4gKiAgICAgZ2wudW5pZm9ybTNmdih1X3NvbWVQb3NpdGlvbkxvY2F0aW9uLCBbMCwgMSwgMV0pO1xuICogICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYodV9zb21lTWF0cml4LCBmYWxzZSwgW1xuICogICAgICAgICAxLDAsMCwwLFxuICogICAgICAgICAwLDEsMCwwLFxuICogICAgICAgICAwLDAsMSwwLFxuICogICAgICAgICAwLDAsMCwwLFxuICogICAgICAgXSk7XG4gKlxuICogTm90ZSBpdCBpcyBwZXJmZWN0bHkgcmVhc29uYWJsZSB0byBjYWxsIGBzZXRVbmlmb3Jtc2AgbXVsdGlwbGUgdGltZXMuIEZvciBleGFtcGxlXG4gKlxuICogICAgIGNvbnN0IHVuaWZvcm1zID0ge1xuICogICAgICAgdV9zb21lU2FtcGxlcjogdGV4MSxcbiAqICAgICAgIHVfc29tZU90aGVyU2FtcGxlcjogdGV4MixcbiAqICAgICB9O1xuICpcbiAqICAgICBjb25zdCBtb3JlVW5pZm9ybXMge1xuICogICAgICAgdV9zb21lQ29sb3I6IFsxLDAsMCwxXSxcbiAqICAgICAgIHVfc29tZVBvc2l0aW9uOiBbMCwxLDFdLFxuICogICAgICAgdV9zb21lTWF0cml4OiBbXG4gKiAgICAgICAgIDEsMCwwLDAsXG4gKiAgICAgICAgIDAsMSwwLDAsXG4gKiAgICAgICAgIDAsMCwxLDAsXG4gKiAgICAgICAgIDAsMCwwLDAsXG4gKiAgICAgICBdLFxuICogICAgIH07XG4gKlxuICogICAgIHR3Z2wuc2V0VW5pZm9ybXMocHJvZ3JhbUluZm8sIHVuaWZvcm1zKTtcbiAqICAgICB0d2dsLnNldFVuaWZvcm1zKHByb2dyYW1JbmZvLCBtb3JlVW5pZm9ybXMpO1xuICpcbiAqIFlvdSBjYW4gYWxzbyBhZGQgV2ViR0xTYW1wbGVycyB0byB1bmlmb3JtIHNhbXBsZXJzIGFzIGluXG4gKlxuICogICAgIGNvbnN0IHVuaWZvcm1zID0ge1xuICogICAgICAgdV9zb21lU2FtcGxlcjoge1xuICogICAgICAgICB0ZXh0dXJlOiBzb21lV2ViR0xUZXh0dXJlLFxuICogICAgICAgICBzYW1wbGVyOiBzb21lV2ViR0xTYW1wbGVyLFxuICogICAgICAgfSxcbiAqICAgICB9O1xuICpcbiAqIEluIHdoaWNoIGNhc2UgYm90aCB0aGUgc2FtcGxlciBhbmQgdGV4dHVyZSB3aWxsIGJlIGJvdW5kIHRvIHRoZVxuICogc2FtZSB1bml0LlxuICpcbiAqIEBwYXJhbSB7KG1vZHVsZTp0d2dsLlByb2dyYW1JbmZvfE9iamVjdC48c3RyaW5nLCBmdW5jdGlvbj4pfSBzZXR0ZXJzIGEgYFByb2dyYW1JbmZvYCBhcyByZXR1cm5lZCBmcm9tIGBjcmVhdGVQcm9ncmFtSW5mb2Agb3IgdGhlIHNldHRlcnMgcmV0dXJuZWQgZnJvbVxuICogICAgICAgIGBjcmVhdGVVbmlmb3JtU2V0dGVyc2AuXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCA/Pn0gdmFsdWVzIGFuIG9iamVjdCB3aXRoIHZhbHVlcyBmb3IgdGhlXG4gKiAgICAgICAgdW5pZm9ybXMuXG4gKiAgIFlvdSBjYW4gcGFzcyBtdWx0aXBsZSBvYmplY3RzIGJ5IHB1dHRpbmcgdGhlbSBpbiBhbiBhcnJheSBvciBieSBjYWxsaW5nIHdpdGggbW9yZSBhcmd1bWVudHMuRm9yIGV4YW1wbGVcbiAqXG4gKiAgICAgY29uc3Qgc2hhcmVkVW5pZm9ybXMgPSB7XG4gKiAgICAgICB1X2ZvZ05lYXI6IDEwLFxuICogICAgICAgdV9wcm9qZWN0aW9uOiAuLi5cbiAqICAgICAgIC4uLlxuICogICAgIH07XG4gKlxuICogICAgIGNvbnN0IGxvY2FsVW5pZm9ybXMgPSB7XG4gKiAgICAgICB1X3dvcmxkOiAuLi5cbiAqICAgICAgIHVfZGlmZnVzZUNvbG9yOiAuLi5cbiAqICAgICB9O1xuICpcbiAqICAgICB0d2dsLnNldFVuaWZvcm1zKHByb2dyYW1JbmZvLCBzaGFyZWRVbmlmb3JtcywgbG9jYWxVbmlmb3Jtcyk7XG4gKlxuICogICAgIC8vIGlzIHRoZSBzYW1lIGFzXG4gKlxuICogICAgIHR3Z2wuc2V0VW5pZm9ybXMocHJvZ3JhbUluZm8sIFtzaGFyZWRVbmlmb3JtcywgbG9jYWxVbmlmb3Jtc10pO1xuICpcbiAqICAgICAvLyBpcyB0aGUgc2FtZSBhc1xuICpcbiAqICAgICB0d2dsLnNldFVuaWZvcm1zKHByb2dyYW1JbmZvLCBzaGFyZWRVbmlmb3Jtcyk7XG4gKiAgICAgdHdnbC5zZXRVbmlmb3Jtcyhwcm9ncmFtSW5mbywgbG9jYWxVbmlmb3Jtc307XG4gKlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cbmZ1bmN0aW9uIHNldFVuaWZvcm1zKHNldHRlcnMsIHZhbHVlcykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIHZhciBhY3R1YWxTZXR0ZXJzID0gc2V0dGVycy51bmlmb3JtU2V0dGVycyB8fCBzZXR0ZXJzO1xuICB2YXIgbnVtQXJncyA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIGZvciAodmFyIGFuZHggPSAxOyBhbmR4IDwgbnVtQXJnczsgKythbmR4KSB7XG4gICAgdmFyIHZhbHMgPSBhcmd1bWVudHNbYW5keF07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFscykpIHtcbiAgICAgIHZhciBudW1WYWx1ZXMgPSB2YWxzLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBudW1WYWx1ZXM7ICsraWkpIHtcbiAgICAgICAgc2V0VW5pZm9ybXMoYWN0dWFsU2V0dGVycywgdmFsc1tpaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIHZhbHMpIHtcbiAgICAgICAgdmFyIHNldHRlciA9IGFjdHVhbFNldHRlcnNbbmFtZV07XG4gICAgICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgICAgICBzZXR0ZXIodmFsc1tuYW1lXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIHNldHRlciBmdW5jdGlvbnMgZm9yIGFsbCBhdHRyaWJ1dGVzIG9mIGEgc2hhZGVyXG4gKiBwcm9ncmFtLiBZb3UgY2FuIHBhc3MgdGhpcyB0byB7QGxpbmsgbW9kdWxlOnR3Z2wuc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXN9IHRvIHNldCBhbGwgeW91ciBidWZmZXJzIGFuZCBhdHRyaWJ1dGVzLlxuICpcbiAqIEBzZWUge0BsaW5rIG1vZHVsZTp0d2dsLnNldEF0dHJpYnV0ZXN9IGZvciBleGFtcGxlXG4gKiBAcGFyYW0ge1dlYkdMUHJvZ3JhbX0gcHJvZ3JhbSB0aGUgcHJvZ3JhbSB0byBjcmVhdGUgc2V0dGVycyBmb3IuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBhbiBvYmplY3Qgd2l0aCBhIHNldHRlciBmb3IgZWFjaCBhdHRyaWJ1dGUgYnkgbmFtZS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcm9ncmFtc1xuICovXG5mdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGVTZXR0ZXJzKGdsLCBwcm9ncmFtKSB7XG4gIHZhciBhdHRyaWJTZXR0ZXJzID0ge307XG5cbiAgdmFyIG51bUF0dHJpYnMgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkFDVElWRV9BVFRSSUJVVEVTKTtcbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG51bUF0dHJpYnM7ICsraWkpIHtcbiAgICB2YXIgYXR0cmliSW5mbyA9IGdsLmdldEFjdGl2ZUF0dHJpYihwcm9ncmFtLCBpaSk7XG4gICAgaWYgKGlzQnVpbHRJbihhdHRyaWJJbmZvKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHZhciBpbmRleCA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIGF0dHJpYkluZm8ubmFtZSk7XG4gICAgdmFyIHR5cGVJbmZvID0gYXR0clR5cGVNYXBbYXR0cmliSW5mby50eXBlXTtcbiAgICB2YXIgc2V0dGVyID0gdHlwZUluZm8uc2V0dGVyKGdsLCBpbmRleCwgdHlwZUluZm8pO1xuICAgIHNldHRlci5sb2NhdGlvbiA9IGluZGV4O1xuICAgIGF0dHJpYlNldHRlcnNbYXR0cmliSW5mby5uYW1lXSA9IHNldHRlcjtcbiAgfVxuXG4gIHJldHVybiBhdHRyaWJTZXR0ZXJzO1xufVxuXG4vKipcbiAqIFNldHMgYXR0cmlidXRlcyBhbmQgYmluZHMgYnVmZmVycyAoZGVwcmVjYXRlZC4uLiB1c2Uge0BsaW5rIG1vZHVsZTp0d2dsLnNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGVzfSlcbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBjb25zdCBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbUZyb21TY3JpcHRzKFxuICogICAgICAgICBnbCwgW1wic29tZS12c1wiLCBcInNvbWUtZnNcIik7XG4gKlxuICogICAgIGNvbnN0IGF0dHJpYlNldHRlcnMgPSBjcmVhdGVBdHRyaWJ1dGVTZXR0ZXJzKHByb2dyYW0pO1xuICpcbiAqICAgICBjb25zdCBwb3NpdGlvbkJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICogICAgIGNvbnN0IHRleGNvb3JkQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gKlxuICogICAgIGNvbnN0IGF0dHJpYnMgPSB7XG4gKiAgICAgICBhX3Bvc2l0aW9uOiB7YnVmZmVyOiBwb3NpdGlvbkJ1ZmZlciwgbnVtQ29tcG9uZW50czogM30sXG4gKiAgICAgICBhX3RleGNvb3JkOiB7YnVmZmVyOiB0ZXhjb29yZEJ1ZmZlciwgbnVtQ29tcG9uZW50czogMn0sXG4gKiAgICAgfTtcbiAqXG4gKiAgICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAqXG4gKiBUaGlzIHdpbGwgYXV0b21hdGljYWxseSBiaW5kIHRoZSBidWZmZXJzIEFORCBzZXQgdGhlXG4gKiBhdHRyaWJ1dGVzLlxuICpcbiAqICAgICBzZXRBdHRyaWJ1dGVzKGF0dHJpYlNldHRlcnMsIGF0dHJpYnMpO1xuICpcbiAqIFByb3BlcnRpZXMgb2YgYXR0cmlicy4gRm9yIGVhY2ggYXR0cmliIHlvdSBjYW4gYWRkXG4gKiBwcm9wZXJ0aWVzOlxuICpcbiAqICogICB0eXBlOiB0aGUgdHlwZSBvZiBkYXRhIGluIHRoZSBidWZmZXIuIERlZmF1bHQgPSBnbC5GTE9BVFxuICogKiAgIG5vcm1hbGl6ZTogd2hldGhlciBvciBub3QgdG8gbm9ybWFsaXplIHRoZSBkYXRhLiBEZWZhdWx0ID0gZmFsc2VcbiAqICogICBzdHJpZGU6IHRoZSBzdHJpZGUuIERlZmF1bHQgPSAwXG4gKiAqICAgb2Zmc2V0OiBvZmZzZXQgaW50byB0aGUgYnVmZmVyLiBEZWZhdWx0ID0gMFxuICogKiAgIGRpdmlzb3I6IHRoZSBkaXZpc29yIGZvciBpbnN0YW5jZXMuIERlZmF1bHQgPSB1bmRlZmluZWRcbiAqXG4gKiBGb3IgZXhhbXBsZSBpZiB5b3UgaGFkIDMgdmFsdWUgZmxvYXQgcG9zaXRpb25zLCAyIHZhbHVlXG4gKiBmbG9hdCB0ZXhjb29yZCBhbmQgNCB2YWx1ZSB1aW50OCBjb2xvcnMgeW91J2Qgc2V0dXAgeW91clxuICogYXR0cmlicyBsaWtlIHRoaXNcbiAqXG4gKiAgICAgY29uc3QgYXR0cmlicyA9IHtcbiAqICAgICAgIGFfcG9zaXRpb246IHtidWZmZXI6IHBvc2l0aW9uQnVmZmVyLCBudW1Db21wb25lbnRzOiAzfSxcbiAqICAgICAgIGFfdGV4Y29vcmQ6IHtidWZmZXI6IHRleGNvb3JkQnVmZmVyLCBudW1Db21wb25lbnRzOiAyfSxcbiAqICAgICAgIGFfY29sb3I6IHtcbiAqICAgICAgICAgYnVmZmVyOiBjb2xvckJ1ZmZlcixcbiAqICAgICAgICAgbnVtQ29tcG9uZW50czogNCxcbiAqICAgICAgICAgdHlwZTogZ2wuVU5TSUdORURfQllURSxcbiAqICAgICAgICAgbm9ybWFsaXplOiB0cnVlLFxuICogICAgICAgfSxcbiAqICAgICB9O1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gc2V0dGVycyBBdHRyaWJ1dGUgc2V0dGVycyBhcyByZXR1cm5lZCBmcm9tIGNyZWF0ZUF0dHJpYnV0ZVNldHRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIG1vZHVsZTp0d2dsLkF0dHJpYkluZm8+fSBidWZmZXJzIEF0dHJpYkluZm9zIG1hcHBlZCBieSBhdHRyaWJ1dGUgbmFtZS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcm9ncmFtc1xuICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBtb2R1bGU6dHdnbC5zZXRCdWZmZXJzQW5kQXR0cmlidXRlc31cbiAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhzZXR0ZXJzLCBidWZmZXJzKSB7XG4gIGZvciAodmFyIG5hbWUgaW4gYnVmZmVycykge1xuICAgIHZhciBzZXR0ZXIgPSBzZXR0ZXJzW25hbWVdO1xuICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgIHNldHRlcihidWZmZXJzW25hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBTZXRzIGF0dHJpYnV0ZXMgYW5kIGJ1ZmZlcnMgaW5jbHVkaW5nIHRoZSBgRUxFTUVOVF9BUlJBWV9CVUZGRVJgIGlmIGFwcHJvcHJpYXRlXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgY29uc3QgcHJvZ3JhbUluZm8gPSBjcmVhdGVQcm9ncmFtSW5mbyhcbiAqICAgICAgICAgZ2wsIFtcInNvbWUtdnNcIiwgXCJzb21lLWZzXCIpO1xuICpcbiAqICAgICBjb25zdCBhcnJheXMgPSB7XG4gKiAgICAgICBwb3NpdGlvbjogeyBudW1Db21wb25lbnRzOiAzLCBkYXRhOiBbMCwgMCwgMCwgMTAsIDAsIDAsIDAsIDEwLCAwLCAxMCwgMTAsIDBdLCB9LFxuICogICAgICAgdGV4Y29vcmQ6IHsgbnVtQ29tcG9uZW50czogMiwgZGF0YTogWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdLCAgICAgICAgICAgICAgICAgfSxcbiAqICAgICB9O1xuICpcbiAqICAgICBjb25zdCBidWZmZXJJbmZvID0gY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXMoZ2wsIGFycmF5cyk7XG4gKlxuICogICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbUluZm8ucHJvZ3JhbSk7XG4gKlxuICogVGhpcyB3aWxsIGF1dG9tYXRpY2FsbHkgYmluZCB0aGUgYnVmZmVycyBBTkQgc2V0IHRoZVxuICogYXR0cmlidXRlcy5cbiAqXG4gKiAgICAgc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXMoZ2wsIHByb2dyYW1JbmZvLCBidWZmZXJJbmZvKTtcbiAqXG4gKiBGb3IgdGhlIGV4YW1wbGUgYWJvdmUgaXQgaXMgZXF1aXZpbGVudCB0b1xuICpcbiAqICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgcG9zaXRpb25CdWZmZXIpO1xuICogICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGFfcG9zaXRpb25Mb2NhdGlvbik7XG4gKiAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihhX3Bvc2l0aW9uTG9jYXRpb24sIDMsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG4gKiAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRleGNvb3JkQnVmZmVyKTtcbiAqICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhX3RleGNvb3JkTG9jYXRpb24pO1xuICogICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoYV90ZXhjb29yZExvY2F0aW9uLCA0LCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7KG1vZHVsZTp0d2dsLlByb2dyYW1JbmZvfE9iamVjdC48c3RyaW5nLCBmdW5jdGlvbj4pfSBzZXR0ZXJzIEEgYFByb2dyYW1JbmZvYCBhcyByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVQcm9ncm1hSW5mb30gb3IgQXR0cmlidXRlIHNldHRlcnMgYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlQXR0cmlidXRlU2V0dGVyc31cbiAqIEBwYXJhbSB7KG1vZHVsZTp0d2dsLkJ1ZmZlckluZm98bW9kdWxlOnR3Z2wudmVydGV4QXJyYXlJbmZvKX0gYnVmZmVycyBhIGBCdWZmZXJJbmZvYCBhcyByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5c30uXG4gKiAgIG9yIGEgYFZlcnRleEFycmF5SW5mb2AgYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlVmVydGV4QXJyYXlJbmZvfVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cbmZ1bmN0aW9uIHNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGVzKGdsLCBwcm9ncmFtSW5mbywgYnVmZmVycykge1xuICBpZiAoYnVmZmVycy52ZXJ0ZXhBcnJheU9iamVjdCkge1xuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheShidWZmZXJzLnZlcnRleEFycmF5T2JqZWN0KTtcbiAgfSBlbHNlIHtcbiAgICBzZXRBdHRyaWJ1dGVzKHByb2dyYW1JbmZvLmF0dHJpYlNldHRlcnMgfHwgcHJvZ3JhbUluZm8sIGJ1ZmZlcnMuYXR0cmlicyk7XG4gICAgaWYgKGJ1ZmZlcnMuaW5kaWNlcykge1xuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgYnVmZmVycy5pbmRpY2VzKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBQcm9ncmFtSW5mb1xuICogQHByb3BlcnR5IHtXZWJHTFByb2dyYW19IHByb2dyYW0gQSBzaGFkZXIgcHJvZ3JhbVxuICogQHByb3BlcnR5IHtPYmplY3Q8c3RyaW5nLCBmdW5jdGlvbj59IHVuaWZvcm1TZXR0ZXJzIG9iamVjdCBvZiBzZXR0ZXJzIGFzIHJldHVybmVkIGZyb20gY3JlYXRlVW5pZm9ybVNldHRlcnMsXG4gKiBAcHJvcGVydHkge09iamVjdDxzdHJpbmcsIGZ1bmN0aW9uPn0gYXR0cmliU2V0dGVycyBvYmplY3Qgb2Ygc2V0dGVycyBhcyByZXR1cm5lZCBmcm9tIGNyZWF0ZUF0dHJpYlNldHRlcnMsXG4gKiBAcHJvcGV0dHkge21vZHVsZTp0d2dsLlVuaWZvcm1CbG9ja1NwZWN9IFt1bmlmb3JtQmxvY2tTcGFjZV0gYSB1bmlmb3JtIGJsb2NrIHNwZWMgZm9yIG1ha2luZyBVbmlmb3JtQmxvY2tJbmZvcyB3aXRoIGNyZWF0ZVVuaWZvcm1CbG9ja0luZm8gZXRjLi5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0PHN0cmluZywgbW9kdWxlOnR3Z2wuVHJhbnNmb3JtRmVlZGJhY2tJbmZvPn0gW3RyYW5zZm9ybUZlZWRiYWNrSW5mb10gaW5mbyBmb3IgdHJhbnNmb3JtIGZlZWRiYWNrc1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgUHJvZ3JhbUluZm8gZnJvbSBhbiBleGlzdGluZyBwcm9ncmFtLlxuICpcbiAqIEEgUHJvZ3JhbUluZm8gY29udGFpbnNcbiAqXG4gKiAgICAgcHJvZ3JhbUluZm8gPSB7XG4gKiAgICAgICAgcHJvZ3JhbTogV2ViR0xQcm9ncmFtLFxuICogICAgICAgIHVuaWZvcm1TZXR0ZXJzOiBvYmplY3Qgb2Ygc2V0dGVycyBhcyByZXR1cm5lZCBmcm9tIGNyZWF0ZVVuaWZvcm1TZXR0ZXJzLFxuICogICAgICAgIGF0dHJpYlNldHRlcnM6IG9iamVjdCBvZiBzZXR0ZXJzIGFzIHJldHVybmVkIGZyb20gY3JlYXRlQXR0cmliU2V0dGVycyxcbiAqICAgICB9XG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqICAgICAgICB0byB1c2UuXG4gKiBAcGFyYW0ge1dlYkdMUHJvZ3JhbX0gcHJvZ3JhbSBhbiBleGlzdGluZyBXZWJHTFByb2dyYW0uXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5Qcm9ncmFtSW5mb30gVGhlIGNyZWF0ZWQgUHJvZ3JhbUluZm8uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbUluZm9Gcm9tUHJvZ3JhbShnbCwgcHJvZ3JhbSkge1xuICB2YXIgdW5pZm9ybVNldHRlcnMgPSBjcmVhdGVVbmlmb3JtU2V0dGVycyhnbCwgcHJvZ3JhbSk7XG4gIHZhciBhdHRyaWJTZXR0ZXJzID0gY3JlYXRlQXR0cmlidXRlU2V0dGVycyhnbCwgcHJvZ3JhbSk7XG4gIHZhciBwcm9ncmFtSW5mbyA9IHtcbiAgICBwcm9ncmFtOiBwcm9ncmFtLFxuICAgIHVuaWZvcm1TZXR0ZXJzOiB1bmlmb3JtU2V0dGVycyxcbiAgICBhdHRyaWJTZXR0ZXJzOiBhdHRyaWJTZXR0ZXJzXG4gIH07XG5cbiAgaWYgKHV0aWxzLmlzV2ViR0wyKGdsKSkge1xuICAgIHByb2dyYW1JbmZvLnVuaWZvcm1CbG9ja1NwZWMgPSBjcmVhdGVVbmlmb3JtQmxvY2tTcGVjRnJvbVByb2dyYW0oZ2wsIHByb2dyYW0pO1xuICAgIHByb2dyYW1JbmZvLnRyYW5zZm9ybUZlZWRiYWNrSW5mbyA9IGNyZWF0ZVRyYW5zZm9ybUZlZWRiYWNrSW5mbyhnbCwgcHJvZ3JhbSk7XG4gIH1cblxuICByZXR1cm4gcHJvZ3JhbUluZm87XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIFByb2dyYW1JbmZvIGZyb20gMiBzb3VyY2VzLlxuICpcbiAqIEEgUHJvZ3JhbUluZm8gY29udGFpbnNcbiAqXG4gKiAgICAgcHJvZ3JhbUluZm8gPSB7XG4gKiAgICAgICAgcHJvZ3JhbTogV2ViR0xQcm9ncmFtLFxuICogICAgICAgIHVuaWZvcm1TZXR0ZXJzOiBvYmplY3Qgb2Ygc2V0dGVycyBhcyByZXR1cm5lZCBmcm9tIGNyZWF0ZVVuaWZvcm1TZXR0ZXJzLFxuICogICAgICAgIGF0dHJpYlNldHRlcnM6IG9iamVjdCBvZiBzZXR0ZXJzIGFzIHJldHVybmVkIGZyb20gY3JlYXRlQXR0cmliU2V0dGVycyxcbiAqICAgICB9XG4gKlxuICogTk9URTogVGhlcmUgYXJlIDQgc2lnbmF0dXJlcyBmb3IgdGhpcyBmdW5jdGlvblxuICpcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1JbmZvKGdsLCBbdnMsIGZzXSwgb3B0aW9ucyk7XG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtSW5mbyhnbCwgW3ZzLCBmc10sIG9wdF9lcnJGdW5jKTtcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1JbmZvKGdsLCBbdnMsIGZzXSwgb3B0X2F0dHJpYnMsIG9wdF9lcnJGdW5jKTtcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1JbmZvKGdsLCBbdnMsIGZzXSwgb3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJGdW5jKTtcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogICAgICAgIHRvIHVzZS5cbiAqIEBwYXJhbSB7c3RyaW5nW119IHNoYWRlclNvdXJjZXMgQXJyYXkgb2Ygc291cmNlcyBmb3IgdGhlXG4gKiAgICAgICAgc2hhZGVycyBvciBpZHMuIFRoZSBmaXJzdCBpcyBhc3N1bWVkIHRvIGJlIHRoZSB2ZXJ0ZXggc2hhZGVyLFxuICogICAgICAgIHRoZSBzZWNvbmQgdGhlIGZyYWdtZW50IHNoYWRlci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuUHJvZ3JhbU9wdGlvbnN8c3RyaW5nW119IFtvcHRfYXR0cmlic10gT3B0aW9ucyBmb3IgdGhlIHByb2dyYW0gb3IgYW4gYXJyYXkgb2YgYXR0cmlicyBuYW1lcy4gTG9jYXRpb25zIHdpbGwgYmUgYXNzaWduZWQgYnkgaW5kZXggaWYgbm90IHBhc3NlZCBpblxuICogQHBhcmFtIHtudW1iZXJbXX0gW29wdF9sb2NhdGlvbnNdIFRoZSBsb2NhdGlvbnMgZm9yIHRoZSBhdHRyaWJ1dGVzLiBBIHBhcmFsbGVsIGFycmF5IHRvIG9wdF9hdHRyaWJzIGxldHRpbmcgeW91IGFzc2lnbiBsb2NhdGlvbnMuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkVycm9yQ2FsbGJhY2t9IG9wdF9lcnJvckNhbGxiYWNrIGNhbGxiYWNrIGZvciBlcnJvcnMuIEJ5IGRlZmF1bHQgaXQganVzdCBwcmludHMgYW4gZXJyb3IgdG8gdGhlIGNvbnNvbGVcbiAqICAgICAgICBvbiBlcnJvci4gSWYgeW91IHdhbnQgc29tZXRoaW5nIGVsc2UgcGFzcyBhbiBjYWxsYmFjay4gSXQncyBwYXNzZWQgYW4gZXJyb3IgbWVzc2FnZS5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLlByb2dyYW1JbmZvP30gVGhlIGNyZWF0ZWQgUHJvZ3JhbUluZm8gb3IgbnVsbCBpZiBpdCBmYWlsZWQgdG8gbGluayBvciBjb21waWxlXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbUluZm8oZ2wsIHNoYWRlclNvdXJjZXMsIG9wdF9hdHRyaWJzLCBvcHRfbG9jYXRpb25zLCBvcHRfZXJyb3JDYWxsYmFjaykge1xuICB2YXIgcHJvZ09wdGlvbnMgPSBnZXRQcm9ncmFtT3B0aW9ucyhvcHRfYXR0cmlicywgb3B0X2xvY2F0aW9ucywgb3B0X2Vycm9yQ2FsbGJhY2spO1xuICB2YXIgZ29vZCA9IHRydWU7XG4gIHNoYWRlclNvdXJjZXMgPSBzaGFkZXJTb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgLy8gTGV0cyBhc3N1bWUgaWYgdGhlcmUgaXMgbm8gXFxuIGl0J3MgYW4gaWRcbiAgICBpZiAoc291cmNlLmluZGV4T2YoXCJcXG5cIikgPCAwKSB7XG4gICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc291cmNlKTtcbiAgICAgIGlmICghc2NyaXB0KSB7XG4gICAgICAgIHByb2dPcHRpb25zLmVycm9yQ2FsbGJhY2soXCJubyBlbGVtZW50IHdpdGggaWQ6IFwiICsgc291cmNlKTtcbiAgICAgICAgZ29vZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc291cmNlID0gc2NyaXB0LnRleHQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzb3VyY2U7XG4gIH0pO1xuICBpZiAoIWdvb2QpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW1Gcm9tU291cmNlcyhnbCwgc2hhZGVyU291cmNlcywgcHJvZ09wdGlvbnMpO1xuICBpZiAoIXByb2dyYW0pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gY3JlYXRlUHJvZ3JhbUluZm9Gcm9tUHJvZ3JhbShnbCwgcHJvZ3JhbSk7XG59XG5cbmV4cG9ydHMuY3JlYXRlQXR0cmlidXRlU2V0dGVycyA9IGNyZWF0ZUF0dHJpYnV0ZVNldHRlcnM7XG5leHBvcnRzLmNyZWF0ZVByb2dyYW0gPSBjcmVhdGVQcm9ncmFtO1xuZXhwb3J0cy5jcmVhdGVQcm9ncmFtRnJvbVNjcmlwdHMgPSBjcmVhdGVQcm9ncmFtRnJvbVNjcmlwdHM7XG5leHBvcnRzLmNyZWF0ZVByb2dyYW1Gcm9tU291cmNlcyA9IGNyZWF0ZVByb2dyYW1Gcm9tU291cmNlcztcbmV4cG9ydHMuY3JlYXRlUHJvZ3JhbUluZm8gPSBjcmVhdGVQcm9ncmFtSW5mbztcbmV4cG9ydHMuY3JlYXRlUHJvZ3JhbUluZm9Gcm9tUHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW1JbmZvRnJvbVByb2dyYW07XG5leHBvcnRzLmNyZWF0ZVVuaWZvcm1TZXR0ZXJzID0gY3JlYXRlVW5pZm9ybVNldHRlcnM7XG5leHBvcnRzLmNyZWF0ZVVuaWZvcm1CbG9ja1NwZWNGcm9tUHJvZ3JhbSA9IGNyZWF0ZVVuaWZvcm1CbG9ja1NwZWNGcm9tUHJvZ3JhbTtcbmV4cG9ydHMuY3JlYXRlVW5pZm9ybUJsb2NrSW5mb0Zyb21Qcm9ncmFtID0gY3JlYXRlVW5pZm9ybUJsb2NrSW5mb0Zyb21Qcm9ncmFtO1xuZXhwb3J0cy5jcmVhdGVVbmlmb3JtQmxvY2tJbmZvID0gY3JlYXRlVW5pZm9ybUJsb2NrSW5mbztcbmV4cG9ydHMuY3JlYXRlVHJhbnNmb3JtRmVlZGJhY2sgPSBjcmVhdGVUcmFuc2Zvcm1GZWVkYmFjaztcbmV4cG9ydHMuY3JlYXRlVHJhbnNmb3JtRmVlZGJhY2tJbmZvID0gY3JlYXRlVHJhbnNmb3JtRmVlZGJhY2tJbmZvO1xuZXhwb3J0cy5iaW5kVHJhbnNmb3JtRmVlZGJhY2tJbmZvID0gYmluZFRyYW5zZm9ybUZlZWRiYWNrSW5mbztcbmV4cG9ydHMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5leHBvcnRzLnNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGVzID0gc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXM7XG5leHBvcnRzLnNldFVuaWZvcm1zID0gc2V0VW5pZm9ybXM7XG5leHBvcnRzLnNldFVuaWZvcm1CbG9jayA9IHNldFVuaWZvcm1CbG9jaztcbmV4cG9ydHMuc2V0QmxvY2tVbmlmb3JtcyA9IHNldEJsb2NrVW5pZm9ybXM7XG5leHBvcnRzLmJpbmRVbmlmb3JtQmxvY2sgPSBiaW5kVW5pZm9ybUJsb2NrO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8qXG4gKiBDb3B5cmlnaHQgMjAxNywgR3JlZ2cgVGF2YXJlcy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4gKiBtZXQ6XG4gKlxuICogICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbiAqIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbiAqIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqIGRpc3RyaWJ1dGlvbi5cbiAqICAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR3JlZ2cgVGF2YXJlcy4gbm9yIHRoZSBuYW1lcyBvZiBoaXNcbiAqIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4gKiB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbiAqIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1RcbiAqIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuICogQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbiAqIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuICogU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuICogTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbiAqIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbiAqIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuICogT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG4vKipcbiAqIEdldHMgdGhlIGdsIHZlcnNpb24gYXMgYSBudW1iZXJcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHJldHVybiB7bnVtYmVyfSB2ZXJzaW9uIG9mIGdsXG4gKi9cbi8vZnVuY3Rpb24gZ2V0VmVyc2lvbkFzTnVtYmVyKGdsKSB7XG4vLyAgcmV0dXJuIHBhcnNlRmxvYXQoZ2wuZ2V0UGFyYW1ldGVyKGdsLlZFUlNJT04pLnN1YnN0cig2KSk7XG4vL31cblxuLyoqXG4gKiBDaGVjayBpZiBjb250ZXh0IGlzIFdlYkdMIDIuMFxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcmV0dXJuIHtib29sfSB0cnVlIGlmIGl0J3MgV2ViR0wgMi4wXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuZnVuY3Rpb24gaXNXZWJHTDIoZ2wpIHtcbiAgLy8gVGhpcyBpcyB0aGUgY29ycmVjdCBjaGVjayBidXQgaXQncyBzbG93XG4gIC8vICByZXR1cm4gZ2wuZ2V0UGFyYW1ldGVyKGdsLlZFUlNJT04pLmluZGV4T2YoXCJXZWJHTCAyLjBcIikgPT09IDA7XG4gIC8vIFRoaXMgbWlnaHQgYWxzbyBiZSB0aGUgY29ycmVjdCBjaGVjayBidXQgSSdtIGFzc3VtaW5nIGl0J3Mgc2xvdy1pc2hcbiAgLy8gcmV0dXJuIGdsIGluc3RhbmNlb2YgV2ViR0wyUmVuZGVyaW5nQ29udGV4dDtcbiAgcmV0dXJuICEhZ2wudGV4U3RvcmFnZTJEO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGNvbnRleHQgaXMgV2ViR0wgMS4wXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgQSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEByZXR1cm4ge2Jvb2x9IHRydWUgaWYgaXQncyBXZWJHTCAxLjBcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5mdW5jdGlvbiBpc1dlYkdMMShnbCkge1xuICAvLyBUaGlzIGlzIHRoZSBjb3JyZWN0IGNoZWNrIGJ1dCBpdCdzIHNsb3dcbiAgLy8gY29uc3QgdmVyc2lvbiA9IGdldFZlcnNpb25Bc051bWJlcihnbCk7XG4gIC8vIHJldHVybiB2ZXJzaW9uIDw9IDEuMCAmJiB2ZXJzaW9uID4gMC4wOyAgLy8gYmVjYXVzZSBhcyBvZiAyMDE2LzUgRWRnZSByZXR1cm5zIDAuOTZcbiAgLy8gVGhpcyBtaWdodCBhbHNvIGJlIHRoZSBjb3JyZWN0IGNoZWNrIGJ1dCBJJ20gYXNzdW1pbmcgaXQncyBzbG93LWlzaFxuICAvLyByZXR1cm4gZ2wgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XG4gIHJldHVybiAhZ2wudGV4U3RvcmFnZTJEO1xufVxuXG4vKipcbiAqIEdldHMgYSBzdHJpbmcgZm9yIFdlYkdMIGVudW1cbiAqXG4gKiBOb3RlOiBTZXZlcmFsIGVudW1zIGFyZSB0aGUgc2FtZS4gV2l0aG91dCBtb3JlXG4gKiBjb250ZXh0ICh3aGljaCBmdW5jdGlvbikgaXQncyBpbXBvc3NpYmxlIHRvIGFsd2F5c1xuICogZ2l2ZSB0aGUgY29ycmVjdCBlbnVtLiBBcyBpdCBpcywgZm9yIG1hdGNoaW5nIHZhbHVlc1xuICogaXQgZ2l2ZXMgYWxsIGVudW1zLiBDaGVja2luZyB0aGUgV2ViR0wyUmVuZGVyaW5nQ29udGV4dFxuICogdGhhdCBtZWFuc1xuICpcbiAqICAgICAgMCAgICAgPSBaRVJPIHwgUE9JTlQgfCBOT05FIHwgTk9fRVJST1JcbiAqICAgICAgMSAgICAgPSBPTkUgfCBMSU5FUyB8IFNZTkNfRkxVU0hfQ09NTUFORFNfQklUXG4gKiAgICAgIDMyNzc3ID0gQkxFTkRfRVFVQVRJT05fUkdCIHwgQkxFTkRfRVFVQVRJT05fUkdCXG4gKiAgICAgIDM2NjYyID0gQ09QWV9SRUFEX0JVRkZFUiB8IENPUFlfUkVBRF9CVUZGRVJfQklORElOR1xuICogICAgICAzNjY2MyA9IENPUFlfV1JJVEVfQlVGRkVSIHwgQ09QWV9XUklURV9CVUZGRVJfQklORElOR1xuICogICAgICAzNjAwNiA9IEZSQU1FQlVGRkVSX0JJTkRJTkcgfCBEUkFXX0ZSQU1FQlVGRkVSX0JJTkRJTkdcbiAqXG4gKiBJdCdzIGFsc28gbm90IHVzZWZ1bCBmb3IgYml0cyByZWFsbHkgdW5sZXNzIHlvdSBwYXNzIGluIGluZGl2aWR1YWwgYml0cy5cbiAqIEluIG90aGVyIHdvcmRzXG4gKlxuICogICAgIGNvbnN0IGJpdHMgPSBnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVDtcbiAqICAgICB0d2dsLmdsRW51bVRvU3RyaW5nKGdsLCBiaXRzKTsgIC8vIG5vdCBnb2luZyB0byB3b3JrXG4gKlxuICogTm90ZSB0aGF0IHNvbWUgZW51bXMgb25seSBleGlzdCBvbiBleHRlbnNpb25zLiBJZiB5b3VcbiAqIHdhbnQgdGhlbSB0byBzaG93IHVwIHlvdSBuZWVkIHRvIHBhc3MgdGhlIGV4dGVuc2lvbiBhdCBsZWFzdFxuICogb25jZS4gRm9yIGV4YW1wbGVcbiAqXG4gKiAgICAgY29uc3QgZXh0ID0gZ2wuZ2V0RXh0ZW5zaW9uKCdXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfczN0Y2ApO1xuICogICAgIGlmIChleHQpIHtcbiAqICAgICAgICB0d2dsLmdsRW51bVRvU3RyaW5nKGV4dCwgMCk7ICAvLyBqdXN0IHByaW1lIHRoZSBmdW5jdGlvblxuICpcbiAqICAgICAgICAuLmxhdGVyLi5cbiAqXG4gKiAgICAgICAgY29uc3QgaW50ZXJuYWxGb3JtYXQgPSBleHQuQ09NUFJFU1NFRF9SR0JfUzNUQ19EWFQxX0VYVDtcbiAqICAgICAgICBjb25zb2xlLmxvZyh0d2dsLmdsRW51bVRvU3RyaW5nKGdsLCBpbnRlcm5hbEZvcm1hdCkpO1xuICpcbiAqIE5vdGljZSBJIGRpZG4ndCBoYXZlIHRvIHBhc3MgdGhlIGV4dGVuc2lvbiB0aGUgc2Vjb25kIHRpbWUuIFRoaXMgbWVhbnNcbiAqIHlvdSBjYW4gaGF2ZSBwbGFjZSB0aGF0IGdlbmVyaWNhbGx5IGdldHMgYW4gZW51bSBmb3IgdGV4dHVyZSBmb3JtYXRzIGZvciBleGFtcGxlLlxuICogYW5kIGFzIGxvbmcgYXMgeW91IHByaW1lZCB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgZXh0ZW5zaW9uc1xuICpcbiAqIElmIHlvdSdyZSB1c2luZyBgdHdnbC5hZGRFeHRlbnNpb25zVG9Db250ZXh0YCB0byBlbmFibGUgeW91ciBleHRlbnNpb25zXG4gKiB0aGVuIHR3Z2wgd2lsbCBhdXRvbWF0aWNhbGx5IGdldCB0aGUgZXh0ZW5zaW9uJ3MgZW51bXMuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR8RXh0ZW5zaW9ufSBnbCBBIFdlYkdMUmVuZGVyaW5nQ29udGV4dCBvciBhbnkgZXh0ZW5zaW9uIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIHRoZSB2YWx1ZSBvZiB0aGUgZW51bSB5b3Ugd2FudCB0byBsb29rIHVwLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cbnZhciBnbEVudW1Ub1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhhdmVFbnVtc0ZvclR5cGUgPSB7fTtcbiAgdmFyIGVudW1zID0ge307XG5cbiAgZnVuY3Rpb24gYWRkRW51bXMoZ2wpIHtcbiAgICB2YXIgdHlwZSA9IGdsLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgaWYgKCFoYXZlRW51bXNGb3JUeXBlW3R5cGVdKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gZ2wpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBnbFtrZXldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHZhciBleGlzdGluZyA9IGVudW1zW2dsW2tleV1dO1xuICAgICAgICAgIGVudW1zW2dsW2tleV1dID0gZXhpc3RpbmcgPyBleGlzdGluZyArIFwiIHwgXCIgKyBrZXkgOiBrZXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGhhdmVFbnVtc0ZvclR5cGVbdHlwZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBnbEVudW1Ub1N0cmluZyhnbCwgdmFsdWUpIHtcbiAgICBhZGRFbnVtcyhnbCk7XG4gICAgcmV0dXJuIGVudW1zW3ZhbHVlXSB8fCBcIjB4XCIgKyB2YWx1ZS50b1N0cmluZygxNik7XG4gIH07XG59KCk7XG5cbmV4cG9ydHMuZ2xFbnVtVG9TdHJpbmcgPSBnbEVudW1Ub1N0cmluZztcbmV4cG9ydHMuaXNXZWJHTDEgPSBpc1dlYkdMMTtcbmV4cG9ydHMuaXNXZWJHTDIgPSBpc1dlYkdMMjtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vKlxuICogQ29weXJpZ2h0IDIwMTUsIEdyZWdnIFRhdmFyZXMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuICogbWV0OlxuICpcbiAqICAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4gKiBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4gKiBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4gKiBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4gKiBkaXN0cmlidXRpb24uXG4gKiAgICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdyZWdnIFRhdmFyZXMuIG5vciB0aGUgbmFtZXMgb2YgaGlzXG4gKiBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuICogdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4gKiBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4gKiBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1JcbiAqIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4gKiBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbiAqIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1RcbiAqIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4gKiBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4gKiAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0VcbiAqIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuLyoqXG4gKlxuICogVmVjMyBtYXRoIG1hdGggZnVuY3Rpb25zLlxuICpcbiAqIEFsbW9zdCBhbGwgZnVuY3Rpb25zIHRha2UgYW4gb3B0aW9uYWwgYGRzdGAgYXJndW1lbnQuIElmIGl0IGlzIG5vdCBwYXNzZWQgaW4gdGhlXG4gKiBmdW5jdGlvbnMgd2lsbCBjcmVhdGUgYSBuZXcgVmVjMy4gSW4gb3RoZXIgd29yZHMgeW91IGNhbiBkbyB0aGlzXG4gKlxuICogICAgIHZhciB2ID0gdjMuY3Jvc3ModjEsIHYyKTsgIC8vIENyZWF0ZXMgYSBuZXcgVmVjMyB3aXRoIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHYxIHggdjIuXG4gKlxuICogb3JcbiAqXG4gKiAgICAgdmFyIHYzID0gdjMuY3JlYXRlKCk7XG4gKiAgICAgdjMuY3Jvc3ModjEsIHYyLCB2KTsgIC8vIFB1dHMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdjEgeCB2MiBpbiB2XG4gKlxuICogVGhlIGZpcnN0IHN0eWxlIGlzIG9mdGVuIGVhc2llciBidXQgZGVwZW5kaW5nIG9uIHdoZXJlIGl0J3MgdXNlZCBpdCBnZW5lcmF0ZXMgZ2FyYmFnZSB3aGVyZVxuICogYXMgdGhlcmUgaXMgYWxtb3N0IG5ldmVyIGFsbG9jYXRpb24gd2l0aCB0aGUgc2Vjb25kIHN0eWxlLlxuICpcbiAqIEl0IGlzIGFsd2F5cyBzYXZlIHRvIHBhc3MgYW55IHZlY3RvciBhcyB0aGUgZGVzdGluYXRpb24uIFNvIGZvciBleGFtcGxlXG4gKlxuICogICAgIHYzLmNyb3NzKHYxLCB2MiwgdjEpOyAgLy8gUHV0cyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB2MSB4IHYyIGluIHYxXG4gKlxuICogQG1vZHVsZSB0d2dsL3YzXG4gKi9cblxudmFyIFZlY1R5cGUgPSBGbG9hdDMyQXJyYXk7XG5cbi8qKlxuICogQSBKYXZhU2NyaXB0IGFycmF5IHdpdGggMyB2YWx1ZXMgb3IgYSBGbG9hdDMyQXJyYXkgd2l0aCAzIHZhbHVlcy5cbiAqIFdoZW4gY3JlYXRlZCBieSB0aGUgbGlicmFyeSB3aWxsIGNyZWF0ZSB0aGUgZGVmYXVsdCB0eXBlIHdoaWNoIGlzIGBGbG9hdDMyQXJyYXlgXG4gKiBidXQgY2FuIGJlIHNldCBieSBjYWxsaW5nIHtAbGluayBtb2R1bGU6dHdnbC92My5zZXREZWZhdWx0VHlwZX0uXG4gKiBAdHlwZWRlZiB7KG51bWJlcltdfEZsb2F0MzJBcnJheSl9IFZlYzNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5cbi8qKlxuICogU2V0cyB0aGUgdHlwZSB0aGlzIGxpYnJhcnkgY3JlYXRlcyBmb3IgYSBWZWMzXG4gKiBAcGFyYW0ge2NvbnN0cnVjdG9yfSBjdG9yIHRoZSBjb25zdHJ1Y3RvciBmb3IgdGhlIHR5cGUuIEVpdGhlciBgRmxvYXQzMkFycmF5YCBvciBgQXJyYXlgXG4gKiBAcmV0dXJuIHtjb25zdHJ1Y3Rvcn0gcHJldmlvdXMgY29uc3RydWN0b3IgZm9yIFZlYzNcbiAqL1xuZnVuY3Rpb24gc2V0RGVmYXVsdFR5cGUoY3Rvcikge1xuICB2YXIgb2xkVHlwZSA9IFZlY1R5cGU7XG4gIFZlY1R5cGUgPSBjdG9yO1xuICByZXR1cm4gb2xkVHlwZTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdmVjMzsgbWF5IGJlIGNhbGxlZCB3aXRoIHgsIHksIHogdG8gc2V0IGluaXRpYWwgdmFsdWVzLlxuICogQHJldHVybiB7VmVjM30gdGhlIGNyZWF0ZWQgdmVjdG9yXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlKHgsIHksIHopIHtcbiAgdmFyIGRzdCA9IG5ldyBWZWNUeXBlKDMpO1xuICBpZiAoeCkge1xuICAgIGRzdFswXSA9IHg7XG4gIH1cbiAgaWYgKHkpIHtcbiAgICBkc3RbMV0gPSB5O1xuICB9XG4gIGlmICh6KSB7XG4gICAgZHN0WzJdID0gejtcbiAgfVxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIHZlY3RvcnM7IGFzc3VtZXMgYSBhbmQgYiBoYXZlIHRoZSBzYW1lIGRpbWVuc2lvbi5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYSBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYiBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gW2RzdF0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgbmV3IG9uZSBpcyBjcmVhdGVkLi5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5mdW5jdGlvbiBhZGQoYSwgYiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgVmVjVHlwZSgzKTtcblxuICBkc3RbMF0gPSBhWzBdICsgYlswXTtcbiAgZHN0WzFdID0gYVsxXSArIGJbMV07XG4gIGRzdFsyXSA9IGFbMl0gKyBiWzJdO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogU3VidHJhY3RzIHR3byB2ZWN0b3JzLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBhIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBiIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBuZXcgb25lIGlzIGNyZWF0ZWQuLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cbmZ1bmN0aW9uIHN1YnRyYWN0KGEsIGIsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IFZlY1R5cGUoMyk7XG5cbiAgZHN0WzBdID0gYVswXSAtIGJbMF07XG4gIGRzdFsxXSA9IGFbMV0gLSBiWzFdO1xuICBkc3RbMl0gPSBhWzJdIC0gYlsyXTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGxpbmVhciBpbnRlcnBvbGF0aW9uIG9uIHR3byB2ZWN0b3JzLlxuICogR2l2ZW4gdmVjdG9ycyBhIGFuZCBiIGFuZCBpbnRlcnBvbGF0aW9uIGNvZWZmaWNpZW50IHQsIHJldHVybnNcbiAqICgxIC0gdCkgKiBhICsgdCAqIGIuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGEgT3BlcmFuZCB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGIgT3BlcmFuZCB2ZWN0b3IuXG4gKiBAcGFyYW0ge251bWJlcn0gdCBJbnRlcnBvbGF0aW9uIGNvZWZmaWNpZW50LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBuZXcgb25lIGlzIGNyZWF0ZWQuLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cbmZ1bmN0aW9uIGxlcnAoYSwgYiwgdCwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgVmVjVHlwZSgzKTtcblxuICBkc3RbMF0gPSAoMSAtIHQpICogYVswXSArIHQgKiBiWzBdO1xuICBkc3RbMV0gPSAoMSAtIHQpICogYVsxXSArIHQgKiBiWzFdO1xuICBkc3RbMl0gPSAoMSAtIHQpICogYVsyXSArIHQgKiBiWzJdO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogTXV0aXBsaWVzIGEgdmVjdG9yIGJ5IGEgc2NhbGFyLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSB2IFRoZSB2ZWN0b3IuXG4gKiBAcGFyYW0ge251bWJlcn0gayBUaGUgc2NhbGFyLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBuZXcgb25lIGlzIGNyZWF0ZWQuLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gZHN0LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cbmZ1bmN0aW9uIG11bFNjYWxhcih2LCBrLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBWZWNUeXBlKDMpO1xuXG4gIGRzdFswXSA9IHZbMF0gKiBrO1xuICBkc3RbMV0gPSB2WzFdICogaztcbiAgZHN0WzJdID0gdlsyXSAqIGs7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBEaXZpZGVzIGEgdmVjdG9yIGJ5IGEgc2NhbGFyLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSB2IFRoZSB2ZWN0b3IuXG4gKiBAcGFyYW0ge251bWJlcn0gayBUaGUgc2NhbGFyLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBuZXcgb25lIGlzIGNyZWF0ZWQuLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gZHN0LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cbmZ1bmN0aW9uIGRpdlNjYWxhcih2LCBrLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBWZWNUeXBlKDMpO1xuXG4gIGRzdFswXSA9IHZbMF0gLyBrO1xuICBkc3RbMV0gPSB2WzFdIC8gaztcbiAgZHN0WzJdID0gdlsyXSAvIGs7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0d28gdmVjdG9yczsgYXNzdW1lcyBib3RoIHZlY3RvcnMgaGF2ZVxuICogdGhyZWUgZW50cmllcy5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYSBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYiBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gW2RzdF0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgbmV3IG9uZSBpcyBjcmVhdGVkLi5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFRoZSB2ZWN0b3IgYSBjcm9zcyBiLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cbmZ1bmN0aW9uIGNyb3NzKGEsIGIsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IFZlY1R5cGUoMyk7XG5cbiAgdmFyIHQxID0gYVsyXSAqIGJbMF0gLSBhWzBdICogYlsyXTtcbiAgdmFyIHQyID0gYVswXSAqIGJbMV0gLSBhWzFdICogYlswXTtcbiAgZHN0WzBdID0gYVsxXSAqIGJbMl0gLSBhWzJdICogYlsxXTtcbiAgZHN0WzFdID0gdDE7XG4gIGRzdFsyXSA9IHQyO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWN0b3JzOyBhc3N1bWVzIGJvdGggdmVjdG9ycyBoYXZlXG4gKiB0aHJlZSBlbnRyaWVzLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBhIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBiIE9wZXJhbmQgdmVjdG9yLlxuICogQHJldHVybiB7bnVtYmVyfSBkb3QgcHJvZHVjdFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cbmZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl07XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGxlbmd0aCBvZiB2ZWN0b3JcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gdiB2ZWN0b3IuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGxlbmd0aCBvZiB2ZWN0b3IuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuZnVuY3Rpb24gbGVuZ3RoKHYpIHtcbiAgcmV0dXJuIE1hdGguc3FydCh2WzBdICogdlswXSArIHZbMV0gKiB2WzFdICsgdlsyXSAqIHZbMl0pO1xufVxuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBzcXVhcmUgb2YgdGhlIGxlbmd0aCBvZiB2ZWN0b3JcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gdiB2ZWN0b3IuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHNxdWFyZSBvZiB0aGUgbGVuZ3RoIG9mIHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5mdW5jdGlvbiBsZW5ndGhTcSh2KSB7XG4gIHJldHVybiB2WzBdICogdlswXSArIHZbMV0gKiB2WzFdICsgdlsyXSAqIHZbMl07XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBwb2ludHNcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYSB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGIgdmVjdG9yLlxuICogQHJldHVybiB7bnVtYmVyfSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5mdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gIHZhciBkeCA9IGFbMF0gLSBiWzBdO1xuICB2YXIgZHkgPSBhWzFdIC0gYlsxXTtcbiAgdmFyIGR6ID0gYVsyXSAtIGJbMl07XG4gIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkgKyBkeiAqIGR6KTtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgc3F1YXJlIG9mIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgcG9pbnRzXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGEgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBiIHZlY3Rvci5cbiAqIEByZXR1cm4ge251bWJlcn0gc3F1YXJlIG9mIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5mdW5jdGlvbiBkaXN0YW5jZVNxKGEsIGIpIHtcbiAgdmFyIGR4ID0gYVswXSAtIGJbMF07XG4gIHZhciBkeSA9IGFbMV0gLSBiWzFdO1xuICB2YXIgZHogPSBhWzJdIC0gYlsyXTtcbiAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5ICsgZHogKiBkejtcbn1cblxuLyoqXG4gKiBEaXZpZGVzIGEgdmVjdG9yIGJ5IGl0cyBFdWNsaWRlYW4gbGVuZ3RoIGFuZCByZXR1cm5zIHRoZSBxdW90aWVudC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYSBUaGUgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBuZXcgb25lIGlzIGNyZWF0ZWQuLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gVGhlIG5vcm1hbGl6ZWQgdmVjdG9yLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZShhLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBWZWNUeXBlKDMpO1xuXG4gIHZhciBsZW5TcSA9IGFbMF0gKiBhWzBdICsgYVsxXSAqIGFbMV0gKyBhWzJdICogYVsyXTtcbiAgdmFyIGxlbiA9IE1hdGguc3FydChsZW5TcSk7XG4gIGlmIChsZW4gPiAwLjAwMDAxKSB7XG4gICAgZHN0WzBdID0gYVswXSAvIGxlbjtcbiAgICBkc3RbMV0gPSBhWzFdIC8gbGVuO1xuICAgIGRzdFsyXSA9IGFbMl0gLyBsZW47XG4gIH0gZWxzZSB7XG4gICAgZHN0WzBdID0gMDtcbiAgICBkc3RbMV0gPSAwO1xuICAgIGRzdFsyXSA9IDA7XG4gIH1cblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIE5lZ2F0ZXMgYSB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHYgVGhlIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gW2RzdF0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgbmV3IG9uZSBpcyBjcmVhdGVkLi5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IC12LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cbmZ1bmN0aW9uIG5lZ2F0ZSh2LCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBWZWNUeXBlKDMpO1xuXG4gIGRzdFswXSA9IC12WzBdO1xuICBkc3RbMV0gPSAtdlsxXTtcbiAgZHN0WzJdID0gLXZbMl07XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBDb3BpZXMgYSB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHYgVGhlIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gW2RzdF0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgbmV3IG9uZSBpcyBjcmVhdGVkLi5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IEEgY29weSBvZiB2LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cbmZ1bmN0aW9uIGNvcHkodiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgVmVjVHlwZSgzKTtcblxuICBkc3RbMF0gPSB2WzBdO1xuICBkc3RbMV0gPSB2WzFdO1xuICBkc3RbMl0gPSB2WzJdO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogTXVsdGlwbGllcyBhIHZlY3RvciBieSBhbm90aGVyIHZlY3RvciAoY29tcG9uZW50LXdpc2UpOyBhc3N1bWVzIGEgYW5kXG4gKiBiIGhhdmUgdGhlIHNhbWUgbGVuZ3RoLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBhIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBiIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBuZXcgb25lIGlzIGNyZWF0ZWQuLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gVGhlIHZlY3RvciBvZiBwcm9kdWN0cyBvZiBlbnRyaWVzIG9mIGEgYW5kXG4gKiAgICAgYi5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5mdW5jdGlvbiBtdWx0aXBseShhLCBiLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBWZWNUeXBlKDMpO1xuXG4gIGRzdFswXSA9IGFbMF0gKiBiWzBdO1xuICBkc3RbMV0gPSBhWzFdICogYlsxXTtcbiAgZHN0WzJdID0gYVsyXSAqIGJbMl07XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBEaXZpZGVzIGEgdmVjdG9yIGJ5IGFub3RoZXIgdmVjdG9yIChjb21wb25lbnQtd2lzZSk7IGFzc3VtZXMgYSBhbmRcbiAqIGIgaGF2ZSB0aGUgc2FtZSBsZW5ndGguXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGEgT3BlcmFuZCB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGIgT3BlcmFuZCB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFtkc3RdIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IG5ldyBvbmUgaXMgY3JlYXRlZC4uXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC92My5WZWMzfSBUaGUgdmVjdG9yIG9mIHF1b3RpZW50cyBvZiBlbnRyaWVzIG9mIGEgYW5kXG4gKiAgICAgYi5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5mdW5jdGlvbiBkaXZpZGUoYSwgYiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgVmVjVHlwZSgzKTtcblxuICBkc3RbMF0gPSBhWzBdIC8gYlswXTtcbiAgZHN0WzFdID0gYVsxXSAvIGJbMV07XG4gIGRzdFsyXSA9IGFbMl0gLyBiWzJdO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbmV4cG9ydHMuYWRkID0gYWRkO1xuZXhwb3J0cy5jb3B5ID0gY29weTtcbmV4cG9ydHMuY3JlYXRlID0gY3JlYXRlO1xuZXhwb3J0cy5jcm9zcyA9IGNyb3NzO1xuZXhwb3J0cy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuZXhwb3J0cy5kaXN0YW5jZVNxID0gZGlzdGFuY2VTcTtcbmV4cG9ydHMuZGl2aWRlID0gZGl2aWRlO1xuZXhwb3J0cy5kaXZTY2FsYXIgPSBkaXZTY2FsYXI7XG5leHBvcnRzLmRvdCA9IGRvdDtcbmV4cG9ydHMubGVycCA9IGxlcnA7XG5leHBvcnRzLmxlbmd0aCA9IGxlbmd0aDtcbmV4cG9ydHMubGVuZ3RoU3EgPSBsZW5ndGhTcTtcbmV4cG9ydHMubXVsU2NhbGFyID0gbXVsU2NhbGFyO1xuZXhwb3J0cy5tdWx0aXBseSA9IG11bHRpcGx5O1xuZXhwb3J0cy5uZWdhdGUgPSBuZWdhdGU7XG5leHBvcnRzLm5vcm1hbGl6ZSA9IG5vcm1hbGl6ZTtcbmV4cG9ydHMuc2V0RGVmYXVsdFR5cGUgPSBzZXREZWZhdWx0VHlwZTtcbmV4cG9ydHMuc3VidHJhY3QgPSBzdWJ0cmFjdDtcblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldEFycmF5XyA9IGV4cG9ydHMuZ2V0TnVtQ29tcG9uZW50c18gPSBleHBvcnRzLnNldEF0dHJpYnV0ZURlZmF1bHRzXyA9IGV4cG9ydHMuc2V0QXR0cmlidXRlUHJlZml4ID0gZXhwb3J0cy5zZXRBdHRyaWJJbmZvQnVmZmVyRnJvbUFycmF5ID0gZXhwb3J0cy5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cyA9IGV4cG9ydHMuY3JlYXRlQnVmZmVyRnJvbVR5cGVkQXJyYXkgPSBleHBvcnRzLmNyZWF0ZUJ1ZmZlckZyb21BcnJheSA9IGV4cG9ydHMuY3JlYXRlQnVmZmVyc0Zyb21BcnJheXMgPSBleHBvcnRzLmNyZWF0ZUF0dHJpYnNGcm9tQXJyYXlzID0gdW5kZWZpbmVkO1xuXG52YXIgX3R5cGVkYXJyYXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIHR5cGVkQXJyYXlzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVkYXJyYXlzKTtcblxudmFyIF9oZWxwZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgaGVscGVyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hlbHBlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8qKlxuICogTG93IGxldmVsIGF0dHJpYnV0ZSBhbmQgYnVmZmVyIHJlbGF0ZWQgZnVuY3Rpb25zXG4gKlxuICogWW91IHNob3VsZCBnZW5lcmFsbHkgbm90IG5lZWQgdG8gdXNlIHRoZXNlIGZ1bmN0aW9ucy4gVGhleSBhcmUgcHJvdmlkZWRcbiAqIGZvciB0aG9zZSBjYXNlcyB3aGVyZSB5b3UncmUgZG9pbmcgc29tZXRoaW5nIG91dCBvZiB0aGUgb3JkaW5hcnlcbiAqIGFuZCB5b3UgbmVlZCBsb3dlciBsZXZlbCBhY2Nlc3MuXG4gKlxuICogRm9yIGJhY2t3YXJkIGNvbXBhdGliaWx5IHRoZXkgYXJlIGF2YWlsYWJsZSBhdCBib3RoIGB0d2dsLmF0dHJpYnV0ZXNgIGFuZCBgdHdnbGBcbiAqIGl0c2VsZlxuICpcbiAqIFNlZSB7QGxpbmsgbW9kdWxlOnR3Z2x9IGZvciBjb3JlIGZ1bmN0aW9uc1xuICpcbiAqIEBtb2R1bGUgdHdnbC9hdHRyaWJ1dGVzXG4gKi9cblxuLy8gbWFrZSBzdXJlIHdlIGRvbid0IHNlZSBhIGdsb2JhbCBnbFxuLypcbiAqIENvcHlyaWdodCAyMDE1LCBHcmVnZyBUYXZhcmVzLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAqIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbiAqIG1ldDpcbiAqXG4gKiAgICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuICogbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuICogaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogZGlzdHJpYnV0aW9uLlxuICogICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHcmVnZyBUYXZhcmVzLiBub3IgdGhlIG5hbWVzIG9mIGhpc1xuICogY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbiAqIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuICogXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuICogTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4gKiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuICogT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4gKiBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4gKiBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuICogVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuICogKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4gKiBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbnZhciBnbCA9IHVuZGVmaW5lZDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxudmFyIGRlZmF1bHRzID0ge1xuICBhdHRyaWJQcmVmaXg6IFwiXCJcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgZGVmYXVsdCBhdHRyaWIgcHJlZml4XG4gKlxuICogV2hlbiB3cml0aW5nIHNoYWRlcnMgSSBwcmVmZXIgdG8gbmFtZSBhdHRyaWJ1dGVzIHdpdGggYGFfYCwgdW5pZm9ybXMgd2l0aCBgdV9gIGFuZCB2YXJ5aW5ncyB3aXRoIGB2X2BcbiAqIGFzIGl0IG1ha2VzIGl0IGNsZWFyIHdoZXJlIHRoZXkgY2FtZSBmcm9tLiBCdXQsIHdoZW4gYnVpbGRpbmcgZ2VvbWV0cnkgSSBwcmVmZXIgdXNpbmcgdW5wcmVmaXhlZCBuYW1lcy5cbiAqXG4gKiBJbiBvdGhlcndvcmRzIEknbGwgY3JlYXRlIGFycmF5cyBvZiBnZW9tZXRyeSBsaWtlIHRoaXNcbiAqXG4gKiAgICAgdmFyIGFycmF5cyA9IHtcbiAqICAgICAgIHBvc2l0aW9uOiAuLi5cbiAqICAgICAgIG5vcm1hbDogLi4uXG4gKiAgICAgICB0ZXhjb29yZDogLi4uXG4gKiAgICAgfTtcbiAqXG4gKiBCdXQgbmVlZCB0aG9zZSBtYXBwZWQgdG8gYXR0cmlidXRlcyBhbmQgbXkgYXR0cmlidXRlcyBzdGFydCB3aXRoIGBhX2AuXG4gKlxuICogQGRlcHJlY2F0ZWQgc2VlIHtAbGluayBtb2R1bGU6dHdnbC5zZXREZWZhdWx0c31cbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXggcHJlZml4IGZvciBhdHRyaWJzXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvYXR0cmlidXRlc1xuICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVQcmVmaXgocHJlZml4KSB7XG4gIGRlZmF1bHRzLmF0dHJpYlByZWZpeCA9IHByZWZpeDtcbn1cblxuZnVuY3Rpb24gc2V0RGVmYXVsdHMobmV3RGVmYXVsdHMpIHtcbiAgaGVscGVyLmNvcHlFeGlzdGluZ1Byb3BlcnRpZXMobmV3RGVmYXVsdHMsIGRlZmF1bHRzKTtcbn1cblxuZnVuY3Rpb24gc2V0QnVmZmVyRnJvbVR5cGVkQXJyYXkoZ2wsIHR5cGUsIGJ1ZmZlciwgYXJyYXksIGRyYXdUeXBlKSB7XG4gIGdsLmJpbmRCdWZmZXIodHlwZSwgYnVmZmVyKTtcbiAgZ2wuYnVmZmVyRGF0YSh0eXBlLCBhcnJheSwgZHJhd1R5cGUgfHwgZ2wuU1RBVElDX0RSQVcpO1xufVxuXG4vKipcbiAqIEdpdmVuIHR5cGVkIGFycmF5IGNyZWF0ZXMgYSBXZWJHTEJ1ZmZlciBhbmQgY29waWVzIHRoZSB0eXBlZCBhcnJheVxuICogaW50byBpdC5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgQSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ8U2hhcmVkQXJyYXlCdWZmZXJ8QXJyYXlCdWZmZXJWaWV3fFdlYkdMQnVmZmVyfSB0eXBlZEFycmF5IHRoZSB0eXBlZCBhcnJheS4gTm90ZTogSWYgYSBXZWJHTEJ1ZmZlciBpcyBwYXNzZWQgaW4gaXQgd2lsbCBqdXN0IGJlIHJldHVybmVkLiBObyBhY3Rpb24gd2lsbCBiZSB0YWtlblxuICogQHBhcmFtIHtudW1iZXJ9IFt0eXBlXSB0aGUgR0wgYmluZCB0eXBlIGZvciB0aGUgYnVmZmVyLiBEZWZhdWx0ID0gYGdsLkFSUkFZX0JVRkZFUmAuXG4gKiBAcGFyYW0ge251bWJlcn0gW2RyYXdUeXBlXSB0aGUgR0wgZHJhdyB0eXBlIGZvciB0aGUgYnVmZmVyLiBEZWZhdWx0ID0gJ2dsLlNUQVRJQ19EUkFXYC5cbiAqIEByZXR1cm4ge1dlYkdMQnVmZmVyfSB0aGUgY3JlYXRlZCBXZWJHTEJ1ZmZlclxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL2F0dHJpYnV0ZXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQnVmZmVyRnJvbVR5cGVkQXJyYXkoZ2wsIHR5cGVkQXJyYXksIHR5cGUsIGRyYXdUeXBlKSB7XG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgV2ViR0xCdWZmZXIpIHtcbiAgICByZXR1cm4gdHlwZWRBcnJheTtcbiAgfVxuICB0eXBlID0gdHlwZSB8fCBnbC5BUlJBWV9CVUZGRVI7XG4gIHZhciBidWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgc2V0QnVmZmVyRnJvbVR5cGVkQXJyYXkoZ2wsIHR5cGUsIGJ1ZmZlciwgdHlwZWRBcnJheSwgZHJhd1R5cGUpO1xuICByZXR1cm4gYnVmZmVyO1xufVxuXG5mdW5jdGlvbiBpc0luZGljZXMobmFtZSkge1xuICByZXR1cm4gbmFtZSA9PT0gXCJpbmRpY2VzXCI7XG59XG5cbi8vIFRoaXMgaXMgcmVhbGx5IGp1c3QgYSBndWVzcy4gVGhvdWdoIEkgY2FuJ3QgcmVhbGx5IGltYWdpbmUgdXNpbmdcbi8vIGFueXRoaW5nIGVsc2U/IE1heWJlIGZvciBzb21lIGNvbXByZXNzaW9uP1xuZnVuY3Rpb24gZ2V0Tm9ybWFsaXphdGlvbkZvclR5cGVkQXJyYXkodHlwZWRBcnJheSkge1xuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIEludDhBcnJheSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIFRoaXMgaXMgcmVhbGx5IGp1c3QgYSBndWVzcy4gVGhvdWdoIEkgY2FuJ3QgcmVhbGx5IGltYWdpbmUgdXNpbmdcbi8vIGFueXRoaW5nIGVsc2U/IE1heWJlIGZvciBzb21lIGNvbXByZXNzaW9uP1xuZnVuY3Rpb24gZ2V0Tm9ybWFsaXphdGlvbkZvclR5cGVkQXJyYXlUeXBlKHR5cGVkQXJyYXlUeXBlKSB7XG4gIGlmICh0eXBlZEFycmF5VHlwZSA9PT0gSW50OEFycmF5KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheVR5cGUgPT09IFVpbnQ4QXJyYXkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0QXJyYXkoYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5Lmxlbmd0aCA/IGFycmF5IDogYXJyYXkuZGF0YTtcbn1cblxudmFyIHRleGNvb3JkUkUgPSAvY29vcmR8dGV4dHVyZS9pO1xudmFyIGNvbG9yUkUgPSAvY29sb3J8Y29sb3VyL2k7XG5cbmZ1bmN0aW9uIGd1ZXNzTnVtQ29tcG9uZW50c0Zyb21OYW1lKG5hbWUsIGxlbmd0aCkge1xuICB2YXIgbnVtQ29tcG9uZW50cyA9IHZvaWQgMDtcbiAgaWYgKHRleGNvb3JkUkUudGVzdChuYW1lKSkge1xuICAgIG51bUNvbXBvbmVudHMgPSAyO1xuICB9IGVsc2UgaWYgKGNvbG9yUkUudGVzdChuYW1lKSkge1xuICAgIG51bUNvbXBvbmVudHMgPSA0O1xuICB9IGVsc2Uge1xuICAgIG51bUNvbXBvbmVudHMgPSAzOyAvLyBwb3NpdGlvbiwgbm9ybWFscywgaW5kaWNlcyAuLi5cbiAgfVxuXG4gIGlmIChsZW5ndGggJSBudW1Db21wb25lbnRzID4gMCkge1xuICAgIHRocm93IFwiQ2FuIG5vdCBndWVzcyBudW1Db21wb25lbnRzIGZvciBhdHRyaWJ1dGUgJ1wiICsgbmFtZSArIFwiJy4gVHJpZWQgXCIgKyBudW1Db21wb25lbnRzICsgXCIgYnV0IFwiICsgbGVuZ3RoICsgXCIgdmFsdWVzIGlzIG5vdCBldmVubHkgZGl2aXNpYmxlIGJ5IFwiICsgbnVtQ29tcG9uZW50cyArIFwiLiBZb3Ugc2hvdWxkIHNwZWNpZnkgaXQuXCI7XG4gIH1cblxuICByZXR1cm4gbnVtQ29tcG9uZW50cztcbn1cblxuZnVuY3Rpb24gZ2V0TnVtQ29tcG9uZW50cyhhcnJheSwgYXJyYXlOYW1lKSB7XG4gIHJldHVybiBhcnJheS5udW1Db21wb25lbnRzIHx8IGFycmF5LnNpemUgfHwgZ3Vlc3NOdW1Db21wb25lbnRzRnJvbU5hbWUoYXJyYXlOYW1lLCBnZXRBcnJheShhcnJheSkubGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gbWFrZVR5cGVkQXJyYXkoYXJyYXksIG5hbWUpIHtcbiAgaWYgKHR5cGVkQXJyYXlzLmlzQXJyYXlCdWZmZXIoYXJyYXkpKSB7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgaWYgKHR5cGVkQXJyYXlzLmlzQXJyYXlCdWZmZXIoYXJyYXkuZGF0YSkpIHtcbiAgICByZXR1cm4gYXJyYXkuZGF0YTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgIGFycmF5ID0ge1xuICAgICAgZGF0YTogYXJyYXlcbiAgICB9O1xuICB9XG5cbiAgdmFyIFR5cGUgPSBhcnJheS50eXBlO1xuICBpZiAoIVR5cGUpIHtcbiAgICBpZiAoaXNJbmRpY2VzKG5hbWUpKSB7XG4gICAgICBUeXBlID0gVWludDE2QXJyYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFR5cGUgPSBGbG9hdDMyQXJyYXk7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXcgVHlwZShhcnJheS5kYXRhKTtcbn1cblxuLyoqXG4gKiBUaGUgaW5mbyBmb3IgYW4gYXR0cmlidXRlLiBUaGlzIGlzIGVmZmVjdGl2ZWx5IGp1c3QgdGhlIGFyZ3VtZW50cyB0byBgZ2wudmVydGV4QXR0cmliUG9pbnRlcmAgcGx1cyB0aGUgV2ViR0xCdWZmZXJcbiAqIGZvciB0aGUgYXR0cmlidXRlLlxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEF0dHJpYkluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbnVtQ29tcG9uZW50c10gdGhlIG51bWJlciBvZiBjb21wb25lbnRzIGZvciB0aGlzIGF0dHJpYnV0ZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbc2l6ZV0gc3lub255bSBmb3IgYG51bUNvbXBvbmVudHNgLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt0eXBlXSB0aGUgdHlwZSBvZiB0aGUgYXR0cmlidXRlIChlZy4gYGdsLkZMT0FUYCwgYGdsLlVOU0lHTkVEX0JZVEVgLCBldGMuLi4pIERlZmF1bHQgPSBgZ2wuRkxPQVRgXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtub3JtYWxpemVdIHdoZXRoZXIgb3Igbm90IHRvIG5vcm1hbGl6ZSB0aGUgZGF0YS4gRGVmYXVsdCA9IGZhbHNlXG4gKiBAcHJvcGVydHkge251bWJlcn0gW29mZnNldF0gb2Zmc2V0IGludG8gYnVmZmVyIGluIGJ5dGVzLiBEZWZhdWx0ID0gMFxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtzdHJpZGVdIHRoZSBzdHJpZGUgaW4gYnl0ZXMgcGVyIGVsZW1lbnQuIERlZmF1bHQgPSAwXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2Rpdmlzb3JdIHRoZSBkaXZpc29yIGluIGluc3RhbmNlcy4gRGVmYXVsdCA9IHVuZGVmaW5lZC4gTm90ZTogdW5kZWZpbmVkID0gZG9uJ3QgY2FsbCBnbC52ZXJ0ZXhBdHRyaWJEaXZpc29yXG4gKiAgICB3aGVyZSBhcyBhbnl0aGluZyBlbHNlID0gZG8gY2FsbCBpdCB3aXRoIHRoaXMgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7V2ViR0xCdWZmZXJ9IGJ1ZmZlciB0aGUgYnVmZmVyIHRoYXQgY29udGFpbnMgdGhlIGRhdGEgZm9yIHRoaXMgYXR0cmlidXRlXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2RyYXdUeXBlXSB0aGUgZHJhdyB0eXBlIHBhc3NlZCB0byBnbC5idWZmZXJEYXRhLiBEZWZhdWx0ID0gZ2wuU1RBVElDX0RSQVdcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogVXNlIHRoaXMgdHlwZSBvZiBhcnJheSBzcGVjIHdoZW4gVFdHTCBjYW4ndCBndWVzcyB0aGUgdHlwZSBvciBudW1iZXIgb2YgY29tcG9tZW50cyBvZiBhbiBhcnJheVxuICogQHR5cGVkZWYge09iamVjdH0gRnVsbEFycmF5U3BlY1xuICogQHByb3BlcnR5IHsobnVtYmVyfG51bWJlcltdfEFycmF5QnVmZmVyVmlldyl9IGRhdGEgVGhlIGRhdGEgb2YgdGhlIGFycmF5LiBBIG51bWJlciBhbG9uZSBiZWNvbWVzIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgb2YgdHlwZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbnVtQ29tcG9uZW50c10gbnVtYmVyIG9mIGNvbXBvbmVudHMgZm9yIGB2ZXJ0ZXhBdHRyaWJQb2ludGVyYC4gRGVmYXVsdCBpcyBiYXNlZCBvbiB0aGUgbmFtZSBvZiB0aGUgYXJyYXkuXG4gKiAgICBJZiBgY29vcmRgIGlzIGluIHRoZSBuYW1lIGFzc3VtZXMgYG51bUNvbXBvbmVudHMgPSAyYC5cbiAqICAgIElmIGBjb2xvcmAgaXMgaW4gdGhlIG5hbWUgYXNzdW1lcyBgbnVtQ29tcG9uZW50cyA9IDRgLlxuICogICAgb3RoZXJ3aXNlIGFzc3VtZXMgYG51bUNvbXBvbmVudHMgPSAzYFxuICogQHByb3BlcnR5IHtjb25zdHJ1Y3Rvcn0gdHlwZSBUaGUgdHlwZS4gVGhpcyBpcyBvbmx5IHVzZWQgaWYgYGRhdGFgIGlzIGEgSmF2YVNjcmlwdCBhcnJheS4gSXQgaXMgdGhlIGNvbnN0cnVjdG9yIGZvciB0aGUgdHlwZWRhcnJheS4gKGVnLiBgVWludDhBcnJheWApLlxuICogRm9yIGV4YW1wbGUgaWYgeW91IHdhbnQgY29sb3JzIGluIGEgYFVpbnQ4QXJyYXlgIHlvdSBtaWdodCBoYXZlIGEgYEZ1bGxBcnJheVNwZWNgIGxpa2UgYHsgdHlwZTogVWludDhBcnJheSwgZGF0YTogWzI1NSwwLDI1NSwyNTUsIC4uLl0sIH1gLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtzaXplXSBzeW5vbnltIGZvciBgbnVtQ29tcG9uZW50c2AuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtub3JtYWxpemVdIG5vcm1hbGl6ZSBmb3IgYHZlcnRleEF0dHJpYlBvaW50ZXJgLiBEZWZhdWx0IGlzIHRydWUgaWYgdHlwZSBpcyBgSW50OEFycmF5YCBvciBgVWludDhBcnJheWAgb3RoZXJ3aXNlIGZhbHNlLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtzdHJpZGVdIHN0cmlkZSBmb3IgYHZlcnRleEF0dHJpYlBvaW50ZXJgLiBEZWZhdWx0ID0gMFxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtvZmZzZXRdIG9mZnNldCBmb3IgYHZlcnRleEF0dHJpYlBvaW50ZXJgLiBEZWZhdWx0ID0gMFxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtkaXZpc29yXSBkaXZpc29yIGZvciBgdmVydGV4QXR0cmliRGl2aXNvcmAuIERlZmF1bHQgPSB1bmRlZmluZWQuIE5vdGU6IHVuZGVmaW5lZCA9IGRvbid0IGNhbGwgZ2wudmVydGV4QXR0cmliRGl2aXNvclxuICogICAgd2hlcmUgYXMgYW55dGhpbmcgZWxzZSA9IGRvIGNhbGwgaXQgd2l0aCB0aGlzIHZhbHVlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2F0dHJpYl0gbmFtZSBvZiBhdHRyaWJ1dGUgdGhpcyBhcnJheSBtYXBzIHRvLiBEZWZhdWx0cyB0byBzYW1lIG5hbWUgYXMgYXJyYXkgcHJlZml4ZWQgYnkgdGhlIGRlZmF1bHQgYXR0cmliUHJlZml4LlxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtuYW1lXSBzeW5vbnltIGZvciBgYXR0cmliYC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbYXR0cmliTmFtZV0gc3lub255bSBmb3IgYGF0dHJpYmAuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIEFuIGluZGl2aWR1YWwgYXJyYXkgaW4ge0BsaW5rIG1vZHVsZTp0d2dsLkFycmF5c31cbiAqXG4gKiBXaGVuIHBhc3NlZCB0byB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXN9IGlmIGFuIEFycmF5U3BlYyBpcyBgbnVtYmVyW11gIG9yIGBBcnJheUJ1ZmZlclZpZXdgXG4gKiB0aGUgdHlwZXMgd2lsbCBiZSBndWVzc2VkIGJhc2VkIG9uIHRoZSBuYW1lLiBgaW5kaWNlc2Agd2lsbCBiZSBgVWludDE2QXJyYXlgLCBldmVyeXRoaW5nIGVsc2Ugd2lsbFxuICogYmUgYEZsb2F0MzJBcnJheWAuIElmIGFuIEFycmF5U3BlYyBpcyBhIG51bWJlciBpdCdzIHRoZSBudW1iZXIgb2YgZmxvYXRzIGZvciBhbiBlbXB0eSAoemVyb2VkKSBidWZmZXIuXG4gKlxuICogQHR5cGVkZWYgeyhudW1iZXJ8bnVtYmVyW118QXJyYXlCdWZmZXJWaWV3fG1vZHVsZTp0d2dsLkZ1bGxBcnJheVNwZWMpfSBBcnJheVNwZWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogVGhpcyBpcyBhIEphdmFTY3JpcHQgb2JqZWN0IG9mIGFycmF5cyBieSBuYW1lLiBUaGUgbmFtZXMgc2hvdWxkIG1hdGNoIHlvdXIgc2hhZGVyJ3MgYXR0cmlidXRlcy4gSWYgeW91clxuICogYXR0cmlidXRlcyBoYXZlIGEgY29tbW9uIHByZWZpeCB5b3UgY2FuIHNwZWNpZnkgaXQgYnkgY2FsbGluZyB7QGxpbmsgbW9kdWxlOnR3Z2wuc2V0QXR0cmlidXRlUHJlZml4fS5cbiAqXG4gKiAgICAgQmFyZSBKYXZhU2NyaXB0IEFycmF5c1xuICpcbiAqICAgICAgICAgdmFyIGFycmF5cyA9IHtcbiAqICAgICAgICAgICAgcG9zaXRpb246IFstMSwgMSwgMF0sXG4gKiAgICAgICAgICAgIG5vcm1hbDogWzAsIDEsIDBdLFxuICogICAgICAgICAgICAuLi5cbiAqICAgICAgICAgfVxuICpcbiAqICAgICBCYXJlIFR5cGVkQXJyYXlzXG4gKlxuICogICAgICAgICB2YXIgYXJyYXlzID0ge1xuICogICAgICAgICAgICBwb3NpdGlvbjogbmV3IEZsb2F0MzJBcnJheShbLTEsIDEsIDBdKSxcbiAqICAgICAgICAgICAgY29sb3I6IG5ldyBVaW50OEFycmF5KFsyNTUsIDEyOCwgNjQsIDI1NV0pLFxuICogICAgICAgICAgICAuLi5cbiAqICAgICAgICAgfVxuICpcbiAqICogICBXaWxsIGd1ZXNzIGF0IGBudW1Db21wb25lbnRzYCBpZiBub3Qgc3BlY2lmaWVkIGJhc2VkIG9uIG5hbWUuXG4gKlxuICogICAgIElmIGBjb29yZGAgaXMgaW4gdGhlIG5hbWUgYXNzdW1lcyBgbnVtQ29tcG9uZW50cyA9IDJgXG4gKlxuICogICAgIElmIGBjb2xvcmAgaXMgaW4gdGhlIG5hbWUgYXNzdW1lcyBgbnVtQ29tcG9uZW50cyA9IDRgXG4gKlxuICogICAgIG90aGVyd2lzZSBhc3N1bWVzIGBudW1Db21wb25lbnRzID0gM2BcbiAqXG4gKiBPYmplY3RzIHdpdGggdmFyaW91cyBmaWVsZHMuIFNlZSB7QGxpbmsgbW9kdWxlOnR3Z2wuRnVsbEFycmF5U3BlY30uXG4gKlxuICogICAgIHZhciBhcnJheXMgPSB7XG4gKiAgICAgICBwb3NpdGlvbjogeyBudW1Db21wb25lbnRzOiAzLCBkYXRhOiBbMCwgMCwgMCwgMTAsIDAsIDAsIDAsIDEwLCAwLCAxMCwgMTAsIDBdLCB9LFxuICogICAgICAgdGV4Y29vcmQ6IHsgbnVtQ29tcG9uZW50czogMiwgZGF0YTogWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdLCAgICAgICAgICAgICAgICAgfSxcbiAqICAgICAgIG5vcm1hbDogICB7IG51bUNvbXBvbmVudHM6IDMsIGRhdGE6IFswLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxXSwgICAgIH0sXG4gKiAgICAgICBpbmRpY2VzOiAgeyBudW1Db21wb25lbnRzOiAzLCBkYXRhOiBbMCwgMSwgMiwgMSwgMiwgM10sICAgICAgICAgICAgICAgICAgICAgICB9LFxuICogICAgIH07XG4gKlxuICogQHR5cGVkZWYge09iamVjdC48c3RyaW5nLCBtb2R1bGU6dHdnbC5BcnJheVNwZWM+fSBBcnJheXNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBhdHRyaWJ1dGUgZGF0YSBhbmQgV2ViR0xCdWZmZXJzIGZyb20gc2V0IG9mIGFycmF5c1xuICpcbiAqIEdpdmVuXG4gKlxuICogICAgICB2YXIgYXJyYXlzID0ge1xuICogICAgICAgIHBvc2l0aW9uOiB7IG51bUNvbXBvbmVudHM6IDMsIGRhdGE6IFswLCAwLCAwLCAxMCwgMCwgMCwgMCwgMTAsIDAsIDEwLCAxMCwgMF0sIH0sXG4gKiAgICAgICAgdGV4Y29vcmQ6IHsgbnVtQ29tcG9uZW50czogMiwgZGF0YTogWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdLCAgICAgICAgICAgICAgICAgfSxcbiAqICAgICAgICBub3JtYWw6ICAgeyBudW1Db21wb25lbnRzOiAzLCBkYXRhOiBbMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMV0sICAgICB9LFxuICogICAgICAgIGNvbG9yOiAgICB7IG51bUNvbXBvbmVudHM6IDQsIGRhdGE6IFsyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMCwgMCwgMjU1LCAwLCAwLCAyNTUsIDI1NV0sIHR5cGU6IFVpbnQ4QXJyYXksIH0sXG4gKiAgICAgICAgaW5kaWNlczogIHsgbnVtQ29tcG9uZW50czogMywgZGF0YTogWzAsIDEsIDIsIDEsIDIsIDNdLCAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAqICAgICAgfTtcbiAqXG4gKiByZXR1cm5zIHNvbWV0aGluZyBsaWtlXG4gKlxuICogICAgICB2YXIgYXR0cmlicyA9IHtcbiAqICAgICAgICBwb3NpdGlvbjogeyBudW1Db21wb25lbnRzOiAzLCB0eXBlOiBnbC5GTE9BVCwgICAgICAgICBub3JtYWxpemU6IGZhbHNlLCBidWZmZXI6IFdlYkdMQnVmZmVyLCB9LFxuICogICAgICAgIHRleGNvb3JkOiB7IG51bUNvbXBvbmVudHM6IDIsIHR5cGU6IGdsLkZMT0FULCAgICAgICAgIG5vcm1hbGl6ZTogZmFsc2UsIGJ1ZmZlcjogV2ViR0xCdWZmZXIsIH0sXG4gKiAgICAgICAgbm9ybWFsOiAgIHsgbnVtQ29tcG9uZW50czogMywgdHlwZTogZ2wuRkxPQVQsICAgICAgICAgbm9ybWFsaXplOiBmYWxzZSwgYnVmZmVyOiBXZWJHTEJ1ZmZlciwgfSxcbiAqICAgICAgICBjb2xvcjogICAgeyBudW1Db21wb25lbnRzOiA0LCB0eXBlOiBnbC5VTlNJR05FRF9CWVRFLCBub3JtYWxpemU6IHRydWUsICBidWZmZXI6IFdlYkdMQnVmZmVyLCB9LFxuICogICAgICB9O1xuICpcbiAqIG5vdGVzOlxuICpcbiAqICogICBBcnJheXMgY2FuIHRha2UgdmFyaW91cyBmb3Jtc1xuICpcbiAqICAgICBCYXJlIEphdmFTY3JpcHQgQXJyYXlzXG4gKlxuICogICAgICAgICB2YXIgYXJyYXlzID0ge1xuICogICAgICAgICAgICBwb3NpdGlvbjogWy0xLCAxLCAwXSxcbiAqICAgICAgICAgICAgbm9ybWFsOiBbMCwgMSwgMF0sXG4gKiAgICAgICAgICAgIC4uLlxuICogICAgICAgICB9XG4gKlxuICogICAgIEJhcmUgVHlwZWRBcnJheXNcbiAqXG4gKiAgICAgICAgIHZhciBhcnJheXMgPSB7XG4gKiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgRmxvYXQzMkFycmF5KFstMSwgMSwgMF0pLFxuICogICAgICAgICAgICBjb2xvcjogbmV3IFVpbnQ4QXJyYXkoWzI1NSwgMTI4LCA2NCwgMjU1XSksXG4gKiAgICAgICAgICAgIC4uLlxuICogICAgICAgICB9XG4gKlxuICogKiAgIFdpbGwgZ3Vlc3MgYXQgYG51bUNvbXBvbmVudHNgIGlmIG5vdCBzcGVjaWZpZWQgYmFzZWQgb24gbmFtZS5cbiAqXG4gKiAgICAgSWYgYGNvb3JkYCBpcyBpbiB0aGUgbmFtZSBhc3N1bWVzIGBudW1Db21wb25lbnRzID0gMmBcbiAqXG4gKiAgICAgSWYgYGNvbG9yYCBpcyBpbiB0aGUgbmFtZSBhc3N1bWVzIGBudW1Db21wb25lbnRzID0gNGBcbiAqXG4gKiAgICAgb3RoZXJ3aXNlIGFzc3VtZXMgYG51bUNvbXBvbmVudHMgPSAzYFxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgd2ViZ2wgcmVuZGVyaW5nIGNvbnRleHQuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkFycmF5c30gYXJyYXlzIFRoZSBhcnJheXNcbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBtb2R1bGU6dHdnbC5BdHRyaWJJbmZvPn0gdGhlIGF0dHJpYnNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9hdHRyaWJ1dGVzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUF0dHJpYnNGcm9tQXJyYXlzKGdsLCBhcnJheXMpIHtcbiAgdmFyIGF0dHJpYnMgPSB7fTtcbiAgT2JqZWN0LmtleXMoYXJyYXlzKS5mb3JFYWNoKGZ1bmN0aW9uIChhcnJheU5hbWUpIHtcbiAgICBpZiAoIWlzSW5kaWNlcyhhcnJheU5hbWUpKSB7XG4gICAgICB2YXIgYXJyYXkgPSBhcnJheXNbYXJyYXlOYW1lXTtcbiAgICAgIHZhciBhdHRyaWJOYW1lID0gYXJyYXkuYXR0cmliIHx8IGFycmF5Lm5hbWUgfHwgYXJyYXkuYXR0cmliTmFtZSB8fCBkZWZhdWx0cy5hdHRyaWJQcmVmaXggKyBhcnJheU5hbWU7XG4gICAgICB2YXIgYnVmZmVyID0gdm9pZCAwO1xuICAgICAgdmFyIHR5cGUgPSB2b2lkIDA7XG4gICAgICB2YXIgbm9ybWFsaXphdGlvbiA9IHZvaWQgMDtcbiAgICAgIHZhciBudW1Db21wb25lbnRzID0gdm9pZCAwO1xuICAgICAgdmFyIG51bVZhbHVlcyA9IHZvaWQgMDtcbiAgICAgIGlmICh0eXBlb2YgYXJyYXkgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIGFycmF5LmRhdGEgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgbnVtVmFsdWVzID0gYXJyYXkuZGF0YSB8fCBhcnJheTtcbiAgICAgICAgdmFyIGFycmF5VHlwZSA9IGFycmF5LnR5cGUgfHwgRmxvYXQzMkFycmF5O1xuICAgICAgICB2YXIgbnVtQnl0ZXMgPSBudW1WYWx1ZXMgKiBhcnJheVR5cGUuQllURVNfUEVSX0VMRU1FTlQ7XG4gICAgICAgIHR5cGUgPSB0eXBlZEFycmF5cy5nZXRHTFR5cGVGb3JUeXBlZEFycmF5VHlwZShhcnJheVR5cGUpO1xuICAgICAgICBub3JtYWxpemF0aW9uID0gYXJyYXkubm9ybWFsaXplICE9PSB1bmRlZmluZWQgPyBhcnJheS5ub3JtYWxpemUgOiBnZXROb3JtYWxpemF0aW9uRm9yVHlwZWRBcnJheVR5cGUoYXJyYXlUeXBlKTtcbiAgICAgICAgbnVtQ29tcG9uZW50cyA9IGFycmF5Lm51bUNvbXBvbmVudHMgfHwgYXJyYXkuc2l6ZSB8fCBndWVzc051bUNvbXBvbmVudHNGcm9tTmFtZShhcnJheU5hbWUsIG51bVZhbHVlcyk7XG4gICAgICAgIGJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKTtcbiAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG51bUJ5dGVzLCBhcnJheS5kcmF3VHlwZSB8fCBnbC5TVEFUSUNfRFJBVyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdHlwZWRBcnJheSA9IG1ha2VUeXBlZEFycmF5KGFycmF5LCBhcnJheU5hbWUpO1xuICAgICAgICBidWZmZXIgPSBjcmVhdGVCdWZmZXJGcm9tVHlwZWRBcnJheShnbCwgdHlwZWRBcnJheSwgdW5kZWZpbmVkLCBhcnJheS5kcmF3VHlwZSk7XG4gICAgICAgIHR5cGUgPSB0eXBlZEFycmF5cy5nZXRHTFR5cGVGb3JUeXBlZEFycmF5KHR5cGVkQXJyYXkpO1xuICAgICAgICBub3JtYWxpemF0aW9uID0gYXJyYXkubm9ybWFsaXplICE9PSB1bmRlZmluZWQgPyBhcnJheS5ub3JtYWxpemUgOiBnZXROb3JtYWxpemF0aW9uRm9yVHlwZWRBcnJheSh0eXBlZEFycmF5KTtcbiAgICAgICAgbnVtQ29tcG9uZW50cyA9IGdldE51bUNvbXBvbmVudHMoYXJyYXksIGFycmF5TmFtZSk7XG4gICAgICAgIG51bVZhbHVlcyA9IHR5cGVkQXJyYXkubGVuZ3RoO1xuICAgICAgfVxuICAgICAgYXR0cmlic1thdHRyaWJOYW1lXSA9IHtcbiAgICAgICAgYnVmZmVyOiBidWZmZXIsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IG51bUNvbXBvbmVudHMsXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIG5vcm1hbGl6ZTogbm9ybWFsaXphdGlvbixcbiAgICAgICAgc3RyaWRlOiBhcnJheS5zdHJpZGUgfHwgMCxcbiAgICAgICAgb2Zmc2V0OiBhcnJheS5vZmZzZXQgfHwgMCxcbiAgICAgICAgZGl2aXNvcjogYXJyYXkuZGl2aXNvciA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogYXJyYXkuZGl2aXNvcixcbiAgICAgICAgZHJhd1R5cGU6IGFycmF5LmRyYXdUeXBlXG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG4gIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBudWxsKTtcbiAgcmV0dXJuIGF0dHJpYnM7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgY29udGVudHMgb2YgYSBidWZmZXIgYXR0YWNoZWQgdG8gYW4gYXR0cmliSW5mb1xuICpcbiAqIFRoaXMgaXMgaGVscGVyIGZ1bmN0aW9uIHRvIGR5bmFtaWNhbGx5IHVwZGF0ZSBhIGJ1ZmZlci5cbiAqXG4gKiBMZXQncyBzYXkgeW91IG1ha2UgYSBidWZmZXJJbmZvXG4gKlxuICogICAgIHZhciBhcnJheXMgPSB7XG4gKiAgICAgICAgcG9zaXRpb246IG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDAsIDEwLCAwLCAwLCAwLCAxMCwgMCwgMTAsIDEwLCAwXSksXG4gKiAgICAgICAgdGV4Y29vcmQ6IG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdKSxcbiAqICAgICAgICBub3JtYWw6ICAgbmV3IEZsb2F0MzJBcnJheShbMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMV0pLFxuICogICAgICAgIGluZGljZXM6ICBuZXcgVWludDE2QXJyYXkoWzAsIDEsIDIsIDEsIDIsIDNdKSxcbiAqICAgICB9O1xuICogICAgIHZhciBidWZmZXJJbmZvID0gdHdnbC5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cyhnbCwgYXJyYXlzKTtcbiAqXG4gKiAgQW5kIHlvdSB3YW50IHRvIGR5bmFtaWNhbGx5IHVwYXRlIHRoZSBwb3NpdGlvbnMuIFlvdSBjb3VsZCBkbyB0aGlzXG4gKlxuICogICAgIC8vIGFzc3VtaW5nIGFycmF5cy5wb3NpdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHVwZGF0ZWQgd2l0aCBuZXcgZGF0YS5cbiAqICAgICB0d2dsLnNldEF0dHJpYkluZm9CdWZmZXJGcm9tQXJyYXkoZ2wsIGJ1ZmZlckluZm8uYXR0cmlicy5wb3NpdGlvbiwgYXJyYXlzLnBvc2l0aW9uKTtcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2xcbiAqIEBwYXJhbSB7QXR0cmliSW5mb30gYXR0cmliSW5mbyBUaGUgYXR0cmliSW5mbyB3aG8ncyBidWZmZXIgY29udGVudHMgdG8gc2V0LiBOT1RFOiBJZiB5b3UgaGF2ZSBhbiBhdHRyaWJ1dGUgcHJlZml4XG4gKiAgIHRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgd2lsbCBpbmNsdWRlIHRoZSBwcmVmaXguXG4gKiBAcGFyYW0ge0FycmF5U3BlY30gYXJyYXkgTm90ZTogaXQgaXMgYXJndWFibHkgaW5lZmZpZW50IHRvIHBhc3MgaW4gYW55dGhpbmcgYnV0IGEgdHlwZWQgYXJyYXkgYmVjYXVzZSBhbnl0aGluZ1xuICogICAgZWxzZSB3aWxsIGhhdmUgdG8gYmUgY29udmVydGVkIHRvIGEgdHlwZWQgYXJyYXkgYmVmb3JlIGl0IGNhbiBiZSB1c2VkIGJ5IFdlYkdMLiBEdXJpbmcgaW5pdCB0aW1lIHRoYXRcbiAqICAgIGluZWZmaWNpZW5jeSBpcyB1c3VhbGx5IG5vdCBpbXBvcnRhbnQgYnV0IGlmIHlvdSdyZSB1cGRhdGluZyBkYXRhIGR5bmFtaWNhbGx5IGJlc3QgdG8gYmUgZWZmaWNpZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXRdIGFuIG9wdGlvbmFsIG9mZnNldCBpbnRvIHRoZSBidWZmZXIuIFRoaXMgaXMgb25seSBhbiBvZmZzZXQgaW50byB0aGUgV2ViR0wgYnVmZmVyXG4gKiAgICBub3QgdGhlIGFycmF5LiBUbyBwYXNzIGluIGFuIG9mZnNldCBpbnRvIHRoZSBhcnJheSBpdHNlbGYgdXNlIGEgdHlwZWQgYXJyYXkgYW5kIGNyZWF0ZSBhbiBgQXJyYXlCdWZmZXJWaWV3YFxuICogICAgZm9yIHRoZSBwb3J0aW9uIG9mIHRoZSBhcnJheSB5b3Ugd2FudCB0byB1c2UuXG4gKlxuICogICAgICAgIHZhciBzb21lQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KDEwMDApOyAvLyBhbiBhcnJheSB3aXRoIDEwMDAgZmxvYXRzXG4gKiAgICAgICAgdmFyIHNvbWVTdWJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoc29tZUFycmF5LmJ1ZmZlciwgb2Zmc2V0SW5CeXRlcywgc2l6ZUluVW5pdHMpOyAvLyBhIHZpZXcgaW50byBzb21lQXJyYXlcbiAqXG4gKiAgICBOb3cgeW91IGNhbiBwYXNzIGBzb21lU3ViQXJyYXlgIGludG8gc2V0QXR0cmliSW5mb0J1ZmZlckZyb21BcnJheWBcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9hdHRyaWJ1dGVzXG4gKi9cbmZ1bmN0aW9uIHNldEF0dHJpYkluZm9CdWZmZXJGcm9tQXJyYXkoZ2wsIGF0dHJpYkluZm8sIGFycmF5LCBvZmZzZXQpIHtcbiAgYXJyYXkgPSBtYWtlVHlwZWRBcnJheShhcnJheSk7XG4gIGlmIChvZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBhdHRyaWJJbmZvLmJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyU3ViRGF0YShnbC5BUlJBWV9CVUZGRVIsIG9mZnNldCwgYXJyYXkpO1xuICB9IGVsc2Uge1xuICAgIHNldEJ1ZmZlckZyb21UeXBlZEFycmF5KGdsLCBnbC5BUlJBWV9CVUZGRVIsIGF0dHJpYkluZm8uYnVmZmVyLCBhcnJheSwgYXR0cmliSW5mby5kcmF3VHlwZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Qnl0ZXNQZXJWYWx1ZUZvckdMVHlwZShnbCwgdHlwZSkge1xuICBpZiAodHlwZSA9PT0gZ2wuQllURSkgcmV0dXJuIDE7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGUgPT09IGdsLlVOU0lHTkVEX0JZVEUpIHJldHVybiAxOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlID09PSBnbC5TSE9SVCkgcmV0dXJuIDI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGUgPT09IGdsLlVOU0lHTkVEX1NIT1JUKSByZXR1cm4gMjsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZSA9PT0gZ2wuSU5UKSByZXR1cm4gNDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZSA9PT0gZ2wuVU5TSUdORURfSU5UKSByZXR1cm4gNDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZSA9PT0gZ2wuRkxPQVQpIHJldHVybiA0OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIHJldHVybiAwO1xufVxuXG4vKipcbiAqIHRyaWVzIHRvIGdldCB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGZyb20gYSBzZXQgb2YgYXJyYXlzLlxuICovXG52YXIgcG9zaXRpb25LZXlzID0gWydwb3NpdGlvbicsICdwb3NpdGlvbnMnLCAnYV9wb3NpdGlvbiddO1xuZnVuY3Rpb24gZ2V0TnVtRWxlbWVudHNGcm9tTm9uSW5kZXhlZEFycmF5cyhhcnJheXMpIHtcbiAgdmFyIGtleSA9IHZvaWQgMDtcbiAgZm9yICh2YXIgX2lpID0gMDsgX2lpIDwgcG9zaXRpb25LZXlzLmxlbmd0aDsgKytfaWkpIHtcbiAgICBrZXkgPSBwb3NpdGlvbktleXNbX2lpXTtcbiAgICBpZiAoa2V5IGluIGFycmF5cykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGlmIChpaSA9PT0gcG9zaXRpb25LZXlzLmxlbmd0aCkge1xuICAgIGtleSA9IE9iamVjdC5rZXlzKGFycmF5cylbMF07XG4gIH1cbiAgdmFyIGFycmF5ID0gYXJyYXlzW2tleV07XG4gIHZhciBsZW5ndGggPSBnZXRBcnJheShhcnJheSkubGVuZ3RoO1xuICB2YXIgbnVtQ29tcG9uZW50cyA9IGdldE51bUNvbXBvbmVudHMoYXJyYXksIGtleSk7XG4gIHZhciBudW1FbGVtZW50cyA9IGxlbmd0aCAvIG51bUNvbXBvbmVudHM7XG4gIGlmIChsZW5ndGggJSBudW1Db21wb25lbnRzID4gMCkge1xuICAgIHRocm93IFwibnVtQ29tcG9uZW50cyBcIiArIG51bUNvbXBvbmVudHMgKyBcIiBub3QgY29ycmVjdCBmb3IgbGVuZ3RoIFwiICsgbGVuZ3RoO1xuICB9XG4gIHJldHVybiBudW1FbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZ2V0TnVtRWxlbWVudHNGcm9tQXR0cmlidXRlcyhnbCwgYXR0cmlicykge1xuICB2YXIga2V5ID0gdm9pZCAwO1xuICB2YXIgaWkgPSB2b2lkIDA7XG4gIGZvciAoaWkgPSAwOyBpaSA8IHBvc2l0aW9uS2V5cy5sZW5ndGg7ICsraWkpIHtcbiAgICBrZXkgPSBwb3NpdGlvbktleXNbaWldO1xuICAgIGlmIChrZXkgaW4gYXR0cmlicykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGtleSA9IGRlZmF1bHRzLmF0dHJpYlByZWZpeCArIGtleTtcbiAgICBpZiAoa2V5IGluIGF0dHJpYnMpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBpZiAoaWkgPT09IHBvc2l0aW9uS2V5cy5sZW5ndGgpIHtcbiAgICBrZXkgPSBPYmplY3Qua2V5cyhhdHRyaWJzKVswXTtcbiAgfVxuICB2YXIgYXR0cmliID0gYXR0cmlic1trZXldO1xuICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYXR0cmliLmJ1ZmZlcik7XG4gIHZhciBudW1CeXRlcyA9IGdsLmdldEJ1ZmZlclBhcmFtZXRlcihnbC5BUlJBWV9CVUZGRVIsIGdsLkJVRkZFUl9TSVpFKTtcbiAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIG51bGwpO1xuXG4gIHZhciBieXRlc1BlclZhbHVlID0gZ2V0Qnl0ZXNQZXJWYWx1ZUZvckdMVHlwZShnbCwgYXR0cmliLnR5cGUpO1xuICB2YXIgdG90YWxFbGVtZW50cyA9IG51bUJ5dGVzIC8gYnl0ZXNQZXJWYWx1ZTtcbiAgdmFyIG51bUNvbXBvbmVudHMgPSBhdHRyaWIubnVtQ29tcG9uZW50cyB8fCBhdHRyaWIuc2l6ZTtcbiAgLy8gVE9ETzogY2hlY2sgc3RyaWRlXG4gIHZhciBudW1FbGVtZW50cyA9IHRvdGFsRWxlbWVudHMgLyBudW1Db21wb25lbnRzO1xuICBpZiAobnVtRWxlbWVudHMgJSAxICE9PSAwKSB7XG4gICAgdGhyb3cgXCJudW1Db21wb25lbnRzIFwiICsgbnVtQ29tcG9uZW50cyArIFwiIG5vdCBjb3JyZWN0IGZvciBsZW5ndGggXCIgKyBsZW5ndGg7XG4gIH1cbiAgcmV0dXJuIG51bUVsZW1lbnRzO1xufVxuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEJ1ZmZlckluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBudW1FbGVtZW50cyBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIHBhc3MgdG8gYGdsLmRyYXdBcnJheXNgIG9yIGBnbC5kcmF3RWxlbWVudHNgLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtlbGVtZW50VHlwZV0gVGhlIHR5cGUgb2YgaW5kaWNlcyBgVU5TSUdORURfQllURWAsIGBVTlNJR05FRF9TSE9SVGAgZXRjLi5cbiAqIEBwcm9wZXJ0eSB7V2ViR0xCdWZmZXJ9IFtpbmRpY2VzXSBUaGUgaW5kaWNlcyBgRUxFTUVOVF9BUlJBWV9CVUZGRVJgIGlmIGFueSBpbmRpY2VzIGV4aXN0LlxuICogQHByb3BlcnR5IHtPYmplY3QuPHN0cmluZywgbW9kdWxlOnR3Z2wuQXR0cmliSW5mbz59IFthdHRyaWJzXSBUaGUgYXR0cmlicyBhcHByb3JpYXRlIHRvIGNhbGwgYHNldEF0dHJpYnV0ZXNgXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBCdWZmZXJJbmZvIGZyb20gYW4gb2JqZWN0IG9mIGFycmF5cy5cbiAqXG4gKiBUaGlzIGNhbiBiZSBwYXNzZWQgdG8ge0BsaW5rIG1vZHVsZTp0d2dsLnNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGVzfSBhbmQgdG9cbiAqIHtAbGluayBtb2R1bGU6dHdnbDpkcmF3QnVmZmVySW5mb30uXG4gKlxuICogR2l2ZW4gYW4gb2JqZWN0IGxpa2VcbiAqXG4gKiAgICAgdmFyIGFycmF5cyA9IHtcbiAqICAgICAgIHBvc2l0aW9uOiB7IG51bUNvbXBvbmVudHM6IDMsIGRhdGE6IFswLCAwLCAwLCAxMCwgMCwgMCwgMCwgMTAsIDAsIDEwLCAxMCwgMF0sIH0sXG4gKiAgICAgICB0ZXhjb29yZDogeyBudW1Db21wb25lbnRzOiAyLCBkYXRhOiBbMCwgMCwgMCwgMSwgMSwgMCwgMSwgMV0sICAgICAgICAgICAgICAgICB9LFxuICogICAgICAgbm9ybWFsOiAgIHsgbnVtQ29tcG9uZW50czogMywgZGF0YTogWzAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDFdLCAgICAgfSxcbiAqICAgICAgIGluZGljZXM6ICB7IG51bUNvbXBvbmVudHM6IDMsIGRhdGE6IFswLCAxLCAyLCAxLCAyLCAzXSwgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gKiAgICAgfTtcbiAqXG4gKiAgQ3JlYXRlcyBhbiBCdWZmZXJJbmZvIGxpa2UgdGhpc1xuICpcbiAqICAgICBidWZmZXJJbmZvID0ge1xuICogICAgICAgbnVtRWxlbWVudHM6IDQsICAgICAgICAvLyBvciB3aGF0ZXZlciB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGlzXG4gKiAgICAgICBpbmRpY2VzOiBXZWJHTEJ1ZmZlciwgIC8vIHRoaXMgcHJvcGVydHkgd2lsbCBub3QgZXhpc3QgaWYgdGhlcmUgYXJlIG5vIGluZGljZXNcbiAqICAgICAgIGF0dHJpYnM6IHtcbiAqICAgICAgICAgYV9wb3NpdGlvbjogeyBidWZmZXI6IFdlYkdMQnVmZmVyLCBudW1Db21wb25lbnRzOiAzLCB9LFxuICogICAgICAgICBhX25vcm1hbDogICB7IGJ1ZmZlcjogV2ViR0xCdWZmZXIsIG51bUNvbXBvbmVudHM6IDMsIH0sXG4gKiAgICAgICAgIGFfdGV4Y29vcmQ6IHsgYnVmZmVyOiBXZWJHTEJ1ZmZlciwgbnVtQ29tcG9uZW50czogMiwgfSxcbiAqICAgICAgIH0sXG4gKiAgICAgfTtcbiAqXG4gKiAgVGhlIHByb3BlcnRpZXMgb2YgYXJyYXlzIGNhbiBiZSBKYXZhU2NyaXB0IGFycmF5cyBpbiB3aGljaCBjYXNlIHRoZSBudW1iZXIgb2YgY29tcG9uZW50c1xuICogIHdpbGwgYmUgZ3Vlc3NlZC5cbiAqXG4gKiAgICAgdmFyIGFycmF5cyA9IHtcbiAqICAgICAgICBwb3NpdGlvbjogWzAsIDAsIDAsIDEwLCAwLCAwLCAwLCAxMCwgMCwgMTAsIDEwLCAwXSxcbiAqICAgICAgICB0ZXhjb29yZDogWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdLFxuICogICAgICAgIG5vcm1hbDogICBbMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMV0sXG4gKiAgICAgICAgaW5kaWNlczogIFswLCAxLCAyLCAxLCAyLCAzXSxcbiAqICAgICB9O1xuICpcbiAqICBUaGV5IGNhbiBhbHNvIGJ5IFR5cGVkQXJyYXlzXG4gKlxuICogICAgIHZhciBhcnJheXMgPSB7XG4gKiAgICAgICAgcG9zaXRpb246IG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDAsIDEwLCAwLCAwLCAwLCAxMCwgMCwgMTAsIDEwLCAwXSksXG4gKiAgICAgICAgdGV4Y29vcmQ6IG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdKSxcbiAqICAgICAgICBub3JtYWw6ICAgbmV3IEZsb2F0MzJBcnJheShbMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMV0pLFxuICogICAgICAgIGluZGljZXM6ICBuZXcgVWludDE2QXJyYXkoWzAsIDEsIDIsIDEsIDIsIDNdKSxcbiAqICAgICB9O1xuICpcbiAqICBPciBhdWdtZW50ZWRUeXBlZEFycmF5c1xuICpcbiAqICAgICB2YXIgcG9zaXRpb25zID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCA0KTtcbiAqICAgICB2YXIgdGV4Y29vcmRzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgyLCA0KTtcbiAqICAgICB2YXIgbm9ybWFscyAgID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCA0KTtcbiAqICAgICB2YXIgaW5kaWNlcyAgID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCAyLCBVaW50MTZBcnJheSk7XG4gKlxuICogICAgIHBvc2l0aW9ucy5wdXNoKFswLCAwLCAwLCAxMCwgMCwgMCwgMCwgMTAsIDAsIDEwLCAxMCwgMF0pO1xuICogICAgIHRleGNvb3Jkcy5wdXNoKFswLCAwLCAwLCAxLCAxLCAwLCAxLCAxXSk7XG4gKiAgICAgbm9ybWFscy5wdXNoKFswLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxXSk7XG4gKiAgICAgaW5kaWNlcy5wdXNoKFswLCAxLCAyLCAxLCAyLCAzXSk7XG4gKlxuICogICAgIHZhciBhcnJheXMgPSB7XG4gKiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9ucyxcbiAqICAgICAgICB0ZXhjb29yZDogdGV4Y29vcmRzLFxuICogICAgICAgIG5vcm1hbDogICBub3JtYWxzLFxuICogICAgICAgIGluZGljZXM6ICBpbmRpY2VzLFxuICogICAgIH07XG4gKlxuICogRm9yIHRoZSBsYXN0IGV4YW1wbGUgaXQgaXMgZXF1aXZhbGVudCB0b1xuICpcbiAqICAgICB2YXIgYnVmZmVySW5mbyA9IHtcbiAqICAgICAgIGF0dHJpYnM6IHtcbiAqICAgICAgICAgYV9wb3NpdGlvbjogeyBudW1Db21wb25lbnRzOiAzLCBidWZmZXI6IGdsLmNyZWF0ZUJ1ZmZlcigpLCB9LFxuICogICAgICAgICBhX3RleGNvb2RzOiB7IG51bUNvbXBvbmVudHM6IDIsIGJ1ZmZlcjogZ2wuY3JlYXRlQnVmZmVyKCksIH0sXG4gKiAgICAgICAgIGFfbm9ybWFsczogeyBudW1Db21wb25lbnRzOiAzLCBidWZmZXI6IGdsLmNyZWF0ZUJ1ZmZlcigpLCB9LFxuICogICAgICAgfSxcbiAqICAgICAgIGluZGljZXM6IGdsLmNyZWF0ZUJ1ZmZlcigpLFxuICogICAgICAgbnVtRWxlbWVudHM6IDYsXG4gKiAgICAgfTtcbiAqXG4gKiAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlckluZm8uYXR0cmlicy5hX3Bvc2l0aW9uLmJ1ZmZlcik7XG4gKiAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIGFycmF5cy5wb3NpdGlvbiwgZ2wuU1RBVElDX0RSQVcpO1xuICogICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXJJbmZvLmF0dHJpYnMuYV90ZXhjb29yZC5idWZmZXIpO1xuICogICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBhcnJheXMudGV4Y29vcmQsIGdsLlNUQVRJQ19EUkFXKTtcbiAqICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVySW5mby5hdHRyaWJzLmFfbm9ybWFsLmJ1ZmZlcik7XG4gKiAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIGFycmF5cy5ub3JtYWwsIGdsLlNUQVRJQ19EUkFXKTtcbiAqICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBidWZmZXJJbmZvLmluZGljZXMpO1xuICogICAgIGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGFycmF5cy5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyk7XG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkFycmF5c30gYXJyYXlzIFlvdXIgZGF0YVxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuQnVmZmVySW5mb30gQSBCdWZmZXJJbmZvXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvYXR0cmlidXRlc1xuICovXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cyhnbCwgYXJyYXlzKSB7XG4gIHZhciBidWZmZXJJbmZvID0ge1xuICAgIGF0dHJpYnM6IGNyZWF0ZUF0dHJpYnNGcm9tQXJyYXlzKGdsLCBhcnJheXMpXG4gIH07XG4gIHZhciBpbmRpY2VzID0gYXJyYXlzLmluZGljZXM7XG4gIGlmIChpbmRpY2VzKSB7XG4gICAgdmFyIG5ld0luZGljZXMgPSBtYWtlVHlwZWRBcnJheShpbmRpY2VzLCBcImluZGljZXNcIik7XG4gICAgYnVmZmVySW5mby5pbmRpY2VzID0gY3JlYXRlQnVmZmVyRnJvbVR5cGVkQXJyYXkoZ2wsIG5ld0luZGljZXMsIGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSKTtcbiAgICBidWZmZXJJbmZvLm51bUVsZW1lbnRzID0gbmV3SW5kaWNlcy5sZW5ndGg7XG4gICAgYnVmZmVySW5mby5lbGVtZW50VHlwZSA9IHR5cGVkQXJyYXlzLmdldEdMVHlwZUZvclR5cGVkQXJyYXkobmV3SW5kaWNlcyk7XG4gIH0gZWxzZSB7XG4gICAgYnVmZmVySW5mby5udW1FbGVtZW50cyA9IGdldE51bUVsZW1lbnRzRnJvbUF0dHJpYnV0ZXMoZ2wsIGJ1ZmZlckluZm8uYXR0cmlicyk7XG4gIH1cblxuICByZXR1cm4gYnVmZmVySW5mbztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYnVmZmVyIGZyb20gYW4gYXJyYXksIHR5cGVkIGFycmF5LCBvciBhcnJheSBzcGVjXG4gKlxuICogR2l2ZW4gc29tZXRoaW5nIGxpa2UgdGhpc1xuICpcbiAqICAgICBbMSwgMiwgM10sXG4gKlxuICogb3JcbiAqXG4gKiAgICAgbmV3IFVpbnQxNkFycmF5KFsxLDIsM10pO1xuICpcbiAqIG9yXG4gKlxuICogICAgIHtcbiAqICAgICAgICBkYXRhOiBbMSwgMiwgM10sXG4gKiAgICAgICAgdHlwZTogVWludDhBcnJheSxcbiAqICAgICB9XG4gKlxuICogcmV0dXJucyBhIFdlYkdMQnVmZmVyIHRoYXQgY29uc3RhaW5zIHRoZSBnaXZlbiBkYXRhLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuQXJyYXlTcGVjfSBhcnJheSBhbiBhcnJheSwgdHlwZWQgYXJyYXksIG9yIGFycmF5IHNwZWMuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXJyYXlOYW1lIG5hbWUgb2YgYXJyYXkuIFVzZWQgdG8gZ3Vlc3MgdGhlIHR5cGUgaWYgdHlwZSBjYW4gbm90IGJlIGRlcnZpZWQgb3RoZXIgd2lzZS5cbiAqIEByZXR1cm4ge1dlYkdMQnVmZmVyfSBhIFdlYkdMQnVmZmVyIGNvbnRhaW5pbmcgdGhlIGRhdGEgaW4gYXJyYXkuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvYXR0cmlidXRlc1xuICovXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXJGcm9tQXJyYXkoZ2wsIGFycmF5LCBhcnJheU5hbWUpIHtcbiAgdmFyIHR5cGUgPSBhcnJheU5hbWUgPT09IFwiaW5kaWNlc1wiID8gZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIgOiBnbC5BUlJBWV9CVUZGRVI7XG4gIHZhciB0eXBlZEFycmF5ID0gbWFrZVR5cGVkQXJyYXkoYXJyYXksIGFycmF5TmFtZSk7XG4gIHJldHVybiBjcmVhdGVCdWZmZXJGcm9tVHlwZWRBcnJheShnbCwgdHlwZWRBcnJheSwgdHlwZSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBidWZmZXJzIGZyb20gYXJyYXlzIG9yIHR5cGVkIGFycmF5c1xuICpcbiAqIEdpdmVuIHNvbWV0aGluZyBsaWtlIHRoaXNcbiAqXG4gKiAgICAgdmFyIGFycmF5cyA9IHtcbiAqICAgICAgICBwb3NpdGlvbnM6IFsxLCAyLCAzXSxcbiAqICAgICAgICBub3JtYWxzOiBbMCwgMCwgMV0sXG4gKiAgICAgfVxuICpcbiAqIHJldHVybnMgc29tZXRoaW5nIGxpa2VcbiAqXG4gKiAgICAgYnVmZmVycyA9IHtcbiAqICAgICAgIHBvc2l0aW9uczogV2ViR0xCdWZmZXIsXG4gKiAgICAgICBub3JtYWxzOiBXZWJHTEJ1ZmZlcixcbiAqICAgICB9XG4gKlxuICogSWYgdGhlIGJ1ZmZlciBpcyBuYW1lZCAnaW5kaWNlcycgaXQgd2lsbCBiZSBtYWRlIGFuIEVMRU1FTlRfQVJSQVlfQlVGRkVSLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuQXJyYXlzfSBhcnJheXNcbiAqIEByZXR1cm4ge09iamVjdDxzdHJpbmcsIFdlYkdMQnVmZmVyPn0gcmV0dXJucyBhbiBvYmplY3Qgd2l0aCBvbmUgV2ViR0xCdWZmZXIgcGVyIGFycmF5XG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvYXR0cmlidXRlc1xuICovXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXJzRnJvbUFycmF5cyhnbCwgYXJyYXlzKSB7XG4gIHZhciBidWZmZXJzID0ge307XG4gIE9iamVjdC5rZXlzKGFycmF5cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgYnVmZmVyc1trZXldID0gY3JlYXRlQnVmZmVyRnJvbUFycmF5KGdsLCBhcnJheXNba2V5XSwga2V5KTtcbiAgfSk7XG5cbiAgLy8gVWdoIVxuICBpZiAoYXJyYXlzLmluZGljZXMpIHtcbiAgICBidWZmZXJzLm51bUVsZW1lbnRzID0gYXJyYXlzLmluZGljZXMubGVuZ3RoO1xuICAgIGJ1ZmZlcnMuZWxlbWVudFR5cGUgPSB0eXBlZEFycmF5cy5nZXRHTFR5cGVGb3JUeXBlZEFycmF5KG1ha2VUeXBlZEFycmF5KGFycmF5cy5pbmRpY2VzKSwgJ2luZGljZXMnKTtcbiAgfSBlbHNlIHtcbiAgICBidWZmZXJzLm51bUVsZW1lbnRzID0gZ2V0TnVtRWxlbWVudHNGcm9tTm9uSW5kZXhlZEFycmF5cyhhcnJheXMpO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZmZlcnM7XG59XG5cbmV4cG9ydHMuY3JlYXRlQXR0cmlic0Zyb21BcnJheXMgPSBjcmVhdGVBdHRyaWJzRnJvbUFycmF5cztcbmV4cG9ydHMuY3JlYXRlQnVmZmVyc0Zyb21BcnJheXMgPSBjcmVhdGVCdWZmZXJzRnJvbUFycmF5cztcbmV4cG9ydHMuY3JlYXRlQnVmZmVyRnJvbUFycmF5ID0gY3JlYXRlQnVmZmVyRnJvbUFycmF5O1xuZXhwb3J0cy5jcmVhdGVCdWZmZXJGcm9tVHlwZWRBcnJheSA9IGNyZWF0ZUJ1ZmZlckZyb21UeXBlZEFycmF5O1xuZXhwb3J0cy5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cyA9IGNyZWF0ZUJ1ZmZlckluZm9Gcm9tQXJyYXlzO1xuZXhwb3J0cy5zZXRBdHRyaWJJbmZvQnVmZmVyRnJvbUFycmF5ID0gc2V0QXR0cmliSW5mb0J1ZmZlckZyb21BcnJheTtcbmV4cG9ydHMuc2V0QXR0cmlidXRlUHJlZml4ID0gc2V0QXR0cmlidXRlUHJlZml4O1xuZXhwb3J0cy5zZXRBdHRyaWJ1dGVEZWZhdWx0c18gPSBzZXREZWZhdWx0cztcbmV4cG9ydHMuZ2V0TnVtQ29tcG9uZW50c18gPSBnZXROdW1Db21wb25lbnRzO1xuZXhwb3J0cy5nZXRBcnJheV8gPSBnZXRBcnJheTtcblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldEJ5dGVzUGVyRWxlbWVudEZvckludGVybmFsRm9ybWF0ID0gZXhwb3J0cy5nZXROdW1Db21wb25lbnRzRm9yRm9ybWF0ID0gZXhwb3J0cy5yZXNpemVUZXh0dXJlID0gZXhwb3J0cy5jcmVhdGVUZXh0dXJlcyA9IGV4cG9ydHMuc2V0RGVmYXVsdFRleHR1cmVDb2xvciA9IGV4cG9ydHMuc2V0VGV4dHVyZVBhcmFtZXRlcnMgPSBleHBvcnRzLnNldFRleHR1cmVGaWx0ZXJpbmdGb3JTaXplID0gZXhwb3J0cy5zZXRUZXh0dXJlRnJvbUVsZW1lbnQgPSBleHBvcnRzLmxvYWRUZXh0dXJlRnJvbVVybCA9IGV4cG9ydHMuc2V0VGV4dHVyZUZyb21BcnJheSA9IGV4cG9ydHMuc2V0RW1wdHlUZXh0dXJlID0gZXhwb3J0cy5jcmVhdGVUZXh0dXJlID0gZXhwb3J0cy5zZXRTYW1wbGVyUGFyYW1ldGVycyA9IGV4cG9ydHMuY3JlYXRlU2FtcGxlcnMgPSBleHBvcnRzLmNyZWF0ZVNhbXBsZXIgPSBleHBvcnRzLnNldFRleHR1cmVEZWZhdWx0c18gPSB1bmRlZmluZWQ7XG5cbnZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgdXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHMpO1xuXG52YXIgX3R5cGVkYXJyYXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIHR5cGVkQXJyYXlzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVkYXJyYXlzKTtcblxudmFyIF9oZWxwZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgaGVscGVyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hlbHBlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8qKlxuICogTG93IGxldmVsIHRleHR1cmUgcmVsYXRlZCBmdW5jdGlvbnNcbiAqXG4gKiBZb3Ugc2hvdWxkIGdlbmVyYWxseSBub3QgbmVlZCB0byB1c2UgdGhlc2UgZnVuY3Rpb25zLiBUaGV5IGFyZSBwcm92aWRlZFxuICogZm9yIHRob3NlIGNhc2VzIHdoZXJlIHlvdSdyZSBkb2luZyBzb21ldGhpbmcgb3V0IG9mIHRoZSBvcmRpbmFyeVxuICogYW5kIHlvdSBuZWVkIGxvd2VyIGxldmVsIGFjY2Vzcy5cbiAqXG4gKiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbHkgdGhleSBhcmUgYXZhaWxhYmxlIGF0IGJvdGggYHR3Z2wudGV4dHVyZXNgIGFuZCBgdHdnbGBcbiAqIGl0c2VsZlxuICpcbiAqIFNlZSB7QGxpbmsgbW9kdWxlOnR3Z2x9IGZvciBjb3JlIGZ1bmN0aW9uc1xuICpcbiAqIEBtb2R1bGUgdHdnbC90ZXh0dXJlc1xuICovXG5cbi8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBzZWUgYSBnbG9iYWwgZ2xcbnZhciBnbCA9IHVuZGVmaW5lZDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuLypcbiAqIENvcHlyaWdodCAyMDE1LCBHcmVnZyBUYXZhcmVzLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAqIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbiAqIG1ldDpcbiAqXG4gKiAgICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuICogbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuICogaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogZGlzdHJpYnV0aW9uLlxuICogICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHcmVnZyBUYXZhcmVzLiBub3IgdGhlIG5hbWVzIG9mIGhpc1xuICogY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbiAqIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuICogXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuICogTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4gKiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuICogT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4gKiBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4gKiBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuICogVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuICogKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4gKiBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgdGV4dHVyZUNvbG9yOiBuZXcgVWludDhBcnJheShbMTI4LCAxOTIsIDI1NSwgMjU1XSksXG4gIHRleHR1cmVPcHRpb25zOiB7fSxcbiAgY3Jvc3NPcmlnaW46IHVuZGVmaW5lZFxufTtcbnZhciBpc0FycmF5QnVmZmVyID0gdHlwZWRBcnJheXMuaXNBcnJheUJ1ZmZlcjtcblxuLy8gU2hvdWxkIHdlIG1ha2UgdGhpcyBvbiBkZW1hbmQ/XG52YXIgY3R4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKS5nZXRDb250ZXh0KFwiMmRcIik7XG5cbi8qIFBpeGVsRm9ybWF0ICovXG52YXIgQUxQSEEgPSAweDE5MDY7XG52YXIgUkdCID0gMHgxOTA3O1xudmFyIFJHQkEgPSAweDE5MDg7XG52YXIgTFVNSU5BTkNFID0gMHgxOTA5O1xudmFyIExVTUlOQU5DRV9BTFBIQSA9IDB4MTkwQTtcbnZhciBERVBUSF9DT01QT05FTlQgPSAweDE5MDI7XG52YXIgREVQVEhfU1RFTkNJTCA9IDB4ODRGOTtcblxuLyogVGV4dHVyZVdyYXBNb2RlICovXG52YXIgUkVQRUFUID0gMHgyOTAxOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG52YXIgTUlSUk9SRURfUkVQRUFUID0gMHg4MzcwOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbi8qIFRleHR1cmVNYWdGaWx0ZXIgKi9cbnZhciBORUFSRVNUID0gMHgyNjAwOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbi8qIFRleHR1cmVNaW5GaWx0ZXIgKi9cbnZhciBORUFSRVNUX01JUE1BUF9ORUFSRVNUID0gMHgyNzAwOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG52YXIgTElORUFSX01JUE1BUF9ORUFSRVNUID0gMHgyNzAxOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG52YXIgTkVBUkVTVF9NSVBNQVBfTElORUFSID0gMHgyNzAyOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG52YXIgTElORUFSX01JUE1BUF9MSU5FQVIgPSAweDI3MDM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxudmFyIFI4ID0gMHg4MjI5O1xudmFyIFI4X1NOT1JNID0gMHg4Rjk0O1xudmFyIFIxNkYgPSAweDgyMkQ7XG52YXIgUjMyRiA9IDB4ODIyRTtcbnZhciBSOFVJID0gMHg4MjMyO1xudmFyIFI4SSA9IDB4ODIzMTtcbnZhciBSRzE2VUkgPSAweDgyM0E7XG52YXIgUkcxNkkgPSAweDgyMzk7XG52YXIgUkczMlVJID0gMHg4MjNDO1xudmFyIFJHMzJJID0gMHg4MjNCO1xudmFyIFJHOCA9IDB4ODIyQjtcbnZhciBSRzhfU05PUk0gPSAweDhGOTU7XG52YXIgUkcxNkYgPSAweDgyMkY7XG52YXIgUkczMkYgPSAweDgyMzA7XG52YXIgUkc4VUkgPSAweDgyMzg7XG52YXIgUkc4SSA9IDB4ODIzNztcbnZhciBSMTZVSSA9IDB4ODIzNDtcbnZhciBSMTZJID0gMHg4MjMzO1xudmFyIFIzMlVJID0gMHg4MjM2O1xudmFyIFIzMkkgPSAweDgyMzU7XG52YXIgUkdCOCA9IDB4ODA1MTtcbnZhciBTUkdCOCA9IDB4OEM0MTtcbnZhciBSR0I1NjUgPSAweDhENjI7XG52YXIgUkdCOF9TTk9STSA9IDB4OEY5NjtcbnZhciBSMTFGX0cxMUZfQjEwRiA9IDB4OEMzQTtcbnZhciBSR0I5X0U1ID0gMHg4QzNEO1xudmFyIFJHQjE2RiA9IDB4ODgxQjtcbnZhciBSR0IzMkYgPSAweDg4MTU7XG52YXIgUkdCOFVJID0gMHg4RDdEO1xudmFyIFJHQjhJID0gMHg4RDhGO1xudmFyIFJHQjE2VUkgPSAweDhENzc7XG52YXIgUkdCMTZJID0gMHg4RDg5O1xudmFyIFJHQjMyVUkgPSAweDhENzE7XG52YXIgUkdCMzJJID0gMHg4RDgzO1xudmFyIFJHQkE4ID0gMHg4MDU4O1xudmFyIFNSR0I4X0FMUEhBOCA9IDB4OEM0MztcbnZhciBSR0JBOF9TTk9STSA9IDB4OEY5NztcbnZhciBSR0I1X0ExID0gMHg4MDU3O1xudmFyIFJHQkE0ID0gMHg4MDU2O1xudmFyIFJHQjEwX0EyID0gMHg4MDU5O1xudmFyIFJHQkExNkYgPSAweDg4MUE7XG52YXIgUkdCQTMyRiA9IDB4ODgxNDtcbnZhciBSR0JBOFVJID0gMHg4RDdDO1xudmFyIFJHQkE4SSA9IDB4OEQ4RTtcbnZhciBSR0IxMF9BMlVJID0gMHg5MDZGO1xudmFyIFJHQkExNlVJID0gMHg4RDc2O1xudmFyIFJHQkExNkkgPSAweDhEODg7XG52YXIgUkdCQTMySSA9IDB4OEQ4MjtcbnZhciBSR0JBMzJVSSA9IDB4OEQ3MDtcblxudmFyIERFUFRIX0NPTVBPTkVOVDE2ID0gMHg4MUE1O1xudmFyIERFUFRIX0NPTVBPTkVOVDI0ID0gMHg4MUE2O1xudmFyIERFUFRIX0NPTVBPTkVOVDMyRiA9IDB4OENBQztcbnZhciBERVBUSDMyRl9TVEVOQ0lMOCA9IDB4OENBRDtcbnZhciBERVBUSDI0X1NURU5DSUw4ID0gMHg4OEYwO1xuXG4vKiBEYXRhVHlwZSAqL1xudmFyIEJZVEUgPSAweDE0MDA7XG52YXIgVU5TSUdORURfQllURSA9IDB4MTQwMTtcbnZhciBTSE9SVCA9IDB4MTQwMjtcbnZhciBVTlNJR05FRF9TSE9SVCA9IDB4MTQwMztcbnZhciBJTlQgPSAweDE0MDQ7XG52YXIgVU5TSUdORURfSU5UID0gMHgxNDA1O1xudmFyIEZMT0FUID0gMHgxNDA2O1xudmFyIFVOU0lHTkVEX1NIT1JUXzRfNF80XzQgPSAweDgwMzM7XG52YXIgVU5TSUdORURfU0hPUlRfNV81XzVfMSA9IDB4ODAzNDtcbnZhciBVTlNJR05FRF9TSE9SVF81XzZfNSA9IDB4ODM2MztcbnZhciBIQUxGX0ZMT0FUID0gMHgxNDBCO1xudmFyIEhBTEZfRkxPQVRfT0VTID0gMHg4RDYxOyAvLyBUaGFua3MgS2hyb25vcyBmb3IgbWFraW5nIHRoaXMgZGlmZmVyZW50ID46KFxudmFyIFVOU0lHTkVEX0lOVF8yXzEwXzEwXzEwX1JFViA9IDB4ODM2ODtcbnZhciBVTlNJR05FRF9JTlRfMTBGXzExRl8xMUZfUkVWID0gMHg4QzNCO1xudmFyIFVOU0lHTkVEX0lOVF81XzlfOV85X1JFViA9IDB4OEMzRTtcbnZhciBGTE9BVF8zMl9VTlNJR05FRF9JTlRfMjRfOF9SRVYgPSAweDhEQUQ7XG52YXIgVU5TSUdORURfSU5UXzI0XzggPSAweDg0RkE7XG5cbnZhciBSRyA9IDB4ODIyNztcbnZhciBSR19JTlRFR0VSID0gMHg4MjI4O1xudmFyIFJFRCA9IDB4MTkwMztcbnZhciBSRURfSU5URUdFUiA9IDB4OEQ5NDtcbnZhciBSR0JfSU5URUdFUiA9IDB4OEQ5ODtcbnZhciBSR0JBX0lOVEVHRVIgPSAweDhEOTk7XG5cbnZhciBmb3JtYXRJbmZvID0ge307XG57XG4gIC8vIE5PVEU6IHRoaXMgaXMgbmFtZWQgYG51bUNvbG9yQ29tcG9uZW50c2AgdnMgYG51bUNvbXBvbmVudHNgIHNvIHdlIGNhbiBsZXQgVWdsaWZ5IG1hbmdsZVxuICAvLyB0aGUgbmFtZS5cbiAgdmFyIGYgPSBmb3JtYXRJbmZvO1xuICBmW0FMUEhBXSA9IHsgbnVtQ29sb3JDb21wb25lbnRzOiAxIH07XG4gIGZbTFVNSU5BTkNFXSA9IHsgbnVtQ29sb3JDb21wb25lbnRzOiAxIH07XG4gIGZbTFVNSU5BTkNFX0FMUEhBXSA9IHsgbnVtQ29sb3JDb21wb25lbnRzOiAyIH07XG4gIGZbUkdCXSA9IHsgbnVtQ29sb3JDb21wb25lbnRzOiAzIH07XG4gIGZbUkdCQV0gPSB7IG51bUNvbG9yQ29tcG9uZW50czogNCB9O1xuICBmW1JFRF0gPSB7IG51bUNvbG9yQ29tcG9uZW50czogMSB9O1xuICBmW1JFRF9JTlRFR0VSXSA9IHsgbnVtQ29sb3JDb21wb25lbnRzOiAxIH07XG4gIGZbUkddID0geyBudW1Db2xvckNvbXBvbmVudHM6IDIgfTtcbiAgZltSR19JTlRFR0VSXSA9IHsgbnVtQ29sb3JDb21wb25lbnRzOiAyIH07XG4gIGZbUkdCXSA9IHsgbnVtQ29sb3JDb21wb25lbnRzOiAzIH07XG4gIGZbUkdCX0lOVEVHRVJdID0geyBudW1Db2xvckNvbXBvbmVudHM6IDMgfTtcbiAgZltSR0JBXSA9IHsgbnVtQ29sb3JDb21wb25lbnRzOiA0IH07XG4gIGZbUkdCQV9JTlRFR0VSXSA9IHsgbnVtQ29sb3JDb21wb25lbnRzOiA0IH07XG4gIGZbREVQVEhfQ09NUE9ORU5UXSA9IHsgbnVtQ29sb3JDb21wb25lbnRzOiAxIH07XG4gIGZbREVQVEhfU1RFTkNJTF0gPSB7IG51bUNvbG9yQ29tcG9uZW50czogMiB9O1xufVxuXG52YXIgdGV4dHVyZUludGVybmFsRm9ybWF0SW5mbyA9IHt9O1xue1xuICAvLyBOT1RFOiB0aGVzZSBwcm9wZXJ0aWVzIG5lZWQgdW5pcXVlIG5hbWVzIHNvIHdlIGNhbiBsZXQgVWdsaWZ5IG1hbmdsZSB0aGUgbmFtZS5cbiAgdmFyIHQgPSB0ZXh0dXJlSW50ZXJuYWxGb3JtYXRJbmZvO1xuICAvLyB1bnNpemVkIGZvcm1hdHNcbiAgdFtBTFBIQV0gPSB7IHRleHR1cmVGb3JtYXQ6IEFMUEhBLCBjb2xvclJlbmRlcmFibGU6IHRydWUsIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLCBieXRlc1BlckVsZW1lbnQ6IFsxLCAyLCAyLCA0XSwgdHlwZTogW1VOU0lHTkVEX0JZVEUsIEhBTEZfRkxPQVQsIEhBTEZfRkxPQVRfT0VTLCBGTE9BVF0gfTtcbiAgdFtMVU1JTkFOQ0VdID0geyB0ZXh0dXJlRm9ybWF0OiBMVU1JTkFOQ0UsIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSwgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsIGJ5dGVzUGVyRWxlbWVudDogWzEsIDIsIDIsIDRdLCB0eXBlOiBbVU5TSUdORURfQllURSwgSEFMRl9GTE9BVCwgSEFMRl9GTE9BVF9PRVMsIEZMT0FUXSB9O1xuICB0W0xVTUlOQU5DRV9BTFBIQV0gPSB7IHRleHR1cmVGb3JtYXQ6IExVTUlOQU5DRV9BTFBIQSwgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSwgYnl0ZXNQZXJFbGVtZW50OiBbMiwgNCwgNCwgOF0sIHR5cGU6IFtVTlNJR05FRF9CWVRFLCBIQUxGX0ZMT0FULCBIQUxGX0ZMT0FUX09FUywgRkxPQVRdIH07XG4gIHRbUkdCXSA9IHsgdGV4dHVyZUZvcm1hdDogUkdCLCBjb2xvclJlbmRlcmFibGU6IHRydWUsIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLCBieXRlc1BlckVsZW1lbnQ6IFszLCA2LCA2LCAxMiwgMl0sIHR5cGU6IFtVTlNJR05FRF9CWVRFLCBIQUxGX0ZMT0FULCBIQUxGX0ZMT0FUX09FUywgRkxPQVQsIFVOU0lHTkVEX1NIT1JUXzVfNl81XSB9O1xuICB0W1JHQkFdID0geyB0ZXh0dXJlRm9ybWF0OiBSR0JBLCBjb2xvclJlbmRlcmFibGU6IHRydWUsIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLCBieXRlc1BlckVsZW1lbnQ6IFs0LCA4LCA4LCAxNiwgMiwgMl0sIHR5cGU6IFtVTlNJR05FRF9CWVRFLCBIQUxGX0ZMT0FULCBIQUxGX0ZMT0FUX09FUywgRkxPQVQsIFVOU0lHTkVEX1NIT1JUXzRfNF80XzQsIFVOU0lHTkVEX1NIT1JUXzVfNV81XzFdIH07XG5cbiAgLy8gc2l6ZWQgZm9ybWF0c1xuICB0W1I4XSA9IHsgdGV4dHVyZUZvcm1hdDogUkVELCBjb2xvclJlbmRlcmFibGU6IHRydWUsIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLCBieXRlc1BlckVsZW1lbnQ6IDEsIHR5cGU6IFVOU0lHTkVEX0JZVEUgfTtcbiAgdFtSOF9TTk9STV0gPSB7IHRleHR1cmVGb3JtYXQ6IFJFRCwgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSwgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsIGJ5dGVzUGVyRWxlbWVudDogMSwgdHlwZTogQllURSB9O1xuICB0W1IxNkZdID0geyB0ZXh0dXJlRm9ybWF0OiBSRUQsIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLCBieXRlc1BlckVsZW1lbnQ6IFs0LCAyXSwgdHlwZTogW0ZMT0FULCBIQUxGX0ZMT0FUXSB9O1xuICB0W1IzMkZdID0geyB0ZXh0dXJlRm9ybWF0OiBSRUQsIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiA0LCB0eXBlOiBGTE9BVCB9O1xuICB0W1I4VUldID0geyB0ZXh0dXJlRm9ybWF0OiBSRURfSU5URUdFUiwgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogMSwgdHlwZTogVU5TSUdORURfQllURSB9O1xuICB0W1I4SV0gPSB7IHRleHR1cmVGb3JtYXQ6IFJFRF9JTlRFR0VSLCBjb2xvclJlbmRlcmFibGU6IHRydWUsIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiAxLCB0eXBlOiBCWVRFIH07XG4gIHRbUjE2VUldID0geyB0ZXh0dXJlRm9ybWF0OiBSRURfSU5URUdFUiwgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogMiwgdHlwZTogVU5TSUdORURfU0hPUlQgfTtcbiAgdFtSMTZJXSA9IHsgdGV4dHVyZUZvcm1hdDogUkVEX0lOVEVHRVIsIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSwgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLCBieXRlc1BlckVsZW1lbnQ6IDIsIHR5cGU6IFNIT1JUIH07XG4gIHRbUjMyVUldID0geyB0ZXh0dXJlRm9ybWF0OiBSRURfSU5URUdFUiwgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogNCwgdHlwZTogVU5TSUdORURfSU5UIH07XG4gIHRbUjMySV0gPSB7IHRleHR1cmVGb3JtYXQ6IFJFRF9JTlRFR0VSLCBjb2xvclJlbmRlcmFibGU6IHRydWUsIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiA0LCB0eXBlOiBJTlQgfTtcbiAgdFtSRzhdID0geyB0ZXh0dXJlRm9ybWF0OiBSRywgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSwgYnl0ZXNQZXJFbGVtZW50OiAyLCB0eXBlOiBVTlNJR05FRF9CWVRFIH07XG4gIHRbUkc4X1NOT1JNXSA9IHsgdGV4dHVyZUZvcm1hdDogUkcsIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLCBieXRlc1BlckVsZW1lbnQ6IDIsIHR5cGU6IEJZVEUgfTtcbiAgdFtSRzE2Rl0gPSB7IHRleHR1cmVGb3JtYXQ6IFJHLCBjb2xvclJlbmRlcmFibGU6IGZhbHNlLCB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSwgYnl0ZXNQZXJFbGVtZW50OiBbOCwgNF0sIHR5cGU6IFtGTE9BVCwgSEFMRl9GTE9BVF0gfTtcbiAgdFtSRzMyRl0gPSB7IHRleHR1cmVGb3JtYXQ6IFJHLCBjb2xvclJlbmRlcmFibGU6IGZhbHNlLCB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogOCwgdHlwZTogRkxPQVQgfTtcbiAgdFtSRzhVSV0gPSB7IHRleHR1cmVGb3JtYXQ6IFJHX0lOVEVHRVIsIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSwgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLCBieXRlc1BlckVsZW1lbnQ6IDIsIHR5cGU6IFVOU0lHTkVEX0JZVEUgfTtcbiAgdFtSRzhJXSA9IHsgdGV4dHVyZUZvcm1hdDogUkdfSU5URUdFUiwgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogMiwgdHlwZTogQllURSB9O1xuICB0W1JHMTZVSV0gPSB7IHRleHR1cmVGb3JtYXQ6IFJHX0lOVEVHRVIsIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSwgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLCBieXRlc1BlckVsZW1lbnQ6IDQsIHR5cGU6IFVOU0lHTkVEX1NIT1JUIH07XG4gIHRbUkcxNkldID0geyB0ZXh0dXJlRm9ybWF0OiBSR19JTlRFR0VSLCBjb2xvclJlbmRlcmFibGU6IHRydWUsIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiA0LCB0eXBlOiBTSE9SVCB9O1xuICB0W1JHMzJVSV0gPSB7IHRleHR1cmVGb3JtYXQ6IFJHX0lOVEVHRVIsIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSwgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLCBieXRlc1BlckVsZW1lbnQ6IDgsIHR5cGU6IFVOU0lHTkVEX0lOVCB9O1xuICB0W1JHMzJJXSA9IHsgdGV4dHVyZUZvcm1hdDogUkdfSU5URUdFUiwgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogOCwgdHlwZTogSU5UIH07XG4gIHRbUkdCOF0gPSB7IHRleHR1cmVGb3JtYXQ6IFJHQiwgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSwgYnl0ZXNQZXJFbGVtZW50OiAzLCB0eXBlOiBVTlNJR05FRF9CWVRFIH07XG4gIHRbU1JHQjhdID0geyB0ZXh0dXJlRm9ybWF0OiBSR0IsIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLCBieXRlc1BlckVsZW1lbnQ6IDMsIHR5cGU6IFVOU0lHTkVEX0JZVEUgfTtcbiAgdFtSR0I1NjVdID0geyB0ZXh0dXJlRm9ybWF0OiBSR0IsIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSwgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsIGJ5dGVzUGVyRWxlbWVudDogWzMsIDJdLCB0eXBlOiBbVU5TSUdORURfQllURSwgVU5TSUdORURfU0hPUlRfNV82XzVdIH07XG4gIHRbUkdCOF9TTk9STV0gPSB7IHRleHR1cmVGb3JtYXQ6IFJHQiwgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSwgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsIGJ5dGVzUGVyRWxlbWVudDogMywgdHlwZTogQllURSB9O1xuICB0W1IxMUZfRzExRl9CMTBGXSA9IHsgdGV4dHVyZUZvcm1hdDogUkdCLCBjb2xvclJlbmRlcmFibGU6IGZhbHNlLCB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSwgYnl0ZXNQZXJFbGVtZW50OiBbMTIsIDYsIDRdLCB0eXBlOiBbRkxPQVQsIEhBTEZfRkxPQVQsIFVOU0lHTkVEX0lOVF8xMEZfMTFGXzExRl9SRVZdIH07XG4gIHRbUkdCOV9FNV0gPSB7IHRleHR1cmVGb3JtYXQ6IFJHQiwgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSwgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsIGJ5dGVzUGVyRWxlbWVudDogWzEyLCA2LCA0XSwgdHlwZTogW0ZMT0FULCBIQUxGX0ZMT0FULCBVTlNJR05FRF9JTlRfNV85XzlfOV9SRVZdIH07XG4gIHRbUkdCMTZGXSA9IHsgdGV4dHVyZUZvcm1hdDogUkdCLCBjb2xvclJlbmRlcmFibGU6IGZhbHNlLCB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSwgYnl0ZXNQZXJFbGVtZW50OiBbMTIsIDZdLCB0eXBlOiBbRkxPQVQsIEhBTEZfRkxPQVRdIH07XG4gIHRbUkdCMzJGXSA9IHsgdGV4dHVyZUZvcm1hdDogUkdCLCBjb2xvclJlbmRlcmFibGU6IGZhbHNlLCB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogMTIsIHR5cGU6IEZMT0FUIH07XG4gIHRbUkdCOFVJXSA9IHsgdGV4dHVyZUZvcm1hdDogUkdCX0lOVEVHRVIsIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiAzLCB0eXBlOiBVTlNJR05FRF9CWVRFIH07XG4gIHRbUkdCOEldID0geyB0ZXh0dXJlRm9ybWF0OiBSR0JfSU5URUdFUiwgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSwgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLCBieXRlc1BlckVsZW1lbnQ6IDMsIHR5cGU6IEJZVEUgfTtcbiAgdFtSR0IxNlVJXSA9IHsgdGV4dHVyZUZvcm1hdDogUkdCX0lOVEVHRVIsIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiA2LCB0eXBlOiBVTlNJR05FRF9TSE9SVCB9O1xuICB0W1JHQjE2SV0gPSB7IHRleHR1cmVGb3JtYXQ6IFJHQl9JTlRFR0VSLCBjb2xvclJlbmRlcmFibGU6IGZhbHNlLCB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogNiwgdHlwZTogU0hPUlQgfTtcbiAgdFtSR0IzMlVJXSA9IHsgdGV4dHVyZUZvcm1hdDogUkdCX0lOVEVHRVIsIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiAxMiwgdHlwZTogVU5TSUdORURfSU5UIH07XG4gIHRbUkdCMzJJXSA9IHsgdGV4dHVyZUZvcm1hdDogUkdCX0lOVEVHRVIsIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiAxMiwgdHlwZTogSU5UIH07XG4gIHRbUkdCQThdID0geyB0ZXh0dXJlRm9ybWF0OiBSR0JBLCBjb2xvclJlbmRlcmFibGU6IHRydWUsIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLCBieXRlc1BlckVsZW1lbnQ6IDQsIHR5cGU6IFVOU0lHTkVEX0JZVEUgfTtcbiAgdFtTUkdCOF9BTFBIQThdID0geyB0ZXh0dXJlRm9ybWF0OiBSR0JBLCBjb2xvclJlbmRlcmFibGU6IHRydWUsIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLCBieXRlc1BlckVsZW1lbnQ6IDQsIHR5cGU6IFVOU0lHTkVEX0JZVEUgfTtcbiAgdFtSR0JBOF9TTk9STV0gPSB7IHRleHR1cmVGb3JtYXQ6IFJHQkEsIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLCBieXRlc1BlckVsZW1lbnQ6IDQsIHR5cGU6IEJZVEUgfTtcbiAgdFtSR0I1X0ExXSA9IHsgdGV4dHVyZUZvcm1hdDogUkdCQSwgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSwgYnl0ZXNQZXJFbGVtZW50OiBbNCwgMiwgNF0sIHR5cGU6IFtVTlNJR05FRF9CWVRFLCBVTlNJR05FRF9TSE9SVF81XzVfNV8xLCBVTlNJR05FRF9JTlRfMl8xMF8xMF8xMF9SRVZdIH07XG4gIHRbUkdCQTRdID0geyB0ZXh0dXJlRm9ybWF0OiBSR0JBLCBjb2xvclJlbmRlcmFibGU6IHRydWUsIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLCBieXRlc1BlckVsZW1lbnQ6IFs0LCAyXSwgdHlwZTogW1VOU0lHTkVEX0JZVEUsIFVOU0lHTkVEX1NIT1JUXzRfNF80XzRdIH07XG4gIHRbUkdCMTBfQTJdID0geyB0ZXh0dXJlRm9ybWF0OiBSR0JBLCBjb2xvclJlbmRlcmFibGU6IHRydWUsIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLCBieXRlc1BlckVsZW1lbnQ6IDQsIHR5cGU6IFVOU0lHTkVEX0lOVF8yXzEwXzEwXzEwX1JFViB9O1xuICB0W1JHQkExNkZdID0geyB0ZXh0dXJlRm9ybWF0OiBSR0JBLCBjb2xvclJlbmRlcmFibGU6IGZhbHNlLCB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSwgYnl0ZXNQZXJFbGVtZW50OiBbMTYsIDhdLCB0eXBlOiBbRkxPQVQsIEhBTEZfRkxPQVRdIH07XG4gIHRbUkdCQTMyRl0gPSB7IHRleHR1cmVGb3JtYXQ6IFJHQkEsIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiAxNiwgdHlwZTogRkxPQVQgfTtcbiAgdFtSR0JBOFVJXSA9IHsgdGV4dHVyZUZvcm1hdDogUkdCQV9JTlRFR0VSLCBjb2xvclJlbmRlcmFibGU6IHRydWUsIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiA0LCB0eXBlOiBVTlNJR05FRF9CWVRFIH07XG4gIHRbUkdCQThJXSA9IHsgdGV4dHVyZUZvcm1hdDogUkdCQV9JTlRFR0VSLCBjb2xvclJlbmRlcmFibGU6IHRydWUsIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiA0LCB0eXBlOiBCWVRFIH07XG4gIHRbUkdCMTBfQTJVSV0gPSB7IHRleHR1cmVGb3JtYXQ6IFJHQkFfSU5URUdFUiwgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogNCwgdHlwZTogVU5TSUdORURfSU5UXzJfMTBfMTBfMTBfUkVWIH07XG4gIHRbUkdCQTE2VUldID0geyB0ZXh0dXJlRm9ybWF0OiBSR0JBX0lOVEVHRVIsIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSwgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLCBieXRlc1BlckVsZW1lbnQ6IDgsIHR5cGU6IFVOU0lHTkVEX1NIT1JUIH07XG4gIHRbUkdCQTE2SV0gPSB7IHRleHR1cmVGb3JtYXQ6IFJHQkFfSU5URUdFUiwgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogOCwgdHlwZTogU0hPUlQgfTtcbiAgdFtSR0JBMzJJXSA9IHsgdGV4dHVyZUZvcm1hdDogUkdCQV9JTlRFR0VSLCBjb2xvclJlbmRlcmFibGU6IHRydWUsIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiAxNiwgdHlwZTogSU5UIH07XG4gIHRbUkdCQTMyVUldID0geyB0ZXh0dXJlRm9ybWF0OiBSR0JBX0lOVEVHRVIsIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSwgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLCBieXRlc1BlckVsZW1lbnQ6IDE2LCB0eXBlOiBVTlNJR05FRF9JTlQgfTtcbiAgLy8gU2l6ZWQgSW50ZXJuYWxcbiAgdFtERVBUSF9DT01QT05FTlQxNl0gPSB7IHRleHR1cmVGb3JtYXQ6IERFUFRIX0NPTVBPTkVOVCwgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogWzIsIDRdLCB0eXBlOiBbVU5TSUdORURfU0hPUlQsIFVOU0lHTkVEX0lOVF0gfTtcbiAgdFtERVBUSF9DT01QT05FTlQyNF0gPSB7IHRleHR1cmVGb3JtYXQ6IERFUFRIX0NPTVBPTkVOVCwgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogNCwgdHlwZTogVU5TSUdORURfSU5UIH07XG4gIHRbREVQVEhfQ09NUE9ORU5UMzJGXSA9IHsgdGV4dHVyZUZvcm1hdDogREVQVEhfQ09NUE9ORU5ULCBjb2xvclJlbmRlcmFibGU6IHRydWUsIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiA0LCB0eXBlOiBGTE9BVCB9O1xuICB0W0RFUFRIMjRfU1RFTkNJTDhdID0geyB0ZXh0dXJlRm9ybWF0OiBERVBUSF9TVEVOQ0lMLCBjb2xvclJlbmRlcmFibGU6IHRydWUsIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSwgYnl0ZXNQZXJFbGVtZW50OiA0LCB0eXBlOiBVTlNJR05FRF9JTlRfMjRfOCB9O1xuICB0W0RFUFRIMzJGX1NURU5DSUw4XSA9IHsgdGV4dHVyZUZvcm1hdDogREVQVEhfU1RFTkNJTCwgY29sb3JSZW5kZXJhYmxlOiB0cnVlLCB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsIGJ5dGVzUGVyRWxlbWVudDogNCwgdHlwZTogRkxPQVRfMzJfVU5TSUdORURfSU5UXzI0XzhfUkVWIH07XG5cbiAgT2JqZWN0LmtleXModCkuZm9yRWFjaChmdW5jdGlvbiAoaW50ZXJuYWxGb3JtYXQpIHtcbiAgICB2YXIgaW5mbyA9IHRbaW50ZXJuYWxGb3JtYXRdO1xuICAgIGluZm8uYnl0ZXNQZXJFbGVtZW50TWFwID0ge307XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW5mby5ieXRlc1BlckVsZW1lbnQpKSB7XG4gICAgICBpbmZvLmJ5dGVzUGVyRWxlbWVudC5mb3JFYWNoKGZ1bmN0aW9uIChieXRlc1BlckVsZW1lbnQsIG5keCkge1xuICAgICAgICB2YXIgdHlwZSA9IGluZm8udHlwZVtuZHhdO1xuICAgICAgICBpbmZvLmJ5dGVzUGVyRWxlbWVudE1hcFt0eXBlXSA9IGJ5dGVzUGVyRWxlbWVudDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdHlwZSA9IGluZm8udHlwZTtcbiAgICAgIGluZm8uYnl0ZXNQZXJFbGVtZW50TWFwW3R5cGVdID0gaW5mby5ieXRlc1BlckVsZW1lbnQ7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBudW1iZXIgb2YgYnl0ZXMgcGVyIGVsZW1lbnQgZm9yIGEgZ2l2ZW4gaW50ZXJuYWxGb3JtYXQgLyB0eXBlXG4gKiBAcGFyYW0ge251bWJlcn0gaW50ZXJuYWxGb3JtYXQgVGhlIGludGVybmFsRm9ybWF0IHBhcmFtZXRlciBmcm9tIHRleEltYWdlMkQgZXRjLi5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIFRoZSB0eXBlIHBhcmFtZXRlciBmb3IgdGV4SW1hZ2UyRCBldGMuLlxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgbnVtYmVyIG9mIGJ5dGVzIHBlciBlbGVtZW50IGZvciB0aGUgZ2l2ZW4gaW50ZXJuYWxGb3JtYXQsIHR5cGUgY29tYm9cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICovXG5mdW5jdGlvbiBnZXRCeXRlc1BlckVsZW1lbnRGb3JJbnRlcm5hbEZvcm1hdChpbnRlcm5hbEZvcm1hdCwgdHlwZSkge1xuICB2YXIgaW5mbyA9IHRleHR1cmVJbnRlcm5hbEZvcm1hdEluZm9baW50ZXJuYWxGb3JtYXRdO1xuICBpZiAoIWluZm8pIHtcbiAgICB0aHJvdyBcInVua25vd24gaW50ZXJuYWwgZm9ybWF0XCI7XG4gIH1cbiAgdmFyIGJ5dGVzUGVyRWxlbWVudCA9IGluZm8uYnl0ZXNQZXJFbGVtZW50TWFwW3R5cGVdO1xuICBpZiAoYnl0ZXNQZXJFbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBcInVua25vd24gaW50ZXJuYWwgZm9ybWF0XCI7XG4gIH1cbiAgcmV0dXJuIGJ5dGVzUGVyRWxlbWVudDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBmb3JtYXQgZm9yIGEgZ2l2ZW4gaW50ZXJuYWxGb3JtYXRcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW50ZXJuYWxGb3JtYXQgVGhlIGludGVybmFsIGZvcm1hdFxuICogQHJldHVybiB7e2Zvcm1hdDpudW1iZXIsIHR5cGU6bnVtYmVyfX0gdGhlIGNvcnJlc3BvbmRpbmcgZm9ybWF0IGFuZCB0eXBlXG4gKi9cbmZ1bmN0aW9uIGdldEZvcm1hdEFuZFR5cGVGb3JJbnRlcm5hbEZvcm1hdChpbnRlcm5hbEZvcm1hdCkge1xuICB2YXIgaW5mbyA9IHRleHR1cmVJbnRlcm5hbEZvcm1hdEluZm9baW50ZXJuYWxGb3JtYXRdO1xuICBpZiAoIWluZm8pIHtcbiAgICB0aHJvdyBcInVua25vd24gaW50ZXJuYWwgZm9ybWF0XCI7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBmb3JtYXQ6IGluZm8udGV4dHVyZUZvcm1hdCxcbiAgICB0eXBlOiBBcnJheS5pc0FycmF5KGluZm8udHlwZSkgPyBpbmZvLnR5cGVbMF0gOiBpbmZvLnR5cGVcbiAgfTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdmFsdWUgaXMgcG93ZXIgb2YgMlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIG51bWJlciB0byBjaGVjay5cbiAqIEByZXR1cm4gdHJ1ZSBpZiB2YWx1ZSBpcyBwb3dlciBvZiAyXG4gKi9cbmZ1bmN0aW9uIGlzUG93ZXJPZjIodmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAmIHZhbHVlIC0gMSkgPT09IDA7XG59XG5cbi8qKlxuICogR2V0cyB3aGV0aGVyIG9yIG5vdCB3ZSBjYW4gZ2VuZXJhdGUgbWlwcyBmb3IgdGhlIGdpdmVuIGZvcm1hdFxuICogQHBhcmFtIHtudW1iZXJ9IGludGVybmFsRm9ybWF0IFRoZSBpbnRlcm5hbEZvcm1hdCBwYXJhbWV0ZXIgZnJvbSB0ZXhJbWFnZTJEIGV0Yy4uXG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZSBUaGUgdHlwZSBwYXJhbWV0ZXIgZm9yIHRleEltYWdlMkQgZXRjLi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgd2UgY2FuIGdlbmVyYXRlIG1pcHNcbiAqL1xuZnVuY3Rpb24gY2FuR2VuZXJhdGVNaXBtYXAoZ2wsIHdpZHRoLCBoZWlnaHQsIGludGVybmFsRm9ybWF0IC8qLCB0eXBlICovKSB7XG4gIGlmICghdXRpbHMuaXNXZWJHTDIoZ2wpKSB7XG4gICAgcmV0dXJuIGlzUG93ZXJPZjIod2lkdGgpICYmIGlzUG93ZXJPZjIoaGVpZ2h0KTtcbiAgfVxuICB2YXIgaW5mbyA9IHRleHR1cmVJbnRlcm5hbEZvcm1hdEluZm9baW50ZXJuYWxGb3JtYXRdO1xuICBpZiAoIWluZm8pIHtcbiAgICB0aHJvdyBcInVua25vd24gaW50ZXJuYWwgZm9ybWF0XCI7XG4gIH1cbiAgcmV0dXJuIGluZm8uY29sb3JSZW5kZXJhYmxlICYmIGluZm8udGV4dHVyZUZpbHRlcmFibGU7XG59XG5cbi8qKlxuICogR2V0cyB3aGV0aGVyIG9yIG5vdCB3ZSBjYW4gZ2VuZXJhdGUgbWlwcyBmb3IgdGhlIGdpdmVuIGZvcm1hdFxuICogQHBhcmFtIHtudW1iZXJ9IGludGVybmFsRm9ybWF0IFRoZSBpbnRlcm5hbEZvcm1hdCBwYXJhbWV0ZXIgZnJvbSB0ZXhJbWFnZTJEIGV0Yy4uXG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZSBUaGUgdHlwZSBwYXJhbWV0ZXIgZm9yIHRleEltYWdlMkQgZXRjLi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgd2UgY2FuIGdlbmVyYXRlIG1pcHNcbiAqL1xuZnVuY3Rpb24gY2FuRmlsdGVyKGludGVybmFsRm9ybWF0IC8qLCB0eXBlICovKSB7XG4gIHZhciBpbmZvID0gdGV4dHVyZUludGVybmFsRm9ybWF0SW5mb1tpbnRlcm5hbEZvcm1hdF07XG4gIGlmICghaW5mbykge1xuICAgIHRocm93IFwidW5rbm93biBpbnRlcm5hbCBmb3JtYXRcIjtcbiAgfVxuICByZXR1cm4gaW5mby50ZXh0dXJlRmlsdGVyYWJsZTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBudW1iZXIgb2YgY29tcG9udGVudHMgZm9yIGEgZ2l2ZW4gaW1hZ2UgZm9ybWF0LlxuICogQHBhcmFtIHtudW1iZXJ9IGZvcm1hdCB0aGUgZm9ybWF0LlxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNvbXBvbmVudHMgZm9yIHRoZSBmb3JtYXQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuZnVuY3Rpb24gZ2V0TnVtQ29tcG9uZW50c0ZvckZvcm1hdChmb3JtYXQpIHtcbiAgdmFyIGluZm8gPSBmb3JtYXRJbmZvW2Zvcm1hdF07XG4gIGlmICghaW5mbykge1xuICAgIHRocm93IFwidW5rbm93biBmb3JtYXQ6IFwiICsgZm9ybWF0O1xuICB9XG4gIHJldHVybiBpbmZvLm51bUNvbG9yQ29tcG9uZW50cztcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB0ZXh0dXJlIHR5cGUgZm9yIGEgZ2l2ZW4gYXJyYXkgdHlwZS5cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBnbCB0ZXh0dXJlIHR5cGVcbiAqL1xuZnVuY3Rpb24gZ2V0VGV4dHVyZVR5cGVGb3JBcnJheVR5cGUoZ2wsIHNyYywgZGVmYXVsdFR5cGUpIHtcbiAgaWYgKGlzQXJyYXlCdWZmZXIoc3JjKSkge1xuICAgIHJldHVybiB0eXBlZEFycmF5cy5nZXRHTFR5cGVGb3JUeXBlZEFycmF5KHNyYyk7XG4gIH1cbiAgcmV0dXJuIGRlZmF1bHRUeXBlIHx8IGdsLlVOU0lHTkVEX0JZVEU7XG59XG5cbmZ1bmN0aW9uIGd1ZXNzRGltZW5zaW9ucyhnbCwgdGFyZ2V0LCB3aWR0aCwgaGVpZ2h0LCBudW1FbGVtZW50cykge1xuICBpZiAobnVtRWxlbWVudHMgJSAxICE9PSAwKSB7XG4gICAgdGhyb3cgXCJjYW4ndCBndWVzcyBkaW1lbnNpb25zXCI7XG4gIH1cbiAgaWYgKCF3aWR0aCAmJiAhaGVpZ2h0KSB7XG4gICAgdmFyIHNpemUgPSBNYXRoLnNxcnQobnVtRWxlbWVudHMgLyAodGFyZ2V0ID09PSBnbC5URVhUVVJFX0NVQkVfTUFQID8gNiA6IDEpKTtcbiAgICBpZiAoc2l6ZSAlIDEgPT09IDApIHtcbiAgICAgIHdpZHRoID0gc2l6ZTtcbiAgICAgIGhlaWdodCA9IHNpemU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpZHRoID0gbnVtRWxlbWVudHM7XG4gICAgICBoZWlnaHQgPSAxO1xuICAgIH1cbiAgfSBlbHNlIGlmICghaGVpZ2h0KSB7XG4gICAgaGVpZ2h0ID0gbnVtRWxlbWVudHMgLyB3aWR0aDtcbiAgICBpZiAoaGVpZ2h0ICUgMSkge1xuICAgICAgdGhyb3cgXCJjYW4ndCBndWVzcyBkaW1lbnNpb25zXCI7XG4gICAgfVxuICB9IGVsc2UgaWYgKCF3aWR0aCkge1xuICAgIHdpZHRoID0gbnVtRWxlbWVudHMgLyBoZWlnaHQ7XG4gICAgaWYgKHdpZHRoICUgMSkge1xuICAgICAgdGhyb3cgXCJjYW4ndCBndWVzcyBkaW1lbnNpb25zXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59XG5cbi8qKlxuICogU2V0cyB0aGUgZGVmYXVsdCB0ZXh0dXJlIGNvbG9yLlxuICpcbiAqIFRoZSBkZWZhdWx0IHRleHR1cmUgY29sb3IgaXMgdXNlZCB3aGVuIGxvYWRpbmcgdGV4dHVyZXMgZnJvbVxuICogdXJscy4gQmVjYXVzZSB0aGUgVVJMIHdpbGwgYmUgbG9hZGVkIGFzeW5jIHdlJ2QgbGlrZSB0byBiZVxuICogYWJsZSB0byB1c2UgdGhlIHRleHR1cmUgaW1tZWRpYXRlbHkuIEJ5IHB1dHRpbmcgYSAxeDEgcGl4ZWxcbiAqIGNvbG9yIGluIHRoZSB0ZXh0dXJlIHdlIGNhbiBzdGFydCB1c2luZyB0aGUgdGV4dHVyZSBiZWZvcmVcbiAqIHRoZSBVUkwgaGFzIGxvYWRlZC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcltdfSBjb2xvciBBcnJheSBvZiA0IHZhbHVlcyBpbiB0aGUgcmFuZ2UgMCB0byAxXG4gKiBAZGVwcmVjYXRlZCBzZWUge0BsaW5rIG1vZHVsZTp0d2dsLnNldERlZmF1bHRzfVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cbmZ1bmN0aW9uIHNldERlZmF1bHRUZXh0dXJlQ29sb3IoY29sb3IpIHtcbiAgZGVmYXVsdHMudGV4dHVyZUNvbG9yID0gbmV3IFVpbnQ4QXJyYXkoW2NvbG9yWzBdICogMjU1LCBjb2xvclsxXSAqIDI1NSwgY29sb3JbMl0gKiAyNTUsIGNvbG9yWzNdICogMjU1XSk7XG59XG5cbmZ1bmN0aW9uIHNldERlZmF1bHRzKG5ld0RlZmF1bHRzKSB7XG4gIGhlbHBlci5jb3B5RXhpc3RpbmdQcm9wZXJ0aWVzKG5ld0RlZmF1bHRzLCBkZWZhdWx0cyk7XG4gIGlmIChuZXdEZWZhdWx0cy50ZXh0dXJlQ29sb3IpIHtcbiAgICBzZXREZWZhdWx0VGV4dHVyZUNvbG9yKG5ld0RlZmF1bHRzLnRleHR1cmVDb2xvcik7XG4gIH1cbn1cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBzb3VyY2UgZm9yIGEgdGV4dHVyZS5cbiAqIEBjYWxsYmFjayBUZXh0dXJlRnVuY1xuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBvcHRpb25zIHRoZSB0ZXh0dXJlIG9wdGlvbnNcbiAqIEByZXR1cm4geyp9IFJldHVybnMgYW55IG9mIHRoZSB0aGluZ3MgZG9jdW1lbnRlbnRlZCBmb3IgYHNyY2AgZm9yIHtAbGluayBtb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIFRleHR1cmUgb3B0aW9ucyBwYXNzZWQgdG8gbW9zdCB0ZXh0dXJlIGZ1bmN0aW9ucy4gRWFjaCBmdW5jdGlvbiB3aWxsIHVzZSB3aGF0ZXZlciBvcHRpb25zXG4gKiBhcmUgYXBwcm9wcmlhdGUgZm9yIGl0cyBuZWVkcy4gVGhpcyBsZXRzIHlvdSBwYXNzIHRoZSBzYW1lIG9wdGlvbnMgdG8gYWxsIGZ1bmN0aW9ucy5cbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUZXh0dXJlT3B0aW9uc1xuICogQHByb3BlcnR5IHtudW1iZXJ9IFt0YXJnZXRdIHRoZSB0eXBlIG9mIHRleHR1cmUgYGdsLlRFWFRVUkVfMkRgIG9yIGBnbC5URVhUVVJFX0NVQkVfTUFQYC4gRGVmYXVsdHMgdG8gYGdsLlRFWFRVUkVfMkRgLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtsZXZlbF0gdGhlIG1pcCBsZXZlbCB0byBhZmZlY3QuIERlZmF1bHRzIHRvIDAuIE5vdGUsIGlmIHNldCBhdXRvIHdpbGwgYmUgY29uc2lkZXJlZCBmYWxzZSB1bmxlc3MgZXhwbGljaXRseSBzZXQgdG8gdHJ1ZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbd2lkdGhdIHRoZSB3aWR0aCBvZiB0aGUgdGV4dHVyZS4gT25seSB1c2VkIGlmIHNyYyBpcyBhbiBhcnJheSBvciB0eXBlZCBhcnJheSBvciBudWxsLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtoZWlnaHRdIHRoZSBoZWlnaHQgb2YgYSB0ZXh0dXJlLiBPbmx5IHVzZWQgaWYgc3JjIGlzIGFuIGFycmF5IG9yIHR5cGVkIGFycmF5IG9yIG51bGwuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2RlcHRoXSB0aGUgZGVwdGggb2YgYSB0ZXh0dXJlLiBPbmx5IHVzZWQgaWYgc3JjIGlzIGFuIGFycmF5IG9yIHR5cGUgYXJyYXkgb3IgbnVsbCBhbmQgdGFyZ2V0IGlzIGBURVhUVVJFXzNEYCAuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW21pbl0gdGhlIG1pbiBmaWx0ZXIgc2V0dGluZyAoZWcuIGBnbC5MSU5FQVJgKS4gRGVmYXVsdHMgdG8gYGdsLk5FQVJFU1RfTUlQTUFQX0xJTkVBUmBcbiAqICAgICBvciBpZiB0ZXh0dXJlIGlzIG5vdCBhIHBvd2VyIG9mIDIgb24gYm90aCBkaW1lbnNpb25zIHRoZW4gZGVmYXVsdHMgdG8gYGdsLkxJTkVBUmAuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW21hZ10gdGhlIG1hZyBmaWx0ZXIgc2V0dGluZyAoZWcuIGBnbC5MSU5FQVJgKS4gRGVmYXVsdHMgdG8gYGdsLkxJTkVBUmBcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbWluTWFnXSBib3RoIHRoZSBtaW4gYW5kIG1hZyBmaWx0ZXIgc2V0dGluZ3MuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2ludGVybmFsRm9ybWF0XSBpbnRlcm5hbCBmb3JtYXQgZm9yIHRleHR1cmUuIERlZmF1bHRzIHRvIGBnbC5SR0JBYFxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtmb3JtYXRdIGZvcm1hdCBmb3IgdGV4dHVyZS4gRGVmYXVsdHMgdG8gYGdsLlJHQkFgLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt0eXBlXSB0eXBlIGZvciB0ZXh0dXJlLiBEZWZhdWx0cyB0byBgZ2wuVU5TSUdORURfQllURWAgdW5sZXNzIGBzcmNgIGlzIEFycmF5QnVmZmVyVmlldy4gSWYgYHNyY2BcbiAqICAgICBpcyBBcnJheUJ1ZmZlclZpZXcgZGVmYXVsdHMgdG8gdHlwZSB0aGF0IG1hdGNoZXMgQXJyYXlCdWZmZXJWaWV3IHR5cGUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3dyYXBdIFRleHR1cmUgd3JhcHBpbmcgZm9yIGJvdGggUyBhbmQgVCAoYW5kIFIgaWYgVEVYVFVSRV8zRCBvciBXZWJHTFNhbXBsZXIpLiBEZWZhdWx0cyB0byBgZ2wuUkVQRUFUYCBmb3IgMkQgdW5sZXNzIHNyYyBpcyBXZWJHTDEgYW5kIHNyYyBub3QgbnBvdCBhbmQgYGdsLkNMQU1QX1RPX0VER0VgIGZvciBjdWJlXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3dyYXBTXSBUZXh0dXJlIHdyYXBwaW5nIGZvciBTLiBEZWZhdWx0cyB0byBgZ2wuUkVQRUFUYCBhbmQgYGdsLkNMQU1QX1RPX0VER0VgIGZvciBjdWJlLiBJZiBzZXQgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIGB3cmFwYC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbd3JhcFRdIFRleHR1cmUgd3JhcHBpbmcgZm9yIFQuIERlZmF1bHRzIHRvIGBnbC5SRVBFQVRgIGFuZCBgZ2wuQ0xBTVBfVE9fRURHRWAgZm9yIGN1YmUuIElmIHNldCB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgYHdyYXBgLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt3cmFwUl0gVGV4dHVyZSB3cmFwcGluZyBmb3IgUi4gRGVmYXVsdHMgdG8gYGdsLlJFUEVBVGAgYW5kIGBnbC5DTEFNUF9UT19FREdFYCBmb3IgY3ViZS4gSWYgc2V0IHRha2VzIHByZWNlZGVuY2Ugb3ZlciBgd3JhcGAuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW21pbkxvZF0gVEVYVFVSRV9NSU5fTE9EIHNldHRpbmdcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbWF4TG9kXSBURVhUVVJFX01BWF9MT0Qgc2V0dGluZ1xuICogQHByb3BlcnR5IHtudW1iZXJ9IFtiYXNlTGV2ZWxdIFRFWFRVUkVfQkFTRV9MRVZFTCBzZXR0aW5nXG4gKiBAcHJvcGVydHkge251bWJlcn0gW21heExldmVsXSBURVhUVVJFX01BWF9MRVZFTCBzZXR0aW5nXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3VucGFja0FsaWdubWVudF0gVGhlIGBnbC5VTlBBQ0tfQUxJR05NRU5UYCB1c2VkIHdoZW4gdXBsb2FkaW5nIGFuIGFycmF5LiBEZWZhdWx0cyB0byAxLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtwcmVtdWx0aXBseUFscGhhXSBXaGV0aGVyIG9yIG5vdCB0byBwcmVtdWx0aXBseSBhbHBoYS4gRGVmYXVsdHMgdG8gd2hhdGV2ZXIgdGhlIGN1cnJlbnQgc2V0dGluZyBpcy5cbiAqICAgICBUaGlzIGxldHMgeW91IHNldCBpdCBvbmNlIGJlZm9yZSBjYWxsaW5nIGB0d2dsLmNyZWF0ZVRleHR1cmVgIG9yIGB0d2dsLmNyZWF0ZVRleHR1cmVzYCBhbmQgb25seSBvdmVycmlkZVxuICogICAgIHRoZSBjdXJyZW50IHNldHRpbmcgZm9yIHNwZWNpZmljIHRleHR1cmVzLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtmbGlwWV0gV2hldGhlciBvciBub3QgdG8gZmxpcCB0aGUgdGV4dHVyZSB2ZXJ0aWNhbGx5IG9uIHVwbG9hZC4gRGVmYXVsdHMgdG8gd2hhdGV2ZXIgdGhlIGN1cnJlbnQgc2V0dGluZyBpcy5cbiAqICAgICBUaGlzIGxldHMgeW91IHNldCBpdCBvbmNlIGJlZm9yZSBjYWxsaW5nIGB0d2dsLmNyZWF0ZVRleHR1cmVgIG9yIGB0d2dsLmNyZWF0ZVRleHR1cmVzYCBhbmQgb25seSBvdmVycmlkZVxuICogICAgIHRoZSBjdXJyZW50IHNldHRpbmcgZm9yIHNwZWNpZmljIHRleHR1cmVzLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtjb2xvcnNwYWNlQ29udmVyc2lvbl0gV2hldGhlciBvciBub3QgdG8gbGV0IHRoZSBicm93c2VyIGRvIGNvbG9yc3BhY2UgY29udmVyc2lvbiBvZiB0aGUgdGV4dHVyZSBvbiB1cGxvYWQuIERlZmF1bHRzIHRvIHdoYXRldmVyIHRoZSBjdXJyZW50IHNldHRpbmcgaXMuXG4gKiAgICAgVGhpcyBsZXRzIHlvdSBzZXQgaXQgb25jZSBiZWZvcmUgY2FsbGluZyBgdHdnbC5jcmVhdGVUZXh0dXJlYCBvciBgdHdnbC5jcmVhdGVUZXh0dXJlc2AgYW5kIG9ubHkgb3ZlcnJpZGVcbiAqICAgICB0aGUgY3VycmVudCBzZXR0aW5nIGZvciBzcGVjaWZpYyB0ZXh0dXJlcy5cbiAqIEBwcm9wZXJ0eSB7KG51bWJlcltdfEFycmF5QnVmZmVyVmlldyl9IGNvbG9yIGNvbG9yIHVzZWQgYXMgdGVtcG9yYXJ5IDF4MSBwaXhlbCBjb2xvciBmb3IgdGV4dHVyZXMgbG9hZGVkIGFzeW5jIHdoZW4gc3JjIGlzIGEgc3RyaW5nLlxuICogICAgSWYgaXQncyBhIEphdmFTY3JpcHQgYXJyYXkgYXNzdW1lcyBjb2xvciBpcyAwIHRvIDEgbGlrZSBtb3N0IEdMIGNvbG9ycyBhcyBpbiBgWzEsIDAsIDAsIDFdID0gcmVkPTEsIGdyZWVuPTAsIGJsdWU9MCwgYWxwaGE9MGAuXG4gKiAgICBEZWZhdWx0cyB0byBgWzAuNSwgMC43NSwgMSwgMV1gLiBTZWUge0BsaW5rIG1vZHVsZTp0d2dsLnNldERlZmF1bHRUZXh0dXJlQ29sb3J9LiBJZiBgZmFsc2VgIHRleHR1cmUgaXMgc2V0LiBDYW4gYmUgdXNlZCB0byByZS1sb2FkIGEgdGV4dHVyZVxuICogQHByb3BlcnR5IHtib29sZWFufSBbYXV0b10gSWYgYHVuZGVmaW5lZGAgb3IgYHRydWVgLCBpbiBXZWJHTDEsIHRleHR1cmUgZmlsdGVyaW5nIGlzIHNldCBhdXRvbWF0aWNhbGx5IGZvciBub24tcG93ZXIgb2YgMiBpbWFnZXMgYW5kXG4gKiAgICBtaXBzIGFyZSBnZW5lcmF0ZWQgZm9yIHBvd2VyIG9mIDIgaW1hZ2VzLiBJbiBXZWJHTDIgbWlwcyBhcmUgZ2VuZXJhdGVkIGlmIHRoZXkgY2FuIGJlLiBOb3RlOiBpZiBgbGV2ZWxgIGlzIHNldCBhYm92ZVxuICogICAgdGhlbiB0aGVuIGBhdXRvYCBpcyBhc3N1bWVkIHRvIGJlIGBmYWxzZWAgdW5sZXNzIGV4cGxpY2l0eSBzZXQgdG8gYHRydWVgLlxuICogQHByb3BlcnR5IHtudW1iZXJbXX0gW2N1YmVGYWNlT3JkZXJdIFRoZSBvcmRlciB0aGF0IGN1YmUgZmFjZXMgYXJlIHB1bGxlZCBvdXQgb2YgYW4gaW1nIG9yIHNldCBvZiBpbWFnZXMuIFRoZSBkZWZhdWx0IGlzXG4gKlxuICogICAgIFtnbC5URVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1gsXG4gKiAgICAgIGdsLlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWCxcbiAqICAgICAgZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9ZLFxuICogICAgICBnbC5URVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1ksXG4gKiAgICAgIGdsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWixcbiAqICAgICAgZ2wuVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9aXVxuICpcbiAqIEBwcm9wZXJ0eSB7KG51bWJlcltdfEFycmF5QnVmZmVyVmlld3xIVE1MQ2FudmFzRWxlbWVudHxIVE1MSW1hZ2VFbGVtZW50fEhUTUxWaWRlb0VsZW1lbnR8c3RyaW5nfHN0cmluZ1tdfG1vZHVsZTp0d2dsLlRleHR1cmVGdW5jKX0gW3NyY10gc291cmNlIGZvciB0ZXh0dXJlXG4gKlxuICogICAgSWYgYHN0cmluZ2AgdGhlbiBpdCdzIGFzc3VtZWQgdG8gYmUgYSBVUkwgdG8gYW4gaW1hZ2UuIFRoZSBpbWFnZSB3aWxsIGJlIGRvd25sb2FkZWQgYXN5bmMuIEEgdXNhYmxlXG4gKiAgICAxeDEgcGl4ZWwgdGV4dHVyZSB3aWxsIGJlIHJldHVybmVkIGltbWVkaWF0bGV5LiBUaGUgdGV4dHVyZSB3aWxsIGJlIHVwZGF0ZWQgb25jZSB0aGUgaW1hZ2UgaGFzIGRvd25sb2FkZWQuXG4gKiAgICBJZiBgdGFyZ2V0YCBpcyBgZ2wuVEVYVFVSRV9DVUJFX01BUGAgd2lsbCBhdHRlbXB0IHRvIGRpdmlkZSBpbWFnZSBpbnRvIDYgc3F1YXJlIHBpZWNlcy4gMXg2LCA2eDEsIDN4MiwgMngzLlxuICogICAgVGhlIHBpZWNlcyB3aWxsIGJlIHVwbG9hZGVkIGluIGBjdWJlRmFjZU9yZGVyYFxuICpcbiAqICAgIElmIGBzdHJpbmdbXWAgdGhlbiBpdCBtdXN0IGhhdmUgNiBlbnRyaWVzLCBvbmUgZm9yIGVhY2ggZmFjZSBvZiBhIGN1YmUgbWFwLiBUYXJnZXQgbXVzdCBiZSBgZ2wuVEVYVFVSRV9DVUJFX01BUGAuXG4gKlxuICogICAgSWYgYEhUTUxFbGVtZW50YCB0aGVuIGl0IHdpbCBiZSB1c2VkIGltbWVkaWF0ZWx5IHRvIGNyZWF0ZSB0aGUgY29udGVudHMgb2YgdGhlIHRleHR1cmUuIEV4YW1wbGVzIGBIVE1MSW1hZ2VFbGVtZW50YCxcbiAqICAgIGBIVE1MQ2FudmFzRWxlbWVudGAsIGBIVE1MVmlkZW9FbGVtZW50YC5cbiAqXG4gKiAgICBJZiBgbnVtYmVyW11gIG9yIGBBcnJheUJ1ZmZlclZpZXdgIGl0J3MgYXNzdW1lZCB0byBiZSBkYXRhIGZvciBhIHRleHR1cmUuIElmIGB3aWR0aGAgb3IgYGhlaWdodGAgaXNcbiAqICAgIG5vdCBzcGVjaWZpZWQgaXQgaXMgZ3Vlc3NlZCBhcyBmb2xsb3dzLiBGaXJzdCB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGlzIGNvbXB1dGVkIGJ5IGBzcmMubGVuZ3RoIC8gbnVtQ29tcG9uZW50c2BcbiAqICAgIHdoZXJlIGBudW1Db21wb25lbnRzYCBpcyBkZXJpdmVkIGZyb20gYGZvcm1hdGAuIElmIGB0YXJnZXRgIGlzIGBnbC5URVhUVVJFX0NVQkVfTUFQYCB0aGVuIGBudW1FbGVtZW50c2AgaXMgZGl2aWRlZFxuICogICAgYnkgNi4gVGhlblxuICpcbiAqICAgICogICBJZiBuZWl0aGVyIGB3aWR0aGAgbm9yIGBoZWlnaHRgIGFyZSBzcGVjaWZpZWQgYW5kIGBzcXJ0KG51bUVsZW1lbnRzKWAgaXMgYW4gaW50ZWdlciB0aGVuIHdpZHRoIGFuZCBoZWlnaHRcbiAqICAgICAgICBhcmUgc2V0IHRvIGBzcXJ0KG51bUVsZW1lbnRzKWAuIE90aGVyd2lzZSBgd2lkdGggPSBudW1FbGVtZW50c2AgYW5kIGBoZWlnaHQgPSAxYC5cbiAqXG4gKiAgICAqICAgSWYgb25seSBvbmUgb2YgYHdpZHRoYCBvciBgaGVpZ2h0YCBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgb3RoZXIgZXF1YWxzIGBudW1FbGVtZW50cyAvIHNwZWNpZmllZERpbWVuc2lvbmAuXG4gKlxuICogSWYgYG51bWJlcltdYCB3aWxsIGJlIGNvbnZlcnRlZCB0byBgdHlwZWAuXG4gKlxuICogSWYgYHNyY2AgaXMgYSBmdW5jdGlvbiBpdCB3aWxsIGJlIGNhbGxlZCB3aXRoIGEgYFdlYkdMUmVuZGVyaW5nQ29udGV4dGAgYW5kIHRoZXNlIG9wdGlvbnMuXG4gKiBXaGF0ZXZlciBpdCByZXR1cm5zIGlzIHN1YmplY3QgdG8gdGhlc2UgcnVsZXMuIFNvIGl0IGNhbiByZXR1cm4gYSBzdHJpbmcgdXJsLCBhbiBgSFRNTEVsZW1lbnRgXG4gKiBhbiBhcnJheSBldGMuLi5cbiAqXG4gKiBJZiBgc3JjYCBpcyB1bmRlZmluZWQgdGhlbiBhbiBlbXB0eSB0ZXh0dXJlIHdpbGwgYmUgY3JlYXRlZCBvZiBzaXplIGB3aWR0aGAgYnkgYGhlaWdodGAuXG4gKlxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtjcm9zc09yaWdpbl0gV2hhdCB0byBzZXQgdGhlIGNyb3NzT3JpZ2luIHByb3BlcnR5IG9mIGltYWdlcyB3aGVuIHRoZXkgYXJlIGRvd25sb2FkZWQuXG4gKiAgICBkZWZhdWx0OiB1bmRlZmluZWQuIEFsc28gc2VlIHtAbGluayBtb2R1bGU6dHdnbC5zZXREZWZhdWx0c30uXG4gKlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLy8gTk9URTogV2hpbGUgcXVlcnlpbmcgR0wgaXMgY29uc2lkZXJlZCBzbG93IGl0J3Mgbm90IHJlbW90ZWx5IGFzIHNsb3dcbi8vIGFzIHVwbG9hZGluZyBhIHRleHR1cmUuIE9uIHRvcCBvZiB0aGF0IHlvdSdyZSB1bmxpa2VseSB0byBjYWxsIHRoaXMgaW5cbi8vIGEgcGVyZiBjcml0aWNhbCBsb29wLiBFdmVuIGlmIHVwbG9hZCBhIHRleHR1cmUgZXZlcnkgZnJhbWUgdGhhdCdzIHVubGlrZWx5XG4vLyB0byBiZSBtb3JlIHRoYW4gMSBvciAyIHRleHR1cmVzIGEgZnJhbWUuIEluIG90aGVyIHdvcmRzLCB0aGUgYmVuZWZpdHMgb2Zcbi8vIG1ha2luZyB0aGUgQVBJIGVhc3kgdG8gdXNlIG91dHdlaWdoIGFueSBzdXBwb3NlZCBwZXJmIGJlbmVmaXRzXG52YXIgbGFzdFBhY2tTdGF0ZSA9IHt9O1xuXG4vKipcbiAqIFNhdmVzIGFueSBwYWNraW5nIHN0YXRlIHRoYXQgd2lsbCBiZSBzZXQgYmFzZWQgb24gdGhlIG9wdGlvbnMuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBvcHRpb25zIEEgVGV4dHVyZU9wdGlvbnMgb2JqZWN0IHdpdGggd2hhdGV2ZXIgcGFyYW1ldGVycyB5b3Ugd2FudCBzZXQuXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICovXG5mdW5jdGlvbiBzYXZlUGFja1N0YXRlKGdsLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLmNvbG9yc3BhY2VDb252ZXJzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICBsYXN0UGFja1N0YXRlLmNvbG9yc3BhY2VDb252ZXJzaW9uID0gZ2wuZ2V0UGFyYW1ldGVyKGdsLlVOUEFDS19DT0xPUlNQQUNFX0NPTlZFUlNJT05fV0VCR0wpO1xuICAgIGdsLnBpeGVsU3RvcmVpKGdsLlVOUEFDS19DT0xPUlNQQUNFX0NPTlZFUlNJT05fV0VCR0wsIG9wdGlvbnMuY29sb3JzcGFjZUNvbnZlcnNpb24pO1xuICB9XG4gIGlmIChvcHRpb25zLnByZW11bHRpcGx5QWxwaGEgIT09IHVuZGVmaW5lZCkge1xuICAgIGxhc3RQYWNrU3RhdGUucHJlbXVsdGlwbHlBbHBoYSA9IGdsLmdldFBhcmFtZXRlcihnbC5VTlBBQ0tfUFJFTVVMVElQTFlfQUxQSEFfV0VCR0wpO1xuICAgIGdsLnBpeGVsU3RvcmVpKGdsLlVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTCwgb3B0aW9ucy5wcmVtdWx0aXBseUFscGhhKTtcbiAgfVxuICBpZiAob3B0aW9ucy5mbGlwWSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbGFzdFBhY2tTdGF0ZS5mbGlwWSA9IGdsLmdldFBhcmFtZXRlcihnbC5VTlBBQ0tfRkxJUF9ZX1dFQkdMKTtcbiAgICBnbC5waXhlbFN0b3JlaShnbC5VTlBBQ0tfRkxJUF9ZX1dFQkdMLCBvcHRpb25zLmZsaXBZKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlc3RvcmVzIGFueSBwYWNraW5nIHN0YXRlIHRoYXQgd2FzIHNldCBiYXNlZCBvbiB0aGUgb3B0aW9ucy5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IG9wdGlvbnMgQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKi9cbmZ1bmN0aW9uIHJlc3RvcmVQYWNrU3RhdGUoZ2wsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMuY29sb3JzcGFjZUNvbnZlcnNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGdsLnBpeGVsU3RvcmVpKGdsLlVOUEFDS19DT0xPUlNQQUNFX0NPTlZFUlNJT05fV0VCR0wsIGxhc3RQYWNrU3RhdGUuY29sb3JzcGFjZUNvbnZlcnNpb24pO1xuICB9XG4gIGlmIChvcHRpb25zLnByZW11bHRpcGx5QWxwaGEgIT09IHVuZGVmaW5lZCkge1xuICAgIGdsLnBpeGVsU3RvcmVpKGdsLlVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTCwgbGFzdFBhY2tTdGF0ZS5wcmVtdWx0aXBseUFscGhhKTtcbiAgfVxuICBpZiAob3B0aW9ucy5mbGlwWSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZ2wucGl4ZWxTdG9yZWkoZ2wuVU5QQUNLX0ZMSVBfWV9XRUJHTCwgbGFzdFBhY2tTdGF0ZS5mbGlwWSk7XG4gIH1cbn1cblxudmFyIFdlYkdMU2FtcGxlckN0b3IgPSB3aW5kb3cuV2ViR0xTYW1wbGVyIHx8IGZ1bmN0aW9uIE5vdFdlYkdMU2FtcGxlcigpIHt9O1xuXG4vKipcbiAqIFNldHMgdGhlIHBhcmFtZXRlcnMgb2YgYSB0ZXh0dXJlIG9yIHNhbXBsZXJcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge251bWJlcnxXZWJHTFNhbXBsZXJ9IHRhcmdldCB0ZXh0dXJlIHRhcmdldCBvciBzYW1wbGVyXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCl9IHBhcmFtZXRlcmlGbiB0ZXhQYXJhbXRlcmkgb3Igc2FtcGxlclBhcmFtZXRlcmkgZm5cbiAqIEBwYXJhbSB7V2ViR0xUZXh0dXJlfSB0ZXggdGhlIFdlYkdMVGV4dHVyZSB0byBzZXQgcGFyYW1ldGVycyBmb3JcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IG9wdGlvbnMgQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqICAgVGhpcyBpcyBvZnRlbiB0aGUgc2FtZSBvcHRpb25zIHlvdSBwYXNzZWQgaW4gd2hlbiB5b3UgY3JlYXRlZCB0aGUgdGV4dHVyZS5cbiAqL1xuZnVuY3Rpb24gc2V0VGV4dHVyZVNhbXBsZXJQYXJhbWV0ZXJzKGdsLCB0YXJnZXQsIHBhcmFtZXRlcmlGbiwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5taW5NYWcpIHtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBnbC5URVhUVVJFX01JTl9GSUxURVIsIG9wdGlvbnMubWluTWFnKTtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBnbC5URVhUVVJFX01BR19GSUxURVIsIG9wdGlvbnMubWluTWFnKTtcbiAgfVxuICBpZiAob3B0aW9ucy5taW4pIHtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBnbC5URVhUVVJFX01JTl9GSUxURVIsIG9wdGlvbnMubWluKTtcbiAgfVxuICBpZiAob3B0aW9ucy5tYWcpIHtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBnbC5URVhUVVJFX01BR19GSUxURVIsIG9wdGlvbnMubWFnKTtcbiAgfVxuICBpZiAob3B0aW9ucy53cmFwKSB7XG4gICAgcGFyYW1ldGVyaUZuLmNhbGwoZ2wsIHRhcmdldCwgZ2wuVEVYVFVSRV9XUkFQX1MsIG9wdGlvbnMud3JhcCk7XG4gICAgcGFyYW1ldGVyaUZuLmNhbGwoZ2wsIHRhcmdldCwgZ2wuVEVYVFVSRV9XUkFQX1QsIG9wdGlvbnMud3JhcCk7XG4gICAgaWYgKHRhcmdldCA9PT0gZ2wuVEVYVFVSRV8zRCB8fCB0YXJnZXQgaW5zdGFuY2VvZiBXZWJHTFNhbXBsZXJDdG9yKSB7XG4gICAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBnbC5URVhUVVJFX1dSQVBfUiwgb3B0aW9ucy53cmFwKTtcbiAgICB9XG4gIH1cbiAgaWYgKG9wdGlvbnMud3JhcFIpIHtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBnbC5URVhUVVJFX1dSQVBfUiwgb3B0aW9ucy53cmFwUik7XG4gIH1cbiAgaWYgKG9wdGlvbnMud3JhcFMpIHtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBnbC5URVhUVVJFX1dSQVBfUywgb3B0aW9ucy53cmFwUyk7XG4gIH1cbiAgaWYgKG9wdGlvbnMud3JhcFQpIHtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBnbC5URVhUVVJFX1dSQVBfVCwgb3B0aW9ucy53cmFwVCk7XG4gIH1cbiAgaWYgKG9wdGlvbnMubWluTG9kKSB7XG4gICAgcGFyYW1ldGVyaUZuLmNhbGwoZ2wsIHRhcmdldCwgZ2wuVEVYVFVSRV9NSU5fTE9ELCBvcHRpb25zLm1pbkxvZCk7XG4gIH1cbiAgaWYgKG9wdGlvbnMubWF4TG9kKSB7XG4gICAgcGFyYW1ldGVyaUZuLmNhbGwoZ2wsIHRhcmdldCwgZ2wuVEVYVFVSRV9NQVhfTE9ELCBvcHRpb25zLm1heExvZCk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuYmFzZUxldmVsKSB7XG4gICAgcGFyYW1ldGVyaUZuLmNhbGwoZ2wsIHRhcmdldCwgZ2wuVEVYVFVSRV9CQVNFX0xFVkVMLCBvcHRpb25zLmJhc2VMZXZlbCk7XG4gIH1cbiAgaWYgKG9wdGlvbnMubWF4TGV2ZWwpIHtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBnbC5URVhUVVJFX01BWF9MRVZFTCwgb3B0aW9ucy5tYXhMZXZlbCk7XG4gIH1cbn1cblxuLyoqXG4gKiBTZXRzIHRoZSB0ZXh0dXJlIHBhcmFtZXRlcnMgb2YgYSB0ZXh0dXJlLlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7V2ViR0xUZXh0dXJlfSB0ZXggdGhlIFdlYkdMVGV4dHVyZSB0byBzZXQgcGFyYW1ldGVycyBmb3JcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IG9wdGlvbnMgQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqICAgVGhpcyBpcyBvZnRlbiB0aGUgc2FtZSBvcHRpb25zIHlvdSBwYXNzZWQgaW4gd2hlbiB5b3UgY3JlYXRlZCB0aGUgdGV4dHVyZS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICovXG5mdW5jdGlvbiBzZXRUZXh0dXJlUGFyYW1ldGVycyhnbCwgdGV4LCBvcHRpb25zKSB7XG4gIHZhciB0YXJnZXQgPSBvcHRpb25zLnRhcmdldCB8fCBnbC5URVhUVVJFXzJEO1xuICBnbC5iaW5kVGV4dHVyZSh0YXJnZXQsIHRleCk7XG4gIHNldFRleHR1cmVTYW1wbGVyUGFyYW1ldGVycyhnbCwgdGFyZ2V0LCBnbC50ZXhQYXJhbWV0ZXJpLCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBzYW1wbGVyIHBhcmFtZXRlcnMgb2YgYSBzYW1wbGVyLlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7V2ViR0xTYW1wbGVyfSBzYW1wbGVyIHRoZSBXZWJHTFNhbXBsZXIgdG8gc2V0IHBhcmFtZXRlcnMgZm9yXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBvcHRpb25zIEEgVGV4dHVyZU9wdGlvbnMgb2JqZWN0IHdpdGggd2hhdGV2ZXIgcGFyYW1ldGVycyB5b3Ugd2FudCBzZXQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuZnVuY3Rpb24gc2V0U2FtcGxlclBhcmFtZXRlcnMoZ2wsIHNhbXBsZXIsIG9wdGlvbnMpIHtcbiAgc2V0VGV4dHVyZVNhbXBsZXJQYXJhbWV0ZXJzKGdsLCBzYW1wbGVyLCBnbC5zYW1wbGVyUGFyYW1ldGVyaSwgb3B0aW9ucyk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBzYW1wbGVyIG9iamVjdCBhbmQgc2V0cyBwYXJhbWV0ZXJzLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgICBjb25zdCBzYW1wbGVyID0gdHdnbC5jcmVhdGVTYW1wbGVyKGdsLCB7XG4gKiAgICAgICAgbWluTWFnOiBnbC5ORUFSRVNULCAgICAgICAgIC8vIHNldHMgYm90aCBURVhUVVJFX01JTl9GSUxURVIgYW5kIFRFWFRVUkVfTUFHX0ZJTFRFUlxuICogICAgICAgIHdyYXA6IGdsLkNMQU1QX1RPX05FQVJFU1QsICAvLyBzZXRzIGJvdGggVEVYVFVSRV9XUkFQX1MgYW5kIFRFWFRVUkVfV1JBUF9UIGFuZCBURVhUVVJFX1dSQVBfUlxuICogICAgICB9KTtcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZyxtb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9ucz59IG9wdGlvbnMgQSBvYmplY3Qgb2YgVGV4dHVyZU9wdGlvbnMgb25lIHBlciBzYW1wbGVyLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsV2ViR0xTYW1wbGVyPn0gdGhlIGNyZWF0ZWQgc2FtcGxlcnMgYnkgbmFtZVxuICovXG5mdW5jdGlvbiBjcmVhdGVTYW1wbGVyKGdsLCBvcHRpb25zKSB7XG4gIHZhciBzYW1wbGVyID0gZ2wuY3JlYXRlU2FtcGxlcigpO1xuICBzZXRTYW1wbGVyUGFyYW1ldGVycyhnbCwgc2FtcGxlciwgb3B0aW9ucyk7XG4gIHJldHVybiBzYW1wbGVyO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtdWx0aXBsZSBzYW1wbGVyIG9iamVjdHMgYW5kIHNldHMgcGFyYW1ldGVycyBvbiBlYWNoLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgICBjb25zdCBzYW1wbGVycyA9IHR3Z2wuY3JlYXRlU2FtcGxlcnMoZ2wsIHtcbiAqICAgICAgICBuZWFyZXN0OiB7XG4gKiAgICAgICAgICBtaW5NYWc6IGdsLk5FQVJFU1QsXG4gKiAgICAgICAgfSxcbiAqICAgICAgICBuZWFyZXN0Q2xhbXBTOiB7XG4gKiAgICAgICAgICBtaW5NYWc6IGdsLk5FQVJFU1QsXG4gKiAgICAgICAgICB3cmFwUzogZ2wuQ0xBTVBfVE9fTkVBUkVTVCxcbiAqICAgICAgICB9LFxuICogICAgICAgIGxpbmVhcjoge1xuICogICAgICAgICAgbWluTWFnOiBnbC5MSU5FQVIsXG4gKiAgICAgICAgfSxcbiAqICAgICAgICBuZWFyZXN0Q2xhbXA6IHtcbiAqICAgICAgICAgIG1pbk1hZzogZ2wuTkVBUkVTVCxcbiAqICAgICAgICAgIHdyYXA6IGdsLkNMQU1QX1RPX0VER0UsXG4gKiAgICAgICAgfSxcbiAqICAgICAgICBsaW5lYXJDbGFtcDoge1xuICogICAgICAgICAgbWluTWFnOiBnbC5MSU5FQVIsXG4gKiAgICAgICAgICB3cmFwOiBnbC5DTEFNUF9UT19FREdFLFxuICogICAgICAgIH0sXG4gKiAgICAgICAgbGluZWFyQ2xhbXBUOiB7XG4gKiAgICAgICAgICBtaW5NYWc6IGdsLkxJTkVBUixcbiAqICAgICAgICAgIHdyYXBUOiBnbC5DTEFNUF9UT19FREdFLFxuICogICAgICAgIH0sXG4gKiAgICAgIH0pO1xuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBbb3B0aW9uc10gQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldCBvbiB0aGUgc2FtcGxlclxuICovXG5mdW5jdGlvbiBjcmVhdGVTYW1wbGVycyhnbCwgc2FtcGxlck9wdGlvbnMpIHtcbiAgdmFyIHNhbXBsZXJzID0ge307XG4gIE9iamVjdC5rZXlzKHNhbXBsZXJPcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgc2FtcGxlcnNbbmFtZV0gPSBjcmVhdGVTYW1wbGVyKGdsLCBzYW1wbGVyT3B0aW9uc1tuYW1lXSk7XG4gIH0pO1xuICByZXR1cm4gc2FtcGxlcnM7XG59XG5cbi8qKlxuICogTWFrZXMgYSAxeDEgcGl4ZWxcbiAqIElmIG5vIGNvbG9yIGlzIHBhc3NlZCBpbiB1c2VzIHRoZSBkZWZhdWx0IGNvbG9yIHdoaWNoIGNhbiBiZSBzZXQgYnkgY2FsbGluZyBgc2V0RGVmYXVsdFRleHR1cmVDb2xvcmAuXG4gKiBAcGFyYW0geyhudW1iZXJbXXxBcnJheUJ1ZmZlclZpZXcpfSBbY29sb3JdIFRoZSBjb2xvciB1c2luZyAwLTEgdmFsdWVzXG4gKiBAcmV0dXJuIHtVaW50OEFycmF5fSBVbml0OEFycmF5IHdpdGggY29sb3IuXG4gKi9cbmZ1bmN0aW9uIG1ha2UxUGl4ZWwoY29sb3IpIHtcbiAgY29sb3IgPSBjb2xvciB8fCBkZWZhdWx0cy50ZXh0dXJlQ29sb3I7XG4gIGlmIChpc0FycmF5QnVmZmVyKGNvbG9yKSkge1xuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW2NvbG9yWzBdICogMjU1LCBjb2xvclsxXSAqIDI1NSwgY29sb3JbMl0gKiAyNTUsIGNvbG9yWzNdICogMjU1XSk7XG59XG5cbi8qKlxuICogU2V0cyBmaWx0ZXJpbmcgb3IgZ2VuZXJhdGVzIG1pcHMgZm9yIHRleHR1cmUgYmFzZWQgb24gd2lkdGggb3IgaGVpZ2h0XG4gKiBJZiB3aWR0aCBvciBoZWlnaHQgaXMgbm90IHBhc3NlZCBpbiB1c2VzIGBvcHRpb25zLndpZHRoYCBhbmQvL29yIGBvcHRpb25zLmhlaWdodGBcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtXZWJHTFRleHR1cmV9IHRleCB0aGUgV2ViR0xUZXh0dXJlIHRvIHNldCBwYXJhbWV0ZXJzIGZvclxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30gW29wdGlvbnNdIEEgVGV4dHVyZU9wdGlvbnMgb2JqZWN0IHdpdGggd2hhdGV2ZXIgcGFyYW1ldGVycyB5b3Ugd2FudCBzZXQuXG4gKiAgIFRoaXMgaXMgb2Z0ZW4gdGhlIHNhbWUgb3B0aW9ucyB5b3UgcGFzc2VkIGluIHdoZW4geW91IGNyZWF0ZWQgdGhlIHRleHR1cmUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dpZHRoXSB3aWR0aCBvZiB0ZXh0dXJlXG4gKiBAcGFyYW0ge251bWJlcn0gW2hlaWdodF0gaGVpZ2h0IG9mIHRleHR1cmVcbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW50ZXJuYWxGb3JtYXRdIFRoZSBpbnRlcm5hbEZvcm1hdCBwYXJhbWV0ZXIgZnJvbSB0ZXhJbWFnZTJEIGV0Yy4uXG4gKiBAcGFyYW0ge251bWJlcn0gW3R5cGVdIFRoZSB0eXBlIHBhcmFtZXRlciBmb3IgdGV4SW1hZ2UyRCBldGMuLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cbmZ1bmN0aW9uIHNldFRleHR1cmVGaWx0ZXJpbmdGb3JTaXplKGdsLCB0ZXgsIG9wdGlvbnMsIHdpZHRoLCBoZWlnaHQsIGludGVybmFsRm9ybWF0LCB0eXBlKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IGRlZmF1bHRzLnRleHR1cmVPcHRpb25zO1xuICBpbnRlcm5hbEZvcm1hdCA9IGludGVybmFsRm9ybWF0IHx8IGdsLlJHQkE7XG4gIHR5cGUgPSB0eXBlIHx8IGdsLlVOU0lHTkVEX0JZVEU7XG4gIHZhciB0YXJnZXQgPSBvcHRpb25zLnRhcmdldCB8fCBnbC5URVhUVVJFXzJEO1xuICB3aWR0aCA9IHdpZHRoIHx8IG9wdGlvbnMud2lkdGg7XG4gIGhlaWdodCA9IGhlaWdodCB8fCBvcHRpb25zLmhlaWdodDtcbiAgZ2wuYmluZFRleHR1cmUodGFyZ2V0LCB0ZXgpO1xuICBpZiAoY2FuR2VuZXJhdGVNaXBtYXAoZ2wsIHdpZHRoLCBoZWlnaHQsIGludGVybmFsRm9ybWF0LCB0eXBlKSkge1xuICAgIGdsLmdlbmVyYXRlTWlwbWFwKHRhcmdldCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGZpbHRlcmluZyA9IGNhbkZpbHRlcihpbnRlcm5hbEZvcm1hdCwgdHlwZSkgPyBnbC5MSU5FQVIgOiBnbC5ORUFSRVNUO1xuICAgIGdsLnRleFBhcmFtZXRlcmkodGFyZ2V0LCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGZpbHRlcmluZyk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaSh0YXJnZXQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZmlsdGVyaW5nKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKHRhcmdldCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkodGFyZ2V0LCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQXV0b21hdGljYWxseVNldFRleHR1cmVGaWx0ZXJpbmdGb3JTaXplKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuYXV0byA9PT0gdHJ1ZSB8fCBvcHRpb25zLmF1dG8gPT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLmxldmVsID09PSB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogR2V0cyBhbiBhcnJheSBvZiBjdWJlbWFwIGZhY2UgZW51bXNcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBvcHRpb25zIEEgVGV4dHVyZU9wdGlvbnMgb2JqZWN0IHdpdGggd2hhdGV2ZXIgcGFyYW1ldGVycyB5b3Ugd2FudCBzZXQuXG4gKiAgIFRoaXMgaXMgb2Z0ZW4gdGhlIHNhbWUgb3B0aW9ucyB5b3UgcGFzc2VkIGluIHdoZW4geW91IGNyZWF0ZWQgdGhlIHRleHR1cmUuXG4gKiBAcmV0dXJuIHtudW1iZXJbXX0gY3ViZW1hcCBmYWNlIGVudW1zXG4gKi9cbmZ1bmN0aW9uIGdldEN1YmVGYWNlT3JkZXIoZ2wsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHJldHVybiBvcHRpb25zLmN1YmVGYWNlT3JkZXIgfHwgW2dsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWCwgZ2wuVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9YLCBnbC5URVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1ksIGdsLlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWSwgZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9aLCBnbC5URVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1pdO1xufVxuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEZhY2VJbmZvXG4gKiBAcHJvcGVydHkge251bWJlcn0gZmFjZSBnbCBlbnVtIGZvciB0ZXhJbWFnZTJEXG4gKiBAcHJvcGVydHkge251bWJlcn0gbmR4IGZhY2UgaW5kZXggKDAgLSA1KSBpbnRvIHNvdXJjZSBkYXRhXG4gKiBAaWdub3JlXG4gKi9cblxuLyoqXG4gKiBHZXRzIGFuIGFycmF5IG9mIEZhY2VJbmZvc1xuICogVGhlcmUncyBhIGJ1ZyBpbiBzb21lIE5WaWRpYSBkcml2ZXJzIHRoYXQgd2lsbCBjcmFzaCB0aGUgZHJpdmVyIGlmXG4gKiBgZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9YYCBpcyBub3QgdXBsb2FkZWQgZmlyc3QuIFNvLCB3ZSB0YWtlXG4gKiB0aGUgdXNlcidzIGRlc2lyZWQgb3JkZXIgZnJvbSBoaXMgZmFjZXMgdG8gV2ViR0wgYW5kIG1ha2Ugc3VyZSB3ZVxuICogZG8gdGhlIGZhY2VzIGluIFdlYkdMIG9yZGVyXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IG9wdGlvbnMgQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqIEByZXR1cm4ge0ZhY2VJbmZvW119IGN1YmVtYXAgZmFjZSBpbmZvcy4gQXJndWFibHkgdGhlIGBmYWNlYCBwcm9wZXJ0eSBvZiBlYWNoIGVsZW1lbnQgaXMgcmVkdW5kZW50IGJ1dFxuICogICAgaXQncyBuZWVkZWQgaW50ZXJuYWxseSB0byBzb3J0IHRoZSBhcnJheSBvZiBgbmR4YCBwcm9wZXJ0aWVzIGJ5IGBmYWNlYC5cbiAqL1xuZnVuY3Rpb24gZ2V0Q3ViZUZhY2VzV2l0aE5keChnbCwgb3B0aW9ucykge1xuICB2YXIgZmFjZXMgPSBnZXRDdWJlRmFjZU9yZGVyKGdsLCBvcHRpb25zKTtcbiAgLy8gd29yayBhcm91bmQgYnVnIGluIE5WaWRpYSBkcml2ZXJzLiBXZSBoYXZlIHRvIHVwbG9hZCB0aGUgZmlyc3QgZmFjZSBmaXJzdCBlbHNlIHRoZSBkcml2ZXIgY3Jhc2hlcyA6KFxuICB2YXIgZmFjZXNXaXRoTmR4ID0gZmFjZXMubWFwKGZ1bmN0aW9uIChmYWNlLCBuZHgpIHtcbiAgICByZXR1cm4geyBmYWNlOiBmYWNlLCBuZHg6IG5keCB9O1xuICB9KTtcbiAgZmFjZXNXaXRoTmR4LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYS5mYWNlIC0gYi5mYWNlO1xuICB9KTtcbiAgcmV0dXJuIGZhY2VzV2l0aE5keDtcbn1cblxuLyoqXG4gKiBTZXQgYSB0ZXh0dXJlIGZyb20gdGhlIGNvbnRlbnRzIG9mIGFuIGVsZW1lbnQuIFdpbGwgYWxzbyBzZXRcbiAqIHRleHR1cmUgZmlsdGVyaW5nIG9yIGdlbmVyYXRlIG1pcHMgYmFzZWQgb24gdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGVsZW1lbnRcbiAqIHVubGVzcyBgb3B0aW9ucy5hdXRvID09PSBmYWxzZWAuIElmIGB0YXJnZXQgPT09IGdsLlRFWFRVUkVfQ1VCRV9NQVBgIHdpbGxcbiAqIGF0dGVtcHQgdG8gc2xpY2UgaW1hZ2UgaW50byAxeDYsIDJ4MywgM3gyLCBvciA2eDEgaW1hZ2VzLCBvbmUgZm9yIGVhY2ggZmFjZS5cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge1dlYkdMVGV4dHVyZX0gdGV4IHRoZSBXZWJHTFRleHR1cmUgdG8gc2V0IHBhcmFtZXRlcnMgZm9yXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IGEgY2FudmFzLCBpbWcsIG9yIHZpZGVvIGVsZW1lbnQuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBbb3B0aW9uc10gQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqICAgVGhpcyBpcyBvZnRlbiB0aGUgc2FtZSBvcHRpb25zIHlvdSBwYXNzZWQgaW4gd2hlbiB5b3UgY3JlYXRlZCB0aGUgdGV4dHVyZS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICogQGtpbmQgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gc2V0VGV4dHVyZUZyb21FbGVtZW50KGdsLCB0ZXgsIGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgZGVmYXVsdHMudGV4dHVyZU9wdGlvbnM7XG4gIHZhciB0YXJnZXQgPSBvcHRpb25zLnRhcmdldCB8fCBnbC5URVhUVVJFXzJEO1xuICB2YXIgbGV2ZWwgPSBvcHRpb25zLmxldmVsIHx8IDA7XG4gIHZhciB3aWR0aCA9IGVsZW1lbnQud2lkdGg7XG4gIHZhciBoZWlnaHQgPSBlbGVtZW50LmhlaWdodDtcbiAgdmFyIGludGVybmFsRm9ybWF0ID0gb3B0aW9ucy5pbnRlcm5hbEZvcm1hdCB8fCBvcHRpb25zLmZvcm1hdCB8fCBnbC5SR0JBO1xuICB2YXIgZm9ybWF0VHlwZSA9IGdldEZvcm1hdEFuZFR5cGVGb3JJbnRlcm5hbEZvcm1hdChpbnRlcm5hbEZvcm1hdCk7XG4gIHZhciBmb3JtYXQgPSBvcHRpb25zLmZvcm1hdCB8fCBmb3JtYXRUeXBlLmZvcm1hdDtcbiAgdmFyIHR5cGUgPSBvcHRpb25zLnR5cGUgfHwgZm9ybWF0VHlwZS50eXBlO1xuICBzYXZlUGFja1N0YXRlKGdsLCBvcHRpb25zKTtcbiAgZ2wuYmluZFRleHR1cmUodGFyZ2V0LCB0ZXgpO1xuICBpZiAodGFyZ2V0ID09PSBnbC5URVhUVVJFX0NVQkVfTUFQKSB7XG4gICAgLy8gZ3Vlc3MgdGhlIHBhcnRzXG4gICAgdmFyIGltZ1dpZHRoID0gZWxlbWVudC53aWR0aDtcbiAgICB2YXIgaW1nSGVpZ2h0ID0gZWxlbWVudC5oZWlnaHQ7XG4gICAgdmFyIHNpemUgPSB2b2lkIDA7XG4gICAgdmFyIHNsaWNlcyA9IHZvaWQgMDtcbiAgICBpZiAoaW1nV2lkdGggLyA2ID09PSBpbWdIZWlnaHQpIHtcbiAgICAgIC8vIEl0J3MgNngxXG4gICAgICBzaXplID0gaW1nSGVpZ2h0O1xuICAgICAgc2xpY2VzID0gWzAsIDAsIDEsIDAsIDIsIDAsIDMsIDAsIDQsIDAsIDUsIDBdO1xuICAgIH0gZWxzZSBpZiAoaW1nSGVpZ2h0IC8gNiA9PT0gaW1nV2lkdGgpIHtcbiAgICAgIC8vIEl0J3MgMXg2XG4gICAgICBzaXplID0gaW1nV2lkdGg7XG4gICAgICBzbGljZXMgPSBbMCwgMCwgMCwgMSwgMCwgMiwgMCwgMywgMCwgNCwgMCwgNV07XG4gICAgfSBlbHNlIGlmIChpbWdXaWR0aCAvIDMgPT09IGltZ0hlaWdodCAvIDIpIHtcbiAgICAgIC8vIEl0J3MgM3gyXG4gICAgICBzaXplID0gaW1nV2lkdGggLyAzO1xuICAgICAgc2xpY2VzID0gWzAsIDAsIDEsIDAsIDIsIDAsIDAsIDEsIDEsIDEsIDIsIDFdO1xuICAgIH0gZWxzZSBpZiAoaW1nV2lkdGggLyAyID09PSBpbWdIZWlnaHQgLyAzKSB7XG4gICAgICAvLyBJdCdzIDJ4M1xuICAgICAgc2l6ZSA9IGltZ1dpZHRoIC8gMjtcbiAgICAgIHNsaWNlcyA9IFswLCAwLCAxLCAwLCAwLCAxLCAxLCAxLCAwLCAyLCAxLCAyXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgXCJjYW4ndCBmaWd1cmUgb3V0IGN1YmUgbWFwIGZyb20gZWxlbWVudDogXCIgKyAoZWxlbWVudC5zcmMgPyBlbGVtZW50LnNyYyA6IGVsZW1lbnQubm9kZU5hbWUpO1xuICAgIH1cbiAgICBjdHguY2FudmFzLndpZHRoID0gc2l6ZTtcbiAgICBjdHguY2FudmFzLmhlaWdodCA9IHNpemU7XG4gICAgd2lkdGggPSBzaXplO1xuICAgIGhlaWdodCA9IHNpemU7XG4gICAgZ2V0Q3ViZUZhY2VzV2l0aE5keChnbCwgb3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoZikge1xuICAgICAgdmFyIHhPZmZzZXQgPSBzbGljZXNbZi5uZHggKiAyICsgMF0gKiBzaXplO1xuICAgICAgdmFyIHlPZmZzZXQgPSBzbGljZXNbZi5uZHggKiAyICsgMV0gKiBzaXplO1xuICAgICAgY3R4LmRyYXdJbWFnZShlbGVtZW50LCB4T2Zmc2V0LCB5T2Zmc2V0LCBzaXplLCBzaXplLCAwLCAwLCBzaXplLCBzaXplKTtcbiAgICAgIGdsLnRleEltYWdlMkQoZi5mYWNlLCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIGZvcm1hdCwgdHlwZSwgY3R4LmNhbnZhcyk7XG4gICAgfSk7XG4gICAgLy8gRnJlZSB1cCB0aGUgY2FudmFzIG1lbW9yeVxuICAgIGN0eC5jYW52YXMud2lkdGggPSAxO1xuICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gMTtcbiAgfSBlbHNlIGlmICh0YXJnZXQgPT09IGdsLlRFWFRVUkVfM0QpIHtcbiAgICB2YXIgc21hbGxlc3QgPSBNYXRoLm1pbihlbGVtZW50LndpZHRoLCBlbGVtZW50LmhlaWdodCk7XG4gICAgdmFyIGxhcmdlc3QgPSBNYXRoLm1heChlbGVtZW50LndpZHRoLCBlbGVtZW50LmhlaWdodCk7XG4gICAgdmFyIGRlcHRoID0gbGFyZ2VzdCAvIHNtYWxsZXN0O1xuICAgIGlmIChkZXB0aCAlIDEgIT09IDApIHtcbiAgICAgIHRocm93IFwiY2FuIG5vdCBjb21wdXRlIDNEIGRpbWVuc2lvbnMgb2YgZWxlbWVudFwiO1xuICAgIH1cbiAgICB2YXIgeE11bHQgPSBlbGVtZW50LndpZHRoID09PSBsYXJnZXN0ID8gMSA6IDA7XG4gICAgdmFyIHlNdWx0ID0gZWxlbWVudC5oZWlnaHQgPT09IGxhcmdlc3QgPyAxIDogMDtcbiAgICBnbC50ZXhJbWFnZTNEKHRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBzbWFsbGVzdCwgc21hbGxlc3QsIHNtYWxsZXN0LCAwLCBmb3JtYXQsIHR5cGUsIG51bGwpO1xuICAgIC8vIHJlbW92ZSB0aGlzIGlzIHRleFN1YkltYWdlM0QgZ2V0cyB3aWR0aCBhbmQgaGVpZ2h0IGFyZ3VtZW50c1xuICAgIGN0eC5jYW52YXMud2lkdGggPSBzbWFsbGVzdDtcbiAgICBjdHguY2FudmFzLmhlaWdodCA9IHNtYWxsZXN0O1xuICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGVwdGg7ICsrZCkge1xuICAgICAgLy9nbC5waXhlbFN0b3JlaShnbC5VTlBBQ0tfU0tJUF9QSVhFTFMsIGQgKiBzbWFsbGVzdCk7XG4gICAgICAvL2dsLnRleFN1YkltYWdlM0QodGFyZ2V0LCAwLCAwLCAwLCBkLCBmb3JtYXQsIHR5cGUsIGVsZW1lbnQpO1xuICAgICAgdmFyIHNyY1ggPSBkICogc21hbGxlc3QgKiB4TXVsdDtcbiAgICAgIHZhciBzcmNZID0gZCAqIHNtYWxsZXN0ICogeU11bHQ7XG4gICAgICB2YXIgc3JjVyA9IHNtYWxsZXN0O1xuICAgICAgdmFyIHNyY0ggPSBzbWFsbGVzdDtcbiAgICAgIHZhciBkc3RYID0gMDtcbiAgICAgIHZhciBkc3RZID0gMDtcbiAgICAgIHZhciBkc3RXID0gc21hbGxlc3Q7XG4gICAgICB2YXIgZHN0SCA9IHNtYWxsZXN0O1xuICAgICAgY3R4LmRyYXdJbWFnZShlbGVtZW50LCBzcmNYLCBzcmNZLCBzcmNXLCBzcmNILCBkc3RYLCBkc3RZLCBkc3RXLCBkc3RIKTtcbiAgICAgIGdsLnRleFN1YkltYWdlM0QodGFyZ2V0LCBsZXZlbCwgMCwgMCwgZCwgc21hbGxlc3QsIHNtYWxsZXN0LCAxLCBmb3JtYXQsIHR5cGUsIGN0eC5jYW52YXMpO1xuICAgIH1cbiAgICBjdHguY2FudmFzLndpZHRoID0gMDtcbiAgICBjdHguY2FudmFzLmhlaWdodCA9IDA7XG4gICAgLy9GSVggKHNhdmUgc3RhdGUpXG4gICAgZ2wucGl4ZWxTdG9yZWkoZ2wuVU5QQUNLX1NLSVBfUElYRUxTLCAwKTtcbiAgfSBlbHNlIHtcbiAgICBnbC50ZXhJbWFnZTJEKHRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGVsZW1lbnQpO1xuICB9XG4gIHJlc3RvcmVQYWNrU3RhdGUoZ2wsIG9wdGlvbnMpO1xuICBpZiAoc2hvdWxkQXV0b21hdGljYWxseVNldFRleHR1cmVGaWx0ZXJpbmdGb3JTaXplKG9wdGlvbnMpKSB7XG4gICAgc2V0VGV4dHVyZUZpbHRlcmluZ0ZvclNpemUoZ2wsIHRleCwgb3B0aW9ucywgd2lkdGgsIGhlaWdodCwgaW50ZXJuYWxGb3JtYXQsIHR5cGUpO1xuICB9XG4gIHNldFRleHR1cmVQYXJhbWV0ZXJzKGdsLCB0ZXgsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cblxuLyoqXG4gKiBMb2FkcyBhbiBpbWFnZVxuICogQHBhcmFtIHtzdHJpbmd9IHVybCB1cmwgdG8gaW1hZ2VcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oZXJyLCBpbWcpfSBbY2FsbGJhY2tdIGEgY2FsbGJhY2sgdGhhdCdzIHBhc3NlZCBhbiBlcnJvciBhbmQgdGhlIGltYWdlLiBUaGUgZXJyb3Igd2lsbCBiZSBub24tbnVsbFxuICogICAgIGlmIHRoZXJlIHdhcyBhbiBlcnJvclxuICogQHJldHVybiB7SFRNTEltYWdlRWxlbWVudH0gdGhlIGltYWdlIGJlaW5nIGxvYWRlZC5cbiAqL1xuZnVuY3Rpb24gbG9hZEltYWdlKHVybCwgY3Jvc3NPcmlnaW4sIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbm9vcDtcbiAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICBjcm9zc09yaWdpbiA9IGNyb3NzT3JpZ2luICE9PSB1bmRlZmluZWQgPyBjcm9zc09yaWdpbiA6IGRlZmF1bHRzLmNyb3NzT3JpZ2luO1xuICBpZiAoY3Jvc3NPcmlnaW4gIT09IHVuZGVmaW5lZCkge1xuICAgIGltZy5jcm9zc09yaWdpbiA9IGNyb3NzT3JpZ2luO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJFdmVudEhhbmRsZXJzKCkge1xuICAgIGltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgaW1nID0gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRXJyb3IoKSB7XG4gICAgdmFyIG1zZyA9IFwiY291bGRuJ3QgbG9hZCBpbWFnZTogXCIgKyB1cmw7XG4gICAgaGVscGVyLmVycm9yKG1zZyk7XG4gICAgY2FsbGJhY2sobXNnLCBpbWcpO1xuICAgIGNsZWFyRXZlbnRIYW5kbGVycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgIGNhbGxiYWNrKG51bGwsIGltZyk7XG4gICAgY2xlYXJFdmVudEhhbmRsZXJzKCk7XG4gIH1cblxuICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yKTtcbiAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xuICBpbWcuc3JjID0gdXJsO1xuICByZXR1cm4gaW1nO1xufVxuXG4vKipcbiAqIFNldHMgYSB0ZXh0dXJlIHRvIGEgMXgxIHBpeGVsIGNvbG9yLiBJZiBgb3B0aW9ucy5jb2xvciA9PT0gZmFsc2VgIGlzIG5vdGhpbmcgaGFwcGVucy4gSWYgaXQncyBub3Qgc2V0XG4gKiB0aGUgZGVmYXVsdCB0ZXh0dXJlIGNvbG9yIGlzIHVzZWQgd2hpY2ggY2FuIGJlIHNldCBieSBjYWxsaW5nIGBzZXREZWZhdWx0VGV4dHVyZUNvbG9yYC5cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge1dlYkdMVGV4dHVyZX0gdGV4IHRoZSBXZWJHTFRleHR1cmUgdG8gc2V0IHBhcmFtZXRlcnMgZm9yXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBbb3B0aW9uc10gQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqICAgVGhpcyBpcyBvZnRlbiB0aGUgc2FtZSBvcHRpb25zIHlvdSBwYXNzZWQgaW4gd2hlbiB5b3UgY3JlYXRlZCB0aGUgdGV4dHVyZS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICovXG5mdW5jdGlvbiBzZXRUZXh0dXJlVG8xUGl4ZWxDb2xvcihnbCwgdGV4LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IGRlZmF1bHRzLnRleHR1cmVPcHRpb25zO1xuICB2YXIgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQgfHwgZ2wuVEVYVFVSRV8yRDtcbiAgZ2wuYmluZFRleHR1cmUodGFyZ2V0LCB0ZXgpO1xuICBpZiAob3B0aW9ucy5jb2xvciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gQXNzdW1lIGl0J3MgYSBVUkxcbiAgLy8gUHV0IDF4MSBwaXhlbHMgaW4gdGV4dHVyZS4gVGhhdCBtYWtlcyBpdCByZW5kZXJhYmxlIGltbWVkaWF0ZWx5IHJlZ2FyZGxlc3Mgb2YgZmlsdGVyaW5nLlxuICB2YXIgY29sb3IgPSBtYWtlMVBpeGVsKG9wdGlvbnMuY29sb3IpO1xuICBpZiAodGFyZ2V0ID09PSBnbC5URVhUVVJFX0NVQkVfTUFQKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDY7ICsraWkpIHtcbiAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9YICsgaWksIDAsIGdsLlJHQkEsIDEsIDEsIDAsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGNvbG9yKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodGFyZ2V0ID09PSBnbC5URVhUVVJFXzNEIHx8IHRhcmdldCA9PT0gZ2wuVEVYVFVSRV8yRF9BUlJBWSkge1xuICAgIGdsLnRleEltYWdlM0QodGFyZ2V0LCAwLCBnbC5SR0JBLCAxLCAxLCAxLCAwLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBjb2xvcik7XG4gIH0gZWxzZSB7XG4gICAgZ2wudGV4SW1hZ2UyRCh0YXJnZXQsIDAsIGdsLlJHQkEsIDEsIDEsIDAsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGNvbG9yKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBzcmMgaW1hZ2UocykgdXNlZCB0byBjcmVhdGUgYSB0ZXh0dXJlLlxuICpcbiAqIFdoZW4geW91IGNhbGwge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVRleHR1cmV9IG9yIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVUZXh0dXJlc31cbiAqIHlvdSBjYW4gcGFzcyBpbiB1cmxzIGZvciBpbWFnZXMgdG8gbG9hZCBpbnRvIHRoZSB0ZXh0dXJlcy4gSWYgaXQncyBhIHNpbmdsZSB1cmxcbiAqIHRoZW4gdGhpcyB3aWxsIGJlIGEgc2luZ2xlIEhUTUxJbWFnZUVsZW1lbnQuIElmIGl0J3MgYW4gYXJyYXkgb2YgdXJscyB1c2VkIGZvciBhIGN1YmVtYXBcbiAqIHRoaXMgd2lsbCBiZSBhIGNvcnJlc3BvbmRpbmcgYXJyYXkgb2YgaW1hZ2VzIGZvciB0aGUgY3ViZW1hcC5cbiAqXG4gKiBAdHlwZWRlZiB7SFRNTEltYWdlRWxlbWVudHxIVE1MSW1hZ2VFbGVtZW50W119IFRleHR1cmVTcmNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayBmb3Igd2hlbiBhbiBpbWFnZSBmaW5pc2hlZCBkb3dubG9hZGluZyBhbmQgYmVlbiB1cGxvYWRlZCBpbnRvIGEgdGV4dHVyZVxuICogQGNhbGxiYWNrIFRleHR1cmVSZWFkeUNhbGxiYWNrXG4gKiBAcGFyYW0geyp9IGVyciBJZiB0cnV0aHkgdGhlcmUgd2FzIGFuIGVycm9yLlxuICogQHBhcmFtIHtXZWJHTFRleHR1cmV9IHRleHR1cmUgdGhlIHRleHR1cmUuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVTcmN9IHNvdWNlIGltYWdlKHMpIHVzZWQgdG8gYXMgdGhlIHNyYyBmb3IgdGhlIHRleHR1cmVcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayBmb3Igd2hlbiBhbGwgaW1hZ2VzIGhhdmUgZmluaXNoZWQgZG93bmxvYWRpbmcgYW5kIGJlZW4gdXBsb2FkZWQgaW50byB0aGVpciByZXNwZWN0aXZlIHRleHR1cmVzXG4gKiBAY2FsbGJhY2sgVGV4dHVyZXNSZWFkeUNhbGxiYWNrXG4gKiBAcGFyYW0geyp9IGVyciBJZiB0cnV0aHkgdGhlcmUgd2FzIGFuIGVycm9yLlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgV2ViR0xUZXh0dXJlPn0gdGV4dHVyZXMgdGhlIGNyZWF0ZWQgdGV4dHVyZXMgYnkgbmFtZS4gU2FtZSBhcyByZXR1cm5lZCBieSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlVGV4dHVyZXN9LlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgbW9kdWxlOnR3Z2wuVGV4dHVyZVNyYz59IHNvdXJjZXMgdGhlIGltYWdlKHMpIHVzZWQgZm9yIHRoZSB0ZXh0dXJlIGJ5IG5hbWUuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIEEgY2FsbGJhY2sgZm9yIHdoZW4gYW4gaW1hZ2UgZmluaXNoZWQgZG93bmxvYWRpbmcgYW5kIGJlZW4gdXBsb2FkZWQgaW50byBhIHRleHR1cmVcbiAqIEBjYWxsYmFjayBDdWJlbWFwUmVhZHlDYWxsYmFja1xuICogQHBhcmFtIHsqfSBlcnIgSWYgdHJ1dGh5IHRoZXJlIHdhcyBhbiBlcnJvci5cbiAqIEBwYXJhbSB7V2ViR0xUZXh0dXJlfSB0ZXggdGhlIHRleHR1cmUuXG4gKiBAcGFyYW0ge0hUTUxJbWFnZUVsZW1lbnRbXX0gaW1ncyB0aGUgaW1hZ2VzIGZvciBlYWNoIGZhY2UuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIEEgY2FsbGJhY2sgZm9yIHdoZW4gYW4gaW1hZ2UgZmluaXNoZWQgZG93bmxvYWRpbmcgYW5kIGJlZW4gdXBsb2FkZWQgaW50byBhIHRleHR1cmVcbiAqIEBjYWxsYmFjayBUaHJlZURSZWFkeUNhbGxiYWNrXG4gKiBAcGFyYW0geyp9IGVyciBJZiB0cnV0aHkgdGhlcmUgd2FzIGFuIGVycm9yLlxuICogQHBhcmFtIHtXZWJHTFRleHR1cmV9IHRleCB0aGUgdGV4dHVyZS5cbiAqIEBwYXJhbSB7SFRNTEltYWdlRWxlbWVudFtdfSBpbWdzIHRoZSBpbWFnZXMgZm9yIGVhY2ggc2xpY2UuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIExvYWRzIGEgdGV4dHVyZSBmcm9tIGFuIGltYWdlIGZyb20gYSBVcmwgYXMgc3BlY2lmaWVkIGluIGBvcHRpb25zLnNyY2BcbiAqIElmIGBvcHRpb25zLmNvbG9yICE9PSBmYWxzZWAgd2lsbCBzZXQgdGhlIHRleHR1cmUgdG8gYSAxeDEgcGl4ZWwgY29sb3Igc28gdGhhdCB0aGUgdGV4dHVyZSBpc1xuICogaW1tZWRpYXRlbHkgdXNlYWJsZS4gSXQgd2lsbCBiZSB1cGRhdGVkIHdpdGggdGhlIGNvbnRlbnRzIG9mIHRoZSBpbWFnZSBvbmNlIHRoZSBpbWFnZSBoYXMgZmluaXNoZWRcbiAqIGRvd25sb2FkaW5nLiBGaWx0ZXJpbmcgb3B0aW9ucyB3aWxsIGJlIHNldCBhcyBhcHByb3JpYXRlIGZvciBpbWFnZSB1bmxlc3MgYG9wdGlvbnMuYXV0byA9PT0gZmFsc2VgLlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7V2ViR0xUZXh0dXJlfSB0ZXggdGhlIFdlYkdMVGV4dHVyZSB0byBzZXQgcGFyYW1ldGVycyBmb3JcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IFtvcHRpb25zXSBBIFRleHR1cmVPcHRpb25zIG9iamVjdCB3aXRoIHdoYXRldmVyIHBhcmFtZXRlcnMgeW91IHdhbnQgc2V0LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlUmVhZHlDYWxsYmFja30gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBpbWFnZSBoYXMgZmluaXNoZWQgbG9hZGluZy4gZXJyIHdpbGxcbiAqICAgIGJlIG5vbiBudWxsIGlmIHRoZXJlIHdhcyBhbiBlcnJvci5cbiAqIEByZXR1cm4ge0hUTUxJbWFnZUVsZW1lbnR9IHRoZSBpbWFnZSBiZWluZyBkb3dubG9hZGVkLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cbmZ1bmN0aW9uIGxvYWRUZXh0dXJlRnJvbVVybChnbCwgdGV4LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IG5vb3A7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IGRlZmF1bHRzLnRleHR1cmVPcHRpb25zO1xuICBzZXRUZXh0dXJlVG8xUGl4ZWxDb2xvcihnbCwgdGV4LCBvcHRpb25zKTtcbiAgLy8gQmVjYXVzZSBpdCdzIGFzeW5jIHdlIG5lZWQgdG8gY29weSB0aGUgb3B0aW9ucy5cbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICB2YXIgaW1nID0gbG9hZEltYWdlKG9wdGlvbnMuc3JjLCBvcHRpb25zLmNyb3NzT3JpZ2luLCBmdW5jdGlvbiAoZXJyLCBpbWcpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBjYWxsYmFjayhlcnIsIHRleCwgaW1nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGV4dHVyZUZyb21FbGVtZW50KGdsLCB0ZXgsIGltZywgb3B0aW9ucyk7XG4gICAgICBjYWxsYmFjayhudWxsLCB0ZXgsIGltZyk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGltZztcbn1cblxuLyoqXG4gKiBMb2FkcyBhIGN1YmVtYXAgZnJvbSA2IHVybHMgYXMgc3BlY2lmaWVkIGluIGBvcHRpb25zLnNyY2AuIFdpbGwgc2V0IHRoZSBjdWJlbWFwIHRvIGEgMXgxIHBpeGVsIGNvbG9yXG4gKiBzbyB0aGF0IGl0IGlzIHVzYWJsZSBpbW1lZGlhdGVseSB1bmxlc3MgYG9wdGlvbi5jb2xvciA9PT0gZmFsc2VgLlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7V2ViR0xUZXh0dXJlfSB0ZXggdGhlIFdlYkdMVGV4dHVyZSB0byBzZXQgcGFyYW1ldGVycyBmb3JcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IG9wdGlvbnMgQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuQ3ViZW1hcFJlYWR5Q2FsbGJhY2t9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiBhbGwgdGhlIGltYWdlcyBoYXZlIGZpbmlzaGVkIGxvYWRpbmcuIGVyciB3aWxsXG4gKiAgICBiZSBub24gbnVsbCBpZiB0aGVyZSB3YXMgYW4gZXJyb3IuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuZnVuY3Rpb24gbG9hZEN1YmVtYXBGcm9tVXJscyhnbCwgdGV4LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IG5vb3A7XG4gIHZhciB1cmxzID0gb3B0aW9ucy5zcmM7XG4gIGlmICh1cmxzLmxlbmd0aCAhPT0gNikge1xuICAgIHRocm93IFwidGhlcmUgbXVzdCBiZSA2IHVybHMgZm9yIGEgY3ViZW1hcFwiO1xuICB9XG4gIHZhciBsZXZlbCA9IG9wdGlvbnMubGV2ZWwgfHwgMDtcbiAgdmFyIGludGVybmFsRm9ybWF0ID0gb3B0aW9ucy5pbnRlcm5hbEZvcm1hdCB8fCBvcHRpb25zLmZvcm1hdCB8fCBnbC5SR0JBO1xuICB2YXIgZm9ybWF0VHlwZSA9IGdldEZvcm1hdEFuZFR5cGVGb3JJbnRlcm5hbEZvcm1hdChpbnRlcm5hbEZvcm1hdCk7XG4gIHZhciBmb3JtYXQgPSBvcHRpb25zLmZvcm1hdCB8fCBmb3JtYXRUeXBlLmZvcm1hdDtcbiAgdmFyIHR5cGUgPSBvcHRpb25zLnR5cGUgfHwgZ2wuVU5TSUdORURfQllURTtcbiAgdmFyIHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0IHx8IGdsLlRFWFRVUkVfMkQ7XG4gIGlmICh0YXJnZXQgIT09IGdsLlRFWFRVUkVfQ1VCRV9NQVApIHtcbiAgICB0aHJvdyBcInRhcmdldCBtdXN0IGJlIFRFWFRVUkVfQ1VCRV9NQVBcIjtcbiAgfVxuICBzZXRUZXh0dXJlVG8xUGl4ZWxDb2xvcihnbCwgdGV4LCBvcHRpb25zKTtcbiAgLy8gQmVjYXVzZSBpdCdzIGFzeW5jIHdlIG5lZWQgdG8gY29weSB0aGUgb3B0aW9ucy5cbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICB2YXIgbnVtVG9Mb2FkID0gNjtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICB2YXIgZmFjZXMgPSBnZXRDdWJlRmFjZU9yZGVyKGdsLCBvcHRpb25zKTtcbiAgdmFyIGltZ3MgPSB2b2lkIDA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBmdW5jdGlvbiB1cGxvYWRJbWcoZmFjZVRhcmdldCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXJyLCBpbWcpIHtcbiAgICAgIC0tbnVtVG9Mb2FkO1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBlcnJvcnMucHVzaChlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGltZy53aWR0aCAhPT0gaW1nLmhlaWdodCkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKFwiY3ViZW1hcCBmYWNlIGltZyBpcyBub3QgYSBzcXVhcmU6IFwiICsgaW1nLnNyYyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2F2ZVBhY2tTdGF0ZShnbCwgb3B0aW9ucyk7XG4gICAgICAgICAgZ2wuYmluZFRleHR1cmUodGFyZ2V0LCB0ZXgpO1xuXG4gICAgICAgICAgLy8gU28gYXNzdW1pbmcgdGhpcyBpcyB0aGUgZmlyc3QgaW1hZ2Ugd2Ugbm93IGhhdmUgb25lIGZhY2UgdGhhdCdzIGltZyBzaXplZFxuICAgICAgICAgIC8vIGFuZCA1IGZhY2VzIHRoYXQgYXJlIDF4MSBwaXhlbCBzbyBzaXplIHRoZSBvdGhlciBmYWNlc1xuICAgICAgICAgIGlmIChudW1Ub0xvYWQgPT09IDUpIHtcbiAgICAgICAgICAgIC8vIHVzZSB0aGUgZGVmYXVsdCBvcmRlclxuICAgICAgICAgICAgZ2V0Q3ViZUZhY2VPcmRlcihnbCkuZm9yRWFjaChmdW5jdGlvbiAob3RoZXJUYXJnZXQpIHtcbiAgICAgICAgICAgICAgLy8gU2hvdWxkIHdlIHJlLXVzZSB0aGUgc2FtZSBmYWNlIG9yIGEgY29sb3I/XG4gICAgICAgICAgICAgIGdsLnRleEltYWdlMkQob3RoZXJUYXJnZXQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgZm9ybWF0LCB0eXBlLCBpbWcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsLnRleEltYWdlMkQoZmFjZVRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGltZyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzdG9yZVBhY2tTdGF0ZShnbCwgb3B0aW9ucyk7XG4gICAgICAgICAgaWYgKHNob3VsZEF1dG9tYXRpY2FsbHlTZXRUZXh0dXJlRmlsdGVyaW5nRm9yU2l6ZShvcHRpb25zKSkge1xuICAgICAgICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAodGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG51bVRvTG9hZCA9PT0gMCkge1xuICAgICAgICBjYWxsYmFjayhlcnJvcnMubGVuZ3RoID8gZXJyb3JzIDogdW5kZWZpbmVkLCBpbWdzLCB0ZXgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBpbWdzID0gdXJscy5tYXAoZnVuY3Rpb24gKHVybCwgbmR4KSB7XG4gICAgcmV0dXJuIGxvYWRJbWFnZSh1cmwsIG9wdGlvbnMuY3Jvc3NPcmlnaW4sIHVwbG9hZEltZyhmYWNlc1tuZHhdKSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIExvYWRzIGEgMmQgYXJyYXkgb3IgM2QgdGV4dHVyZSBmcm9tIHVybHMgYXMgc3BlY2lmaWVkIGluIGBvcHRpb25zLnNyY2AuXG4gKiBXaWxsIHNldCB0aGUgdGV4dHVyZSB0byBhIDF4MSBwaXhlbCBjb2xvclxuICogc28gdGhhdCBpdCBpcyB1c2FibGUgaW1tZWRpYXRlbHkgdW5sZXNzIGBvcHRpb24uY29sb3IgPT09IGZhbHNlYC5cbiAqXG4gKiBJZiB0aGUgd2lkdGggYW5kIGhlaWdodCBpcyBub3Qgc3BlY2lmaWVkIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSBmaXJzdFxuICogaW1hZ2UgbG9hZGVkIHdpbGwgYmUgdXNlZC4gTm90ZSB0aGF0IHNpbmNlIGltYWdlcyBhcmUgbG9hZGVkIGFzeW5jXG4gKiB3aGljaCBpbWFnZSBkb3dubG9hZHMgZmlyc3QgaXMgdW5rbm93bi5cbiAqXG4gKiBJZiBhbiBpbWFnZSBpcyBub3QgdGhlIHNhbWUgc2l6ZSBhcyB0aGUgd2lkdGggYW5kIGhlaWdodCBpdCB3aWxsIGJlIHNjYWxlZFxuICogdG8gdGhhdCB3aWR0aCBhbmQgaGVpZ2h0LlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge1dlYkdMVGV4dHVyZX0gdGV4IHRoZSBXZWJHTFRleHR1cmUgdG8gc2V0IHBhcmFtZXRlcnMgZm9yXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBvcHRpb25zIEEgVGV4dHVyZU9wdGlvbnMgb2JqZWN0IHdpdGggd2hhdGV2ZXIgcGFyYW1ldGVycyB5b3Ugd2FudCBzZXQuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRocmVlRFJlYWR5Q2FsbGJhY2t9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiBhbGwgdGhlIGltYWdlcyBoYXZlIGZpbmlzaGVkIGxvYWRpbmcuIGVyciB3aWxsXG4gKiAgICBiZSBub24gbnVsbCBpZiB0aGVyZSB3YXMgYW4gZXJyb3IuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuZnVuY3Rpb24gbG9hZFNsaWNlc0Zyb21VcmxzKGdsLCB0ZXgsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbm9vcDtcbiAgdmFyIHVybHMgPSBvcHRpb25zLnNyYztcbiAgdmFyIGludGVybmFsRm9ybWF0ID0gb3B0aW9ucy5pbnRlcm5hbEZvcm1hdCB8fCBvcHRpb25zLmZvcm1hdCB8fCBnbC5SR0JBO1xuICB2YXIgZm9ybWF0VHlwZSA9IGdldEZvcm1hdEFuZFR5cGVGb3JJbnRlcm5hbEZvcm1hdChpbnRlcm5hbEZvcm1hdCk7XG4gIHZhciBmb3JtYXQgPSBvcHRpb25zLmZvcm1hdCB8fCBmb3JtYXRUeXBlLmZvcm1hdDtcbiAgdmFyIHR5cGUgPSBvcHRpb25zLnR5cGUgfHwgZ2wuVU5TSUdORURfQllURTtcbiAgdmFyIHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0IHx8IGdsLlRFWFRVUkVfMkRfQVJSQVk7XG4gIGlmICh0YXJnZXQgIT09IGdsLlRFWFRVUkVfM0QgJiYgdGFyZ2V0ICE9PSBnbC5URVhUVVJFXzJEX0FSUkFZKSB7XG4gICAgdGhyb3cgXCJ0YXJnZXQgbXVzdCBiZSBURVhUVVJFXzNEIG9yIFRFWFRVUkVfMkRfQVJSQVlcIjtcbiAgfVxuICBzZXRUZXh0dXJlVG8xUGl4ZWxDb2xvcihnbCwgdGV4LCBvcHRpb25zKTtcbiAgLy8gQmVjYXVzZSBpdCdzIGFzeW5jIHdlIG5lZWQgdG8gY29weSB0aGUgb3B0aW9ucy5cbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICB2YXIgbnVtVG9Mb2FkID0gdXJscy5sZW5ndGg7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIGltZ3MgPSB2b2lkIDA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgdmFyIGxldmVsID0gb3B0aW9ucy5sZXZlbCB8fCAwO1xuICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICB2YXIgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gIHZhciBkZXB0aCA9IHVybHMubGVuZ3RoO1xuICB2YXIgZmlyc3RJbWFnZSA9IHRydWU7XG5cbiAgZnVuY3Rpb24gdXBsb2FkSW1nKHNsaWNlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlcnIsIGltZykge1xuICAgICAgLS1udW1Ub0xvYWQ7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzYXZlUGFja1N0YXRlKGdsLCBvcHRpb25zKTtcbiAgICAgICAgZ2wuYmluZFRleHR1cmUodGFyZ2V0LCB0ZXgpO1xuXG4gICAgICAgIGlmIChmaXJzdEltYWdlKSB7XG4gICAgICAgICAgZmlyc3RJbWFnZSA9IGZhbHNlO1xuICAgICAgICAgIHdpZHRoID0gb3B0aW9ucy53aWR0aCB8fCBpbWcud2lkdGg7XG4gICAgICAgICAgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgaW1nLmhlaWdodDtcbiAgICAgICAgICBnbC50ZXhJbWFnZTNEKHRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgMCwgZm9ybWF0LCB0eXBlLCBudWxsKTtcblxuICAgICAgICAgIC8vIHB1dCBpdCBpbiBldmVyeSBzbGljZSBvdGhlcndpc2Ugc29tZSBzbGljZXMgd2lsbCBiZSAwLDAsMCwwXG4gICAgICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCBkZXB0aDsgKytzKSB7XG4gICAgICAgICAgICBnbC50ZXhTdWJJbWFnZTNEKHRhcmdldCwgbGV2ZWwsIDAsIDAsIHMsIHdpZHRoLCBoZWlnaHQsIDEsIGZvcm1hdCwgdHlwZSwgaW1nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHNyYyA9IGltZztcbiAgICAgICAgICBpZiAoaW1nLndpZHRoICE9PSB3aWR0aCB8fCBpbWcuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICAgIC8vIFNpemUgdGhlIGltYWdlIHRvIGZpeFxuICAgICAgICAgICAgc3JjID0gY3R4LmNhbnZhcztcbiAgICAgICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGdsLnRleFN1YkltYWdlM0QodGFyZ2V0LCBsZXZlbCwgMCwgMCwgc2xpY2UsIHdpZHRoLCBoZWlnaHQsIDEsIGZvcm1hdCwgdHlwZSwgc3JjKTtcblxuICAgICAgICAgIC8vIGZyZWUgdGhlIGNhbnZhcyBtZW1vcnlcbiAgICAgICAgICBpZiAoc3JjID09PSBjdHguY2FudmFzKSB7XG4gICAgICAgICAgICBjdHguY2FudmFzLndpZHRoID0gMDtcbiAgICAgICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXN0b3JlUGFja1N0YXRlKGdsLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKHNob3VsZEF1dG9tYXRpY2FsbHlTZXRUZXh0dXJlRmlsdGVyaW5nRm9yU2l6ZShvcHRpb25zKSkge1xuICAgICAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG51bVRvTG9hZCA9PT0gMCkge1xuICAgICAgICBjYWxsYmFjayhlcnJvcnMubGVuZ3RoID8gZXJyb3JzIDogdW5kZWZpbmVkLCBpbWdzLCB0ZXgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBpbWdzID0gdXJscy5tYXAoZnVuY3Rpb24gKHVybCwgbmR4KSB7XG4gICAgcmV0dXJuIGxvYWRJbWFnZSh1cmwsIG9wdGlvbnMuY3Jvc3NPcmlnaW4sIHVwbG9hZEltZyhuZHgpKTtcbiAgfSk7XG59XG5cbi8qKlxuICogU2V0cyBhIHRleHR1cmUgZnJvbSBhbiBhcnJheSBvciB0eXBlZCBhcnJheS4gSWYgdGhlIHdpZHRoIG9yIGhlaWdodCBpcyBub3QgcHJvdmlkZWQgd2lsbCBhdHRlbXB0IHRvXG4gKiBndWVzcyB0aGUgc2l6ZS4gU2VlIHtAbGluayBtb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30uXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtXZWJHTFRleHR1cmV9IHRleCB0aGUgV2ViR0xUZXh0dXJlIHRvIHNldCBwYXJhbWV0ZXJzIGZvclxuICogQHBhcmFtIHsobnVtYmVyW118QXJyYXlCdWZmZXJWaWV3KX0gc3JjIEFuIGFycmF5IG9yIHR5cGVkIGFycnkgd2l0aCB0ZXh0dXJlIGRhdGEuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBbb3B0aW9uc10gQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqICAgVGhpcyBpcyBvZnRlbiB0aGUgc2FtZSBvcHRpb25zIHlvdSBwYXNzZWQgaW4gd2hlbiB5b3UgY3JlYXRlZCB0aGUgdGV4dHVyZS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICovXG5mdW5jdGlvbiBzZXRUZXh0dXJlRnJvbUFycmF5KGdsLCB0ZXgsIHNyYywgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCBkZWZhdWx0cy50ZXh0dXJlT3B0aW9ucztcbiAgdmFyIHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0IHx8IGdsLlRFWFRVUkVfMkQ7XG4gIGdsLmJpbmRUZXh0dXJlKHRhcmdldCwgdGV4KTtcbiAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgdmFyIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuICB2YXIgZGVwdGggPSBvcHRpb25zLmRlcHRoO1xuICB2YXIgbGV2ZWwgPSBvcHRpb25zLmxldmVsIHx8IDA7XG4gIHZhciBpbnRlcm5hbEZvcm1hdCA9IG9wdGlvbnMuaW50ZXJuYWxGb3JtYXQgfHwgb3B0aW9ucy5mb3JtYXQgfHwgZ2wuUkdCQTtcbiAgdmFyIGZvcm1hdFR5cGUgPSBnZXRGb3JtYXRBbmRUeXBlRm9ySW50ZXJuYWxGb3JtYXQoaW50ZXJuYWxGb3JtYXQpO1xuICB2YXIgZm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQgfHwgZm9ybWF0VHlwZS5mb3JtYXQ7XG4gIHZhciB0eXBlID0gb3B0aW9ucy50eXBlIHx8IGdldFRleHR1cmVUeXBlRm9yQXJyYXlUeXBlKGdsLCBzcmMsIGZvcm1hdFR5cGUudHlwZSk7XG4gIGlmICghaXNBcnJheUJ1ZmZlcihzcmMpKSB7XG4gICAgdmFyIFR5cGUgPSB0eXBlZEFycmF5cy5nZXRUeXBlZEFycmF5VHlwZUZvckdMVHlwZSh0eXBlKTtcbiAgICBzcmMgPSBuZXcgVHlwZShzcmMpO1xuICB9IGVsc2Uge1xuICAgIGlmIChzcmMgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSkge1xuICAgICAgc3JjID0gbmV3IFVpbnQ4QXJyYXkoc3JjLmJ1ZmZlcik7XG4gICAgfVxuICB9XG4gIHZhciBieXRlc1BlckVsZW1lbnQgPSBnZXRCeXRlc1BlckVsZW1lbnRGb3JJbnRlcm5hbEZvcm1hdChpbnRlcm5hbEZvcm1hdCwgdHlwZSk7XG4gIHZhciBudW1FbGVtZW50cyA9IHNyYy5ieXRlTGVuZ3RoIC8gYnl0ZXNQZXJFbGVtZW50OyAvLyBUT0RPOiBjaGVjayBVTlBBQ0tfQUxJR05NRU5UP1xuICBpZiAobnVtRWxlbWVudHMgJSAxKSB7XG4gICAgdGhyb3cgXCJsZW5ndGggd3Jvbmcgc2l6ZSBmb3IgZm9ybWF0OiBcIiArIHV0aWxzLmdsRW51bVRvU3RyaW5nKGdsLCBmb3JtYXQpO1xuICB9XG4gIHZhciBkaW1lbnNpb25zID0gdm9pZCAwO1xuICBpZiAodGFyZ2V0ID09PSBnbC5URVhUVVJFXzNEKSB7XG4gICAgaWYgKCF3aWR0aCAmJiAhaGVpZ2h0ICYmICFkZXB0aCkge1xuICAgICAgdmFyIHNpemUgPSBNYXRoLmNicnQobnVtRWxlbWVudHMpO1xuICAgICAgaWYgKHNpemUgJSAxICE9PSAwKSB7XG4gICAgICAgIHRocm93IFwiY2FuJ3QgZ3Vlc3MgY3ViZSBzaXplIG9mIGFycmF5IG9mIG51bUVsZW1lbnRzOiBcIiArIG51bUVsZW1lbnRzO1xuICAgICAgfVxuICAgICAgd2lkdGggPSBzaXplO1xuICAgICAgaGVpZ2h0ID0gc2l6ZTtcbiAgICAgIGRlcHRoID0gc2l6ZTtcbiAgICB9IGVsc2UgaWYgKHdpZHRoICYmICghaGVpZ2h0IHx8ICFkZXB0aCkpIHtcbiAgICAgIGRpbWVuc2lvbnMgPSBndWVzc0RpbWVuc2lvbnMoZ2wsIHRhcmdldCwgaGVpZ2h0LCBkZXB0aCwgbnVtRWxlbWVudHMgLyB3aWR0aCk7XG4gICAgICBoZWlnaHQgPSBkaW1lbnNpb25zLndpZHRoO1xuICAgICAgZGVwdGggPSBkaW1lbnNpb25zLmhlaWdodDtcbiAgICB9IGVsc2UgaWYgKGhlaWdodCAmJiAoIXdpZHRoIHx8ICFkZXB0aCkpIHtcbiAgICAgIGRpbWVuc2lvbnMgPSBndWVzc0RpbWVuc2lvbnMoZ2wsIHRhcmdldCwgd2lkdGgsIGRlcHRoLCBudW1FbGVtZW50cyAvIGhlaWdodCk7XG4gICAgICB3aWR0aCA9IGRpbWVuc2lvbnMud2lkdGg7XG4gICAgICBkZXB0aCA9IGRpbWVuc2lvbnMuaGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkaW1lbnNpb25zID0gZ3Vlc3NEaW1lbnNpb25zKGdsLCB0YXJnZXQsIHdpZHRoLCBoZWlnaHQsIG51bUVsZW1lbnRzIC8gZGVwdGgpO1xuICAgICAgd2lkdGggPSBkaW1lbnNpb25zLndpZHRoO1xuICAgICAgaGVpZ2h0ID0gZGltZW5zaW9ucy5oZWlnaHQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRpbWVuc2lvbnMgPSBndWVzc0RpbWVuc2lvbnMoZ2wsIHRhcmdldCwgd2lkdGgsIGhlaWdodCwgbnVtRWxlbWVudHMpO1xuICAgIHdpZHRoID0gZGltZW5zaW9ucy53aWR0aDtcbiAgICBoZWlnaHQgPSBkaW1lbnNpb25zLmhlaWdodDtcbiAgfVxuICBnbC5waXhlbFN0b3JlaShnbC5VTlBBQ0tfQUxJR05NRU5ULCBvcHRpb25zLnVucGFja0FsaWdubWVudCB8fCAxKTtcbiAgc2F2ZVBhY2tTdGF0ZShnbCwgb3B0aW9ucyk7XG4gIGlmICh0YXJnZXQgPT09IGdsLlRFWFRVUkVfQ1VCRV9NQVApIHtcbiAgICB2YXIgZWxlbWVudHNQZXJFbGVtZW50ID0gYnl0ZXNQZXJFbGVtZW50IC8gc3JjLkJZVEVTX1BFUl9FTEVNRU5UO1xuICAgIHZhciBmYWNlU2l6ZSA9IG51bUVsZW1lbnRzIC8gNiAqIGVsZW1lbnRzUGVyRWxlbWVudDtcblxuICAgIGdldEN1YmVGYWNlc1dpdGhOZHgoZ2wsIG9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgIHZhciBvZmZzZXQgPSBmYWNlU2l6ZSAqIGYubmR4O1xuICAgICAgdmFyIGRhdGEgPSBzcmMuc3ViYXJyYXkob2Zmc2V0LCBvZmZzZXQgKyBmYWNlU2l6ZSk7XG4gICAgICBnbC50ZXhJbWFnZTJEKGYuZmFjZSwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCB3aWR0aCwgaGVpZ2h0LCAwLCBmb3JtYXQsIHR5cGUsIGRhdGEpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gZ2wuVEVYVFVSRV8zRCkge1xuICAgIGdsLnRleEltYWdlM0QodGFyZ2V0LCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIHdpZHRoLCBoZWlnaHQsIGRlcHRoLCAwLCBmb3JtYXQsIHR5cGUsIHNyYyk7XG4gIH0gZWxzZSB7XG4gICAgZ2wudGV4SW1hZ2UyRCh0YXJnZXQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgd2lkdGgsIGhlaWdodCwgMCwgZm9ybWF0LCB0eXBlLCBzcmMpO1xuICB9XG4gIHJlc3RvcmVQYWNrU3RhdGUoZ2wsIG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICBkZXB0aDogZGVwdGgsXG4gICAgdHlwZTogdHlwZVxuICB9O1xufVxuXG4vKipcbiAqIFNldHMgYSB0ZXh0dXJlIHdpdGggbm8gY29udGVudHMgb2YgYSBjZXJ0YWluIHNpemUuIEluIG90aGVyIHdvcmRzIGNhbGxzIGBnbC50ZXhJbWFnZTJEYCB3aXRoIGBudWxsYC5cbiAqIFlvdSBtdXN0IHNldCBgb3B0aW9ucy53aWR0aGAgYW5kIGBvcHRpb25zLmhlaWdodGAuXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtXZWJHTFRleHR1cmV9IHRleCB0aGUgV2ViR0xUZXh0dXJlIHRvIHNldCBwYXJhbWV0ZXJzIGZvclxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30gb3B0aW9ucyBBIFRleHR1cmVPcHRpb25zIG9iamVjdCB3aXRoIHdoYXRldmVyIHBhcmFtZXRlcnMgeW91IHdhbnQgc2V0LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cbmZ1bmN0aW9uIHNldEVtcHR5VGV4dHVyZShnbCwgdGV4LCBvcHRpb25zKSB7XG4gIHZhciB0YXJnZXQgPSBvcHRpb25zLnRhcmdldCB8fCBnbC5URVhUVVJFXzJEO1xuICBnbC5iaW5kVGV4dHVyZSh0YXJnZXQsIHRleCk7XG4gIHZhciBsZXZlbCA9IG9wdGlvbnMubGV2ZWwgfHwgMDtcbiAgdmFyIGludGVybmFsRm9ybWF0ID0gb3B0aW9ucy5pbnRlcm5hbEZvcm1hdCB8fCBvcHRpb25zLmZvcm1hdCB8fCBnbC5SR0JBO1xuICB2YXIgZm9ybWF0VHlwZSA9IGdldEZvcm1hdEFuZFR5cGVGb3JJbnRlcm5hbEZvcm1hdChpbnRlcm5hbEZvcm1hdCk7XG4gIHZhciBmb3JtYXQgPSBvcHRpb25zLmZvcm1hdCB8fCBmb3JtYXRUeXBlLmZvcm1hdDtcbiAgdmFyIHR5cGUgPSBvcHRpb25zLnR5cGUgfHwgZm9ybWF0VHlwZS50eXBlO1xuICBzYXZlUGFja1N0YXRlKGdsLCBvcHRpb25zKTtcbiAgaWYgKHRhcmdldCA9PT0gZ2wuVEVYVFVSRV9DVUJFX01BUCkge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCA2OyArK2lpKSB7XG4gICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWCArIGlpLCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIG9wdGlvbnMud2lkdGgsIG9wdGlvbnMuaGVpZ2h0LCAwLCBmb3JtYXQsIHR5cGUsIG51bGwpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0YXJnZXQgPT09IGdsLlRFWFRVUkVfM0QpIHtcbiAgICBnbC50ZXhJbWFnZTNEKHRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBvcHRpb25zLndpZHRoLCBvcHRpb25zLmhlaWdodCwgb3B0aW9ucy5kZXB0aCwgMCwgZm9ybWF0LCB0eXBlLCBudWxsKTtcbiAgfSBlbHNlIHtcbiAgICBnbC50ZXhJbWFnZTJEKHRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBvcHRpb25zLndpZHRoLCBvcHRpb25zLmhlaWdodCwgMCwgZm9ybWF0LCB0eXBlLCBudWxsKTtcbiAgfVxuICByZXN0b3JlUGFja1N0YXRlKGdsLCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdGV4dHVyZSBiYXNlZCBvbiB0aGUgb3B0aW9ucyBwYXNzZWQgaW4uXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30gW29wdGlvbnNdIEEgVGV4dHVyZU9wdGlvbnMgb2JqZWN0IHdpdGggd2hhdGV2ZXIgcGFyYW1ldGVycyB5b3Ugd2FudCBzZXQuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVSZWFkeUNhbGxiYWNrfSBbY2FsbGJhY2tdIEEgY2FsbGJhY2sgY2FsbGVkIHdoZW4gYW4gaW1hZ2UgaGFzIGJlZW4gZG93bmxvYWRlZCBhbmQgdXBsb2FkZWQgdG8gdGhlIHRleHR1cmUuXG4gKiBAcmV0dXJuIHtXZWJHTFRleHR1cmV9IHRoZSBjcmVhdGVkIHRleHR1cmUuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZShnbCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBub29wO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCBkZWZhdWx0cy50ZXh0dXJlT3B0aW9ucztcbiAgdmFyIHRleCA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgdmFyIHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0IHx8IGdsLlRFWFRVUkVfMkQ7XG4gIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgMTtcbiAgdmFyIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IDE7XG4gIHZhciBpbnRlcm5hbEZvcm1hdCA9IG9wdGlvbnMuaW50ZXJuYWxGb3JtYXQgfHwgZ2wuUkdCQTtcbiAgdmFyIGZvcm1hdFR5cGUgPSBnZXRGb3JtYXRBbmRUeXBlRm9ySW50ZXJuYWxGb3JtYXQoaW50ZXJuYWxGb3JtYXQpO1xuICB2YXIgdHlwZSA9IG9wdGlvbnMudHlwZSB8fCBmb3JtYXRUeXBlLnR5cGU7XG4gIGdsLmJpbmRUZXh0dXJlKHRhcmdldCwgdGV4KTtcbiAgaWYgKHRhcmdldCA9PT0gZ2wuVEVYVFVSRV9DVUJFX01BUCkge1xuICAgIC8vIHRoaXMgc2hvdWxkIGhhdmUgYmVlbiB0aGUgZGVmYXVsdCBmb3IgQ1VCRU1BUFMgOihcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKHRhcmdldCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkodGFyZ2V0LCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gIH1cbiAgdmFyIHNyYyA9IG9wdGlvbnMuc3JjO1xuICBpZiAoc3JjKSB7XG4gICAgaWYgKHR5cGVvZiBzcmMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgc3JjID0gc3JjKGdsLCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzcmMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGxvYWRUZXh0dXJlRnJvbVVybChnbCwgdGV4LCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5QnVmZmVyKHNyYykgfHwgQXJyYXkuaXNBcnJheShzcmMpICYmICh0eXBlb2Ygc3JjWzBdID09PSAnbnVtYmVyJyB8fCBBcnJheS5pc0FycmF5KHNyY1swXSkgfHwgaXNBcnJheUJ1ZmZlcihzcmNbMF0pKSkge1xuICAgICAgdmFyIGRpbWVuc2lvbnMgPSBzZXRUZXh0dXJlRnJvbUFycmF5KGdsLCB0ZXgsIHNyYywgb3B0aW9ucyk7XG4gICAgICB3aWR0aCA9IGRpbWVuc2lvbnMud2lkdGg7XG4gICAgICBoZWlnaHQgPSBkaW1lbnNpb25zLmhlaWdodDtcbiAgICAgIHR5cGUgPSBkaW1lbnNpb25zLnR5cGU7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNyYykgJiYgdHlwZW9mIHNyY1swXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0YXJnZXQgPT09IGdsLlRFWFRVUkVfQ1VCRV9NQVApIHtcbiAgICAgICAgbG9hZEN1YmVtYXBGcm9tVXJscyhnbCwgdGV4LCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2FkU2xpY2VzRnJvbVVybHMoZ2wsIHRleCwgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3JjIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHNldFRleHR1cmVGcm9tRWxlbWVudChnbCwgdGV4LCBzcmMsIG9wdGlvbnMpO1xuICAgICAgd2lkdGggPSBzcmMud2lkdGg7XG4gICAgICBoZWlnaHQgPSBzcmMuaGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBcInVuc3VwcG9ydGVkIHNyYyB0eXBlXCI7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHNldEVtcHR5VGV4dHVyZShnbCwgdGV4LCBvcHRpb25zKTtcbiAgfVxuICBpZiAoc2hvdWxkQXV0b21hdGljYWxseVNldFRleHR1cmVGaWx0ZXJpbmdGb3JTaXplKG9wdGlvbnMpKSB7XG4gICAgc2V0VGV4dHVyZUZpbHRlcmluZ0ZvclNpemUoZ2wsIHRleCwgb3B0aW9ucywgd2lkdGgsIGhlaWdodCwgaW50ZXJuYWxGb3JtYXQsIHR5cGUpO1xuICB9XG4gIHNldFRleHR1cmVQYXJhbWV0ZXJzKGdsLCB0ZXgsIG9wdGlvbnMpO1xuICByZXR1cm4gdGV4O1xufVxuXG4vKipcbiAqIFJlc2l6ZXMgYSB0ZXh0dXJlIGJhc2VkIG9uIHRoZSBvcHRpb25zIHBhc3NlZCBpbi5cbiAqXG4gKiBOb3RlOiBUaGlzIGlzIG5vdCBhIGdlbmVyaWMgcmVzaXplIGFueXRoaW5nIGZ1bmN0aW9uLlxuICogSXQncyBtb3N0bHkgdXNlZCBieSB7QGxpbmsgbW9kdWxlOnR3Z2wucmVzaXplRnJhbWVidWZmZXJJbmZvfVxuICogSXQgd2lsbCB1c2UgYG9wdGlvbnMuc3JjYCBpZiBpdCBleGlzdHMgdG8gdHJ5IHRvIGRldGVybWluZSBhIGB0eXBlYFxuICogb3RoZXJ3aXNlIGl0IHdpbGwgYXNzdW1lIGBnbC5VTlNJR05FRF9CWVRFYC4gTm8gZGF0YSBpcyBwcm92aWRlZFxuICogZm9yIHRoZSB0ZXh0dXJlLiBUZXh0dXJlIHBhcmFtZXRlcnMgd2lsbCBiZSBzZXQgYWNjb3JkaW5nbHlcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtXZWJHTFRleHR1cmV9IHRleCB0aGUgdGV4dHVyZSB0byByZXNpemVcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IG9wdGlvbnMgQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2lkdGhdIHRoZSBuZXcgd2lkdGguIElmIG5vdCBwYXNzZWQgaW4gd2lsbCB1c2UgYG9wdGlvbnMud2lkdGhgXG4gKiBAcGFyYW0ge251bWJlcn0gW2hlaWdodF0gdGhlIG5ldyBoZWlnaHQuIElmIG5vdCBwYXNzZWQgaW4gd2lsbCB1c2UgYG9wdGlvbnMuaGVpZ2h0YFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cbmZ1bmN0aW9uIHJlc2l6ZVRleHR1cmUoZ2wsIHRleCwgb3B0aW9ucywgd2lkdGgsIGhlaWdodCkge1xuICB3aWR0aCA9IHdpZHRoIHx8IG9wdGlvbnMud2lkdGg7XG4gIGhlaWdodCA9IGhlaWdodCB8fCBvcHRpb25zLmhlaWdodDtcbiAgdmFyIHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0IHx8IGdsLlRFWFRVUkVfMkQ7XG4gIGdsLmJpbmRUZXh0dXJlKHRhcmdldCwgdGV4KTtcbiAgdmFyIGxldmVsID0gb3B0aW9ucy5sZXZlbCB8fCAwO1xuICB2YXIgaW50ZXJuYWxGb3JtYXQgPSBvcHRpb25zLmludGVybmFsRm9ybWF0IHx8IG9wdGlvbnMuZm9ybWF0IHx8IGdsLlJHQkE7XG4gIHZhciBmb3JtYXRUeXBlID0gZ2V0Rm9ybWF0QW5kVHlwZUZvckludGVybmFsRm9ybWF0KGludGVybmFsRm9ybWF0KTtcbiAgdmFyIGZvcm1hdCA9IG9wdGlvbnMuZm9ybWF0IHx8IGZvcm1hdFR5cGUuZm9ybWF0O1xuICB2YXIgdHlwZSA9IHZvaWQgMDtcbiAgdmFyIHNyYyA9IG9wdGlvbnMuc3JjO1xuICBpZiAoIXNyYykge1xuICAgIHR5cGUgPSBvcHRpb25zLnR5cGUgfHwgZm9ybWF0VHlwZS50eXBlO1xuICB9IGVsc2UgaWYgKGlzQXJyYXlCdWZmZXIoc3JjKSB8fCBBcnJheS5pc0FycmF5KHNyYykgJiYgdHlwZW9mIHNyY1swXSA9PT0gJ251bWJlcicpIHtcbiAgICB0eXBlID0gb3B0aW9ucy50eXBlIHx8IGdldFRleHR1cmVUeXBlRm9yQXJyYXlUeXBlKGdsLCBzcmMsIGZvcm1hdFR5cGUudHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgdHlwZSA9IG9wdGlvbnMudHlwZSB8fCBmb3JtYXRUeXBlLnR5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCA9PT0gZ2wuVEVYVFVSRV9DVUJFX01BUCkge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCA2OyArK2lpKSB7XG4gICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWCArIGlpLCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIHdpZHRoLCBoZWlnaHQsIDAsIGZvcm1hdCwgdHlwZSwgbnVsbCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGdsLnRleEltYWdlMkQodGFyZ2V0LCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIHdpZHRoLCBoZWlnaHQsIDAsIGZvcm1hdCwgdHlwZSwgbnVsbCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHNyYyBpcyBhbiBhc3luYyByZXF1ZXN0LlxuICogaWYgc3JjIGlzIGEgc3RyaW5nIHdlJ3JlIGdvaW5nIHRvIGRvd25sb2FkIGFuIGltYWdlXG4gKiBpZiBzcmMgaXMgYW4gYXJyYXkgb2Ygc3RyaW5ncyB3ZSdyZSBnb2luZyB0byBkb3dubG9hZCBjdWJlbWFwIGltYWdlc1xuICogQHBhcmFtIHsqfSBzcmMgVGhlIHNyYyBmcm9tIGEgVGV4dHVyZU9wdGlvbnNcbiAqIEByZXR1cm5zIHtib29sfSB0cnVlIGlmIHNyYyBpcyBhc3luYy5cbiAqL1xuZnVuY3Rpb24gaXNBc3luY1NyYyhzcmMpIHtcbiAgcmV0dXJuIHR5cGVvZiBzcmMgPT09ICdzdHJpbmcnIHx8IEFycmF5LmlzQXJyYXkoc3JjKSAmJiB0eXBlb2Ygc3JjWzBdID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYnVuY2ggb2YgdGV4dHVyZXMgYmFzZWQgb24gdGhlIHBhc3NlZCBpbiBvcHRpb25zLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIGNvbnN0IHRleHR1cmVzID0gdHdnbC5jcmVhdGVUZXh0dXJlcyhnbCwge1xuICogICAgICAgLy8gYSBwb3dlciBvZiAyIGltYWdlXG4gKiAgICAgICBoZnRJY29uOiB7IHNyYzogXCJpbWFnZXMvaGZ0LWljb24tMTYucG5nXCIsIG1hZzogZ2wuTkVBUkVTVCB9LFxuICogICAgICAgLy8gYSBub24tcG93ZXIgb2YgMiBpbWFnZVxuICogICAgICAgY2xvdmVyOiB7IHNyYzogXCJpbWFnZXMvY2xvdmVyLmpwZ1wiIH0sXG4gKiAgICAgICAvLyBGcm9tIGEgY2FudmFzXG4gKiAgICAgICBmcm9tQ2FudmFzOiB7IHNyYzogY3R4LmNhbnZhcyB9LFxuICogICAgICAgLy8gQSBjdWJlbWFwIGZyb20gNiBpbWFnZXNcbiAqICAgICAgIHlva29oYW1hOiB7XG4gKiAgICAgICAgIHRhcmdldDogZ2wuVEVYVFVSRV9DVUJFX01BUCxcbiAqICAgICAgICAgc3JjOiBbXG4gKiAgICAgICAgICAgJ2ltYWdlcy95b2tvaGFtYS9wb3N4LmpwZycsXG4gKiAgICAgICAgICAgJ2ltYWdlcy95b2tvaGFtYS9uZWd4LmpwZycsXG4gKiAgICAgICAgICAgJ2ltYWdlcy95b2tvaGFtYS9wb3N5LmpwZycsXG4gKiAgICAgICAgICAgJ2ltYWdlcy95b2tvaGFtYS9uZWd5LmpwZycsXG4gKiAgICAgICAgICAgJ2ltYWdlcy95b2tvaGFtYS9wb3N6LmpwZycsXG4gKiAgICAgICAgICAgJ2ltYWdlcy95b2tvaGFtYS9uZWd6LmpwZycsXG4gKiAgICAgICAgIF0sXG4gKiAgICAgICB9LFxuICogICAgICAgLy8gQSBjdWJlbWFwIGZyb20gMSBpbWFnZSAoY2FuIGJlIDF4NiwgMngzLCAzeDIsIDZ4MSlcbiAqICAgICAgIGdvbGRlbmdhdGU6IHtcbiAqICAgICAgICAgdGFyZ2V0OiBnbC5URVhUVVJFX0NVQkVfTUFQLFxuICogICAgICAgICBzcmM6ICdpbWFnZXMvZ29sZGVuZ2F0ZS5qcGcnLFxuICogICAgICAgfSxcbiAqICAgICAgIC8vIEEgMngyIHBpeGVsIHRleHR1cmUgZnJvbSBhIEphdmFTY3JpcHQgYXJyYXlcbiAqICAgICAgIGNoZWNrZXI6IHtcbiAqICAgICAgICAgbWFnOiBnbC5ORUFSRVNULFxuICogICAgICAgICBtaW46IGdsLkxJTkVBUixcbiAqICAgICAgICAgc3JjOiBbXG4gKiAgICAgICAgICAgMjU1LDI1NSwyNTUsMjU1LFxuICogICAgICAgICAgIDE5MiwxOTIsMTkyLDI1NSxcbiAqICAgICAgICAgICAxOTIsMTkyLDE5MiwyNTUsXG4gKiAgICAgICAgICAgMjU1LDI1NSwyNTUsMjU1LFxuICogICAgICAgICBdLFxuICogICAgICAgfSxcbiAqICAgICAgIC8vIGEgMXgyIHBpeGVsIHRleHR1cmUgZnJvbSBhIHR5cGVkIGFycmF5LlxuICogICAgICAgc3RyaXBlOiB7XG4gKiAgICAgICAgIG1hZzogZ2wuTkVBUkVTVCxcbiAqICAgICAgICAgbWluOiBnbC5MSU5FQVIsXG4gKiAgICAgICAgIGZvcm1hdDogZ2wuTFVNSU5BTkNFLFxuICogICAgICAgICBzcmM6IG5ldyBVaW50OEFycmF5KFtcbiAqICAgICAgICAgICAyNTUsXG4gKiAgICAgICAgICAgMTI4LFxuICogICAgICAgICAgIDI1NSxcbiAqICAgICAgICAgICAxMjgsXG4gKiAgICAgICAgICAgMjU1LFxuICogICAgICAgICAgIDEyOCxcbiAqICAgICAgICAgICAyNTUsXG4gKiAgICAgICAgICAgMTI4LFxuICogICAgICAgICBdKSxcbiAqICAgICAgICAgd2lkdGg6IDEsXG4gKiAgICAgICB9LFxuICogICAgIH0pO1xuICpcbiAqIE5vd1xuICpcbiAqICogICBgdGV4dHVyZXMuaGZ0SWNvbmAgd2lsbCBiZSBhIDJkIHRleHR1cmVcbiAqICogICBgdGV4dHVyZXMuY2xvdmVyYCB3aWxsIGJlIGEgMmQgdGV4dHVyZVxuICogKiAgIGB0ZXh0dXJlcy5mcm9tQ2FudmFzYCB3aWxsIGJlIGEgMmQgdGV4dHVyZVxuICogKiAgIGB0ZXh0dXJlcy55b2hvaGFtYWAgd2lsbCBiZSBhIGN1YmVtYXAgdGV4dHVyZVxuICogKiAgIGB0ZXh0dXJlcy5nb2xkZW5nYXRlYCB3aWxsIGJlIGEgY3ViZW1hcCB0ZXh0dXJlXG4gKiAqICAgYHRleHR1cmVzLmNoZWNrZXJgIHdpbGwgYmUgYSAyZCB0ZXh0dXJlXG4gKiAqICAgYHRleHR1cmVzLnN0cmlwZWAgd2lsbCBiZSBhIDJkIHRleHR1cmVcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZyxtb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9ucz59IG9wdGlvbnMgQSBvYmplY3Qgb2YgVGV4dHVyZU9wdGlvbnMgb25lIHBlciB0ZXh0dXJlLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlc1JlYWR5Q2FsbGJhY2t9IFtjYWxsYmFja10gQSBjYWxsYmFjayBjYWxsZWQgd2hlbiBhbGwgdGV4dHVyZXMgaGF2ZSBiZWVuIGRvd25sb2FkZWQuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZyxXZWJHTFRleHR1cmU+fSB0aGUgY3JlYXRlZCB0ZXh0dXJlcyBieSBuYW1lXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZXMoZ2wsIHRleHR1cmVPcHRpb25zLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IG5vb3A7XG4gIHZhciBudW1Eb3dubG9hZGluZyA9IDA7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIHRleHR1cmVzID0ge307XG4gIHZhciBpbWFnZXMgPSB7fTtcblxuICBmdW5jdGlvbiBjYWxsQ2FsbGJhY2tJZlJlYWR5KCkge1xuICAgIGlmIChudW1Eb3dubG9hZGluZyA9PT0gMCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9ycy5sZW5ndGggPyBlcnJvcnMgOiB1bmRlZmluZWQsIHRleHR1cmVzLCBpbWFnZXMpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXModGV4dHVyZU9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRleHR1cmVPcHRpb25zW25hbWVdO1xuICAgIHZhciBvbkxvYWRGbiA9IHZvaWQgMDtcbiAgICBpZiAoaXNBc3luY1NyYyhvcHRpb25zLnNyYykpIHtcbiAgICAgIG9uTG9hZEZuID0gZnVuY3Rpb24gb25Mb2FkRm4oZXJyLCB0ZXgsIGltZykge1xuICAgICAgICBpbWFnZXNbbmFtZV0gPSBpbWc7XG4gICAgICAgIC0tbnVtRG93bmxvYWRpbmc7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaChlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGNhbGxDYWxsYmFja0lmUmVhZHkoKTtcbiAgICAgIH07XG4gICAgICArK251bURvd25sb2FkaW5nO1xuICAgIH1cbiAgICB0ZXh0dXJlc1tuYW1lXSA9IGNyZWF0ZVRleHR1cmUoZ2wsIG9wdGlvbnMsIG9uTG9hZEZuKTtcbiAgfSk7XG5cbiAgLy8gcXVldWUgdGhlIGNhbGxiYWNrIGlmIHRoZXJlIGFyZSBubyBpbWFnZXMgdG8gZG93bmxvYWQuXG4gIC8vIFdlIGRvIHRoaXMgYmVjYXVzZSBpZiB5b3VyIGNvZGUgaXMgc3RydWN0dXJlZCB0byB3YWl0IGZvclxuICAvLyBpbWFnZXMgdG8gZG93bmxvYWQgYnV0IHRoZW4geW91IGNvbW1lbnQgb3V0IGFsbCB0aGUgYXN5bmNcbiAgLy8gaW1hZ2VzIHlvdXIgY29kZSB3b3VsZCBicmVhay5cbiAgY2FsbENhbGxiYWNrSWZSZWFkeSgpO1xuXG4gIHJldHVybiB0ZXh0dXJlcztcbn1cblxuLy8gVXNpbmcgcXVvdGVzIHByZXZlbnRzIFVnbGlmeSBmcm9tIGNoYW5naW5nIHRoZSBuYW1lcy5cbi8vIE5vIHNwZWVkIGRpZmYgQUZBSUNULlxuZXhwb3J0cy5zZXRUZXh0dXJlRGVmYXVsdHNfID0gc2V0RGVmYXVsdHM7XG5leHBvcnRzLmNyZWF0ZVNhbXBsZXIgPSBjcmVhdGVTYW1wbGVyO1xuZXhwb3J0cy5jcmVhdGVTYW1wbGVycyA9IGNyZWF0ZVNhbXBsZXJzO1xuZXhwb3J0cy5zZXRTYW1wbGVyUGFyYW1ldGVycyA9IHNldFNhbXBsZXJQYXJhbWV0ZXJzO1xuZXhwb3J0cy5jcmVhdGVUZXh0dXJlID0gY3JlYXRlVGV4dHVyZTtcbmV4cG9ydHMuc2V0RW1wdHlUZXh0dXJlID0gc2V0RW1wdHlUZXh0dXJlO1xuZXhwb3J0cy5zZXRUZXh0dXJlRnJvbUFycmF5ID0gc2V0VGV4dHVyZUZyb21BcnJheTtcbmV4cG9ydHMubG9hZFRleHR1cmVGcm9tVXJsID0gbG9hZFRleHR1cmVGcm9tVXJsO1xuZXhwb3J0cy5zZXRUZXh0dXJlRnJvbUVsZW1lbnQgPSBzZXRUZXh0dXJlRnJvbUVsZW1lbnQ7XG5leHBvcnRzLnNldFRleHR1cmVGaWx0ZXJpbmdGb3JTaXplID0gc2V0VGV4dHVyZUZpbHRlcmluZ0ZvclNpemU7XG5leHBvcnRzLnNldFRleHR1cmVQYXJhbWV0ZXJzID0gc2V0VGV4dHVyZVBhcmFtZXRlcnM7XG5leHBvcnRzLnNldERlZmF1bHRUZXh0dXJlQ29sb3IgPSBzZXREZWZhdWx0VGV4dHVyZUNvbG9yO1xuZXhwb3J0cy5jcmVhdGVUZXh0dXJlcyA9IGNyZWF0ZVRleHR1cmVzO1xuZXhwb3J0cy5yZXNpemVUZXh0dXJlID0gcmVzaXplVGV4dHVyZTtcbmV4cG9ydHMuZ2V0TnVtQ29tcG9uZW50c0ZvckZvcm1hdCA9IGdldE51bUNvbXBvbmVudHNGb3JGb3JtYXQ7XG5leHBvcnRzLmdldEJ5dGVzUGVyRWxlbWVudEZvckludGVybmFsRm9ybWF0ID0gZ2V0Qnl0ZXNQZXJFbGVtZW50Rm9ySW50ZXJuYWxGb3JtYXQ7XG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy50cmFuc3Bvc2UgPSBleHBvcnRzLnRyYW5zbGF0aW9uID0gZXhwb3J0cy50cmFuc2xhdGUgPSBleHBvcnRzLnRyYW5zZm9ybVBvaW50ID0gZXhwb3J0cy50cmFuc2Zvcm1Ob3JtYWwgPSBleHBvcnRzLnRyYW5zZm9ybURpcmVjdGlvbiA9IGV4cG9ydHMuc2V0VHJhbnNsYXRpb24gPSBleHBvcnRzLnNldERlZmF1bHRUeXBlID0gZXhwb3J0cy5zZXRBeGlzID0gZXhwb3J0cy5zY2FsaW5nID0gZXhwb3J0cy5zY2FsZSA9IGV4cG9ydHMucm90YXRpb25aID0gZXhwb3J0cy5yb3RhdGlvblkgPSBleHBvcnRzLnJvdGF0aW9uWCA9IGV4cG9ydHMucm90YXRlWiA9IGV4cG9ydHMucm90YXRlWSA9IGV4cG9ydHMucm90YXRlWCA9IGV4cG9ydHMucGVyc3BlY3RpdmUgPSBleHBvcnRzLm9ydGhvID0gZXhwb3J0cy5uZWdhdGUgPSBleHBvcnRzLm11bHRpcGx5ID0gZXhwb3J0cy5sb29rQXQgPSBleHBvcnRzLmludmVyc2UgPSBleHBvcnRzLmlkZW50aXR5ID0gZXhwb3J0cy5nZXRUcmFuc2xhdGlvbiA9IGV4cG9ydHMuZ2V0QXhpcyA9IGV4cG9ydHMuZnJ1c3R1bSA9IGV4cG9ydHMuY29weSA9IGV4cG9ydHMuYXhpc1JvdGF0aW9uID0gZXhwb3J0cy5heGlzUm90YXRlID0gdW5kZWZpbmVkO1xuXG52YXIgX3YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgdjMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8qKlxuICogNHg0IE1hdHJpeCBtYXRoIG1hdGggZnVuY3Rpb25zLlxuICpcbiAqIEFsbW9zdCBhbGwgZnVuY3Rpb25zIHRha2UgYW4gb3B0aW9uYWwgYGRzdGAgYXJndW1lbnQuIElmIGl0IGlzIG5vdCBwYXNzZWQgaW4gdGhlXG4gKiBmdW5jdGlvbnMgd2lsbCBjcmVhdGUgYSBuZXcgbWF0cml4LiBJbiBvdGhlciB3b3JkcyB5b3UgY2FuIGRvIHRoaXNcbiAqXG4gKiAgICAgY29uc3QgbWF0ID0gbTQudHJhbnNsYXRpb24oWzEsIDIsIDNdKTsgIC8vIENyZWF0ZXMgYSBuZXcgdHJhbnNsYXRpb24gbWF0cml4XG4gKlxuICogb3JcbiAqXG4gKiAgICAgY29uc3QgbWF0ID0gbTQuY3JlYXRlKCk7XG4gKiAgICAgbTQudHJhbnNsYXRpb24oWzEsIDIsIDNdLCBtYXQpOyAgLy8gUHV0cyB0cmFuc2xhdGlvbiBtYXRyaXggaW4gbWF0LlxuICpcbiAqIFRoZSBmaXJzdCBzdHlsZSBpcyBvZnRlbiBlYXNpZXIgYnV0IGRlcGVuZGluZyBvbiB3aGVyZSBpdCdzIHVzZWQgaXQgZ2VuZXJhdGVzIGdhcmJhZ2Ugd2hlcmVcbiAqIGFzIHRoZXJlIGlzIGFsbW9zdCBuZXZlciBhbGxvY2F0aW9uIHdpdGggdGhlIHNlY29uZCBzdHlsZS5cbiAqXG4gKiBJdCBpcyBhbHdheXMgc2F2ZSB0byBwYXNzIGFueSBtYXRyaXggYXMgdGhlIGRlc3RpbmF0aW9uLiBTbyBmb3IgZXhhbXBsZVxuICpcbiAqICAgICBjb25zdCBtYXQgPSBtNC5pZGVudGl0eSgpO1xuICogICAgIGNvbnN0IHRyYW5zID0gbTQudHJhbnNsYXRpb24oWzEsIDIsIDNdKTtcbiAqICAgICBtNC5tdWx0aXBseShtYXQsIHRyYW5zLCBtYXQpOyAgLy8gTXVsdGlwbGllcyBtYXQgKiB0cmFucyBhbmQgcHV0cyByZXN1bHQgaW4gbWF0LlxuICpcbiAqIEBtb2R1bGUgdHdnbC9tNFxuICovXG52YXIgTWF0VHlwZSA9IEZsb2F0MzJBcnJheTsgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBDb3B5cmlnaHQgMjAxNSwgR3JlZ2cgVGF2YXJlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIG1ldDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGRpc3RyaWJ1dGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdyZWdnIFRhdmFyZXMuIG5vciB0aGUgbmFtZXMgb2YgaGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxudmFyIHRlbXBWM2EgPSB2My5jcmVhdGUoKTtcbnZhciB0ZW1wVjNiID0gdjMuY3JlYXRlKCk7XG52YXIgdGVtcFYzYyA9IHYzLmNyZWF0ZSgpO1xuXG4vKipcbiAqIEEgSmF2YVNjcmlwdCBhcnJheSB3aXRoIDE2IHZhbHVlcyBvciBhIEZsb2F0MzJBcnJheSB3aXRoIDE2IHZhbHVlcy5cbiAqIFdoZW4gY3JlYXRlZCBieSB0aGUgbGlicmFyeSB3aWxsIGNyZWF0ZSB0aGUgZGVmYXVsdCB0eXBlIHdoaWNoIGlzIGBGbG9hdDMyQXJyYXlgXG4gKiBidXQgY2FuIGJlIHNldCBieSBjYWxsaW5nIHtAbGluayBtb2R1bGU6dHdnbC9tNC5zZXREZWZhdWx0VHlwZX0uXG4gKiBAdHlwZWRlZiB7KG51bWJlcltdfEZsb2F0MzJBcnJheSl9IE1hdDRcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5cbi8qKlxuICogU2V0cyB0aGUgdHlwZSB0aGlzIGxpYnJhcnkgY3JlYXRlcyBmb3IgYSBNYXQ0XG4gKiBAcGFyYW0ge2NvbnN0cnVjdG9yfSBjdG9yIHRoZSBjb25zdHJ1Y3RvciBmb3IgdGhlIHR5cGUuIEVpdGhlciBgRmxvYXQzMkFycmF5YCBvciBgQXJyYXlgXG4gKiBAcmV0dXJuIHtjb25zdHJ1Y3Rvcn0gcHJldmlvdXMgY29uc3RydWN0b3IgZm9yIE1hdDRcbiAqL1xuZnVuY3Rpb24gc2V0RGVmYXVsdFR5cGUoY3Rvcikge1xuICB2YXIgb2xkVHlwZSA9IE1hdFR5cGU7XG4gIE1hdFR5cGUgPSBjdG9yO1xuICByZXR1cm4gb2xkVHlwZTtcbn1cblxuLyoqXG4gKiBOZWdhdGVzIGEgbWF0cml4LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIFRoZSBtYXRyaXguXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm9uZSBuZXcgb25lIGlzIGNyZWF0ZWQuLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gLW0uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gbmVnYXRlKG0sIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuXG4gIGRzdFswXSA9IC1tWzBdO1xuICBkc3RbMV0gPSAtbVsxXTtcbiAgZHN0WzJdID0gLW1bMl07XG4gIGRzdFszXSA9IC1tWzNdO1xuICBkc3RbNF0gPSAtbVs0XTtcbiAgZHN0WzVdID0gLW1bNV07XG4gIGRzdFs2XSA9IC1tWzZdO1xuICBkc3RbN10gPSAtbVs3XTtcbiAgZHN0WzhdID0gLW1bOF07XG4gIGRzdFs5XSA9IC1tWzldO1xuICBkc3RbMTBdID0gLW1bMTBdO1xuICBkc3RbMTFdID0gLW1bMTFdO1xuICBkc3RbMTJdID0gLW1bMTJdO1xuICBkc3RbMTNdID0gLW1bMTNdO1xuICBkc3RbMTRdID0gLW1bMTRdO1xuICBkc3RbMTVdID0gLW1bMTVdO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogQ29waWVzIGEgbWF0cml4LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIFRoZSBtYXRyaXguXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIFRoZSBtYXRyaXguXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBBIGNvcHkgb2YgbS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5mdW5jdGlvbiBjb3B5KG0sIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuXG4gIGRzdFswXSA9IG1bMF07XG4gIGRzdFsxXSA9IG1bMV07XG4gIGRzdFsyXSA9IG1bMl07XG4gIGRzdFszXSA9IG1bM107XG4gIGRzdFs0XSA9IG1bNF07XG4gIGRzdFs1XSA9IG1bNV07XG4gIGRzdFs2XSA9IG1bNl07XG4gIGRzdFs3XSA9IG1bN107XG4gIGRzdFs4XSA9IG1bOF07XG4gIGRzdFs5XSA9IG1bOV07XG4gIGRzdFsxMF0gPSBtWzEwXTtcbiAgZHN0WzExXSA9IG1bMTFdO1xuICBkc3RbMTJdID0gbVsxMl07XG4gIGRzdFsxM10gPSBtWzEzXTtcbiAgZHN0WzE0XSA9IG1bMTRdO1xuICBkc3RbMTVdID0gbVsxNV07XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIG4tYnktbiBpZGVudGl0eSBtYXRyaXguXG4gKlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vbmUgbmV3IG9uZSBpcyBjcmVhdGVkLi5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IEFuIG4tYnktbiBpZGVudGl0eSBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkoZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG5cbiAgZHN0WzBdID0gMTtcbiAgZHN0WzFdID0gMDtcbiAgZHN0WzJdID0gMDtcbiAgZHN0WzNdID0gMDtcbiAgZHN0WzRdID0gMDtcbiAgZHN0WzVdID0gMTtcbiAgZHN0WzZdID0gMDtcbiAgZHN0WzddID0gMDtcbiAgZHN0WzhdID0gMDtcbiAgZHN0WzldID0gMDtcbiAgZHN0WzEwXSA9IDE7XG4gIGRzdFsxMV0gPSAwO1xuICBkc3RbMTJdID0gMDtcbiAgZHN0WzEzXSA9IDA7XG4gIGRzdFsxNF0gPSAwO1xuICBkc3RbMTVdID0gMTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFRha2VzIHRoZSB0cmFuc3Bvc2Ugb2YgYSBtYXRyaXguXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IG0gVGhlIG1hdHJpeC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub25lIG5ldyBvbmUgaXMgY3JlYXRlZC4uXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgdHJhbnNwb3NlIG9mIG0uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gdHJhbnNwb3NlKG0sIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuICBpZiAoZHN0ID09PSBtKSB7XG4gICAgdmFyIHQgPSB2b2lkIDA7XG5cbiAgICB0ID0gbVsxXTtcbiAgICBtWzFdID0gbVs0XTtcbiAgICBtWzRdID0gdDtcblxuICAgIHQgPSBtWzJdO1xuICAgIG1bMl0gPSBtWzhdO1xuICAgIG1bOF0gPSB0O1xuXG4gICAgdCA9IG1bM107XG4gICAgbVszXSA9IG1bMTJdO1xuICAgIG1bMTJdID0gdDtcblxuICAgIHQgPSBtWzZdO1xuICAgIG1bNl0gPSBtWzldO1xuICAgIG1bOV0gPSB0O1xuXG4gICAgdCA9IG1bN107XG4gICAgbVs3XSA9IG1bMTNdO1xuICAgIG1bMTNdID0gdDtcblxuICAgIHQgPSBtWzExXTtcbiAgICBtWzExXSA9IG1bMTRdO1xuICAgIG1bMTRdID0gdDtcbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgdmFyIG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgdmFyIG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgdmFyIG0wMiA9IG1bMCAqIDQgKyAyXTtcbiAgdmFyIG0wMyA9IG1bMCAqIDQgKyAzXTtcbiAgdmFyIG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgdmFyIG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgdmFyIG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgdmFyIG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgdmFyIG0yMCA9IG1bMiAqIDQgKyAwXTtcbiAgdmFyIG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgdmFyIG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgdmFyIG0yMyA9IG1bMiAqIDQgKyAzXTtcbiAgdmFyIG0zMCA9IG1bMyAqIDQgKyAwXTtcbiAgdmFyIG0zMSA9IG1bMyAqIDQgKyAxXTtcbiAgdmFyIG0zMiA9IG1bMyAqIDQgKyAyXTtcbiAgdmFyIG0zMyA9IG1bMyAqIDQgKyAzXTtcblxuICBkc3RbMF0gPSBtMDA7XG4gIGRzdFsxXSA9IG0xMDtcbiAgZHN0WzJdID0gbTIwO1xuICBkc3RbM10gPSBtMzA7XG4gIGRzdFs0XSA9IG0wMTtcbiAgZHN0WzVdID0gbTExO1xuICBkc3RbNl0gPSBtMjE7XG4gIGRzdFs3XSA9IG0zMTtcbiAgZHN0WzhdID0gbTAyO1xuICBkc3RbOV0gPSBtMTI7XG4gIGRzdFsxMF0gPSBtMjI7XG4gIGRzdFsxMV0gPSBtMzI7XG4gIGRzdFsxMl0gPSBtMDM7XG4gIGRzdFsxM10gPSBtMTM7XG4gIGRzdFsxNF0gPSBtMjM7XG4gIGRzdFsxNV0gPSBtMzM7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgaW52ZXJzZSBvZiBhIDQtYnktNCBtYXRyaXguXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IG0gVGhlIG1hdHJpeC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub25lIG5ldyBvbmUgaXMgY3JlYXRlZC4uXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgaW52ZXJzZSBvZiBtLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cbmZ1bmN0aW9uIGludmVyc2UobSwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG5cbiAgdmFyIG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgdmFyIG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgdmFyIG0wMiA9IG1bMCAqIDQgKyAyXTtcbiAgdmFyIG0wMyA9IG1bMCAqIDQgKyAzXTtcbiAgdmFyIG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgdmFyIG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgdmFyIG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgdmFyIG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgdmFyIG0yMCA9IG1bMiAqIDQgKyAwXTtcbiAgdmFyIG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgdmFyIG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgdmFyIG0yMyA9IG1bMiAqIDQgKyAzXTtcbiAgdmFyIG0zMCA9IG1bMyAqIDQgKyAwXTtcbiAgdmFyIG0zMSA9IG1bMyAqIDQgKyAxXTtcbiAgdmFyIG0zMiA9IG1bMyAqIDQgKyAyXTtcbiAgdmFyIG0zMyA9IG1bMyAqIDQgKyAzXTtcbiAgdmFyIHRtcF8wID0gbTIyICogbTMzO1xuICB2YXIgdG1wXzEgPSBtMzIgKiBtMjM7XG4gIHZhciB0bXBfMiA9IG0xMiAqIG0zMztcbiAgdmFyIHRtcF8zID0gbTMyICogbTEzO1xuICB2YXIgdG1wXzQgPSBtMTIgKiBtMjM7XG4gIHZhciB0bXBfNSA9IG0yMiAqIG0xMztcbiAgdmFyIHRtcF82ID0gbTAyICogbTMzO1xuICB2YXIgdG1wXzcgPSBtMzIgKiBtMDM7XG4gIHZhciB0bXBfOCA9IG0wMiAqIG0yMztcbiAgdmFyIHRtcF85ID0gbTIyICogbTAzO1xuICB2YXIgdG1wXzEwID0gbTAyICogbTEzO1xuICB2YXIgdG1wXzExID0gbTEyICogbTAzO1xuICB2YXIgdG1wXzEyID0gbTIwICogbTMxO1xuICB2YXIgdG1wXzEzID0gbTMwICogbTIxO1xuICB2YXIgdG1wXzE0ID0gbTEwICogbTMxO1xuICB2YXIgdG1wXzE1ID0gbTMwICogbTExO1xuICB2YXIgdG1wXzE2ID0gbTEwICogbTIxO1xuICB2YXIgdG1wXzE3ID0gbTIwICogbTExO1xuICB2YXIgdG1wXzE4ID0gbTAwICogbTMxO1xuICB2YXIgdG1wXzE5ID0gbTMwICogbTAxO1xuICB2YXIgdG1wXzIwID0gbTAwICogbTIxO1xuICB2YXIgdG1wXzIxID0gbTIwICogbTAxO1xuICB2YXIgdG1wXzIyID0gbTAwICogbTExO1xuICB2YXIgdG1wXzIzID0gbTEwICogbTAxO1xuXG4gIHZhciB0MCA9IHRtcF8wICogbTExICsgdG1wXzMgKiBtMjEgKyB0bXBfNCAqIG0zMSAtICh0bXBfMSAqIG0xMSArIHRtcF8yICogbTIxICsgdG1wXzUgKiBtMzEpO1xuICB2YXIgdDEgPSB0bXBfMSAqIG0wMSArIHRtcF82ICogbTIxICsgdG1wXzkgKiBtMzEgLSAodG1wXzAgKiBtMDEgKyB0bXBfNyAqIG0yMSArIHRtcF84ICogbTMxKTtcbiAgdmFyIHQyID0gdG1wXzIgKiBtMDEgKyB0bXBfNyAqIG0xMSArIHRtcF8xMCAqIG0zMSAtICh0bXBfMyAqIG0wMSArIHRtcF82ICogbTExICsgdG1wXzExICogbTMxKTtcbiAgdmFyIHQzID0gdG1wXzUgKiBtMDEgKyB0bXBfOCAqIG0xMSArIHRtcF8xMSAqIG0yMSAtICh0bXBfNCAqIG0wMSArIHRtcF85ICogbTExICsgdG1wXzEwICogbTIxKTtcblxuICB2YXIgZCA9IDEuMCAvIChtMDAgKiB0MCArIG0xMCAqIHQxICsgbTIwICogdDIgKyBtMzAgKiB0Myk7XG5cbiAgZHN0WzBdID0gZCAqIHQwO1xuICBkc3RbMV0gPSBkICogdDE7XG4gIGRzdFsyXSA9IGQgKiB0MjtcbiAgZHN0WzNdID0gZCAqIHQzO1xuICBkc3RbNF0gPSBkICogKHRtcF8xICogbTEwICsgdG1wXzIgKiBtMjAgKyB0bXBfNSAqIG0zMCAtICh0bXBfMCAqIG0xMCArIHRtcF8zICogbTIwICsgdG1wXzQgKiBtMzApKTtcbiAgZHN0WzVdID0gZCAqICh0bXBfMCAqIG0wMCArIHRtcF83ICogbTIwICsgdG1wXzggKiBtMzAgLSAodG1wXzEgKiBtMDAgKyB0bXBfNiAqIG0yMCArIHRtcF85ICogbTMwKSk7XG4gIGRzdFs2XSA9IGQgKiAodG1wXzMgKiBtMDAgKyB0bXBfNiAqIG0xMCArIHRtcF8xMSAqIG0zMCAtICh0bXBfMiAqIG0wMCArIHRtcF83ICogbTEwICsgdG1wXzEwICogbTMwKSk7XG4gIGRzdFs3XSA9IGQgKiAodG1wXzQgKiBtMDAgKyB0bXBfOSAqIG0xMCArIHRtcF8xMCAqIG0yMCAtICh0bXBfNSAqIG0wMCArIHRtcF84ICogbTEwICsgdG1wXzExICogbTIwKSk7XG4gIGRzdFs4XSA9IGQgKiAodG1wXzEyICogbTEzICsgdG1wXzE1ICogbTIzICsgdG1wXzE2ICogbTMzIC0gKHRtcF8xMyAqIG0xMyArIHRtcF8xNCAqIG0yMyArIHRtcF8xNyAqIG0zMykpO1xuICBkc3RbOV0gPSBkICogKHRtcF8xMyAqIG0wMyArIHRtcF8xOCAqIG0yMyArIHRtcF8yMSAqIG0zMyAtICh0bXBfMTIgKiBtMDMgKyB0bXBfMTkgKiBtMjMgKyB0bXBfMjAgKiBtMzMpKTtcbiAgZHN0WzEwXSA9IGQgKiAodG1wXzE0ICogbTAzICsgdG1wXzE5ICogbTEzICsgdG1wXzIyICogbTMzIC0gKHRtcF8xNSAqIG0wMyArIHRtcF8xOCAqIG0xMyArIHRtcF8yMyAqIG0zMykpO1xuICBkc3RbMTFdID0gZCAqICh0bXBfMTcgKiBtMDMgKyB0bXBfMjAgKiBtMTMgKyB0bXBfMjMgKiBtMjMgLSAodG1wXzE2ICogbTAzICsgdG1wXzIxICogbTEzICsgdG1wXzIyICogbTIzKSk7XG4gIGRzdFsxMl0gPSBkICogKHRtcF8xNCAqIG0yMiArIHRtcF8xNyAqIG0zMiArIHRtcF8xMyAqIG0xMiAtICh0bXBfMTYgKiBtMzIgKyB0bXBfMTIgKiBtMTIgKyB0bXBfMTUgKiBtMjIpKTtcbiAgZHN0WzEzXSA9IGQgKiAodG1wXzIwICogbTMyICsgdG1wXzEyICogbTAyICsgdG1wXzE5ICogbTIyIC0gKHRtcF8xOCAqIG0yMiArIHRtcF8yMSAqIG0zMiArIHRtcF8xMyAqIG0wMikpO1xuICBkc3RbMTRdID0gZCAqICh0bXBfMTggKiBtMTIgKyB0bXBfMjMgKiBtMzIgKyB0bXBfMTUgKiBtMDIgLSAodG1wXzIyICogbTMyICsgdG1wXzE0ICogbTAyICsgdG1wXzE5ICogbTEyKSk7XG4gIGRzdFsxNV0gPSBkICogKHRtcF8yMiAqIG0yMiArIHRtcF8xNiAqIG0wMiArIHRtcF8yMSAqIG0xMiAtICh0bXBfMjAgKiBtMTIgKyB0bXBfMjMgKiBtMjIgKyB0bXBfMTcgKiBtMDIpKTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIDQtYnktNCBtYXRyaWNlcyB3aXRoIGEgb24gdGhlIGxlZnQgYW5kIGIgb24gdGhlIHJpZ2h0XG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IGEgVGhlIG1hdHJpeCBvbiB0aGUgbGVmdC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gYiBUaGUgbWF0cml4IG9uIHRoZSByaWdodC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub25lIG5ldyBvbmUgaXMgY3JlYXRlZC4uXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgbWF0cml4IHByb2R1Y3Qgb2YgYSBhbmQgYi5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5mdW5jdGlvbiBtdWx0aXBseShhLCBiLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcblxuICB2YXIgYTAwID0gYVswXTtcbiAgdmFyIGEwMSA9IGFbMV07XG4gIHZhciBhMDIgPSBhWzJdO1xuICB2YXIgYTAzID0gYVszXTtcbiAgdmFyIGExMCA9IGFbNCArIDBdO1xuICB2YXIgYTExID0gYVs0ICsgMV07XG4gIHZhciBhMTIgPSBhWzQgKyAyXTtcbiAgdmFyIGExMyA9IGFbNCArIDNdO1xuICB2YXIgYTIwID0gYVs4ICsgMF07XG4gIHZhciBhMjEgPSBhWzggKyAxXTtcbiAgdmFyIGEyMiA9IGFbOCArIDJdO1xuICB2YXIgYTIzID0gYVs4ICsgM107XG4gIHZhciBhMzAgPSBhWzEyICsgMF07XG4gIHZhciBhMzEgPSBhWzEyICsgMV07XG4gIHZhciBhMzIgPSBhWzEyICsgMl07XG4gIHZhciBhMzMgPSBhWzEyICsgM107XG4gIHZhciBiMDAgPSBiWzBdO1xuICB2YXIgYjAxID0gYlsxXTtcbiAgdmFyIGIwMiA9IGJbMl07XG4gIHZhciBiMDMgPSBiWzNdO1xuICB2YXIgYjEwID0gYls0ICsgMF07XG4gIHZhciBiMTEgPSBiWzQgKyAxXTtcbiAgdmFyIGIxMiA9IGJbNCArIDJdO1xuICB2YXIgYjEzID0gYls0ICsgM107XG4gIHZhciBiMjAgPSBiWzggKyAwXTtcbiAgdmFyIGIyMSA9IGJbOCArIDFdO1xuICB2YXIgYjIyID0gYls4ICsgMl07XG4gIHZhciBiMjMgPSBiWzggKyAzXTtcbiAgdmFyIGIzMCA9IGJbMTIgKyAwXTtcbiAgdmFyIGIzMSA9IGJbMTIgKyAxXTtcbiAgdmFyIGIzMiA9IGJbMTIgKyAyXTtcbiAgdmFyIGIzMyA9IGJbMTIgKyAzXTtcblxuICBkc3RbMF0gPSBhMDAgKiBiMDAgKyBhMTAgKiBiMDEgKyBhMjAgKiBiMDIgKyBhMzAgKiBiMDM7XG4gIGRzdFsxXSA9IGEwMSAqIGIwMCArIGExMSAqIGIwMSArIGEyMSAqIGIwMiArIGEzMSAqIGIwMztcbiAgZHN0WzJdID0gYTAyICogYjAwICsgYTEyICogYjAxICsgYTIyICogYjAyICsgYTMyICogYjAzO1xuICBkc3RbM10gPSBhMDMgKiBiMDAgKyBhMTMgKiBiMDEgKyBhMjMgKiBiMDIgKyBhMzMgKiBiMDM7XG4gIGRzdFs0XSA9IGEwMCAqIGIxMCArIGExMCAqIGIxMSArIGEyMCAqIGIxMiArIGEzMCAqIGIxMztcbiAgZHN0WzVdID0gYTAxICogYjEwICsgYTExICogYjExICsgYTIxICogYjEyICsgYTMxICogYjEzO1xuICBkc3RbNl0gPSBhMDIgKiBiMTAgKyBhMTIgKiBiMTEgKyBhMjIgKiBiMTIgKyBhMzIgKiBiMTM7XG4gIGRzdFs3XSA9IGEwMyAqIGIxMCArIGExMyAqIGIxMSArIGEyMyAqIGIxMiArIGEzMyAqIGIxMztcbiAgZHN0WzhdID0gYTAwICogYjIwICsgYTEwICogYjIxICsgYTIwICogYjIyICsgYTMwICogYjIzO1xuICBkc3RbOV0gPSBhMDEgKiBiMjAgKyBhMTEgKiBiMjEgKyBhMjEgKiBiMjIgKyBhMzEgKiBiMjM7XG4gIGRzdFsxMF0gPSBhMDIgKiBiMjAgKyBhMTIgKiBiMjEgKyBhMjIgKiBiMjIgKyBhMzIgKiBiMjM7XG4gIGRzdFsxMV0gPSBhMDMgKiBiMjAgKyBhMTMgKiBiMjEgKyBhMjMgKiBiMjIgKyBhMzMgKiBiMjM7XG4gIGRzdFsxMl0gPSBhMDAgKiBiMzAgKyBhMTAgKiBiMzEgKyBhMjAgKiBiMzIgKyBhMzAgKiBiMzM7XG4gIGRzdFsxM10gPSBhMDEgKiBiMzAgKyBhMTEgKiBiMzEgKyBhMjEgKiBiMzIgKyBhMzEgKiBiMzM7XG4gIGRzdFsxNF0gPSBhMDIgKiBiMzAgKyBhMTIgKiBiMzEgKyBhMjIgKiBiMzIgKyBhMzIgKiBiMzM7XG4gIGRzdFsxNV0gPSBhMDMgKiBiMzAgKyBhMTMgKiBiMzEgKyBhMjMgKiBiMzIgKyBhMzMgKiBiMzM7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSB0cmFuc2xhdGlvbiBjb21wb25lbnQgb2YgYSA0LWJ5LTQgbWF0cml4IHRvIHRoZSBnaXZlblxuICogdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBhIFRoZSBtYXRyaXguXG4gKiBAcGFyYW0ge1ZlYzN9IHYgVGhlIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub25lIG5ldyBvbmUgaXMgY3JlYXRlZC4uXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBhIG9uY2UgbW9kaWZpZWQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gc2V0VHJhbnNsYXRpb24oYSwgdiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBpZGVudGl0eSgpO1xuICBpZiAoYSAhPT0gZHN0KSB7XG4gICAgZHN0WzBdID0gYVswXTtcbiAgICBkc3RbMV0gPSBhWzFdO1xuICAgIGRzdFsyXSA9IGFbMl07XG4gICAgZHN0WzNdID0gYVszXTtcbiAgICBkc3RbNF0gPSBhWzRdO1xuICAgIGRzdFs1XSA9IGFbNV07XG4gICAgZHN0WzZdID0gYVs2XTtcbiAgICBkc3RbN10gPSBhWzddO1xuICAgIGRzdFs4XSA9IGFbOF07XG4gICAgZHN0WzldID0gYVs5XTtcbiAgICBkc3RbMTBdID0gYVsxMF07XG4gICAgZHN0WzExXSA9IGFbMTFdO1xuICB9XG4gIGRzdFsxMl0gPSB2WzBdO1xuICBkc3RbMTNdID0gdlsxXTtcbiAgZHN0WzE0XSA9IHZbMl07XG4gIGRzdFsxNV0gPSAxO1xuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHRyYW5zbGF0aW9uIGNvbXBvbmVudCBvZiBhIDQtYnktNCBtYXRyaXggYXMgYSB2ZWN0b3Igd2l0aCAzXG4gKiBlbnRyaWVzLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIFRoZSBtYXRyaXguXG4gKiBAcGFyYW0ge1ZlYzN9IFtkc3RdIHZlY3Rvci4uXG4gKiBAcmV0dXJuIHtWZWMzfSBUaGUgdHJhbnNsYXRpb24gY29tcG9uZW50IG9mIG0uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gZ2V0VHJhbnNsYXRpb24obSwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCB2My5jcmVhdGUoKTtcbiAgZHN0WzBdID0gbVsxMl07XG4gIGRzdFsxXSA9IG1bMTNdO1xuICBkc3RbMl0gPSBtWzE0XTtcbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGF4aXMgb2YgYSA0eDQgbWF0cml4IGFzIGEgdmVjdG9yIHdpdGggMyBlbnRyaWVzXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IG0gVGhlIG1hdHJpeC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBheGlzIFRoZSBheGlzIDAgPSB4LCAxID0geSwgMiA9IHo7XG4gKiBAcmV0dXJuIHtWZWMzfSBbZHN0XSB2ZWN0b3IuXG4gKiBAcmV0dXJuIHtWZWMzfSBUaGUgYXhpcyBjb21wb25lbnQgb2YgbS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5mdW5jdGlvbiBnZXRBeGlzKG0sIGF4aXMsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgdjMuY3JlYXRlKCk7XG4gIHZhciBvZmYgPSBheGlzICogNDtcbiAgZHN0WzBdID0gbVtvZmYgKyAwXTtcbiAgZHN0WzFdID0gbVtvZmYgKyAxXTtcbiAgZHN0WzJdID0gbVtvZmYgKyAyXTtcbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBTZXRzIGFuIGF4aXMgb2YgYSA0eDQgbWF0cml4IGFzIGEgdmVjdG9yIHdpdGggMyBlbnRyaWVzXG4gKiBAcGFyYW0ge1ZlYzN9IHYgdGhlIGF4aXMgdmVjdG9yXG4gKiBAcGFyYW0ge251bWJlcn0gYXhpcyBUaGUgYXhpcyAgMCA9IHgsIDEgPSB5LCAyID0gejtcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gVGhlIG1hdHJpeCB0byBzZXQuIElmIG5vbmUgYSBuZXcgb25lIGlzIGNyZWF0ZWRcbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IGRzdFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cbmZ1bmN0aW9uIHNldEF4aXMoYSwgdiwgYXhpcywgZHN0KSB7XG4gIGlmIChkc3QgIT09IGEpIHtcbiAgICBkc3QgPSBjb3B5KGEsIGRzdCk7XG4gIH1cbiAgdmFyIG9mZiA9IGF4aXMgKiA0O1xuICBkc3Rbb2ZmICsgMF0gPSB2WzBdO1xuICBkc3Rbb2ZmICsgMV0gPSB2WzFdO1xuICBkc3Rbb2ZmICsgMl0gPSB2WzJdO1xuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIENvbXB1dGVzIGEgNC1ieS00IHBlcnNwZWN0aXZlIHRyYW5zZm9ybWF0aW9uIG1hdHJpeCBnaXZlbiB0aGUgYW5ndWxhciBoZWlnaHRcbiAqIG9mIHRoZSBmcnVzdHVtLCB0aGUgYXNwZWN0IHJhdGlvLCBhbmQgdGhlIG5lYXIgYW5kIGZhciBjbGlwcGluZyBwbGFuZXMuICBUaGVcbiAqIGFyZ3VtZW50cyBkZWZpbmUgYSBmcnVzdHVtIGV4dGVuZGluZyBpbiB0aGUgbmVnYXRpdmUgeiBkaXJlY3Rpb24uICBUaGUgZ2l2ZW5cbiAqIGFuZ2xlIGlzIHRoZSB2ZXJ0aWNhbCBhbmdsZSBvZiB0aGUgZnJ1c3R1bSwgYW5kIHRoZSBob3Jpem9udGFsIGFuZ2xlIGlzXG4gKiBkZXRlcm1pbmVkIHRvIHByb2R1Y2UgdGhlIGdpdmVuIGFzcGVjdCByYXRpby4gIFRoZSBhcmd1bWVudHMgbmVhciBhbmQgZmFyIGFyZVxuICogdGhlIGRpc3RhbmNlcyB0byB0aGUgbmVhciBhbmQgZmFyIGNsaXBwaW5nIHBsYW5lcy4gIE5vdGUgdGhhdCBuZWFyIGFuZCBmYXJcbiAqIGFyZSBub3QgeiBjb29yZGluYXRlcywgYnV0IHJhdGhlciB0aGV5IGFyZSBkaXN0YW5jZXMgYWxvbmcgdGhlIG5lZ2F0aXZlXG4gKiB6LWF4aXMuICBUaGUgbWF0cml4IGdlbmVyYXRlZCBzZW5kcyB0aGUgdmlld2luZyBmcnVzdHVtIHRvIHRoZSB1bml0IGJveC5cbiAqIFdlIGFzc3VtZSBhIHVuaXQgYm94IGV4dGVuZGluZyBmcm9tIC0xIHRvIDEgaW4gdGhlIHggYW5kIHkgZGltZW5zaW9ucyBhbmRcbiAqIGZyb20gMCB0byAxIGluIHRoZSB6IGRpbWVuc2lvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmaWVsZE9mVmlld1lJblJhZGlhbnMgVGhlIGNhbWVyYSBhbmdsZSBmcm9tIHRvcCB0byBib3R0b20gKGluIHJhZGlhbnMpLlxuICogQHBhcmFtIHtudW1iZXJ9IGFzcGVjdCBUaGUgYXNwZWN0IHJhdGlvIHdpZHRoIC8gaGVpZ2h0LlxuICogQHBhcmFtIHtudW1iZXJ9IHpOZWFyIFRoZSBkZXB0aCAobmVnYXRpdmUgeiBjb29yZGluYXRlKVxuICogICAgIG9mIHRoZSBuZWFyIGNsaXBwaW5nIHBsYW5lLlxuICogQHBhcmFtIHtudW1iZXJ9IHpGYXIgVGhlIGRlcHRoIChuZWdhdGl2ZSB6IGNvb3JkaW5hdGUpXG4gKiAgICAgb2YgdGhlIGZhciBjbGlwcGluZyBwbGFuZS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub25lIG5ldyBvbmUgaXMgY3JlYXRlZC4uXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgcGVyc3BlY3RpdmUgbWF0cml4LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cbmZ1bmN0aW9uIHBlcnNwZWN0aXZlKGZpZWxkT2ZWaWV3WUluUmFkaWFucywgYXNwZWN0LCB6TmVhciwgekZhciwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG5cbiAgdmFyIGYgPSBNYXRoLnRhbihNYXRoLlBJICogMC41IC0gMC41ICogZmllbGRPZlZpZXdZSW5SYWRpYW5zKTtcbiAgdmFyIHJhbmdlSW52ID0gMS4wIC8gKHpOZWFyIC0gekZhcik7XG5cbiAgZHN0WzBdID0gZiAvIGFzcGVjdDtcbiAgZHN0WzFdID0gMDtcbiAgZHN0WzJdID0gMDtcbiAgZHN0WzNdID0gMDtcblxuICBkc3RbNF0gPSAwO1xuICBkc3RbNV0gPSBmO1xuICBkc3RbNl0gPSAwO1xuICBkc3RbN10gPSAwO1xuXG4gIGRzdFs4XSA9IDA7XG4gIGRzdFs5XSA9IDA7XG4gIGRzdFsxMF0gPSAoek5lYXIgKyB6RmFyKSAqIHJhbmdlSW52O1xuICBkc3RbMTFdID0gLTE7XG5cbiAgZHN0WzEyXSA9IDA7XG4gIGRzdFsxM10gPSAwO1xuICBkc3RbMTRdID0gek5lYXIgKiB6RmFyICogcmFuZ2VJbnYgKiAyO1xuICBkc3RbMTVdID0gMDtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIENvbXB1dGVzIGEgNC1ieS00IG90aG9nb25hbCB0cmFuc2Zvcm1hdGlvbiBtYXRyaXggZ2l2ZW4gdGhlIGxlZnQsIHJpZ2h0LFxuICogYm90dG9tLCBhbmQgdG9wIGRpbWVuc2lvbnMgb2YgdGhlIG5lYXIgY2xpcHBpbmcgcGxhbmUgYXMgd2VsbCBhcyB0aGVcbiAqIG5lYXIgYW5kIGZhciBjbGlwcGluZyBwbGFuZSBkaXN0YW5jZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gbGVmdCBMZWZ0IHNpZGUgb2YgdGhlIG5lYXIgY2xpcHBpbmcgcGxhbmUgdmlld3BvcnQuXG4gKiBAcGFyYW0ge251bWJlcn0gcmlnaHQgUmlnaHQgc2lkZSBvZiB0aGUgbmVhciBjbGlwcGluZyBwbGFuZSB2aWV3cG9ydC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b3AgVG9wIG9mIHRoZSBuZWFyIGNsaXBwaW5nIHBsYW5lIHZpZXdwb3J0LlxuICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbSBCb3R0b20gb2YgdGhlIG5lYXIgY2xpcHBpbmcgcGxhbmUgdmlld3BvcnQuXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBUaGUgZGVwdGggKG5lZ2F0aXZlIHogY29vcmRpbmF0ZSlcbiAqICAgICBvZiB0aGUgbmVhciBjbGlwcGluZyBwbGFuZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgVGhlIGRlcHRoIChuZWdhdGl2ZSB6IGNvb3JkaW5hdGUpXG4gKiAgICAgb2YgdGhlIGZhciBjbGlwcGluZyBwbGFuZS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gT3V0cHV0IG1hdHJpeC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSBwZXJzcGVjdGl2ZSBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gb3J0aG8obGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuXG4gIGRzdFswXSA9IDIgLyAocmlnaHQgLSBsZWZ0KTtcbiAgZHN0WzFdID0gMDtcbiAgZHN0WzJdID0gMDtcbiAgZHN0WzNdID0gMDtcblxuICBkc3RbNF0gPSAwO1xuICBkc3RbNV0gPSAyIC8gKHRvcCAtIGJvdHRvbSk7XG4gIGRzdFs2XSA9IDA7XG4gIGRzdFs3XSA9IDA7XG5cbiAgZHN0WzhdID0gMDtcbiAgZHN0WzldID0gMDtcbiAgZHN0WzEwXSA9IDIgLyAobmVhciAtIGZhcik7XG4gIGRzdFsxMV0gPSAwO1xuXG4gIGRzdFsxMl0gPSAocmlnaHQgKyBsZWZ0KSAvIChsZWZ0IC0gcmlnaHQpO1xuICBkc3RbMTNdID0gKHRvcCArIGJvdHRvbSkgLyAoYm90dG9tIC0gdG9wKTtcbiAgZHN0WzE0XSA9IChmYXIgKyBuZWFyKSAvIChuZWFyIC0gZmFyKTtcbiAgZHN0WzE1XSA9IDE7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyBhIDQtYnktNCBwZXJzcGVjdGl2ZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXggZ2l2ZW4gdGhlIGxlZnQsIHJpZ2h0LFxuICogdG9wLCBib3R0b20sIG5lYXIgYW5kIGZhciBjbGlwcGluZyBwbGFuZXMuIFRoZSBhcmd1bWVudHMgZGVmaW5lIGEgZnJ1c3R1bVxuICogZXh0ZW5kaW5nIGluIHRoZSBuZWdhdGl2ZSB6IGRpcmVjdGlvbi4gVGhlIGFyZ3VtZW50cyBuZWFyIGFuZCBmYXIgYXJlIHRoZVxuICogZGlzdGFuY2VzIHRvIHRoZSBuZWFyIGFuZCBmYXIgY2xpcHBpbmcgcGxhbmVzLiBOb3RlIHRoYXQgbmVhciBhbmQgZmFyIGFyZSBub3RcbiAqIHogY29vcmRpbmF0ZXMsIGJ1dCByYXRoZXIgdGhleSBhcmUgZGlzdGFuY2VzIGFsb25nIHRoZSBuZWdhdGl2ZSB6LWF4aXMuIFRoZVxuICogbWF0cml4IGdlbmVyYXRlZCBzZW5kcyB0aGUgdmlld2luZyBmcnVzdHVtIHRvIHRoZSB1bml0IGJveC4gV2UgYXNzdW1lIGEgdW5pdFxuICogYm94IGV4dGVuZGluZyBmcm9tIC0xIHRvIDEgaW4gdGhlIHggYW5kIHkgZGltZW5zaW9ucyBhbmQgZnJvbSAwIHRvIDEgaW4gdGhlIHpcbiAqIGRpbWVuc2lvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZWZ0IFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIGxlZnQgcGxhbmUgb2YgdGhlIGJveC5cbiAqIEBwYXJhbSB7bnVtYmVyfSByaWdodCBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSByaWdodCBwbGFuZSBvZiB0aGUgYm94LlxuICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBib3R0b20gcGxhbmUgb2YgdGhlIGJveC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b3AgVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgcmlnaHQgcGxhbmUgb2YgdGhlIGJveC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIFRoZSBuZWdhdGl2ZSB6IGNvb3JkaW5hdGUgb2YgdGhlIG5lYXIgcGxhbmUgb2YgdGhlIGJveC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgVGhlIG5lZ2F0aXZlIHogY29vcmRpbmF0ZSBvZiB0aGUgZmFyIHBsYW5lIG9mIHRoZSBib3guXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIE91dHB1dCBtYXRyaXguXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gZnJ1c3R1bShsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhciwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG5cbiAgdmFyIGR4ID0gcmlnaHQgLSBsZWZ0O1xuICB2YXIgZHkgPSB0b3AgLSBib3R0b207XG4gIHZhciBkeiA9IG5lYXIgLSBmYXI7XG5cbiAgZHN0WzBdID0gMiAqIG5lYXIgLyBkeDtcbiAgZHN0WzFdID0gMDtcbiAgZHN0WzJdID0gMDtcbiAgZHN0WzNdID0gMDtcbiAgZHN0WzRdID0gMDtcbiAgZHN0WzVdID0gMiAqIG5lYXIgLyBkeTtcbiAgZHN0WzZdID0gMDtcbiAgZHN0WzddID0gMDtcbiAgZHN0WzhdID0gKGxlZnQgKyByaWdodCkgLyBkeDtcbiAgZHN0WzldID0gKHRvcCArIGJvdHRvbSkgLyBkeTtcbiAgZHN0WzEwXSA9IGZhciAvIGR6O1xuICBkc3RbMTFdID0gLTE7XG4gIGRzdFsxMl0gPSAwO1xuICBkc3RbMTNdID0gMDtcbiAgZHN0WzE0XSA9IG5lYXIgKiBmYXIgLyBkejtcbiAgZHN0WzE1XSA9IDA7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyBhIDQtYnktNCBsb29rLWF0IHRyYW5zZm9ybWF0aW9uLlxuICpcbiAqIFRoaXMgaXMgYSBtYXRyaXggd2hpY2ggcG9zaXRpb25zIHRoZSBjYW1lcmEgaXRzZWxmLiBJZiB5b3Ugd2FudFxuICogYSB2aWV3IG1hdHJpeCAoYSBtYXRyaXggd2hpY2ggbW92ZXMgdGhpbmdzIGluIGZyb250IG9mIHRoZSBjYW1lcmEpXG4gKiB0YWtlIHRoZSBpbnZlcnNlIG9mIHRoaXMuXG4gKlxuICogQHBhcmFtIHtWZWMzfSBleWUgVGhlIHBvc2l0aW9uIG9mIHRoZSBleWUuXG4gKiBAcGFyYW0ge1ZlYzN9IHRhcmdldCBUaGUgcG9zaXRpb24gbWVhbnQgdG8gYmUgdmlld2VkLlxuICogQHBhcmFtIHtWZWMzfSB1cCBBIHZlY3RvciBwb2ludGluZyB1cC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub25lIG5ldyBvbmUgaXMgY3JlYXRlZC4uXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgbG9vay1hdCBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gbG9va0F0KGV5ZSwgdGFyZ2V0LCB1cCwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG5cbiAgdmFyIHhBeGlzID0gdGVtcFYzYTtcbiAgdmFyIHlBeGlzID0gdGVtcFYzYjtcbiAgdmFyIHpBeGlzID0gdGVtcFYzYztcblxuICB2My5ub3JtYWxpemUodjMuc3VidHJhY3QoZXllLCB0YXJnZXQsIHpBeGlzKSwgekF4aXMpO1xuICB2My5ub3JtYWxpemUodjMuY3Jvc3ModXAsIHpBeGlzLCB4QXhpcyksIHhBeGlzKTtcbiAgdjMubm9ybWFsaXplKHYzLmNyb3NzKHpBeGlzLCB4QXhpcywgeUF4aXMpLCB5QXhpcyk7XG5cbiAgZHN0WzBdID0geEF4aXNbMF07XG4gIGRzdFsxXSA9IHhBeGlzWzFdO1xuICBkc3RbMl0gPSB4QXhpc1syXTtcbiAgZHN0WzNdID0gMDtcbiAgZHN0WzRdID0geUF4aXNbMF07XG4gIGRzdFs1XSA9IHlBeGlzWzFdO1xuICBkc3RbNl0gPSB5QXhpc1syXTtcbiAgZHN0WzddID0gMDtcbiAgZHN0WzhdID0gekF4aXNbMF07XG4gIGRzdFs5XSA9IHpBeGlzWzFdO1xuICBkc3RbMTBdID0gekF4aXNbMl07XG4gIGRzdFsxMV0gPSAwO1xuICBkc3RbMTJdID0gZXllWzBdO1xuICBkc3RbMTNdID0gZXllWzFdO1xuICBkc3RbMTRdID0gZXllWzJdO1xuICBkc3RbMTVdID0gMTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSA0LWJ5LTQgbWF0cml4IHdoaWNoIHRyYW5zbGF0ZXMgYnkgdGhlIGdpdmVuIHZlY3RvciB2LlxuICogQHBhcmFtIHtWZWMzfSB2IFRoZSB2ZWN0b3IgYnlcbiAqICAgICB3aGljaCB0byB0cmFuc2xhdGUuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm9uZSBuZXcgb25lIGlzIGNyZWF0ZWQuLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gVGhlIHRyYW5zbGF0aW9uIG1hdHJpeC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5mdW5jdGlvbiB0cmFuc2xhdGlvbih2LCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcblxuICBkc3RbMF0gPSAxO1xuICBkc3RbMV0gPSAwO1xuICBkc3RbMl0gPSAwO1xuICBkc3RbM10gPSAwO1xuICBkc3RbNF0gPSAwO1xuICBkc3RbNV0gPSAxO1xuICBkc3RbNl0gPSAwO1xuICBkc3RbN10gPSAwO1xuICBkc3RbOF0gPSAwO1xuICBkc3RbOV0gPSAwO1xuICBkc3RbMTBdID0gMTtcbiAgZHN0WzExXSA9IDA7XG4gIGRzdFsxMl0gPSB2WzBdO1xuICBkc3RbMTNdID0gdlsxXTtcbiAgZHN0WzE0XSA9IHZbMl07XG4gIGRzdFsxNV0gPSAxO1xuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIE1vZGlmaWVzIHRoZSBnaXZlbiA0LWJ5LTQgbWF0cml4IGJ5IHRyYW5zbGF0aW9uIGJ5IHRoZSBnaXZlbiB2ZWN0b3Igdi5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4LlxuICogQHBhcmFtIHtWZWMzfSB2IFRoZSB2ZWN0b3IgYnlcbiAqICAgICB3aGljaCB0byB0cmFuc2xhdGUuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm9uZSBuZXcgb25lIGlzIGNyZWF0ZWQuLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBvbmNlIG1vZGlmaWVkLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cbmZ1bmN0aW9uIHRyYW5zbGF0ZShtLCB2LCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcblxuICB2YXIgdjAgPSB2WzBdO1xuICB2YXIgdjEgPSB2WzFdO1xuICB2YXIgdjIgPSB2WzJdO1xuICB2YXIgbTAwID0gbVswXTtcbiAgdmFyIG0wMSA9IG1bMV07XG4gIHZhciBtMDIgPSBtWzJdO1xuICB2YXIgbTAzID0gbVszXTtcbiAgdmFyIG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgdmFyIG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgdmFyIG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgdmFyIG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgdmFyIG0yMCA9IG1bMiAqIDQgKyAwXTtcbiAgdmFyIG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgdmFyIG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgdmFyIG0yMyA9IG1bMiAqIDQgKyAzXTtcbiAgdmFyIG0zMCA9IG1bMyAqIDQgKyAwXTtcbiAgdmFyIG0zMSA9IG1bMyAqIDQgKyAxXTtcbiAgdmFyIG0zMiA9IG1bMyAqIDQgKyAyXTtcbiAgdmFyIG0zMyA9IG1bMyAqIDQgKyAzXTtcblxuICBpZiAobSAhPT0gZHN0KSB7XG4gICAgZHN0WzBdID0gbTAwO1xuICAgIGRzdFsxXSA9IG0wMTtcbiAgICBkc3RbMl0gPSBtMDI7XG4gICAgZHN0WzNdID0gbTAzO1xuICAgIGRzdFs0XSA9IG0xMDtcbiAgICBkc3RbNV0gPSBtMTE7XG4gICAgZHN0WzZdID0gbTEyO1xuICAgIGRzdFs3XSA9IG0xMztcbiAgICBkc3RbOF0gPSBtMjA7XG4gICAgZHN0WzldID0gbTIxO1xuICAgIGRzdFsxMF0gPSBtMjI7XG4gICAgZHN0WzExXSA9IG0yMztcbiAgfVxuXG4gIGRzdFsxMl0gPSBtMDAgKiB2MCArIG0xMCAqIHYxICsgbTIwICogdjIgKyBtMzA7XG4gIGRzdFsxM10gPSBtMDEgKiB2MCArIG0xMSAqIHYxICsgbTIxICogdjIgKyBtMzE7XG4gIGRzdFsxNF0gPSBtMDIgKiB2MCArIG0xMiAqIHYxICsgbTIyICogdjIgKyBtMzI7XG4gIGRzdFsxNV0gPSBtMDMgKiB2MCArIG0xMyAqIHYxICsgbTIzICogdjIgKyBtMzM7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgNC1ieS00IG1hdHJpeCB3aGljaCByb3RhdGVzIGFyb3VuZCB0aGUgeC1heGlzIGJ5IHRoZSBnaXZlbiBhbmdsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluUmFkaWFucyBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlIChpbiByYWRpYW5zKS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub25lIG5ldyBvbmUgaXMgY3JlYXRlZC4uXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgcm90YXRpb24gbWF0cml4LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cbmZ1bmN0aW9uIHJvdGF0aW9uWChhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG5cbiAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuXG4gIGRzdFswXSA9IDE7XG4gIGRzdFsxXSA9IDA7XG4gIGRzdFsyXSA9IDA7XG4gIGRzdFszXSA9IDA7XG4gIGRzdFs0XSA9IDA7XG4gIGRzdFs1XSA9IGM7XG4gIGRzdFs2XSA9IHM7XG4gIGRzdFs3XSA9IDA7XG4gIGRzdFs4XSA9IDA7XG4gIGRzdFs5XSA9IC1zO1xuICBkc3RbMTBdID0gYztcbiAgZHN0WzExXSA9IDA7XG4gIGRzdFsxMl0gPSAwO1xuICBkc3RbMTNdID0gMDtcbiAgZHN0WzE0XSA9IDA7XG4gIGRzdFsxNV0gPSAxO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogTW9kaWZpZXMgdGhlIGdpdmVuIDQtYnktNCBtYXRyaXggYnkgYSByb3RhdGlvbiBhcm91bmQgdGhlIHgtYXhpcyBieSB0aGUgZ2l2ZW5cbiAqIGFuZ2xlLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIFRoZSBtYXRyaXguXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm9uZSBuZXcgb25lIGlzIGNyZWF0ZWQuLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBvbmNlIG1vZGlmaWVkLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVgobSwgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuXG4gIHZhciBtMTAgPSBtWzRdO1xuICB2YXIgbTExID0gbVs1XTtcbiAgdmFyIG0xMiA9IG1bNl07XG4gIHZhciBtMTMgPSBtWzddO1xuICB2YXIgbTIwID0gbVs4XTtcbiAgdmFyIG0yMSA9IG1bOV07XG4gIHZhciBtMjIgPSBtWzEwXTtcbiAgdmFyIG0yMyA9IG1bMTFdO1xuICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG5cbiAgZHN0WzRdID0gYyAqIG0xMCArIHMgKiBtMjA7XG4gIGRzdFs1XSA9IGMgKiBtMTEgKyBzICogbTIxO1xuICBkc3RbNl0gPSBjICogbTEyICsgcyAqIG0yMjtcbiAgZHN0WzddID0gYyAqIG0xMyArIHMgKiBtMjM7XG4gIGRzdFs4XSA9IGMgKiBtMjAgLSBzICogbTEwO1xuICBkc3RbOV0gPSBjICogbTIxIC0gcyAqIG0xMTtcbiAgZHN0WzEwXSA9IGMgKiBtMjIgLSBzICogbTEyO1xuICBkc3RbMTFdID0gYyAqIG0yMyAtIHMgKiBtMTM7XG5cbiAgaWYgKG0gIT09IGRzdCkge1xuICAgIGRzdFswXSA9IG1bMF07XG4gICAgZHN0WzFdID0gbVsxXTtcbiAgICBkc3RbMl0gPSBtWzJdO1xuICAgIGRzdFszXSA9IG1bM107XG4gICAgZHN0WzEyXSA9IG1bMTJdO1xuICAgIGRzdFsxM10gPSBtWzEzXTtcbiAgICBkc3RbMTRdID0gbVsxNF07XG4gICAgZHN0WzE1XSA9IG1bMTVdO1xuICB9XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgNC1ieS00IG1hdHJpeCB3aGljaCByb3RhdGVzIGFyb3VuZCB0aGUgeS1heGlzIGJ5IHRoZSBnaXZlbiBhbmdsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluUmFkaWFucyBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlIChpbiByYWRpYW5zKS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub25lIG5ldyBvbmUgaXMgY3JlYXRlZC4uXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgcm90YXRpb24gbWF0cml4LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cbmZ1bmN0aW9uIHJvdGF0aW9uWShhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG5cbiAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuXG4gIGRzdFswXSA9IGM7XG4gIGRzdFsxXSA9IDA7XG4gIGRzdFsyXSA9IC1zO1xuICBkc3RbM10gPSAwO1xuICBkc3RbNF0gPSAwO1xuICBkc3RbNV0gPSAxO1xuICBkc3RbNl0gPSAwO1xuICBkc3RbN10gPSAwO1xuICBkc3RbOF0gPSBzO1xuICBkc3RbOV0gPSAwO1xuICBkc3RbMTBdID0gYztcbiAgZHN0WzExXSA9IDA7XG4gIGRzdFsxMl0gPSAwO1xuICBkc3RbMTNdID0gMDtcbiAgZHN0WzE0XSA9IDA7XG4gIGRzdFsxNV0gPSAxO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogTW9kaWZpZXMgdGhlIGdpdmVuIDQtYnktNCBtYXRyaXggYnkgYSByb3RhdGlvbiBhcm91bmQgdGhlIHktYXhpcyBieSB0aGUgZ2l2ZW5cbiAqIGFuZ2xlLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIFRoZSBtYXRyaXguXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm9uZSBuZXcgb25lIGlzIGNyZWF0ZWQuLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBvbmNlIG1vZGlmaWVkLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVkobSwgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuXG4gIHZhciBtMDAgPSBtWzAgKiA0ICsgMF07XG4gIHZhciBtMDEgPSBtWzAgKiA0ICsgMV07XG4gIHZhciBtMDIgPSBtWzAgKiA0ICsgMl07XG4gIHZhciBtMDMgPSBtWzAgKiA0ICsgM107XG4gIHZhciBtMjAgPSBtWzIgKiA0ICsgMF07XG4gIHZhciBtMjEgPSBtWzIgKiA0ICsgMV07XG4gIHZhciBtMjIgPSBtWzIgKiA0ICsgMl07XG4gIHZhciBtMjMgPSBtWzIgKiA0ICsgM107XG4gIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcblxuICBkc3RbMF0gPSBjICogbTAwIC0gcyAqIG0yMDtcbiAgZHN0WzFdID0gYyAqIG0wMSAtIHMgKiBtMjE7XG4gIGRzdFsyXSA9IGMgKiBtMDIgLSBzICogbTIyO1xuICBkc3RbM10gPSBjICogbTAzIC0gcyAqIG0yMztcbiAgZHN0WzhdID0gYyAqIG0yMCArIHMgKiBtMDA7XG4gIGRzdFs5XSA9IGMgKiBtMjEgKyBzICogbTAxO1xuICBkc3RbMTBdID0gYyAqIG0yMiArIHMgKiBtMDI7XG4gIGRzdFsxMV0gPSBjICogbTIzICsgcyAqIG0wMztcblxuICBpZiAobSAhPT0gZHN0KSB7XG4gICAgZHN0WzRdID0gbVs0XTtcbiAgICBkc3RbNV0gPSBtWzVdO1xuICAgIGRzdFs2XSA9IG1bNl07XG4gICAgZHN0WzddID0gbVs3XTtcbiAgICBkc3RbMTJdID0gbVsxMl07XG4gICAgZHN0WzEzXSA9IG1bMTNdO1xuICAgIGRzdFsxNF0gPSBtWzE0XTtcbiAgICBkc3RbMTVdID0gbVsxNV07XG4gIH1cblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSA0LWJ5LTQgbWF0cml4IHdoaWNoIHJvdGF0ZXMgYXJvdW5kIHRoZSB6LWF4aXMgYnkgdGhlIGdpdmVuIGFuZ2xlLlxuICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlSW5SYWRpYW5zIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGUgKGluIHJhZGlhbnMpLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vbmUgbmV3IG9uZSBpcyBjcmVhdGVkLi5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSByb3RhdGlvbiBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gcm90YXRpb25aKGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcblxuICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG5cbiAgZHN0WzBdID0gYztcbiAgZHN0WzFdID0gcztcbiAgZHN0WzJdID0gMDtcbiAgZHN0WzNdID0gMDtcbiAgZHN0WzRdID0gLXM7XG4gIGRzdFs1XSA9IGM7XG4gIGRzdFs2XSA9IDA7XG4gIGRzdFs3XSA9IDA7XG4gIGRzdFs4XSA9IDA7XG4gIGRzdFs5XSA9IDA7XG4gIGRzdFsxMF0gPSAxO1xuICBkc3RbMTFdID0gMDtcbiAgZHN0WzEyXSA9IDA7XG4gIGRzdFsxM10gPSAwO1xuICBkc3RbMTRdID0gMDtcbiAgZHN0WzE1XSA9IDE7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBNb2RpZmllcyB0aGUgZ2l2ZW4gNC1ieS00IG1hdHJpeCBieSBhIHJvdGF0aW9uIGFyb3VuZCB0aGUgei1heGlzIGJ5IHRoZSBnaXZlblxuICogYW5nbGUuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IG0gVGhlIG1hdHJpeC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluUmFkaWFucyBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlIChpbiByYWRpYW5zKS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub25lIG5ldyBvbmUgaXMgY3JlYXRlZC4uXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIG9uY2UgbW9kaWZpZWQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gcm90YXRlWihtLCBhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG5cbiAgdmFyIG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgdmFyIG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgdmFyIG0wMiA9IG1bMCAqIDQgKyAyXTtcbiAgdmFyIG0wMyA9IG1bMCAqIDQgKyAzXTtcbiAgdmFyIG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgdmFyIG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgdmFyIG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgdmFyIG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuXG4gIGRzdFswXSA9IGMgKiBtMDAgKyBzICogbTEwO1xuICBkc3RbMV0gPSBjICogbTAxICsgcyAqIG0xMTtcbiAgZHN0WzJdID0gYyAqIG0wMiArIHMgKiBtMTI7XG4gIGRzdFszXSA9IGMgKiBtMDMgKyBzICogbTEzO1xuICBkc3RbNF0gPSBjICogbTEwIC0gcyAqIG0wMDtcbiAgZHN0WzVdID0gYyAqIG0xMSAtIHMgKiBtMDE7XG4gIGRzdFs2XSA9IGMgKiBtMTIgLSBzICogbTAyO1xuICBkc3RbN10gPSBjICogbTEzIC0gcyAqIG0wMztcblxuICBpZiAobSAhPT0gZHN0KSB7XG4gICAgZHN0WzhdID0gbVs4XTtcbiAgICBkc3RbOV0gPSBtWzldO1xuICAgIGRzdFsxMF0gPSBtWzEwXTtcbiAgICBkc3RbMTFdID0gbVsxMV07XG4gICAgZHN0WzEyXSA9IG1bMTJdO1xuICAgIGRzdFsxM10gPSBtWzEzXTtcbiAgICBkc3RbMTRdID0gbVsxNF07XG4gICAgZHN0WzE1XSA9IG1bMTVdO1xuICB9XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgNC1ieS00IG1hdHJpeCB3aGljaCByb3RhdGVzIGFyb3VuZCB0aGUgZ2l2ZW4gYXhpcyBieSB0aGUgZ2l2ZW5cbiAqIGFuZ2xlLlxuICogQHBhcmFtIHtWZWMzfSBheGlzIFRoZSBheGlzXG4gKiAgICAgYWJvdXQgd2hpY2ggdG8gcm90YXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlSW5SYWRpYW5zIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGUgKGluIHJhZGlhbnMpLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vbmUgbmV3IG9uZSBpcyBjcmVhdGVkLi5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IEEgbWF0cml4IHdoaWNoIHJvdGF0ZXMgYW5nbGUgcmFkaWFuc1xuICogICAgIGFyb3VuZCB0aGUgYXhpcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5mdW5jdGlvbiBheGlzUm90YXRpb24oYXhpcywgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuXG4gIHZhciB4ID0gYXhpc1swXTtcbiAgdmFyIHkgPSBheGlzWzFdO1xuICB2YXIgeiA9IGF4aXNbMl07XG4gIHZhciBuID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG4gIHggLz0gbjtcbiAgeSAvPSBuO1xuICB6IC89IG47XG4gIHZhciB4eCA9IHggKiB4O1xuICB2YXIgeXkgPSB5ICogeTtcbiAgdmFyIHp6ID0geiAqIHo7XG4gIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgdmFyIG9uZU1pbnVzQ29zaW5lID0gMSAtIGM7XG5cbiAgZHN0WzBdID0geHggKyAoMSAtIHh4KSAqIGM7XG4gIGRzdFsxXSA9IHggKiB5ICogb25lTWludXNDb3NpbmUgKyB6ICogcztcbiAgZHN0WzJdID0geCAqIHogKiBvbmVNaW51c0Nvc2luZSAtIHkgKiBzO1xuICBkc3RbM10gPSAwO1xuICBkc3RbNF0gPSB4ICogeSAqIG9uZU1pbnVzQ29zaW5lIC0geiAqIHM7XG4gIGRzdFs1XSA9IHl5ICsgKDEgLSB5eSkgKiBjO1xuICBkc3RbNl0gPSB5ICogeiAqIG9uZU1pbnVzQ29zaW5lICsgeCAqIHM7XG4gIGRzdFs3XSA9IDA7XG4gIGRzdFs4XSA9IHggKiB6ICogb25lTWludXNDb3NpbmUgKyB5ICogcztcbiAgZHN0WzldID0geSAqIHogKiBvbmVNaW51c0Nvc2luZSAtIHggKiBzO1xuICBkc3RbMTBdID0genogKyAoMSAtIHp6KSAqIGM7XG4gIGRzdFsxMV0gPSAwO1xuICBkc3RbMTJdID0gMDtcbiAgZHN0WzEzXSA9IDA7XG4gIGRzdFsxNF0gPSAwO1xuICBkc3RbMTVdID0gMTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIE1vZGlmaWVzIHRoZSBnaXZlbiA0LWJ5LTQgbWF0cml4IGJ5IHJvdGF0aW9uIGFyb3VuZCB0aGUgZ2l2ZW4gYXhpcyBieSB0aGVcbiAqIGdpdmVuIGFuZ2xlLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIFRoZSBtYXRyaXguXG4gKiBAcGFyYW0ge1ZlYzN9IGF4aXMgVGhlIGF4aXNcbiAqICAgICBhYm91dCB3aGljaCB0byByb3RhdGUuXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm9uZSBuZXcgb25lIGlzIGNyZWF0ZWQuLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBvbmNlIG1vZGlmaWVkLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cbmZ1bmN0aW9uIGF4aXNSb3RhdGUobSwgYXhpcywgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuXG4gIHZhciB4ID0gYXhpc1swXTtcbiAgdmFyIHkgPSBheGlzWzFdO1xuICB2YXIgeiA9IGF4aXNbMl07XG4gIHZhciBuID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG4gIHggLz0gbjtcbiAgeSAvPSBuO1xuICB6IC89IG47XG4gIHZhciB4eCA9IHggKiB4O1xuICB2YXIgeXkgPSB5ICogeTtcbiAgdmFyIHp6ID0geiAqIHo7XG4gIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgdmFyIG9uZU1pbnVzQ29zaW5lID0gMSAtIGM7XG5cbiAgdmFyIHIwMCA9IHh4ICsgKDEgLSB4eCkgKiBjO1xuICB2YXIgcjAxID0geCAqIHkgKiBvbmVNaW51c0Nvc2luZSArIHogKiBzO1xuICB2YXIgcjAyID0geCAqIHogKiBvbmVNaW51c0Nvc2luZSAtIHkgKiBzO1xuICB2YXIgcjEwID0geCAqIHkgKiBvbmVNaW51c0Nvc2luZSAtIHogKiBzO1xuICB2YXIgcjExID0geXkgKyAoMSAtIHl5KSAqIGM7XG4gIHZhciByMTIgPSB5ICogeiAqIG9uZU1pbnVzQ29zaW5lICsgeCAqIHM7XG4gIHZhciByMjAgPSB4ICogeiAqIG9uZU1pbnVzQ29zaW5lICsgeSAqIHM7XG4gIHZhciByMjEgPSB5ICogeiAqIG9uZU1pbnVzQ29zaW5lIC0geCAqIHM7XG4gIHZhciByMjIgPSB6eiArICgxIC0genopICogYztcblxuICB2YXIgbTAwID0gbVswXTtcbiAgdmFyIG0wMSA9IG1bMV07XG4gIHZhciBtMDIgPSBtWzJdO1xuICB2YXIgbTAzID0gbVszXTtcbiAgdmFyIG0xMCA9IG1bNF07XG4gIHZhciBtMTEgPSBtWzVdO1xuICB2YXIgbTEyID0gbVs2XTtcbiAgdmFyIG0xMyA9IG1bN107XG4gIHZhciBtMjAgPSBtWzhdO1xuICB2YXIgbTIxID0gbVs5XTtcbiAgdmFyIG0yMiA9IG1bMTBdO1xuICB2YXIgbTIzID0gbVsxMV07XG5cbiAgZHN0WzBdID0gcjAwICogbTAwICsgcjAxICogbTEwICsgcjAyICogbTIwO1xuICBkc3RbMV0gPSByMDAgKiBtMDEgKyByMDEgKiBtMTEgKyByMDIgKiBtMjE7XG4gIGRzdFsyXSA9IHIwMCAqIG0wMiArIHIwMSAqIG0xMiArIHIwMiAqIG0yMjtcbiAgZHN0WzNdID0gcjAwICogbTAzICsgcjAxICogbTEzICsgcjAyICogbTIzO1xuICBkc3RbNF0gPSByMTAgKiBtMDAgKyByMTEgKiBtMTAgKyByMTIgKiBtMjA7XG4gIGRzdFs1XSA9IHIxMCAqIG0wMSArIHIxMSAqIG0xMSArIHIxMiAqIG0yMTtcbiAgZHN0WzZdID0gcjEwICogbTAyICsgcjExICogbTEyICsgcjEyICogbTIyO1xuICBkc3RbN10gPSByMTAgKiBtMDMgKyByMTEgKiBtMTMgKyByMTIgKiBtMjM7XG4gIGRzdFs4XSA9IHIyMCAqIG0wMCArIHIyMSAqIG0xMCArIHIyMiAqIG0yMDtcbiAgZHN0WzldID0gcjIwICogbTAxICsgcjIxICogbTExICsgcjIyICogbTIxO1xuICBkc3RbMTBdID0gcjIwICogbTAyICsgcjIxICogbTEyICsgcjIyICogbTIyO1xuICBkc3RbMTFdID0gcjIwICogbTAzICsgcjIxICogbTEzICsgcjIyICogbTIzO1xuXG4gIGlmIChtICE9PSBkc3QpIHtcbiAgICBkc3RbMTJdID0gbVsxMl07XG4gICAgZHN0WzEzXSA9IG1bMTNdO1xuICAgIGRzdFsxNF0gPSBtWzE0XTtcbiAgICBkc3RbMTVdID0gbVsxNV07XG4gIH1cblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSA0LWJ5LTQgbWF0cml4IHdoaWNoIHNjYWxlcyBpbiBlYWNoIGRpbWVuc2lvbiBieSBhbiBhbW91bnQgZ2l2ZW4gYnlcbiAqIHRoZSBjb3JyZXNwb25kaW5nIGVudHJ5IGluIHRoZSBnaXZlbiB2ZWN0b3I7IGFzc3VtZXMgdGhlIHZlY3RvciBoYXMgdGhyZWVcbiAqIGVudHJpZXMuXG4gKiBAcGFyYW0ge1ZlYzN9IHYgQSB2ZWN0b3Igb2ZcbiAqICAgICB0aHJlZSBlbnRyaWVzIHNwZWNpZnlpbmcgdGhlIGZhY3RvciBieSB3aGljaCB0byBzY2FsZSBpbiBlYWNoIGRpbWVuc2lvbi5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub25lIG5ldyBvbmUgaXMgY3JlYXRlZC4uXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgc2NhbGluZyBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gc2NhbGluZyh2LCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcblxuICBkc3RbMF0gPSB2WzBdO1xuICBkc3RbMV0gPSAwO1xuICBkc3RbMl0gPSAwO1xuICBkc3RbM10gPSAwO1xuICBkc3RbNF0gPSAwO1xuICBkc3RbNV0gPSB2WzFdO1xuICBkc3RbNl0gPSAwO1xuICBkc3RbN10gPSAwO1xuICBkc3RbOF0gPSAwO1xuICBkc3RbOV0gPSAwO1xuICBkc3RbMTBdID0gdlsyXTtcbiAgZHN0WzExXSA9IDA7XG4gIGRzdFsxMl0gPSAwO1xuICBkc3RbMTNdID0gMDtcbiAgZHN0WzE0XSA9IDA7XG4gIGRzdFsxNV0gPSAxO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogTW9kaWZpZXMgdGhlIGdpdmVuIDQtYnktNCBtYXRyaXgsIHNjYWxpbmcgaW4gZWFjaCBkaW1lbnNpb24gYnkgYW4gYW1vdW50XG4gKiBnaXZlbiBieSB0aGUgY29ycmVzcG9uZGluZyBlbnRyeSBpbiB0aGUgZ2l2ZW4gdmVjdG9yOyBhc3N1bWVzIHRoZSB2ZWN0b3IgaGFzXG4gKiB0aHJlZSBlbnRyaWVzLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIFRoZSBtYXRyaXggdG8gYmUgbW9kaWZpZWQuXG4gKiBAcGFyYW0ge1ZlYzN9IHYgQSB2ZWN0b3Igb2YgdGhyZWUgZW50cmllcyBzcGVjaWZ5aW5nIHRoZVxuICogICAgIGZhY3RvciBieSB3aGljaCB0byBzY2FsZSBpbiBlYWNoIGRpbWVuc2lvbi5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub25lIG5ldyBvbmUgaXMgY3JlYXRlZC4uXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIG9uY2UgbW9kaWZpZWQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuZnVuY3Rpb24gc2NhbGUobSwgdiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG5cbiAgdmFyIHYwID0gdlswXTtcbiAgdmFyIHYxID0gdlsxXTtcbiAgdmFyIHYyID0gdlsyXTtcblxuICBkc3RbMF0gPSB2MCAqIG1bMCAqIDQgKyAwXTtcbiAgZHN0WzFdID0gdjAgKiBtWzAgKiA0ICsgMV07XG4gIGRzdFsyXSA9IHYwICogbVswICogNCArIDJdO1xuICBkc3RbM10gPSB2MCAqIG1bMCAqIDQgKyAzXTtcbiAgZHN0WzRdID0gdjEgKiBtWzEgKiA0ICsgMF07XG4gIGRzdFs1XSA9IHYxICogbVsxICogNCArIDFdO1xuICBkc3RbNl0gPSB2MSAqIG1bMSAqIDQgKyAyXTtcbiAgZHN0WzddID0gdjEgKiBtWzEgKiA0ICsgM107XG4gIGRzdFs4XSA9IHYyICogbVsyICogNCArIDBdO1xuICBkc3RbOV0gPSB2MiAqIG1bMiAqIDQgKyAxXTtcbiAgZHN0WzEwXSA9IHYyICogbVsyICogNCArIDJdO1xuICBkc3RbMTFdID0gdjIgKiBtWzIgKiA0ICsgM107XG5cbiAgaWYgKG0gIT09IGRzdCkge1xuICAgIGRzdFsxMl0gPSBtWzEyXTtcbiAgICBkc3RbMTNdID0gbVsxM107XG4gICAgZHN0WzE0XSA9IG1bMTRdO1xuICAgIGRzdFsxNV0gPSBtWzE1XTtcbiAgfVxuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogVGFrZXMgYSA0LWJ5LTQgbWF0cml4IGFuZCBhIHZlY3RvciB3aXRoIDMgZW50cmllcyxcbiAqIGludGVycHJldHMgdGhlIHZlY3RvciBhcyBhIHBvaW50LCB0cmFuc2Zvcm1zIHRoYXQgcG9pbnQgYnkgdGhlIG1hdHJpeCwgYW5kXG4gKiByZXR1cm5zIHRoZSByZXN1bHQgYXMgYSB2ZWN0b3Igd2l0aCAzIGVudHJpZXMuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IG0gVGhlIG1hdHJpeC5cbiAqIEBwYXJhbSB7VmVjM30gdiBUaGUgcG9pbnQuXG4gKiBAcGFyYW0ge1ZlYzN9IGRzdCBvcHRpb25hbCB2ZWMzIHRvIHN0b3JlIHJlc3VsdFxuICogQHJldHVybiB7VmVjM30gZHN0IG9yIG5ldyB2ZWMzIGlmIG5vdCBwcm92aWRlZFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50KG0sIHYsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgdjMuY3JlYXRlKCk7XG4gIHZhciB2MCA9IHZbMF07XG4gIHZhciB2MSA9IHZbMV07XG4gIHZhciB2MiA9IHZbMl07XG4gIHZhciBkID0gdjAgKiBtWzAgKiA0ICsgM10gKyB2MSAqIG1bMSAqIDQgKyAzXSArIHYyICogbVsyICogNCArIDNdICsgbVszICogNCArIDNdO1xuXG4gIGRzdFswXSA9ICh2MCAqIG1bMCAqIDQgKyAwXSArIHYxICogbVsxICogNCArIDBdICsgdjIgKiBtWzIgKiA0ICsgMF0gKyBtWzMgKiA0ICsgMF0pIC8gZDtcbiAgZHN0WzFdID0gKHYwICogbVswICogNCArIDFdICsgdjEgKiBtWzEgKiA0ICsgMV0gKyB2MiAqIG1bMiAqIDQgKyAxXSArIG1bMyAqIDQgKyAxXSkgLyBkO1xuICBkc3RbMl0gPSAodjAgKiBtWzAgKiA0ICsgMl0gKyB2MSAqIG1bMSAqIDQgKyAyXSArIHYyICogbVsyICogNCArIDJdICsgbVszICogNCArIDJdKSAvIGQ7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBUYWtlcyBhIDQtYnktNCBtYXRyaXggYW5kIGEgdmVjdG9yIHdpdGggMyBlbnRyaWVzLCBpbnRlcnByZXRzIHRoZSB2ZWN0b3IgYXMgYVxuICogZGlyZWN0aW9uLCB0cmFuc2Zvcm1zIHRoYXQgZGlyZWN0aW9uIGJ5IHRoZSBtYXRyaXgsIGFuZCByZXR1cm5zIHRoZSByZXN1bHQ7XG4gKiBhc3N1bWVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBvZiAzLWRpbWVuc2lvbmFsIHNwYWNlIHJlcHJlc2VudGVkIGJ5IHRoZSBtYXRyaXhcbiAqIGlzIHBhcmFsbGVsLXByZXNlcnZpbmcsIGkuZS4gYW55IGNvbWJpbmF0aW9uIG9mIHJvdGF0aW9uLCBzY2FsaW5nIGFuZFxuICogdHJhbnNsYXRpb24sIGJ1dCBub3QgYSBwZXJzcGVjdGl2ZSBkaXN0b3J0aW9uLiBSZXR1cm5zIGEgdmVjdG9yIHdpdGggM1xuICogZW50cmllcy5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4LlxuICogQHBhcmFtIHtWZWMzfSB2IFRoZSBkaXJlY3Rpb24uXG4gKiBAcGFyYW0ge1ZlYzN9IGRzdCBvcHRpb25hbCBWZWMzIHRvIHN0b3JlIHJlc3VsdFxuICogQHJldHVybiB7VmVjM30gZHN0IG9yIG5ldyBWZWMzIGlmIG5vdCBwcm92aWRlZFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybURpcmVjdGlvbihtLCB2LCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IHYzLmNyZWF0ZSgpO1xuXG4gIHZhciB2MCA9IHZbMF07XG4gIHZhciB2MSA9IHZbMV07XG4gIHZhciB2MiA9IHZbMl07XG5cbiAgZHN0WzBdID0gdjAgKiBtWzAgKiA0ICsgMF0gKyB2MSAqIG1bMSAqIDQgKyAwXSArIHYyICogbVsyICogNCArIDBdO1xuICBkc3RbMV0gPSB2MCAqIG1bMCAqIDQgKyAxXSArIHYxICogbVsxICogNCArIDFdICsgdjIgKiBtWzIgKiA0ICsgMV07XG4gIGRzdFsyXSA9IHYwICogbVswICogNCArIDJdICsgdjEgKiBtWzEgKiA0ICsgMl0gKyB2MiAqIG1bMiAqIDQgKyAyXTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFRha2VzIGEgNC1ieS00IG1hdHJpeCBtIGFuZCBhIHZlY3RvciB2IHdpdGggMyBlbnRyaWVzLCBpbnRlcnByZXRzIHRoZSB2ZWN0b3JcbiAqIGFzIGEgbm9ybWFsIHRvIGEgc3VyZmFjZSwgYW5kIGNvbXB1dGVzIGEgdmVjdG9yIHdoaWNoIGlzIG5vcm1hbCB1cG9uXG4gKiB0cmFuc2Zvcm1pbmcgdGhhdCBzdXJmYWNlIGJ5IHRoZSBtYXRyaXguIFRoZSBlZmZlY3Qgb2YgdGhpcyBmdW5jdGlvbiBpcyB0aGVcbiAqIHNhbWUgYXMgdHJhbnNmb3JtaW5nIHYgKGFzIGEgZGlyZWN0aW9uKSBieSB0aGUgaW52ZXJzZS10cmFuc3Bvc2Ugb2YgbS4gIFRoaXNcbiAqIGZ1bmN0aW9uIGFzc3VtZXMgdGhlIHRyYW5zZm9ybWF0aW9uIG9mIDMtZGltZW5zaW9uYWwgc3BhY2UgcmVwcmVzZW50ZWQgYnkgdGhlXG4gKiBtYXRyaXggaXMgcGFyYWxsZWwtcHJlc2VydmluZywgaS5lLiBhbnkgY29tYmluYXRpb24gb2Ygcm90YXRpb24sIHNjYWxpbmcgYW5kXG4gKiB0cmFuc2xhdGlvbiwgYnV0IG5vdCBhIHBlcnNwZWN0aXZlIGRpc3RvcnRpb24uICBSZXR1cm5zIGEgdmVjdG9yIHdpdGggM1xuICogZW50cmllcy5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4LlxuICogQHBhcmFtIHtWZWMzfSB2IFRoZSBub3JtYWwuXG4gKiBAcGFyYW0ge1ZlYzN9IFtkc3RdIFRoZSBkaXJlY3Rpb24uXG4gKiBAcmV0dXJuIHtWZWMzfSBUaGUgdHJhbnNmb3JtZWQgZGlyZWN0aW9uLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybU5vcm1hbChtLCB2LCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IHYzLmNyZWF0ZSgpO1xuICB2YXIgbWkgPSBpbnZlcnNlKG0pO1xuICB2YXIgdjAgPSB2WzBdO1xuICB2YXIgdjEgPSB2WzFdO1xuICB2YXIgdjIgPSB2WzJdO1xuXG4gIGRzdFswXSA9IHYwICogbWlbMCAqIDQgKyAwXSArIHYxICogbWlbMCAqIDQgKyAxXSArIHYyICogbWlbMCAqIDQgKyAyXTtcbiAgZHN0WzFdID0gdjAgKiBtaVsxICogNCArIDBdICsgdjEgKiBtaVsxICogNCArIDFdICsgdjIgKiBtaVsxICogNCArIDJdO1xuICBkc3RbMl0gPSB2MCAqIG1pWzIgKiA0ICsgMF0gKyB2MSAqIG1pWzIgKiA0ICsgMV0gKyB2MiAqIG1pWzIgKiA0ICsgMl07XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuZXhwb3J0cy5heGlzUm90YXRlID0gYXhpc1JvdGF0ZTtcbmV4cG9ydHMuYXhpc1JvdGF0aW9uID0gYXhpc1JvdGF0aW9uO1xuZXhwb3J0cy5jb3B5ID0gY29weTtcbmV4cG9ydHMuZnJ1c3R1bSA9IGZydXN0dW07XG5leHBvcnRzLmdldEF4aXMgPSBnZXRBeGlzO1xuZXhwb3J0cy5nZXRUcmFuc2xhdGlvbiA9IGdldFRyYW5zbGF0aW9uO1xuZXhwb3J0cy5pZGVudGl0eSA9IGlkZW50aXR5O1xuZXhwb3J0cy5pbnZlcnNlID0gaW52ZXJzZTtcbmV4cG9ydHMubG9va0F0ID0gbG9va0F0O1xuZXhwb3J0cy5tdWx0aXBseSA9IG11bHRpcGx5O1xuZXhwb3J0cy5uZWdhdGUgPSBuZWdhdGU7XG5leHBvcnRzLm9ydGhvID0gb3J0aG87XG5leHBvcnRzLnBlcnNwZWN0aXZlID0gcGVyc3BlY3RpdmU7XG5leHBvcnRzLnJvdGF0ZVggPSByb3RhdGVYO1xuZXhwb3J0cy5yb3RhdGVZID0gcm90YXRlWTtcbmV4cG9ydHMucm90YXRlWiA9IHJvdGF0ZVo7XG5leHBvcnRzLnJvdGF0aW9uWCA9IHJvdGF0aW9uWDtcbmV4cG9ydHMucm90YXRpb25ZID0gcm90YXRpb25ZO1xuZXhwb3J0cy5yb3RhdGlvblogPSByb3RhdGlvblo7XG5leHBvcnRzLnNjYWxlID0gc2NhbGU7XG5leHBvcnRzLnNjYWxpbmcgPSBzY2FsaW5nO1xuZXhwb3J0cy5zZXRBeGlzID0gc2V0QXhpcztcbmV4cG9ydHMuc2V0RGVmYXVsdFR5cGUgPSBzZXREZWZhdWx0VHlwZTtcbmV4cG9ydHMuc2V0VHJhbnNsYXRpb24gPSBzZXRUcmFuc2xhdGlvbjtcbmV4cG9ydHMudHJhbnNmb3JtRGlyZWN0aW9uID0gdHJhbnNmb3JtRGlyZWN0aW9uO1xuZXhwb3J0cy50cmFuc2Zvcm1Ob3JtYWwgPSB0cmFuc2Zvcm1Ob3JtYWw7XG5leHBvcnRzLnRyYW5zZm9ybVBvaW50ID0gdHJhbnNmb3JtUG9pbnQ7XG5leHBvcnRzLnRyYW5zbGF0ZSA9IHRyYW5zbGF0ZTtcbmV4cG9ydHMudHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbjtcbmV4cG9ydHMudHJhbnNwb3NlID0gdHJhbnNwb3NlO1xuXG4vKioqLyB9KSxcbi8qIDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucHJpbWl0aXZlcyA9IGV4cG9ydHMudjMgPSBleHBvcnRzLm00ID0gdW5kZWZpbmVkO1xuXG52YXIgX3R3Z2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXG5PYmplY3Qua2V5cyhfdHdnbCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3R3Z2xba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfbSA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cbnZhciBtNCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9tKTtcblxudmFyIF92ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIHYzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3YpO1xuXG52YXIgX3ByaW1pdGl2ZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblxudmFyIHByaW1pdGl2ZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcHJpbWl0aXZlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmV4cG9ydHMubTQgPSBtNDtcbmV4cG9ydHMudjMgPSB2MztcbmV4cG9ydHMucHJpbWl0aXZlcyA9IHByaW1pdGl2ZXM7XG5cbi8qKiovIH0pLFxuLyogOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zZXREZWZhdWx0cyA9IGV4cG9ydHMucmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZSA9IGV4cG9ydHMuZ2V0V2ViR0xDb250ZXh0ID0gZXhwb3J0cy5nZXRDb250ZXh0ID0gZXhwb3J0cy5hZGRFeHRlbnNpb25zVG9Db250ZXh0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2F0dHJpYnV0ZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5PYmplY3Qua2V5cyhfYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2F0dHJpYnV0ZXNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfZHJhdyA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXG5PYmplY3Qua2V5cyhfZHJhdykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2RyYXdba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfZnJhbWVidWZmZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cbk9iamVjdC5rZXlzKF9mcmFtZWJ1ZmZlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9mcmFtZWJ1ZmZlcnNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfcHJvZ3JhbXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG5PYmplY3Qua2V5cyhfcHJvZ3JhbXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9wcm9ncmFtc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF90ZXh0dXJlcyA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cbk9iamVjdC5rZXlzKF90ZXh0dXJlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3RleHR1cmVzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX3R5cGVkYXJyYXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuT2JqZWN0LmtleXMoX3R5cGVkYXJyYXlzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfdHlwZWRhcnJheXNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG5PYmplY3Qua2V5cyhfdXRpbHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF91dGlsc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF92ZXJ0ZXhBcnJheXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcblxuT2JqZWN0LmtleXMoX3ZlcnRleEFycmF5cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3ZlcnRleEFycmF5c1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIGF0dHJpYnV0ZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfYXR0cmlidXRlcyk7XG5cbnZhciB0ZXh0dXJlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90ZXh0dXJlcyk7XG5cbnZhciBfaGVscGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIGhlbHBlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oZWxwZXIpO1xuXG52YXIgdXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vKipcbiAqIFRoZSBtYWluIFRXR0wgbW9kdWxlLlxuICpcbiAqIEZvciBtb3N0IHVzZSBjYXNlcyB5b3Ugc2hvdWxkbid0IG5lZWQgYW55dGhpbmcgb3V0c2lkZSB0aGlzIG1vZHVsZS5cbiAqIEV4Y2VwdGlvbnMgYmV0d2VlbiB0aGUgc3R1ZmYgYWRkZWQgdG8gdHdnbC1mdWxsICh2MywgbTQsIHByaW1pdGl2ZXMpXG4gKlxuICogQG1vZHVsZSB0d2dsXG4gKiBAYm9ycm93cyBtb2R1bGU6dHdnbC9hdHRyaWJ1dGVzLnNldEF0dHJpYkluZm9CdWZmZXJGcm9tQXJyYXkgYXMgc2V0QXR0cmliSW5mb0J1ZmZlckZyb21BcnJheVxuICogQGJvcnJvd3MgbW9kdWxlOnR3Z2wvYXR0cmlidXRlcy5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cyBhcyBjcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5c1xuICogQGJvcnJvd3MgbW9kdWxlOnR3Z2wvYXR0cmlidXRlcy5jcmVhdGVWZXJ0ZXhBcnJheUluZm8gYXMgY3JlYXRlVmVydGV4QXJyYXlJbmZvXG4gKiBAYm9ycm93cyBtb2R1bGU6dHdnbC9kcmF3LmRyYXdCdWZmZXJJbmZvIGFzIGRyYXdCdWZmZXJJbmZvXG4gKiBAYm9ycm93cyBtb2R1bGU6dHdnbC9kcmF3LmRyYXdPYmplY3RMaXN0IGFzIGRyYXdPYmplY3RMaXN0XG4gKiBAYm9ycm93cyBtb2R1bGU6dHdnbC9mcmFtZWJ1ZmZlcnMuY3JlYXRlRnJhbWVidWZmZXJJbmZvIGFzIGNyZWF0ZUZyYW1lYnVmZmVySW5mb1xuICogQGJvcnJvd3MgbW9kdWxlOnR3Z2wvZnJhbWVidWZmZXJzLnJlc2l6ZUZyYW1lYnVmZmVySW5mbyBhcyByZXNpemVGcmFtZWJ1ZmZlckluZm9cbiAqIEBib3Jyb3dzIG1vZHVsZTp0d2dsL2ZyYW1lYnVmZmVycy5iaW5kRnJhbWVidWZmZXJJbmZvIGFzIGJpbmRGcmFtZWJ1ZmZlckluZm9cbiAqIEBib3Jyb3dzIG1vZHVsZTp0d2dsL3Byb2dyYW1zLmNyZWF0ZVByb2dyYW1JbmZvIGFzIGNyZWF0ZVByb2dyYW1JbmZvXG4gKiBAYm9ycm93cyBtb2R1bGU6dHdnbC9wcm9ncmFtcy5jcmVhdGVVbmlmb3JtQmxvY2tJbmZvIGFzIGNyZWF0ZVVuaWZvcm1CbG9ja0luZm9cbiAqIEBib3Jyb3dzIG1vZHVsZTp0d2dsL3Byb2dyYW1zLmJpbmRVbmlmb3JtQmxvY2sgYXMgYmluZFVuaWZvcm1CbG9ja1xuICogQGJvcnJvd3MgbW9kdWxlOnR3Z2wvcHJvZ3JhbXMuc2V0VW5pZm9ybUJsb2NrIGFzIHNldFVuaWZvcm1CbG9ja1xuICogQGJvcnJvd3MgbW9kdWxlOnR3Z2wvcHJvZ3JhbXMuc2V0QmxvY2tVbmlmb3JtcyBhcyBzZXRCbG9ja1VuaWZvcm1zXG4gKiBAYm9ycm93cyBtb2R1bGU6dHdnbC9wcm9ncmFtcy5zZXRVbmlmb3JtcyBhcyBzZXRVbmlmb3Jtc1xuICogQGJvcnJvd3MgbW9kdWxlOnR3Z2wvcHJvZ3JhbXMuc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXMgYXMgc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXNcbiAqIEBib3Jyb3dzIG1vZHVsZTp0d2dsL3RleHR1cmVzLnNldFRleHR1cmVGcm9tQXJyYXkgYXMgc2V0VGV4dHVyZUZyb21BcnJheVxuICogQGJvcnJvd3MgbW9kdWxlOnR3Z2wvdGV4dHVyZXMuY3JlYXRlVGV4dHVyZSBhcyBjcmVhdGVUZXh0dXJlXG4gKiBAYm9ycm93cyBtb2R1bGU6dHdnbC90ZXh0dXJlcy5yZXNpemVUZXh0dXJlIGFzIHJlc2l6ZVRleHR1cmVcbiAqIEBib3Jyb3dzIG1vZHVsZTp0d2dsL3RleHR1cmVzLmNyZWF0ZVRleHR1cmVzIGFzIGNyZWF0ZVRleHR1cmVzXG4gKi9cblxuLy8gbWFrZSBzdXJlIHdlIGRvbid0IHNlZSBhIGdsb2JhbCBnbFxuLypcbiAqIENvcHlyaWdodCAyMDE1LCBHcmVnZyBUYXZhcmVzLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAqIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbiAqIG1ldDpcbiAqXG4gKiAgICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuICogbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuICogaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogZGlzdHJpYnV0aW9uLlxuICogICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHcmVnZyBUYXZhcmVzLiBub3IgdGhlIG5hbWVzIG9mIGhpc1xuICogY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbiAqIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuICogXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuICogTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4gKiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuICogT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4gKiBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4gKiBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuICogVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuICogKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4gKiBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbnZhciBnbCA9IHVuZGVmaW5lZDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxudmFyIGRlZmF1bHRzID0ge1xuICBhZGRFeHRlbnNpb25zVG9Db250ZXh0OiB0cnVlXG59O1xuXG4vKipcbiAqIFZhcmlvdXMgZGVmYXVsdCBzZXR0aW5ncyBmb3IgdHdnbC5cbiAqXG4gKiBOb3RlOiBZb3UgY2FuIGNhbGwgdGhpcyBhbnkgbnVtYmVyIG9mIHRpbWVzLiBFeGFtcGxlOlxuICpcbiAqICAgICB0d2dsLnNldERlZmF1bHRzKHsgdGV4dHVyZUNvbG9yOiBbMSwgMCwgMCwgMV0gfSk7XG4gKiAgICAgdHdnbC5zZXREZWZhdWx0cyh7IGF0dHJpYlByZWZpeDogJ2FfJyB9KTtcbiAqXG4gKiBpcyBlcXVpdmFsZW50IHRvXG4gKlxuICogICAgIHR3Z2wuc2V0RGVmYXVsdHMoe1xuICogICAgICAgdGV4dHVyZUNvbG9yOiBbMSwgMCwgMCwgMV0sXG4gKiAgICAgICBhdHRyaWJQcmVmaXg6ICdhXycsXG4gKiAgICAgfSk7XG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gRGVmYXVsdHNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBhdHRyaWJQcmVmaXggVGhlIHByZWZpeCB0byBzdGljayBvbiBhdHRyaWJ1dGVzXG4gKlxuICogICBXaGVuIHdyaXRpbmcgc2hhZGVycyBJIHByZWZlciB0byBuYW1lIGF0dHJpYnV0ZXMgd2l0aCBgYV9gLCB1bmlmb3JtcyB3aXRoIGB1X2AgYW5kIHZhcnlpbmdzIHdpdGggYHZfYFxuICogICBhcyBpdCBtYWtlcyBpdCBjbGVhciB3aGVyZSB0aGV5IGNhbWUgZnJvbS4gQnV0LCB3aGVuIGJ1aWxkaW5nIGdlb21ldHJ5IEkgcHJlZmVyIHVzaW5nIHVucHJlZml4ZWQgbmFtZXMuXG4gKlxuICogICBJbiBvdGhlcndvcmRzIEknbGwgY3JlYXRlIGFycmF5cyBvZiBnZW9tZXRyeSBsaWtlIHRoaXNcbiAqXG4gKiAgICAgICBjb25zdCBhcnJheXMgPSB7XG4gKiAgICAgICAgIHBvc2l0aW9uOiAuLi5cbiAqICAgICAgICAgbm9ybWFsOiAuLi5cbiAqICAgICAgICAgdGV4Y29vcmQ6IC4uLlxuICogICAgICAgfTtcbiAqXG4gKiAgIEJ1dCBuZWVkIHRob3NlIG1hcHBlZCB0byBhdHRyaWJ1dGVzIGFuZCBteSBhdHRyaWJ1dGVzIHN0YXJ0IHdpdGggYGFfYC5cbiAqXG4gKiAgIERlZmF1bHQ6IGBcIlwiYFxuICpcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyW119IHRleHR1cmVDb2xvciBBcnJheSBvZiA0IHZhbHVlcyBpbiB0aGUgcmFuZ2UgMCB0byAxXG4gKlxuICogICBUaGUgZGVmYXVsdCB0ZXh0dXJlIGNvbG9yIGlzIHVzZWQgd2hlbiBsb2FkaW5nIHRleHR1cmVzIGZyb21cbiAqICAgdXJscy4gQmVjYXVzZSB0aGUgVVJMIHdpbGwgYmUgbG9hZGVkIGFzeW5jIHdlJ2QgbGlrZSB0byBiZVxuICogICBhYmxlIHRvIHVzZSB0aGUgdGV4dHVyZSBpbW1lZGlhdGVseS4gQnkgcHV0dGluZyBhIDF4MSBwaXhlbFxuICogICBjb2xvciBpbiB0aGUgdGV4dHVyZSB3ZSBjYW4gc3RhcnQgdXNpbmcgdGhlIHRleHR1cmUgYmVmb3JlXG4gKiAgIHRoZSBVUkwgaGFzIGxvYWRlZC5cbiAqXG4gKiAgIERlZmF1bHQ6IGBbMC41LCAwLjc1LCAxLCAxXWBcbiAqXG4gKiBAcHJvcGVydHkge3N0cmluZ30gY3Jvc3NPcmlnaW5cbiAqXG4gKiAgIElmIG5vdCB1bmRlZmluZWQgc2V0cyB0aGUgY3Jvc3NPcmlnaW4gYXR0cmlidXRlIG9uIGltYWdlc1xuICogICB0aGF0IHR3Z2wgY3JlYXRlcyB3aGVuIGRvd25sb2FkaW5nIGltYWdlcyBmb3IgdGV4dHVyZXMuXG4gKlxuICogICBBbHNvIHNlZSB7QGxpbmsgbW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9LlxuICpcbiAqIEBwcm9wZXJ0eSB7Ym9vbH0gYWRkRXh0ZW5zaW9uc1RvQ29udGV4dFxuICpcbiAqICAgSWYgdHJ1ZSwgdGhlbiwgd2hlbiB0d2dsIHdpbGwgdHJ5IHRvIGFkZCBhbnkgc3VwcG9ydGVkIFdlYkdMIGV4dGVuc2lvbnNcbiAqICAgZGlyZWN0bHkgdG8gdGhlIGNvbnRleHQgdW5kZXIgdGhlaXIgbm9ybWFsIEdMIG5hbWVzLiBGb3IgZXhhbXBsZVxuICogICBpZiBBTkdMRV9pbnN0YW5jZXNfYXJyYXlzIGV4aXN0cyB0aGVuIHR3Z2wgd291bGQgZW5hYmxlIGl0LFxuICogICBhZGQgdGhlIGZ1bmN0aW9ucyBgdmVydGV4QXR0cmliRGl2aXNvcmAsIGBkcmF3QXJyYXlzSW5zdGFuY2VkYCxcbiAqICAgYGRyYXdFbGVtZW50c0luc3RhbmNlZGAsIGFuZCB0aGUgY29uc3RhbnQgYFZFUlRFWF9BVFRSSUJfQVJSQVlfRElWSVNPUmBcbiAqICAgdG8gdGhlIGBXZWJHTFJlbmRlcmluZ0NvbnRleHRgLlxuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogU2V0cyB2YXJpb3VzIGRlZmF1bHRzIGZvciB0d2dsLlxuICpcbiAqIEluIHRoZSBpbnRlcmVzdCBvZiB0ZXJzZW5lc3Mgd2hpY2ggaXMga2luZCBvZiB0aGUgcG9pbnRcbiAqIG9mIHR3Z2wgSSd2ZSBpbnRlZ3JhdGVkIGEgZmV3IG9mIHRoZSBvbGRlciBmdW5jdGlvbnMgaGVyZVxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuRGVmYXVsdHN9IG5ld0RlZmF1bHRzIFRoZSBkZWZhdWx0IHNldHRpbmdzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cbmZ1bmN0aW9uIHNldERlZmF1bHRzKG5ld0RlZmF1bHRzKSB7XG4gIGhlbHBlci5jb3B5RXhpc3RpbmdQcm9wZXJ0aWVzKG5ld0RlZmF1bHRzLCBkZWZhdWx0cyk7XG4gIGF0dHJpYnV0ZXMuc2V0QXR0cmlidXRlRGVmYXVsdHNfKG5ld0RlZmF1bHRzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB0ZXh0dXJlcy5zZXRUZXh0dXJlRGVmYXVsdHNfKG5ld0RlZmF1bHRzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufVxuXG52YXIgcHJlZml4UkUgPSAvXiguKj8pXy87XG5mdW5jdGlvbiBhZGRFeHRlbnNpb25Ub0NvbnRleHQoZ2wsIGV4dGVuc2lvbk5hbWUpIHtcbiAgdXRpbHMuZ2xFbnVtVG9TdHJpbmcoZ2wsIDApO1xuICB2YXIgZXh0ID0gZ2wuZ2V0RXh0ZW5zaW9uKGV4dGVuc2lvbk5hbWUpO1xuICBpZiAoZXh0KSB7XG4gICAgdmFyIGVudW1zID0ge307XG4gICAgdmFyIGZuU3VmZml4ID0gcHJlZml4UkUuZXhlYyhleHRlbnNpb25OYW1lKVsxXTtcbiAgICB2YXIgZW51bVN1ZmZpeCA9ICdfJyArIGZuU3VmZml4O1xuICAgIGZvciAodmFyIGtleSBpbiBleHQpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGV4dFtrZXldO1xuICAgICAgdmFyIGlzRnVuYyA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIHZhciBzdWZmaXggPSBpc0Z1bmMgPyBmblN1ZmZpeCA6IGVudW1TdWZmaXg7XG4gICAgICB2YXIgbmFtZSA9IGtleTtcbiAgICAgIC8vIGV4YW1wbGVzIG9mIHdoZXJlIHRoaXMgaXMgbm90IHRydWUgYXJlIFdFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9zM3RjXG4gICAgICAvLyBhbmQgV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3B2cnRjXG4gICAgICBpZiAoa2V5LmVuZHNXaXRoKHN1ZmZpeCkpIHtcbiAgICAgICAgbmFtZSA9IGtleS5zdWJzdHJpbmcoMCwga2V5Lmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpO1xuICAgICAgfVxuICAgICAgaWYgKGdsW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFpc0Z1bmMgJiYgZ2xbbmFtZV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgaGVscGVyLndhcm4obmFtZSwgZ2xbbmFtZV0sIHZhbHVlLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNGdW5jKSB7XG4gICAgICAgICAgZ2xbbmFtZV0gPSBmdW5jdGlvbiAob3JpZ0ZuKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gb3JpZ0ZuLmFwcGx5KGV4dCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2xbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICBlbnVtc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHBhc3MgdGhlIG1vZGlmaWVkIGVudW1zIHRvIGdsRW51bVRvU3RyaW5nXG4gICAgZW51bXMuY29uc3RydWN0b3IgPSB7XG4gICAgICBuYW1lOiBleHQuY29uc3RydWN0b3IubmFtZVxuICAgIH07XG4gICAgdXRpbHMuZ2xFbnVtVG9TdHJpbmcoZW51bXMsIDApO1xuICB9XG4gIHJldHVybiBleHQ7XG59XG5cbnZhciBzdXBwb3J0ZWRFeHRlbnNpb25zID0gWydBTkdMRV9pbnN0YW5jZWRfYXJyYXlzJywgJ0VYVF9ibGVuZF9taW5tYXgnLCAnRVhUX2NvbG9yX2J1ZmZlcl9mbG9hdCcsICdFWFRfY29sb3JfYnVmZmVyX2hhbGZfZmxvYXQnLCAnRVhUX2Rpc2pvaW50X3RpbWVyX3F1ZXJ5JywgJ0VYVF9kaXNqb2ludF90aW1lcl9xdWVyeV93ZWJnbDInLCAnRVhUX2ZyYWdfZGVwdGgnLCAnRVhUX3NSR0InLCAnRVhUX3NoYWRlcl90ZXh0dXJlX2xvZCcsICdFWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWMnLCAnT0VTX2VsZW1lbnRfaW5kZXhfdWludCcsICdPRVNfc3RhbmRhcmRfZGVyaXZhdGl2ZXMnLCAnT0VTX3RleHR1cmVfZmxvYXQnLCAnT0VTX3RleHR1cmVfZmxvYXRfbGluZWFyJywgJ09FU190ZXh0dXJlX2hhbGZfZmxvYXQnLCAnT0VTX3RleHR1cmVfaGFsZl9mbG9hdF9saW5lYXInLCAnT0VTX3ZlcnRleF9hcnJheV9vYmplY3QnLCAnV0VCR0xfY29sb3JfYnVmZmVyX2Zsb2F0JywgJ1dFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9hdGMnLCAnV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX2V0YzEnLCAnV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3B2cnRjJywgJ1dFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9zM3RjJywgJ1dFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9zM3RjX3NyZ2InLCAnV0VCR0xfZGVwdGhfdGV4dHVyZScsICdXRUJHTF9kcmF3X2J1ZmZlcnMnXTtcblxuLyoqXG4gKiBBdHRlbXB0cyB0byBlbmFibGUgYWxsIG9mIHRoZSBmb2xsb3dpbmcgZXh0ZW5zaW9uc1xuICogYW5kIGFkZCB0aGVpciBmdW5jdGlvbnMgYW5kIGNvbnN0YW50cyB0byB0aGVcbiAqIGBXZWJHTFJlbmRlcmluZ0NvbnRleHRgIHVzaW5nIHRoZWlyIG5vcm1hbCBub24tZXh0ZW5zaW9uIGxpa2UgbmFtZXMuXG4gKlxuICogICAgICBBTkdMRV9pbnN0YW5jZWRfYXJyYXlzXG4gKiAgICAgIEVYVF9ibGVuZF9taW5tYXhcbiAqICAgICAgRVhUX2NvbG9yX2J1ZmZlcl9mbG9hdFxuICogICAgICBFWFRfY29sb3JfYnVmZmVyX2hhbGZfZmxvYXRcbiAqICAgICAgRVhUX2Rpc2pvaW50X3RpbWVyX3F1ZXJ5XG4gKiAgICAgIEVYVF9kaXNqb2ludF90aW1lcl9xdWVyeV93ZWJnbDJcbiAqICAgICAgRVhUX2ZyYWdfZGVwdGhcbiAqICAgICAgRVhUX3NSR0JcbiAqICAgICAgRVhUX3NoYWRlcl90ZXh0dXJlX2xvZFxuICogICAgICBFWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWNcbiAqICAgICAgT0VTX2VsZW1lbnRfaW5kZXhfdWludFxuICogICAgICBPRVNfc3RhbmRhcmRfZGVyaXZhdGl2ZXNcbiAqICAgICAgT0VTX3RleHR1cmVfZmxvYXRcbiAqICAgICAgT0VTX3RleHR1cmVfZmxvYXRfbGluZWFyXG4gKiAgICAgIE9FU190ZXh0dXJlX2hhbGZfZmxvYXRcbiAqICAgICAgT0VTX3RleHR1cmVfaGFsZl9mbG9hdF9saW5lYXJcbiAqICAgICAgT0VTX3ZlcnRleF9hcnJheV9vYmplY3RcbiAqICAgICAgV0VCR0xfY29sb3JfYnVmZmVyX2Zsb2F0XG4gKiAgICAgIFdFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9hdGNcbiAqICAgICAgV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX2V0YzFcbiAqICAgICAgV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3B2cnRjXG4gKiAgICAgIFdFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9zM3RjXG4gKiAgICAgIFdFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9zM3RjX3NyZ2JcbiAqICAgICAgV0VCR0xfZGVwdGhfdGV4dHVyZVxuICogICAgICBXRUJHTF9kcmF3X2J1ZmZlcnNcbiAqXG4gKiBGb3IgZXhhbXBsZSBpZiBgQU5HTEVfaW5zdGFuY2VkX2FycmF5c2AgZXhpc3RzIHRoZW4gdGhlIGZ1bmN0aW9uc1xuICogYGRyYXdBcnJheXNJbnN0YW5jZWRgLCBgZHJhd0VsZW1lbnRzSW5zdGFuY2VkYCwgYHZlcnRleEF0dHJpYkRpdmlzb3JgXG4gKiBhbmQgdGhlIGNvbnN0YW50IGBWRVJURVhfQVRUUklCX0FSUkFZX0RJVklTT1JgIGFyZSBhZGRlZCB0byB0aGVcbiAqIGBXZWJHTFJlbmRlcmluZ0NvbnRleHRgLlxuICpcbiAqIE5vdGUgdGhhdCBpZiB5b3Ugd2FudCB0byBrbm93IGlmIHRoZSBleHRlbnNpb24gZXhpc3RzIHlvdSBzaG91bGRcbiAqIHByb2JhYmx5IGNhbGwgYGdsLmdldEV4dGVuc2lvbmAgZm9yIGVhY2ggZXh0ZW5zaW9uLiBBbHRlcm5hdGl2ZWx5XG4gKiB5b3UgY2FuIGNoZWNrIGZvciB0aGUgZXhpc3RhbmNlIG9mIHRoZSBmdW5jdGlvbnMgb3IgY29uc3RhbnRzIHRoYXRcbiAqIGFyZSBleHBlY3RlZCB0byBiZSBhZGRlZC4gRm9yIGV4YW1wbGVcbiAqXG4gKiAgICBpZiAoZ2wuZHJhd0J1ZmZlcnMpIHtcbiAqICAgICAgLy8gRWl0aGVyIFdFQkdMX2RyYXdfYnVmZmVycyB3YXMgZW5hYmxlZCBPUiB5b3UncmUgcnVubmluZyBpbiBXZWJHTDJcbiAqICAgICAgLi4uLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cbmZ1bmN0aW9uIGFkZEV4dGVuc2lvbnNUb0NvbnRleHQoZ2wpIHtcbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IHN1cHBvcnRlZEV4dGVuc2lvbnMubGVuZ3RoOyArK2lpKSB7XG4gICAgYWRkRXh0ZW5zaW9uVG9Db250ZXh0KGdsLCBzdXBwb3J0ZWRFeHRlbnNpb25zW2lpXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgd2ViZ2wgY29udGV4dC5cbiAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyBUaGUgY2FudmFzIHRhZyB0byBnZXRcbiAqICAgICBjb250ZXh0IGZyb20uIElmIG9uZSBpcyBub3QgcGFzc2VkIGluIG9uZSB3aWxsIGJlXG4gKiAgICAgY3JlYXRlZC5cbiAqIEByZXR1cm4ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gVGhlIGNyZWF0ZWQgY29udGV4dC5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlM0RDb250ZXh0KGNhbnZhcywgb3B0X2F0dHJpYnMpIHtcbiAgdmFyIG5hbWVzID0gW1wid2ViZ2xcIiwgXCJleHBlcmltZW50YWwtd2ViZ2xcIl07XG4gIHZhciBjb250ZXh0ID0gbnVsbDtcbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG5hbWVzLmxlbmd0aDsgKytpaSkge1xuICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChuYW1lc1tpaV0sIG9wdF9hdHRyaWJzKTtcbiAgICBpZiAoY29udGV4dCkge1xuICAgICAgaWYgKGRlZmF1bHRzLmFkZEV4dGVuc2lvbnNUb0NvbnRleHQpIHtcbiAgICAgICAgYWRkRXh0ZW5zaW9uc1RvQ29udGV4dChjb250ZXh0KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn1cblxuLyoqXG4gKiBHZXRzIGEgV2ViR0wxIGNvbnRleHQuXG4gKlxuICogTm90ZTogV2lsbCBhdHRlbXB0IHRvIGVuYWJsZSBWZXJ0ZXggQXJyYXkgT2JqZWN0c1xuICogYW5kIGFkZCBXZWJHTDIgZW50cnkgcG9pbnRzLiAodW5sZXNzIHlvdSBmaXJzdCBzZXQgZGVmYXVsdHMgd2l0aFxuICogYHR3Z2wuc2V0RGVmYXVsdHMoe2VuYWJsZVZlcnRleEFycmF5T2JqZWN0czogZmFsc2V9KWA7XG4gKlxuICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIGEgY2FudmFzIGVsZW1lbnQuXG4gKiBAcGFyYW0ge1dlYkdMQ29udGV4dENyZWF0aW9uQXR0aXJidXRlc30gW29wdF9hdHRyaWJzXSBvcHRpb25hbCB3ZWJnbCBjb250ZXh0IGNyZWF0aW9uIGF0dHJpYnV0ZXNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5mdW5jdGlvbiBnZXRXZWJHTENvbnRleHQoY2FudmFzLCBvcHRfYXR0cmlicykge1xuICB2YXIgZ2wgPSBjcmVhdGUzRENvbnRleHQoY2FudmFzLCBvcHRfYXR0cmlicyk7XG4gIHJldHVybiBnbDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgd2ViZ2wgY29udGV4dC5cbiAqXG4gKiBXaWxsIHJldHVybiBhIFdlYkdMMiBjb250ZXh0IGlmIHBvc3NpYmxlLlxuICpcbiAqIFlvdSBjYW4gY2hlY2sgaWYgaXQncyBXZWJHTDIgd2l0aFxuICpcbiAqICAgICB0d2dsLmlzV2ViR0wyKGdsKTtcbiAqXG4gKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXMgVGhlIGNhbnZhcyB0YWcgdG8gZ2V0XG4gKiAgICAgY29udGV4dCBmcm9tLiBJZiBvbmUgaXMgbm90IHBhc3NlZCBpbiBvbmUgd2lsbCBiZVxuICogICAgIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IFRoZSBjcmVhdGVkIGNvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoY2FudmFzLCBvcHRfYXR0cmlicykge1xuICB2YXIgbmFtZXMgPSBbXCJ3ZWJnbDJcIiwgXCJ3ZWJnbFwiLCBcImV4cGVyaW1lbnRhbC13ZWJnbFwiXTtcbiAgdmFyIGNvbnRleHQgPSBudWxsO1xuICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgbmFtZXMubGVuZ3RoOyArK2lpKSB7XG4gICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KG5hbWVzW2lpXSwgb3B0X2F0dHJpYnMpO1xuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICBpZiAoZGVmYXVsdHMuYWRkRXh0ZW5zaW9uc1RvQ29udGV4dCkge1xuICAgICAgICBhZGRFeHRlbnNpb25zVG9Db250ZXh0KGNvbnRleHQpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb250ZXh0O1xufVxuXG4vKipcbiAqIEdldHMgYSBXZWJHTCBjb250ZXh0LiAgV2lsbCBjcmVhdGUgYSBXZWJHTDIgY29udGV4dCBpZiBwb3NzaWJsZS5cbiAqXG4gKiBZb3UgY2FuIGNoZWNrIGlmIGl0J3MgV2ViR0wyIHdpdGhcbiAqXG4gKiAgICBmdW5jdGlvbiBpc1dlYkdMMihnbCkge1xuICogICAgICByZXR1cm4gZ2wuZ2V0UGFyYW1ldGVyKGdsLlZFUlNJT04pLmluZGV4T2YoXCJXZWJHTCAyLjAgXCIpID09IDA7XG4gKiAgICB9XG4gKlxuICogTm90ZTogRm9yIGEgV2ViR0wxIGNvbnRleHQgd2lsbCBhdHRlbXB0IHRvIGVuYWJsZSBWZXJ0ZXggQXJyYXkgT2JqZWN0c1xuICogYW5kIGFkZCBXZWJHTDIgZW50cnkgcG9pbnRzLiAodW5sZXNzIHlvdSBmaXJzdCBzZXQgZGVmYXVsdHMgd2l0aFxuICogYHR3Z2wuc2V0RGVmYXVsdHMoe2VuYWJsZVZlcnRleEFycmF5T2JqZWN0czogZmFsc2V9KWA7XG4gKlxuICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIGEgY2FudmFzIGVsZW1lbnQuXG4gKiBAcGFyYW0ge1dlYkdMQ29udGV4dENyZWF0aW9uQXR0aXJidXRlc30gW29wdF9hdHRyaWJzXSBvcHRpb25hbCB3ZWJnbCBjb250ZXh0IGNyZWF0aW9uIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gVGhlIGNyZWF0ZWQgY29udGV4dC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5mdW5jdGlvbiBnZXRDb250ZXh0KGNhbnZhcywgb3B0X2F0dHJpYnMpIHtcbiAgdmFyIGdsID0gY3JlYXRlQ29udGV4dChjYW52YXMsIG9wdF9hdHRyaWJzKTtcbiAgcmV0dXJuIGdsO1xufVxuXG4vKipcbiAqIFJlc2l6ZSBhIGNhbnZhcyB0byBtYXRjaCB0aGUgc2l6ZSBpdCdzIGRpc3BsYXllZC5cbiAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyBUaGUgY2FudmFzIHRvIHJlc2l6ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbXVsdGlwbGllcl0gU28geW91IGNhbiBwYXNzIGluIGB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb2Agb3Igb3RoZXIgc2NhbGUgdmFsdWUgaWYgeW91IHdhbnQgdG8uXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBjYW52YXMgd2FzIHJlc2l6ZWQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuZnVuY3Rpb24gcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZShjYW52YXMsIG11bHRpcGxpZXIpIHtcbiAgbXVsdGlwbGllciA9IG11bHRpcGxpZXIgfHwgMTtcbiAgbXVsdGlwbGllciA9IE1hdGgubWF4KDAsIG11bHRpcGxpZXIpO1xuICB2YXIgd2lkdGggPSBjYW52YXMuY2xpZW50V2lkdGggKiBtdWx0aXBsaWVyIHwgMDtcbiAgdmFyIGhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQgKiBtdWx0aXBsaWVyIHwgMDtcbiAgaWYgKGNhbnZhcy53aWR0aCAhPT0gd2lkdGggfHwgY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydHMuYWRkRXh0ZW5zaW9uc1RvQ29udGV4dCA9IGFkZEV4dGVuc2lvbnNUb0NvbnRleHQ7XG5leHBvcnRzLmdldENvbnRleHQgPSBnZXRDb250ZXh0O1xuZXhwb3J0cy5nZXRXZWJHTENvbnRleHQgPSBnZXRXZWJHTENvbnRleHQ7XG5leHBvcnRzLnJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUgPSByZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplO1xuZXhwb3J0cy5zZXREZWZhdWx0cyA9IHNldERlZmF1bHRzO1xuXG4vLyBmdW5jdGlvbiBub3RQcml2YXRlKG5hbWUpIHtcbi8vICAgcmV0dXJuIG5hbWVbbmFtZS5sZW5ndGggLSAxXSAhPT0gJ18nO1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIGNvcHlQdWJsaWNQcm9wZXJ0aWVzKHNyYywgZHN0KSB7XG4vLyAgIE9iamVjdC5rZXlzKHNyYykuZmlsdGVyKG5vdFByaXZhdGUpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4vLyAgICAgZHN0W2tleV0gPSBzcmNba2V5XTtcbi8vICAgfSk7XG4vLyAgIHJldHVybiBkc3Q7XG4vLyB9XG5cbi8qKiovIH0pLFxuLyogMTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZHJhd09iamVjdExpc3QgPSBleHBvcnRzLmRyYXdCdWZmZXJJbmZvID0gdW5kZWZpbmVkO1xuXG52YXIgX3Byb2dyYW1zID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIHByb2dyYW1zID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3Byb2dyYW1zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuLyoqXG4gKiBEcmF3aW5nIHJlbGF0ZWQgZnVuY3Rpb25zXG4gKlxuICogRm9yIGJhY2t3YXJkIGNvbXBhdGliaWx5IHRoZXkgYXJlIGF2YWlsYWJsZSBhdCBib3RoIGB0d2dsLmRyYXdgIGFuZCBgdHdnbGBcbiAqIGl0c2VsZlxuICpcbiAqIFNlZSB7QGxpbmsgbW9kdWxlOnR3Z2x9IGZvciBjb3JlIGZ1bmN0aW9uc1xuICpcbiAqIEBtb2R1bGUgdHdnbC9kcmF3XG4gKi9cblxuLyoqXG4gKiBDYWxscyBgZ2wuZHJhd0VsZW1lbnRzYCBvciBgZ2wuZHJhd0FycmF5c2AsIHdoaWNoZXZlciBpcyBhcHByb3ByaWF0ZVxuICpcbiAqIG5vcm1hbGx5IHlvdSdkIGNhbGwgYGdsLmRyYXdFbGVtZW50c2Agb3IgYGdsLmRyYXdBcnJheXNgIHlvdXJzZWxmXG4gKiBidXQgY2FsbGluZyB0aGlzIG1lYW5zIGlmIHlvdSBzd2l0Y2ggZnJvbSBpbmRleGVkIGRhdGEgdG8gbm9uLWluZGV4ZWRcbiAqIGRhdGEgeW91IGRvbid0IGhhdmUgdG8gcmVtZW1iZXIgdG8gdXBkYXRlIHlvdXIgZHJhdyBjYWxsLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHsobW9kdWxlOnR3Z2wuQnVmZmVySW5mb3xtb2R1bGU6dHdnbC5WZXJ0ZXhBcnJheUluZm8pfSBidWZmZXJJbmZvIEEgQnVmZmVySW5mbyBhcyByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5c30gb3JcbiAqICAgYSBWZXJ0ZXhBcnJheUluZm8gYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlVmVydGV4QXJyYXlJbmZvfVxuICogQHBhcmFtIHtlbnVtfSBbdHlwZV0gZWcgKGdsLlRSSUFOR0xFUywgZ2wuTElORVMsIGdsLlBPSU5UUywgZ2wuVFJJQU5HTEVfU1RSSVAsIC4uLikuIERlZmF1bHRzIHRvIGBnbC5UUklBTkdMRVNgXG4gKiBAcGFyYW0ge251bWJlcn0gW2NvdW50XSBBbiBvcHRpb25hbCBjb3VudC4gRGVmYXVsdHMgdG8gYnVmZmVySW5mby5udW1FbGVtZW50c1xuICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXRdIEFuIG9wdGlvbmFsIG9mZnNldC4gRGVmYXVsdHMgdG8gMC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5zdGFuY2VDb3VudF0gQW4gb3B0aW9uYWwgaW5zdGFuY2VDb3VudC4gaWYgc2V0IHRoZW4gYGRyYXdBcnJheXNJbnN0YW5jZWRgIG9yIGBkcmF3RWxlbWVudHNJbnN0YW5jZWRgIHdpbGwgYmUgY2FsbGVkXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvZHJhd1xuICovXG5mdW5jdGlvbiBkcmF3QnVmZmVySW5mbyhnbCwgYnVmZmVySW5mbywgdHlwZSwgY291bnQsIG9mZnNldCwgaW5zdGFuY2VDb3VudCkge1xuICB0eXBlID0gdHlwZSA9PT0gdW5kZWZpbmVkID8gZ2wuVFJJQU5HTEVTIDogdHlwZTtcbiAgdmFyIGluZGljZXMgPSBidWZmZXJJbmZvLmluZGljZXM7XG4gIHZhciBlbGVtZW50VHlwZSA9IGJ1ZmZlckluZm8uZWxlbWVudFR5cGU7XG4gIHZhciBudW1FbGVtZW50cyA9IGNvdW50ID09PSB1bmRlZmluZWQgPyBidWZmZXJJbmZvLm51bUVsZW1lbnRzIDogY291bnQ7XG4gIG9mZnNldCA9IG9mZnNldCA9PT0gdW5kZWZpbmVkID8gMCA6IG9mZnNldDtcbiAgaWYgKGVsZW1lbnRUeXBlIHx8IGluZGljZXMpIHtcbiAgICBpZiAoaW5zdGFuY2VDb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBnbC5kcmF3RWxlbWVudHNJbnN0YW5jZWQodHlwZSwgbnVtRWxlbWVudHMsIGVsZW1lbnRUeXBlID09PSB1bmRlZmluZWQgPyBnbC5VTlNJR05FRF9TSE9SVCA6IGJ1ZmZlckluZm8uZWxlbWVudFR5cGUsIG9mZnNldCwgaW5zdGFuY2VDb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdsLmRyYXdFbGVtZW50cyh0eXBlLCBudW1FbGVtZW50cywgZWxlbWVudFR5cGUgPT09IHVuZGVmaW5lZCA/IGdsLlVOU0lHTkVEX1NIT1JUIDogYnVmZmVySW5mby5lbGVtZW50VHlwZSwgb2Zmc2V0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGluc3RhbmNlQ291bnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZ2wuZHJhd0FycmF5c0luc3RhbmNlZCh0eXBlLCBvZmZzZXQsIG51bUVsZW1lbnRzLCBpbnN0YW5jZUNvdW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2wuZHJhd0FycmF5cyh0eXBlLCBvZmZzZXQsIG51bUVsZW1lbnRzKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBIERyYXdPYmplY3QgaXMgdXNlZnVsIGZvciBwdXR0aW5nIG9iamVjdHMgaW4gdG8gYW4gYXJyYXkgYW5kIHBhc3NpbmcgdGhlbSB0byB7QGxpbmsgbW9kdWxlOnR3Z2wuZHJhd09iamVjdExpc3R9LlxuICpcbiAqIFlvdSBuZWVkIGVpdGhlciBhIGBCdWZmZXJJbmZvYCBvciBhIGBWZXJ0ZXhBcnJheUluZm9gLlxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IERyYXdPYmplY3RcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2FjdGl2ZV0gd2hldGhlciBvciBub3QgdG8gZHJhdy4gRGVmYXVsdCA9IGB0cnVlYCAobXVzdCBiZSBgZmFsc2VgIHRvIGJlIG5vdCB0cnVlKS4gSW4gb3RoZXJ3b3JkcyBgdW5kZWZpbmVkYCA9IGB0cnVlYFxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt0eXBlXSB0eXBlIHRvIGRyYXcgZWcuIGBnbC5UUklBTkdMRVNgLCBgZ2wuTElORVNgLCBldGMuLi5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm99IHByb2dyYW1JbmZvIEEgUHJvZ3JhbUluZm8gYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlUHJvZ3JhbUluZm99XG4gKiBAcHJvcGVydHkge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IFtidWZmZXJJbmZvXSBBIEJ1ZmZlckluZm8gYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXN9XG4gKiBAcHJvcGVydHkge21vZHVsZTp0d2dsLlZlcnRleEFycmF5SW5mb30gW3ZlcnRleEFycmF5SW5mb10gQSBWZXJ0ZXhBcnJheUluZm8gYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlVmVydGV4QXJyYXlJbmZvfVxuICogQHByb3BlcnR5IHtPYmplY3Q8c3RyaW5nLCA/Pn0gdW5pZm9ybXMgVGhlIHZhbHVlcyBmb3IgdGhlIHVuaWZvcm1zLlxuICogICBZb3UgY2FuIHBhc3MgbXVsdGlwbGUgb2JqZWN0cyBieSBwdXR0aW5nIHRoZW0gaW4gYW4gYXJyYXkuIEZvciBleGFtcGxlXG4gKlxuICogICAgIHZhciBzaGFyZWRVbmlmb3JtcyA9IHtcbiAqICAgICAgIHVfZm9nTmVhcjogMTAsXG4gKiAgICAgICB1X3Byb2plY3Rpb246IC4uLlxuICogICAgICAgLi4uXG4gKiAgICAgfTtcbiAqXG4gKiAgICAgdmFyIGxvY2FsVW5pZm9ybXMgPSB7XG4gKiAgICAgICB1X3dvcmxkOiAuLi5cbiAqICAgICAgIHVfZGlmZnVzZUNvbG9yOiAuLi5cbiAqICAgICB9O1xuICpcbiAqICAgICB2YXIgZHJhd09iaiA9IHtcbiAqICAgICAgIC4uLlxuICogICAgICAgdW5pZm9ybXM6IFtzaGFyZWRVbmlmb3JtcywgbG9jYWxVbmlmb3Jtc10sXG4gKiAgICAgfTtcbiAqXG4gKiBAcHJvcGVydHkge251bWJlcn0gW29mZnNldF0gdGhlIG9mZnNldCB0byBwYXNzIHRvIGBnbC5kcmF3QXJyYXlzYCBvciBgZ2wuZHJhd0VsZW1lbnRzYC4gRGVmYXVsdHMgdG8gMC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbY291bnRdIHRoZSBjb3VudCB0byBwYXNzIHRvIGBnbC5kcmF3QXJyYXlzYCBvciBgZ2wuZHJhd0VsZW1udHNgLiBEZWZhdWx0cyB0byBidWZmZXJJbmZvLm51bUVsZW1lbnRzLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtpbnN0YW5jZUNvdW50XSB0aGUgbnVtYmVyIG9mIGluc3RhbmNlcy4gRGVmYXVsdHMgdG8gdW5kZWZpbmVkLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBEcmF3cyBhIGxpc3Qgb2Ygb2JqZWN0c1xuICogQHBhcmFtIHtEcmF3T2JqZWN0W119IG9iamVjdHNUb0RyYXcgYW4gYXJyYXkgb2Ygb2JqZWN0cyB0byBkcmF3LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL2RyYXdcbiAqL1xuLypcbiAqIENvcHlyaWdodCAyMDE1LCBHcmVnZyBUYXZhcmVzLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAqIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbiAqIG1ldDpcbiAqXG4gKiAgICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuICogbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuICogaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogZGlzdHJpYnV0aW9uLlxuICogICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHcmVnZyBUYXZhcmVzLiBub3IgdGhlIG5hbWVzIG9mIGhpc1xuICogY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbiAqIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuICogXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuICogTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4gKiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuICogT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4gKiBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4gKiBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuICogVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuICogKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4gKiBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbmZ1bmN0aW9uIGRyYXdPYmplY3RMaXN0KGdsLCBvYmplY3RzVG9EcmF3KSB7XG4gIHZhciBsYXN0VXNlZFByb2dyYW1JbmZvID0gbnVsbDtcbiAgdmFyIGxhc3RVc2VkQnVmZmVySW5mbyA9IG51bGw7XG5cbiAgb2JqZWN0c1RvRHJhdy5mb3JFYWNoKGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0LmFjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvZ3JhbUluZm8gPSBvYmplY3QucHJvZ3JhbUluZm87XG4gICAgdmFyIGJ1ZmZlckluZm8gPSBvYmplY3QudmVydGV4QXJyYXlJbmZvIHx8IG9iamVjdC5idWZmZXJJbmZvO1xuICAgIHZhciBiaW5kQnVmZmVycyA9IGZhbHNlO1xuICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGUgPT09IHVuZGVmaW5lZCA/IGdsLlRSSUFOR0xFUyA6IG9iamVjdC50eXBlO1xuXG4gICAgaWYgKHByb2dyYW1JbmZvICE9PSBsYXN0VXNlZFByb2dyYW1JbmZvKSB7XG4gICAgICBsYXN0VXNlZFByb2dyYW1JbmZvID0gcHJvZ3JhbUluZm87XG4gICAgICBnbC51c2VQcm9ncmFtKHByb2dyYW1JbmZvLnByb2dyYW0pO1xuXG4gICAgICAvLyBXZSBoYXZlIHRvIHJlYmluZCBidWZmZXJzIHdoZW4gY2hhbmdpbmcgcHJvZ3JhbXMgYmVjYXVzZSB3ZVxuICAgICAgLy8gb25seSBiaW5kIGJ1ZmZlcnMgdGhlIHByb2dyYW0gdXNlcy4gU28gaWYgMiBwcm9ncmFtcyB1c2UgdGhlIHNhbWVcbiAgICAgIC8vIGJ1ZmZlckluZm8gYnV0IHRoZSAxc3Qgb25lIHVzZXMgb25seSBwb3NpdGlvbnMgdGhlIHdoZW4gdGhlXG4gICAgICAvLyB3ZSBzd2l0Y2ggdG8gdGhlIDJuZCBvbmUgc29tZSBvZiB0aGUgYXR0cmlidXRlcyB3aWxsIG5vdCBiZSBvbi5cbiAgICAgIGJpbmRCdWZmZXJzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBTZXR1cCBhbGwgdGhlIG5lZWRlZCBhdHRyaWJ1dGVzLlxuICAgIGlmIChiaW5kQnVmZmVycyB8fCBidWZmZXJJbmZvICE9PSBsYXN0VXNlZEJ1ZmZlckluZm8pIHtcbiAgICAgIGlmIChsYXN0VXNlZEJ1ZmZlckluZm8gJiYgbGFzdFVzZWRCdWZmZXJJbmZvLnZlcnRleEFycmF5T2JqZWN0ICYmICFidWZmZXJJbmZvLnZlcnRleEFycmF5T2JqZWN0KSB7XG4gICAgICAgIGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcbiAgICAgIH1cbiAgICAgIGxhc3RVc2VkQnVmZmVySW5mbyA9IGJ1ZmZlckluZm87XG4gICAgICBwcm9ncmFtcy5zZXRCdWZmZXJzQW5kQXR0cmlidXRlcyhnbCwgcHJvZ3JhbUluZm8sIGJ1ZmZlckluZm8pO1xuICAgIH1cblxuICAgIC8vIFNldCB0aGUgdW5pZm9ybXMuXG4gICAgcHJvZ3JhbXMuc2V0VW5pZm9ybXMocHJvZ3JhbUluZm8sIG9iamVjdC51bmlmb3Jtcyk7XG5cbiAgICAvLyBEcmF3XG4gICAgZHJhd0J1ZmZlckluZm8oZ2wsIGJ1ZmZlckluZm8sIHR5cGUsIG9iamVjdC5jb3VudCwgb2JqZWN0Lm9mZnNldCwgb2JqZWN0Lmluc3RhbmNlQ291bnQpO1xuICB9KTtcblxuICBpZiAobGFzdFVzZWRCdWZmZXJJbmZvLnZlcnRleEFycmF5T2JqZWN0KSB7XG4gICAgZ2wuYmluZFZlcnRleEFycmF5KG51bGwpO1xuICB9XG59XG5cbmV4cG9ydHMuZHJhd0J1ZmZlckluZm8gPSBkcmF3QnVmZmVySW5mbztcbmV4cG9ydHMuZHJhd09iamVjdExpc3QgPSBkcmF3T2JqZWN0TGlzdDtcblxuLyoqKi8gfSksXG4vKiAxMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXNpemVGcmFtZWJ1ZmZlckluZm8gPSBleHBvcnRzLmNyZWF0ZUZyYW1lYnVmZmVySW5mbyA9IGV4cG9ydHMuYmluZEZyYW1lYnVmZmVySW5mbyA9IHVuZGVmaW5lZDtcblxudmFyIF90ZXh0dXJlcyA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cbnZhciB0ZXh0dXJlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90ZXh0dXJlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8qKlxuICogRnJhbWVidWZmZXIgcmVsYXRlZCBmdW5jdGlvbnNcbiAqXG4gKiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbHkgdGhleSBhcmUgYXZhaWxhYmxlIGF0IGJvdGggYHR3Z2wuZnJhbWVidWZmZXJgIGFuZCBgdHdnbGBcbiAqIGl0c2VsZlxuICpcbiAqIFNlZSB7QGxpbmsgbW9kdWxlOnR3Z2x9IGZvciBjb3JlIGZ1bmN0aW9uc1xuICpcbiAqIEBtb2R1bGUgdHdnbC9mcmFtZWJ1ZmZlcnNcbiAqL1xuXG4vLyBtYWtlIHN1cmUgd2UgZG9uJ3Qgc2VlIGEgZ2xvYmFsIGdsXG52YXIgZ2wgPSB1bmRlZmluZWQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuLypcbiAqIENvcHlyaWdodCAyMDE1LCBHcmVnZyBUYXZhcmVzLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAqIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbiAqIG1ldDpcbiAqXG4gKiAgICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuICogbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuICogY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuICogaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuICogZGlzdHJpYnV0aW9uLlxuICogICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHcmVnZyBUYXZhcmVzLiBub3IgdGhlIG5hbWVzIG9mIGhpc1xuICogY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbiAqIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuICogXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuICogTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4gKiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuICogT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4gKiBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4gKiBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuICogVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuICogKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4gKiBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbnZhciBVTlNJR05FRF9CWVRFID0gMHgxNDAxO1xuXG4vKiBQaXhlbEZvcm1hdCAqL1xudmFyIERFUFRIX0NPTVBPTkVOVCA9IDB4MTkwMjtcbnZhciBSR0JBID0gMHgxOTA4O1xuXG4vKiBGcmFtZWJ1ZmZlciBPYmplY3QuICovXG52YXIgUkdCQTQgPSAweDgwNTY7XG52YXIgUkdCNV9BMSA9IDB4ODA1NztcbnZhciBSR0I1NjUgPSAweDhENjI7XG52YXIgREVQVEhfQ09NUE9ORU5UMTYgPSAweDgxQTU7XG52YXIgU1RFTkNJTF9JTkRFWCA9IDB4MTkwMTtcbnZhciBTVEVOQ0lMX0lOREVYOCA9IDB4OEQ0ODtcbnZhciBERVBUSF9TVEVOQ0lMID0gMHg4NEY5O1xudmFyIENPTE9SX0FUVEFDSE1FTlQwID0gMHg4Q0UwO1xudmFyIERFUFRIX0FUVEFDSE1FTlQgPSAweDhEMDA7XG52YXIgU1RFTkNJTF9BVFRBQ0hNRU5UID0gMHg4RDIwO1xudmFyIERFUFRIX1NURU5DSUxfQVRUQUNITUVOVCA9IDB4ODIxQTtcblxuLyogVGV4dHVyZVdyYXBNb2RlICovXG52YXIgUkVQRUFUID0gMHgyOTAxOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG52YXIgQ0xBTVBfVE9fRURHRSA9IDB4ODEyRjtcbnZhciBNSVJST1JFRF9SRVBFQVQgPSAweDgzNzA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuLyogVGV4dHVyZU1hZ0ZpbHRlciAqL1xudmFyIE5FQVJFU1QgPSAweDI2MDA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbnZhciBMSU5FQVIgPSAweDI2MDE7XG5cbi8qIFRleHR1cmVNaW5GaWx0ZXIgKi9cbnZhciBORUFSRVNUX01JUE1BUF9ORUFSRVNUID0gMHgyNzAwOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG52YXIgTElORUFSX01JUE1BUF9ORUFSRVNUID0gMHgyNzAxOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG52YXIgTkVBUkVTVF9NSVBNQVBfTElORUFSID0gMHgyNzAyOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG52YXIgTElORUFSX01JUE1BUF9MSU5FQVIgPSAweDI3MDM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuLyoqXG4gKiBUaGUgb3B0aW9ucyBmb3IgYSBmcmFtZWJ1ZmZlciBhdHRhY2htZW50LlxuICpcbiAqIE5vdGU6IEZvciBhIGBmb3JtYXRgIHRoYXQgaXMgYSB0ZXh0dXJlIGluY2x1ZGUgYWxsIHRoZSB0ZXh0dXJlXG4gKiBvcHRpb25zIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBmb3IgZXhhbXBsZVxuICogYG1pbmAsIGBtYWdgLCBgY2xhbXBgLCBldGMuLi4gTm90ZSB0aGF0IHVubGlrZSB7QGxpbmsgbW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9XG4gKiBgYXV0b2AgZGVmYXVsdHMgdG8gYGZhbHNlYCBmb3IgYXR0YWNobWVudCB0ZXh0dXJlcyBidXQgYG1pbmAgYW5kIGBtYWdgIGRlZmF1bHRcbiAqIHRvIGBnbC5MSU5FQVJgIGFuZCBgd3JhcGAgZGVmYXVsdHMgdG8gYENMQU1QX1RPX0VER0VgXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gQXR0YWNobWVudE9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbYXR0YWNoXSBUaGUgYXR0YWNobWVudCBwb2ludC4gRGVmYXVsdHNcbiAqICAgdG8gYGdsLkNPTE9SX0FUVEFDVE1FTlQwICsgbmR4YCB1bmxlc3MgdHlwZSBpcyBhIGRlcHRoIG9yIHN0ZW5jaWwgdHlwZVxuICogICB0aGVuIGl0J3MgZ2wuREVQVEhfQVRUQUNITUVOVCBvciBgZ2wuREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5UYCBkZXBlbmRpbmdcbiAqICAgb24gdGhlIGZvcm1hdCBvciBhdHRhY2htZW50IHR5cGUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2Zvcm1hdF0gVGhlIGZvcm1hdC4gSWYgb25lIG9mIGBnbC5SR0JBNGAsXG4gKiAgIGBnbC5SR0I1NjVgLCBgZ2wuUkdCNV9BMWAsIGBnbC5ERVBUSF9DT01QT05FTlQxNmAsXG4gKiAgIGBnbC5TVEVOQ0lMX0lOREVYOGAgb3IgYGdsLkRFUFRIX1NURU5DSUxgIHRoZW4gd2lsbCBjcmVhdGUgYVxuICogICByZW5kZXJidWZmZXIuIE90aGVyd2lzZSB3aWxsIGNyZWF0ZSBhIHRleHR1cmUuIERlZmF1bHQgPSBgZ2wuUkdCQWBcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbdHlwZV0gVGhlIHR5cGUuIFVzZWQgZm9yIHRleHR1cmUuIERlZmF1bHQgPSBgZ2wuVU5TSUdORURfQllURWAuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3RhcmdldF0gVGhlIHRleHR1cmUgdGFyZ2V0IGZvciBgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkRgLlxuICogICBEZWZhdWx0cyB0byBgZ2wuVEVYVFVSRV8yRGAuIFNldCB0byBhcHByb3ByaWF0ZSBmYWNlIGZvciBjdWJlIG1hcHMuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2xldmVsXSBsZXZlbCBmb3IgYGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEYC4gRGVmYXVsdHMgdG8gMC5cbiAqIEBwcm9wZXJ0eSB7V2ViR0xPYmplY3R9IFthdHRhY2htZW50XSBBbiBleGlzdGluZyByZW5kZXJidWZmZXIgb3IgdGV4dHVyZS5cbiAqICAgIElmIHByb3ZpZGVkIHdpbGwgYXR0YWNoIHRoaXMgT2JqZWN0LiBUaGlzIGFsbG93cyB5b3UgdG8gc2hhcmVcbiAqICAgIGF0dGFjaGVtbnRzIGFjcm9zcyBmcmFtZWJ1ZmZlcnMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG52YXIgZGVmYXVsdEF0dGFjaG1lbnRzID0gW3sgZm9ybWF0OiBSR0JBLCB0eXBlOiBVTlNJR05FRF9CWVRFLCBtaW46IExJTkVBUiwgd3JhcDogQ0xBTVBfVE9fRURHRSB9LCB7IGZvcm1hdDogREVQVEhfU1RFTkNJTCB9XTtcblxudmFyIGF0dGFjaG1lbnRzQnlGb3JtYXQgPSB7fTtcbmF0dGFjaG1lbnRzQnlGb3JtYXRbREVQVEhfU1RFTkNJTF0gPSBERVBUSF9TVEVOQ0lMX0FUVEFDSE1FTlQ7XG5hdHRhY2htZW50c0J5Rm9ybWF0W1NURU5DSUxfSU5ERVhdID0gU1RFTkNJTF9BVFRBQ0hNRU5UO1xuYXR0YWNobWVudHNCeUZvcm1hdFtTVEVOQ0lMX0lOREVYOF0gPSBTVEVOQ0lMX0FUVEFDSE1FTlQ7XG5hdHRhY2htZW50c0J5Rm9ybWF0W0RFUFRIX0NPTVBPTkVOVF0gPSBERVBUSF9BVFRBQ0hNRU5UO1xuYXR0YWNobWVudHNCeUZvcm1hdFtERVBUSF9DT01QT05FTlQxNl0gPSBERVBUSF9BVFRBQ0hNRU5UO1xuXG5mdW5jdGlvbiBnZXRBdHRhY2htZW50UG9pbnRGb3JGb3JtYXQoZm9ybWF0KSB7XG4gIHJldHVybiBhdHRhY2htZW50c0J5Rm9ybWF0W2Zvcm1hdF07XG59XG5cbnZhciByZW5kZXJidWZmZXJGb3JtYXRzID0ge307XG5yZW5kZXJidWZmZXJGb3JtYXRzW1JHQkE0XSA9IHRydWU7XG5yZW5kZXJidWZmZXJGb3JtYXRzW1JHQjVfQTFdID0gdHJ1ZTtcbnJlbmRlcmJ1ZmZlckZvcm1hdHNbUkdCNTY1XSA9IHRydWU7XG5yZW5kZXJidWZmZXJGb3JtYXRzW0RFUFRIX1NURU5DSUxdID0gdHJ1ZTtcbnJlbmRlcmJ1ZmZlckZvcm1hdHNbREVQVEhfQ09NUE9ORU5UMTZdID0gdHJ1ZTtcbnJlbmRlcmJ1ZmZlckZvcm1hdHNbU1RFTkNJTF9JTkRFWF0gPSB0cnVlO1xucmVuZGVyYnVmZmVyRm9ybWF0c1tTVEVOQ0lMX0lOREVYOF0gPSB0cnVlO1xuXG5mdW5jdGlvbiBpc1JlbmRlcmJ1ZmZlckZvcm1hdChmb3JtYXQpIHtcbiAgcmV0dXJuIHJlbmRlcmJ1ZmZlckZvcm1hdHNbZm9ybWF0XTtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBGcmFtZWJ1ZmZlckluZm9cbiAqIEBwcm9wZXJ0eSB7V2ViR0xGcmFtZWJ1ZmZlcn0gZnJhbWVidWZmZXIgVGhlIFdlYkdMRnJhbWVidWZmZXIgZm9yIHRoaXMgZnJhbWVidWZmZXJJbmZvXG4gKiBAcHJvcGVydHkge1dlYkdMT2JqZWN0W119IGF0dGFjaG1lbnRzIFRoZSBjcmVhdGVkIGF0dGFjaG1lbnRzIGluIHRoZSBzYW1lIG9yZGVyIGFzIHBhc3NlZCBpbiB0byB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlRnJhbWVidWZmZXJJbmZvfS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIGZyYW1lYnVmZmVyIGFuZCBhdHRhY2htZW50cy5cbiAqXG4gKiBUaGlzIHJldHVybnMgYSB7QGxpbmsgbW9kdWxlOnR3Z2wuRnJhbWVidWZmZXJJbmZvfSBiZWNhdXNlIGl0IG5lZWRzIHRvIHJldHVybiB0aGUgYXR0YWNobWVudHMgYXMgd2VsbCBhcyB0aGUgZnJhbWVidWZmZXIuXG4gKlxuICogVGhlIHNpbXBsZXN0IHVzYWdlXG4gKlxuICogICAgIC8vIGNyZWF0ZSBhbiBSR0JBL1VOU0lHTkVEX0JZVEUgdGV4dHVyZSBhbmQgREVQVEhfU1RFTkNJTCByZW5kZXJidWZmZXJcbiAqICAgICBjb25zdCBmYmkgPSB0d2dsLmNyZWF0ZUZyYW1lYnVmZmVySW5mbyhnbCk7XG4gKlxuICogTW9yZSBjb21wbGV4IHVzYWdlXG4gKlxuICogICAgIC8vIGNyZWF0ZSBhbiBSR0I1NjUgcmVuZGVyYnVmZmVyIGFuZCBhIFNURU5DSUxfSU5ERVg4IHJlbmRlcmJ1ZmZlclxuICogICAgIGNvbnN0IGF0dGFjaG1lbnRzID0gW1xuICogICAgICAgeyBmb3JtYXQ6IFJHQjU2NSwgbWFnOiBORUFSRVNUIH0sXG4gKiAgICAgICB7IGZvcm1hdDogU1RFTkNJTF9JTkRFWDggfSxcbiAqICAgICBdXG4gKiAgICAgY29uc3QgZmJpID0gdHdnbC5jcmVhdGVGcmFtZWJ1ZmZlckluZm8oZ2wsIGF0dGFjaG1lbnRzKTtcbiAqXG4gKiBQYXNzaW5nIGluIGEgc3BlY2lmaWMgc2l6ZVxuICpcbiAqICAgICBjb25zdCB3aWR0aCA9IDI1NjtcbiAqICAgICBjb25zdCBoZWlnaHQgPSAyNTY7XG4gKiAgICAgY29uc3QgZmJpID0gdHdnbC5jcmVhdGVGcmFtZWJ1ZmZlckluZm8oZ2wsIGF0dGFjaG1lbnRzLCB3aWR0aCwgaGVpZ2h0KTtcbiAqXG4gKiAqKk5vdGUhISoqIEl0IGlzIHVwIHRvIHlvdSB0byBjaGVjayBpZiB0aGUgZnJhbWVidWZmZXIgaXMgcmVuZGVyYWJsZSBieSBjYWxsaW5nIGBnbC5jaGVja0ZyYW1lYnVmZmVyU3RhdHVzYC5cbiAqIFtXZWJHTCBvbmx5IGd1YXJhbnRlZXMgMyBjb21iaW5hdGlvbnMgb2YgYXR0YWNobWVudHMgd29ya10oaHR0cHM6Ly93d3cua2hyb25vcy5vcmcvcmVnaXN0cnkvd2ViZ2wvc3BlY3MvbGF0ZXN0LzEuMC8jNi42KS5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5BdHRhY2htZW50T3B0aW9uc1tdfSBbYXR0YWNobWVudHNdIHdoaWNoIGF0dGFjaG1lbnRzIHRvIGNyZWF0ZS4gSWYgbm90IHByb3ZpZGVkIHRoZSBkZWZhdWx0IGlzIGEgZnJhbWVidWZmZXIgd2l0aCBhblxuICogICAgYFJHQkFgLCBgVU5TSUdORURfQllURWAgdGV4dHVyZSBgQ09MT1JfQVRUQUNITUVOVDBgIGFuZCBhIGBERVBUSF9TVEVOQ0lMYCByZW5kZXJidWZmZXIgYERFUFRIX1NURU5DSUxfQVRUQUNITUVOVGAuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dpZHRoXSB0aGUgd2lkdGggZm9yIHRoZSBhdHRhY2htZW50cy4gRGVmYXVsdCA9IHNpemUgb2YgZHJhd2luZ0J1ZmZlclxuICogQHBhcmFtIHtudW1iZXJ9IFtoZWlnaHRdIHRoZSBoZWlnaHQgZm9yIHRoZSBhdHRhY2htZW50cy4gRGVmYXV0dCA9IHNpemUgb2YgZHJhd2luZ0J1ZmZlclxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuRnJhbWVidWZmZXJJbmZvfSB0aGUgZnJhbWVidWZmZXIgYW5kIGF0dGFjaG1lbnRzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL2ZyYW1lYnVmZmVyc1xuICovXG5mdW5jdGlvbiBjcmVhdGVGcmFtZWJ1ZmZlckluZm8oZ2wsIGF0dGFjaG1lbnRzLCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHZhciB0YXJnZXQgPSBnbC5GUkFNRUJVRkZFUjtcbiAgdmFyIGZiID0gZ2wuY3JlYXRlRnJhbWVidWZmZXIoKTtcbiAgZ2wuYmluZEZyYW1lYnVmZmVyKHRhcmdldCwgZmIpO1xuICB3aWR0aCA9IHdpZHRoIHx8IGdsLmRyYXdpbmdCdWZmZXJXaWR0aDtcbiAgaGVpZ2h0ID0gaGVpZ2h0IHx8IGdsLmRyYXdpbmdCdWZmZXJIZWlnaHQ7XG4gIGF0dGFjaG1lbnRzID0gYXR0YWNobWVudHMgfHwgZGVmYXVsdEF0dGFjaG1lbnRzO1xuICB2YXIgY29sb3JBdHRhY2htZW50Q291bnQgPSAwO1xuICB2YXIgZnJhbWVidWZmZXJJbmZvID0ge1xuICAgIGZyYW1lYnVmZmVyOiBmYixcbiAgICBhdHRhY2htZW50czogW10sXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG4gIGF0dGFjaG1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGF0dGFjaG1lbnRPcHRpb25zKSB7XG4gICAgdmFyIGF0dGFjaG1lbnQgPSBhdHRhY2htZW50T3B0aW9ucy5hdHRhY2htZW50O1xuICAgIHZhciBmb3JtYXQgPSBhdHRhY2htZW50T3B0aW9ucy5mb3JtYXQ7XG4gICAgdmFyIGF0dGFjaG1lbnRQb2ludCA9IGdldEF0dGFjaG1lbnRQb2ludEZvckZvcm1hdChmb3JtYXQpO1xuICAgIGlmICghYXR0YWNobWVudFBvaW50KSB7XG4gICAgICBhdHRhY2htZW50UG9pbnQgPSBDT0xPUl9BVFRBQ0hNRU5UMCArIGNvbG9yQXR0YWNobWVudENvdW50Kys7XG4gICAgfVxuICAgIGlmICghYXR0YWNobWVudCkge1xuICAgICAgaWYgKGlzUmVuZGVyYnVmZmVyRm9ybWF0KGZvcm1hdCkpIHtcbiAgICAgICAgYXR0YWNobWVudCA9IGdsLmNyZWF0ZVJlbmRlcmJ1ZmZlcigpO1xuICAgICAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKGdsLlJFTkRFUkJVRkZFUiwgYXR0YWNobWVudCk7XG4gICAgICAgIGdsLnJlbmRlcmJ1ZmZlclN0b3JhZ2UoZ2wuUkVOREVSQlVGRkVSLCBmb3JtYXQsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHRleHR1cmVPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgYXR0YWNobWVudE9wdGlvbnMpO1xuICAgICAgICB0ZXh0dXJlT3B0aW9ucy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0ZXh0dXJlT3B0aW9ucy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGlmICh0ZXh0dXJlT3B0aW9ucy5hdXRvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0ZXh0dXJlT3B0aW9ucy5hdXRvID0gZmFsc2U7XG4gICAgICAgICAgdGV4dHVyZU9wdGlvbnMubWluID0gdGV4dHVyZU9wdGlvbnMubWluIHx8IHRleHR1cmVPcHRpb25zLm1pbk1hZyB8fCBnbC5MSU5FQVI7XG4gICAgICAgICAgdGV4dHVyZU9wdGlvbnMubWFnID0gdGV4dHVyZU9wdGlvbnMubWFnIHx8IHRleHR1cmVPcHRpb25zLm1pbk1hZyB8fCBnbC5MSU5FQVI7XG4gICAgICAgICAgdGV4dHVyZU9wdGlvbnMud3JhcFMgPSB0ZXh0dXJlT3B0aW9ucy53cmFwUyB8fCB0ZXh0dXJlT3B0aW9ucy53cmFwIHx8IGdsLkNMQU1QX1RPX0VER0U7XG4gICAgICAgICAgdGV4dHVyZU9wdGlvbnMud3JhcFQgPSB0ZXh0dXJlT3B0aW9ucy53cmFwVCB8fCB0ZXh0dXJlT3B0aW9ucy53cmFwIHx8IGdsLkNMQU1QX1RPX0VER0U7XG4gICAgICAgIH1cbiAgICAgICAgYXR0YWNobWVudCA9IHRleHR1cmVzLmNyZWF0ZVRleHR1cmUoZ2wsIHRleHR1cmVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGF0dGFjaG1lbnQgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmJ1ZmZlcikge1xuICAgICAgZ2wuZnJhbWVidWZmZXJSZW5kZXJidWZmZXIodGFyZ2V0LCBhdHRhY2htZW50UG9pbnQsIGdsLlJFTkRFUkJVRkZFUiwgYXR0YWNobWVudCk7XG4gICAgfSBlbHNlIGlmIChhdHRhY2htZW50IGluc3RhbmNlb2YgV2ViR0xUZXh0dXJlKSB7XG4gICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRCh0YXJnZXQsIGF0dGFjaG1lbnRQb2ludCwgYXR0YWNobWVudE9wdGlvbnMudGV4VGFyZ2V0IHx8IGdsLlRFWFRVUkVfMkQsIGF0dGFjaG1lbnQsIGF0dGFjaG1lbnRPcHRpb25zLmxldmVsIHx8IDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBcInVua25vd24gYXR0YWNobWVudCB0eXBlXCI7XG4gICAgfVxuICAgIGZyYW1lYnVmZmVySW5mby5hdHRhY2htZW50cy5wdXNoKGF0dGFjaG1lbnQpO1xuICB9KTtcbiAgcmV0dXJuIGZyYW1lYnVmZmVySW5mbztcbn1cblxuLyoqXG4gKiBSZXNpemVzIHRoZSBhdHRhY2htZW50cyBvZiBhIGZyYW1lYnVmZmVyLlxuICpcbiAqIFlvdSBuZWVkIHRvIHBhc3MgaW4gdGhlIHNhbWUgYGF0dGFjaG1lbnRzYCBhcyB5b3UgcGFzc2VkIGluIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVGcmFtZWJ1ZmZlckluZm99XG4gKiBiZWNhdXNlIFRXR0wgaGFzIG5vIGlkZWEgdGhlIGZvcm1hdC90eXBlIG9mIGVhY2ggYXR0YWNobWVudC5cbiAqXG4gKiBUaGUgc2ltcGxlc3QgdXNhZ2VcbiAqXG4gKiAgICAgLy8gY3JlYXRlIGFuIFJHQkEvVU5TSUdORURfQllURSB0ZXh0dXJlIGFuZCBERVBUSF9TVEVOQ0lMIHJlbmRlcmJ1ZmZlclxuICogICAgIGNvbnN0IGZiaSA9IHR3Z2wuY3JlYXRlRnJhbWVidWZmZXJJbmZvKGdsKTtcbiAqXG4gKiAgICAgLi4uXG4gKlxuICogICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAqICAgICAgIGlmICh0d2dsLnJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUoZ2wuY2FudmFzKSkge1xuICogICAgICAgICAvLyByZXNpemUgdGhlIGF0dGFjaG1lbnRzXG4gKiAgICAgICAgIHR3Z2wucmVzaXplRnJhbWVidWZmZXJJbmZvKGdsLCBmYmkpO1xuICogICAgICAgfVxuICpcbiAqIE1vcmUgY29tcGxleCB1c2FnZVxuICpcbiAqICAgICAvLyBjcmVhdGUgYW4gUkdCNTY1IHJlbmRlcmJ1ZmZlciBhbmQgYSBTVEVOQ0lMX0lOREVYOCByZW5kZXJidWZmZXJcbiAqICAgICBjb25zdCBhdHRhY2htZW50cyA9IFtcbiAqICAgICAgIHsgZm9ybWF0OiBSR0I1NjUsIG1hZzogTkVBUkVTVCB9LFxuICogICAgICAgeyBmb3JtYXQ6IFNURU5DSUxfSU5ERVg4IH0sXG4gKiAgICAgXVxuICogICAgIGNvbnN0IGZiaSA9IHR3Z2wuY3JlYXRlRnJhbWVidWZmZXJJbmZvKGdsLCBhdHRhY2htZW50cyk7XG4gKlxuICogICAgIC4uLlxuICpcbiAqICAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gKiAgICAgICBpZiAodHdnbC5yZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplKGdsLmNhbnZhcykpIHtcbiAqICAgICAgICAgLy8gcmVzaXplIHRoZSBhdHRhY2htZW50cyB0byBtYXRjaFxuICogICAgICAgICB0d2dsLnJlc2l6ZUZyYW1lYnVmZmVySW5mbyhnbCwgZmJpLCBhdHRhY2htZW50cyk7XG4gKiAgICAgICB9XG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuRnJhbWVidWZmZXJJbmZvfSBmcmFtZWJ1ZmZlckluZm8gYSBmcmFtZWJ1ZmZlckluZm8gYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlRnJhbWVidWZmZXJJbmZvfS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuQXR0YWNobWVudE9wdGlvbnNbXX0gW2F0dGFjaG1lbnRzXSB0aGUgc2FtZSBhdHRhY2htZW50cyBvcHRpb25zIGFzIHBhc3NlZCB0byB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlRnJhbWVidWZmZXJJbmZvfS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2lkdGhdIHRoZSB3aWR0aCBmb3IgdGhlIGF0dGFjaG1lbnRzLiBEZWZhdWx0ID0gc2l6ZSBvZiBkcmF3aW5nQnVmZmVyXG4gKiBAcGFyYW0ge251bWJlcn0gW2hlaWdodF0gdGhlIGhlaWdodCBmb3IgdGhlIGF0dGFjaG1lbnRzLiBEZWZhdXR0ID0gc2l6ZSBvZiBkcmF3aW5nQnVmZmVyXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvZnJhbWVidWZmZXJzXG4gKi9cbmZ1bmN0aW9uIHJlc2l6ZUZyYW1lYnVmZmVySW5mbyhnbCwgZnJhbWVidWZmZXJJbmZvLCBhdHRhY2htZW50cywgd2lkdGgsIGhlaWdodCkge1xuICB3aWR0aCA9IHdpZHRoIHx8IGdsLmRyYXdpbmdCdWZmZXJXaWR0aDtcbiAgaGVpZ2h0ID0gaGVpZ2h0IHx8IGdsLmRyYXdpbmdCdWZmZXJIZWlnaHQ7XG4gIGZyYW1lYnVmZmVySW5mby53aWR0aCA9IHdpZHRoO1xuICBmcmFtZWJ1ZmZlckluZm8uaGVpZ2h0ID0gaGVpZ2h0O1xuICBhdHRhY2htZW50cyA9IGF0dGFjaG1lbnRzIHx8IGRlZmF1bHRBdHRhY2htZW50cztcbiAgYXR0YWNobWVudHMuZm9yRWFjaChmdW5jdGlvbiAoYXR0YWNobWVudE9wdGlvbnMsIG5keCkge1xuICAgIHZhciBhdHRhY2htZW50ID0gZnJhbWVidWZmZXJJbmZvLmF0dGFjaG1lbnRzW25keF07XG4gICAgdmFyIGZvcm1hdCA9IGF0dGFjaG1lbnRPcHRpb25zLmZvcm1hdDtcbiAgICBpZiAoYXR0YWNobWVudCBpbnN0YW5jZW9mIFdlYkdMUmVuZGVyYnVmZmVyKSB7XG4gICAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKGdsLlJFTkRFUkJVRkZFUiwgYXR0YWNobWVudCk7XG4gICAgICBnbC5yZW5kZXJidWZmZXJTdG9yYWdlKGdsLlJFTkRFUkJVRkZFUiwgZm9ybWF0LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKGF0dGFjaG1lbnQgaW5zdGFuY2VvZiBXZWJHTFRleHR1cmUpIHtcbiAgICAgIHRleHR1cmVzLnJlc2l6ZVRleHR1cmUoZ2wsIGF0dGFjaG1lbnQsIGF0dGFjaG1lbnRPcHRpb25zLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgXCJ1bmtub3duIGF0dGFjaG1lbnQgdHlwZVwiO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQmluZHMgYSBmcmFtZWJ1ZmZlclxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcHJldHR5IG11Y2ggc29sZXkgZXhpc3RzIGJlY2F1c2UgSSBzcGVudCBob3Vyc1xuICogdHJ5aW5nIHRvIGZpZ3VyZSBvdXQgd2h5IHNvbWV0aGluZyBJIHdyb3RlIHdhc24ndCB3b3JraW5nIG9ubHlcbiAqIHRvIHJlYWxpemUgSSBmb3JnZXQgdG8gc2V0IHRoZSB2aWV3cG9ydCBkaW1lbnNpb25zLlxuICogTXkgaG9wZSBpcyB0aGlzIGZ1bmN0aW9uIHdpbGwgZml4IHRoYXQuXG4gKlxuICogSXQgaXMgZWZmZWN0aXZlbHkgdGhlIHNhbWUgYXNcbiAqXG4gKiAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBzb21lRnJhbWVidWZmZXJJbmZvLmZyYW1lYnVmZmVyKTtcbiAqICAgICBnbC52aWV3cG9ydCgwLCAwLCBzb21lRnJhbWVidWZmZXJJbmZvLndpZHRoLCBzb21lRnJhbWVidWZmZXJJbmZvLmhlaWdodCk7XG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuRnJhbWVidWZmZXJJbmZvfSBbZnJhbWVidWZmZXJJbmZvXSBhIGZyYW1lYnVmZmVySW5mbyBhcyByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVGcmFtZWJ1ZmZlckluZm99LlxuICogICBJZiBub3QgcGFzc2VkIHdpbGwgYmluZCB0aGUgY2FudmFzLlxuICogQHBhcmFtIHtudW1iZXJ9IFt0YXJnZXRdIFRoZSB0YXJnZXQuIElmIG5vdCBwYXNzZWQgYGdsLkZSQU1FQlVGRkVSYCB3aWxsIGJlIHVzZWQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvZnJhbWVidWZmZXJzXG4gKi9cblxuZnVuY3Rpb24gYmluZEZyYW1lYnVmZmVySW5mbyhnbCwgZnJhbWVidWZmZXJJbmZvLCB0YXJnZXQpIHtcbiAgdGFyZ2V0ID0gdGFyZ2V0IHx8IGdsLkZSQU1FQlVGRkVSO1xuICBpZiAoZnJhbWVidWZmZXJJbmZvKSB7XG4gICAgZ2wuYmluZEZyYW1lYnVmZmVyKHRhcmdldCwgZnJhbWVidWZmZXJJbmZvLmZyYW1lYnVmZmVyKTtcbiAgICBnbC52aWV3cG9ydCgwLCAwLCBmcmFtZWJ1ZmZlckluZm8ud2lkdGgsIGZyYW1lYnVmZmVySW5mby5oZWlnaHQpO1xuICB9IGVsc2Uge1xuICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcih0YXJnZXQsIG51bGwpO1xuICAgIGdsLnZpZXdwb3J0KDAsIDAsIGdsLmRyYXdpbmdCdWZmZXJXaWR0aCwgZ2wuZHJhd2luZ0J1ZmZlckhlaWdodCk7XG4gIH1cbn1cblxuZXhwb3J0cy5iaW5kRnJhbWVidWZmZXJJbmZvID0gYmluZEZyYW1lYnVmZmVySW5mbztcbmV4cG9ydHMuY3JlYXRlRnJhbWVidWZmZXJJbmZvID0gY3JlYXRlRnJhbWVidWZmZXJJbmZvO1xuZXhwb3J0cy5yZXNpemVGcmFtZWJ1ZmZlckluZm8gPSByZXNpemVGcmFtZWJ1ZmZlckluZm87XG5cbi8qKiovIH0pLFxuLyogMTIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY3JlYXRlVkFPRnJvbUJ1ZmZlckluZm8gPSBleHBvcnRzLmNyZWF0ZVZBT0FuZFNldEF0dHJpYnV0ZXMgPSBleHBvcnRzLmNyZWF0ZVZlcnRleEFycmF5SW5mbyA9IHVuZGVmaW5lZDtcblxudmFyIF9wcm9ncmFtcyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBwcm9ncmFtcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9wcm9ncmFtcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8qKlxuICogdmVydGV4IGFycmF5IG9iamVjdCByZWxhdGVkIGZ1bmN0aW9uc1xuICpcbiAqIFlvdSBzaG91bGQgZ2VuZXJhbGx5IG5vdCBuZWVkIHRvIHVzZSB0aGVzZSBmdW5jdGlvbnMuIFRoZXkgYXJlIHByb3ZpZGVkXG4gKiBmb3IgdGhvc2UgY2FzZXMgd2hlcmUgeW91J3JlIGRvaW5nIHNvbWV0aGluZyBvdXQgb2YgdGhlIG9yZGluYXJ5XG4gKiBhbmQgeW91IG5lZWQgbG93ZXIgbGV2ZWwgYWNjZXNzLlxuICpcbiAqIEZvciBiYWNrd2FyZCBjb21wYXRpYmlseSB0aGV5IGFyZSBhdmFpbGFibGUgYXQgYm90aCBgdHdnbC5hdHRyaWJ1dGVzYCBhbmQgYHR3Z2xgXG4gKiBpdHNlbGZcbiAqXG4gKiBTZWUge0BsaW5rIG1vZHVsZTp0d2dsfSBmb3IgY29yZSBmdW5jdGlvbnNcbiAqXG4gKiBAbW9kdWxlIHR3Z2wvdmVydGV4QXJyYXlzXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBWZXJ0ZXhBcnJheUluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBudW1FbGVtZW50cyBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIHBhc3MgdG8gYGdsLmRyYXdBcnJheXNgIG9yIGBnbC5kcmF3RWxlbWVudHNgLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtlbGVtZW50VHlwZV0gVGhlIHR5cGUgb2YgaW5kaWNlcyBgVU5TSUdORURfQllURWAsIGBVTlNJR05FRF9TSE9SVGAgZXRjLi5cbiAqIEBwcm9wZXJ0eSB7V2ViR0xWZXJ0ZXhBcnJheU9iamVjdH0gW3ZlcnRleEFycmF5T2JqZWN0XSBhIHZlcnRleCBhcnJheSBvYmplY3RcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIFZlcnRleEFycmF5SW5mbyBmcm9tIGEgQnVmZmVySW5mbyBhbmQgb25lIG9yIG1vcmUgUHJvZ3JhbUluZm9zXG4gKlxuICogVGhpcyBjYW4gYmUgcGFzc2VkIHRvIHtAbGluayBtb2R1bGU6dHdnbC5zZXRCdWZmZXJzQW5kQXR0cmlidXRlc30gYW5kIHRvXG4gKiB7QGxpbmsgbW9kdWxlOnR3Z2w6ZHJhd0J1ZmZlckluZm99LlxuICpcbiAqID4gKipJTVBPUlRBTlQ6KiogVmVydGV4IEFycmF5IE9iamVjdHMgYXJlICoqbm90KiogYSBkaXJlY3QgYW5hbG9nIGZvciBhIEJ1ZmZlckluZm8uIFZlcnRleCBBcnJheSBPYmplY3RzXG4gKiAgIGFzc2lnbiBidWZmZXJzIHRvIHNwZWNpZmljIGF0dHJpYnV0ZXMgYXQgY3JlYXRpb24gdGltZS4gVGhhdCBtZWFucyB0aGV5IGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBwcm9ncmFtc1xuICogICB3aG8ncyBhdHRyaWJ1dGVzIHVzZSB0aGUgc2FtZSBhdHRyaWJ1dGUgbG9jYXRpb25zIGZvciB0aGUgc2FtZSBwdXJwb3Nlcy5cbiAqXG4gKiA+IEJpbmQgeW91ciBhdHRyaWJ1dGUgbG9jYXRpb25zIGJ5IHBhc3NpbmcgYW4gYXJyYXkgb2YgYXR0cmlidXRlIG5hbWVzIHRvIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVQcm9ncmFtSW5mb31cbiAqICAgb3IgdXNlIFdlYkdMIDIncyBHTFNMIEVTIDMncyBgbGF5b3V0KGxvY2F0aW9uID0gPG51bT4pYCB0byBtYWtlIHN1cmUgbG9jYXRpb25zIG1hdGNoLlxuICpcbiAqIGFsc29cbiAqXG4gKiA+ICoqSU1QT1JUQU5UOioqIEFmdGVyIGNhbGxpbmcgdHdnbC5zZXRCdWZmZXJzQW5kQXR0cmlidXRlIHdpdGggYSBCdWZmZXJJbmZvIHRoYXQgdXNlcyBhIFZlcnRleCBBcnJheSBPYmplY3RcbiAqICAgdGhhdCBWZXJ0ZXggQXJyYXkgT2JqZWN0IHdpbGwgYmUgYm91bmQuIFRoYXQgbWVhbnMgKipBTlkgTUFOSVBVTEFUSU9OIE9GIEVMRU1FTlRfQVJSQVlfQlVGRkVSIG9yIEFUVFJJQlVURVMqKlxuICogICB3aWxsIGFmZmVjdCB0aGUgVmVydGV4IEFycmF5IE9iamVjdCBzdGF0ZS5cbiAqXG4gKiA+IENhbGwgYGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKWAgdG8gZ2V0IGJhY2sgbWFuaXB1bGF0aW5nIHRoZSBnbG9iYWwgYXR0cmlidXRlcyBhbmQgRUxFTUVOVF9BUlJBWV9CVUZGRVIuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlByb2dyYW1JbmZvfG1vZHVsZTp0d2dsLlByb2dyYW1JbmZvW119IHByb2dyYW1JbmZvIGEgcHJvZ3JhbUluZm8gb3IgYXJyYXkgb2YgcHJvZ3JhbUluZm9zXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IGJ1ZmZlckluZm8gQnVmZmVySW5mbyBhcyByZXR1cm5lZCBmcm9tIGNyZWF0ZUJ1ZmZlckluZm9Gcm9tQXJyYXlzIGV0Yy4uLlxuICpcbiAqICAgIFlvdSBuZWVkIHRvIG1ha2Ugc3VyZSBldmVyeSBhdHRyaWJ1dGUgdGhhdCB3aWxsIGJlIHVzZWQgaXMgYm91bmQuIFNvIGZvciBleGFtcGxlIGFzc3VtZSBzaGFkZXIgMVxuICogICAgdXNlcyBhdHRyaWJ1dGVzIEEsIEIsIEMgYW5kIHNoYWRlciAyIHVzZXMgYXR0cmlidXRlcyBBLCBCLCBELiBJZiB5b3Ugb25seSBwYXNzIGluIHRoZSBwcm9ncmFtSW5mb1xuICogICAgZm9yIHNoYWRlciAxIHRoZW4gb25seSBhdHRyaWJ1dGVzIEEsIEIsIGFuZCBDIHdpbGwgaGF2ZSB0aGVpciBhdHRyaWJ1dGVzIHNldCBiZWNhdXNlIFRXR0wgZG9lc24ndFxuICogICAgbm93IGF0dHJpYnV0ZSBEJ3MgbG9jYXRpb24uXG4gKlxuICogICAgU28sIHlvdSBjYW4gcGFzcyBpbiBib3RoIHNoYWRlciAxIGFuZCBzaGFkZXIgMidzIHByb2dyYW1JbmZvXG4gKlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuVmVydGV4QXJyYXlJbmZvfSBUaGUgY3JlYXRlZCBWZXJ0ZXhBcnJheUluZm9cbiAqXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdmVydGV4QXJyYXlzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVZlcnRleEFycmF5SW5mbyhnbCwgcHJvZ3JhbUluZm9zLCBidWZmZXJJbmZvKSB7XG4gIHZhciB2YW8gPSBnbC5jcmVhdGVWZXJ0ZXhBcnJheSgpO1xuICBnbC5iaW5kVmVydGV4QXJyYXkodmFvKTtcbiAgaWYgKCFwcm9ncmFtSW5mb3MubGVuZ3RoKSB7XG4gICAgcHJvZ3JhbUluZm9zID0gW3Byb2dyYW1JbmZvc107XG4gIH1cbiAgcHJvZ3JhbUluZm9zLmZvckVhY2goZnVuY3Rpb24gKHByb2dyYW1JbmZvKSB7XG4gICAgcHJvZ3JhbXMuc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXMoZ2wsIHByb2dyYW1JbmZvLCBidWZmZXJJbmZvKTtcbiAgfSk7XG4gIGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcbiAgcmV0dXJuIHtcbiAgICBudW1FbGVtZW50czogYnVmZmVySW5mby5udW1FbGVtZW50cyxcbiAgICBlbGVtZW50VHlwZTogYnVmZmVySW5mby5lbGVtZW50VHlwZSxcbiAgICB2ZXJ0ZXhBcnJheU9iamVjdDogdmFvXG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHZlcnRleCBhcnJheSBvYmplY3QgYW5kIHRoZW4gc2V0cyB0aGUgYXR0cmlidXRlcyBvbiBpdFxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0IHRvIHVzZS5cbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gc2V0dGVycyBBdHRyaWJ1dGUgc2V0dGVycyBhcyByZXR1cm5lZCBmcm9tIGNyZWF0ZUF0dHJpYnV0ZVNldHRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIG1vZHVsZTp0d2dsLkF0dHJpYkluZm8+fSBhdHRyaWJzIEF0dHJpYkluZm9zIG1hcHBlZCBieSBhdHRyaWJ1dGUgbmFtZS5cbiAqIEBwYXJhbSB7V2ViR0xCdWZmZXJ9IFtpbmRpY2VzXSBhbiBvcHRpb25hbCBFTEVNRU5UX0FSUkFZX0JVRkZFUiBvZiBpbmRpY2VzXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdmVydGV4QXJyYXlzXG4gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxNSwgR3JlZ2cgVGF2YXJlcy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4gKiBtZXQ6XG4gKlxuICogICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbiAqIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbiAqIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbiAqIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqIGRpc3RyaWJ1dGlvbi5cbiAqICAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR3JlZ2cgVGF2YXJlcy4gbm9yIHRoZSBuYW1lcyBvZiBoaXNcbiAqIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4gKiB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbiAqIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1RcbiAqIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuICogQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbiAqIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuICogU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuICogTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbiAqIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbiAqIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuICogT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVWQU9BbmRTZXRBdHRyaWJ1dGVzKGdsLCBzZXR0ZXJzLCBhdHRyaWJzLCBpbmRpY2VzKSB7XG4gIHZhciB2YW8gPSBnbC5jcmVhdGVWZXJ0ZXhBcnJheSgpO1xuICBnbC5iaW5kVmVydGV4QXJyYXkodmFvKTtcbiAgcHJvZ3JhbXMuc2V0QXR0cmlidXRlcyhzZXR0ZXJzLCBhdHRyaWJzKTtcbiAgaWYgKGluZGljZXMpIHtcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBpbmRpY2VzKTtcbiAgfVxuICAvLyBXZSB1bmJpbmQgdGhpcyBiZWNhdXNlIG90aGVyd2lzZSBhbnkgY2hhbmdlIHRvIEVMRU1FTlRfQVJSQVlfQlVGRkVSXG4gIC8vIGxpa2Ugd2hlbiBjcmVhdGluZyBidWZmZXJzIGZvciBvdGhlciBzdHVmZiB3aWxsIG1lc3MgdXAgdGhpcyBWQU8ncyBiaW5kaW5nXG4gIGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcbiAgcmV0dXJuIHZhbztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdmVydGV4IGFycmF5IG9iamVjdCBhbmQgdGhlbiBzZXRzIHRoZSBhdHRyaWJ1dGVzXG4gKiBvbiBpdFxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiAgICAgICAgdG8gdXNlLlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fCBtb2R1bGU6dHdnbC5Qcm9ncmFtSW5mb30gcHJvZ3JhbUluZm8gYXMgcmV0dXJuZWQgZnJvbSBjcmVhdGVQcm9ncmFtSW5mbyBvciBBdHRyaWJ1dGUgc2V0dGVycyBhcyByZXR1cm5lZCBmcm9tIGNyZWF0ZUF0dHJpYnV0ZVNldHRlcnNcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuQnVmZmVySW5mb30gYnVmZmVySW5mbyBCdWZmZXJJbmZvIGFzIHJldHVybmVkIGZyb20gY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXMgZXRjLi4uXG4gKiBAcGFyYW0ge1dlYkdMQnVmZmVyfSBbaW5kaWNlc10gYW4gb3B0aW9uYWwgRUxFTUVOVF9BUlJBWV9CVUZGRVIgb2YgaW5kaWNlc1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ZlcnRleEFycmF5c1xuICovXG5mdW5jdGlvbiBjcmVhdGVWQU9Gcm9tQnVmZmVySW5mbyhnbCwgcHJvZ3JhbUluZm8sIGJ1ZmZlckluZm8pIHtcbiAgcmV0dXJuIGNyZWF0ZVZBT0FuZFNldEF0dHJpYnV0ZXMoZ2wsIHByb2dyYW1JbmZvLmF0dHJpYlNldHRlcnMgfHwgcHJvZ3JhbUluZm8sIGJ1ZmZlckluZm8uYXR0cmlicywgYnVmZmVySW5mby5pbmRpY2VzKTtcbn1cblxuZXhwb3J0cy5jcmVhdGVWZXJ0ZXhBcnJheUluZm8gPSBjcmVhdGVWZXJ0ZXhBcnJheUluZm87XG5leHBvcnRzLmNyZWF0ZVZBT0FuZFNldEF0dHJpYnV0ZXMgPSBjcmVhdGVWQU9BbmRTZXRBdHRyaWJ1dGVzO1xuZXhwb3J0cy5jcmVhdGVWQU9Gcm9tQnVmZmVySW5mbyA9IGNyZWF0ZVZBT0Zyb21CdWZmZXJJbmZvO1xuXG4vKioqLyB9KSxcbi8qIDEzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmR1cGxpY2F0ZVZlcnRpY2VzID0gZXhwb3J0cy5jb25jYXRWZXJ0aWNlcyA9IGV4cG9ydHMucmVvcmllbnRWZXJ0aWNlcyA9IGV4cG9ydHMucmVvcmllbnRQb3NpdGlvbnMgPSBleHBvcnRzLnJlb3JpZW50Tm9ybWFscyA9IGV4cG9ydHMucmVvcmllbnREaXJlY3Rpb25zID0gZXhwb3J0cy5tYWtlUmFuZG9tVmVydGV4Q29sb3JzID0gZXhwb3J0cy5mbGF0dGVuTm9ybWFscyA9IGV4cG9ydHMuZGVpbmRleFZlcnRpY2VzID0gZXhwb3J0cy5jcmVhdGVEaXNjVmVydGljZXMgPSBleHBvcnRzLmNyZWF0ZURpc2NCdWZmZXJzID0gZXhwb3J0cy5jcmVhdGVEaXNjQnVmZmVySW5mbyA9IGV4cG9ydHMuY3JlYXRlVG9ydXNWZXJ0aWNlcyA9IGV4cG9ydHMuY3JlYXRlVG9ydXNCdWZmZXJzID0gZXhwb3J0cy5jcmVhdGVUb3J1c0J1ZmZlckluZm8gPSBleHBvcnRzLmNyZWF0ZUN5bGluZGVyVmVydGljZXMgPSBleHBvcnRzLmNyZWF0ZUN5bGluZGVyQnVmZmVycyA9IGV4cG9ydHMuY3JlYXRlQ3lsaW5kZXJCdWZmZXJJbmZvID0gZXhwb3J0cy5jcmVhdGVDcmVzZW50VmVydGljZXMgPSBleHBvcnRzLmNyZWF0ZUNyZXNlbnRCdWZmZXJzID0gZXhwb3J0cy5jcmVhdGVDcmVzZW50QnVmZmVySW5mbyA9IGV4cG9ydHMuY3JlYXRlWFlRdWFkVmVydGljZXMgPSBleHBvcnRzLmNyZWF0ZVhZUXVhZEJ1ZmZlcnMgPSBleHBvcnRzLmNyZWF0ZVhZUXVhZEJ1ZmZlckluZm8gPSBleHBvcnRzLmNyZWF0ZVRydW5jYXRlZENvbmVWZXJ0aWNlcyA9IGV4cG9ydHMuY3JlYXRlVHJ1bmNhdGVkQ29uZUJ1ZmZlcnMgPSBleHBvcnRzLmNyZWF0ZVRydW5jYXRlZENvbmVCdWZmZXJJbmZvID0gZXhwb3J0cy5jcmVhdGVTcGhlcmVWZXJ0aWNlcyA9IGV4cG9ydHMuY3JlYXRlU3BoZXJlQnVmZmVycyA9IGV4cG9ydHMuY3JlYXRlU3BoZXJlQnVmZmVySW5mbyA9IGV4cG9ydHMuY3JlYXRlUGxhbmVWZXJ0aWNlcyA9IGV4cG9ydHMuY3JlYXRlUGxhbmVCdWZmZXJzID0gZXhwb3J0cy5jcmVhdGVQbGFuZUJ1ZmZlckluZm8gPSBleHBvcnRzLmNyZWF0ZUN1YmVWZXJ0aWNlcyA9IGV4cG9ydHMuY3JlYXRlQ3ViZUJ1ZmZlcnMgPSBleHBvcnRzLmNyZWF0ZUN1YmVCdWZmZXJJbmZvID0gZXhwb3J0cy5jcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5ID0gZXhwb3J0cy5jcmVhdGUzREZWZXJ0aWNlcyA9IGV4cG9ydHMuY3JlYXRlM0RGQnVmZmVycyA9IGV4cG9ydHMuY3JlYXRlM0RGQnVmZmVySW5mbyA9IHVuZGVmaW5lZDtcblxudmFyIF9hdHRyaWJ1dGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxudmFyIGF0dHJpYnV0ZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfYXR0cmlidXRlcyk7XG5cbnZhciBfaGVscGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIGhlbHBlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oZWxwZXIpO1xuXG52YXIgX3R5cGVkYXJyYXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIHR5cGVkQXJyYXlzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVkYXJyYXlzKTtcblxudmFyIF9tID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblxudmFyIG00ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX20pO1xuXG52YXIgX3YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgdjMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBnZXRBcnJheSA9IGF0dHJpYnV0ZXMuZ2V0QXJyYXlfOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4vKlxuICogQ29weXJpZ2h0IDIwMTUsIEdyZWdnIFRhdmFyZXMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuICogbWV0OlxuICpcbiAqICAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4gKiBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4gKiBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4gKiBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4gKiBkaXN0cmlidXRpb24uXG4gKiAgICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdyZWdnIFRhdmFyZXMuIG5vciB0aGUgbmFtZXMgb2YgaGlzXG4gKiBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuICogdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4gKiBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4gKiBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1JcbiAqIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4gKiBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbiAqIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1RcbiAqIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4gKiBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4gKiAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0VcbiAqIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuLyoqXG4gKiBWYXJpb3VzIGZ1bmN0aW9ucyB0byBtYWtlIHNpbXBsZSBwcmltaXRpdmVzXG4gKlxuICogbm90ZTogTW9zdCBwcmltaXRpdmUgZnVuY3Rpb25zIGNvbWUgaW4gMyBzdHlsZXNcbiAqXG4gKiAqICBgY3JlYXRlU29tZVNoYXBlQnVmZmVySW5mb2BcbiAqXG4gKiAgICBUaGVzZSBmdW5jdGlvbnMgYXJlIGFsbW9zdCBhbHdheXMgdGhlIGZ1bmN0aW9ucyB5b3Ugd2FudCB0byBjYWxsLiBUaGV5XG4gKiAgICBjcmVhdGUgdmVydGljZXMgdGhlbiBtYWtlIFdlYkdMQnVmZmVycyBhbmQgY3JlYXRlIHtAbGluayBtb2R1bGU6dHdnbC5BdHRyaWJJbmZvfXNcbiAqICAgIHJldHVyaW5nIGEge0BsaW5rIG1vZHVsZTp0d2dsLkJ1ZmZlckluZm99IHlvdSBjYW4gcGFzcyB0byB7QGxpbmsgbW9kdWxlOnR3Z2wuc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXN9XG4gKiAgICBhbmQge0BsaW5rIG1vZHVsZTp0d2dsLmRyYXdCdWZmZXJJbmZvfSBldGMuLi5cbiAqXG4gKiAqICBgY3JlYXRlU29tZVNoYXBlQnVmZmVyc2BcbiAqXG4gKiAgICBUaGVzZSBjcmVhdGUgV2ViR0xCdWZmZXJzIGFuZCBwdXQgeW91ciBkYXRhIGluIHRoZW0gYnV0IG5vdGhpbmcgZWxzZS5cbiAqICAgIEl0J3MgYSBzaG9ydGN1dCB0byBkb2luZyBpdCB5b3Vyc2VsZiBpZiB5b3UgZG9uJ3Qgd2FudCB0byB1c2VcbiAqICAgIHRoZSBoaWdoZXIgbGV2ZWwgZnVuY3Rpb25zLlxuICpcbiAqICogIGBjcmVhdGVTb21lU2hhcGVWZXJ0aWNlc2BcbiAqXG4gKiAgICBUaGVzZSBqdXN0IGNyZWF0ZSB2ZXJ0aWNlcywgbm8gYnVmZmVycy4gVGhpcyBhbGxvd3MgeW91IHRvIG1hbmlwdWxhdGUgdGhlIHZlcnRpY2VzXG4gKiAgICBvciBhZGQgbW9yZSBkYXRhIGJlZm9yZSBnZW5lcmF0aW5nIGEge0BsaW5rIG1vZHVsZTp0d2dsLkJ1ZmZlckluZm99LiBPbmNlIHlvdSdyZSBmaW5pc2hlZFxuICogICAgbWFuaXB1bGF0aW5nIHRoZSB2ZXJ0aWNlcyBjYWxsIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5c30uXG4gKlxuICogICAgZXhhbXBsZTpcbiAqXG4gKiAgICAgICAgY29uc3QgYXJyYXlzID0gdHdnbC5wcmltaXRpdmVzLmNyZWF0ZVBsYW5lQXJyYXlzKDEpO1xuICogICAgICAgIHR3Z2wucHJpbWl0aXZlcy5yZW9yaWVudFZlcnRpY2VzKGFycmF5cywgbTQucm90YXRpb25YKE1hdGguUEkgKiAwLjUpKTtcbiAqICAgICAgICBjb25zdCBidWZmZXJJbmZvID0gdHdnbC5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cyhnbCwgYXJyYXlzKTtcbiAqXG4gKiBAbW9kdWxlIHR3Z2wvcHJpbWl0aXZlc1xuICovXG52YXIgZ2V0TnVtQ29tcG9uZW50cyA9IGF0dHJpYnV0ZXMuZ2V0TnVtQ29tcG9uZW50c187IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuLyoqXG4gKiBBZGQgYHB1c2hgIHRvIGEgdHlwZWQgYXJyYXkuIEl0IGp1c3Qga2VlcHMgYSAnY3Vyc29yJ1xuICogYW5kIGFsbG93cyB1c2UgdG8gYHB1c2hgIHZhbHVlcyBpbnRvIHRoZSBhcnJheSBzbyB3ZVxuICogZG9uJ3QgaGF2ZSB0byBtYW51YWxseSBjb21wdXRlIG9mZnNldHNcbiAqIEBwYXJhbSB7VHlwZWRBcnJheX0gdHlwZWRBcnJheSBUeXBlZEFycmF5IHRvIGF1Z21lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1Db21wb25lbnRzIG51bWJlciBvZiBjb21wb25lbnRzLlxuICovXG5mdW5jdGlvbiBhdWdtZW50VHlwZWRBcnJheSh0eXBlZEFycmF5LCBudW1Db21wb25lbnRzKSB7XG4gIHZhciBjdXJzb3IgPSAwO1xuICB0eXBlZEFycmF5LnB1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGFyZ3VtZW50cy5sZW5ndGg7ICsraWkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGFyZ3VtZW50c1tpaV07XG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSB8fCB0eXBlZEFycmF5cy5pc0FycmF5QnVmZmVyKHZhbHVlKSkge1xuICAgICAgICBmb3IgKHZhciBqaiA9IDA7IGpqIDwgdmFsdWUubGVuZ3RoOyArK2pqKSB7XG4gICAgICAgICAgdHlwZWRBcnJheVtjdXJzb3IrK10gPSB2YWx1ZVtqal07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVkQXJyYXlbY3Vyc29yKytdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICB0eXBlZEFycmF5LnJlc2V0ID0gZnVuY3Rpb24gKG9wdF9pbmRleCkge1xuICAgIGN1cnNvciA9IG9wdF9pbmRleCB8fCAwO1xuICB9O1xuICB0eXBlZEFycmF5Lm51bUNvbXBvbmVudHMgPSBudW1Db21wb25lbnRzO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodHlwZWRBcnJheSwgJ251bUVsZW1lbnRzJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoIC8gdGhpcy5udW1Db21wb25lbnRzIHwgMDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdHlwZWRBcnJheTtcbn1cblxuLyoqXG4gKiBjcmVhdGVzIGEgdHlwZWQgYXJyYXkgd2l0aCBhIGBwdXNoYCBmdW5jdGlvbiBhdHRhY2hlZFxuICogc28gdGhhdCB5b3UgY2FuIGVhc2lseSAqcHVzaCogdmFsdWVzLlxuICpcbiAqIGBwdXNoYCBjYW4gdGFrZSBtdWx0aXBsZSBhcmd1bWVudHMuIElmIGFuIGFyZ3VtZW50IGlzIGFuIGFycmF5IGVhY2ggZWxlbWVudFxuICogb2YgdGhlIGFycmF5IHdpbGwgYmUgYWRkZWQgdG8gdGhlIHR5cGVkIGFycmF5LlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIGNvbnN0IGFycmF5ID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCAyKTsgIC8vIGNyZWF0ZXMgYSBGbG9hdDMyQXJyYXkgd2l0aCA2IHZhbHVlc1xuICogICAgIGFycmF5LnB1c2goMSwgMiwgMyk7XG4gKiAgICAgYXJyYXkucHVzaChbNCwgNSwgNl0pO1xuICogICAgIC8vIGFycmF5IG5vdyBjb250YWlucyBbMSwgMiwgMywgNCwgNSwgNl1cbiAqXG4gKiBBbHNvIGhhcyBgbnVtQ29tcG9uZW50c2AgYW5kIGBudW1FbGVtZW50c2AgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtQ29tcG9uZW50cyBudW1iZXIgb2YgY29tcG9uZW50c1xuICogQHBhcmFtIHtudW1iZXJ9IG51bUVsZW1lbnRzIG51bWJlciBvZiBlbGVtZW50cy4gVGhlIHRvdGFsIHNpemUgb2YgdGhlIGFycmF5IHdpbGwgYmUgYG51bUNvbXBvbmVudHMgKiBudW1FbGVtZW50c2AuXG4gKiBAcGFyYW0ge2NvbnN0cnVjdG9yfSBvcHRfdHlwZSBBIGNvbnN0cnVjdG9yIGZvciB0aGUgdHlwZS4gRGVmYXVsdCA9IGBGbG9hdDMyQXJyYXlgLlxuICogQHJldHVybiB7QXJyYXlCdWZmZXJWaWV3fSBBIHR5cGVkIGFycmF5LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheShudW1Db21wb25lbnRzLCBudW1FbGVtZW50cywgb3B0X3R5cGUpIHtcbiAgdmFyIFR5cGUgPSBvcHRfdHlwZSB8fCBGbG9hdDMyQXJyYXk7XG4gIHJldHVybiBhdWdtZW50VHlwZWRBcnJheShuZXcgVHlwZShudW1Db21wb25lbnRzICogbnVtRWxlbWVudHMpLCBudW1Db21wb25lbnRzKTtcbn1cblxuZnVuY3Rpb24gYWxsQnV0SW5kaWNlcyhuYW1lKSB7XG4gIHJldHVybiBuYW1lICE9PSBcImluZGljZXNcIjtcbn1cblxuLyoqXG4gKiBHaXZlbiBpbmRleGVkIHZlcnRpY2VzIGNyZWF0ZXMgYSBuZXcgc2V0IG9mIHZlcnRpY2VzIHVuaW5kZXhlZCBieSBleHBhbmRpbmcgdGhlIGluZGV4ZWQgdmVydGljZXMuXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBUeXBlZEFycmF5Pn0gdmVydGljZXMgVGhlIGluZGV4ZWQgdmVydGljZXMgdG8gZGVpbmRleFxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFR5cGVkQXJyYXk+fSBUaGUgZGVpbmRleGVkIHZlcnRpY2VzXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICovXG5mdW5jdGlvbiBkZWluZGV4VmVydGljZXModmVydGljZXMpIHtcbiAgdmFyIGluZGljZXMgPSB2ZXJ0aWNlcy5pbmRpY2VzO1xuICB2YXIgbmV3VmVydGljZXMgPSB7fTtcbiAgdmFyIG51bUVsZW1lbnRzID0gaW5kaWNlcy5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gZXhwYW5kVG9VbmluZGV4ZWQoY2hhbm5lbCkge1xuICAgIHZhciBzcmNCdWZmZXIgPSB2ZXJ0aWNlc1tjaGFubmVsXTtcbiAgICB2YXIgbnVtQ29tcG9uZW50cyA9IHNyY0J1ZmZlci5udW1Db21wb25lbnRzO1xuICAgIHZhciBkc3RCdWZmZXIgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KG51bUNvbXBvbmVudHMsIG51bUVsZW1lbnRzLCBzcmNCdWZmZXIuY29uc3RydWN0b3IpO1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBudW1FbGVtZW50czsgKytpaSkge1xuICAgICAgdmFyIG5keCA9IGluZGljZXNbaWldO1xuICAgICAgdmFyIG9mZnNldCA9IG5keCAqIG51bUNvbXBvbmVudHM7XG4gICAgICBmb3IgKHZhciBqaiA9IDA7IGpqIDwgbnVtQ29tcG9uZW50czsgKytqaikge1xuICAgICAgICBkc3RCdWZmZXIucHVzaChzcmNCdWZmZXJbb2Zmc2V0ICsgampdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbmV3VmVydGljZXNbY2hhbm5lbF0gPSBkc3RCdWZmZXI7XG4gIH1cblxuICBPYmplY3Qua2V5cyh2ZXJ0aWNlcykuZmlsdGVyKGFsbEJ1dEluZGljZXMpLmZvckVhY2goZXhwYW5kVG9VbmluZGV4ZWQpO1xuXG4gIHJldHVybiBuZXdWZXJ0aWNlcztcbn1cblxuLyoqXG4gKiBmbGF0dGVucyB0aGUgbm9ybWFscyBvZiBkZWluZGV4ZWQgdmVydGljZXMgaW4gcGxhY2UuXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBUeXBlZEFycmF5Pn0gdmVydGljZXMgVGhlIGRlaW5kZXhlZCB2ZXJ0aWNlcyB3aG8ncyBub3JtYWxzIHRvIGZsYXR0ZW5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBUeXBlZEFycmF5Pn0gVGhlIGZsYXR0ZW5lZCB2ZXJ0aWNlcyAoc2FtZSBhcyB3YXMgcGFzc2VkIGluKVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuZnVuY3Rpb24gZmxhdHRlbk5vcm1hbHModmVydGljZXMpIHtcbiAgaWYgKHZlcnRpY2VzLmluZGljZXMpIHtcbiAgICB0aHJvdyBcImNhbid0IGZsYXR0ZW4gbm9ybWFscyBvZiBpbmRleGVkIHZlcnRpY2VzLiBkZWluZGV4IHRoZW0gZmlyc3RcIjtcbiAgfVxuXG4gIHZhciBub3JtYWxzID0gdmVydGljZXMubm9ybWFsO1xuICB2YXIgbnVtTm9ybWFscyA9IG5vcm1hbHMubGVuZ3RoO1xuICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgbnVtTm9ybWFsczsgaWkgKz0gOSkge1xuICAgIC8vIHB1bGwgb3V0IHRoZSAzIG5vcm1hbHMgZm9yIHRoaXMgdHJpYW5nbGVcbiAgICB2YXIgbmF4ID0gbm9ybWFsc1tpaSArIDBdO1xuICAgIHZhciBuYXkgPSBub3JtYWxzW2lpICsgMV07XG4gICAgdmFyIG5heiA9IG5vcm1hbHNbaWkgKyAyXTtcblxuICAgIHZhciBuYnggPSBub3JtYWxzW2lpICsgM107XG4gICAgdmFyIG5ieSA9IG5vcm1hbHNbaWkgKyA0XTtcbiAgICB2YXIgbmJ6ID0gbm9ybWFsc1tpaSArIDVdO1xuXG4gICAgdmFyIG5jeCA9IG5vcm1hbHNbaWkgKyA2XTtcbiAgICB2YXIgbmN5ID0gbm9ybWFsc1tpaSArIDddO1xuICAgIHZhciBuY3ogPSBub3JtYWxzW2lpICsgOF07XG5cbiAgICAvLyBhZGQgdGhlbVxuICAgIHZhciBueCA9IG5heCArIG5ieCArIG5jeDtcbiAgICB2YXIgbnkgPSBuYXkgKyBuYnkgKyBuY3k7XG4gICAgdmFyIG56ID0gbmF6ICsgbmJ6ICsgbmN6O1xuXG4gICAgLy8gbm9ybWFsaXplIHRoZW1cbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5zcXJ0KG54ICogbnggKyBueSAqIG55ICsgbnogKiBueik7XG5cbiAgICBueCAvPSBsZW5ndGg7XG4gICAgbnkgLz0gbGVuZ3RoO1xuICAgIG56IC89IGxlbmd0aDtcblxuICAgIC8vIGNvcHkgdGhlbSBiYWNrIGluXG4gICAgbm9ybWFsc1tpaSArIDBdID0gbng7XG4gICAgbm9ybWFsc1tpaSArIDFdID0gbnk7XG4gICAgbm9ybWFsc1tpaSArIDJdID0gbno7XG5cbiAgICBub3JtYWxzW2lpICsgM10gPSBueDtcbiAgICBub3JtYWxzW2lpICsgNF0gPSBueTtcbiAgICBub3JtYWxzW2lpICsgNV0gPSBuejtcblxuICAgIG5vcm1hbHNbaWkgKyA2XSA9IG54O1xuICAgIG5vcm1hbHNbaWkgKyA3XSA9IG55O1xuICAgIG5vcm1hbHNbaWkgKyA4XSA9IG56O1xuICB9XG5cbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuXG5mdW5jdGlvbiBhcHBseUZ1bmNUb1YzQXJyYXkoYXJyYXksIG1hdHJpeCwgZm4pIHtcbiAgdmFyIGxlbiA9IGFycmF5Lmxlbmd0aDtcbiAgdmFyIHRtcCA9IG5ldyBGbG9hdDMyQXJyYXkoMyk7XG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBsZW47IGlpICs9IDMpIHtcbiAgICBmbihtYXRyaXgsIFthcnJheVtpaV0sIGFycmF5W2lpICsgMV0sIGFycmF5W2lpICsgMl1dLCB0bXApO1xuICAgIGFycmF5W2lpXSA9IHRtcFswXTtcbiAgICBhcnJheVtpaSArIDFdID0gdG1wWzFdO1xuICAgIGFycmF5W2lpICsgMl0gPSB0bXBbMl07XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtTm9ybWFsKG1pLCB2LCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IHYzLmNyZWF0ZSgpO1xuICB2YXIgdjAgPSB2WzBdO1xuICB2YXIgdjEgPSB2WzFdO1xuICB2YXIgdjIgPSB2WzJdO1xuXG4gIGRzdFswXSA9IHYwICogbWlbMCAqIDQgKyAwXSArIHYxICogbWlbMCAqIDQgKyAxXSArIHYyICogbWlbMCAqIDQgKyAyXTtcbiAgZHN0WzFdID0gdjAgKiBtaVsxICogNCArIDBdICsgdjEgKiBtaVsxICogNCArIDFdICsgdjIgKiBtaVsxICogNCArIDJdO1xuICBkc3RbMl0gPSB2MCAqIG1pWzIgKiA0ICsgMF0gKyB2MSAqIG1pWzIgKiA0ICsgMV0gKyB2MiAqIG1pWzIgKiA0ICsgMl07XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBSZW9yaWVudHMgZGlyZWN0aW9ucyBieSB0aGUgZ2l2ZW4gbWF0cml4Li5cbiAqIEBwYXJhbSB7bnVtYmVyW118VHlwZWRBcnJheX0gYXJyYXkgVGhlIGFycmF5LiBBc3N1bWVzIHZhbHVlIGZsb2F0cyBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7TWF0cml4fSBtYXRyaXggQSBtYXRyaXggdG8gbXVsdGlwbHkgYnkuXG4gKiBAcmV0dXJuIHtudW1iZXJbXXxUeXBlZEFycmF5fSB0aGUgc2FtZSBhcnJheSB0aGF0IHdhcyBwYXNzZWQgaW5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cbmZ1bmN0aW9uIHJlb3JpZW50RGlyZWN0aW9ucyhhcnJheSwgbWF0cml4KSB7XG4gIGFwcGx5RnVuY1RvVjNBcnJheShhcnJheSwgbWF0cml4LCBtNC50cmFuc2Zvcm1EaXJlY3Rpb24pO1xuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogUmVvcmllbnRzIG5vcm1hbHMgYnkgdGhlIGludmVyc2UtdHJhbnNwb3NlIG9mIHRoZSBnaXZlblxuICogbWF0cml4Li5cbiAqIEBwYXJhbSB7bnVtYmVyW118VHlwZWRBcnJheX0gYXJyYXkgVGhlIGFycmF5LiBBc3N1bWVzIHZhbHVlIGZsb2F0cyBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7TWF0cml4fSBtYXRyaXggQSBtYXRyaXggdG8gbXVsdGlwbHkgYnkuXG4gKiBAcmV0dXJuIHtudW1iZXJbXXxUeXBlZEFycmF5fSB0aGUgc2FtZSBhcnJheSB0aGF0IHdhcyBwYXNzZWQgaW5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cbmZ1bmN0aW9uIHJlb3JpZW50Tm9ybWFscyhhcnJheSwgbWF0cml4KSB7XG4gIGFwcGx5RnVuY1RvVjNBcnJheShhcnJheSwgbTQuaW52ZXJzZShtYXRyaXgpLCB0cmFuc2Zvcm1Ob3JtYWwpO1xuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogUmVvcmllbnRzIHBvc2l0aW9ucyBieSB0aGUgZ2l2ZW4gbWF0cml4LiBJbiBvdGhlciB3b3JkcywgaXRcbiAqIG11bHRpcGxpZXMgZWFjaCB2ZXJ0ZXggYnkgdGhlIGdpdmVuIG1hdHJpeC5cbiAqIEBwYXJhbSB7bnVtYmVyW118VHlwZWRBcnJheX0gYXJyYXkgVGhlIGFycmF5LiBBc3N1bWVzIHZhbHVlIGZsb2F0cyBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7TWF0cml4fSBtYXRyaXggQSBtYXRyaXggdG8gbXVsdGlwbHkgYnkuXG4gKiBAcmV0dXJuIHtudW1iZXJbXXxUeXBlZEFycmF5fSB0aGUgc2FtZSBhcnJheSB0aGF0IHdhcyBwYXNzZWQgaW5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cbmZ1bmN0aW9uIHJlb3JpZW50UG9zaXRpb25zKGFycmF5LCBtYXRyaXgpIHtcbiAgYXBwbHlGdW5jVG9WM0FycmF5KGFycmF5LCBtYXRyaXgsIG00LnRyYW5zZm9ybVBvaW50KTtcbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIFJlb3JpZW50cyBhcnJheXMgYnkgdGhlIGdpdmVuIG1hdHJpeC4gQXNzdW1lcyBhcnJheXMgaGF2ZVxuICogbmFtZXMgdGhhdCBjb250YWlucyAncG9zJyBjb3VsZCBiZSByZW9yaWVudGVkIGFzIHBvc2l0aW9ucyxcbiAqICdiaW5vcm0nIG9yICd0YW4nIGFzIGRpcmVjdGlvbnMsIGFuZCAnbm9ybScgYXMgbm9ybWFscy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCAobnVtYmVyW118VHlwZWRBcnJheSk+fSBhcnJheXMgVGhlIHZlcnRpY2VzIHRvIHJlb3JpZW50XG4gKiBAcGFyYW0ge01hdHJpeH0gbWF0cml4IG1hdHJpeCB0byByZW9yaWVudCBieS5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCAobnVtYmVyW118VHlwZWRBcnJheSk+fSBzYW1lIGFycmF5cyB0aGF0IHdlcmUgcGFzc2VkIGluLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuZnVuY3Rpb24gcmVvcmllbnRWZXJ0aWNlcyhhcnJheXMsIG1hdHJpeCkge1xuICBPYmplY3Qua2V5cyhhcnJheXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgYXJyYXkgPSBhcnJheXNbbmFtZV07XG4gICAgaWYgKG5hbWUuaW5kZXhPZihcInBvc1wiKSA+PSAwKSB7XG4gICAgICByZW9yaWVudFBvc2l0aW9ucyhhcnJheSwgbWF0cml4KTtcbiAgICB9IGVsc2UgaWYgKG5hbWUuaW5kZXhPZihcInRhblwiKSA+PSAwIHx8IG5hbWUuaW5kZXhPZihcImJpbm9ybVwiKSA+PSAwKSB7XG4gICAgICByZW9yaWVudERpcmVjdGlvbnMoYXJyYXksIG1hdHJpeCk7XG4gICAgfSBlbHNlIGlmIChuYW1lLmluZGV4T2YoXCJub3JtXCIpID49IDApIHtcbiAgICAgIHJlb3JpZW50Tm9ybWFscyhhcnJheSwgbWF0cml4KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYXJyYXlzO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgWFkgcXVhZCBCdWZmZXJJbmZvXG4gKlxuICogVGhlIGRlZmF1bHQgd2l0aCBubyBwYXJhbWV0ZXJzIHdpbGwgcmV0dXJuIGEgMngyIHF1YWQgd2l0aCB2YWx1ZXMgZnJvbSAtMSB0byArMS5cbiAqIElmIHlvdSB3YW50IGEgdW5pdCBxdWFkIHdpdGggdGhhdCBnb2VzIGZyb20gMCB0byAxIHlvdSdkIGNhbGwgaXQgd2l0aFxuICpcbiAqICAgICB0d2dsLnByaW1pdGl2ZXMuY3JlYXRlWFlRdWFkQnVmZmVySW5mbyhnbCwgMSwgMC41LCAwLjUpO1xuICpcbiAqIElmIHlvdSB3YW50IGEgdW5pdCBxdWFkIGNlbnRlcmVkIGFib3ZlIDAsMCB5b3UnZCBjYWxsIGl0IHdpdGhcbiAqXG4gKiAgICAgdHdnbC5wcmltaXRpdmVzLmNyZWF0ZVhZUXVhZEJ1ZmZlckluZm8oZ2wsIDEsIDAsIDAuNSk7XG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpemVdIHRoZSBzaXplIGFjcm9zcyB0aGUgcXVhZC4gRGVmYXVsdHMgdG8gMiB3aGljaCBtZWFucyB2ZXJ0aWNlcyB3aWxsIGdvIGZyb20gLTEgdG8gKzFcbiAqIEBwYXJhbSB7bnVtYmVyfSBbeE9mZnNldF0gdGhlIGFtb3VudCB0byBvZmZzZXQgdGhlIHF1YWQgaW4gWFxuICogQHBhcmFtIHtudW1iZXJ9IFt5T2Zmc2V0XSB0aGUgYW1vdW50IHRvIG9mZnNldCB0aGUgcXVhZCBpbiBZXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgV2ViR0xCdWZmZXI+fSB0aGUgY3JlYXRlZCBYWSBRdWFkIEJ1ZmZlckluZm9cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlWFlRdWFkQnVmZmVySW5mb1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBYWSBxdWFkIEJ1ZmZlcnNcbiAqXG4gKiBUaGUgZGVmYXVsdCB3aXRoIG5vIHBhcmFtZXRlcnMgd2lsbCByZXR1cm4gYSAyeDIgcXVhZCB3aXRoIHZhbHVlcyBmcm9tIC0xIHRvICsxLlxuICogSWYgeW91IHdhbnQgYSB1bml0IHF1YWQgd2l0aCB0aGF0IGdvZXMgZnJvbSAwIHRvIDEgeW91J2QgY2FsbCBpdCB3aXRoXG4gKlxuICogICAgIHR3Z2wucHJpbWl0aXZlcy5jcmVhdGVYWVF1YWRCdWZmZXJJbmZvKGdsLCAxLCAwLjUsIDAuNSk7XG4gKlxuICogSWYgeW91IHdhbnQgYSB1bml0IHF1YWQgY2VudGVyZWQgYWJvdmUgMCwwIHlvdSdkIGNhbGwgaXQgd2l0aFxuICpcbiAqICAgICB0d2dsLnByaW1pdGl2ZXMuY3JlYXRlWFlRdWFkQnVmZmVySW5mbyhnbCwgMSwgMCwgMC41KTtcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZV0gdGhlIHNpemUgYWNyb3NzIHRoZSBxdWFkLiBEZWZhdWx0cyB0byAyIHdoaWNoIG1lYW5zIHZlcnRpY2VzIHdpbGwgZ28gZnJvbSAtMSB0byArMVxuICogQHBhcmFtIHtudW1iZXJ9IFt4T2Zmc2V0XSB0aGUgYW1vdW50IHRvIG9mZnNldCB0aGUgcXVhZCBpbiBYXG4gKiBAcGFyYW0ge251bWJlcn0gW3lPZmZzZXRdIHRoZSBhbW91bnQgdG8gb2Zmc2V0IHRoZSBxdWFkIGluIFlcbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IHRoZSBjcmVhdGVkIFhZIFF1YWQgYnVmZmVyc1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVYWVF1YWRCdWZmZXJzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIFhZIHF1YWQgdmVydGljZXNcbiAqXG4gKiBUaGUgZGVmYXVsdCB3aXRoIG5vIHBhcmFtZXRlcnMgd2lsbCByZXR1cm4gYSAyeDIgcXVhZCB3aXRoIHZhbHVlcyBmcm9tIC0xIHRvICsxLlxuICogSWYgeW91IHdhbnQgYSB1bml0IHF1YWQgd2l0aCB0aGF0IGdvZXMgZnJvbSAwIHRvIDEgeW91J2QgY2FsbCBpdCB3aXRoXG4gKlxuICogICAgIHR3Z2wucHJpbWl0aXZlcy5jcmVhdGVYWVF1YWRWZXJ0aWNlcygxLCAwLjUsIDAuNSk7XG4gKlxuICogSWYgeW91IHdhbnQgYSB1bml0IHF1YWQgY2VudGVyZWQgYWJvdmUgMCwwIHlvdSdkIGNhbGwgaXQgd2l0aFxuICpcbiAqICAgICB0d2dsLnByaW1pdGl2ZXMuY3JlYXRlWFlRdWFkVmVydGljZXMoMSwgMCwgMC41KTtcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpemVdIHRoZSBzaXplIGFjcm9zcyB0aGUgcXVhZC4gRGVmYXVsdHMgdG8gMiB3aGljaCBtZWFucyB2ZXJ0aWNlcyB3aWxsIGdvIGZyb20gLTEgdG8gKzFcbiAqIEBwYXJhbSB7bnVtYmVyfSBbeE9mZnNldF0gdGhlIGFtb3VudCB0byBvZmZzZXQgdGhlIHF1YWQgaW4gWFxuICogQHBhcmFtIHtudW1iZXJ9IFt5T2Zmc2V0XSB0aGUgYW1vdW50IHRvIG9mZnNldCB0aGUgcXVhZCBpbiBZXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT4gdGhlIGNyZWF0ZWQgWFkgUXVhZCB2ZXJ0aWNlc1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlWFlRdWFkVmVydGljZXMoc2l6ZSwgeE9mZnNldCwgeU9mZnNldCkge1xuICBzaXplID0gc2l6ZSB8fCAyO1xuICB4T2Zmc2V0ID0geE9mZnNldCB8fCAwO1xuICB5T2Zmc2V0ID0geU9mZnNldCB8fCAwO1xuICBzaXplICo9IDAuNTtcbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjoge1xuICAgICAgbnVtQ29tcG9uZW50czogMixcbiAgICAgIGRhdGE6IFt4T2Zmc2V0ICsgLTEgKiBzaXplLCB5T2Zmc2V0ICsgLTEgKiBzaXplLCB4T2Zmc2V0ICsgMSAqIHNpemUsIHlPZmZzZXQgKyAtMSAqIHNpemUsIHhPZmZzZXQgKyAtMSAqIHNpemUsIHlPZmZzZXQgKyAxICogc2l6ZSwgeE9mZnNldCArIDEgKiBzaXplLCB5T2Zmc2V0ICsgMSAqIHNpemVdXG4gICAgfSxcbiAgICBub3JtYWw6IFswLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxXSxcbiAgICB0ZXhjb29yZDogWzAsIDAsIDEsIDAsIDAsIDEsIDEsIDFdLFxuICAgIGluZGljZXM6IFswLCAxLCAyLCAyLCAxLCAzXVxuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgWFogcGxhbmUgQnVmZmVySW5mby5cbiAqXG4gKiBUaGUgY3JlYXRlZCBwbGFuZSBoYXMgcG9zaXRpb24sIG5vcm1hbCwgYW5kIHRleGNvb3JkIGRhdGFcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2lkdGhdIFdpZHRoIG9mIHRoZSBwbGFuZS4gRGVmYXVsdCA9IDFcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZGVwdGhdIERlcHRoIG9mIHRoZSBwbGFuZS4gRGVmYXVsdCA9IDFcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3ViZGl2aXNpb25zV2lkdGhdIE51bWJlciBvZiBzdGVwcyBhY3Jvc3MgdGhlIHBsYW5lLiBEZWZhdWx0ID0gMVxuICogQHBhcmFtIHtudW1iZXJ9IFtzdWJkaXZpc2lvbnNEZXB0aF0gTnVtYmVyIG9mIHN0ZXBzIGRvd24gdGhlIHBsYW5lLiBEZWZhdWx0ID0gMVxuICogQHBhcmFtIHtNYXRyaXg0fSBbbWF0cml4XSBBIG1hdHJpeCBieSB3aGljaCB0byBtdWx0aXBseSBhbGwgdGhlIHZlcnRpY2VzLlxuICogQHJldHVybiB7QG1vZHVsZTp0d2dsLkJ1ZmZlckluZm99IFRoZSBjcmVhdGVkIHBsYW5lIEJ1ZmZlckluZm8uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZVBsYW5lQnVmZmVySW5mb1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBYWiBwbGFuZSBidWZmZXJzLlxuICpcbiAqIFRoZSBjcmVhdGVkIHBsYW5lIGhhcyBwb3NpdGlvbiwgbm9ybWFsLCBhbmQgdGV4Y29vcmQgZGF0YVxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IFt3aWR0aF0gV2lkdGggb2YgdGhlIHBsYW5lLiBEZWZhdWx0ID0gMVxuICogQHBhcmFtIHtudW1iZXJ9IFtkZXB0aF0gRGVwdGggb2YgdGhlIHBsYW5lLiBEZWZhdWx0ID0gMVxuICogQHBhcmFtIHtudW1iZXJ9IFtzdWJkaXZpc2lvbnNXaWR0aF0gTnVtYmVyIG9mIHN0ZXBzIGFjcm9zcyB0aGUgcGxhbmUuIERlZmF1bHQgPSAxXG4gKiBAcGFyYW0ge251bWJlcn0gW3N1YmRpdmlzaW9uc0RlcHRoXSBOdW1iZXIgb2Ygc3RlcHMgZG93biB0aGUgcGxhbmUuIERlZmF1bHQgPSAxXG4gKiBAcGFyYW0ge01hdHJpeDR9IFttYXRyaXhdIEEgbWF0cml4IGJ5IHdoaWNoIHRvIG11bHRpcGx5IGFsbCB0aGUgdmVydGljZXMuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgV2ViR0xCdWZmZXI+fSBUaGUgY3JlYXRlZCBwbGFuZSBidWZmZXJzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVQbGFuZUJ1ZmZlcnNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgWFogcGxhbmUgdmVydGljZXMuXG4gKlxuICogVGhlIGNyZWF0ZWQgcGxhbmUgaGFzIHBvc2l0aW9uLCBub3JtYWwsIGFuZCB0ZXhjb29yZCBkYXRhXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IFt3aWR0aF0gV2lkdGggb2YgdGhlIHBsYW5lLiBEZWZhdWx0ID0gMVxuICogQHBhcmFtIHtudW1iZXJ9IFtkZXB0aF0gRGVwdGggb2YgdGhlIHBsYW5lLiBEZWZhdWx0ID0gMVxuICogQHBhcmFtIHtudW1iZXJ9IFtzdWJkaXZpc2lvbnNXaWR0aF0gTnVtYmVyIG9mIHN0ZXBzIGFjcm9zcyB0aGUgcGxhbmUuIERlZmF1bHQgPSAxXG4gKiBAcGFyYW0ge251bWJlcn0gW3N1YmRpdmlzaW9uc0RlcHRoXSBOdW1iZXIgb2Ygc3RlcHMgZG93biB0aGUgcGxhbmUuIERlZmF1bHQgPSAxXG4gKiBAcGFyYW0ge01hdHJpeDR9IFttYXRyaXhdIEEgbWF0cml4IGJ5IHdoaWNoIHRvIG11bHRpcGx5IGFsbCB0aGUgdmVydGljZXMuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IFRoZSBjcmVhdGVkIHBsYW5lIHZlcnRpY2VzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUGxhbmVWZXJ0aWNlcyh3aWR0aCwgZGVwdGgsIHN1YmRpdmlzaW9uc1dpZHRoLCBzdWJkaXZpc2lvbnNEZXB0aCwgbWF0cml4KSB7XG4gIHdpZHRoID0gd2lkdGggfHwgMTtcbiAgZGVwdGggPSBkZXB0aCB8fCAxO1xuICBzdWJkaXZpc2lvbnNXaWR0aCA9IHN1YmRpdmlzaW9uc1dpZHRoIHx8IDE7XG4gIHN1YmRpdmlzaW9uc0RlcHRoID0gc3ViZGl2aXNpb25zRGVwdGggfHwgMTtcbiAgbWF0cml4ID0gbWF0cml4IHx8IG00LmlkZW50aXR5KCk7XG5cbiAgdmFyIG51bVZlcnRpY2VzID0gKHN1YmRpdmlzaW9uc1dpZHRoICsgMSkgKiAoc3ViZGl2aXNpb25zRGVwdGggKyAxKTtcbiAgdmFyIHBvc2l0aW9ucyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICB2YXIgbm9ybWFscyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICB2YXIgdGV4Y29vcmRzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgyLCBudW1WZXJ0aWNlcyk7XG5cbiAgZm9yICh2YXIgeiA9IDA7IHogPD0gc3ViZGl2aXNpb25zRGVwdGg7IHorKykge1xuICAgIGZvciAodmFyIHggPSAwOyB4IDw9IHN1YmRpdmlzaW9uc1dpZHRoOyB4KyspIHtcbiAgICAgIHZhciB1ID0geCAvIHN1YmRpdmlzaW9uc1dpZHRoO1xuICAgICAgdmFyIHYgPSB6IC8gc3ViZGl2aXNpb25zRGVwdGg7XG4gICAgICBwb3NpdGlvbnMucHVzaCh3aWR0aCAqIHUgLSB3aWR0aCAqIDAuNSwgMCwgZGVwdGggKiB2IC0gZGVwdGggKiAwLjUpO1xuICAgICAgbm9ybWFscy5wdXNoKDAsIDEsIDApO1xuICAgICAgdGV4Y29vcmRzLnB1c2godSwgdik7XG4gICAgfVxuICB9XG5cbiAgdmFyIG51bVZlcnRzQWNyb3NzID0gc3ViZGl2aXNpb25zV2lkdGggKyAxO1xuICB2YXIgaW5kaWNlcyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgc3ViZGl2aXNpb25zV2lkdGggKiBzdWJkaXZpc2lvbnNEZXB0aCAqIDIsIFVpbnQxNkFycmF5KTtcblxuICBmb3IgKHZhciBfeiA9IDA7IF96IDwgc3ViZGl2aXNpb25zRGVwdGg7IF96KyspIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZm9yICh2YXIgX3ggPSAwOyBfeCA8IHN1YmRpdmlzaW9uc1dpZHRoOyBfeCsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAvLyBNYWtlIHRyaWFuZ2xlIDEgb2YgcXVhZC5cbiAgICAgIGluZGljZXMucHVzaCgoX3ogKyAwKSAqIG51bVZlcnRzQWNyb3NzICsgX3gsIChfeiArIDEpICogbnVtVmVydHNBY3Jvc3MgKyBfeCwgKF96ICsgMCkgKiBudW1WZXJ0c0Fjcm9zcyArIF94ICsgMSk7XG5cbiAgICAgIC8vIE1ha2UgdHJpYW5nbGUgMiBvZiBxdWFkLlxuICAgICAgaW5kaWNlcy5wdXNoKChfeiArIDEpICogbnVtVmVydHNBY3Jvc3MgKyBfeCwgKF96ICsgMSkgKiBudW1WZXJ0c0Fjcm9zcyArIF94ICsgMSwgKF96ICsgMCkgKiBudW1WZXJ0c0Fjcm9zcyArIF94ICsgMSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGFycmF5cyA9IHJlb3JpZW50VmVydGljZXMoe1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvbnMsXG4gICAgbm9ybWFsOiBub3JtYWxzLFxuICAgIHRleGNvb3JkOiB0ZXhjb29yZHMsXG4gICAgaW5kaWNlczogaW5kaWNlc1xuICB9LCBtYXRyaXgpO1xuICByZXR1cm4gYXJyYXlzO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgc3BoZXJlIEJ1ZmZlckluZm8uXG4gKlxuICogVGhlIGNyZWF0ZWQgc3BoZXJlIGhhcyBwb3NpdGlvbiwgbm9ybWFsLCBhbmQgdGV4Y29vcmQgZGF0YVxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyByYWRpdXMgb2YgdGhlIHNwaGVyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdWJkaXZpc2lvbnNBeGlzIG51bWJlciBvZiBzdGVwcyBhcm91bmQgdGhlIHNwaGVyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdWJkaXZpc2lvbnNIZWlnaHQgbnVtYmVyIG9mIHZlcnRpY2FsbHkgb24gdGhlIHNwaGVyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0X3N0YXJ0TGF0aXR1ZGVJblJhZGlhbnNdIHdoZXJlIHRvIHN0YXJ0IHRoZVxuICogICAgIHRvcCBvZiB0aGUgc3BoZXJlLiBEZWZhdWx0ID0gMC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0X2VuZExhdGl0dWRlSW5SYWRpYW5zXSBXaGVyZSB0byBlbmQgdGhlXG4gKiAgICAgYm90dG9tIG9mIHRoZSBzcGhlcmUuIERlZmF1bHQgPSBNYXRoLlBJLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRfc3RhcnRMb25naXR1ZGVJblJhZGlhbnNdIHdoZXJlIHRvIHN0YXJ0XG4gKiAgICAgd3JhcHBpbmcgdGhlIHNwaGVyZS4gRGVmYXVsdCA9IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdF9lbmRMb25naXR1ZGVJblJhZGlhbnNdIHdoZXJlIHRvIGVuZFxuICogICAgIHdyYXBwaW5nIHRoZSBzcGhlcmUuIERlZmF1bHQgPSAyICogTWF0aC5QSS5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IFRoZSBjcmVhdGVkIHNwaGVyZSBCdWZmZXJJbmZvLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVTcGhlcmVCdWZmZXJJbmZvXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIHNwaGVyZSBidWZmZXJzLlxuICpcbiAqIFRoZSBjcmVhdGVkIHNwaGVyZSBoYXMgcG9zaXRpb24sIG5vcm1hbCwgYW5kIHRleGNvb3JkIGRhdGFcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgcmFkaXVzIG9mIHRoZSBzcGhlcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zQXhpcyBudW1iZXIgb2Ygc3RlcHMgYXJvdW5kIHRoZSBzcGhlcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zSGVpZ2h0IG51bWJlciBvZiB2ZXJ0aWNhbGx5IG9uIHRoZSBzcGhlcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdF9zdGFydExhdGl0dWRlSW5SYWRpYW5zXSB3aGVyZSB0byBzdGFydCB0aGVcbiAqICAgICB0b3Agb2YgdGhlIHNwaGVyZS4gRGVmYXVsdCA9IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdF9lbmRMYXRpdHVkZUluUmFkaWFuc10gV2hlcmUgdG8gZW5kIHRoZVxuICogICAgIGJvdHRvbSBvZiB0aGUgc3BoZXJlLiBEZWZhdWx0ID0gTWF0aC5QSS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0X3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zXSB3aGVyZSB0byBzdGFydFxuICogICAgIHdyYXBwaW5nIHRoZSBzcGhlcmUuIERlZmF1bHQgPSAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRfZW5kTG9uZ2l0dWRlSW5SYWRpYW5zXSB3aGVyZSB0byBlbmRcbiAqICAgICB3cmFwcGluZyB0aGUgc3BoZXJlLiBEZWZhdWx0ID0gMiAqIE1hdGguUEkuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgV2ViR0xCdWZmZXI+fSBUaGUgY3JlYXRlZCBzcGhlcmUgYnVmZmVycy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlU3BoZXJlQnVmZmVyc1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBzcGhlcmUgdmVydGljZXMuXG4gKlxuICogVGhlIGNyZWF0ZWQgc3BoZXJlIGhhcyBwb3NpdGlvbiwgbm9ybWFsLCBhbmQgdGV4Y29vcmQgZGF0YVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgcmFkaXVzIG9mIHRoZSBzcGhlcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zQXhpcyBudW1iZXIgb2Ygc3RlcHMgYXJvdW5kIHRoZSBzcGhlcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zSGVpZ2h0IG51bWJlciBvZiB2ZXJ0aWNhbGx5IG9uIHRoZSBzcGhlcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdF9zdGFydExhdGl0dWRlSW5SYWRpYW5zXSB3aGVyZSB0byBzdGFydCB0aGVcbiAqICAgICB0b3Agb2YgdGhlIHNwaGVyZS4gRGVmYXVsdCA9IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdF9lbmRMYXRpdHVkZUluUmFkaWFuc10gV2hlcmUgdG8gZW5kIHRoZVxuICogICAgIGJvdHRvbSBvZiB0aGUgc3BoZXJlLiBEZWZhdWx0ID0gTWF0aC5QSS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0X3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zXSB3aGVyZSB0byBzdGFydFxuICogICAgIHdyYXBwaW5nIHRoZSBzcGhlcmUuIERlZmF1bHQgPSAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRfZW5kTG9uZ2l0dWRlSW5SYWRpYW5zXSB3aGVyZSB0byBlbmRcbiAqICAgICB3cmFwcGluZyB0aGUgc3BoZXJlLiBEZWZhdWx0ID0gMiAqIE1hdGguUEkuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IFRoZSBjcmVhdGVkIHNwaGVyZSB2ZXJ0aWNlcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVNwaGVyZVZlcnRpY2VzKHJhZGl1cywgc3ViZGl2aXNpb25zQXhpcywgc3ViZGl2aXNpb25zSGVpZ2h0LCBvcHRfc3RhcnRMYXRpdHVkZUluUmFkaWFucywgb3B0X2VuZExhdGl0dWRlSW5SYWRpYW5zLCBvcHRfc3RhcnRMb25naXR1ZGVJblJhZGlhbnMsIG9wdF9lbmRMb25naXR1ZGVJblJhZGlhbnMpIHtcbiAgaWYgKHN1YmRpdmlzaW9uc0F4aXMgPD0gMCB8fCBzdWJkaXZpc2lvbnNIZWlnaHQgPD0gMCkge1xuICAgIHRocm93IEVycm9yKCdzdWJkaXZpc2lvbkF4aXMgYW5kIHN1YmRpdmlzaW9uSGVpZ2h0IG11c3QgYmUgPiAwJyk7XG4gIH1cblxuICBvcHRfc3RhcnRMYXRpdHVkZUluUmFkaWFucyA9IG9wdF9zdGFydExhdGl0dWRlSW5SYWRpYW5zIHx8IDA7XG4gIG9wdF9lbmRMYXRpdHVkZUluUmFkaWFucyA9IG9wdF9lbmRMYXRpdHVkZUluUmFkaWFucyB8fCBNYXRoLlBJO1xuICBvcHRfc3RhcnRMb25naXR1ZGVJblJhZGlhbnMgPSBvcHRfc3RhcnRMb25naXR1ZGVJblJhZGlhbnMgfHwgMDtcbiAgb3B0X2VuZExvbmdpdHVkZUluUmFkaWFucyA9IG9wdF9lbmRMb25naXR1ZGVJblJhZGlhbnMgfHwgTWF0aC5QSSAqIDI7XG5cbiAgdmFyIGxhdFJhbmdlID0gb3B0X2VuZExhdGl0dWRlSW5SYWRpYW5zIC0gb3B0X3N0YXJ0TGF0aXR1ZGVJblJhZGlhbnM7XG4gIHZhciBsb25nUmFuZ2UgPSBvcHRfZW5kTG9uZ2l0dWRlSW5SYWRpYW5zIC0gb3B0X3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zO1xuXG4gIC8vIFdlIGFyZSBnb2luZyB0byBnZW5lcmF0ZSBvdXIgc3BoZXJlIGJ5IGl0ZXJhdGluZyB0aHJvdWdoIGl0c1xuICAvLyBzcGhlcmljYWwgY29vcmRpbmF0ZXMgYW5kIGdlbmVyYXRpbmcgMiB0cmlhbmdsZXMgZm9yIGVhY2ggcXVhZCBvbiBhXG4gIC8vIHJpbmcgb2YgdGhlIHNwaGVyZS5cbiAgdmFyIG51bVZlcnRpY2VzID0gKHN1YmRpdmlzaW9uc0F4aXMgKyAxKSAqIChzdWJkaXZpc2lvbnNIZWlnaHQgKyAxKTtcbiAgdmFyIHBvc2l0aW9ucyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICB2YXIgbm9ybWFscyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICB2YXIgdGV4Y29vcmRzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgyLCBudW1WZXJ0aWNlcyk7XG5cbiAgLy8gR2VuZXJhdGUgdGhlIGluZGl2aWR1YWwgdmVydGljZXMgaW4gb3VyIHZlcnRleCBidWZmZXIuXG4gIGZvciAodmFyIHkgPSAwOyB5IDw9IHN1YmRpdmlzaW9uc0hlaWdodDsgeSsrKSB7XG4gICAgZm9yICh2YXIgeCA9IDA7IHggPD0gc3ViZGl2aXNpb25zQXhpczsgeCsrKSB7XG4gICAgICAvLyBHZW5lcmF0ZSBhIHZlcnRleCBiYXNlZCBvbiBpdHMgc3BoZXJpY2FsIGNvb3JkaW5hdGVzXG4gICAgICB2YXIgdSA9IHggLyBzdWJkaXZpc2lvbnNBeGlzO1xuICAgICAgdmFyIHYgPSB5IC8gc3ViZGl2aXNpb25zSGVpZ2h0O1xuICAgICAgdmFyIHRoZXRhID0gbG9uZ1JhbmdlICogdTtcbiAgICAgIHZhciBwaGkgPSBsYXRSYW5nZSAqIHY7XG4gICAgICB2YXIgc2luVGhldGEgPSBNYXRoLnNpbih0aGV0YSk7XG4gICAgICB2YXIgY29zVGhldGEgPSBNYXRoLmNvcyh0aGV0YSk7XG4gICAgICB2YXIgc2luUGhpID0gTWF0aC5zaW4ocGhpKTtcbiAgICAgIHZhciBjb3NQaGkgPSBNYXRoLmNvcyhwaGkpO1xuICAgICAgdmFyIHV4ID0gY29zVGhldGEgKiBzaW5QaGk7XG4gICAgICB2YXIgdXkgPSBjb3NQaGk7XG4gICAgICB2YXIgdXogPSBzaW5UaGV0YSAqIHNpblBoaTtcbiAgICAgIHBvc2l0aW9ucy5wdXNoKHJhZGl1cyAqIHV4LCByYWRpdXMgKiB1eSwgcmFkaXVzICogdXopO1xuICAgICAgbm9ybWFscy5wdXNoKHV4LCB1eSwgdXopO1xuICAgICAgdGV4Y29vcmRzLnB1c2goMSAtIHUsIHYpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBudW1WZXJ0c0Fyb3VuZCA9IHN1YmRpdmlzaW9uc0F4aXMgKyAxO1xuICB2YXIgaW5kaWNlcyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgc3ViZGl2aXNpb25zQXhpcyAqIHN1YmRpdmlzaW9uc0hlaWdodCAqIDIsIFVpbnQxNkFycmF5KTtcbiAgZm9yICh2YXIgX3gyID0gMDsgX3gyIDwgc3ViZGl2aXNpb25zQXhpczsgX3gyKyspIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZm9yICh2YXIgX3kgPSAwOyBfeSA8IHN1YmRpdmlzaW9uc0hlaWdodDsgX3krKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgLy8gTWFrZSB0cmlhbmdsZSAxIG9mIHF1YWQuXG4gICAgICBpbmRpY2VzLnB1c2goKF95ICsgMCkgKiBudW1WZXJ0c0Fyb3VuZCArIF94MiwgKF95ICsgMCkgKiBudW1WZXJ0c0Fyb3VuZCArIF94MiArIDEsIChfeSArIDEpICogbnVtVmVydHNBcm91bmQgKyBfeDIpO1xuXG4gICAgICAvLyBNYWtlIHRyaWFuZ2xlIDIgb2YgcXVhZC5cbiAgICAgIGluZGljZXMucHVzaCgoX3kgKyAxKSAqIG51bVZlcnRzQXJvdW5kICsgX3gyLCAoX3kgKyAwKSAqIG51bVZlcnRzQXJvdW5kICsgX3gyICsgMSwgKF95ICsgMSkgKiBudW1WZXJ0c0Fyb3VuZCArIF94MiArIDEpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246IHBvc2l0aW9ucyxcbiAgICBub3JtYWw6IG5vcm1hbHMsXG4gICAgdGV4Y29vcmQ6IHRleGNvb3JkcyxcbiAgICBpbmRpY2VzOiBpbmRpY2VzXG4gIH07XG59XG5cbi8qKlxuICogQXJyYXkgb2YgdGhlIGluZGljZXMgb2YgY29ybmVycyBvZiBlYWNoIGZhY2Ugb2YgYSBjdWJlLlxuICogQHR5cGUge0FycmF5LjxudW1iZXJbXT59XG4gKi9cbnZhciBDVUJFX0ZBQ0VfSU5ESUNFUyA9IFtbMywgNywgNSwgMV0sIC8vIHJpZ2h0XG5bNiwgMiwgMCwgNF0sIC8vIGxlZnRcbls2LCA3LCAzLCAyXSwgLy8gPz9cblswLCAxLCA1LCA0XSwgLy8gPz9cbls3LCA2LCA0LCA1XSwgLy8gZnJvbnRcblsyLCAzLCAxLCAwXV07XG5cbi8qKlxuICogQ3JlYXRlcyBhIEJ1ZmZlckluZm8gZm9yIGEgY3ViZS5cbiAqXG4gKiBUaGUgY3ViZSBpcyBjcmVhdGVkIGFyb3VuZCB0aGUgb3JpZ2luLiAoLXNpemUgLyAyLCBzaXplIC8gMikuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpemVdIHdpZHRoLCBoZWlnaHQgYW5kIGRlcHRoIG9mIHRoZSBjdWJlLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuQnVmZmVySW5mb30gVGhlIGNyZWF0ZWQgQnVmZmVySW5mby5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlQ3ViZUJ1ZmZlckluZm9cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIGJ1ZmZlcnMgYW5kIGluZGljZXMgZm9yIGEgY3ViZS5cbiAqXG4gKiBUaGUgY3ViZSBpcyBjcmVhdGVkIGFyb3VuZCB0aGUgb3JpZ2luLiAoLXNpemUgLyAyLCBzaXplIC8gMikuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpemVdIHdpZHRoLCBoZWlnaHQgYW5kIGRlcHRoIG9mIHRoZSBjdWJlLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFdlYkdMQnVmZmVyPn0gVGhlIGNyZWF0ZWQgYnVmZmVycy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlQ3ViZUJ1ZmZlcnNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIHZlcnRpY2VzIGFuZCBpbmRpY2VzIGZvciBhIGN1YmUuXG4gKlxuICogVGhlIGN1YmUgaXMgY3JlYXRlZCBhcm91bmQgdGhlIG9yaWdpbi4gKC1zaXplIC8gMiwgc2l6ZSAvIDIpLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZV0gd2lkdGgsIGhlaWdodCBhbmQgZGVwdGggb2YgdGhlIGN1YmUuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IFRoZSBjcmVhdGVkIHZlcnRpY2VzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ3ViZVZlcnRpY2VzKHNpemUpIHtcbiAgc2l6ZSA9IHNpemUgfHwgMTtcbiAgdmFyIGsgPSBzaXplIC8gMjtcblxuICB2YXIgY29ybmVyVmVydGljZXMgPSBbWy1rLCAtaywgLWtdLCBbK2ssIC1rLCAta10sIFstaywgK2ssIC1rXSwgWytrLCAraywgLWtdLCBbLWssIC1rLCAra10sIFsraywgLWssICtrXSwgWy1rLCAraywgK2tdLCBbK2ssICtrLCAra11dO1xuXG4gIHZhciBmYWNlTm9ybWFscyA9IFtbKzEsICswLCArMF0sIFstMSwgKzAsICswXSwgWyswLCArMSwgKzBdLCBbKzAsIC0xLCArMF0sIFsrMCwgKzAsICsxXSwgWyswLCArMCwgLTFdXTtcblxuICB2YXIgdXZDb29yZHMgPSBbWzEsIDBdLCBbMCwgMF0sIFswLCAxXSwgWzEsIDFdXTtcblxuICB2YXIgbnVtVmVydGljZXMgPSA2ICogNDtcbiAgdmFyIHBvc2l0aW9ucyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICB2YXIgbm9ybWFscyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICB2YXIgdGV4Y29vcmRzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgyLCBudW1WZXJ0aWNlcyk7XG4gIHZhciBpbmRpY2VzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCA2ICogMiwgVWludDE2QXJyYXkpO1xuXG4gIGZvciAodmFyIGYgPSAwOyBmIDwgNjsgKytmKSB7XG4gICAgdmFyIGZhY2VJbmRpY2VzID0gQ1VCRV9GQUNFX0lORElDRVNbZl07XG4gICAgZm9yICh2YXIgdiA9IDA7IHYgPCA0OyArK3YpIHtcbiAgICAgIHZhciBwb3NpdGlvbiA9IGNvcm5lclZlcnRpY2VzW2ZhY2VJbmRpY2VzW3ZdXTtcbiAgICAgIHZhciBub3JtYWwgPSBmYWNlTm9ybWFsc1tmXTtcbiAgICAgIHZhciB1diA9IHV2Q29vcmRzW3ZdO1xuXG4gICAgICAvLyBFYWNoIGZhY2UgbmVlZHMgYWxsIGZvdXIgdmVydGljZXMgYmVjYXVzZSB0aGUgbm9ybWFscyBhbmQgdGV4dHVyZVxuICAgICAgLy8gY29vcmRpbmF0ZXMgYXJlIG5vdCBhbGwgdGhlIHNhbWUuXG4gICAgICBwb3NpdGlvbnMucHVzaChwb3NpdGlvbik7XG4gICAgICBub3JtYWxzLnB1c2gobm9ybWFsKTtcbiAgICAgIHRleGNvb3Jkcy5wdXNoKHV2KTtcbiAgICB9XG4gICAgLy8gVHdvIHRyaWFuZ2xlcyBtYWtlIGEgc3F1YXJlIGZhY2UuXG4gICAgdmFyIG9mZnNldCA9IDQgKiBmO1xuICAgIGluZGljZXMucHVzaChvZmZzZXQgKyAwLCBvZmZzZXQgKyAxLCBvZmZzZXQgKyAyKTtcbiAgICBpbmRpY2VzLnB1c2gob2Zmc2V0ICsgMCwgb2Zmc2V0ICsgMiwgb2Zmc2V0ICsgMyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvbnMsXG4gICAgbm9ybWFsOiBub3JtYWxzLFxuICAgIHRleGNvb3JkOiB0ZXhjb29yZHMsXG4gICAgaW5kaWNlczogaW5kaWNlc1xuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBCdWZmZXJJbmZvIGZvciBhIHRydW5jYXRlZCBjb25lLCB3aGljaCBpcyBsaWtlIGEgY3lsaW5kZXJcbiAqIGV4Y2VwdCB0aGF0IGl0IGhhcyBkaWZmZXJlbnQgdG9wIGFuZCBib3R0b20gcmFkaWkuIEEgdHJ1bmNhdGVkIGNvbmVcbiAqIGNhbiBhbHNvIGJlIHVzZWQgdG8gY3JlYXRlIGN5bGluZGVycyBhbmQgcmVndWxhciBjb25lcy4gVGhlXG4gKiB0cnVuY2F0ZWQgY29uZSB3aWxsIGJlIGNyZWF0ZWQgY2VudGVyZWQgYWJvdXQgdGhlIG9yaWdpbiwgd2l0aCB0aGVcbiAqIHkgYXhpcyBhcyBpdHMgdmVydGljYWwgYXhpcy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b21SYWRpdXMgQm90dG9tIHJhZGl1cyBvZiB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b3BSYWRpdXMgVG9wIHJhZGl1cyBvZiB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIHRydW5jYXRlZCBjb25lLlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbFN1YmRpdmlzaW9ucyBUaGUgbnVtYmVyIG9mIHN1YmRpdmlzaW9ucyBhcm91bmQgdGhlXG4gKiAgICAgdHJ1bmNhdGVkIGNvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gdmVydGljYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgZG93biB0aGVcbiAqICAgICB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdF90b3BDYXBdIENyZWF0ZSB0b3AgY2FwLiBEZWZhdWx0ID0gdHJ1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdF9ib3R0b21DYXBdIENyZWF0ZSBib3R0b20gY2FwLiBEZWZhdWx0ID0gdHJ1ZS5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IFRoZSBjcmVhdGVkIGNvbmUgQnVmZmVySW5mby5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlVHJ1bmNhdGVkQ29uZUJ1ZmZlckluZm9cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYnVmZmVycyBmb3IgYSB0cnVuY2F0ZWQgY29uZSwgd2hpY2ggaXMgbGlrZSBhIGN5bGluZGVyXG4gKiBleGNlcHQgdGhhdCBpdCBoYXMgZGlmZmVyZW50IHRvcCBhbmQgYm90dG9tIHJhZGlpLiBBIHRydW5jYXRlZCBjb25lXG4gKiBjYW4gYWxzbyBiZSB1c2VkIHRvIGNyZWF0ZSBjeWxpbmRlcnMgYW5kIHJlZ3VsYXIgY29uZXMuIFRoZVxuICogdHJ1bmNhdGVkIGNvbmUgd2lsbCBiZSBjcmVhdGVkIGNlbnRlcmVkIGFib3V0IHRoZSBvcmlnaW4sIHdpdGggdGhlXG4gKiB5IGF4aXMgYXMgaXRzIHZlcnRpY2FsIGF4aXMuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gYm90dG9tUmFkaXVzIEJvdHRvbSByYWRpdXMgb2YgdHJ1bmNhdGVkIGNvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gdG9wUmFkaXVzIFRvcCByYWRpdXMgb2YgdHJ1bmNhdGVkIGNvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgYXJvdW5kIHRoZVxuICogICAgIHRydW5jYXRlZCBjb25lLlxuICogQHBhcmFtIHtudW1iZXJ9IHZlcnRpY2FsU3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGRvd24gdGhlXG4gKiAgICAgdHJ1bmNhdGVkIGNvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRfdG9wQ2FwXSBDcmVhdGUgdG9wIGNhcC4gRGVmYXVsdCA9IHRydWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRfYm90dG9tQ2FwXSBDcmVhdGUgYm90dG9tIGNhcC4gRGVmYXVsdCA9IHRydWUuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgV2ViR0xCdWZmZXI+fSBUaGUgY3JlYXRlZCBjb25lIGJ1ZmZlcnMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZVRydW5jYXRlZENvbmVCdWZmZXJzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIHZlcnRpY2VzIGZvciBhIHRydW5jYXRlZCBjb25lLCB3aGljaCBpcyBsaWtlIGEgY3lsaW5kZXJcbiAqIGV4Y2VwdCB0aGF0IGl0IGhhcyBkaWZmZXJlbnQgdG9wIGFuZCBib3R0b20gcmFkaWkuIEEgdHJ1bmNhdGVkIGNvbmVcbiAqIGNhbiBhbHNvIGJlIHVzZWQgdG8gY3JlYXRlIGN5bGluZGVycyBhbmQgcmVndWxhciBjb25lcy4gVGhlXG4gKiB0cnVuY2F0ZWQgY29uZSB3aWxsIGJlIGNyZWF0ZWQgY2VudGVyZWQgYWJvdXQgdGhlIG9yaWdpbiwgd2l0aCB0aGVcbiAqIHkgYXhpcyBhcyBpdHMgdmVydGljYWwgYXhpcy4gLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b21SYWRpdXMgQm90dG9tIHJhZGl1cyBvZiB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b3BSYWRpdXMgVG9wIHJhZGl1cyBvZiB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIHRydW5jYXRlZCBjb25lLlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbFN1YmRpdmlzaW9ucyBUaGUgbnVtYmVyIG9mIHN1YmRpdmlzaW9ucyBhcm91bmQgdGhlXG4gKiAgICAgdHJ1bmNhdGVkIGNvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gdmVydGljYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgZG93biB0aGVcbiAqICAgICB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdF90b3BDYXBdIENyZWF0ZSB0b3AgY2FwLiBEZWZhdWx0ID0gdHJ1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdF9ib3R0b21DYXBdIENyZWF0ZSBib3R0b20gY2FwLiBEZWZhdWx0ID0gdHJ1ZS5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBUeXBlZEFycmF5Pn0gVGhlIGNyZWF0ZWQgY29uZSB2ZXJ0aWNlcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVRydW5jYXRlZENvbmVWZXJ0aWNlcyhib3R0b21SYWRpdXMsIHRvcFJhZGl1cywgaGVpZ2h0LCByYWRpYWxTdWJkaXZpc2lvbnMsIHZlcnRpY2FsU3ViZGl2aXNpb25zLCBvcHRfdG9wQ2FwLCBvcHRfYm90dG9tQ2FwKSB7XG4gIGlmIChyYWRpYWxTdWJkaXZpc2lvbnMgPCAzKSB7XG4gICAgdGhyb3cgRXJyb3IoJ3JhZGlhbFN1YmRpdmlzaW9ucyBtdXN0IGJlIDMgb3IgZ3JlYXRlcicpO1xuICB9XG5cbiAgaWYgKHZlcnRpY2FsU3ViZGl2aXNpb25zIDwgMSkge1xuICAgIHRocm93IEVycm9yKCd2ZXJ0aWNhbFN1YmRpdmlzaW9ucyBtdXN0IGJlIDEgb3IgZ3JlYXRlcicpO1xuICB9XG5cbiAgdmFyIHRvcENhcCA9IG9wdF90b3BDYXAgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRfdG9wQ2FwO1xuICB2YXIgYm90dG9tQ2FwID0gb3B0X2JvdHRvbUNhcCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdF9ib3R0b21DYXA7XG5cbiAgdmFyIGV4dHJhID0gKHRvcENhcCA/IDIgOiAwKSArIChib3R0b21DYXAgPyAyIDogMCk7XG5cbiAgdmFyIG51bVZlcnRpY2VzID0gKHJhZGlhbFN1YmRpdmlzaW9ucyArIDEpICogKHZlcnRpY2FsU3ViZGl2aXNpb25zICsgMSArIGV4dHJhKTtcbiAgdmFyIHBvc2l0aW9ucyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICB2YXIgbm9ybWFscyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICB2YXIgdGV4Y29vcmRzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgyLCBudW1WZXJ0aWNlcyk7XG4gIHZhciBpbmRpY2VzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCByYWRpYWxTdWJkaXZpc2lvbnMgKiAodmVydGljYWxTdWJkaXZpc2lvbnMgKyBleHRyYSkgKiAyLCBVaW50MTZBcnJheSk7XG5cbiAgdmFyIHZlcnRzQXJvdW5kRWRnZSA9IHJhZGlhbFN1YmRpdmlzaW9ucyArIDE7XG5cbiAgLy8gVGhlIHNsYW50IG9mIHRoZSBjb25lIGlzIGNvbnN0YW50IGFjcm9zcyBpdHMgc3VyZmFjZVxuICB2YXIgc2xhbnQgPSBNYXRoLmF0YW4yKGJvdHRvbVJhZGl1cyAtIHRvcFJhZGl1cywgaGVpZ2h0KTtcbiAgdmFyIGNvc1NsYW50ID0gTWF0aC5jb3Moc2xhbnQpO1xuICB2YXIgc2luU2xhbnQgPSBNYXRoLnNpbihzbGFudCk7XG5cbiAgdmFyIHN0YXJ0ID0gdG9wQ2FwID8gLTIgOiAwO1xuICB2YXIgZW5kID0gdmVydGljYWxTdWJkaXZpc2lvbnMgKyAoYm90dG9tQ2FwID8gMiA6IDApO1xuXG4gIGZvciAodmFyIHl5ID0gc3RhcnQ7IHl5IDw9IGVuZDsgKyt5eSkge1xuICAgIHZhciB2ID0geXkgLyB2ZXJ0aWNhbFN1YmRpdmlzaW9ucztcbiAgICB2YXIgeSA9IGhlaWdodCAqIHY7XG4gICAgdmFyIHJpbmdSYWRpdXMgPSB2b2lkIDA7XG4gICAgaWYgKHl5IDwgMCkge1xuICAgICAgeSA9IDA7XG4gICAgICB2ID0gMTtcbiAgICAgIHJpbmdSYWRpdXMgPSBib3R0b21SYWRpdXM7XG4gICAgfSBlbHNlIGlmICh5eSA+IHZlcnRpY2FsU3ViZGl2aXNpb25zKSB7XG4gICAgICB5ID0gaGVpZ2h0O1xuICAgICAgdiA9IDE7XG4gICAgICByaW5nUmFkaXVzID0gdG9wUmFkaXVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByaW5nUmFkaXVzID0gYm90dG9tUmFkaXVzICsgKHRvcFJhZGl1cyAtIGJvdHRvbVJhZGl1cykgKiAoeXkgLyB2ZXJ0aWNhbFN1YmRpdmlzaW9ucyk7XG4gICAgfVxuICAgIGlmICh5eSA9PT0gLTIgfHwgeXkgPT09IHZlcnRpY2FsU3ViZGl2aXNpb25zICsgMikge1xuICAgICAgcmluZ1JhZGl1cyA9IDA7XG4gICAgICB2ID0gMDtcbiAgICB9XG4gICAgeSAtPSBoZWlnaHQgLyAyO1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCB2ZXJ0c0Fyb3VuZEVkZ2U7ICsraWkpIHtcbiAgICAgIHZhciBzaW4gPSBNYXRoLnNpbihpaSAqIE1hdGguUEkgKiAyIC8gcmFkaWFsU3ViZGl2aXNpb25zKTtcbiAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhpaSAqIE1hdGguUEkgKiAyIC8gcmFkaWFsU3ViZGl2aXNpb25zKTtcbiAgICAgIHBvc2l0aW9ucy5wdXNoKHNpbiAqIHJpbmdSYWRpdXMsIHksIGNvcyAqIHJpbmdSYWRpdXMpO1xuICAgICAgbm9ybWFscy5wdXNoKHl5IDwgMCB8fCB5eSA+IHZlcnRpY2FsU3ViZGl2aXNpb25zID8gMCA6IHNpbiAqIGNvc1NsYW50LCB5eSA8IDAgPyAtMSA6IHl5ID4gdmVydGljYWxTdWJkaXZpc2lvbnMgPyAxIDogc2luU2xhbnQsIHl5IDwgMCB8fCB5eSA+IHZlcnRpY2FsU3ViZGl2aXNpb25zID8gMCA6IGNvcyAqIGNvc1NsYW50KTtcbiAgICAgIHRleGNvb3Jkcy5wdXNoKGlpIC8gcmFkaWFsU3ViZGl2aXNpb25zLCAxIC0gdik7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgX3l5ID0gMDsgX3l5IDwgdmVydGljYWxTdWJkaXZpc2lvbnMgKyBleHRyYTsgKytfeXkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZm9yICh2YXIgX2lpID0gMDsgX2lpIDwgcmFkaWFsU3ViZGl2aXNpb25zOyArK19paSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgaW5kaWNlcy5wdXNoKHZlcnRzQXJvdW5kRWRnZSAqIChfeXkgKyAwKSArIDAgKyBfaWksIHZlcnRzQXJvdW5kRWRnZSAqIChfeXkgKyAwKSArIDEgKyBfaWksIHZlcnRzQXJvdW5kRWRnZSAqIChfeXkgKyAxKSArIDEgKyBfaWkpO1xuICAgICAgaW5kaWNlcy5wdXNoKHZlcnRzQXJvdW5kRWRnZSAqIChfeXkgKyAwKSArIDAgKyBfaWksIHZlcnRzQXJvdW5kRWRnZSAqIChfeXkgKyAxKSArIDEgKyBfaWksIHZlcnRzQXJvdW5kRWRnZSAqIChfeXkgKyAxKSArIDAgKyBfaWkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246IHBvc2l0aW9ucyxcbiAgICBub3JtYWw6IG5vcm1hbHMsXG4gICAgdGV4Y29vcmQ6IHRleGNvb3JkcyxcbiAgICBpbmRpY2VzOiBpbmRpY2VzXG4gIH07XG59XG5cbi8qKlxuICogRXhwYW5kcyBSTEUgZGF0YVxuICogQHBhcmFtIHtudW1iZXJbXX0gcmxlRGF0YSBkYXRhIGluIGZvcm1hdCBvZiBydW4tbGVuZ3RoLCB4LCB5LCB6LCBydW4tbGVuZ3RoLCB4LCB5LCB6XG4gKiBAcGFyYW0ge251bWJlcltdfSBbcGFkZGluZ10gdmFsdWUgdG8gYWRkIGVhY2ggZW50cnkgd2l0aC5cbiAqIEByZXR1cm4ge251bWJlcltdfSB0aGUgZXhwYW5kZWQgcmxlRGF0YVxuICovXG5mdW5jdGlvbiBleHBhbmRSTEVEYXRhKHJsZURhdGEsIHBhZGRpbmcpIHtcbiAgcGFkZGluZyA9IHBhZGRpbmcgfHwgW107XG4gIHZhciBkYXRhID0gW107XG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBybGVEYXRhLmxlbmd0aDsgaWkgKz0gNCkge1xuICAgIHZhciBydW5MZW5ndGggPSBybGVEYXRhW2lpXTtcbiAgICB2YXIgZWxlbWVudCA9IHJsZURhdGEuc2xpY2UoaWkgKyAxLCBpaSArIDQpO1xuICAgIGVsZW1lbnQucHVzaC5hcHBseShlbGVtZW50LCBwYWRkaW5nKTtcbiAgICBmb3IgKHZhciBqaiA9IDA7IGpqIDwgcnVuTGVuZ3RoOyArK2pqKSB7XG4gICAgICBkYXRhLnB1c2guYXBwbHkoZGF0YSwgZWxlbWVudCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgM0QgJ0YnIEJ1ZmZlckluZm8uXG4gKiBBbiAnRicgaXMgdXNlZnVsIGJlY2F1c2UgeW91IGNhbiBlYXNpbHkgdGVsbCB3aGljaCB3YXkgaXQgaXMgb3JpZW50ZWQuXG4gKiBUaGUgY3JlYXRlZCAnRicgaGFzIHBvc2l0aW9uLCBub3JtYWwsIHRleGNvb3JkLCBhbmQgY29sb3IgYnVmZmVycy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IFRoZSBjcmVhdGVkIEJ1ZmZlckluZm8uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZTNERkJ1ZmZlckluZm9cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgM0QgJ0YnIGJ1ZmZlcnMuXG4gKiBBbiAnRicgaXMgdXNlZnVsIGJlY2F1c2UgeW91IGNhbiBlYXNpbHkgdGVsbCB3aGljaCB3YXkgaXQgaXMgb3JpZW50ZWQuXG4gKiBUaGUgY3JlYXRlZCAnRicgaGFzIHBvc2l0aW9uLCBub3JtYWwsIHRleGNvb3JkLCBhbmQgY29sb3IgYnVmZmVycy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBXZWJHTEJ1ZmZlcj59IFRoZSBjcmVhdGVkIGJ1ZmZlcnMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZTNERkJ1ZmZlcnNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgM0QgJ0YnIHZlcnRpY2VzLlxuICogQW4gJ0YnIGlzIHVzZWZ1bCBiZWNhdXNlIHlvdSBjYW4gZWFzaWx5IHRlbGwgd2hpY2ggd2F5IGl0IGlzIG9yaWVudGVkLlxuICogVGhlIGNyZWF0ZWQgJ0YnIGhhcyBwb3NpdGlvbiwgbm9ybWFsLCB0ZXhjb29yZCwgYW5kIGNvbG9yIGFycmF5cy5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IFRoZSBjcmVhdGVkIHZlcnRpY2VzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlM0RGVmVydGljZXMoKSB7XG5cbiAgdmFyIHBvc2l0aW9ucyA9IFtcbiAgLy8gbGVmdCBjb2x1bW4gZnJvbnRcbiAgMCwgMCwgMCwgMCwgMTUwLCAwLCAzMCwgMCwgMCwgMCwgMTUwLCAwLCAzMCwgMTUwLCAwLCAzMCwgMCwgMCxcblxuICAvLyB0b3AgcnVuZyBmcm9udFxuICAzMCwgMCwgMCwgMzAsIDMwLCAwLCAxMDAsIDAsIDAsIDMwLCAzMCwgMCwgMTAwLCAzMCwgMCwgMTAwLCAwLCAwLFxuXG4gIC8vIG1pZGRsZSBydW5nIGZyb250XG4gIDMwLCA2MCwgMCwgMzAsIDkwLCAwLCA2NywgNjAsIDAsIDMwLCA5MCwgMCwgNjcsIDkwLCAwLCA2NywgNjAsIDAsXG5cbiAgLy8gbGVmdCBjb2x1bW4gYmFja1xuICAwLCAwLCAzMCwgMzAsIDAsIDMwLCAwLCAxNTAsIDMwLCAwLCAxNTAsIDMwLCAzMCwgMCwgMzAsIDMwLCAxNTAsIDMwLFxuXG4gIC8vIHRvcCBydW5nIGJhY2tcbiAgMzAsIDAsIDMwLCAxMDAsIDAsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwLCAxMDAsIDAsIDMwLCAxMDAsIDMwLCAzMCxcblxuICAvLyBtaWRkbGUgcnVuZyBiYWNrXG4gIDMwLCA2MCwgMzAsIDY3LCA2MCwgMzAsIDMwLCA5MCwgMzAsIDMwLCA5MCwgMzAsIDY3LCA2MCwgMzAsIDY3LCA5MCwgMzAsXG5cbiAgLy8gdG9wXG4gIDAsIDAsIDAsIDEwMCwgMCwgMCwgMTAwLCAwLCAzMCwgMCwgMCwgMCwgMTAwLCAwLCAzMCwgMCwgMCwgMzAsXG5cbiAgLy8gdG9wIHJ1bmcgZnJvbnRcbiAgMTAwLCAwLCAwLCAxMDAsIDMwLCAwLCAxMDAsIDMwLCAzMCwgMTAwLCAwLCAwLCAxMDAsIDMwLCAzMCwgMTAwLCAwLCAzMCxcblxuICAvLyB1bmRlciB0b3AgcnVuZ1xuICAzMCwgMzAsIDAsIDMwLCAzMCwgMzAsIDEwMCwgMzAsIDMwLCAzMCwgMzAsIDAsIDEwMCwgMzAsIDMwLCAxMDAsIDMwLCAwLFxuXG4gIC8vIGJldHdlZW4gdG9wIHJ1bmcgYW5kIG1pZGRsZVxuICAzMCwgMzAsIDAsIDMwLCA2MCwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMCwgMzAsIDYwLCAwLCAzMCwgNjAsIDMwLFxuXG4gIC8vIHRvcCBvZiBtaWRkbGUgcnVuZ1xuICAzMCwgNjAsIDAsIDY3LCA2MCwgMzAsIDMwLCA2MCwgMzAsIDMwLCA2MCwgMCwgNjcsIDYwLCAwLCA2NywgNjAsIDMwLFxuXG4gIC8vIGZyb250IG9mIG1pZGRsZSBydW5nXG4gIDY3LCA2MCwgMCwgNjcsIDkwLCAzMCwgNjcsIDYwLCAzMCwgNjcsIDYwLCAwLCA2NywgOTAsIDAsIDY3LCA5MCwgMzAsXG5cbiAgLy8gYm90dG9tIG9mIG1pZGRsZSBydW5nLlxuICAzMCwgOTAsIDAsIDMwLCA5MCwgMzAsIDY3LCA5MCwgMzAsIDMwLCA5MCwgMCwgNjcsIDkwLCAzMCwgNjcsIDkwLCAwLFxuXG4gIC8vIGZyb250IG9mIGJvdHRvbVxuICAzMCwgOTAsIDAsIDMwLCAxNTAsIDMwLCAzMCwgOTAsIDMwLCAzMCwgOTAsIDAsIDMwLCAxNTAsIDAsIDMwLCAxNTAsIDMwLFxuXG4gIC8vIGJvdHRvbVxuICAwLCAxNTAsIDAsIDAsIDE1MCwgMzAsIDMwLCAxNTAsIDMwLCAwLCAxNTAsIDAsIDMwLCAxNTAsIDMwLCAzMCwgMTUwLCAwLFxuXG4gIC8vIGxlZnQgc2lkZVxuICAwLCAwLCAwLCAwLCAwLCAzMCwgMCwgMTUwLCAzMCwgMCwgMCwgMCwgMCwgMTUwLCAzMCwgMCwgMTUwLCAwXTtcblxuICB2YXIgdGV4Y29vcmRzID0gW1xuICAvLyBsZWZ0IGNvbHVtbiBmcm9udFxuICAwLjIyLCAwLjE5LCAwLjIyLCAwLjc5LCAwLjM0LCAwLjE5LCAwLjIyLCAwLjc5LCAwLjM0LCAwLjc5LCAwLjM0LCAwLjE5LFxuXG4gIC8vIHRvcCBydW5nIGZyb250XG4gIDAuMzQsIDAuMTksIDAuMzQsIDAuMzEsIDAuNjIsIDAuMTksIDAuMzQsIDAuMzEsIDAuNjIsIDAuMzEsIDAuNjIsIDAuMTksXG5cbiAgLy8gbWlkZGxlIHJ1bmcgZnJvbnRcbiAgMC4zNCwgMC40MywgMC4zNCwgMC41NSwgMC40OSwgMC40MywgMC4zNCwgMC41NSwgMC40OSwgMC41NSwgMC40OSwgMC40MyxcblxuICAvLyBsZWZ0IGNvbHVtbiBiYWNrXG4gIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDEsIDEsIDAsIDEsIDEsXG5cbiAgLy8gdG9wIHJ1bmcgYmFja1xuICAwLCAwLCAxLCAwLCAwLCAxLCAwLCAxLCAxLCAwLCAxLCAxLFxuXG4gIC8vIG1pZGRsZSBydW5nIGJhY2tcbiAgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMSwgMSxcblxuICAvLyB0b3BcbiAgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMSxcblxuICAvLyB0b3AgcnVuZyBmcm9udFxuICAwLCAwLCAxLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAxLFxuXG4gIC8vIHVuZGVyIHRvcCBydW5nXG4gIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDAsXG5cbiAgLy8gYmV0d2VlbiB0b3AgcnVuZyBhbmQgbWlkZGxlXG4gIDAsIDAsIDEsIDEsIDAsIDEsIDAsIDAsIDEsIDAsIDEsIDEsXG5cbiAgLy8gdG9wIG9mIG1pZGRsZSBydW5nXG4gIDAsIDAsIDEsIDEsIDAsIDEsIDAsIDAsIDEsIDAsIDEsIDEsXG5cbiAgLy8gZnJvbnQgb2YgbWlkZGxlIHJ1bmdcbiAgMCwgMCwgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMCwgMSwgMSxcblxuICAvLyBib3R0b20gb2YgbWlkZGxlIHJ1bmcuXG4gIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDAsXG5cbiAgLy8gZnJvbnQgb2YgYm90dG9tXG4gIDAsIDAsIDEsIDEsIDAsIDEsIDAsIDAsIDEsIDAsIDEsIDEsXG5cbiAgLy8gYm90dG9tXG4gIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDAsXG5cbiAgLy8gbGVmdCBzaWRlXG4gIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDBdO1xuXG4gIHZhciBub3JtYWxzID0gZXhwYW5kUkxFRGF0YShbXG4gIC8vIGxlZnQgY29sdW1uIGZyb250XG4gIC8vIHRvcCBydW5nIGZyb250XG4gIC8vIG1pZGRsZSBydW5nIGZyb250XG4gIDE4LCAwLCAwLCAxLFxuXG4gIC8vIGxlZnQgY29sdW1uIGJhY2tcbiAgLy8gdG9wIHJ1bmcgYmFja1xuICAvLyBtaWRkbGUgcnVuZyBiYWNrXG4gIDE4LCAwLCAwLCAtMSxcblxuICAvLyB0b3BcbiAgNiwgMCwgMSwgMCxcblxuICAvLyB0b3AgcnVuZyBmcm9udFxuICA2LCAxLCAwLCAwLFxuXG4gIC8vIHVuZGVyIHRvcCBydW5nXG4gIDYsIDAsIC0xLCAwLFxuXG4gIC8vIGJldHdlZW4gdG9wIHJ1bmcgYW5kIG1pZGRsZVxuICA2LCAxLCAwLCAwLFxuXG4gIC8vIHRvcCBvZiBtaWRkbGUgcnVuZ1xuICA2LCAwLCAxLCAwLFxuXG4gIC8vIGZyb250IG9mIG1pZGRsZSBydW5nXG4gIDYsIDEsIDAsIDAsXG5cbiAgLy8gYm90dG9tIG9mIG1pZGRsZSBydW5nLlxuICA2LCAwLCAtMSwgMCxcblxuICAvLyBmcm9udCBvZiBib3R0b21cbiAgNiwgMSwgMCwgMCxcblxuICAvLyBib3R0b21cbiAgNiwgMCwgLTEsIDAsXG5cbiAgLy8gbGVmdCBzaWRlXG4gIDYsIC0xLCAwLCAwXSk7XG5cbiAgdmFyIGNvbG9ycyA9IGV4cGFuZFJMRURhdGEoW1xuICAvLyBsZWZ0IGNvbHVtbiBmcm9udFxuICAvLyB0b3AgcnVuZyBmcm9udFxuICAvLyBtaWRkbGUgcnVuZyBmcm9udFxuICAxOCwgMjAwLCA3MCwgMTIwLFxuXG4gIC8vIGxlZnQgY29sdW1uIGJhY2tcbiAgLy8gdG9wIHJ1bmcgYmFja1xuICAvLyBtaWRkbGUgcnVuZyBiYWNrXG4gIDE4LCA4MCwgNzAsIDIwMCxcblxuICAvLyB0b3BcbiAgNiwgNzAsIDIwMCwgMjEwLFxuXG4gIC8vIHRvcCBydW5nIGZyb250XG4gIDYsIDIwMCwgMjAwLCA3MCxcblxuICAvLyB1bmRlciB0b3AgcnVuZ1xuICA2LCAyMTAsIDEwMCwgNzAsXG5cbiAgLy8gYmV0d2VlbiB0b3AgcnVuZyBhbmQgbWlkZGxlXG4gIDYsIDIxMCwgMTYwLCA3MCxcblxuICAvLyB0b3Agb2YgbWlkZGxlIHJ1bmdcbiAgNiwgNzAsIDE4MCwgMjEwLFxuXG4gIC8vIGZyb250IG9mIG1pZGRsZSBydW5nXG4gIDYsIDEwMCwgNzAsIDIxMCxcblxuICAvLyBib3R0b20gb2YgbWlkZGxlIHJ1bmcuXG4gIDYsIDc2LCAyMTAsIDEwMCxcblxuICAvLyBmcm9udCBvZiBib3R0b21cbiAgNiwgMTQwLCAyMTAsIDgwLFxuXG4gIC8vIGJvdHRvbVxuICA2LCA5MCwgMTMwLCAxMTAsXG5cbiAgLy8gbGVmdCBzaWRlXG4gIDYsIDE2MCwgMTYwLCAyMjBdLCBbMjU1XSk7XG5cbiAgdmFyIG51bVZlcnRzID0gcG9zaXRpb25zLmxlbmd0aCAvIDM7XG5cbiAgdmFyIGFycmF5cyA9IHtcbiAgICBwb3NpdGlvbjogY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0cyksXG4gICAgdGV4Y29vcmQ6IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMiwgbnVtVmVydHMpLFxuICAgIG5vcm1hbDogY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0cyksXG4gICAgY29sb3I6IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoNCwgbnVtVmVydHMsIFVpbnQ4QXJyYXkpLFxuICAgIGluZGljZXM6IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydHMgLyAzLCBVaW50MTZBcnJheSlcbiAgfTtcblxuICBhcnJheXMucG9zaXRpb24ucHVzaChwb3NpdGlvbnMpO1xuICBhcnJheXMudGV4Y29vcmQucHVzaCh0ZXhjb29yZHMpO1xuICBhcnJheXMubm9ybWFsLnB1c2gobm9ybWFscyk7XG4gIGFycmF5cy5jb2xvci5wdXNoKGNvbG9ycyk7XG5cbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG51bVZlcnRzOyArK2lpKSB7XG4gICAgYXJyYXlzLmluZGljZXMucHVzaChpaSk7XG4gIH1cblxuICByZXR1cm4gYXJyYXlzO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgY3Jlc2VudCBCdWZmZXJJbmZvLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHZlcnRpY2FsUmFkaXVzIFRoZSB2ZXJ0aWNhbCByYWRpdXMgb2YgdGhlIGNyZXNlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gb3V0ZXJSYWRpdXMgVGhlIG91dGVyIHJhZGl1cyBvZiB0aGUgY3Jlc2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbm5lclJhZGl1cyBUaGUgaW5uZXIgcmFkaXVzIG9mIHRoZSBjcmVzZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHRoaWNrbmVzcyBUaGUgdGhpY2tuZXNzIG9mIHRoZSBjcmVzZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHN1YmRpdmlzaW9uc0Rvd24gbnVtYmVyIG9mIHN0ZXBzIGFyb3VuZCB0aGUgY3Jlc2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdWJkaXZpc2lvbnNUaGljayBudW1iZXIgb2YgdmVydGljYWxseSBvbiB0aGUgY3Jlc2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnRPZmZzZXRdIFdoZXJlIHRvIHN0YXJ0IGFyYy4gRGVmYXVsdCAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmRPZmZzZXRdIFdoZXJlIHRvIGVuZCBhcmcuIERlZmF1bHQgMS5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IFRoZSBjcmVhdGVkIEJ1ZmZlckluZm8uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZUNyZXNlbnRCdWZmZXJJbmZvXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGNyZXNlbnQgYnVmZmVycy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB2ZXJ0aWNhbFJhZGl1cyBUaGUgdmVydGljYWwgcmFkaXVzIG9mIHRoZSBjcmVzZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IG91dGVyUmFkaXVzIFRoZSBvdXRlciByYWRpdXMgb2YgdGhlIGNyZXNlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5uZXJSYWRpdXMgVGhlIGlubmVyIHJhZGl1cyBvZiB0aGUgY3Jlc2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aGlja25lc3MgVGhlIHRoaWNrbmVzcyBvZiB0aGUgY3Jlc2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdWJkaXZpc2lvbnNEb3duIG51bWJlciBvZiBzdGVwcyBhcm91bmQgdGhlIGNyZXNlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zVGhpY2sgbnVtYmVyIG9mIHZlcnRpY2FsbHkgb24gdGhlIGNyZXNlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0T2Zmc2V0XSBXaGVyZSB0byBzdGFydCBhcmMuIERlZmF1bHQgMC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kT2Zmc2V0XSBXaGVyZSB0byBlbmQgYXJnLiBEZWZhdWx0IDEuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgV2ViR0xCdWZmZXI+fSBUaGUgY3JlYXRlZCBidWZmZXJzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVDcmVzZW50QnVmZmVyc1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBjcmVzZW50IHZlcnRpY2VzLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB2ZXJ0aWNhbFJhZGl1cyBUaGUgdmVydGljYWwgcmFkaXVzIG9mIHRoZSBjcmVzZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IG91dGVyUmFkaXVzIFRoZSBvdXRlciByYWRpdXMgb2YgdGhlIGNyZXNlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5uZXJSYWRpdXMgVGhlIGlubmVyIHJhZGl1cyBvZiB0aGUgY3Jlc2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aGlja25lc3MgVGhlIHRoaWNrbmVzcyBvZiB0aGUgY3Jlc2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdWJkaXZpc2lvbnNEb3duIG51bWJlciBvZiBzdGVwcyBhcm91bmQgdGhlIGNyZXNlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zVGhpY2sgbnVtYmVyIG9mIHZlcnRpY2FsbHkgb24gdGhlIGNyZXNlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0T2Zmc2V0XSBXaGVyZSB0byBzdGFydCBhcmMuIERlZmF1bHQgMC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kT2Zmc2V0XSBXaGVyZSB0byBlbmQgYXJnLiBEZWZhdWx0IDEuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IFRoZSBjcmVhdGVkIHZlcnRpY2VzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ3Jlc2VudFZlcnRpY2VzKHZlcnRpY2FsUmFkaXVzLCBvdXRlclJhZGl1cywgaW5uZXJSYWRpdXMsIHRoaWNrbmVzcywgc3ViZGl2aXNpb25zRG93biwgc3RhcnRPZmZzZXQsIGVuZE9mZnNldCkge1xuICBpZiAoc3ViZGl2aXNpb25zRG93biA8PSAwKSB7XG4gICAgdGhyb3cgRXJyb3IoJ3N1YmRpdmlzaW9uRG93biBtdXN0IGJlID4gMCcpO1xuICB9XG5cbiAgc3RhcnRPZmZzZXQgPSBzdGFydE9mZnNldCB8fCAwO1xuICBlbmRPZmZzZXQgPSBlbmRPZmZzZXQgfHwgMTtcblxuICB2YXIgc3ViZGl2aXNpb25zVGhpY2sgPSAyO1xuXG4gIHZhciBvZmZzZXRSYW5nZSA9IGVuZE9mZnNldCAtIHN0YXJ0T2Zmc2V0O1xuICB2YXIgbnVtVmVydGljZXMgPSAoc3ViZGl2aXNpb25zRG93biArIDEpICogMiAqICgyICsgc3ViZGl2aXNpb25zVGhpY2spO1xuICB2YXIgcG9zaXRpb25zID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0aWNlcyk7XG4gIHZhciBub3JtYWxzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0aWNlcyk7XG4gIHZhciB0ZXhjb29yZHMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDIsIG51bVZlcnRpY2VzKTtcblxuICBmdW5jdGlvbiBsZXJwKGEsIGIsIHMpIHtcbiAgICByZXR1cm4gYSArIChiIC0gYSkgKiBzO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJjKGFyY1JhZGl1cywgeCwgbm9ybWFsTXVsdCwgbm9ybWFsQWRkLCB1TXVsdCwgdUFkZCkge1xuICAgIGZvciAodmFyIHogPSAwOyB6IDw9IHN1YmRpdmlzaW9uc0Rvd247IHorKykge1xuICAgICAgdmFyIHVCYWNrID0geCAvIChzdWJkaXZpc2lvbnNUaGljayAtIDEpO1xuICAgICAgdmFyIHYgPSB6IC8gc3ViZGl2aXNpb25zRG93bjtcbiAgICAgIHZhciB4QmFjayA9ICh1QmFjayAtIDAuNSkgKiAyO1xuICAgICAgdmFyIGFuZ2xlID0gKHN0YXJ0T2Zmc2V0ICsgdiAqIG9mZnNldFJhbmdlKSAqIE1hdGguUEk7XG4gICAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlKTtcbiAgICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgICAgdmFyIHJhZGl1cyA9IGxlcnAodmVydGljYWxSYWRpdXMsIGFyY1JhZGl1cywgcyk7XG4gICAgICB2YXIgcHggPSB4QmFjayAqIHRoaWNrbmVzcztcbiAgICAgIHZhciBweSA9IGMgKiB2ZXJ0aWNhbFJhZGl1cztcbiAgICAgIHZhciBweiA9IHMgKiByYWRpdXM7XG4gICAgICBwb3NpdGlvbnMucHVzaChweCwgcHksIHB6KTtcbiAgICAgIHZhciBuID0gdjMuYWRkKHYzLm11bHRpcGx5KFswLCBzLCBjXSwgbm9ybWFsTXVsdCksIG5vcm1hbEFkZCk7XG4gICAgICBub3JtYWxzLnB1c2gobik7XG4gICAgICB0ZXhjb29yZHMucHVzaCh1QmFjayAqIHVNdWx0ICsgdUFkZCwgdik7XG4gICAgfVxuICB9XG5cbiAgLy8gR2VuZXJhdGUgdGhlIGluZGl2aWR1YWwgdmVydGljZXMgaW4gb3VyIHZlcnRleCBidWZmZXIuXG4gIGZvciAodmFyIHggPSAwOyB4IDwgc3ViZGl2aXNpb25zVGhpY2s7IHgrKykge1xuICAgIHZhciB1QmFjayA9ICh4IC8gKHN1YmRpdmlzaW9uc1RoaWNrIC0gMSkgLSAwLjUpICogMjtcbiAgICBjcmVhdGVBcmMob3V0ZXJSYWRpdXMsIHgsIFsxLCAxLCAxXSwgWzAsIDAsIDBdLCAxLCAwKTtcbiAgICBjcmVhdGVBcmMob3V0ZXJSYWRpdXMsIHgsIFswLCAwLCAwXSwgW3VCYWNrLCAwLCAwXSwgMCwgMCk7XG4gICAgY3JlYXRlQXJjKGlubmVyUmFkaXVzLCB4LCBbMSwgMSwgMV0sIFswLCAwLCAwXSwgMSwgMCk7XG4gICAgY3JlYXRlQXJjKGlubmVyUmFkaXVzLCB4LCBbMCwgMCwgMF0sIFt1QmFjaywgMCwgMF0sIDAsIDEpO1xuICB9XG5cbiAgLy8gRG8gb3V0ZXIgc3VyZmFjZS5cbiAgdmFyIGluZGljZXMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIHN1YmRpdmlzaW9uc0Rvd24gKiAyICogKDIgKyBzdWJkaXZpc2lvbnNUaGljayksIFVpbnQxNkFycmF5KTtcblxuICBmdW5jdGlvbiBjcmVhdGVTdXJmYWNlKGxlZnRBcmNPZmZzZXQsIHJpZ2h0QXJjT2Zmc2V0KSB7XG4gICAgZm9yICh2YXIgeiA9IDA7IHogPCBzdWJkaXZpc2lvbnNEb3duOyArK3opIHtcbiAgICAgIC8vIE1ha2UgdHJpYW5nbGUgMSBvZiBxdWFkLlxuICAgICAgaW5kaWNlcy5wdXNoKGxlZnRBcmNPZmZzZXQgKyB6ICsgMCwgbGVmdEFyY09mZnNldCArIHogKyAxLCByaWdodEFyY09mZnNldCArIHogKyAwKTtcblxuICAgICAgLy8gTWFrZSB0cmlhbmdsZSAyIG9mIHF1YWQuXG4gICAgICBpbmRpY2VzLnB1c2gobGVmdEFyY09mZnNldCArIHogKyAxLCByaWdodEFyY09mZnNldCArIHogKyAxLCByaWdodEFyY09mZnNldCArIHogKyAwKTtcbiAgICB9XG4gIH1cblxuICB2YXIgbnVtVmVydGljZXNEb3duID0gc3ViZGl2aXNpb25zRG93biArIDE7XG4gIC8vIGZyb250XG4gIGNyZWF0ZVN1cmZhY2UobnVtVmVydGljZXNEb3duICogMCwgbnVtVmVydGljZXNEb3duICogNCk7XG4gIC8vIHJpZ2h0XG4gIGNyZWF0ZVN1cmZhY2UobnVtVmVydGljZXNEb3duICogNSwgbnVtVmVydGljZXNEb3duICogNyk7XG4gIC8vIGJhY2tcbiAgY3JlYXRlU3VyZmFjZShudW1WZXJ0aWNlc0Rvd24gKiA2LCBudW1WZXJ0aWNlc0Rvd24gKiAyKTtcbiAgLy8gbGVmdFxuICBjcmVhdGVTdXJmYWNlKG51bVZlcnRpY2VzRG93biAqIDMsIG51bVZlcnRpY2VzRG93biAqIDEpO1xuXG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246IHBvc2l0aW9ucyxcbiAgICBub3JtYWw6IG5vcm1hbHMsXG4gICAgdGV4Y29vcmQ6IHRleGNvb3JkcyxcbiAgICBpbmRpY2VzOiBpbmRpY2VzXG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBjeWxpbmRlciBCdWZmZXJJbmZvLiBUaGUgY3lsaW5kZXIgd2lsbCBiZSBjcmVhdGVkIGFyb3VuZCB0aGUgb3JpZ2luXG4gKiBhbG9uZyB0aGUgeS1heGlzLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyBSYWRpdXMgb2YgY3lsaW5kZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiBjeWxpbmRlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgYXJvdW5kIHRoZSBjeWxpbmRlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSB2ZXJ0aWNhbFN1YmRpdmlzaW9ucyBUaGUgbnVtYmVyIG9mIHN1YmRpdmlzaW9ucyBkb3duIHRoZSBjeWxpbmRlci5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RvcENhcF0gQ3JlYXRlIHRvcCBjYXAuIERlZmF1bHQgPSB0cnVlLlxuICogQHBhcmFtIHtib29sZWFufSBbYm90dG9tQ2FwXSBDcmVhdGUgYm90dG9tIGNhcC4gRGVmYXVsdCA9IHRydWUuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5CdWZmZXJJbmZvfSBUaGUgY3JlYXRlZCBCdWZmZXJJbmZvLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVDeWxpbmRlckJ1ZmZlckluZm9cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgY3lsaW5kZXIgYnVmZmVycy4gVGhlIGN5bGluZGVyIHdpbGwgYmUgY3JlYXRlZCBhcm91bmQgdGhlIG9yaWdpblxuICogYWxvbmcgdGhlIHktYXhpcy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgUmFkaXVzIG9mIGN5bGluZGVyLlxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBIZWlnaHQgb2YgY3lsaW5kZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFsU3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGFyb3VuZCB0aGUgY3lsaW5kZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gdmVydGljYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgZG93biB0aGUgY3lsaW5kZXIuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt0b3BDYXBdIENyZWF0ZSB0b3AgY2FwLiBEZWZhdWx0ID0gdHJ1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2JvdHRvbUNhcF0gQ3JlYXRlIGJvdHRvbSBjYXAuIERlZmF1bHQgPSB0cnVlLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFdlYkdMQnVmZmVyPn0gVGhlIGNyZWF0ZWQgYnVmZmVycy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlQ3lsaW5kZXJCdWZmZXJzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGN5bGluZGVyIHZlcnRpY2VzLiBUaGUgY3lsaW5kZXIgd2lsbCBiZSBjcmVhdGVkIGFyb3VuZCB0aGUgb3JpZ2luXG4gKiBhbG9uZyB0aGUgeS1heGlzLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgUmFkaXVzIG9mIGN5bGluZGVyLlxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBIZWlnaHQgb2YgY3lsaW5kZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFsU3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGFyb3VuZCB0aGUgY3lsaW5kZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gdmVydGljYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgZG93biB0aGUgY3lsaW5kZXIuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt0b3BDYXBdIENyZWF0ZSB0b3AgY2FwLiBEZWZhdWx0ID0gdHJ1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2JvdHRvbUNhcF0gQ3JlYXRlIGJvdHRvbSBjYXAuIERlZmF1bHQgPSB0cnVlLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFR5cGVkQXJyYXk+fSBUaGUgY3JlYXRlZCB2ZXJ0aWNlcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUN5bGluZGVyVmVydGljZXMocmFkaXVzLCBoZWlnaHQsIHJhZGlhbFN1YmRpdmlzaW9ucywgdmVydGljYWxTdWJkaXZpc2lvbnMsIHRvcENhcCwgYm90dG9tQ2FwKSB7XG4gIHJldHVybiBjcmVhdGVUcnVuY2F0ZWRDb25lVmVydGljZXMocmFkaXVzLCByYWRpdXMsIGhlaWdodCwgcmFkaWFsU3ViZGl2aXNpb25zLCB2ZXJ0aWNhbFN1YmRpdmlzaW9ucywgdG9wQ2FwLCBib3R0b21DYXApO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgQnVmZmVySW5mbyBmb3IgYSB0b3J1c1xuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyByYWRpdXMgb2YgY2VudGVyIG9mIHRvcnVzIGNpcmNsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aGlja25lc3MgcmFkaXVzIG9mIHRvcnVzIHJpbmcuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFsU3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGFyb3VuZCB0aGUgdG9ydXMuXG4gKiBAcGFyYW0ge251bWJlcn0gYm9keVN1YmRpdmlzaW9ucyBUaGUgbnVtYmVyIG9mIHN1YmRpdmlzaW9ucyBhcm91bmQgdGhlIGJvZHkgdG9ydXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtzdGFydEFuZ2xlXSBzdGFydCBhbmdsZSBpbiByYWRpYW5zLiBEZWZhdWx0ID0gMC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2VuZEFuZ2xlXSBlbmQgYW5nbGUgaW4gcmFkaWFucy4gRGVmYXVsdCA9IE1hdGguUEkgKiAyLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuQnVmZmVySW5mb30gVGhlIGNyZWF0ZWQgQnVmZmVySW5mby5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlVG9ydXNCdWZmZXJJbmZvXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGJ1ZmZlcnMgZm9yIGEgdG9ydXNcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgcmFkaXVzIG9mIGNlbnRlciBvZiB0b3J1cyBjaXJjbGUuXG4gKiBAcGFyYW0ge251bWJlcn0gdGhpY2tuZXNzIHJhZGl1cyBvZiB0b3J1cyByaW5nLlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbFN1YmRpdmlzaW9ucyBUaGUgbnVtYmVyIG9mIHN1YmRpdmlzaW9ucyBhcm91bmQgdGhlIHRvcnVzLlxuICogQHBhcmFtIHtudW1iZXJ9IGJvZHlTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgYXJvdW5kIHRoZSBib2R5IHRvcnVzLlxuICogQHBhcmFtIHtib29sZWFufSBbc3RhcnRBbmdsZV0gc3RhcnQgYW5nbGUgaW4gcmFkaWFucy4gRGVmYXVsdCA9IDAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtlbmRBbmdsZV0gZW5kIGFuZ2xlIGluIHJhZGlhbnMuIERlZmF1bHQgPSBNYXRoLlBJICogMi5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBXZWJHTEJ1ZmZlcj59IFRoZSBjcmVhdGVkIGJ1ZmZlcnMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZVRvcnVzQnVmZmVyc1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyB2ZXJ0aWNlcyBmb3IgYSB0b3J1c1xuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgcmFkaXVzIG9mIGNlbnRlciBvZiB0b3J1cyBjaXJjbGUuXG4gKiBAcGFyYW0ge251bWJlcn0gdGhpY2tuZXNzIHJhZGl1cyBvZiB0b3J1cyByaW5nLlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbFN1YmRpdmlzaW9ucyBUaGUgbnVtYmVyIG9mIHN1YmRpdmlzaW9ucyBhcm91bmQgdGhlIHRvcnVzLlxuICogQHBhcmFtIHtudW1iZXJ9IGJvZHlTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgYXJvdW5kIHRoZSBib2R5IHRvcnVzLlxuICogQHBhcmFtIHtib29sZWFufSBbc3RhcnRBbmdsZV0gc3RhcnQgYW5nbGUgaW4gcmFkaWFucy4gRGVmYXVsdCA9IDAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtlbmRBbmdsZV0gZW5kIGFuZ2xlIGluIHJhZGlhbnMuIERlZmF1bHQgPSBNYXRoLlBJICogMi5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBUeXBlZEFycmF5Pn0gVGhlIGNyZWF0ZWQgdmVydGljZXMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICovXG5mdW5jdGlvbiBjcmVhdGVUb3J1c1ZlcnRpY2VzKHJhZGl1cywgdGhpY2tuZXNzLCByYWRpYWxTdWJkaXZpc2lvbnMsIGJvZHlTdWJkaXZpc2lvbnMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKSB7XG4gIGlmIChyYWRpYWxTdWJkaXZpc2lvbnMgPCAzKSB7XG4gICAgdGhyb3cgRXJyb3IoJ3JhZGlhbFN1YmRpdmlzaW9ucyBtdXN0IGJlIDMgb3IgZ3JlYXRlcicpO1xuICB9XG5cbiAgaWYgKGJvZHlTdWJkaXZpc2lvbnMgPCAzKSB7XG4gICAgdGhyb3cgRXJyb3IoJ3ZlcnRpY2FsU3ViZGl2aXNpb25zIG11c3QgYmUgMyBvciBncmVhdGVyJyk7XG4gIH1cblxuICBzdGFydEFuZ2xlID0gc3RhcnRBbmdsZSB8fCAwO1xuICBlbmRBbmdsZSA9IGVuZEFuZ2xlIHx8IE1hdGguUEkgKiAyO1xuICB2YXIgcmFuZ2UgPSBlbmRBbmdsZSAtIHN0YXJ0QW5nbGU7XG5cbiAgdmFyIHJhZGlhbFBhcnRzID0gcmFkaWFsU3ViZGl2aXNpb25zICsgMTtcbiAgdmFyIGJvZHlQYXJ0cyA9IGJvZHlTdWJkaXZpc2lvbnMgKyAxO1xuICB2YXIgbnVtVmVydGljZXMgPSByYWRpYWxQYXJ0cyAqIGJvZHlQYXJ0cztcbiAgdmFyIHBvc2l0aW9ucyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICB2YXIgbm9ybWFscyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICB2YXIgdGV4Y29vcmRzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgyLCBudW1WZXJ0aWNlcyk7XG4gIHZhciBpbmRpY2VzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCByYWRpYWxTdWJkaXZpc2lvbnMgKiBib2R5U3ViZGl2aXNpb25zICogMiwgVWludDE2QXJyYXkpO1xuXG4gIGZvciAodmFyIHNsaWNlID0gMDsgc2xpY2UgPCBib2R5UGFydHM7ICsrc2xpY2UpIHtcbiAgICB2YXIgdiA9IHNsaWNlIC8gYm9keVN1YmRpdmlzaW9ucztcbiAgICB2YXIgc2xpY2VBbmdsZSA9IHYgKiBNYXRoLlBJICogMjtcbiAgICB2YXIgc2xpY2VTaW4gPSBNYXRoLnNpbihzbGljZUFuZ2xlKTtcbiAgICB2YXIgcmluZ1JhZGl1cyA9IHJhZGl1cyArIHNsaWNlU2luICogdGhpY2tuZXNzO1xuICAgIHZhciBueSA9IE1hdGguY29zKHNsaWNlQW5nbGUpO1xuICAgIHZhciB5ID0gbnkgKiB0aGlja25lc3M7XG4gICAgZm9yICh2YXIgcmluZyA9IDA7IHJpbmcgPCByYWRpYWxQYXJ0czsgKytyaW5nKSB7XG4gICAgICB2YXIgdSA9IHJpbmcgLyByYWRpYWxTdWJkaXZpc2lvbnM7XG4gICAgICB2YXIgcmluZ0FuZ2xlID0gc3RhcnRBbmdsZSArIHUgKiByYW5nZTtcbiAgICAgIHZhciB4U2luID0gTWF0aC5zaW4ocmluZ0FuZ2xlKTtcbiAgICAgIHZhciB6Q29zID0gTWF0aC5jb3MocmluZ0FuZ2xlKTtcbiAgICAgIHZhciB4ID0geFNpbiAqIHJpbmdSYWRpdXM7XG4gICAgICB2YXIgeiA9IHpDb3MgKiByaW5nUmFkaXVzO1xuICAgICAgdmFyIG54ID0geFNpbiAqIHNsaWNlU2luO1xuICAgICAgdmFyIG56ID0gekNvcyAqIHNsaWNlU2luO1xuICAgICAgcG9zaXRpb25zLnB1c2goeCwgeSwgeik7XG4gICAgICBub3JtYWxzLnB1c2gobngsIG55LCBueik7XG4gICAgICB0ZXhjb29yZHMucHVzaCh1LCAxIC0gdik7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgX3NsaWNlID0gMDsgX3NsaWNlIDwgYm9keVN1YmRpdmlzaW9uczsgKytfc2xpY2UpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZm9yICh2YXIgX3JpbmcgPSAwOyBfcmluZyA8IHJhZGlhbFN1YmRpdmlzaW9uczsgKytfcmluZykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgdmFyIG5leHRSaW5nSW5kZXggPSAxICsgX3Jpbmc7XG4gICAgICB2YXIgbmV4dFNsaWNlSW5kZXggPSAxICsgX3NsaWNlO1xuICAgICAgaW5kaWNlcy5wdXNoKHJhZGlhbFBhcnRzICogX3NsaWNlICsgX3JpbmcsIHJhZGlhbFBhcnRzICogbmV4dFNsaWNlSW5kZXggKyBfcmluZywgcmFkaWFsUGFydHMgKiBfc2xpY2UgKyBuZXh0UmluZ0luZGV4KTtcbiAgICAgIGluZGljZXMucHVzaChyYWRpYWxQYXJ0cyAqIG5leHRTbGljZUluZGV4ICsgX3JpbmcsIHJhZGlhbFBhcnRzICogbmV4dFNsaWNlSW5kZXggKyBuZXh0UmluZ0luZGV4LCByYWRpYWxQYXJ0cyAqIF9zbGljZSArIG5leHRSaW5nSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246IHBvc2l0aW9ucyxcbiAgICBub3JtYWw6IG5vcm1hbHMsXG4gICAgdGV4Y29vcmQ6IHRleGNvb3JkcyxcbiAgICBpbmRpY2VzOiBpbmRpY2VzXG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRpc2MgQnVmZmVySW5mby4gVGhlIGRpc2Mgd2lsbCBiZSBpbiB0aGUgeHogcGxhbmUsIGNlbnRlcmVkIGF0XG4gKiB0aGUgb3JpZ2luLiBXaGVuIGNyZWF0aW5nLCBhdCBsZWFzdCAzIGRpdmlzaW9ucywgb3IgcGllXG4gKiBwaWVjZXMsIG5lZWQgdG8gYmUgc3BlY2lmaWVkLCBvdGhlcndpc2UgdGhlIHRyaWFuZ2xlcyBtYWtpbmdcbiAqIHVwIHRoZSBkaXNjIHdpbGwgYmUgZGVnZW5lcmF0ZS4gWW91IGNhbiBhbHNvIHNwZWNpZnkgdGhlXG4gKiBudW1iZXIgb2YgcmFkaWFsIHBpZWNlcyBgc3RhY2tzYC4gQSB2YWx1ZSBvZiAxIGZvclxuICogc3RhY2tzIHdpbGwgZ2l2ZSB5b3UgYSBzaW1wbGUgZGlzYyBvZiBwaWUgcGllY2VzLiAgSWYgeW91XG4gKiB3YW50IHRvIGNyZWF0ZSBhbiBhbm51bHVzIHlvdSBjYW4gc2V0IGBpbm5lclJhZGl1c2AgdG8gYVxuICogdmFsdWUgPiAwLiBGaW5hbGx5LCBgc3RhY2tQb3dlcmAgYWxsb3dzIHlvdSB0byBoYXZlIHRoZSB3aWR0aHNcbiAqIGluY3JlYXNlIG9yIGRlY3JlYXNlIGFzIHlvdSBtb3ZlIGF3YXkgZnJvbSB0aGUgY2VudGVyLiBUaGlzXG4gKiBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIHdoZW4gdXNpbmcgdGhlIGRpc2MgYXMgYSBncm91bmQgcGxhbmVcbiAqIHdpdGggYSBmaXhlZCBjYW1lcmEgc3VjaCB0aGF0IHlvdSBkb24ndCBuZWVkIHRoZSByZXNvbHV0aW9uXG4gKiBvZiBzbWFsbCB0cmlhbmdsZXMgbmVhciB0aGUgcGVyaW1ldGVyLiBGb3IgZXhhbXBsZSwgYSB2YWx1ZVxuICogb2YgMiB3aWxsIHByb2R1Y2Ugc3RhY2tzIHdob3NlIG91c2lkZSByYWRpdXMgaW5jcmVhc2VzIHdpdGhcbiAqIHRoZSBzcXVhcmUgb2YgdGhlIHN0YWNrIGluZGV4LiBBIHZhbHVlIG9mIDEgd2lsbCBnaXZlIHVuaWZvcm1cbiAqIHN0YWNrcy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgUmFkaXVzIG9mIHRoZSBncm91bmQgcGxhbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gZGl2aXNpb25zIE51bWJlciBvZiB0cmlhbmdsZXMgaW4gdGhlIGdyb3VuZCBwbGFuZSAoYXQgbGVhc3QgMykuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YWNrc10gTnVtYmVyIG9mIHJhZGlhbCBkaXZpc2lvbnMgKGRlZmF1bHQ9MSkuXG4gKiBAcGFyYW0ge251bWJlcn0gW2lubmVyUmFkaXVzXSBEZWZhdWx0IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YWNrUG93ZXJdIFBvd2VyIHRvIHJhaXNlIHN0YWNrIHNpemUgdG8gZm9yIGRlY3JlYXNpbmcgd2lkdGguXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5CdWZmZXJJbmZvfSBUaGUgY3JlYXRlZCBCdWZmZXJJbmZvLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVEaXNjQnVmZmVySW5mb1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBkaXNjIGJ1ZmZlcnMuIFRoZSBkaXNjIHdpbGwgYmUgaW4gdGhlIHh6IHBsYW5lLCBjZW50ZXJlZCBhdFxuICogdGhlIG9yaWdpbi4gV2hlbiBjcmVhdGluZywgYXQgbGVhc3QgMyBkaXZpc2lvbnMsIG9yIHBpZVxuICogcGllY2VzLCBuZWVkIHRvIGJlIHNwZWNpZmllZCwgb3RoZXJ3aXNlIHRoZSB0cmlhbmdsZXMgbWFraW5nXG4gKiB1cCB0aGUgZGlzYyB3aWxsIGJlIGRlZ2VuZXJhdGUuIFlvdSBjYW4gYWxzbyBzcGVjaWZ5IHRoZVxuICogbnVtYmVyIG9mIHJhZGlhbCBwaWVjZXMgYHN0YWNrc2AuIEEgdmFsdWUgb2YgMSBmb3JcbiAqIHN0YWNrcyB3aWxsIGdpdmUgeW91IGEgc2ltcGxlIGRpc2Mgb2YgcGllIHBpZWNlcy4gIElmIHlvdVxuICogd2FudCB0byBjcmVhdGUgYW4gYW5udWx1cyB5b3UgY2FuIHNldCBgaW5uZXJSYWRpdXNgIHRvIGFcbiAqIHZhbHVlID4gMC4gRmluYWxseSwgYHN0YWNrUG93ZXJgIGFsbG93cyB5b3UgdG8gaGF2ZSB0aGUgd2lkdGhzXG4gKiBpbmNyZWFzZSBvciBkZWNyZWFzZSBhcyB5b3UgbW92ZSBhd2F5IGZyb20gdGhlIGNlbnRlci4gVGhpc1xuICogaXMgcGFydGljdWxhcmx5IHVzZWZ1bCB3aGVuIHVzaW5nIHRoZSBkaXNjIGFzIGEgZ3JvdW5kIHBsYW5lXG4gKiB3aXRoIGEgZml4ZWQgY2FtZXJhIHN1Y2ggdGhhdCB5b3UgZG9uJ3QgbmVlZCB0aGUgcmVzb2x1dGlvblxuICogb2Ygc21hbGwgdHJpYW5nbGVzIG5lYXIgdGhlIHBlcmltZXRlci4gRm9yIGV4YW1wbGUsIGEgdmFsdWVcbiAqIG9mIDIgd2lsbCBwcm9kdWNlIHN0YWNrcyB3aG9zZSBvdXNpZGUgcmFkaXVzIGluY3JlYXNlcyB3aXRoXG4gKiB0aGUgc3F1YXJlIG9mIHRoZSBzdGFjayBpbmRleC4gQSB2YWx1ZSBvZiAxIHdpbGwgZ2l2ZSB1bmlmb3JtXG4gKiBzdGFja3MuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIFJhZGl1cyBvZiB0aGUgZ3JvdW5kIHBsYW5lLlxuICogQHBhcmFtIHtudW1iZXJ9IGRpdmlzaW9ucyBOdW1iZXIgb2YgdHJpYW5nbGVzIGluIHRoZSBncm91bmQgcGxhbmUgKGF0IGxlYXN0IDMpLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFja3NdIE51bWJlciBvZiByYWRpYWwgZGl2aXNpb25zIChkZWZhdWx0PTEpLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbm5lclJhZGl1c10gRGVmYXVsdCAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFja1Bvd2VyXSBQb3dlciB0byByYWlzZSBzdGFjayBzaXplIHRvIGZvciBkZWNyZWFzaW5nIHdpZHRoLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFdlYkdMQnVmZmVyPn0gVGhlIGNyZWF0ZWQgYnVmZmVycy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlRGlzY0J1ZmZlcnNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgZGlzYyB2ZXJ0aWNlcy4gVGhlIGRpc2Mgd2lsbCBiZSBpbiB0aGUgeHogcGxhbmUsIGNlbnRlcmVkIGF0XG4gKiB0aGUgb3JpZ2luLiBXaGVuIGNyZWF0aW5nLCBhdCBsZWFzdCAzIGRpdmlzaW9ucywgb3IgcGllXG4gKiBwaWVjZXMsIG5lZWQgdG8gYmUgc3BlY2lmaWVkLCBvdGhlcndpc2UgdGhlIHRyaWFuZ2xlcyBtYWtpbmdcbiAqIHVwIHRoZSBkaXNjIHdpbGwgYmUgZGVnZW5lcmF0ZS4gWW91IGNhbiBhbHNvIHNwZWNpZnkgdGhlXG4gKiBudW1iZXIgb2YgcmFkaWFsIHBpZWNlcyBgc3RhY2tzYC4gQSB2YWx1ZSBvZiAxIGZvclxuICogc3RhY2tzIHdpbGwgZ2l2ZSB5b3UgYSBzaW1wbGUgZGlzYyBvZiBwaWUgcGllY2VzLiAgSWYgeW91XG4gKiB3YW50IHRvIGNyZWF0ZSBhbiBhbm51bHVzIHlvdSBjYW4gc2V0IGBpbm5lclJhZGl1c2AgdG8gYVxuICogdmFsdWUgPiAwLiBGaW5hbGx5LCBgc3RhY2tQb3dlcmAgYWxsb3dzIHlvdSB0byBoYXZlIHRoZSB3aWR0aHNcbiAqIGluY3JlYXNlIG9yIGRlY3JlYXNlIGFzIHlvdSBtb3ZlIGF3YXkgZnJvbSB0aGUgY2VudGVyLiBUaGlzXG4gKiBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIHdoZW4gdXNpbmcgdGhlIGRpc2MgYXMgYSBncm91bmQgcGxhbmVcbiAqIHdpdGggYSBmaXhlZCBjYW1lcmEgc3VjaCB0aGF0IHlvdSBkb24ndCBuZWVkIHRoZSByZXNvbHV0aW9uXG4gKiBvZiBzbWFsbCB0cmlhbmdsZXMgbmVhciB0aGUgcGVyaW1ldGVyLiBGb3IgZXhhbXBsZSwgYSB2YWx1ZVxuICogb2YgMiB3aWxsIHByb2R1Y2Ugc3RhY2tzIHdob3NlIG91c2lkZSByYWRpdXMgaW5jcmVhc2VzIHdpdGhcbiAqIHRoZSBzcXVhcmUgb2YgdGhlIHN0YWNrIGluZGV4LiBBIHZhbHVlIG9mIDEgd2lsbCBnaXZlIHVuaWZvcm1cbiAqIHN0YWNrcy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIFJhZGl1cyBvZiB0aGUgZ3JvdW5kIHBsYW5lLlxuICogQHBhcmFtIHtudW1iZXJ9IGRpdmlzaW9ucyBOdW1iZXIgb2YgdHJpYW5nbGVzIGluIHRoZSBncm91bmQgcGxhbmUgKGF0IGxlYXN0IDMpLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFja3NdIE51bWJlciBvZiByYWRpYWwgZGl2aXNpb25zIChkZWZhdWx0PTEpLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbm5lclJhZGl1c10gRGVmYXVsdCAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFja1Bvd2VyXSBQb3dlciB0byByYWlzZSBzdGFjayBzaXplIHRvIGZvciBkZWNyZWFzaW5nIHdpZHRoLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFR5cGVkQXJyYXk+fSBUaGUgY3JlYXRlZCB2ZXJ0aWNlcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURpc2NWZXJ0aWNlcyhyYWRpdXMsIGRpdmlzaW9ucywgc3RhY2tzLCBpbm5lclJhZGl1cywgc3RhY2tQb3dlcikge1xuICBpZiAoZGl2aXNpb25zIDwgMykge1xuICAgIHRocm93IEVycm9yKCdkaXZpc2lvbnMgbXVzdCBiZSBhdCBsZWFzdCAzJyk7XG4gIH1cblxuICBzdGFja3MgPSBzdGFja3MgPyBzdGFja3MgOiAxO1xuICBzdGFja1Bvd2VyID0gc3RhY2tQb3dlciA/IHN0YWNrUG93ZXIgOiAxO1xuICBpbm5lclJhZGl1cyA9IGlubmVyUmFkaXVzID8gaW5uZXJSYWRpdXMgOiAwO1xuXG4gIC8vIE5vdGU6IFdlIGRvbid0IHNoYXJlIHRoZSBjZW50ZXIgdmVydGV4IGJlY2F1c2UgdGhhdCB3b3VsZFxuICAvLyBtZXNzIHVwIHRleHR1cmUgY29vcmRpbmF0ZXMuXG4gIHZhciBudW1WZXJ0aWNlcyA9IChkaXZpc2lvbnMgKyAxKSAqIChzdGFja3MgKyAxKTtcblxuICB2YXIgcG9zaXRpb25zID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0aWNlcyk7XG4gIHZhciBub3JtYWxzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0aWNlcyk7XG4gIHZhciB0ZXhjb29yZHMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDIsIG51bVZlcnRpY2VzKTtcbiAgdmFyIGluZGljZXMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIHN0YWNrcyAqIGRpdmlzaW9ucyAqIDIsIFVpbnQxNkFycmF5KTtcblxuICB2YXIgZmlyc3RJbmRleCA9IDA7XG4gIHZhciByYWRpdXNTcGFuID0gcmFkaXVzIC0gaW5uZXJSYWRpdXM7XG4gIHZhciBwb2ludHNQZXJTdGFjayA9IGRpdmlzaW9ucyArIDE7XG5cbiAgLy8gQnVpbGQgdGhlIGRpc2sgb25lIHN0YWNrIGF0IGEgdGltZS5cbiAgZm9yICh2YXIgc3RhY2sgPSAwOyBzdGFjayA8PSBzdGFja3M7ICsrc3RhY2spIHtcbiAgICB2YXIgc3RhY2tSYWRpdXMgPSBpbm5lclJhZGl1cyArIHJhZGl1c1NwYW4gKiBNYXRoLnBvdyhzdGFjayAvIHN0YWNrcywgc3RhY2tQb3dlcik7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBkaXZpc2lvbnM7ICsraSkge1xuICAgICAgdmFyIHRoZXRhID0gMi4wICogTWF0aC5QSSAqIGkgLyBkaXZpc2lvbnM7XG4gICAgICB2YXIgeCA9IHN0YWNrUmFkaXVzICogTWF0aC5jb3ModGhldGEpO1xuICAgICAgdmFyIHogPSBzdGFja1JhZGl1cyAqIE1hdGguc2luKHRoZXRhKTtcblxuICAgICAgcG9zaXRpb25zLnB1c2goeCwgMCwgeik7XG4gICAgICBub3JtYWxzLnB1c2goMCwgMSwgMCk7XG4gICAgICB0ZXhjb29yZHMucHVzaCgxIC0gaSAvIGRpdmlzaW9ucywgc3RhY2sgLyBzdGFja3MpO1xuICAgICAgaWYgKHN0YWNrID4gMCAmJiBpICE9PSBkaXZpc2lvbnMpIHtcbiAgICAgICAgLy8gYSwgYiwgYyBhbmQgZCBhcmUgdGhlIGluZGljZXMgb2YgdGhlIHZlcnRpY2VzIG9mIGEgcXVhZC4gIHVubGVzc1xuICAgICAgICAvLyB0aGUgY3VycmVudCBzdGFjayBpcyB0aGUgb25lIGNsb3Nlc3QgdG8gdGhlIGNlbnRlciwgaW4gd2hpY2ggY2FzZVxuICAgICAgICAvLyB0aGUgdmVydGljZXMgYSBhbmQgYiBjb25uZWN0IHRvIHRoZSBjZW50ZXIgdmVydGV4LlxuICAgICAgICB2YXIgYSA9IGZpcnN0SW5kZXggKyAoaSArIDEpO1xuICAgICAgICB2YXIgYiA9IGZpcnN0SW5kZXggKyBpO1xuICAgICAgICB2YXIgYyA9IGZpcnN0SW5kZXggKyBpIC0gcG9pbnRzUGVyU3RhY2s7XG4gICAgICAgIHZhciBkID0gZmlyc3RJbmRleCArIChpICsgMSkgLSBwb2ludHNQZXJTdGFjaztcblxuICAgICAgICAvLyBNYWtlIGEgcXVhZCBvZiB0aGUgdmVydGljZXMgYSwgYiwgYywgZC5cbiAgICAgICAgaW5kaWNlcy5wdXNoKGEsIGIsIGMpO1xuICAgICAgICBpbmRpY2VzLnB1c2goYSwgYywgZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmlyc3RJbmRleCArPSBkaXZpc2lvbnMgKyAxO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjogcG9zaXRpb25zLFxuICAgIG5vcm1hbDogbm9ybWFscyxcbiAgICB0ZXhjb29yZDogdGV4Y29vcmRzLFxuICAgIGluZGljZXM6IGluZGljZXNcbiAgfTtcbn1cblxuLyoqXG4gKiBjcmVhdGVzIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiAwIGFuZCByYW5nZSAtIDEgaW5jbHVzaXZlLlxuICogQHBhcmFtIHtudW1iZXJ9IHJhbmdlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHJhbmRvbSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIHJhbmdlIC0gMSBpbmNsdXNpdmUuXG4gKi9cbmZ1bmN0aW9uIHJhbmRJbnQocmFuZ2UpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiByYW5nZSB8IDA7XG59XG5cbi8qKlxuICogVXNlZCB0byBzdXBwbHkgcmFuZG9tIGNvbG9yc1xuICogQGNhbGxiYWNrIFJhbmRvbUNvbG9yRnVuY1xuICogQHBhcmFtIHtudW1iZXJ9IG5keCBpbmRleCBvZiB0cmlhbmdsZS9xdWFkIGlmIHVuaW5kZXhlZCBvciBpbmRleCBvZiB2ZXJ0ZXggaWYgaW5kZXhlZFxuICogQHBhcmFtIHtudW1iZXJ9IGNoYW5uZWwgMCA9IHJlZCwgMSA9IGdyZWVuLCAyID0gYmx1ZSwgMyA9IGFscGhhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEgbnVtYmVyIGZyb20gMCB0byAyNTVcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSYW5kb21WZXJ0aWNlc09wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbdmVydHNQZXJDb2xvcl0gRGVmYXVsdHMgdG8gMyBmb3Igbm9uLWluZGV4ZWQgdmVydGljZXNcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnR3Z2wvcHJpbWl0aXZlcy5SYW5kb21Db2xvckZ1bmN9IFtyYW5kXSBBIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIHJhbmRvbSBudW1iZXJzXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhdWdtZW50ZWRUeXBlZEFycmF5IG9mIHJhbmRvbSB2ZXJ0ZXggY29sb3JzLlxuICogSWYgdGhlIHZlcnRpY2VzIGFyZSBpbmRleGVkIChoYXZlIGFuIGluZGljZXMgYXJyYXkpIHRoZW4gd2lsbFxuICoganVzdCBtYWtlIHJhbmRvbSBjb2xvcnMuIE90aGVyd2lzZSBhc3N1bWVzIHRoZXkgYXJlIHRyaWFuZ2xlc1xuICogYW5kIG1ha2VzIG9uZSByYW5kb20gY29sb3IgZm9yIGV2ZXJ5IDMgdmVydGljZXMuXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBhdWdtZW50ZWRUeXBlZEFycmF5Pn0gdmVydGljZXMgVmVydGljZXMgYXMgcmV0dXJuZWQgZnJvbSBvbmUgb2YgdGhlIGNyZWF0ZVhYWFZlcnRpY2VzIGZ1bmN0aW9ucy5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvcHJpbWl0aXZlcy5SYW5kb21WZXJ0aWNlc09wdGlvbnN9IFtvcHRpb25zXSBvcHRpb25zLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIGF1Z21lbnRlZFR5cGVkQXJyYXk+fSBzYW1lIHZlcnRpY2VzIGFzIHBhc3NlZCBpbiB3aXRoIGBjb2xvcmAgYWRkZWQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICovXG5mdW5jdGlvbiBtYWtlUmFuZG9tVmVydGV4Q29sb3JzKHZlcnRpY2VzLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgbnVtRWxlbWVudHMgPSB2ZXJ0aWNlcy5wb3NpdGlvbi5udW1FbGVtZW50cztcbiAgdmFyIHZjb2xvcnMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDQsIG51bUVsZW1lbnRzLCBVaW50OEFycmF5KTtcbiAgdmFyIHJhbmQgPSBvcHRpb25zLnJhbmQgfHwgZnVuY3Rpb24gKG5keCwgY2hhbm5lbCkge1xuICAgIHJldHVybiBjaGFubmVsIDwgMyA/IHJhbmRJbnQoMjU2KSA6IDI1NTtcbiAgfTtcbiAgdmVydGljZXMuY29sb3IgPSB2Y29sb3JzO1xuICBpZiAodmVydGljZXMuaW5kaWNlcykge1xuICAgIC8vIGp1c3QgbWFrZSByYW5kb20gY29sb3JzIGlmIGluZGV4XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG51bUVsZW1lbnRzOyArK2lpKSB7XG4gICAgICB2Y29sb3JzLnB1c2gocmFuZChpaSwgMCksIHJhbmQoaWksIDEpLCByYW5kKGlpLCAyKSwgcmFuZChpaSwgMykpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBtYWtlIHJhbmRvbSBjb2xvcnMgcGVyIHRyaWFuZ2xlXG4gICAgdmFyIG51bVZlcnRzUGVyQ29sb3IgPSBvcHRpb25zLnZlcnRzUGVyQ29sb3IgfHwgMztcbiAgICB2YXIgbnVtU2V0cyA9IG51bUVsZW1lbnRzIC8gbnVtVmVydHNQZXJDb2xvcjtcbiAgICBmb3IgKHZhciBfaWkyID0gMDsgX2lpMiA8IG51bVNldHM7ICsrX2lpMikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgdmFyIGNvbG9yID0gW3JhbmQoX2lpMiwgMCksIHJhbmQoX2lpMiwgMSksIHJhbmQoX2lpMiwgMiksIHJhbmQoX2lpMiwgMyldO1xuICAgICAgZm9yICh2YXIgamogPSAwOyBqaiA8IG51bVZlcnRzUGVyQ29sb3I7ICsramopIHtcbiAgICAgICAgdmNvbG9ycy5wdXNoKGNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuXG4vKipcbiAqIGNyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGNhbGxzIGZuIHRvIGNyZWF0ZSB2ZXJ0aWNlcyBhbmQgdGhlblxuICogY3JlYXRlcyBhIGJ1ZmZlcnMgZm9yIHRoZW1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQnVmZmVyRnVuYyhmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKGdsKSB7XG4gICAgdmFyIGFycmF5cyA9IGZuLmFwcGx5KHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIHJldHVybiBhdHRyaWJ1dGVzLmNyZWF0ZUJ1ZmZlcnNGcm9tQXJyYXlzKGdsLCBhcnJheXMpO1xuICB9O1xufVxuXG4vKipcbiAqIGNyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGNhbGxzIGZuIHRvIGNyZWF0ZSB2ZXJ0aWNlcyBhbmQgdGhlblxuICogY3JlYXRlcyBhIGJ1ZmZlckluZm8gb2JqZWN0IGZvciB0aGVtXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlckluZm9GdW5jKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZ2wpIHtcbiAgICB2YXIgYXJyYXlzID0gZm4uYXBwbHkobnVsbCwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZXMuY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXMoZ2wsIGFycmF5cyk7XG4gIH07XG59XG5cbnZhciBhcnJheVNwZWNQcm9wZXJ0eU5hbWVzID0gW1wibnVtQ29tcG9uZW50c1wiLCBcInNpemVcIiwgXCJ0eXBlXCIsIFwibm9ybWFsaXplXCIsIFwic3RyaWRlXCIsIFwib2Zmc2V0XCIsIFwiYXR0cmliXCIsIFwibmFtZVwiLCBcImF0dHJpYk5hbWVcIl07XG5cbi8qKlxuICogQ29weSBlbGVtZW50cyBmcm9tIG9uZSBhcnJheSB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHtBcnJheXxUeXBlZEFycmF5fSBzcmMgc291cmNlIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5fFR5cGVkQXJyYXl9IGRzdCBkZXN0IGFycmF5XG4gKiBAcGFyYW0ge251bWJlcn0gZHN0TmR4IGluZGV4IGluIGRlc3QgdG8gY29weSBzcmNcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb2Zmc2V0XSBvZmZzZXQgdG8gYWRkIHRvIGNvcGllZCB2YWx1ZXNcbiAqL1xuZnVuY3Rpb24gY29weUVsZW1lbnRzKHNyYywgZHN0LCBkc3ROZHgsIG9mZnNldCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGxlbmd0aCA9IHNyYy5sZW5ndGg7XG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBsZW5ndGg7ICsraWkpIHtcbiAgICBkc3RbZHN0TmR4ICsgaWldID0gc3JjW2lpXSArIG9mZnNldDtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIHNhbWUgdGltZVxuICpcbiAqIEBwYXJhbSB7KG51bWJlcltdfEFycmF5QnVmZmVyVmlld3xtb2R1bGU6dHdnbC5GdWxsQXJyYXlTcGVjKX0gc3JjQXJyYXkgYXJyYXkgd2hvJ3MgdHlwZSB0byBjb3B5XG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIHNpemUgb2YgbmV3IGFycmF5XG4gKiBAcmV0dXJuIHsobnVtYmVyW118QXJyYXlCdWZmZXJWaWV3fG1vZHVsZTp0d2dsLkZ1bGxBcnJheVNwZWMpfSBhcnJheSB3aXRoIHNhbWUgdHlwZSBhcyBzcmNBcnJheVxuICovXG5mdW5jdGlvbiBjcmVhdGVBcnJheU9mU2FtZVR5cGUoc3JjQXJyYXksIGxlbmd0aCkge1xuICB2YXIgYXJyYXlTcmMgPSBnZXRBcnJheShzcmNBcnJheSk7XG4gIHZhciBuZXdBcnJheSA9IG5ldyBhcnJheVNyYy5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuICB2YXIgbmV3QXJyYXlTcGVjID0gbmV3QXJyYXk7XG4gIC8vIElmIGl0IGFwcGVhcnMgdG8gaGF2ZSBiZWVuIGF1Z21lbnRlZCBtYWtlIG5ldyBvbmUgYXVnZW1lbnRlZFxuICBpZiAoYXJyYXlTcmMubnVtQ29tcG9uZW50cyAmJiBhcnJheVNyYy5udW1FbGVtZW50cykge1xuICAgIGF1Z21lbnRUeXBlZEFycmF5KG5ld0FycmF5LCBhcnJheVNyYy5udW1Db21wb25lbnRzKTtcbiAgfVxuICAvLyBJZiBpdCB3YXMgYSBmdWxsc3BlYyBtYWtlIG5ldyBvbmUgYSBmdWxsc3BlY1xuICBpZiAoc3JjQXJyYXkuZGF0YSkge1xuICAgIG5ld0FycmF5U3BlYyA9IHtcbiAgICAgIGRhdGE6IG5ld0FycmF5XG4gICAgfTtcbiAgICBoZWxwZXIuY29weU5hbWVkUHJvcGVydGllcyhhcnJheVNwZWNQcm9wZXJ0eU5hbWVzLCBzcmNBcnJheSwgbmV3QXJyYXlTcGVjKTtcbiAgfVxuICByZXR1cm4gbmV3QXJyYXlTcGVjO1xufVxuXG4vKipcbiAqIENvbmNhdGluYXRlcyBzZXRzIG9mIHZlcnRpY2VzXG4gKlxuICogQXNzdW1lcyB0aGUgdmVydGljZXMgbWF0Y2ggaW4gY29tcG9zaXRpb24uIEZvciBleGFtcGxlXG4gKiBpZiBvbmUgc2V0IG9mIHZlcnRpY2VzIGhhcyBwb3NpdGlvbnMsIG5vcm1hbHMsIGFuZCBpbmRpY2VzXG4gKiBhbGwgc2V0cyBvZiB2ZXJ0aWNlcyBtdXN0IGhhdmUgcG9zaXRpb25zLCBub3JtYWxzLCBhbmQgaW5kaWNlc1xuICogYW5kIG9mIHRoZSBzYW1lIHR5cGUuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgIGNvbnN0IGN1YmVWZXJ0aWNlcyA9IHR3Z2wucHJpbXRpaXZlcy5jcmVhdGVDdWJlVmVydGljZXMoMik7XG4gKiAgICAgIGNvbnN0IHNwaGVyZVZlcnRpY2VzID0gdHdnbC5wcmltaXRpdmVzLmNyZWF0ZVNwaGVyZVZlcnRpY2VzKDEsIDEwLCAxMCk7XG4gKiAgICAgIC8vIG1vdmUgdGhlIHNwaGVyZSAyIHVuaXRzIHVwXG4gKiAgICAgIHR3Z2wucHJpbWl0aXZlcy5yZW9yaWVudFZlcnRpY2VzKFxuICogICAgICAgICAgc3BoZXJlVmVydGljZXMsIHR3Z2wubTQudHJhbnNsYXRpb24oWzAsIDIsIDBdKSk7XG4gKiAgICAgIC8vIG1lcmdlIHRoZSBzcGhlcmUgd2l0aCB0aGUgY3ViZVxuICogICAgICBjb25zdCBjdWJlU3BoZXJlVmVydGljZXMgPSB0d2dsLnByaW1pdGl2ZXMuY29uY2F0VmVydGljZXMoXG4gKiAgICAgICAgICBbY3ViZVZlcnRpY2VzLCBzcGhlcmVWZXJ0aWNlc10pO1xuICogICAgICAvLyB0dXJuIHRoZW0gaW50byBXZWJHTCBidWZmZXJzIGFuZCBhdHRyaWIgZGF0YVxuICogICAgICBjb25zdCBidWZmZXJJbmZvID0gdHdnbC5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cyhnbCwgY3ViZVNwaGVyZVZlcnRpY2VzKTtcbiAqXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkFycmF5c1tdfSBhcnJheXMgQXJyYXkgb2YgYXJyYXlzIG9mIHZlcnRpY2VzXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5BcnJheXN9IFRoZSBjb25jYXRpbmF0ZWQgdmVydGljZXMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICovXG5mdW5jdGlvbiBjb25jYXRWZXJ0aWNlcyhhcnJheU9mQXJyYXlzKSB7XG4gIHZhciBuYW1lcyA9IHt9O1xuICB2YXIgYmFzZU5hbWUgPSB2b2lkIDA7XG4gIC8vIGdldCBuYW1lcyBvZiBhbGwgYXJyYXlzLlxuICAvLyBhbmQgbnVtRWxlbWVudHMgZm9yIGVhY2ggc2V0IG9mIHZlcnRpY2VzXG5cbiAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaWkpIHtcbiAgICB2YXIgYXJyYXlzID0gYXJyYXlPZkFycmF5c1tpaV07XG4gICAgT2JqZWN0LmtleXMoYXJyYXlzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICBpZiAoIW5hbWVzW25hbWVdKSB7XG4gICAgICAgIG5hbWVzW25hbWVdID0gW107XG4gICAgICB9XG4gICAgICBpZiAoIWJhc2VOYW1lICYmIG5hbWUgIT09ICdpbmRpY2VzJykge1xuICAgICAgICBiYXNlTmFtZSA9IG5hbWU7XG4gICAgICB9XG4gICAgICB2YXIgYXJyYXlJbmZvID0gYXJyYXlzW25hbWVdO1xuICAgICAgdmFyIG51bUNvbXBvbmVudHMgPSBnZXROdW1Db21wb25lbnRzKGFycmF5SW5mbywgbmFtZSk7XG4gICAgICB2YXIgYXJyYXkgPSBnZXRBcnJheShhcnJheUluZm8pO1xuICAgICAgdmFyIG51bUVsZW1lbnRzID0gYXJyYXkubGVuZ3RoIC8gbnVtQ29tcG9uZW50cztcbiAgICAgIG5hbWVzW25hbWVdLnB1c2gobnVtRWxlbWVudHMpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBhcnJheU9mQXJyYXlzLmxlbmd0aDsgKytpaSkge1xuICAgIF9sb29wKGlpKTtcbiAgfVxuXG4gIC8vIGNvbXB1dGUgbGVuZ3RoIG9mIGNvbWJpbmVkIGFycmF5XG4gIC8vIGFuZCByZXR1cm4gb25lIGZvciByZWZlcmVuY2VcbiAgZnVuY3Rpb24gZ2V0TGVuZ3RoT2ZDb21iaW5lZEFycmF5cyhuYW1lKSB7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgdmFyIGFycmF5U3BlYyA9IHZvaWQgMDtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgYXJyYXlPZkFycmF5cy5sZW5ndGg7ICsraWkpIHtcbiAgICAgIHZhciBfYXJyYXlzID0gYXJyYXlPZkFycmF5c1tpaV07XG4gICAgICB2YXIgYXJyYXlJbmZvID0gX2FycmF5c1tuYW1lXTtcbiAgICAgIHZhciBhcnJheSA9IGdldEFycmF5KGFycmF5SW5mbyk7XG4gICAgICBsZW5ndGggKz0gYXJyYXkubGVuZ3RoO1xuICAgICAgaWYgKCFhcnJheVNwZWMgfHwgYXJyYXlJbmZvLmRhdGEpIHtcbiAgICAgICAgYXJyYXlTcGVjID0gYXJyYXlJbmZvO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAgICBzcGVjOiBhcnJheVNwZWNcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gY29weUFycmF5c1RvTmV3QXJyYXkobmFtZSwgYmFzZSwgbmV3QXJyYXkpIHtcbiAgICB2YXIgYmFzZUluZGV4ID0gMDtcbiAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgYXJyYXlPZkFycmF5cy5sZW5ndGg7ICsraWkpIHtcbiAgICAgIHZhciBfYXJyYXlzMiA9IGFycmF5T2ZBcnJheXNbaWldO1xuICAgICAgdmFyIGFycmF5SW5mbyA9IF9hcnJheXMyW25hbWVdO1xuICAgICAgdmFyIGFycmF5ID0gZ2V0QXJyYXkoYXJyYXlJbmZvKTtcbiAgICAgIGlmIChuYW1lID09PSAnaW5kaWNlcycpIHtcbiAgICAgICAgY29weUVsZW1lbnRzKGFycmF5LCBuZXdBcnJheSwgb2Zmc2V0LCBiYXNlSW5kZXgpO1xuICAgICAgICBiYXNlSW5kZXggKz0gYmFzZVtpaV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3B5RWxlbWVudHMoYXJyYXksIG5ld0FycmF5LCBvZmZzZXQpO1xuICAgICAgfVxuICAgICAgb2Zmc2V0ICs9IGFycmF5Lmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICB2YXIgYmFzZSA9IG5hbWVzW2Jhc2VOYW1lXTtcblxuICB2YXIgbmV3QXJyYXlzID0ge307XG4gIE9iamVjdC5rZXlzKG5hbWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGluZm8gPSBnZXRMZW5ndGhPZkNvbWJpbmVkQXJyYXlzKG5hbWUpO1xuICAgIHZhciBuZXdBcnJheVNwZWMgPSBjcmVhdGVBcnJheU9mU2FtZVR5cGUoaW5mby5zcGVjLCBpbmZvLmxlbmd0aCk7XG4gICAgY29weUFycmF5c1RvTmV3QXJyYXkobmFtZSwgYmFzZSwgZ2V0QXJyYXkobmV3QXJyYXlTcGVjKSk7XG4gICAgbmV3QXJyYXlzW25hbWVdID0gbmV3QXJyYXlTcGVjO1xuICB9KTtcbiAgcmV0dXJuIG5ld0FycmF5cztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZHVwbGljYXRlIHNldCBvZiB2ZXJ0aWNlc1xuICpcbiAqIFRoaXMgaXMgdXNlZnVsIGZvciBjYWxsaW5nIHJlb3JpZW50VmVydGljZXMgd2hlbiB5b3VcbiAqIGFsc28gd2FudCB0byBrZWVwIHRoZSBvcmlnaW5hbCBhdmFpbGFibGVcbiAqXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkFycmF5c30gYXJyYXlzIG9mIHZlcnRpY2VzXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5BcnJheXN9IFRoZSBkdXBpbGljYXRlZCB2ZXJ0aWNlcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cbmZ1bmN0aW9uIGR1cGxpY2F0ZVZlcnRpY2VzKGFycmF5cykge1xuICB2YXIgbmV3QXJyYXlzID0ge307XG4gIE9iamVjdC5rZXlzKGFycmF5cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBhcnJheVNwZWMgPSBhcnJheXNbbmFtZV07XG4gICAgdmFyIHNyY0FycmF5ID0gZ2V0QXJyYXkoYXJyYXlTcGVjKTtcbiAgICB2YXIgbmV3QXJyYXlTcGVjID0gY3JlYXRlQXJyYXlPZlNhbWVUeXBlKGFycmF5U3BlYywgc3JjQXJyYXkubGVuZ3RoKTtcbiAgICBjb3B5RWxlbWVudHMoc3JjQXJyYXksIGdldEFycmF5KG5ld0FycmF5U3BlYyksIDApO1xuICAgIG5ld0FycmF5c1tuYW1lXSA9IG5ld0FycmF5U3BlYztcbiAgfSk7XG4gIHJldHVybiBuZXdBcnJheXM7XG59XG5cbnZhciBjcmVhdGUzREZCdWZmZXJJbmZvID0gY3JlYXRlQnVmZmVySW5mb0Z1bmMoY3JlYXRlM0RGVmVydGljZXMpO1xudmFyIGNyZWF0ZTNERkJ1ZmZlcnMgPSBjcmVhdGVCdWZmZXJGdW5jKGNyZWF0ZTNERlZlcnRpY2VzKTtcbnZhciBjcmVhdGVDdWJlQnVmZmVySW5mbyA9IGNyZWF0ZUJ1ZmZlckluZm9GdW5jKGNyZWF0ZUN1YmVWZXJ0aWNlcyk7XG52YXIgY3JlYXRlQ3ViZUJ1ZmZlcnMgPSBjcmVhdGVCdWZmZXJGdW5jKGNyZWF0ZUN1YmVWZXJ0aWNlcyk7XG52YXIgY3JlYXRlUGxhbmVCdWZmZXJJbmZvID0gY3JlYXRlQnVmZmVySW5mb0Z1bmMoY3JlYXRlUGxhbmVWZXJ0aWNlcyk7XG52YXIgY3JlYXRlUGxhbmVCdWZmZXJzID0gY3JlYXRlQnVmZmVyRnVuYyhjcmVhdGVQbGFuZVZlcnRpY2VzKTtcbnZhciBjcmVhdGVTcGhlcmVCdWZmZXJJbmZvID0gY3JlYXRlQnVmZmVySW5mb0Z1bmMoY3JlYXRlU3BoZXJlVmVydGljZXMpO1xudmFyIGNyZWF0ZVNwaGVyZUJ1ZmZlcnMgPSBjcmVhdGVCdWZmZXJGdW5jKGNyZWF0ZVNwaGVyZVZlcnRpY2VzKTtcbnZhciBjcmVhdGVUcnVuY2F0ZWRDb25lQnVmZmVySW5mbyA9IGNyZWF0ZUJ1ZmZlckluZm9GdW5jKGNyZWF0ZVRydW5jYXRlZENvbmVWZXJ0aWNlcyk7XG52YXIgY3JlYXRlVHJ1bmNhdGVkQ29uZUJ1ZmZlcnMgPSBjcmVhdGVCdWZmZXJGdW5jKGNyZWF0ZVRydW5jYXRlZENvbmVWZXJ0aWNlcyk7XG52YXIgY3JlYXRlWFlRdWFkQnVmZmVySW5mbyA9IGNyZWF0ZUJ1ZmZlckluZm9GdW5jKGNyZWF0ZVhZUXVhZFZlcnRpY2VzKTtcbnZhciBjcmVhdGVYWVF1YWRCdWZmZXJzID0gY3JlYXRlQnVmZmVyRnVuYyhjcmVhdGVYWVF1YWRWZXJ0aWNlcyk7XG52YXIgY3JlYXRlQ3Jlc2VudEJ1ZmZlckluZm8gPSBjcmVhdGVCdWZmZXJJbmZvRnVuYyhjcmVhdGVDcmVzZW50VmVydGljZXMpO1xudmFyIGNyZWF0ZUNyZXNlbnRCdWZmZXJzID0gY3JlYXRlQnVmZmVyRnVuYyhjcmVhdGVDcmVzZW50VmVydGljZXMpO1xudmFyIGNyZWF0ZUN5bGluZGVyQnVmZmVySW5mbyA9IGNyZWF0ZUJ1ZmZlckluZm9GdW5jKGNyZWF0ZUN5bGluZGVyVmVydGljZXMpO1xudmFyIGNyZWF0ZUN5bGluZGVyQnVmZmVycyA9IGNyZWF0ZUJ1ZmZlckZ1bmMoY3JlYXRlQ3lsaW5kZXJWZXJ0aWNlcyk7XG52YXIgY3JlYXRlVG9ydXNCdWZmZXJJbmZvID0gY3JlYXRlQnVmZmVySW5mb0Z1bmMoY3JlYXRlVG9ydXNWZXJ0aWNlcyk7XG52YXIgY3JlYXRlVG9ydXNCdWZmZXJzID0gY3JlYXRlQnVmZmVyRnVuYyhjcmVhdGVUb3J1c1ZlcnRpY2VzKTtcbnZhciBjcmVhdGVEaXNjQnVmZmVySW5mbyA9IGNyZWF0ZUJ1ZmZlckluZm9GdW5jKGNyZWF0ZURpc2NWZXJ0aWNlcyk7XG52YXIgY3JlYXRlRGlzY0J1ZmZlcnMgPSBjcmVhdGVCdWZmZXJGdW5jKGNyZWF0ZURpc2NWZXJ0aWNlcyk7XG5cbmV4cG9ydHMuY3JlYXRlM0RGQnVmZmVySW5mbyA9IGNyZWF0ZTNERkJ1ZmZlckluZm87XG5leHBvcnRzLmNyZWF0ZTNERkJ1ZmZlcnMgPSBjcmVhdGUzREZCdWZmZXJzO1xuZXhwb3J0cy5jcmVhdGUzREZWZXJ0aWNlcyA9IGNyZWF0ZTNERlZlcnRpY2VzO1xuZXhwb3J0cy5jcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5ID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheTtcbmV4cG9ydHMuY3JlYXRlQ3ViZUJ1ZmZlckluZm8gPSBjcmVhdGVDdWJlQnVmZmVySW5mbztcbmV4cG9ydHMuY3JlYXRlQ3ViZUJ1ZmZlcnMgPSBjcmVhdGVDdWJlQnVmZmVycztcbmV4cG9ydHMuY3JlYXRlQ3ViZVZlcnRpY2VzID0gY3JlYXRlQ3ViZVZlcnRpY2VzO1xuZXhwb3J0cy5jcmVhdGVQbGFuZUJ1ZmZlckluZm8gPSBjcmVhdGVQbGFuZUJ1ZmZlckluZm87XG5leHBvcnRzLmNyZWF0ZVBsYW5lQnVmZmVycyA9IGNyZWF0ZVBsYW5lQnVmZmVycztcbmV4cG9ydHMuY3JlYXRlUGxhbmVWZXJ0aWNlcyA9IGNyZWF0ZVBsYW5lVmVydGljZXM7XG5leHBvcnRzLmNyZWF0ZVNwaGVyZUJ1ZmZlckluZm8gPSBjcmVhdGVTcGhlcmVCdWZmZXJJbmZvO1xuZXhwb3J0cy5jcmVhdGVTcGhlcmVCdWZmZXJzID0gY3JlYXRlU3BoZXJlQnVmZmVycztcbmV4cG9ydHMuY3JlYXRlU3BoZXJlVmVydGljZXMgPSBjcmVhdGVTcGhlcmVWZXJ0aWNlcztcbmV4cG9ydHMuY3JlYXRlVHJ1bmNhdGVkQ29uZUJ1ZmZlckluZm8gPSBjcmVhdGVUcnVuY2F0ZWRDb25lQnVmZmVySW5mbztcbmV4cG9ydHMuY3JlYXRlVHJ1bmNhdGVkQ29uZUJ1ZmZlcnMgPSBjcmVhdGVUcnVuY2F0ZWRDb25lQnVmZmVycztcbmV4cG9ydHMuY3JlYXRlVHJ1bmNhdGVkQ29uZVZlcnRpY2VzID0gY3JlYXRlVHJ1bmNhdGVkQ29uZVZlcnRpY2VzO1xuZXhwb3J0cy5jcmVhdGVYWVF1YWRCdWZmZXJJbmZvID0gY3JlYXRlWFlRdWFkQnVmZmVySW5mbztcbmV4cG9ydHMuY3JlYXRlWFlRdWFkQnVmZmVycyA9IGNyZWF0ZVhZUXVhZEJ1ZmZlcnM7XG5leHBvcnRzLmNyZWF0ZVhZUXVhZFZlcnRpY2VzID0gY3JlYXRlWFlRdWFkVmVydGljZXM7XG5leHBvcnRzLmNyZWF0ZUNyZXNlbnRCdWZmZXJJbmZvID0gY3JlYXRlQ3Jlc2VudEJ1ZmZlckluZm87XG5leHBvcnRzLmNyZWF0ZUNyZXNlbnRCdWZmZXJzID0gY3JlYXRlQ3Jlc2VudEJ1ZmZlcnM7XG5leHBvcnRzLmNyZWF0ZUNyZXNlbnRWZXJ0aWNlcyA9IGNyZWF0ZUNyZXNlbnRWZXJ0aWNlcztcbmV4cG9ydHMuY3JlYXRlQ3lsaW5kZXJCdWZmZXJJbmZvID0gY3JlYXRlQ3lsaW5kZXJCdWZmZXJJbmZvO1xuZXhwb3J0cy5jcmVhdGVDeWxpbmRlckJ1ZmZlcnMgPSBjcmVhdGVDeWxpbmRlckJ1ZmZlcnM7XG5leHBvcnRzLmNyZWF0ZUN5bGluZGVyVmVydGljZXMgPSBjcmVhdGVDeWxpbmRlclZlcnRpY2VzO1xuZXhwb3J0cy5jcmVhdGVUb3J1c0J1ZmZlckluZm8gPSBjcmVhdGVUb3J1c0J1ZmZlckluZm87XG5leHBvcnRzLmNyZWF0ZVRvcnVzQnVmZmVycyA9IGNyZWF0ZVRvcnVzQnVmZmVycztcbmV4cG9ydHMuY3JlYXRlVG9ydXNWZXJ0aWNlcyA9IGNyZWF0ZVRvcnVzVmVydGljZXM7XG5leHBvcnRzLmNyZWF0ZURpc2NCdWZmZXJJbmZvID0gY3JlYXRlRGlzY0J1ZmZlckluZm87XG5leHBvcnRzLmNyZWF0ZURpc2NCdWZmZXJzID0gY3JlYXRlRGlzY0J1ZmZlcnM7XG5leHBvcnRzLmNyZWF0ZURpc2NWZXJ0aWNlcyA9IGNyZWF0ZURpc2NWZXJ0aWNlcztcbmV4cG9ydHMuZGVpbmRleFZlcnRpY2VzID0gZGVpbmRleFZlcnRpY2VzO1xuZXhwb3J0cy5mbGF0dGVuTm9ybWFscyA9IGZsYXR0ZW5Ob3JtYWxzO1xuZXhwb3J0cy5tYWtlUmFuZG9tVmVydGV4Q29sb3JzID0gbWFrZVJhbmRvbVZlcnRleENvbG9ycztcbmV4cG9ydHMucmVvcmllbnREaXJlY3Rpb25zID0gcmVvcmllbnREaXJlY3Rpb25zO1xuZXhwb3J0cy5yZW9yaWVudE5vcm1hbHMgPSByZW9yaWVudE5vcm1hbHM7XG5leHBvcnRzLnJlb3JpZW50UG9zaXRpb25zID0gcmVvcmllbnRQb3NpdGlvbnM7XG5leHBvcnRzLnJlb3JpZW50VmVydGljZXMgPSByZW9yaWVudFZlcnRpY2VzO1xuZXhwb3J0cy5jb25jYXRWZXJ0aWNlcyA9IGNvbmNhdFZlcnRpY2VzO1xuZXhwb3J0cy5kdXBsaWNhdGVWZXJ0aWNlcyA9IGR1cGxpY2F0ZVZlcnRpY2VzO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGdsc2wgPSByZXF1aXJlKFwiZ2xzbGlmeVwiKTtcclxuY29uc3QgdHdnbCA9IHJlcXVpcmUoXCJ0d2dsLmpzXCIpO1xyXG5cclxuY29uc3QgdmVydGV4U2hhZGVyID0gZ2xzbChbXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWM0IHBvc2l0aW9uO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gIGdsX1Bvc2l0aW9uID0gcG9zaXRpb247XFxufVwiXSk7XHJcbmNvbnN0IGZyYWdtZW50U2hhZGVyID0gZ2xzbChbXCJwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbnVuaWZvcm0gdmVjMiB1X3Jlc29sdXRpb247XFxudW5pZm9ybSB2ZWMyIHVfbW91c2U7XFxudW5pZm9ybSBmbG9hdCB1X3RpbWU7XFxuXFxuLy9cXG4vLyBEZXNjcmlwdGlvbiA6IEFycmF5IGFuZCB0ZXh0dXJlbGVzcyBHTFNMIDJELzNELzREIHNpbXBsZXhcXG4vLyAgICAgICAgICAgICAgIG5vaXNlIGZ1bmN0aW9ucy5cXG4vLyAgICAgIEF1dGhvciA6IElhbiBNY0V3YW4sIEFzaGltYSBBcnRzLlxcbi8vICBNYWludGFpbmVyIDogaWptXFxuLy8gICAgIExhc3Rtb2QgOiAyMDExMDgyMiAoaWptKVxcbi8vICAgICBMaWNlbnNlIDogQ29weXJpZ2h0IChDKSAyMDExIEFzaGltYSBBcnRzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbi8vICAgICAgICAgICAgICAgRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlLlxcbi8vICAgICAgICAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FzaGltYS93ZWJnbC1ub2lzZVxcbi8vXFxuXFxudmVjMyBtb2QyODkodmVjMyB4KSB7XFxuICByZXR1cm4geCAtIGZsb29yKHggKiAoMS4wIC8gMjg5LjApKSAqIDI4OS4wO1xcbn1cXG5cXG52ZWM0IG1vZDI4OSh2ZWM0IHgpIHtcXG4gIHJldHVybiB4IC0gZmxvb3IoeCAqICgxLjAgLyAyODkuMCkpICogMjg5LjA7XFxufVxcblxcbnZlYzQgcGVybXV0ZSh2ZWM0IHgpIHtcXG4gICAgIHJldHVybiBtb2QyODkoKCh4KjM0LjApKzEuMCkqeCk7XFxufVxcblxcbnZlYzQgdGF5bG9ySW52U3FydCh2ZWM0IHIpXFxue1xcbiAgcmV0dXJuIDEuNzkyODQyOTE0MDAxNTkgLSAwLjg1MzczNDcyMDk1MzE0ICogcjtcXG59XFxuXFxuZmxvYXQgc25vaXNlKHZlYzMgdilcXG4gIHtcXG4gIGNvbnN0IHZlYzIgIEMgPSB2ZWMyKDEuMC82LjAsIDEuMC8zLjApIDtcXG4gIGNvbnN0IHZlYzQgIEQgPSB2ZWM0KDAuMCwgMC41LCAxLjAsIDIuMCk7XFxuXFxuLy8gRmlyc3QgY29ybmVyXFxuICB2ZWMzIGkgID0gZmxvb3IodiArIGRvdCh2LCBDLnl5eSkgKTtcXG4gIHZlYzMgeDAgPSAgIHYgLSBpICsgZG90KGksIEMueHh4KSA7XFxuXFxuLy8gT3RoZXIgY29ybmVyc1xcbiAgdmVjMyBnID0gc3RlcCh4MC55engsIHgwLnh5eik7XFxuICB2ZWMzIGwgPSAxLjAgLSBnO1xcbiAgdmVjMyBpMSA9IG1pbiggZy54eXosIGwuenh5ICk7XFxuICB2ZWMzIGkyID0gbWF4KCBnLnh5eiwgbC56eHkgKTtcXG5cXG4gIC8vICAgeDAgPSB4MCAtIDAuMCArIDAuMCAqIEMueHh4O1xcbiAgLy8gICB4MSA9IHgwIC0gaTEgICsgMS4wICogQy54eHg7XFxuICAvLyAgIHgyID0geDAgLSBpMiAgKyAyLjAgKiBDLnh4eDtcXG4gIC8vICAgeDMgPSB4MCAtIDEuMCArIDMuMCAqIEMueHh4O1xcbiAgdmVjMyB4MSA9IHgwIC0gaTEgKyBDLnh4eDtcXG4gIHZlYzMgeDIgPSB4MCAtIGkyICsgQy55eXk7IC8vIDIuMCpDLnggPSAxLzMgPSBDLnlcXG4gIHZlYzMgeDMgPSB4MCAtIEQueXl5OyAgICAgIC8vIC0xLjArMy4wKkMueCA9IC0wLjUgPSAtRC55XFxuXFxuLy8gUGVybXV0YXRpb25zXFxuICBpID0gbW9kMjg5KGkpO1xcbiAgdmVjNCBwID0gcGVybXV0ZSggcGVybXV0ZSggcGVybXV0ZShcXG4gICAgICAgICAgICAgaS56ICsgdmVjNCgwLjAsIGkxLnosIGkyLnosIDEuMCApKVxcbiAgICAgICAgICAgKyBpLnkgKyB2ZWM0KDAuMCwgaTEueSwgaTIueSwgMS4wICkpXFxuICAgICAgICAgICArIGkueCArIHZlYzQoMC4wLCBpMS54LCBpMi54LCAxLjAgKSk7XFxuXFxuLy8gR3JhZGllbnRzOiA3eDcgcG9pbnRzIG92ZXIgYSBzcXVhcmUsIG1hcHBlZCBvbnRvIGFuIG9jdGFoZWRyb24uXFxuLy8gVGhlIHJpbmcgc2l6ZSAxNyoxNyA9IDI4OSBpcyBjbG9zZSB0byBhIG11bHRpcGxlIG9mIDQ5ICg0OSo2ID0gMjk0KVxcbiAgZmxvYXQgbl8gPSAwLjE0Mjg1NzE0Mjg1NzsgLy8gMS4wLzcuMFxcbiAgdmVjMyAgbnMgPSBuXyAqIEQud3l6IC0gRC54eng7XFxuXFxuICB2ZWM0IGogPSBwIC0gNDkuMCAqIGZsb29yKHAgKiBucy56ICogbnMueik7ICAvLyAgbW9kKHAsNyo3KVxcblxcbiAgdmVjNCB4XyA9IGZsb29yKGogKiBucy56KTtcXG4gIHZlYzQgeV8gPSBmbG9vcihqIC0gNy4wICogeF8gKTsgICAgLy8gbW9kKGosTilcXG5cXG4gIHZlYzQgeCA9IHhfICpucy54ICsgbnMueXl5eTtcXG4gIHZlYzQgeSA9IHlfICpucy54ICsgbnMueXl5eTtcXG4gIHZlYzQgaCA9IDEuMCAtIGFicyh4KSAtIGFicyh5KTtcXG5cXG4gIHZlYzQgYjAgPSB2ZWM0KCB4Lnh5LCB5Lnh5ICk7XFxuICB2ZWM0IGIxID0gdmVjNCggeC56dywgeS56dyApO1xcblxcbiAgLy92ZWM0IHMwID0gdmVjNChsZXNzVGhhbihiMCwwLjApKSoyLjAgLSAxLjA7XFxuICAvL3ZlYzQgczEgPSB2ZWM0KGxlc3NUaGFuKGIxLDAuMCkpKjIuMCAtIDEuMDtcXG4gIHZlYzQgczAgPSBmbG9vcihiMCkqMi4wICsgMS4wO1xcbiAgdmVjNCBzMSA9IGZsb29yKGIxKSoyLjAgKyAxLjA7XFxuICB2ZWM0IHNoID0gLXN0ZXAoaCwgdmVjNCgwLjApKTtcXG5cXG4gIHZlYzQgYTAgPSBiMC54enl3ICsgczAueHp5dypzaC54eHl5IDtcXG4gIHZlYzQgYTEgPSBiMS54enl3ICsgczEueHp5dypzaC56end3IDtcXG5cXG4gIHZlYzMgcDAgPSB2ZWMzKGEwLnh5LGgueCk7XFxuICB2ZWMzIHAxID0gdmVjMyhhMC56dyxoLnkpO1xcbiAgdmVjMyBwMiA9IHZlYzMoYTEueHksaC56KTtcXG4gIHZlYzMgcDMgPSB2ZWMzKGExLnp3LGgudyk7XFxuXFxuLy9Ob3JtYWxpc2UgZ3JhZGllbnRzXFxuICB2ZWM0IG5vcm0gPSB0YXlsb3JJbnZTcXJ0KHZlYzQoZG90KHAwLHAwKSwgZG90KHAxLHAxKSwgZG90KHAyLCBwMiksIGRvdChwMyxwMykpKTtcXG4gIHAwICo9IG5vcm0ueDtcXG4gIHAxICo9IG5vcm0ueTtcXG4gIHAyICo9IG5vcm0uejtcXG4gIHAzICo9IG5vcm0udztcXG5cXG4vLyBNaXggZmluYWwgbm9pc2UgdmFsdWVcXG4gIHZlYzQgbSA9IG1heCgwLjYgLSB2ZWM0KGRvdCh4MCx4MCksIGRvdCh4MSx4MSksIGRvdCh4Mix4MiksIGRvdCh4Myx4MykpLCAwLjApO1xcbiAgbSA9IG0gKiBtO1xcbiAgcmV0dXJuIDQyLjAgKiBkb3QoIG0qbSwgdmVjNCggZG90KHAwLHgwKSwgZG90KHAxLHgxKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdChwMix4MiksIGRvdChwMyx4MykgKSApO1xcbiAgfVxcblxcbnZlYzMgY29sb3IodmVjMyB0aGluZ1RvQ29sb3IsIHZlYzMgdGhlQ29sb3IpIHtcXG5cXG4gICAgcmV0dXJuIHRoaW5nVG9Db2xvciArIHRoZUNvbG9yO1xcbn1cXG5cXG52b2lkIG1haW4oKSB7XFxuICAgICB2ZWMyIHN0ID0gZ2xfRnJhZ0Nvb3JkLnh5L3VfcmVzb2x1dGlvbjtcXG4gICAgdmVjMyBwb3MgPSB2ZWMzKHN0Lnh5LCB1X3RpbWUpO1xcbiAgICB2ZWMzIHJnYiA9IHZlYzMoMC4xLCBjb3ModV90aW1lKSwgMC41KTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChjb2xvcih2ZWMzKHNub2lzZShwb3MpLHNub2lzZShwb3MpLHNub2lzZShwb3MpKSwgcmdiKSwgMS4wKTtcXG59XCJdKTtcclxuXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xyXG5cclxuY29uc3QgcHJvZ3JhbUluZm8gPSB0d2dsLmNyZWF0ZVByb2dyYW1JbmZvKGdsLCBbdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcl0pO1xyXG5sZXQgbW91c2UgPSBbMCwgMF07XHJcblxyXG5jb25zdCBhcnJheXMgPSB7XHJcbiAgcG9zaXRpb246IFstMSwgLTEsIDAsIDEsIC0xLCAwLCAtMSwgMSwgMCwgLTEsIDEsIDAsIDEsIC0xLCAwLCAxLCAxLCAwXVxyXG59O1xyXG5jb25zdCBidWZmZXJJbmZvID0gdHdnbC5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cyhnbCwgYXJyYXlzKTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlcih0aW1lKSB7XHJcbiAgdHdnbC5yZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplKGdsLmNhbnZhcyk7XHJcbiAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgY29uc3QgdW5pZm9ybXMgPSB7XHJcbiAgICB1X3RpbWU6IHRpbWUgKiAwLjAwMSxcclxuICAgIHVfcmVzb2x1dGlvbjogW2dsLmNhbnZhcy53aWR0aCwgZ2wuY2FudmFzLmhlaWdodF0sXHJcbiAgICB1X21vdXNlOiBtb3VzZVxyXG4gIH07XHJcblxyXG4gIGdsLnVzZVByb2dyYW0ocHJvZ3JhbUluZm8ucHJvZ3JhbSk7XHJcbiAgdHdnbC5zZXRCdWZmZXJzQW5kQXR0cmlidXRlcyhnbCwgcHJvZ3JhbUluZm8sIGJ1ZmZlckluZm8pO1xyXG4gIHR3Z2wuc2V0VW5pZm9ybXMocHJvZ3JhbUluZm8sIHVuaWZvcm1zKTtcclxuICB0d2dsLmRyYXdCdWZmZXJJbmZvKGdsLCBidWZmZXJJbmZvKTtcclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XHJcbn1cclxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGUgPT4ge1xyXG4gIG1vdXNlWzBdID0gZS5wYWdlWDtcclxuICBtb3VzZVsxXSA9IGUucGFnZVk7XHJcbn0pO1xyXG4iXX0=
