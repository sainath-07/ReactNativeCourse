import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const DynamicRadioButtons = () => {
  const [selected, setselected] = useState('');

  const data = [
    {id: 1, skill: 'NODE'},
    {id: 2, skill: 'PHP'},
    {id: 3, skill: 'Laravel'},
    {id: 4, skill: 'React-Native'},
    {id: 5, skill: 'Mongodb'},
  ];

  return (
    <View style={styles.main}>
      {data.map(({id, skill}) => {
        return (
          <TouchableOpacity onPress={() => setselected(id)} key={id}>
            <View style={styles.radioWrapper}>
              <View style={styles.radio}>
                {selected === id && <View style={styles.radiobg}></View>}
              </View>
              <Text
                style={[
                  styles.radioText,
                  {color: selected === id ? 'red' : 'blue'},
                ]}>
                {skill}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default DynamicRadioButtons;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 20,
  },
  radioWrapper: {
    flexDirection: 'row',
    width: 400,
    columnGap: 20,
    justifyContent: 'start',
  },
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
