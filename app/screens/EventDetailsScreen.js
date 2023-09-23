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
  TextInput,
  Pressable,
} from 'react-native';
import EventComponent from '../components/shared/EventComponent';
import CommentComponent from '../components/CommentComponent';

const EventDetailsScreen = ({navigation, route}) => {
  // console.log(route.params);
  const {event, name, members} = route.params;
  // Variable to check if the user has attend the group
  const [attend, setAttend] = useState(false);
  // Variable to hold a user comment
  const [comment, setComment] = useState(null);
  // Variable for icons to be used
  const arrowIcon = 'https://img.icons8.com/ios-glyphs/30/less-than.png';
  const uploadImageIcon =
    'https://img.icons8.com/pastel-glyph/64/image--v2.png';
  const sendCommenntIcon =
    'https://img.icons8.com/material-rounded/24/FF9405/sent.png';
  const calenderIcon = 'https://img.icons8.com/ios-filled/50/calendar--v1.png';

  const attendEvent = () => {
    setAttend(true);
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

        <View style={styles.groupInfoContainer}>
          <View style={styles.groupInfo}>
            <View style={styles.groupImage}></View>
            <View>
              <Text style={styles.groupName}>{name}</Text>
              <Text style={styles.groupMembers}>{members} Members</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.calenderIcon}
            onPress={() => {
              navigation.navigate('My Schedule');
            }}
          >
            <Image source={{uri: calenderIcon}} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.eventCard}>
        <EventComponent event={event} />
        {attend ? null : (
          <TouchableOpacity
            style={styles.attendEvent}
            onPress={() => attendEvent()}>
            <Text style={styles.attendEventText}>Attend</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.commentsContainer}>
        <View style={styles.commentHeader}>
          <Text style={styles.commentHeaderText}>Comments</Text>
        </View>
        <View style={styles.commentCardContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={event.comments}
            renderItem={({item}) => <CommentComponent comment={item} />}
            keyExtractor={item => event.comments.indexOf(item)}
          />
        </View>
      </View>

      <View style={styles.addCommentContainer}>
        <Image source={{uri: uploadImageIcon}} style={styles.icon} />
        <View style={styles.commentInputContainer}>
          <TextInput onChangeText={text => setComment(text)} style={styles.textInput} placeholder="Type a comment" />
          <Pressable
            style={{paddingHorizontal: 10}}
            onPress={() => {
              comment ? console.log(comment) : console.log('No comment');
            }}>
            <Image source={{uri: sendCommenntIcon}} style={[styles.icon]} />
          </Pressable>
        </View>
      </View>
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
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  icon: {
    width: 20, // Adjust the width as needed
    height: 20, // Adjust the height as needed
    objectFit: 'contain', // You can adjust the resizeMode as needed
  },
  groupInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 5,
    width: '90%',
  },
  groupInfo: {
    width: '80%',
    flexDirection: 'row',
    columnGap: 10,
  },
  calenderIcon: {
    padding: 10,
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
  eventCard: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  attendEvent: {
    width: '100%',
    height: 44,
    borderWidth: 1,
    borderColor: '#FF9405',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  attendEventText: {
    color: '#FF9405',
    fontSize: 14,
    fontWeight: '500',
  },
  commentsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  commentHeader: {
    marginTop: 5,
    height: 35,
  },
  commentHeaderText: {
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#5ECC62',
    color: '#5ECC62',
    fontSize: 13,
    fontWeight: 'bold',
    width: 100,
  },
  commentCardContainer: {
    flex: 1,
    columnGap: 10,
    width: '100%',
    marginTop: 15,
    paddingBottom: 65,
  },
  addCommentContainer: {
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  commentInputContainer: {
    flex: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 50,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: '#666',
    paddingVertical: 7,
    paddingLeft: 15,
  },
});

export default EventDetailsScreen;
