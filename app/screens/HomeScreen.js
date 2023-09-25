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
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import EventComponent from '../components/shared/EventComponent';
import {AntDesign} from '@expo/vector-icons';
import search from '../assets/images/SearchIcons.png';
import {useAuth0} from 'react-native-auth0';
import {supabase} from '../utils/api';

const HomeScreen = ({navigation}) => {
  // Set loading state
  const [loading, setLoading] = useState(true);
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
      let {data, error} = await supabase.from('events').select('*');

      // console.log(data);
      getEventGroup(data);
      setEvents(data || []);
      setLoading(false);
    };

    const getEventGroup = async eventIds => {
      eventIds.forEach(async eventId => {
        let {data, error} = await supabase
          .from('group_event_relat')
          .select('*');

        data.forEach(d => {
          if (d.event_ids.includes(eventId.id)) {
            getGroupDetails(d.group_id);
          }
        });
      });
    };

    const getGroupDetails = async groupId => {
      let {data, error} = await supabase
        .from('group')
        .select('*')
        .eq('id', groupId);

      setGroupTitle(data[0].title);
      setGroupMembers(data[0].members);
    };

    getEventDetails();
  }, []);

  return (
    //  <View style={styles.container}>
    <View style={styles.container}>
      <StatusBar />
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#FF9405" />
        </View>
      )}
      <View style={{flexDirection: 'row', padding: 20}}>
        <TextInput
          placeholder={`Hello ${user ? user.name : 'friend,'}`}
          style={styles.searchInput}
        />
        <Image source={search} style={{width: 25, height: 25, objectFit: 'contain'}} />
      </View>
      {switchButton ? (
        <View
          style={{
            marginTop: 10,
            marginBottom: 5,
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            paddingVertical: 7,
            borderRadius: 40,
            borderColor: '#E3E5E6',
            borderWidth: 1,
            paddingHorizontal: 7,
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
            marginTop: 10,
            marginHorizontal: 20,
            marginBottom: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            paddingVertical: 7,
            borderRadius: 40,
            borderColor: '#E3E5E6',
            borderWidth: 1,
            paddingHorizontal: 7,
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
        <View style={{flex: 1, paddingHorizontal: 20}}>
          {/* when a user is viewing the Everyone event */}
          <FlatList
            data={events}
            keyExtractor={item => item.id}
            initialNumToRender={5}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Event Details', {
                    event: item,
                    name: groupTitle,
                    members: groupMembers,
                  });
                }}>
                <EventComponent event={item} />
              </TouchableOpacity>
            )}
          />
        </View>
      ) : (
        <View style={{paddingHorizontal: 20, flex: 1}}>
          {/* when a user views friends event */}
          <FlatList
            data={events}
            keyExtractor={item => item.id}
            initialNumToRender={5}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Event Details', {
                    event: item,
                    name: groupTitle,
                    members: groupMembers,
                  });
                }}>
                <EventComponent event={item} />
              </TouchableOpacity>
            )}
          />
        </View>
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
    backgroundColor: '#FAFAFA',
    position: 'relative',
  },
  loader: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#f7f7f7',
    zIndex: 10,
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    fontSize: 16,
    flex: 1,
  },
  everyoneTab: {
    backgroundColor: '#FF9405',
    fontWeight: 600,
    borderRadius: 30,
    width: '50%',
  },
  everyoneNonActiveTab: {
    fontWeight: 600,
    borderRadius: 30,
    width: '50%',
  },
  tabText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  tabNonActiveText: {
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 15,
    paddingHorizontal: 30,
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
