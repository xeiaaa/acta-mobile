import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

// Screens
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Navigation
import NavigationList from './src/screens/NavigationList';
import OnboardingScreen from './src/screens/OnboardingScreen';
import SigninScreen from './src/screens/SigninScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import EmailSentScreen from './src/screens/FlashMessageScreens/EmailSentScreen';
import PhoneVerifiedScreen from './src/screens/FlashMessageScreens/PhoneVerifiedScreen';
import OfferSentScreen from './src/screens/FlashMessageScreens/OfferSentScreen';
import TransactionPendingScreen from './src/screens/FlashMessageScreens/TransactionPendingScreen';
import ReservationPlacedScreen from './src/screens/FlashMessageScreens/ReservationPlacedScreen';

// Fonts

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Avenir: require('./assets/fonts/Avenir-LT-Std-65-Medium-Oblique_5174.ttf'),
    AvenirHeavy: require('./assets/fonts/FontsFree-Net-AvenirLTStd-Heavy.ttf'),
    AvenirBook: require('./assets/fonts/AvenirBook.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ReservationPlacedScreen" headerMode="none">
        <Stack.Screen
          name="NavigationList"
          component={NavigationList}
        />
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
        />
        <Stack.Screen
          name="SigninScreen"
          component={SigninScreen}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name="EmailSentScreen"
          component={EmailSentScreen}
        />
        <Stack.Screen
          name="PhoneVerifiedScreen"
          component={PhoneVerifiedScreen}
        />
        <Stack.Screen
          name="OfferSentScreen"
          component={OfferSentScreen}
        />
        <Stack.Screen
          name="TransactionPendingScreen"
          component={TransactionPendingScreen}
        />
        <Stack.Screen
          name="ReservationPlacedScreen"
          component={ReservationPlacedScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}