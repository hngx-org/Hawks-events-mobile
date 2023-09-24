/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import EventComponent from '../components/shared/EventComponent';
import {AntDesign} from '@expo/vector-icons';
import search from '../assets/images/SearchIcons.png';
import {useAuth0} from 'react-native-auth0';
import { supabase } from '../utils/api';

const HomeScreen = ({navigation}) => {
  // Get user from Google auth
  const {user} = useAuth0();
  // Store the all events from the database
  const [events, setEvents] = useState([]);
  // Store event group title
  const [groupTitle, setGroupTitle] = useState('');
  // Store event group members
  const [groupMembers, setGroupMembers] = useState(0);
  // user can switch between everyone and friends
  const [switchButton, setSwitchButton] = useState(false);
  const handleCreateEventPress = () => {
    // Navigate to the Create Event Screen when the button is pressed
    navigation.navigate('Create Event');
  };

  useEffect(() => {
    const getEventDetails = async () => {
      let {data, error} = await supabase
        .from('events')
        .select('*');
      
      // console.log(data);
      getEventGroup(data);
      setEvents(data || []);
    };

    const getEventGroup = async (eventIds) => {
      eventIds.forEach(async (eventId) => {
        let {data, error} = await supabase
          .from('group_event_relat')
          .select('*');
        console.log('Getting group');
        data.forEach((d) => {
          if (d.event_ids.includes(eventId.id)) {
            console.log('Found');
            getGroupDetails(d.group_id);
          }
        });
      });
    };

    const getGroupDetails = async (groupId) => {
      let {data, error} = await supabase
        .from('group')
        .select('*')
        .eq('id', groupId);
      console.log('Getting group details');
      console.log(data[0]);
      setGroupTitle(data[0].title);
      setGroupMembers(data[0].members);
    };

    getEventDetails();
  }, [])

  return (
    //  <View style={styles.container}>
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TextInput placeholder={`Hello ${user ? user.name : 'friend,'}`} style={styles.searchInput} />
        <Image source={search} />
      </View>
      {switchButton ? (
        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            paddingVertical: 10,
            borderRadius: 40,
            borderColor: '#E3E5E6',
            borderWidth: 1,
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity
            onPress={() => setSwitchButton(false)}
            style={styles.everyoneNonActiveTab}>
            <Text style={styles.tabNonActiveText}>Everyone</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.everyoneTab}>
            <Text style={styles.tabText}>Friends</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            paddingVertical: 10,
            borderRadius: 40,
            borderColor: '#E3E5E6',
            borderWidth: 1,
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity style={styles.everyoneTab}>
            <Text style={styles.tabText}>Everyone</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSwitchButton(true)}
            style={styles.everyoneNonActiveTab}>
            <Text style={styles.tabNonActiveText}>Friends</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* <Text style={{color: '#85909C', marginTop: 30, marginBottom: 20}}>
        Happening Now
      </Text> */}
      {/* <TouchableOpacity style={styles.plusButton}>
      <Text style={{fontSize: 48, color:'white'}}>+</Text>
    </TouchableOpacity> */}
      {switchButton ? (
        <>
          {/* when a user is viewing the Everyone event */}
          <FlatList
            data={events}
            keyExtractor={item => item.id}
            initialNumToRender={5}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Event Details', {event: item, name: groupTitle, members: groupMembers});
                }}>
                <EventComponent event={item} />
              </TouchableOpacity>
            )}
          />
        </>
      ) : (
        <>
          {/* when a user views friends event */}
          <FlatList
            data={events}
            keyExtractor={item => item.id}
            initialNumToRender={5}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Event Details', {event: item, name: groupTitle, members: groupMembers});
                }}>
                <EventComponent event={item} />
              </TouchableOpacity>
            )}
          />
        </>
      )}
      {/* // </ScrollView> */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={handleCreateEventPress}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
    backgroundColor: '#FAFAFA',
    position: 'relative',
  },
  searchInput: {
    fontSize: 16,
    flex: 1,
  },
  everyoneTab: {
    backgroundColor: '#FF9405',
    fontWeight: 600,
    borderRadius: 30,
  },
  tabText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 15,
    paddingHorizontal: 50,
  },
  tabNonActiveText: {
    fontSize: 18,
    paddingVertical: 15,
    paddingHorizontal: 50,
  },
  plusButton: {
    backgroundColor: '#FF9405',
    position: 'absolute',
    bottom: 60,
    paddingBottom: 5,
    borderRadius: 50,
    paddingHorizontal: 15,
    right: 30,
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
});

export default HomeScreen;
