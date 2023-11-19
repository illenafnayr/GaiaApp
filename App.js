import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import LineChartComponent from './components/LineChartComponent';

const data = [
  {
    "Lux": [
      {"value": "1798", "timestamp": "2023-11-17 21:14:12"},
      {"value": "1805", "timestamp": "2023-11-17 21:14:18"},
      {"value": "1798", "timestamp": "2023-11-17 21:22:47"},
      // ... (additional Lux entries)
      {"value": "7330", "timestamp": "2023-11-18 01:38:02"},
      {"value": "7", "timestamp": "2023-11-18 18:49:38"}
    ]
  },
  {
    "Infrared": [
      {"value": "453", "timestamp": "2023-11-17 21:14:12"},
      {"value": "453", "timestamp": "2023-11-17 21:14:18"},
      {"value": "452", "timestamp": "2023-11-17 21:22:47"},
      // ... (additional Infrared entries)
      {"value": "1", "timestamp": "2023-11-18 18:49:38"}
    ]
  },
  {
    "Visible": [
      {"value": "7078233", "timestamp": "2023-11-17 21:14:12"},
      {"value": "7078232", "timestamp": "2023-11-17 21:22:47"},
      // ... (additional Visible entries)
      {"value": "1", "timestamp": "2023-11-18 18:49:38"}
    ]
  },
  {
    "Full Spectrum": [
      {"value": "7078341", "timestamp": "2023-11-17 21:14:12"},
      {"value": "7078340", "timestamp": "2023-11-17 21:22:47"},
      // ... (additional Full Spectrum entries)
      {"value": "1", "timestamp": "2023-11-18 18:49:38"}
    ]
  }
]


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <LineChartComponent data={data} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
