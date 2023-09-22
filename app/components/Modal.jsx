import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from 'react-native';
import AppButton from './shared/AppButton';

const AppModal = ({
  modalVisible,
  setModalVisible,
  msg = 'msg',
  btnText = 'Button',
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              source={require('../assets/svgs/success.gif')}
              style={{width: 120, height: 120}}
            />
            <Text style={styles.success}>Successful</Text>
            <Text style={styles.modalText}>{msg}</Text>
            <View style={{width: '80%'}}>
              <AppButton
                title={btnText}
                bgColor="#5ECC62"
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 55,
    alignItems: 'center',
    shadowColor: '#000',
    width: '80%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  success: {
    marginBottom: 8,
    textAlign: 'center',
    fontSize: 20,
    color: '#5ECC62',
    fontWeight: 'bold',
  },
  modalText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
  },
});

export default AppModal;
