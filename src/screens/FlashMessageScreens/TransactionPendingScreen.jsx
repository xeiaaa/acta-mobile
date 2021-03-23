import React from 'react';
import {
  Alert,
} from 'react-native';

// Components
import FlashMessageScreen from '../../components/Layouts/FlashMessageScreen';

import emailSentIcon from '../../../assets/check-icon.png';

const TransactionPendingScreen = () => (
  <FlashMessageScreen
    source={emailSentIcon}
    title="Transaction Pending"
    subtitle=""
    buttonText="Continue"
    buttonOnPress={() => { Alert.alert(); }}
  />
);

export default TransactionPendingScreen;
