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
import SignupScreen from './src/screens/SignupScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import TransactionScreen from './src/screens/TransactionScreen';
import FeaturedProductsScreen from './src/screens/FeaturedProductsScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import EmailSentScreen from './src/screens/FlashMessageScreens/EmailSentScreen';
import PhoneVerifiedScreen from './src/screens/FlashMessageScreens/PhoneVerifiedScreen';
import OfferSentScreen from './src/screens/FlashMessageScreens/OfferSentScreen';
import TransactionPendingScreen from './src/screens/FlashMessageScreens/TransactionPendingScreen';
import ReservationPlacedScreen from './src/screens/FlashMessageScreens/ReservationPlacedScreen';
import { useAuth } from './src/contexts/AuthContext';

const Stack = createStackNavigator();

export default function NavigationDev() {
  const { state } = useAuth();
  console.log({ state });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NavigationList" headerMode="none">
        <Stack.Screen
          name="NavigationList"
          component={NavigationList}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
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
          name="SignupScreen"
          component={SignupScreen}
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
        <Stack.Screen
          name="FeaturedProductsScreen"
          component={FeaturedProductsScreen}
        />
        <Stack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
        />
        <Stack.Screen
          name="TransactionScreen"
          component={TransactionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
