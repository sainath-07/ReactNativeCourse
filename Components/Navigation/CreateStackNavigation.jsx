import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const CreateStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        //   screenOptions applies styles to all screens...
        screenOptions={{
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: 'black'},
          headerTitleStyle: {fontSize: 30},
          headerTitleAlign: 'center',
          headerRight: () => (
            <Button
              title="Press Me"
              color="#222"
              onPress={() => alert('Button pressed!')}
            />
          ),
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          //   options prop will apply the styling to only particular screen
          options={{
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: '#fac031'},
            headerTitleStyle: {fontSize: 25},
            headerTitleAlign: 'center',
            headerRight: () => <SearchBox />,
            headerLeft: () => (
              <Button
                title="Left side"
                color="#222"
                onPress={() => alert('Button pressed!')}
              />
            ),
          }}
        />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CreateStackNavigation;

const SearchBox = () => {
  return (
    <TextInput
      placeholder="Search ..🔍"
      style={{
        borderColor: '#222',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
      }}
    />
  );
};

const HomeScreen = props => {
  const name = 'sainath';
  const age = 24;
  return (
    <View style={styles.main}>
      <Text style={{textAlign: 'center', fontSize: 20}}>HomeScreen</Text>
      <Button
        title="SettingScreen"
        onPress={() => props.navigation.navigate('SettingScreen', {name, age})}
      />
      <Button
        title="AboutScreen"
        color="red"
        onPress={() => props.navigation.navigate('About')}
      />
    </View>
  );
};

const SettingScreen = ({route}) => {
  const {name, age} = route.params;
  return (
    <View style={styles.main}>
      <Text style={{textAlign: 'center', fontSize: 20}}>SettingScreen</Text>
      <Text style={{textAlign: 'center', fontSize: 30}}>name : {name}</Text>
      <Text style={{textAlign: 'center', fontSize: 30}}>age :{age}</Text>
    </View>
  );
};

const AboutScreen = () => {
  return (
    <View style={styles.main}>
      <Text style={{textAlign: 'center', fontSize: 20}}>AboutScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
});
