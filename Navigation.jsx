import React, { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Ionicons } from '@expo/vector-icons';

// Screens
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Navigation
import NavigationList from './src/screens/NavigationList';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import TransactionScreen from './src/screens/TransactionScreen';
import FeaturedProductsScreen from './src/screens/FeaturedProductsScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import EmailSentScreen from './src/screens/FlashMessageScreens/EmailSentScreen';
/*
import PhoneVerifiedScreen from './src/screens/FlashMessageScreens/PhoneVerifiedScreen';
import OfferSentScreen from './src/screens/FlashMessageScreens/OfferSentScreen';
import TransactionPendingScreen from './src/screens/FlashMessageScreens/TransactionPendingScreen';
import ReservationPlacedScreen from './src/screens/FlashMessageScreens/ReservationPlacedScreen';
*/
import { useAuth } from './src/contexts/AuthContext';
import { me } from './src/lib/api';
import { colors } from './src/styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const OnboardingStack = () => (
  <Stack.Navigator
    initialRouteName="HomeScreen"
    headerMode="none"
    screenOptions={{
      animationEnabled: true,
    }}
  >
    {/* <Stack.Screen
      name="OnboardingScreen"
      component={OnboardingScreen}
    /> */}
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
      name="NavigationList"
      component={NavigationList}
    />
  </Stack.Navigator>
);

const ProductsStack = () => (
  <Stack.Navigator
    initialRouteName="HomeScreen"
    headerMode="none"
  >
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
    />
    <Stack.Screen
      name="FeaturedProductsScreen"
      component={FeaturedProductsScreen}
    />
    <Stack.Screen
      name="ProductDetailsScreen"
      component={ProductDetailsScreen}
    />
  </Stack.Navigator>
);

const SettingsStack = () => (
  <Stack.Navigator
    initialRouteName="SettingsScreen"
    headerMode="none"
  >
    <Stack.Screen
      name="SettingsScreen"
      component={SettingsScreen}
    />
    <Stack.Screen
      name="TransactionScreen"
      component={TransactionScreen}
    />
  </Stack.Navigator>
);

const TransactionsStack = () => (
  <Stack.Navigator
    initialRouteName="TransactionScreen"
    headerMode="none"
  >
    <Stack.Screen
      name="TransactionScreen"
      component={TransactionScreen}
    />
  </Stack.Navigator>
);

const ActivitiesStack = () => (
  <Stack.Navigator
    initialRouteName="EmailSentScreen"
    headerMode="none"
  >
    <Stack.Screen
      name="EmailSentScreen"
      component={EmailSentScreen}
    />
  </Stack.Navigator>
);

// const LoggedInStack = () => (
//   <Stack.Navigator
//     initialRouteName="SettingsScreen"
//     headerMode="none"
//     screenOptions={{
//       animationEnabled: true,
//     }}
//   >
//     <Stack.Screen
//       name="HomeScreen"
//       component={HomeScreen}
//     />
//     <Stack.Screen
//       name="SettingsScreen"
//       component={SettingsScreen}
//     />
//     <Stack.Screen
//       name="EmailSentScreen"
//       component={EmailSentScreen}
//     />
//     <Stack.Screen
//       name="PhoneVerifiedScreen"
//       component={PhoneVerifiedScreen}
//     />
//     <Stack.Screen
//       name="OfferSentScreen"
//       component={OfferSentScreen}
//     />
//     <Stack.Screen
//       name="TransactionPendingScreen"
//       component={TransactionPendingScreen}
//     />
//     <Stack.Screen
//       name="ReservationPlacedScreen"
//       component={ReservationPlacedScreen}
//     />
//     <Stack.Screen
//       name="FeaturedProductsScreen"
//       component={FeaturedProductsScreen}
//     />
//     <Stack.Screen
//       name="ProductDetailsScreen"
//       component={ProductDetailsScreen}
//     />
//     <Stack.Screen
//       name="TransactionScreen"
//       component={TransactionScreen}
//     />
//   </Stack.Navigator>
// );

// eslint-disable-next-line
const createTabBarOption = (iconName) => (({ focused }) => (
  <Ionicons
    name={iconName}
    size={24}
    color={focused ? colors.primary : colors.black}
  />
));

const Tabs = () => (
  <Tab.Navigator tabBarOptions={{
    activeTintColor: colors.primary,
    inactiveTintColor: colors.black,
  }}
  >
    <Tab.Screen
      name="Home"
      component={ProductsStack}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: createTabBarOption('home-outline'),
      }}
    />
    <Tab.Screen
      name="Activities"
      component={ActivitiesStack}
      options={{
        tabBarLabel: 'Activities',
        tabBarIcon: createTabBarOption('grid-outline'),
      }}
    />
    <Tab.Screen
      name="Transactions"
      component={TransactionsStack}
      options={{
        tabBarLabel: 'Transactions',
        tabBarIcon: createTabBarOption('receipt-outline'),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsStack}
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: createTabBarOption('settings-outline'),
      }}
    />

  </Tab.Navigator>
);

export default function Navigation() {
  const { state: authState, dispatch } = useAuth();
  const [isLoadingMe, setIsLoadingMe] = useState(false);
  // console.log({ authState });

  useEffect(() => {
    const init = async () => {
      const token = await SecureStore.getItemAsync('token');
      console.log({ token });
      if (token) {
        setIsLoadingMe(true);
        try {
          const { data } = await me();
          dispatch({
            type: 'signin',
            payload: {
              token,
              user: data,
            },
          });
        } catch (err) {
          console.log(err);
          console.log(err.response);
        } finally {
          setIsLoadingMe(false);
        }
      }
    };
    init();
  }, []);

  const isLoggedIn = authState.token && authState.user;

  if (isLoadingMe) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnboardingStack"
        headerMode="none"
        screenOptions={{
          animationEnabled: false,
        }}
      >
        {
          !isLoggedIn ? (
            <Stack.Screen
              name="OnboardingStack"
              component={OnboardingStack}
            />
          ) : (
            <Stack.Screen
              name="Tabs"
              component={Tabs}
            />
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
