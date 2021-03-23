import React from 'react';
import {
  Alert,
} from 'react-native';

// Components
import FlashMessageScreen from '../../components/Layouts/FlashMessageScreen';

import emailSentIcon from '../../../assets/check-icon.png';

const PhoneVerifiedScreen = () => (
  <FlashMessageScreen
    source={emailSentIcon}
    title="Phone Verified"
    subtitle="Congratulations, your phone number has been verified. You can now start using the app."
    buttonText="Continue"
    buttonOnPress={() => { Alert.alert(); }}
  />
);

export default PhoneVerifiedScreen;
