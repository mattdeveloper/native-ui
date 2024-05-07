import React from 'react';
import { Text } from 'react-native';
import { Wrapper } from './styles';
export const Button = props => {
  const {
    children
  } = props;
  const content = typeof children === 'string' || typeof children === 'number' ? /*#__PURE__*/React.createElement(Text, null, children) : children;
  return /*#__PURE__*/React.createElement(Wrapper, null, content);
};
//# sourceMappingURL=index.js.map