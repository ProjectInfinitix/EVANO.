import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function FitnessTracker() {
  const [activity, setActivity] = useState('');
  const [calories, setCalories] = useState('');
  const [log, setLog] = useState([]);

  const handleAddActivity = () => {
    if (activity && calories) {
      setLog([...log, { activity, calories }]);
      setActivity('');
      setCalories('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fitness Tracker</Text>
      <TextInput
        style={styles.input}
        placeholder="Activity Type (e.g., Running)"
        value={activity}
        onChangeText={setActivity}
      />
      <TextInput
        style={styles.input}
        placeholder="Calories Burned"
        value={calories}
        onChangeText={setCalories}
        keyboardType="numeric"
      />
      <Button title="Add Activity" onPress={handleAddActivity} />
      <Text style={styles.logTitle}>Activity Log</Text>
      {log.map((entry, index) => (
        <Text key={index} style={styles.logItem}>
          {entry.activity} - {entry.calories} cal
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5DC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6A5ACD',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  logTitle: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    color: '#696969',
  },
  logItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});