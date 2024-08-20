import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const LeftIcon = () => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <Svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none">
        <Path
          d="M15 18L9 12L15 6"
          stroke="#667085"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default LeftIcon;

const styles = StyleSheet.create({});
