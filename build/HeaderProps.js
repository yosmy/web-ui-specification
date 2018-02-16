"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  left: _propTypes["default"].element,
  center: _propTypes["default"].element,
  right: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].bool])
};
exports["default"] = _default;