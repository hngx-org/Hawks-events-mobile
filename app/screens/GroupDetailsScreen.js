/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, FlatList} from 'react-native';
import EventComponent from '../components/shared/EventComponent';
import groupImage from '../assets/images/group.png';

const GroupDetailsScreen = ({navigation}) => {
  // Variable to check if the user has joined the group
  const [joined, setJoined] = useState(false);
  // Variable for navigation arrow icon
  const arrowIcon = 'https://img.icons8.com/ios-glyphs/30/less-than.png';
  // Variable for the group details
  const group = {
    name: 'GGB Dance',
    image: groupImage,
    members: 100,
    events: [
      {
        name: 'Dance ferry night',
        description: 'Come and have fun and ease yourself from stress without worry or pain',
        date: '2021-09-01',
        time: '12:00',
        location: 'Shefton top roof',
        attending: 10,
      },
      {
        name: 'Dinner date',
        description: 'Create a memorable dinner date with that special someone',
        date: '2021-09-01',
        time: '18:00',
        location: 'Eiffle tower',
        attending: 10,
      },
      {
        name: 'Friday night party',
        description: 'Come and have fun and ease yourself from stress without worry or pain',
        date: '2021-09-01',
        time: '20:00',
        location: 'Shefton top roof',
        attending: 30,
      },
      {
        name: 'Dance ferry night',
        description: 'Come and have fun and ease yourself from stress without worry or pain',
        date: '2021-09-01',
        time: '12:00',
        location: 'Shefton top roof',
        attending: 10,
      },
      {
        name: 'Dinner date',
        description: 'Create a memorable dinner date with that special someone',
        date: '2021-09-01',
        time: '18:00',
        location: 'Eiffle tower',
        attending: 10,
      },
      {
        name: 'Friday night party',
        description: 'Come and have fun and ease yourself from stress without worry or pain',
        date: '2021-09-01',
        time: '20:00',
        location: 'Shefton top roof',
        attending: 30,
      },
    ],
  };

  const joinGroup = () => {
    setJoined(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.nav}>
        <TouchableOpacity style={{padding:7}} onPress={() => navigation.goBack()}>
          <Image source={{uri: arrowIcon}} style={styles.icon} />
        </TouchableOpacity>

        <View style={styles.groupInfo}>
          <View style={styles.groupImage}>
          </View>
          <View>
            <Text style={styles.groupName}>{group.name}</Text>
            <Text style={styles.groupMembers}>{group.members} Members</Text>
          </View>
        </View>
      </View>

      <View style={styles.events}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={group.events}
          renderItem={({item}) => <EventComponent event={item} />}
          keyExtractor={item => group.events.indexOf(item)}
        />
      </View>

      {joined ? null : (
        <View style={styles.joinGroupContainer}>
          <TouchableOpacity
            style={styles.joinGroup}
            onPress={() => joinGroup()}
          >
            <Text style={styles.joinGroupText}>Join Group</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  icon: {
    width: 20, // Adjust the width as needed
    height: 20, // Adjust the height as needed
    objectFit: 'contain', // You can adjust the resizeMode as needed
  },
  groupInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 5,
    width: 'fit-content',
    columnGap: 10,
  },
  groupImage: {
    backgroundColor: '#fff',
    width: 45,
    height: 45,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#0d0d0d',
  },
  image: {
    width: '100%', // Adjust the width as needed
    height: '100%', // Adjust the height as needed
    objectFit: 'cover', // You can adjust the resizeMode as needed
  },
  groupName: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  groupMembers: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  },
  events: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  joinGroupContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    paddingHorizontal: 20,
    width: '100%',
  },
  joinGroup: {
    width: '100%',
    backgroundColor: '#FF9405',
    paddingVertical: 17,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  joinGroupText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GroupDetailsScreen;
