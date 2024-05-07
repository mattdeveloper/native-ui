"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = props => {
  const {
    children
  } = props;
  const content = typeof children === 'string' || typeof children === 'number' ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, children) : children;
  return /*#__PURE__*/_react.default.createElement(_styles.Wrapper, null, content);
};
exports.Button = Button;
//# sourceMappingURL=index.js.map