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
import uuid from 'react-native-uuid';

const CreateEventScreen = ({navigation}) => {
  const [end_date, setEnd_date] = useState(0);
  const [start_date, setStart_date] = useState(0);
  const [options, setOptions] = useState([{label: 'Group 1', value: 1}]);

  const {user} = useAuth0();

  useEffect(() => {
    async function fetchGroups() {
      try {
        let { data, error } = await supabase
          .from('group')
          .select('*');
        if (error) {
          console.error('Error fetching groups:', error);
        } else {
          let optionsss = []
          data.forEach((group) =>{
              optionsss.push({label : group.title, value: group.id})
            }
          )
          setOptions(optionsss);
        }
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    }

    fetchGroups();
  }, []);

  const [details, setDetails] = useState({
    description: '',
    eventName: '',
    location: '',
    date: '',
  });

  const [value, setValue] = useState('');
  

  async function addEvent() {
    try {
      const data = await supabase.from('events').insert({
        id: uuid.v4(),
        start_time: start_date,
        end_time: end_date,
        title: details.eventName,
        creator_email: user.email,
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
      setEnd_date(0);
      setStart_date(0);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  const [modalVisible, setModalVisible] = useState(false);

 

  return (
    <ScrollView >
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
            label="Start Date"
            setDate={setStart_date}
            date={start_date}
          />
          <DateSelect
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
  },
  container2: {
    flex: 1,
    paddingHorizontal: 20,
    width: '100%',
  },
});

export default CreateEventScreen;
