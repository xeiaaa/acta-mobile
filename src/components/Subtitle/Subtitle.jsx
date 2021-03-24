import React from 'react';
import PropTypes from 'prop-types';

// Components
import Text from '../Text/Text';
import { typography } from '../../styles';

const Subtitle = ({ text, style }) => (
  <Text style={
    {
      ...typography.subtitle,
      ...style,
    }
  }
  >
    { text }
  </Text>
);

Subtitle.defaultProps = {
  text: '',
  style: {},
};

Subtitle.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
};

export default Subtitle;
