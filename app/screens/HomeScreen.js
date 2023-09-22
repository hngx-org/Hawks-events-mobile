import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import EventComponent from '../components/shared/EventComponent';
import event from '../data/event';
import { events } from '../data/event';
import {useAuth0} from 'react-native-auth0';


const HomeScreen = ({ navigation }) => {

 

  const {user} = useAuth0();

  const [mappedEvent, setMappedEvent] = useState([event, event, event]);

  return (
    //  <View style={styles.container}>
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TextInput placeholder={`Hi ${user.nickname}`} style={styles.searchInput} />
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

          <TouchableOpacity
            style={styles.floatingButton}
            onPress={handleCreateEventPress}
        >
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: 'contain', // You can adjust the resizeMode as needed
  },
  loginButton: {
    backgroundColor: '#007bff', // Replace with your preferred button color
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'black', // Button text color
    fontSize: 18,
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
  }
});

export default HomeScreen;
