import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CreatePlatFrom = () => {
  return (
    <View>
      <Text style={styles.textStyles}>CreatePlatFrom</Text>
      <Text style={{fontSize: 30}}>
        Platform : {JSON.stringify(Platform.OS)}
      </Text>
      <Text>{JSON.stringify(Platform)}</Text>
      <Text>{JSON.stringify(Platform.constants.reactNativeVersion)}</Text>
    </View>
  );
};

export default CreatePlatFrom;

const styles = StyleSheet.create({
  textStyles: {
    color: Platform.OS === 'android' ? 'red' : 'yellow',
    fontSize: 50,
  },
});
