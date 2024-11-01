import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const CreatingActivityIndicator = () => {
  const [showloader, setShowLoader] = useState(true);

  return (
    <View style={styles.main}>
      {/* size={100} */}
      <ActivityIndicator size="large" animating={showloader} />
      <Button
        title="Show & Hide loader on press"
        onPress={() => setShowLoader(!showloader)}
      />
    </View>
  );
};

export default CreatingActivityIndicator;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
