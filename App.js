import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { getSensorData } from './src/gaiaapi/gaiaapi';
import Dashboard from './src/views/dashboard/Dashboard';
let data = [];

const App = () => {
  // useEffect(async ()=>{

  // })
  return (
    <SafeAreaView>
        <Dashboard />
    </SafeAreaView>
  );
};

export default App;
