import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { AuthProvider } from './src/contexts/AuthContext';
import Navigation from './Navigation';

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
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
