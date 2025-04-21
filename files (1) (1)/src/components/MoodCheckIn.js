import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, FlatList } from 'react-native';

export default function MoodCheckIn() {
  const [mood, setMood] = useState('');
  const [journal, setJournal] = useState('');
  const [log, setLog] = useState([]);

  const handleMoodCheckIn = () => {
    if (mood || journal) {
      setLog([...log, { mood, journal, date: new Date().toLocaleString() }]);
      setMood('');
      setJournal('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood Check-In</Text>
      <Text style={styles.subtitle}>How are you feeling today?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your mood (e.g., 😊 Happy)"
        value={mood}
        onChangeText={setMood}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Write a journal entry (optional)"
        value={journal}
        onChangeText={setJournal}
        multiline
      />
      <Button title="Check-In" onPress={handleMoodCheckIn} />
      <Text style={styles.logTitle}>Mood Log</Text>
      <FlatList
        data={log}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.logItem}>
            <Text style={styles.logDate}>{item.date}</Text>
            <Text style={styles.logMood}>{item.mood}</Text>
            <Text style={styles.logJournal}>{item.journal}</Text>
          </View>
        )}
      />
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
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    color: '#696969',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  logTitle: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    color: '#696969',
  },
  logItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  logDate: {
    fontSize: 12,
    color: '#A9A9A9',
  },
  logMood: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  logJournal: {
    fontSize: 16,
    color: '#555',
  },
});