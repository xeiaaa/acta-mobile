import React from 'react';
import {
  View, StyleSheet, StatusBar, Image,
} from 'react-native';
import PropTypes from 'prop-types';

import Button from '../components/Button/Button';
import actatrax from '../../assets/actatrax.png';

const OnboardingScreen = ({ navigation }) => (
  <View style={[styles.container, styles.absoluteCenter]}>
    <StatusBar barStyle="light-content" />
    <View style={[styles.circle, styles.absoluteCenter]}>
      <Image source={actatrax} style={styles.icon} />
    </View>

    <Button
      text="sign in"
      type="white"
      outline
      buttonStyle={{
        marginTop: 20,
      }}
      touchableProps={{
        onPress: () => navigation.navigate('SigninScreen'),
      }}
    />
    <Button
      text="sign up"
      type="primary"
      buttonStyle={{
        marginTop: 20,
      }}
    />
  </View>
);

OnboardingScreen.defaultProps = {
  navigation: null,
};

OnboardingScreen.propTypes = {
  navigation: PropTypes.any,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#000',
  },
  icon: { width: 200, height: 200 },
  circle: {
    borderRadius: 140,
    width: 280,
    height: 280,
    backgroundColor: '#fff',
  },
  absoluteCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnboardingScreen;
