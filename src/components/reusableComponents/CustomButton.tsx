import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../../utils/metrics';
import {COLORS} from '../../styles/Colors';
import {fontFamilies} from '../../utils/fonts';

interface Props {
  text: string;
  extraStyles: any;
  onPress: any;
  isLoading: boolean;
}

const CustomButton = ({text, extraStyles, onPress, isLoading}: Props) => {
  return (
    <View style={[extraStyles]}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={[styles.CustomButtonContainer]}>
        {!isLoading ? (
          <Text style={styles.loginText}>{text}</Text>
        ) : (
          <ActivityIndicator size={20} color={COLORS.BlackColor} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  CustomButtonContainer: {
    width: horizontalScale(320),
    backgroundColor: COLORS.purpleColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    height: verticalScale(50),
  },
  loginText: {
    fontFamily: fontFamilies.PublicSans.Publicsans_regular,
    color: COLORS.whiteColor,
  },
});
