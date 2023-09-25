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
import uuid from 'react-native-uuid';


const CreateGroupScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [groupName, setGroupName] = useState(''); 

  const {user} = useAuth0();
  // Function to handle the group creation

  async function createGroup() {
    try {
      const data = await supabase.from('group').insert({
        id: uuid.v4(),
        members: 1,
        creator_email: user.email,
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

    await createGroup(groupName, user.email);

    // Group creation logic goes here
    // Once the group is created, you can show the success modal
    setModalVisible(false);
  };


 
  return (
    <ScrollView>
    <View style={styles.container}>
    <View style={styles.container2}>
          <AppInput label='Group Name' setText={setGroupName}/>
          <AppButton title='Create'
          onPress={handleCreateGroup} />
          <AppModal modalVisible={modalVisible} setModalVisible={setModalVisible} btnText='View Reward' msg='Group created successfully' />
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
