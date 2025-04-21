import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>What would you like to do today?</Text>
      <Button
        title="Fitness Tracker"
        onPress={() => navigation.navigate('FitnessTracker')}
        color="#6A5ACD"
      />
      <Button
        title="Food Scanner"
        onPress={() => navigation.navigate('FoodScanner')}
        color="#6A5ACD"
      />
      <Button
        title="Mood Check-In"
        onPress={() => navigation.navigate('MoodCheckIn')}
        color="#6A5ACD"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5DC',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6A5ACD',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#696969',
    marginBottom: 40,
  },
});