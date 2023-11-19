import React from 'react';
import { View, StyleSheet } from 'react-native';
import LineChart from './components/LineChart';

const App = () => {
  const data = [10, 20, 30, 40, 20];
  const width = 300;
  const height = 200;

  return (
    <View style={styles.container}>
      <LineChart data={data} width={width} height={height} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
