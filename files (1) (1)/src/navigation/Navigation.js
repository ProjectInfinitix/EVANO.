import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import WelcomeScreen from '../components/WelcomeScreen';
import SignUpSignInScreen from '../components/SignUpSignInScreen';
import FitnessTracker from '../components/FitnessTracker';
import FoodScanner from '../components/FoodScanner';
import MoodCheckIn from '../components/MoodCheckIn';
import Dashboard from '../components/Dashboard';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpSignIn"
          component={SignUpSignInScreen}
          options={{ title: 'Sign Up or Sign In' }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: 'Dashboard' }}
        />
        <Stack.Screen
          name="FitnessTracker"
          component={FitnessTracker}
          options={{ title: 'Fitness Tracker' }}
        />
        <Stack.Screen
          name="FoodScanner"
          component={FoodScanner}
          options={{ title: 'Food Scanner' }}
        />
        <Stack.Screen
          name="MoodCheckIn"
          component={MoodCheckIn}
          options={{ title: 'Mood Check-In' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}