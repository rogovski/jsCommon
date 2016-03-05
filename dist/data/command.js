'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uuid = require('../crypto/uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _definer = require('../util/definer');

var _definer2 = _interopRequireDefault(_definer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * BASE COMMAND OBJECT
 */

var COMMAND = function COMMAND(options) {
  _classCallCheck(this, COMMAND);

  var _options = options || {};
  /*
   * command id
   */
  _definer2.default.public.readonly(this, 'commandId', _options.commandId || _uuid2.default.v4());
  /*
   * command timestamp
   */
  _definer2.default.public.readonly(this, 'timestamp', _options.timestamp || Date.now());
};

exports.default = COMMAND;