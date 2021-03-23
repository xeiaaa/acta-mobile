import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import Text from '../Text/Text';

import { button, colors, typography } from '../../styles';

const Button = ({
  buttonStyle, textStyle, text, type, touchableProps, outline,
}) => {
  let defaultStyle = { ...button.button };

  if (outline) {
    defaultStyle = { ...defaultStyle, ...button.outline, borderColor: colors[type] };
  } else {
    defaultStyle = { ...defaultStyle, ...button[type] };
  }

  return (
    <TouchableOpacity
      style={{
        ...defaultStyle,
        ...buttonStyle,
      }}
      activeOpacity={0.7}
      {...touchableProps}
    >
      <Text style={{
        ...typography.buttonText,
        color: outline ? colors[type] : type === 'white' ? colors.text.black : colors.white,
        ...textStyle,
      }}
      >
        { text.toUpperCase() }
      </Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  buttonStyle: {},
  textStyle: {},
  text: '',
  type: 'primary',
  touchableProps: {},
  outline: false,
};

Button.propTypes = {
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
  text: PropTypes.string,
  type: PropTypes.oneOf(['white', 'primary', 'secondary', 'accent', 'disabled', 'danger', 'warning', 'fb', 'google']),
  touchableProps: PropTypes.object,
  outline: PropTypes.bool,
};

export default Button;
