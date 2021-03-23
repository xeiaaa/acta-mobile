import React from 'react';
import {
  View, StyleSheet, StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import Text from '../Text/Text';

import { colors, sizing } from '../../styles';

const CustomHeaderLayout = ({ children, title }) => (
  <View style={[styles.container]}>
    <StatusBar barStyle="light-content" />
    <View style={styles.header}>
      {/* <Ionicons name="arrow-back-outline" size={24} color="white" /> */}
      <Text style={styles.headerTitle}>
        { title.toUpperCase() }
      </Text>
    </View>
    <View style={styles.content}>
      { children }
    </View>
  </View>
);

CustomHeaderLayout.defaultProps = {
  children: null,
  title: '',
};

CustomHeaderLayout.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  absoluteCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 90,
    // paddingBottom: 32,
    paddingBottom: sizing.padding.xl,
    marginTop: sizing.margin.l,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerTitle: {
    color: colors.white,
    fontSize: 13,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingTop: sizing.padding.xl,
  },
});

export default CustomHeaderLayout;
