import React from 'react';
import {
  Alert,
} from 'react-native';

// Components
import FlashMessageScreen from '../../components/Layouts/FlashMessageScreen';

import emailSentIcon from '../../../assets/check-icon.png';

const OfferSentScreen = () => (
  <FlashMessageScreen
    source={emailSentIcon}
    title="Offer Sent"
    subtitle="Congratulations, your offer was sent to the Bid Master."
    buttonText="Continue"
    buttonOnPress={() => { Alert.alert(); }}
  />
);

export default OfferSentScreen;
