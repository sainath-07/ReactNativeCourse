import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const StylingOfButton = () => {
  return (
    <View>
      <ScrollView>
        <TouchableHighlight>
          <Text style={styles.button}> button</Text>
        </TouchableHighlight>
        <TouchableOpacity>
          <Text style={[styles.button, styles.success, {fontWeight: 900}]}>
            {' '}
            sucess
          </Text>
        </TouchableOpacity>
        <TouchableHighlight>
          <Text style={[styles.button, styles.danger]}> danger</Text>
        </TouchableHighlight>
        <TouchableOpacity>
          <Text style={[styles.button, styles.warning]}> warning</Text>
        </TouchableOpacity>
        <TouchableHighlight>
          <Text style={[styles.button, styles.primary]}> primary</Text>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
};

export default StylingOfButton;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    color: '#fff',
    backgroundColor: 'black',
    margin: 20,
    padding: 10,
    fontSize: 30,
    textAlign: 'center',
    borderRadius: 20,
    shadowColor: 'red',
    elevation: 10,
    shadowOpacity: 20,
  },
  primary: {backgroundColor: 'blue'},
  success: {backgroundColor: 'green'},
  danger: {backgroundColor: 'red'},
  warning: {backgroundColor: 'gold'},
});
