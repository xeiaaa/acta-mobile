import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import Text from '../Text/Text';

import {
  colors, sizing, typography, globals,
} from '../../styles';

const Specifications = ({ data }) => (
  <View style={styles.container}>
    {
      Object.entries(data).map(([label, value], key) => (
        <View style={styles.row} key={key.toString()}>
          <Text style={styles.label}>
            {label.toUpperCase()}
            :
          </Text>
          <Text style={styles.value}>
            {value}
          </Text>
        </View>
      ))
    }

  </View>

);

Specifications.defaultProps = {
  data: {},
};

Specifications.propTypes = {
  data: PropTypes.object,
};

const styles = StyleSheet.create({
  container: { width: '100%', paddingHorizontal: sizing.padding.l },
  row: {
    ...globals.flexRow,
    justifyContent: 'space-between',
    flex: 1,
    paddingVertical: sizing.padding.l,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  label: {
    color: colors.midGrey,
    fontSize: sizing.font.s,
    ...typography.heavy,
    // justifyContent: 'center',
  },
  value: {
    color: colors.text.black,
    fontSize: sizing.font.s,
    ...typography.light,
  },
});

export default Specifications;
