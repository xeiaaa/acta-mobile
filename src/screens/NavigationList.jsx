import React from 'react';
import {
  Text, TouchableOpacity, ScrollView, StyleSheet, StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';

import navigationList from '../config/navigationList';

const NavigationList = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <StatusBar barStyle="dark-content" />

    <Text style={styles.title}>Navigation List</Text>

    {
      navigationList.map((screen, key) => (
        <TouchableOpacity
          key={key.toString()}
          onPress={() => navigation.navigate(screen.name)}
          style={styles.button}
        >
          <Text style={styles.text}>{screen.name}</Text>
        </TouchableOpacity>
      ))
    }
  </ScrollView>
);

NavigationList.propTypes = {
  navigation: PropTypes.any,
};

NavigationList.defaultProps = {
  navigation: null,
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  text: {
    fontSize: 20,
  },
});

export default NavigationList;
