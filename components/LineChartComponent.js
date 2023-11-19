import React from 'react';
import { View } from 'react-native';
import { LineChart, XAxis, YAxis, Grid } from 'react-native-svg-charts';

const LineChartComponent = ({ data }) => {
  // Extract timestamps and values for plotting
  const timestamps = data[0].Lux.map((entry) => entry.timestamp);
  const luxValues = data[0].Lux.map((entry) => parseInt(entry.value));

  return (
    <View style={{ flex: 1, margin: 10 }}>
      <View style={{ height: 200, flexDirection: 'row' }}>
        <YAxis
          data={luxValues}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{
            fill: 'grey',
            fontSize: 10,
          }}
          numberOfTicks={5}
        />
        <LineChart
          style={{ flex: 1, marginLeft: 16 }}
          data={luxValues}
          svg={{ stroke: 'rgb(134, 65, 244)' }}
          contentInset={{ top: 20, bottom: 20 }}
        >
          <Grid />
        </LineChart>
      </View>
      <XAxis
        style={{ marginHorizontal: -10, height: 20 }}
        data={luxValues}
        formatLabel={(value, index) => timestamps[index]}
        contentInset={{ left: 10, right: 10 }}
        svg={{ fontSize: 10, fill: 'black' }}
      />
    </View>
  );
};

export default LineChartComponent;
