'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// todo refactor to js common

/**
 * http://stackoverflow.com/questions/31089801/extending-error-in-javascript-with-es6-syntax
 */

var ExtendableError = exports.ExtendableError = function (_Error) {
  _inherits(ExtendableError, _Error);

  function ExtendableError(message) {
    _classCallCheck(this, ExtendableError);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ExtendableError).call(this, message));

    _this.name = _this.constructor.name;
    _this.message = message;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(_this, _this.constructor);
    } else {
      _this.stack = new Error(message).stack;
    }
    return _this;
  }

  return ExtendableError;
}(Error);

var CommandValidationError = exports.CommandValidationError = function (_ExtendableError) {
  _inherits(CommandValidationError, _ExtendableError);

  function CommandValidationError(message, errors, fields) {
    _classCallCheck(this, CommandValidationError);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(CommandValidationError).call(this, message));

    _this2.errors = errors || [];
    _this2.fields = fields || {};
    return _this2;
  }

  return CommandValidationError;
}(ExtendableError);

var SingleResultNotReturnedError = exports.SingleResultNotReturnedError = function (_ExtendableError2) {
  _inherits(SingleResultNotReturnedError, _ExtendableError2);

  function SingleResultNotReturnedError(message, errors, fields) {
    _classCallCheck(this, SingleResultNotReturnedError);

    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(SingleResultNotReturnedError).call(this, message));

    _this3.errors = errors || [];
    _this3.fields = fields || {};
    return _this3;
  }

  return SingleResultNotReturnedError;
}(ExtendableError);