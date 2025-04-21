# Evano - Fitness and Wellness App

Evano is a mobile application designed to help users track their fitness, nutrition, and emotional wellness. It provides a calming and user-friendly interface with features like fitness tracking, mood journaling, and food scanning.

---

## Features

### Foundational Features
1. **Welcome Screen**: A calming introduction to the app.
2. **Sign-Up/Sign-In Screen**: User authentication with email, Apple, or Google.
3. **Fitness Tracker**: Log workouts, calories burned, and activity type.
4. **Food Scanner**: Scan barcodes or input food names to get nutrition information.
5. **Mood Check-In**: Track daily mood using emojis or text and write journal entries.
6. **Dashboard**: View a summary of calories consumed, calories burned, and mood trends.
7. **Navigation**: Seamless navigation between Home, Track, Mood, and Settings screens.

### Additional Features (Upcoming)
1. Personalized goals and recommendations.
2. Integration with wearables (e.g., Google Fit, Apple Health).
3. Guided workouts with video tutorials.
4. Hydration tracker.
5. Community features (forums, challenges).
6. Push notifications for reminders.
7. Sleep tracker.
8. Monthly reports with progress summaries.
9. Gamification with badges and streaks.
10. Dark mode and customizable themes.
11. Animated transitions for smoother navigation.
12. Monetization with premium features.

---

## File Structure
```
evano/
├── assets/
├── src/
│   ├── components/
│   │   ├── WelcomeScreen.js
│   │   ├── SignUpSignInScreen.js
│   │   ├── FitnessTracker.js
│   │   ├── FoodScanner.js
│   │   ├── MoodCheckIn.js
│   │   ├── Dashboard.js
│   │   ├── Navigation.js
│   ├── api/
│   │   ├── nutritionAPI.js
│   ├── App.js
├── package.json
└── README.md
```

---

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ProjectInfinitix/evano.git
   cd evano
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Run the app on an emulator or physical device using Expo or React Native tools.

---

## API Integration

### Food Scanner
The Food Scanner feature uses the [CalorieNinjas API](https://calorieninjas.com/) to fetch nutrition information.

- **Base URL**: `https://api.calorieninjas.com/v1/nutrition`
- **API Key**: Replace `YOUR_API_KEY_HERE` in `src/api/nutritionAPI.js` with your API key.

---

## Contributing

We welcome contributions from the community to enhance Evano. Feel free to open issues or submit pull requests.

---

## License

This project is licensed under the [MIT License](LICENSE).