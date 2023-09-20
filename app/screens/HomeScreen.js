import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import EventComponent from '../components/shared/EventComponent';
import { AntDesign } from '@expo/vector-icons';
import search from '../assets/images/search.png' 
import event from '../data/event';

const HomeScreen = ({ navigation }) => {

  const [switchButton, setSwitchButton] = useState(false);
  return (
    //  <View style={styles.container}>
          <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
          <TextInput placeholder='Hello Mayana' style={styles.searchInput} />
          <Image source={search} />
    </View>
    {switchButton ? 
    <View style={{marginTop: 30, flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'white', paddingVertical: 10, borderRadius: 40, borderColor:'#E3E5E6', borderWidth: 1, paddingHorizontal: 10}}>
      <TouchableOpacity onPress={()=> setSwitchButton(false)} style={styles.everyoneNonActiveTab}>
        <Text style={styles.tabNonActiveText}>Everyone</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.everyoneTab}>
        <Text style={styles.tabText}>Friends</Text>
      </TouchableOpacity>
    </View>
    :
    <View style={{marginTop: 30, flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'white', paddingVertical: 10, borderRadius: 40, borderColor:'#E3E5E6', borderWidth: 1, paddingHorizontal: 10}}>
      <TouchableOpacity style={styles.everyoneTab}>
        <Text style={styles.tabText}>Everyone</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> setSwitchButton(true)} style={styles.everyoneNonActiveTab}>
        <Text style={styles.tabNonActiveText}>Friends</Text>
      </TouchableOpacity>
    </View>}

    <Text style={{color: '#85909C', marginTop: 30, marginBottom: 20}}>Happening Now</Text>
    <TouchableOpacity style={styles.plusButton}>
      <Text style={{fontSize: 48, color:'white'}}>+</Text>
    </TouchableOpacity>
          <EventComponent event={event}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    paddingTop: 30,
    backgroundColor: '#FAFAFA',
    position: 'relative'
  },
  searchInput:{
    fontSize: 16,
    flex: 1
  },
  everyoneTab:{
    backgroundColor: '#FF9405',
    fontWeight: 600,
    borderRadius: 30
  },
  tabText:{
    color:'white',
    fontSize: 18,
    paddingVertical: 15,
    paddingHorizontal: 50,
  },
  tabNonActiveText:{
    fontSize: 18,
    paddingVertical: 15,
    paddingHorizontal: 50,
  },
  plusButton:{    
    backgroundColor: '#FF9405',
    position:'absolute',
    bottom: 60,
    paddingBottom: 5,
    borderRadius: 50,
    paddingHorizontal: 15,
    right: 30
  }
});

export default HomeScreen;
