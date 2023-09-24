import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {phoneFontScale, phoneHeight, phoneWidth} from '../utils/dimensions';
import {TouchableWithoutFeedback} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const DateSelect = ({label = 'label', setDate, date}) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={{width: '100%'}}>
      <Text style={styles.label}>{label}</Text>

      <TouchableWithoutFeedback
        onPress={() => {
          setOpen(true);
        }}>
        <View style={styles.main}>
          <Text style={styles.text}>Select Date: {date && date}</Text>
        </View>
      </TouchableWithoutFeedback>
      {open && (
        <RNDateTimePicker
          mode="date"
          value={new Date()}
          onChange={val => {
            setDate(val);
            setOpen(false);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#75818F',
    fontSize: 20,
    marginBottom: 10,
  },
  main: {
    paddingVertical: (phoneHeight * 0.034) / 2,
    paddingHorizontal: (phoneWidth * 0.1) / 2,
    backgroundColor: '#fff',
    fontSize: (phoneFontScale * 36) / 2,
    borderRadius: 10,
    color: '#333333',
    borderColor: '#333333',
    borderWidth: 1,
    width: '100%',
    marginBottom: (phoneHeight * 0.07) / 2,
  },
  text: {
    color: '#333333',
  },
});

export default DateSelect;
