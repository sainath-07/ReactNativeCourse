import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DynamicGrid = () => {
  const customArrayList = [
    {id: 1, name: 'sainath1'},
    {id: 2, name: 'veda'},
    {id: 3, name: 'mahi'},
    {id: 4, name: 'ravi'},
    {id: 5, name: 'Babu'},
    {id: 6, name: 'Rekha'},
    {id: 7, name: 'Babu7'},
    {id: 8, name: 'rami'},
    {id: 9, name: 'Babu9'},
    {id: 10, name: 'sainath10'},
    {id: 1, name: 'sainath1'},
    {id: 2, name: 'veda'},
    {id: 3, name: 'mahi'},
    {id: 4, name: 'ravi'},
    {id: 1, name: 'sainath1'},
    {id: 2, name: 'veda'},
    {id: 3, name: 'mahi'},
    {id: 4, name: 'ravi'},
    {id: 5, name: 'Babu'},
    {id: 6, name: 'Rekha'},
    {id: 7, name: 'Babu7'},
    {id: 8, name: 'rami'},
    {id: 9, name: 'Babu9'},
    {id: 10, name: 'sainath10'},
    {id: 7, name: 'Babu7'},
    {id: 8, name: 'rami'},
    {id: 9, name: 'Babu9'},
    {id: 10, name: 'sainathLast'},
  ];
  return (
    <View>
      {/* <Text style={{fontSize: 50, backgroundColor: 'red', textAlign: 'center'}}>
        DynamicGrid
      </Text> */}

      <ScrollView>
        <View
          style={{
            marginTop: 10,
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            borderWidth: 2,
            rowGap: 50,
            columnGap: 5,
          }}>
          {customArrayList.map(({name, id}) => (
            <Text key={id} style={styles.textStyling}>
              {name}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DynamicGrid;

const styles = StyleSheet.create({
  textStyling: {
    fontSize: 30,
    margin: 5,
    padding: 5,
    borderWidth: 2,
    textAlign: 'center',
    borderColor: 'black',
    backgroundColor: 'black',
    color: '#fff',
    width: 120,
    height: 120,
    marginBottom: 10,
  },
});
