import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CreatingPressableEvents = () => {
  return (
    <View
      style={styles.main}

      // onLongPress={() => console.warn('LongPress')}
      // onPressIn={() => console.warn('Press In')}
      // onPressOut={() => console.warn('Press Out')}
    >
      <Pressable
        onLongPress={() => console.warn('Long Pressed')}
        delayLongPress={1000} // Delay in milliseconds (e.g., 1000 ms = 1 second)
      >
        <Text style={styles.textstyles} onPress={() => console.warn('View')}>
          CreatingPressableEvent
        </Text>
      </Pressable>
    </View>
  );
};

export default CreatingPressableEvents;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  textstyles: {
    fontSize: 20,
    backgroundColor: 'black',
    color: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 15,
  },
});
