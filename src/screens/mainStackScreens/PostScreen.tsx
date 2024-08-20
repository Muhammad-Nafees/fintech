import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../styles/Colors'
import { moderateScale } from '../../utils/metrics'
import { fontFamilies } from '../../utils/fonts'

const PostScreen = () => {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text style={{color:COLORS.grey500,fontSize:moderateScale(30),fontFamily:fontFamilies.PublicSans.PublicSans_semiBold}}>Post Screen</Text>
    </View>
  )
}

export default PostScreen

const styles = StyleSheet.create({})