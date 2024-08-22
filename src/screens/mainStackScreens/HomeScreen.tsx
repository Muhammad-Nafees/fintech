import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../../styles/Colors';
import {moderateScale} from '../../utils/metrics';
import {fontFamilies} from '../../utils/fonts';

const HomeScreen = () => {
  const products = [
    {
      price: 2000,
      category: 'Shoes',
    },
    {
      price: 300,
      category: 'Shoes',
    },
    {
      price: 1000,
      category: 'Ram',
    },
    {
      price: 5000,
      category: 'Shoes',
    },
    {
      price: 300,
      category: 'Diary milk',
    },

    {
      price: 9000,
      category: 'Laptop',
    },
    {
      price: 800,
      category: 'Oil',
    },
  ];

  const initialValue: number = 0;

  const calculatingProducts = products.reduce((acc, current) => {
    return acc + current.price;
  }, initialValue);

  console.log(
    '🚀 ~ calculatingProducts ~ calculatingProducts:',
    calculatingProducts,
  );

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          color: COLORS.grey500,
          fontSize: moderateScale(30),
          fontFamily: fontFamilies.PublicSans.PublicSans_semiBold,
        }}>
        HomeScreen
      </Text>
    </View>
  );
};

export default HomeScreen;
