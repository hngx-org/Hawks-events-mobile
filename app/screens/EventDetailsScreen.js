/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
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
import {supabase} from '../utils/api';
import uuid from 'react-native-uuid';
import {useAuth0} from 'react-native-auth0';

const EventDetailsScreen = ({navigation, route}) => {
  const {user} = useAuth0;
  const email = user ? user.email : 'email@gmail.com';
  // Set loading state
  const [loading, setLoading] = useState(true);
  // console.log(route.params);
  const {event, name, members} = route.params;
  // Variable to check if the user has attend the group
  const [attend, setAttend] = useState(false);
  // Variable to hold a user comment
  const [comment, setComment] = useState(null);
  // Variable to store saved comments
  const [eventComments, setEventComments] = useState([]);

  // Test variables;
  const [testEvent, setTestEvent] = useState([]);

  // Variable for icons to be used
  const arrowIcon = 'https://img.icons8.com/ios-glyphs/30/less-than.png';
  const uploadImageIcon =
    'https://img.icons8.com/pastel-glyph/64/image--v2.png';
  const sendCommenntIcon =
    'https://img.icons8.com/material-rounded/24/FF9405/sent.png';
  const calenderIcon = 'https://img.icons8.com/ios-filled/50/calendar--v1.png';

  // Attend an event
  const attendEvent = async () => {
    const attending = testEvent.attending ? testEvent.attending : 0;

    await supabase
      .from('events')
      .update({attending: attending + 1})
      .eq('id', testEvent.id)
      .select();

    const userEventRelation = await getEventUserRelation();
    if (userEventRelation) {
      console.log(userEventRelation[0].event_ids);
      const {data: event_user_relat} = await supabase
        .from('event_user_relat')
        .insert([
          {
            user_email: email,
            event_ids: [...userEventRelation[0].event_ids, event.id],
          },
        ])
        .eq('user_email', email)
        .select();
      console.log(event_user_relat);
    }

    setAttend(true);
  };

  // Get all user events
  const getEventUserRelation = async () => {
    let {data, error} = await supabase
      .from('event_user_relat')
      .select('*')
      .eq('user_email', email);
    console.log(data);
    return data;
  };

  // Add a comment
  const addComment = async () => {
    const commentId = uuid.v4();
    const createdAt = Date.now();
    console.log(createdAt);
    // console.log(uuid);
    // let id, body, created_at, event_id, user_name;
    if (comment && comment !== '') {
      const {data, error} = await supabase
        .from('comments')
        .insert([
          {
            id: commentId,
            body: comment,
            created_at: createdAt,
            event_id: event.id,
            user_name: user ? user.name : 'friend',
          },
        ])
        .select();

      console.log(data);
    } else {
      alert('Comment is empty');
    }
  };

  useEffect(() => {
    console.log('Fecthing data');
    // Check if user has joined the the event
    const checkAttend = async () => {
      const userEventRelation = await getEventUserRelation();
      if (userEventRelation) {
        console.log(userEventRelation[0].event_ids);
        if (userEventRelation[0].event_ids.includes(event.id)) {
          console.log('Already attending');
          setAttend(true);
        }
      }
    };

    // Get event details
    const getEventDetails = async () => {
      let {data: events, error} = await supabase
        .from('events')
        .select('*')
        .eq('id', event.id);

      await getComments(event.id);
      setTestEvent(events[0]);
      setLoading(false);
    };

    // Get comments
    const getComments = async eventId => {
      console.log('Getting comments');
      let {data: comments, error} = await supabase
        .from('comments')
        .select('*')
        .eq('event_id', eventId);

      // console.log(comments);
      // return comments;
      setEventComments(comments);
    };

    getEventDetails();
    checkAttend();
  }, []);

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
            }}>
            <Image source={{uri: calenderIcon}} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {loading && (
        <View style={styles.loader}>
          <Text>Loading, please wait...</Text>
        </View>
      )}

      <View style={styles.eventCard}>
        <EventComponent event={testEvent} />
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
            data={eventComments}
            renderItem={({item}) => <CommentComponent comment={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      </View>

      <View style={styles.addCommentContainer}>
        <Image source={{uri: uploadImageIcon}} style={styles.icon} />
        <View style={styles.commentInputContainer}>
          <TextInput
            onChangeText={text => setComment(text)}
            style={styles.textInput}
            placeholder="Type a comment"
          />
          <Pressable style={{paddingHorizontal: 10}} onPress={addComment}>
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
  loader: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#f7f7f7',
    zIndex: 10,
    top: 0,
    left: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
