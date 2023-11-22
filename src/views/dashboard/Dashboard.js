import React from 'react';
import { SafeAreaView } from 'react-native';
import LineChart from '../../components/line-chart/LineChart.js';
import { styles } from './styles.js'

const Dashboard = ({ data }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LineChart
        line_chart_data={[{ month: 'Jan', value: 300 }, { month: 'Feb', value: 754 }, { month: 'Mar', value: 999 }, { month: 'Apr', value: 563 }, { month: 'May', value: 865 }, { month: 'Jun', value: 300 }, { month: 'Jul', value: 543 }, { month: 'Aug', value: 234 }, { month: 'Sep', value: 574 }, { month: 'Oct', value: 356 }, { month: 'Nov', value: 734 }, { month: 'Dec', value: 323 },]}
        containerHeight={400}
        circleColor="#FC4"
        circleRadius={4} />
    </SafeAreaView>
  );
};

export default Dashboard;
