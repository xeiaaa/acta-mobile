import React from 'react';
import {
  Text as RNText,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  sizing, colors, typography,
} from '../../styles';
import withTextStyling from '../../hoc/withTextStyling';

const Text = ({ style, children, type }) => {
  const [font, size, color] = type.split('-');

  let defaultStyles = {};

  if (font) {
    defaultStyles = { ...defaultStyles, ...typography[font] };
  }

  if (size) {
    // check if integer
    const intSize = parseInt(size, 10);
    if (intSize) {
      defaultStyles = { ...defaultStyles, fontSize: intSize };
    } else {
      defaultStyles = { ...defaultStyles, fontSize: sizing.font[size] };
    }
  }

  if (color) {
    // check if hex
    if (color.indexOf('#') === 0 || color.indexOf('rgb') === 0) {
      defaultStyles = { ...defaultStyles, color };
    } else {
      defaultStyles = { ...defaultStyles, color: colors[color] };
    }
  }

  return (
    <RNText style={{
      fontSize: sizing.font.s,
      fontFamily: 'Avenir',
      ...defaultStyles,
      ...style,
    }}
    >
      { children }
    </RNText>
  );
};

Text.defaultProps = {
  children: '',
  style: {},
  type: '',
};

Text.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  type: PropTypes.string,
};

export default withTextStyling(Text);
