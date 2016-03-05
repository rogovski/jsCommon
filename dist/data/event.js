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
 * BASE EVENT OBJECT
 */

var EVENT = function EVENT(options) {
  _classCallCheck(this, EVENT);

  var _options = options || {};
  /*
   * event id
   */
  _definer2.default.public.readonly(this, 'eventId', _options.eventId || _uuid2.default.v4());

  /*
   * command timestamp
   */
  _definer2.default.public.readonly(this, 'timestamp', _options.timestamp || Date.now());

  /*
   * correlation id
   */
  _definer2.default.public.readonly(this, 'correlationId', _options.correlationId || null);
};

exports.default = EVENT;