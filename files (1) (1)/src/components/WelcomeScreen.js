import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function WelcomeScreen({ navigation }) {
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
  },
  subtitle: {
    fontSize: 16,
    color: '#696969',
    marginBottom: 20,
  },
});