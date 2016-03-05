'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureProps = ensureProps;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ensure object has properties. throw
 * exception if not present
 */
function ensureProps(obj, propLs) {
  _lodash2.default.forEach(propLs, function (e) {
    if (!_lodash2.default.has(obj, e)) {
      throw new Error('ensureProps FAILED');
    }
  });
  return true;
}