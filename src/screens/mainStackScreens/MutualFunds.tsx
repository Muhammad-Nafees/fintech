import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../styles/Colors';
import {moderateScale} from '../../utils/metrics';

const MutualFunds = () => {
  return (
    <SafeAreaView style={styles.mutualfundsContainer}>
      <View>
        <Text
          style={{
            color: COLORS.BlackColor,
            textAlign: 'center',
            fontSize: moderateScale(22),
          }}>
          MutualFund
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MutualFunds;

const styles = StyleSheet.create({
  mutualfundsContainer: {
    flex: 1,
    backgroundColor: COLORS.success,
  },
});
