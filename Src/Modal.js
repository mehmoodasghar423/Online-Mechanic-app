import React, { useState } from 'react';
import { Image } from 'react-native';
import { Modal, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const ModalWithOptions = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.ModalHeading}
      onPress={() => setModalVisible(true)}>
      <Image style={styles.ModalHeadingImage}
        source={require("./assets/Location.png")}/>
        <Text style={styles.ModalHeadingText}>Select Your Location</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>

            <TouchableOpacity
              style={styles.option}
              onPress={() => handleOptionSelect('Kmal Chishti Mor, Kasur')}
            >
              <Text>Kmal Chishti Mor,Kasur</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.option}
              onPress={() => handleOptionSelect('Kchehry Chowk, Kasur')}
            >
              <Text>Kchehry Chowk,Kasur</Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={styles.option}
              onPress={() => handleOptionSelect('Shahbaz Khan Road, Kasur')}
            >
              <Text>Shahbaz Khan Road, Kasur</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.option}
              onPress={() => handleOptionSelect('Steel Bhag Mor, Kasur')}
            >
              <Text>Steel Bhag Mor, Kasur</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.option}
              onPress={() => handleOptionSelect('New Bus Stand, Kasur')}
            >
              <Text>New Bus Stand, Kasur</Text>
            </TouchableOpacity>


          </View>
        </View>
      </Modal>

      {selectedOption !== '' && (
        <Text> {selectedOption}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ModalHeading:{
flexDirection:"row"
  },
  ModalHeadingImage:{
    width:45,
    height:50
  },
  ModalHeadingText:{
alignSelf:"center"
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },

});

export default ModalWithOptions;
