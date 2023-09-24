import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AppInput from '../components/shared/AppInput';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Keyboard} from 'react-native';
import DateSelect from '../components/DateSelect';
import {phoneHeight} from '../utils/dimensions';
import AppSelect from '../components/shared/AppSelect';
import AppButton from '../components/shared/AppButton';
import AppModal from '../components/Modal';
import {supabase} from '../utils/api';
import {useAuth0} from 'react-native-auth0';
import UUIDGenerator from 'react-native-uuid-generator';

const CreateEventScreen = ({navigation}) => {
  const [end_date, setEnd_date] = useState('0-0-0');
  const [start_date, setStart_date] = useState('0-0-0');

  useEffect(() => {}, []);

  const [details, setDetails] = useState({
    description: '',
    eventName: '',
    location: '',
    date: '',
  });

  const [value, setValue] = useState('');
  const [options, setOptions] = useState([{label: 'Group 1', value: 1}]);

  async function addEvent() {
    try {
      const {data} = await supabase.from('events').insert({
        id: UUIDGenerator.getRandomUUID(),
        start_time: start_date,
        end_time: end_date,
        title: details.eventName,
        location: details.location,
        description: details.description,
        created_at: new Date(),
        updated_at: new Date(),
        attending: 1,
      });
      setModalVisible(true);
      setDetails({
        description: '',
        eventName: '',
        location: '',
        date: '',
      });
      setEnd_date('0-0-0');
      setStart_date('0-0-0');
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  const [modalVisible, setModalVisible] = useState(false);

  const formattedDate = new Date(date?.nativeEvent?.timestamp);

  console.log(formattedDate);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container2}>
          <AppInput
            label="Event Name"
            setText={val => {
              setDetails({...details, eventName: val});
            }}
          />
          <AppInput
            label="Description"
            multiline={true}
            setText={val => {
              setDetails({...details, description: val});
            }}
            numberOfLines={3}
          />
          <DateSelect
            value={formattedDate || '0-0-0'}
            label="Start Date"
            setDate={setStart_date}
            date={start_date}
          />
          <DateSelect
            value={formattedDate || '0-0-0'}
            label="End Date"
            setDate={setEnd_date}
            date={end_date}
          />
          <AppInput
            label="Location"
            setText={val => {
              setDetails({...details, location: val});
            }}
          />
          <AppSelect
            label="Select Group"
            options={options}
            value={value}
            setOptions={setOptions}
            setValue={setValue}
          />
          <AppButton onPress={addEvent} title="Create" />
          <AppModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            btnText="Go Back"
            msg="Event created successfully"
          />
        </View>
        {/*  <View style={{
    paddingHorizontal: 20,
    width: '100%'
    }}>
    </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: (phoneHeight / 2) * 1.81,
  },
  container2: {
    flex: 1,
    paddingHorizontal: 20,
    width: '100%',
  },
});

export default CreateEventScreen;
