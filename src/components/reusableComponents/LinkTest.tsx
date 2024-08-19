import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { COLORS } from '../../styles/Colors';

interface Props {
  firsText: string;
  secondText: string;
  extraStyles:any
}
const LinkTest = ({firsText, secondText,extraStyles}: Props) => {
  return (
    <View style={[{flexDirection:"row",},extraStyles]}>
      <Text style={{color:COLORS.grey500}}>{firsText}</Text>
      <TouchableOpacity activeOpacity={0.5}>
        <Text style={{color:COLORS.purpleColor}}>{secondText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LinkTest;

const styles = StyleSheet.create({});
