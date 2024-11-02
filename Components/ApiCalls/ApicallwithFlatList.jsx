import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const ApicallwithFlatList = () => {
  const [list, setlist] = useState([]);
  useEffect(() => {
    FetchApi();
  }, []);
  const FetchApi = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    response = await response.json();
    setlist(response);
  };
  return (
    <View>
      <View>
        <Text>Api Call with Flat list</Text>
      </View>

      {list?.length > 0 && (
        <FlatList
          // numColumns={2}
          inverted
          horizontal
          showsHorizontalScrollIndicator={false}
          data={list}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                borderColor: '#000',
                borderWidth: 1,
                padding: 10,
                margin: 10,
              }}>
              <Text> id : {item.id}</Text>
              <Text> body : {item.body}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default ApicallwithFlatList;

const styles = StyleSheet.create({});
