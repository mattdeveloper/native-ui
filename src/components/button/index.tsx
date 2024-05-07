import React from 'react';
import { Text } from 'react-native';

import type { ButtonProps } from './types';
import { Wrapper } from './styles';

export const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;

  const content =
    typeof children === 'string' || typeof children === 'number' ? (
      <Text>{children}</Text>
    ) : (
      children
    );

  return <Wrapper>{content}</Wrapper>;
};
