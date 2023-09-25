/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, StatusBar, FlatList, Image, ActivityIndicator } from 'react-native';
import GroupComponent from '../components/shared/GroupComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '../utils/api';


const ExploreGroup = ({groups}) => {

  return (
    <View style={styles.groupComponent}>
      {groups.length > 0 ? (
        <FlatList
          data={groups}
          renderItem={({ item }) => <GroupComponent group={item} />}
        />
      ) : (
        <Text>No groups found.</Text>
      )}
    </View>
  );
};

const MyGroup = ({groups}) => {
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
  const [groups, setGroups] = useState([]);
  const [showExploreGroup, setShowExploreGroup] = useState(true);
  // Set the loading state
  const [loading, setLoading] = useState(true);

  const handleCreateGroupPress = () => {
    // Navigate to the Create Event Screen when the button is pressed
    navigation.navigate('Create Group');
  };

  useEffect(() => {
    async function fetchGroups() {
      try {
        let { data, error } = await supabase
          .from('group')
          .select('*');
        if (error) {
          console.error('Error fetching groups:', error);
        } else {
          setGroups(data || []); // Set an empty array if data is undefined
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching groups:', error.message);
      }
    }

    fetchGroups();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#FF9405" />
        </View>
      )}
      <View style={styles.searchBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/images/back.png')} style={{ marginRight: 10, width: 25, height: 25 }} />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Search Group" style={styles.input} />
          <TouchableOpacity>
            <Image source={require('../assets/images/search.png')} style={{ width: 15, height: 15 }} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, showExploreGroup ? styles.exploreButton : styles.myGroupButton]} onPress={() => setShowExploreGroup(true)} >
          <Text style={[styles.buttonText, showExploreGroup ? styles.exploreButtonText : styles.myGroupButtonText]}>Explore Group</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, !showExploreGroup ? styles.exploreButton : styles.myGroupButton]} onPress={() => setShowExploreGroup(false)}>
          <Text style={[styles.buttonText, !showExploreGroup ? styles.exploreButtonText : styles.myGroupButtonText]}>My Group</Text>
        </TouchableOpacity>
      </View>
      {showExploreGroup ? (<ExploreGroup groups={groups}/>) : (<MyGroup groups={groups} />)}
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
  searchBar: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(230, 233, 240, 1)',
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
    borderRadius: 15,
  },
  input: {
    flex: 1,
    padding: 5,
    fontWeight: '400',
    fontSize: 12,
  },
  buttonContainer: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E3E5E6',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 7,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#FF9405',
    width: '50%',
    paddingVertical: 17,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exploreButton: {
    backgroundColor: '#FF9405',
  },
  myGroupButton: {
    backgroundColor: '#fff',
  },
  buttonText: {
    fontWeight: '700',
    color: 'white',
  },
  exploreButtonText: {
    color: '#fff',
  },
  myGroupButtonText: {
    color: '#000',
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
    paddingHorizontal: 10,
  },
});

export default GroupListScreen;
