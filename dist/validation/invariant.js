"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (condition, error) {
  if (!condition) throw new Error(error);
};