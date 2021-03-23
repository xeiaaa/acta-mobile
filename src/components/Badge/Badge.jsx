import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import Text from '../Text/Text';

import {
  colors, typography, global, sizing,
} from '../../styles';

const Badge = ({ text, color, backgroundColor }) => (
  <View style={[styles.badge, { backgroundColor }]}>
    <Text style={{ ...typography.tag, color }}>{ text }</Text>
  </View>
);

Badge.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Badge.defaultProps = {
  text: '',
  color: colors.white,
  backgroundColor: colors.primary,
};

const styles = StyleSheet.create({
  badge: {
    ...global.absoluteCenter,
    height: 20,
    backgroundColor: colors.primary,
    paddingHorizontal: sizing.padding.s,
    borderRadius: 7,
    marginRight: sizing.margin.xxs,
  },
});

export default Badge;
