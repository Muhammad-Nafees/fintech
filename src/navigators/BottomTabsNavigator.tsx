import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MutualFunds from '../screens/mainStackScreens/MutualFunds';
import HomeScreen from '../screens/mainStackScreens/HomeScreen';
import HistoryScreen from '../screens/mainStackScreens/HistoryScreen';
import WithDrawScreen from '../screens/mainStackScreens/WithDrawScreen';
import {
  FundsIcon,
  HistoryIcon,
  HomeIcon,
  WithdrawIcon,
} from '../constant/images';
import {COLORS} from '../styles/Colors';
import {horizontalScale, moderateScale, verticalScale} from '../utils/metrics';
import {fontFamilies} from '../utils/fonts';
import {Children, ReactNode} from 'react';
import PostScreen from '../screens/mainStackScreens/PostScreen';

const Tab = createBottomTabNavigator();

interface CustomTabsProps {
  children: ReactNode;
  onPress: () => void;
}

const CustomTabBarButton = ({children, onPress}: CustomTabsProps) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}
    activeOpacity={0.6}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: COLORS.purpleColor,
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const BottomTabNavigation = () => {
  return (
    <>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: COLORS.whiteColor,
              height: verticalScale(80),
            },

            // tabBarStyle:{height:80}
          }}>
          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      //   right: 10,
                    }}>
                    <Image
                      style={{
                        tintColor: focused
                          ? COLORS.purpleColor
                          : COLORS.grey500,
                        width: 22,
                        height: 22,
                        resizeMode: 'cover',
                        alignSelf: 'center',
                      }}
                      source={HomeIcon}
                    />
                    <Text
                      style={{
                        color: focused ? COLORS.purpleColor : COLORS.grey500,
                        fontSize: moderateScale(13.5),
                        fontFamily: fontFamilies.PublicSans.Publicsans_regular,
                        paddingTop: 5,
                      }}>
                      Home
                    </Text>
                  </View>
                );
              },
            }}
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen
            name="Funds"
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      //   right: 25,
                    }}>
                    <Image
                      style={{
                        tintColor: focused
                          ? COLORS.purpleColor
                          : COLORS.grey500,
                        width: 22,
                        height: 22,
                        resizeMode: 'cover',
                        alignSelf: 'center',
                      }}
                      source={FundsIcon}
                    />
                    <Text
                      style={{
                        color: focused ? COLORS.purpleColor : COLORS.grey500,
                        fontSize: moderateScale(13.5),
                        fontFamily: fontFamilies.PublicSans.Publicsans_regular,
                        paddingTop: 5,
                      }}>
                      Funds
                    </Text>
                  </View>
                );
              },
            }}
            component={MutualFunds}
          />

          <Tab.Screen
            name="PostScreen"
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <Image
                    style={{
                      width: 100,
                      height: 100,
                      resizeMode: 'center',
                    }}
                    source={require('../../assets/images/posticon.png')}
                  />
                );
              },
              tabBarButton: props => <CustomTabBarButton {...props} />,
            }}
            component={PostScreen}
          />

          <Tab.Screen
            name="History"
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      //   left: 15,
                    }}>
                    <Image
                      style={{
                        tintColor: focused
                          ? COLORS.purpleColor
                          : COLORS.grey500,
                        width: 22,
                        height: 22,
                        resizeMode: 'cover',
                        alignSelf: 'center',
                      }}
                      source={HistoryIcon}
                    />
                    <Text
                      style={{
                        color: focused ? COLORS.purpleColor : COLORS.grey500,
                        fontSize: moderateScale(13.5),
                        fontFamily: fontFamilies.PublicSans.Publicsans_regular,
                        paddingTop: 5,
                      }}>
                      History
                    </Text>
                  </View>
                );
              },
            }}
            component={HistoryScreen}
          />

          <Tab.Screen
            name="Withdraw"
            options={{
              tabBarIcon: ({focused, color}) => {
                return (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      style={{
                        tintColor: focused
                          ? COLORS.purpleColor
                          : COLORS.grey500,
                        width: 22,
                        height: 22,
                        resizeMode: 'cover',
                        alignSelf: 'center',
                      }}
                      source={WithdrawIcon}
                    />
                    <Text
                      style={{
                        color: focused ? COLORS.purpleColor : COLORS.grey500,
                        fontSize: moderateScale(13.5),
                        fontFamily: fontFamilies.PublicSans.Publicsans_regular,
                        paddingTop: 5,
                      }}>
                      Withdraw
                    </Text>
                  </View>
                );
              },
            }}
            component={WithDrawScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default BottomTabNavigation;
