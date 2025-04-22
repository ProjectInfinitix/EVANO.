// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import SignUpSignInScreen from './screens/SignUpSignInScreen';
import DashboardScreen from './screens/DashboardScreen';
import FoodScannerScreen from './screens/FoodScannerScreen';
import MoodCheckInScreen from './screens/MoodCheckInScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignUpSignIn" component={SignUpSignInScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="FoodScanner" component={FoodScannerScreen} />
        <Stack.Screen name="MoodCheckIn" component={MoodCheckInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
