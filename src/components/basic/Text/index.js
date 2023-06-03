import {Text as RNText} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import _style from './style';
import PropTypes from 'prop-types';

const Text = ({children, style, ...props}) => {
  const theme = useTheme();
  return (
    <RNText style={{..._style.text(theme?.dark), ...style}} {...props}>
      {children}
    </RNText>
  );
};
Text.propTypes = {
  children: PropTypes.node,
};

export default Text;
