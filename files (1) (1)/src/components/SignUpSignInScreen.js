import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function SignUpSignInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up or Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <Button
        title="Sign In"
        onPress={() => navigation.navigate('Dashboard')}
      />
      <Text style={styles.orText}>OR</Text>
      <Button title="Sign In with Google" color="#DB4437" />
      <Button title="Sign In with Apple" color="#000000" />
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
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  orText: {
    marginVertical: 10,
    fontSize: 16,
  },
});