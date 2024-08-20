import {View, Text} from 'react-native';
import React from 'react';
import { moderateScale } from '../../utils/metrics';
import { COLORS } from '../../styles/Colors';
import { fontFamilies } from '../../utils/fonts';

const WithDrawScreen = () => {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <Text style={{color:COLORS.grey500,fontSize:moderateScale(30),fontFamily:fontFamilies.PublicSans.PublicSans_semiBold}}>WithDraw Screen</Text>
  </View>
  );
};

export default WithDrawScreen;
