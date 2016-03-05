'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = compose;
exports.Left = Left;
exports.Pending = Pending;
exports.Right = Right;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _key_mirror = require('../util/key_mirror');

var _key_mirror2 = _interopRequireDefault(_key_mirror);

var _definer = require('../util/definer');

var _definer2 = _interopRequireDefault(_definer);

var _invariant = require('../validation/invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _EitherType = (0, _key_mirror2.default)({
  LEFT: null,
  PENDING: null,
  RIGHT: null
});

/**
 * base either object
 */

var _Either = function _Either(data) {
  _classCallCheck(this, _Either);

  _definer2.default.public.readonly(this, 'data', data);
};

/**
 * left object. usually specifies an error
 */


var _Left = function (_Either2) {
  _inherits(_Left, _Either2);

  function _Left(data) {
    _classCallCheck(this, _Left);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_Left).call(this, data));

    _definer2.default.public.readonly(_this, 'type', _EitherType.LEFT);
    return _this;
  }

  return _Left;
}(_Either);

/**
 * pending object.
 */


var _Pending = function (_Either3) {
  _inherits(_Pending, _Either3);

  function _Pending(data) {
    _classCallCheck(this, _Pending);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(_Pending).call(this, data));

    _definer2.default.public.readonly(_this2, 'type', _EitherType.PENDING);
    return _this2;
  }

  return _Pending;
}(_Either);

/**
 * right object. usually specifies a success
 */


var _Right = function (_Either4) {
  _inherits(_Right, _Either4);

  function _Right(data) {
    _classCallCheck(this, _Right);

    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(_Right).call(this, data));

    _definer2.default.public.readonly(_this3, 'type', _EitherType.RIGHT);
    return _this3;
  }

  return _Right;
}(_Either);

/**
 * compose operator. see haskell (<=<)
 * TODO: maybe add invariant a-la 
 * https://github.com/facebook/immutable-js/blob/master/src/utils/invariant.js
 * throws if funcs.length <= 1 'composition requires two or more funcs'
 */


function compose() /* ...function list */{
  var funcs = Array.apply(null, arguments);
  var len = funcs.length;
  (0, _invariant2.default)(len >= 2, 'composition requires at least 2 arguments');
  return function (val) {
    var either = funcs[len - 1](val);
    switch (either.type) {
      case _EitherType.LEFT:
      case _EitherType.PENDING:
        return either;
      default:
        // _EitherType.RIGHT
        for (var i = len - 2; i >= 0; i--) {
          either = funcs[i](either.data);
          if (either.type !== _EitherType.RIGHT) {
            break;
          }
        }
        return either;
    }
  };
}

/**
 * left helper.
 */
function Left(data) {
  return new _Left(data);
};

/**
 * pending helper.
 */
function Pending(data) {
  return new _Pending(data);
};

/**
 * right helper.
 */
function Right(data) {
  return new _Right(data);
};