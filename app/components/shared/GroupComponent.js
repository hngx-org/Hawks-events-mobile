/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {events} from '../../data/event';

const GroupComponent = (props) => {
  const groupEvents = events.filter((event) => props.group.events.includes(event.id));
  const { name, members } = props.group;

  const navigation = useNavigation();

  const handleGroupPress = () => {
    // Navigate to the group details screen when clicked
    navigation.navigate('Group Details', {name, members, groupEvents});
  };

<<<<<<< Updated upstream
=======
  const getGroupEvents = async () => {
    try {
      let { data, error } = await supabase
        .from('group_event_relat')
        .select('*')
        .eq('group_id', props.group.id);
      console.log(data);
      if (error) {
        console.error('Error fetching group events:', error);
      } else {
        const groupEventIds = data[0].event_ids;
        console.log(groupEventIds);
        const groupEventss = [];
        groupEventIds.forEach(async (eventId) => {
          let { data:events, error } = await supabase
            .from('events')
            .select('*')
            .eq('id', eventId);
            console.log("Hello")
            console.log(eventId)
          if (eventId !==  undefined) {
            if(events[0] !== undefined){
              groupEventss.push(events[0]);
            }
          }
        });
        setGroupEvents(groupEventss);
      }
    } catch (error) {
      console.error('Error fetching group events:', error.message);
    }
  };

  useEffect(() => {
    getGroupEvents();
  }, []);
>>>>>>> Stashed changes

  return (
    <View style={{padding: 10}}>
      <TouchableOpacity onPress={handleGroupPress} style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.circle} />
          <View style={styles.titleContainer}>
            <Text style={styles.groupName}>{name}</Text>
            <Text style={styles.groupMembers}>{`${members} Members`}</Text>
          </View>
          <Text style={styles.groupEvents}>{`${groupEvents.length} upcoming event`}</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffff',
    padding: 10
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%'
  },
  circle: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 15
  },
  titleContainer: {
    justifyContent: 'space-evenly',
    flex: 1,
    marginHorizontal: 10
  },
  groupName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333'
  },
  groupMembers: {
    fontSize: 12
  },
  groupEvents: {
    fontSize: 12
  }
});

export default GroupComponent;
