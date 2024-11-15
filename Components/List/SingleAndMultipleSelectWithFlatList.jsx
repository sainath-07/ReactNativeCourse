import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const SingleAndMultipleSelectWithFlatList = () => {
  const [data, setData] = useState([
    {id: 1, isSelected: false},
    {id: 2, isSelected: false},
    {id: 3, isSelected: false},
    {id: 4, isSelected: false},
    {id: 5, isSelected: false},
    {id: 6, isSelected: false},
    {id: 7, isSelected: false},
    {id: 8, isSelected: false},
    {id: 9, isSelected: false},
  ]);

  const selectitem = itemIndex => {
    const updatedata = data.map((item, index) => {
      if (index === itemIndex) {
        if (item.isSelected === false) {
          return {...item, isSelected: true};
        } else {
          return {...item, isSelected: false};
        }
      } else {
        if (item.isSelected == true) {
          return {...item, isSelected: true};
        } else {
          return {...item, isSelected: false};
        }
      }
    });
    setData(updatedata);
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => selectitem(index)}
            style={{
              borderWidth: 1,
              padding: 20,
              backgroundColor: item.isSelected === true ? 'red' : 'white',
            }}>
            <Text style={{textAlign: 'center', fontSize: 25}}>{`item ${
              index + 1
            }`}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SingleAndMultipleSelectWithFlatList;

const styles = StyleSheet.create({});
