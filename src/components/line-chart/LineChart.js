import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, View } from 'react-native';
import { styles } from './styles';
import Svg, {G, Line, Circle} from 'react-native-svg';

const window_width = Dimensions.get('window').width

const LineChart = ({containerHeight = 400, circleColor = "yellow", circleRadius = 4, axisColor='green', axisWidth=2}) => {
  const marginFor_x_fromLeft = 50;
  const marginFor_y_fromBottom = 50;
  const padding_fromscreenBorder = 20;

  const x_axis_x1_point = marginFor_x_fromLeft;
  const x_axis_y1_point = containerHeight - marginFor_y_fromBottom;
  const x_axis_x2_point = window_width - padding_fromscreenBorder;
  const x_axis_y2_point = containerHeight - marginFor_y_fromBottom;

  const y_axis_x1_point = marginFor_x_fromLeft;
  const y_axis_y1_point = padding_fromscreenBorder;
  const y_axis_x2_point = marginFor_x_fromLeft
  const y_axis_y2_point = containerHeight - marginFor_y_fromBottom;

  const animated_x_axis_width = useRef(new Animated.Value(x_axis_x1_point),).current;
  const animated_y_axis_width = useRef(new Animated.Value(y_axis_y2_point),).current;
  const animated_circle_radius = useRef(new Animated.Value(0)).current;

  const AnimatedSvg = Animated.createAnimatedComponent(Svg);
  const AnimatedLine = Animated.createAnimatedComponent(Line);
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  useEffect(()=>{
    start_axis_circle_animation();
    start_x_y_axis_animation();
  }, [])
  
  const start_axis_circle_animation = () => {
    Animated.timing(animated_circle_radius, {
      toValue: circleRadius,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }
  const start_x_y_axis_animation = () => {
    Animated.timing(animated_x_axis_width, {
      toValue: x_axis_x2_point,
      duration: 1500,
      delay: 500,
      useNativeDriver: true
    }).start();
    Animated.timing(animated_y_axis_width, {
      toValue: y_axis_y1_point,
      duration: 1500,
      delay: 500,
      useNativeDriver: true
    }).start();
  }

  const render_x_y_axis = () => {
     return (
      <G key="x-axis y-axis">
        <AnimatedCircle
          key="x-axis x1y1-circle"
          cx={x_axis_x1_point}
          cy={x_axis_y1_point}
          fill={circleColor}
          r={animated_circle_radius}
        />
        <AnimatedCircle
          key="x-axis x2y2-circle"
          cx={x_axis_x2_point}
          cy={x_axis_y2_point}
          fill={circleColor}
          r={animated_circle_radius}
        />
        <AnimatedCircle
          key="y-axis x1y1-circle"
          cx={y_axis_x1_point}
          cy={y_axis_y1_point}
          fill={circleColor}
          r={animated_circle_radius}
        />
        <AnimatedLine
        key="x-axis"
          x1={x_axis_x1_point}
          y1={x_axis_y1_point}
          x2={animated_x_axis_width}
          y2={x_axis_y2_point}
          stroke={axisColor}
          strokeWidth={axisWidth}
        />
        <AnimatedLine
        key="y-axis"
          x1={y_axis_x1_point}
          y1={animated_y_axis_width}
          x2={y_axis_x2_point}
          y2={y_axis_y2_point}
          stroke={axisColor}
          strokeWidth={axisWidth}
        />
      </G>
     )
  }
  return (
    <View style={[styles.svgWrapper, {height: containerHeight}]}>
      <AnimatedSvg height="100%" width="100%" style={styles.svgStyle}>
        {render_x_y_axis()}
      </AnimatedSvg>
    </View>
  );
};

export default LineChart;
