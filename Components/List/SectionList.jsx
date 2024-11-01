import {SectionList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// NOTE:
// 1. Always pass the data as word/value in the section data to render the data which again an array.
// 2. Always pass the item in the cbf of the renderItem

const CreatingSectionList = () => {
  const sectionData = [
    {
      id: 1,
      name: 'sainath',
      age: 20,
      data: ['reactjs', 'reactnative', 'node.js'],
    },
    {
      id: 2,
      name: 'veda',
      age: 25,
      data: ['reactjs', 'reactnative', 'node.js'],
    },
    {
      id: 3,
      name: 'ganesh',
      age: 51,
      data: ['reactjs', 'reactnative', 'node.js'],
    },
    {
      id: 4,
      name: 'mahi',
      age: 22,
      data: ['reactjs', 'reactnative', 'node.js'],
    },
  ];
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          backgroundColor: 'red',
          padding: 20,
        }}>
        SectionList
      </Text>
      <SectionList
        keyExtractor={item => item.id}
        sections={sectionData}
        //renderSectionHeader will show the section values like name,age
        renderSectionHeader={({section: {name, age}}) => (
          <View>
            <Text style={{margin: 5, fontSize: 25, color: 'red'}}>
              name :{name}
            </Text>
            <Text style={{margin: 5, fontSize: 25, color: 'red'}}>
              age : {age}
            </Text>
          </View>
        )}
        // Here RenderItem prop will show the array elements
        renderItem={({item: value}) => (
          <Text style={{fontSize: 20, marginLeft: 20}}>{value}</Text>
        )}
      />
    </View>
  );
};

export default CreatingSectionList;

const styles = StyleSheet.create({});
