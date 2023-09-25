/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native';
import EventComponent from '../components/shared/EventComponent';


// Add the group prop to the component when it's ready and remove the group constant created
const GroupDetailsScreen = ({navigation, route}) => {
  const {title:name, members, groupEvents: events} = route.params;
  console.log('Group Events');
  console.log(events);
  // Variable to check if the user has joined the group
  const [joined, setJoined] = useState(false);
  // Variable for navigation arrow icon
  const arrowIcon = 'https://img.icons8.com/ios-glyphs/30/less-than.png';

  const joinGroup = () => {
    setJoined(true);
  };
  // Handle event press
  const handleEventPress = (event) => {
    // Navigate to the group details screen when clicked
    navigation.navigate('Event Details', {event, name, members});
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.nav}>
        <TouchableOpacity
          style={{padding:7}}
          onPress={() => navigation.goBack()}>
          <Image source={{uri: arrowIcon}} style={styles.icon} />
        </TouchableOpacity>

        <View style={styles.groupInfo}>
          <View style={styles.groupImage}></View>
          <View>
            <Text style={styles.groupName}>{name}</Text>
            <Text style={styles.groupMembers}>{members} Members</Text>
          </View>
        </View>
      </View>

      <View style={styles.events}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={events}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => handleEventPress(item)}>
              <EventComponent
                event={item}
                name={name}
                members={members}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>

      {joined ? null : (
        <View style={styles.joinGroupContainer}>
          <TouchableOpacity
            style={styles.joinGroup}
            onPress={() => joinGroup()}>
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
    paddingVertical: 12,
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
    width: 30,
    height: 30,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  groupMembers: {
    fontSize: 14,
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
    height: 44,
    backgroundColor: '#FF9405',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  joinGroupText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default GroupDetailsScreen;
