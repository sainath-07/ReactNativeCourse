import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const RadioButtons = () => {
  const [selected, setselected] = useState('');
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => setselected(1)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selected === 1 && <View style={styles.radiobg}></View>}
          </View>
          <Text
            style={[
              styles.radioText,
              {color: selected === 1 ? 'red' : 'blue'},
            ]}>
            Radio1
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setselected(2)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selected === 2 && <View style={styles.radiobg}></View>}
          </View>
          <Text
            style={[
              styles.radioText,
              {color: selected === 2 ? 'red' : 'blue'},
            ]}>
            Radio2
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RadioButtons;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 20,
  },
  radioWrapper: {flexDirection: 'row', columnGap: 10},
  radio: {
    width: 40,
    height: 40,
    borderColor: 'skyblue',
    borderWidth: 2,
    borderRadius: 20,
  },
  radioText: {
    fontSize: 30,
    fontWeight: 600,
    color: 'skyblue',
  },
  radiobg: {
    backgroundColor: 'gray',
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 3,
  },
});
