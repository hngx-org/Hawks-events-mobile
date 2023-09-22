import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EventComponent from '../components/shared/EventComponent';
import {Calendar} from 'react-native-calendars';
import {ScrollView} from 'react-native-gesture-handler';
const ScheduleScreen = ({navigation}) => {
  const item = {
    name: 'Friday night party',
    description:
      'Come and have fun and ease yourself from stress without worry or pain',
    date: '2021-09-01',
    time: '20:00',
    location: 'Shefton top roof',
    attending: 30,
  };

  const markedDates = {
    '2023-09-15': { marked: true, dotColor: '#FF9405' },
    '2023-09-20': { marked: true, dotColor: '#FF9405' },
    '2023-09-25': { marked: true, dotColor: '#FF9405' },
    [selectedDay]: {selected: true, disableTouchEvent: true, selectedDotColor: '#FF9405'}
    // Add more dates as needed
  };
  const [selectedDay, setDay] = useState('');

  const customTheme = {
    calendarBackground: 'white',
    selectedDayBackgroundColor: 'green', // Set the selected day background color to green
    todayTextColor: '#FF9405', // Customize the color for today's date (if needed)
    // Add other styling properties as needed
    arrowColor: '#FF9405',
    selectedDayBackgroundColor: '#FF9405'
  };

  const onDayPress = (day) => {
    // Handle the selected date here
    setDay(day.dateString);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: 'contain', // You can adjust the resizeMode as needed
  },
  loginButton: {
    backgroundColor: '#007bff', // Replace with your preferred button color
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'black', // Button text color
    fontSize: 18,
  },
});

export default ScheduleScreen;
