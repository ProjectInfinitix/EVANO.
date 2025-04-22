import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function MoodCheckInScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood Check-In</Text>
      <TextInput style={styles.input} placeholder="How are you feeling?" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B9A9FB',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
  },
});
