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
  const {name, members, groupEvents: events} = route.params;
  // Variable to check if the user has joined the group
  const [joined, setJoined] = useState(false);
  // Variable for navigation arrow icon
  const arrowIcon = 'https://img.icons8.com/ios-glyphs/30/less-than.png';
  // Variable for the group details
  // const group = {
  //   name: 'GGB Dance',
  //   members: 100,
  //   events: [
  //     {
  //       name: 'Dance ferry night',
  //       description:
  //         'Come and have fun and ease yourself from stress without worry or pain',
  //       date: '2021-09-01',
  //       time: '12:00',
  //       location: 'Shefton top roof',
  //       attending: 10,
  //       comments: [
  //         {
  //           name: 'Gbemiglad',
  //           comment: "Who's coming with me to this event? I'm so excited and I can't wait to have fun",
  //           timestamp: '12:00',
  //           image:
  //             'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  //         },
  //         {
  //           name: 'John Doe',
  //           comment: 'This is a great event',
  //           timestamp: '12:30',
  //           image:
  //             'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1341&q=80',
  //         },
  //         {
  //           name: 'Laura',
  //           comment: 'I love this event',
  //           timestamp: '13:00',
  //           image:
  //             'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  //         },
  //         {
  //           name: 'Linda Doe',
  //           comment: "I'm looking forward to this event",
  //           timestamp: '14:00',
  //           image:
  //             'https://plus.unsplash.com/premium_photo-1668638804974-b0053235b8f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  //         },
  //         {
  //           name: 'Gbemiglad',
  //           comment: "Who's coming with me to this event? I'm so excited and I can't wait to have fun",
  //           timestamp: '12:00',
  //           image:
  //             'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  //         },
  //         {
  //           name: 'John Doe',
  //           comment: 'This is a great event',
  //           timestamp: '12:30',
  //           image:
  //             'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1341&q=80',
  //         },
  //         {
  //           name: 'Laura',
  //           comment: 'I love this event',
  //           timestamp: '13:00',
  //           image:
  //             'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  //         },
  //         {
  //           name: 'Linda Doe',
  //           comment: "I'm looking forward to this event",
  //           timestamp: '14:00',
  //           image:
  //             'https://plus.unsplash.com/premium_photo-1668638804974-b0053235b8f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Dinner date',
  //       description: 'Create a memorable dinner date with that special someone',
  //       date: '2021-09-01',
  //       time: '18:00',
  //       location: 'Eiffle tower',
  //       attending: 10,
  //       comments: [
  //         {
  //           name: 'Gbemiglad',
  //           comment: "Who's coming with me to this event? I'm so excited",
  //           timestamp: '12:00',
  //           image:
  //             'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  //         },
  //         {
  //           name: 'John Doe',
  //           comment: 'This is a great event',
  //           timestamp: '12:30',
  //           image:
  //             'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  //         },
  //         {
  //           name: 'Laura',
  //           comment: 'I love this event',
  //           timestamp: '13:00',
  //           image:
  //             'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  //         },
  //         {
  //           name: 'Linda Doe',
  //           comment: "I'm looking forward to this event",
  //           timestamp: '14:00',
  //           image:
  //             'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Friday night party',
  //       description:
  //         'Come and have fun and ease yourself from stress without worry or pain',
  //       date: '2021-09-01',
  //       time: '20:00',
  //       location: 'Shefton top roof',
  //       attending: 30,
  //       comments: [
  //         {
  //           name: 'Gbemiglad',
  //           comment: "Who's coming with me to this event? I'm so excited",
  //           timestamp: '12:00',
  //           image:
  //             'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  //         },
  //         {
  //           name: 'John Doe',
  //           comment: 'This is a great event',
  //           timestamp: '12:30',
  //           image:
  //             'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  //         },
  //         {
  //           name: 'Laura',
  //           comment: 'I love this event',
  //           timestamp: '13:00',
  //           image:
  //             'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  //         },
  //         {
  //           name: 'Linda Doe',
  //           comment: "I'm looking forward to this event",
  //           timestamp: '14:00',
  //           image:
  //             'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Dance ferry night',
  //       description:
  //         'Come and have fun and ease yourself from stress without worry or pain',
  //       date: '2021-09-01',
  //       time: '12:00',
  //       location: 'Shefton top roof',
  //       attending: 10,
  //       comments: [
  //         {
  //           name: 'Gbemiglad',
  //           comment: "Who's coming with me to this event? I'm so excited",
  //           timestamp: '12:00',
  //           image:
  //             'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  //         },
  //         {
  //           name: 'John Doe',
  //           comment: 'This is a great event',
  //           timestamp: '12:30',
  //           image:
  //             'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  //         },
  //         {
  //           name: 'Laura',
  //           comment: 'I love this event',
  //           timestamp: '13:00',
  //           image:
  //             'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  //         },
  //         {
  //           name: 'Linda Doe',
  //           comment: "I'm looking forward to this event",
  //           timestamp: '14:00',
  //           image:
  //             'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Dinner date',
  //       description: 'Create a memorable dinner date with that special someone',
  //       date: '2021-09-01',
  //       time: '18:00',
  //       location: 'Eiffle tower',
  //       attending: 10,
  //       comments: [
  //         {
  //           name: 'Gbemiglad',
  //           comment: "Who's coming with me to this event? I'm so excited",
  //           timestamp: '12:00',
  //           image:
  //             'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  //         },
  //         {
  //           name: 'John Doe',
  //           comment: 'This is a great event',
  //           timestamp: '12:30',
  //           image:
  //             'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  //         },
  //         {
  //           name: 'Laura',
  //           comment: 'I love this event',
  //           timestamp: '13:00',
  //           image:
  //             'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  //         },
  //         {
  //           name: 'Linda Doe',
  //           comment: "I'm looking forward to this event",
  //           timestamp: '14:00',
  //           image:
  //             'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Friday night party',
  //       description:
  //         'Come and have fun and ease yourself from stress without worry or pain',
  //       date: '2021-09-01',
  //       time: '20:00',
  //       location: 'Shefton top roof',
  //       attending: 30,
  //       comments: [
  //         {
  //           name: 'Gbemiglad',
  //           comment: "Who's coming with me to this event? I'm so excited",
  //           timestamp: '12:00',
  //           image:
  //             'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  //         },
  //         {
  //           name: 'John Doe',
  //           comment: 'This is a great event',
  //           timestamp: '12:30',
  //           image:
  //             'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  //         },
  //         {
  //           name: 'Laura',
  //           comment: 'I love this event',
  //           timestamp: '13:00',
  //           image:
  //             'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  //         },
  //         {
  //           name: 'Linda Doe',
  //           comment: "I'm looking forward to this event",
  //           timestamp: '14:00',
  //           image:
  //             'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
  //         },
  //       ],
  //     },
  //   ],
  // };

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
          style={{padding: 7}}
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
              onPress={() => handleEventPress(item, name, members)}>
              <EventComponent
                event={item}
                name={name}
                members={members}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => events.indexOf(item)}
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
