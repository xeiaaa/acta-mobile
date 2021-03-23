import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import Badge from '../Badge/Badge';
import { sizing } from '../../styles';

// import { colors } from '../../styles';

const Badges = ({ badges }) => (

  <View style={styles.badges}>
    {
      badges.map((badge, key) => (
        <Badge key={key.toString()} text={badge} />
      ))
    }
  </View>
);

Badges.propTypes = {
  badges: PropTypes.array,
};

Badges.defaultProps = {
  badges: [],
};

const styles = StyleSheet.create({
  badges: { flexDirection: 'row', marginBottom: sizing.margin.s },
});

export default Badges;
