import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';
import {COLORS} from '../../styles/Colors';
import {fontFamilies} from '../../utils/fonts';

interface Props {
  viewDetails: string;
  image: ImageProps;
  bankInfo: string;
  ratedPercentage:string
  extraStyle:any
  item:any  
}
const BankCardInfo = ({viewDetails, image, bankInfo,ratedPercentage,extraStyle,item}: Props) => {
  return (
    <View style={[styles.basicCardInfoContainer,extraStyle]}>
      <View style={styles.basicCardSubContainer}>
        <View
          style={{
            flexDirection: 'row',
            width: horizontalScale(200),
            alignItems: 'center',
            // backgroundColor:"red"
          }}>
          <Image
            style={{
              width: horizontalScale(30),
              height: verticalScale(30),
              borderRadius: 50,
              resizeMode: 'contain',
            }}
            source={image}
          />
          <Text style={styles.bankNameText}>{item?.name}</Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: COLORS.grey500,
              paddingBottom: verticalScale(4),
              fontSize: moderateScale(13),
            }}>
            Annual Return
          </Text>
          <View style={styles.ratedPercentageContainer}>
            <Image
              style={{
                width: horizontalScale(14),
                height: verticalScale(14),
                resizeMode: 'contain',
              }}
              source={require('../../../assets/images/arrowTop.png')}
            />
            <Text
              style={{
                color: COLORS.success,
                fontFamily: fontFamilies.PublicSans.PublicSans_semiBold,
              }}>
             {ratedPercentage}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          width: horizontalScale(320),
          justifyContent: 'center',
          alignItems: 'center',
          height: verticalScale(48),
          borderRadius: 8,
          borderWidth: 1,
          borderColor: COLORS.greyColor,
          alignSelf: 'center',
          backgroundColor: COLORS.grey300,
          marginTop: verticalScale(20),
        }}>
        <Text style={styles.viewDetailsText}>{viewDetails}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BankCardInfo;

const styles = StyleSheet.create({
  basicCardInfoContainer: {
    borderWidth: 1,
    width: horizontalScale(340),
    borderRadius: 12,
    borderColor: COLORS.greyColor,
    alignSelf: 'center',
    paddingBottom: verticalScale(20),
    marginTop: verticalScale(10),
  },
  bankNameText: {
    fontFamily: fontFamilies.PublicSans.PublicSans_semiBold,
    fontSize: moderateScale(14),
    color: COLORS.BlackColor,
    width: horizontalScale(190),
    // backgroundColor:"red",
    paddingLeft: horizontalScale(12),
    lineHeight: 20,
  },
  viewDetailsText: {
    fontFamily: fontFamilies.PublicSans.Publicsans_regular,
    color: COLORS.grey500,
    fontSize: moderateScale(13),
  },
  basicCardSubContainer: {
    paddingTop: verticalScale(12),
    flexDirection: 'row',
    width: horizontalScale(320),
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems:"center"
  },
  ratedPercentageContainer: {
    borderWidth: 0.5,
    borderColor: COLORS.greyColor,
    flexDirection: 'row',
    height: verticalScale(32),
    borderRadius: 6,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: horizontalScale(100),
  },
});
