import axios from 'axios';

const API_URL = 'https://api.calorieninjas.com/v1/nutrition';
const API_KEY = 'YOUR_API_KEY_HERE';

const getNutrition = async (foodName) => {
  try {
    const response = await axios.get(`${API_URL}?query=${foodName}`, {
      headers: { 'X-Api-Key': API_KEY },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching nutrition data:', error);
    return null;
  }
};

export default { getNutrition };