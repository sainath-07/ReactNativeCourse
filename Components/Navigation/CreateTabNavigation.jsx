import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const CreateTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Home = () => {
  return (
    <View style={styles.main}>
      <Text>Home Screen</Text>
    </View>
  );
};
const Settings = () => {
  return (
    <View style={styles.main}>
      <Text>Settings Screen</Text>
    </View>
  );
};
const About = () => {
  return (
    <View style={styles.main}>
      <Text>About Screen</Text>
    </View>
  );
};
export default CreateTabNavigation;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
