import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [number, setNumber] = useState(0);
  const handleNumber = () => {
    setNumber(number + 1);
  }
  return (
    <View style={styles.container}>
      <Text onPress={handleNumber}>Increase {number}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

