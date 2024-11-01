import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ComponentLoopwithFlatList = () => {
  const data = [
    {id: 1, name: 'sainath', email: 'sainath@gmail.com'},
    {id: 2, name: 'veda', email: 'veda@gmail.com'},
    {id: 3, name: 'Ramesh', email: 'Ramesh@gmail.com'},
    {id: 4, name: 'Venu', email: 'VenuYadav@gmail.com'},
  ];
  return (
    <View>
      <Text
        style={{
          color: '#fff',
          backgroundColor: '#000',
          padding: 20,
          fontSize: 20,
          textAlign: 'center',
        }}>
        ComponentLoopwithFlatList
      </Text>

      <FlatList
        data={data}
        renderItem={({item}) => <UserData item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ComponentLoopwithFlatList;

const UserData = ({item}) => {
  return (
    <View style={styles.container} key={item.id}>
      <Text style={styles.childComponent}>{item.name}</Text>
      <Text style={styles.childComponent}>{item.email}</Text>
      <Text style={styles.childComponent}>{item.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  childComponent: {
    fontSize: 25,
    color: 'red',
    flex: 1, // it will Occupy whole space of the parent component.
    // width: 50, // if apply the width or not applied the widht to child component by disabling the flex  :1  then they are working as block level component
    // borderColor: 'red',
    // borderWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 5,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    borderColor: 'blue',
    borderWidth: 1,
  },
});
