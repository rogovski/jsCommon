"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  public: {
    readonly: function readonly(obj, prop, value) {
      Object.defineProperty(obj, prop, {
        enumerable: true,
        configurable: false,
        writable: false,
        value: value
      });
    },
    mutable: function mutable(obj, prop, value) {
      Object.defineProperty(obj, prop, {
        enumerable: true,
        configurable: false,
        writable: true,
        value: value
      });
    }
  },
  private: {
    readonly: function readonly(obj, prop, value) {
      Object.defineProperty(obj, prop, {
        enumerable: false,
        configurable: false,
        writable: false,
        value: value
      });
    },
    mutable: function mutable(obj, prop, value) {
      Object.defineProperty(obj, prop, {
        enumerable: false,
        configurable: false,
        writable: true,
        value: value
      });
    }
  }
};