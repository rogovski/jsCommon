'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.block = block;
exports.lines = lines;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function block() {
  _lodash2.default.forEach(arguments, function (l) {
    acc.push(l);
  });

  return acc;
}

function lines() {
  _lodash2.default.forEach(arguments, function (l) {
    acc.push(l);
  });

  return acc.join('\n');
}