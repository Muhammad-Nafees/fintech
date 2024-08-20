import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useAnimatedValue,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../styles/Colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';
import {fontFamilies} from '../../utils/fonts';
import LeftIcon from '../../components/svg/LeftIcon';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainStackParams} from '../../interface';
import SearchIcon from '../../components/svg/SearchIcon';
import FilterIcon from '../../components/svg/FilterIcon';
import BottomIcon from '../../components/svg/BottomIcon';
import BankCardInfo from '../../components/reusableComponents/BankCardInfo';
import {mutual_Funds_api} from '../../services/mutualfunds';
import {useSelector} from 'react-redux';
import {useQuery} from '@tanstack/react-query';

const MutualFunds = () => {
  const {accessToken} = useSelector((state: any) => state.user);
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredDataState, setFilteredDataState] = useState<[]>([]);
  const {data, error, isLoading} = useQuery({
    queryKey: ['mutualFunds'],
    queryFn: () => mutual_Funds_api(accessToken),
  });

  if (isLoading)
    return (
      <>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={40} color={COLORS.BlackColor} />
        </View>
      </>
    );

  if (error)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: COLORS.BlackColor,
            fontSize: moderateScale(30),
            fontFamily: fontFamilies.PublicSans.PublicSans_semiBold,
          }}>
          Error fetching data
        </Text>
      </View>
    );

  const filterHandlingData = (value: string) => {
    setSearchValue(value);

    const filteredData = data.filter((funds: any) => {
      return funds.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredDataState(filteredData || []);
    console.log('🚀 ~ filteredData ~ filteredData:', filteredData);
    return filteredData;
  };

  return (
    <SafeAreaView style={styles.mutualfundsContainer}>
      <StatusBar backgroundColor={COLORS.whiteColor} />
      <View
        style={{
          backgroundColor: COLORS.whiteColor,
          width: horizontalScale(375),
          height: verticalScale(90),
          shadowColor: COLORS.BlackColor,
          shadowOffset: {width: 1, height: 1},
          shadowOpacity: 0.4,
          shadowRadius: 3,
          elevation: 5,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: horizontalScale(18),
        }}>
        <LeftIcon />
        <Text style={styles.mutualfundstext}>Mutual Funds</Text>
      </View>

      <View
        style={{
          paddingTop: verticalScale(30),
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          paddingBottom: verticalScale(25),
        }}>
        <View style={styles.textInputContainer}>
          <SearchIcon />
          <TextInput
            placeholder="Search Funds"
            placeholderTextColor={COLORS.grey500}
            onChangeText={value => filterHandlingData(value)}
            value={searchValue}
            style={{
              width: horizontalScale(220),
              fontFamily: fontFamilies.inter.inter_regular_24pt,
              paddingLeft: horizontalScale(12),
              color: COLORS.BlackColor,
            }}
          />
        </View>
        <View style={styles.filtersContainer}>
          <FilterIcon />
          <BottomIcon />
        </View>
      </View>

      <ScrollView style={{}}>
        <View
          style={{
            paddingLeft: horizontalScale(18),
          }}>
          <Text style={styles.totalFundsText}>Total Funds (63)</Text>
        </View>

        {(searchValue.length > 0 ? filteredDataState : data).map(
          (item: any, index: any) => {
            return (
              <BankCardInfo
                item={item}
                key={index}
                viewDetails={'View Details'}
                bankInfo={'Alfalah Islamic Money Market Fund'}
                ratedPercentage={' + 20.20%'}
                image={require('../../../assets/images/bankmeezan.png')}
                extraStyle={{}}
              />
            );
          },
          // )
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MutualFunds;

const styles = StyleSheet.create({
  mutualfundsContainer: {
    flex: 1,
    backgroundColor: COLORS.whiteColor,
  },
  mutualfundstext: {
    color: COLORS.BlackColor,
    fontFamily: fontFamilies.inter.inter_regular_24pt,
    fontSize: moderateScale(22),
    paddingLeft: horizontalScale(10),
  },
  filtersContainer: {
    borderWidth: 0.5,
    borderRadius: 12,
    flexDirection: 'row',
    width: horizontalScale(70),
    height: verticalScale(55),
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: COLORS.grey500,
    backgroundColor: COLORS.grey300,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: horizontalScale(20),
    width: horizontalScale(250),
    borderWidth: 0.5,
    borderRadius: 12,
    height: verticalScale(55),
    borderColor: COLORS.grey500,
  },
  totalFundsText: {
    fontFamily: fontFamilies.PublicSans.Publicsans_regular,
    fontSize: moderateScale(13),
    color: COLORS.grey500,
  },
});
