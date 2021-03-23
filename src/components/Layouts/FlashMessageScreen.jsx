import React from 'react';
import {
  View, Image, StatusBar, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

// Components
import Button from '../Button/Button';
import Title from '../Title/Title';

import emailSentIcon from '../../../assets/email-sent-icon.png';
import { colors } from '../../styles';

const FlashMessageScreen = ({
  source, title, subtitle, buttonText, buttonOnPress,
}) => (
  <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
    <StatusBar barStyle="dark-content" />
    <TouchableOpacity
      style={{
        position: 'absolute',
        top: 36,
        right: 30,
        zIndex: 1000,
      }}
      activeOpacity={0.7}
      onPress={() => {}}
    >
      <Ionicons
        name="close-outline"
        size={32}
        color={colors.black}
      />
    </TouchableOpacity>

    <View style={{ alignItems: 'center', marginBottom: 32 }}>
      <Image source={source} />
    </View>
    <Title title={title} subtitle={subtitle} />

    <View style={{ alignItems: 'center' }}>
      <Button
        text={buttonText}
        type="secondary"
        touchableProps={{
          onPress: buttonOnPress,
        }}
      />
    </View>
  </View>
);

FlashMessageScreen.defaultProps = {
  source: emailSentIcon,
  title: 'Check your email',
  subtitle: 'We\'ve sent you instructions on how to reset the password (also check the Spam folder).',
  buttonText: 'Open my mail client',
  buttonOnPress: () => {},
};
FlashMessageScreen.propTypes = {
  source: PropTypes.any,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  buttonOnPress: PropTypes.func,
};

export default FlashMessageScreen;
