import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

const AddGIF = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 35, margin: 20}}>
        AddGIF
      </Text>

      <Image
        source={require('../assets/catGIF.gif')}
        style={{
          width: 300,
          height: 300,
          margin: 10,
          // resizeMode: 'contain',
        }}
      />

      <FastImage
        source={require('../assets/catGIF.gif')}
        style={{
          width: 300,
          height: 300,
          // resizeMode: 'fit',
        }}
      />
    </View>
  );
};

export default AddGIF;

const styles = StyleSheet.create({});
