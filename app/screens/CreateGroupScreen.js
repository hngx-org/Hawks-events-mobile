import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AppInput from '../components/shared/AppInput';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Keyboard } from 'react-native';
import { phoneHeight } from '../utils/dimensions';
import AppButton from '../components/shared/AppButton';
import AppModal from '../components/Modal';
import {useAuth0} from 'react-native-auth0';
import UUIDGenerator from 'react-native-uuid-generator';
import { supabase } from '../utils/api'


const CreateGroupScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [groupName, setGroupName] = useState(''); 

  const {user} = useAuth0();
  // Function to handle the group creation
  const [details, setDetails] = useState({
    eventName: '',
  });

  async function createGroup() {
    try {
      const {data} = await supabase.from('events').insert({
        id: UUIDGenerator.getRandomUUID(),
        members: 1,
        creator_email: 'mail@mail.com',
        title: details.eventName,
        created_at: new Date(),
        updated_at: new Date(),
      });
      setModalVisible(true);
      setDetails({
        eventName: '',
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

 
  return (
    <ScrollView>
    <View style={styles.container}>
    <View style={styles.container2}>
    <AppInput
            label="Group Name"
            setText={val => {
              setDetails({...details, eventName: val});
            }}
          />         
          <AppButton title='Create'
          onPress={createGroup} />
          <AppModal modalVisible={modalVisible} setModalVisible={setModalVisible} btnText='Close' msg='Group created successfully' />
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

export default CreateGroupScreen;
