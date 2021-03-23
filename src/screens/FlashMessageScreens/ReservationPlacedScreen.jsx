import React from 'react';
import {
  Alert,
} from 'react-native';

// Components
import FlashMessageScreen from '../../components/Layouts/FlashMessageScreen';

import emailSentIcon from '../../../assets/check-icon.png';

const ReservationPlacedScreen = () => (
  <FlashMessageScreen
    source={emailSentIcon}
    title="Reservation placed"
    subtitle="Your reservation #212423 was placed with success. You can see the status of the order at any time."
    buttonText="Continue"
    buttonOnPress={() => { Alert.alert(); }}
  />
);

export default ReservationPlacedScreen;
