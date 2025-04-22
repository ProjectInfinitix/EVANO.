import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FoodScannerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Scanner</Text>
      {/* Add camera UI + nutrition details */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E3F',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});
