import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ResponsiveLayout = () => {
  return (
    <View style={styles.main}>
      <View style={styles.view1}>
        <View style={styles.subview1}></View>
        <View style={styles.subview2}></View>
        <View style={styles.subview3}></View>
      </View>
      <View style={styles.view2}></View>
      <View style={styles.view3}></View>
    </View>
  );
};

export default ResponsiveLayout;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  view1: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  view2: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  view3: {
    flex: 1,
    backgroundColor: 'blue',
  },
  subview1: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
  subview2: {
    flex: 1,
    backgroundColor: 'orange',
  },
  subview3: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
