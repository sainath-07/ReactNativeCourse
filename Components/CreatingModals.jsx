import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const CreatingModals = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={showModal} animationType="none">
        <View style={styles.centerModal}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is a Modal</Text>
            <Button title="Close Modal" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
      <View style={styles.openModalbtn}>
        <Button title="Open Modal" onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
};

export default CreatingModals;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  openModalbtn: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  centerModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    margin: 5,
    shadowColor: 'black',
    elevation: 5,
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 20,
    rowGap: 10,
  },
  modalText: {
    fontSize: 40,
  },
});
