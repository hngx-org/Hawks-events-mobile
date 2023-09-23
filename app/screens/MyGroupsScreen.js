/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, StatusBar, FlatList, Image } from 'react-native';
import { Octicons, Ionicons } from '@expo/vector-icons';
import myGroup from '../data/group/myGroup';
import exploreGroup from '../data/group/exploreGroups';
import {groups} from '../data/groups';
import GroupComponent from '../components/shared/GroupComponent';
import { SafeAreaView } from 'react-native-safe-area-context';


const ExploreGroup = () => {
  return (
    <View style={styles.groupComponent}>
    <FlatList
      data={groups}
      renderItem={({ item }) => <GroupComponent group={item}
      />}
    />
  </View>
  )
}

const MyGroup = () => {
  return (
    <View style={styles.groupComponent}>
    <FlatList
      data={groups}
      renderItem={({ item }) => <GroupComponent group={item}
      />}
    />
  </View>
  )
}


const GroupListScreen = ({ navigation }) => {

  const [showExploreGroup, setShowExploreGroup] = useState(true)

  const handleCreateGroupPress = () => {
    // Navigate to the Create Event Screen when the button is pressed
    navigation.navigate('Create Group');
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.searchBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/images/back.png')} style={{marginRight: 10, width: 25, height: 25}} />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Search Group" style={styles.input} />
          <TouchableOpacity>
            <Image source={require('../assets/images/search.png')}  style={{width:15, height:15}} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, showExploreGroup? styles.exploreButton : styles.myGroupButton]} onPress={() => setShowExploreGroup(true)} >
          <Text style={[styles.buttonText, showExploreGroup ? styles.exploreButtonText : styles.myGroupButtonText]}>Explore Group</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, !showExploreGroup? styles.exploreButton : styles.myGroupButton]} onPress={() => setShowExploreGroup(false)}>
          <Text style={[styles.buttonText, !showExploreGroup ? styles.exploreButtonText : styles.myGroupButtonText]}>My Group</Text>
        </TouchableOpacity>
      </View>
      {showExploreGroup ? (<ExploreGroup/> ): ( <MyGroup/>)}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={handleCreateGroupPress}
      >
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    padding: 10
  },
  searchBar: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(230, 233, 240, 1)',
    paddingHorizontal: 10
  },
  inputContainer: {
    height: 32,
    width: '90%',
    borderWidth: 1,
    borderColor: 'rgba(230, 233, 240, 1)',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  input: {
    flex: 1,
    padding: 5,
    fontWeight: '400',
    fontSize: 12
  },
  buttonContainer: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    padding:10,
    marginTop : 10
  },
  button: {
    backgroundColor: '#FF9405',
    width: '50%',
    height: 44,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  exploreButton: {
    backgroundColor: '#FF9405',
  },
  myGroupButton: {
    backgroundColor: '#fff'
  },
  buttonText: {
    fontWeight: '700',
    color: 'white'
  },
  exploreButtonText: {
    color: '#fff'
  },
  myGroupButtonText: {
    color: '#000'
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FF9405',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  floatingButtonText: {
    fontSize: 30,
    color: 'white',
  },
  groupComponent: {
    width: '100%',
  }
});

export default GroupListScreen;
