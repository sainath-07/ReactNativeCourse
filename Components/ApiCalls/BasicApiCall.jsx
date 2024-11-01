import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const BasicApiCall = () => {
  const [list, setlist] = useState([]);

  useEffect(() => {
    FetchApi();
  }, []);

  const FetchApi = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    response = await response.json();
    // console.log(response, 'data');
    setlist(response);
  };
  return (
    <ScrollView style={{flex: 1}}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          backgroundColor: '#ddd',
          padding: 10,
        }}>
        BasicApiCall
      </Text>
      {list.map((Obj, index) => (
        <View
          style={{
            flex: 1,
            margin: 10,
            padding: 20,
            // borderRadius: 10,
            borderColor: '#222',
            // borderWidth: 1,
            shadowColor: 'rgba(0,0,0,0.5)',
            elevation: 4,
            // shadowOpacity: 50,
          }}>
          <Text style={{backgroundColor: '#ddd', padding: 10}}>
            {' '}
            id : {Obj.id}
          </Text>
          <Text> title : {Obj.title}</Text>
          <Text> body : {Obj.body}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default BasicApiCall;

const styles = StyleSheet.create({});
