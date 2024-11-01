import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CreateStatusBar = () => {
  return (
    <View style={{backgroundColor: 'lightblue', paddingTop: 30}}>
      <StatusBar translucent={true} backgroundColor="rgba(0, 0, 0, 0.2)" />
      <Text>Content under the translucent StatusBar</Text>
    </View>
  );
};

export default CreateStatusBar;

const styles = StyleSheet.create({});
