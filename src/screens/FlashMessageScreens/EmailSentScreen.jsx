import React from 'react';
import {
  Alert,
} from 'react-native';

// Components
import FlashMessageScreen from '../../components/Layouts/FlashMessageScreen';

import emailSentIcon from '../../../assets/email-sent-icon.png';

const EmailSentScreen = () => (
  <FlashMessageScreen
    source={emailSentIcon}
    title="Check your email"
    subtitle="We've sent you instructions on how to reset the password (also check the Spam folder)."
    buttonText="Open my mail client"
    buttonOnPress={() => { Alert.alert(); }}
  />
);

export default EmailSentScreen;
