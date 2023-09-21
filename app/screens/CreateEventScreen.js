import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AppInput from '../components/shared/AppInput';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Keyboard } from 'react-native';
import DateSelect from '../components/DateSelect';
import { phoneHeight } from '../utils/dimensions';
import AppSelect from '../components/shared/AppSelect';
import AppButton from '../components/shared/AppButton';


const CreateEventScreen = ({ navigation }) => {
  const [value, setValue] = useState(null);
  const [options, setOptions] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Prefer Not to Say", value: "neutral" },
  ]);
  return (
    <ScrollView>
    <View style={styles.container}>
    <View style={styles.container2}>
          <AppInput label='Event Name' />
          <AppInput label='Description' multiline={true} numberOfLines={3}/>
          <DateSelect label='Start Date'/>
          <AppInput label='Location' />
          <AppSelect label='Select Group' options={options} value={value} setOptions={setOptions} setValue={setValue}/>
          <AppButton title='Create' />
    </View>
   {/*  <View style={{
    paddingHorizontal: 20,
    width: '100%'
    }}>
    </View> */}

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent:'center', 
    alignItems: 'center',  
    backgroundColor: 'white',
    width: '100%',
    height: phoneHeight/2*1.81
  },
  container2: {
    flex: 1,
    paddingHorizontal: 20,
  width: '100%'
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

export default CreateEventScreen;
