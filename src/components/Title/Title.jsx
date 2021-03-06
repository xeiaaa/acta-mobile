import React from 'react';
import PropTypes from 'prop-types';

// Components
import Text from '../Text/Text';
import { typography } from '../../styles';

const Title = ({ text, style }) => (
  <Text style={
    {
      ...typography.title,
      ...style,
    }
  }
  >
    { text }
  </Text>
);

Title.defaultProps = {
  text: '',
  style: {},
};

Title.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
};

export default Title;
