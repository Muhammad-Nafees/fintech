import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const BottomIcon = () => {
  return (
    <Svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none">
      <Path
        d="M10.8 1.6L5.99999 6.4L1.19999 1.6"
        stroke="#667085"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default BottomIcon;

const styles = StyleSheet.create({});
