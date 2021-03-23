import React from 'react';
import {
  Text as RNText,
} from 'react-native';
import PropTypes from 'prop-types';

// import { button, colors } from '../../styles';

const Text = ({ style, children }) => (
  <RNText style={{
    fontSize: 15,
    fontFamily: 'Avenir',
    ...style,
  }}
  >
    { children }
  </RNText>
);

Text.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
};

Text.defaultProps = {
  children: '',
  style: {},
};

export default Text;
