import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,SafeAreaView } from 'react-native';
//import loginImage from '../assets/svgs/login-illustration.svg'; // Replace with your login image
import {Calendar} from 'react-native-calendars';
const ScheduleScreen = ({ navigation }) => {
 const [selectedDay,setDay]=useState('')
  return (
    <View style={styles.container}>
          <Text >Schedule</Text>
          <Calendar style={styles.calendar} onDayPress={day => {
        setDay(day.dateString);
      }} markedDates={{ [selectedDay]: {selected: true, disableTouchEvent: true, selectedDotColor: '#5ECC62'}
      }} />

      <View style={styles.scheduleview}>
        <Text style={styles.scheduleTitle}>Today</Text>
          <View style={styles.scheduleContent}>
         <Text>Dance Ferry Night</Text> 
         <Text>Come and have fun and ease yourself of stress. </Text>
         <Text style={styles.day}>{selectedDay}</Text>
         </View>
      </View>
      <View style={styles.scheduleview}>
        <Text style={styles.scheduleTitle}>Yesterday</Text>
          <View style={styles.scheduleContent}>
         <Text>Dance Ferry Night</Text> 
         <Text>Come and have fun and ease yourself of stress. </Text>
         <Text style={styles.day}>{selectedDay}</Text>
         </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    gap:5,
    padding:10,
  },
  calendar:{
    width:'95%',
    marginLeft:10,
    marginRight:10,
   padding:10,
  },
scheduleview:{
  margin:10,
  width:'90%',
  height:100,
  flexDirection:'column',
},
scheduleTitle:{
textAlign:'left',
fontSize: 16,
},
scheduleContent:{
  marginLeft:10,
  padding:10,
  justifyContent:'center',
  fontSize: 14,
},
day:{
  color:'#FF9405'
}
});

export default ScheduleScreen;
