import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MutualFunds from '../screens/mainStackScreens/MutualFunds';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MutualFunds" component={MutualFunds} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
