import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import * as d3Shape from 'd3-shape';
import * as d3Scale from 'd3-scale';

const LineChart = ({ data, width, height }) => {
  if (data.length < 2) {
    return null;
  }

  const xScale = d3Scale.scaleLinear().domain([0, data.length - 1]).range([0, width]);
  const yScale = d3Scale.scaleLinear().domain([0, Math.max(...data)]).range([height, 0]);

  const lineGenerator = d3Shape.line()
    .x((value, index) => xScale(index))
    .y(value => yScale(value))
    .curve(d3Shape.curveCardinal);

  const pathData = lineGenerator(data);

  return (
    <View style={styles.container}>
      <Svg height={height} width={width}>
        <Path d={pathData} stroke="blue" strokeWidth="2" fill="none" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default LineChart;
