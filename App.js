// Main React Native app file
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry } from 'react-native';

const Stack = createStackNavigator();

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Evano</Text>
      <Text style={styles.subtitle}>Your fitness and wellness companion</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('SignUpSignIn')}
        color="#A9A9F5"
      />
    </View>
  );
}

function SignUpSignInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up or Sign In</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Sign In" onPress={() => navigation.navigate('Dashboard')} />
      <Text style={styles.orText}>OR</Text>
      <Button title="Sign In with Google" color="#DB4437" />
      <Button title="Sign In with Apple" color="#000000" />
    </View>
  );
}

function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>What would you like to do today?</Text>
      <Button
        title="Fitness Tracker"
        onPress={() => navigation.navigate('FitnessTracker')}
        color="#6A5ACD"
      />
    </View>
  );
}

function FitnessTracker() {
  const [activity, setActivity] = useState('');
  const [calories, setCalories] = useState('');
  const [log, setLog] = useState([]);

  const handleAddActivity = () => {
    if (activity && calories) {
      set
