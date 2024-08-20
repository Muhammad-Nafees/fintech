import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { COLORS } from '../../styles/Colors';
import { moderateScale } from '../../utils/metrics';
import { fontFamilies } from '../../utils/fonts';

const HistoryScreen = () => {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text style={{color:COLORS.grey500,fontSize:moderateScale(30),fontFamily:fontFamilies.PublicSans.PublicSans_semiBold}}>HistoryScreen</Text>
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({});
