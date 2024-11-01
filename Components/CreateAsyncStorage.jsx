import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateAsyncStorage = () => {
  const [logindetails, setLoginDetails] = useState({
    name: '',
    password: '',
  });

  const [data, setdata] = useState('');

  const handledata = (name, value) => {
    setLoginDetails({...logindetails, [name]: value});
  };

  const setAsynData = async () => {
    await AsyncStorage.setItem('Details', JSON.stringify(logindetails));
    alert('Data saved');
  };

  const getAsynData = async () => {
    let data = await AsyncStorage.getItem('Details');
    setdata(data);
  };
  const clearAsynData = async () => {
    await AsyncStorage.clear();
    setdata('');
    alert('Data cleared');
  };

  //   ============test without input fields

  const setAsyndata = async () => {
    await AsyncStorage.setItem(
      'name',
      JSON.stringify({name: 'sainath', surname: 'biradar'}),
    );
    alert('Data saved');
  };
  const getAsyndata = async () => {
    let name = await AsyncStorage.getItem('name');
    setdata(JSON.parse(name));
  };

  const clearAsyncData = async () => {
    await AsyncStorage.clear();
    setdata('');
    alert('storage data cleared');
  };
  console.log('Details--->', logindetails);
  return (
    <View>
      <Text style={{fontSize: 20, textAlign: 'center'}}>
        CreateAsyncStorage
      </Text>

      {/* <View style={{margin: 10, rowGap: 10}}>
        <TextInput
          placeholder="Enter name"
          value={logindetails.name}
          onChangeText={value => handledata('name', value)}
        />
        <TextInput
          placeholder="Enter password"
          value={logindetails.password}
          secureTextEntry={true}
          onChangeText={value => handledata('password', value)}
        />
      </View> */}

      <View>
        <Button title="Set Data" color="red" onPress={setAsyndata} />
        <Button title="Get Data" onPress={getAsyndata} />
        <Button title="Clear Data" color="green" onPress={clearAsyncData} />
      </View>

      <View>
        <Text
          style={{
            fontSize: 50,
            backgroundColor: '#000',
            margin: 10,
            color: '#fff',
            textAlign: 'center',
            borderRadius: 10,
          }}>
          text
        </Text>
      </View>

      <View>
        <Text>{data.name}</Text>
        <Text>{data.surname}</Text>
      </View>
    </View>
  );
};

export default CreateAsyncStorage;

const styles = StyleSheet.create({});
