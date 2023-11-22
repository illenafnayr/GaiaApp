import React from 'react';
import { SafeAreaView } from 'react-native';
import LineChart from '../../components/line-chart/LineChart.js';
import { styles } from './styles.js'

const Dashboard = ({ data }) => {
  return (
    <SafeAreaView style={styles.container}>
        <LineChart 
          containerHeight={400}
          circleColor="#FC4"
          circleRadius={4} />
    </SafeAreaView>
  );
};

export default Dashboard;
