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

  const createGroup = async (groupname, owner) => {
    const uuid = await UUIDGenerator.getRandomUUID();
    const { data, error } = await supabase
    .from('group')
    .insert({ id: uuid, name: groupname, members:0, upcoming_events:0, owner: owner })
    .select();

    console.log(error);
}


  const handleCreateGroup = async () => {
    setModalVisible(true);
    // Validate the group name input (you can add more validation logic here)


    if (groupName.trim() === '') {
      // Show an error message or handle invalid input
      alert('Please enter a valid group name');
      setModalVisible(false);
      return;
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
