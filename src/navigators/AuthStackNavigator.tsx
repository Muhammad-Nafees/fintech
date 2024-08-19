import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/authStackScreens/SignInScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStackNavigator;
