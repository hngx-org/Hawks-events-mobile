import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AppInput from '../components/shared/AppInput';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Keyboard } from 'react-native';
import DateSelect from '../components/DateSelect';
import { phoneHeight } from '../utils/dimensions';
import AppSelect from '../components/shared/AppSelect';
import AppButton from '../components/shared/AppButton';
import AppModal from '../components/Modal';
import { supabase } from '../utils/api';
import {useAuth0} from 'react-native-auth0';
import UUIDGenerator from 'react-native-uuid-generator';


const CreateEventScreen = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [date, setDate] = useState('21 9 2023');
  const [description, setDescription] = useState("");
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");

  const {user} = useAuth0();

  const [options, setOptions] = useState([
    { label: "Group 1", value: 1 },
  ]);

  const createEvent = async () => {
    const uuid = await UUIDGenerator.getRandomUUID();
    const event = { id: uuid, group_id: value, name:eventName, description:description, date:date, time: "12:05", location:location, attending:0, owner: user.email };
    console.log(event);
    const { data, error } = await supabase
    .from('event')
    .insert(event)
    console.log(error);
    console.log(data);
}
  const [modalVisible, setModalVisible] = useState(false);

  const nowDate = new Date()
  const formattedDate = new Date(date?.nativeEvent?.timestamp)
  const time = formattedDate.getHours()+' '+formattedDate.getMinutes()+' '+formattedDate.getSeconds()

  console.log(formattedDate, time, nowDate)

  return (
    <ScrollView>
    <View style={styles.container}>
    <View style={styles.container2}>
          <AppInput label='Event Name' setText={setEventName}/>
          <AppInput label='Description' multiline={true} setText={setDescription} numberOfLines={3}/>
          <DateSelect value={formattedDate||'0-0-0'} label='Start Date' setDate={setDate}/>
          <AppInput label='Location' setText={setLocation}/>
          <AppSelect label='Select Group' options={options} value={value} setOptions={setOptions} setValue={setValue}/>
          <AppButton onPress={createEvent} title='Create' />
          <AppModal modalVisible={modalVisible} setModalVisible={setModalVisible} btnText='Go Back' msg='Event created successfully' />
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
  
});

export default CreateEventScreen;
