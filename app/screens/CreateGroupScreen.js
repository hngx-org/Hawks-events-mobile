import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AppInput from '../components/shared/AppInput';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Keyboard } from 'react-native';
import { phoneHeight } from '../utils/dimensions';
import AppButton from '../components/shared/AppButton';
import AppModal from '../components/Modal';


const CreateGroupScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
 
  return (
    <ScrollView>
    <View style={styles.container}>
    <View style={styles.container2}>
          <AppInput label='Group Name' />
          <AppButton onPress={() => {
            setModalVisible(true)
          }} title='Create' />
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
