import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {phoneFontScale, phoneHeight, phoneWidth} from '../../utils/dimensions';
import {StyleSheet} from 'react-native';

export default function AppInput({
  setText,
  placeholder = 'placeholder',
  style,
  label = 'Label',
  multiline = false,
  maxLength,
  numberOfLines,
}) {
  const [color, setColor] = useState('#333333');
  return (
    <View
      style={{
        width: '100%',
      }}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={{
          marginBottom: (phoneHeight * 0.07) / 2,
          width: '100%',
          ...style,
        }}>
        <TextInput
          onFocus={() => {
            setColor('#FF9405');
          }}
          onBlur={() => {
            setColor('#333');
          }}
          selectTextOnFocus={true}
          style={styles.mainInput(color)}
          placeholder={placeholder}
          placeholderTextColor="#00000082"
          onChangeText={setText}
          numberOfLines={numberOfLines}
          multiline={multiline}
          maxLength={maxLength}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: '#75818F',
    fontSize: 20,
    marginBottom: 10,
  },
  mainInput: color => ({
    paddingVertical: (phoneHeight * 0.024) / 2,
    paddingHorizontal: (phoneWidth * 0.1) / 2,
    backgroundColor: '#fff',
    fontSize: (phoneFontScale * 36) / 2,
    borderRadius: 10,
    color: '#333333',
    borderColor: color,
    borderWidth: 1,
  }),
});
