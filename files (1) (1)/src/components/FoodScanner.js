import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

export default function FoodScanner() {
  const [food, setFood] = useState('');
  const [results, setResults] = useState([]);
  const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual API key

  const fetchNutritionData = async () => {
    try {
      const response = await fetch(`https://api.calorieninjas.com/v1/nutrition?query=${food}`, {
        headers: { 'X-Api-Key': API_KEY },
      });
      const data = await response.json();
      setResults(data.items || []);
    } catch (error) {
      console.error('Error fetching nutrition data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Scanner</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter food name (e.g., apple)"
        value={food}
        onChangeText={setFood}
      />
      <Button title="Scan Food" onPress={fetchNutritionData} />
      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text style={styles.resultText}>{item.name}</Text>
            <Text>Calories: {item.calories}</Text>
            <Text>Protein: {item.protein_g}g</Text>
            <Text>Carbs: {item.carbohydrates_total_g}g</Text>
            <Text>Fats: {item.fat_total_g}g</Text>
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  resultItem: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});