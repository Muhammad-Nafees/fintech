import {View} from 'react-native';
import AuthStackNavigator from './AuthStackNavigator';
import { useSelector } from 'react-redux';
import MainStackNavigator from './MainStackNavigator';

const Routes = () => {
  const isUser = useSelector((state:any)=>state.user.accessToken)
  console.log("🚀 ~ Routes ~ isUser:", isUser)
  return (
     
      !isUser? <AuthStackNavigator/> :<MainStackNavigator/>
     
  )
};
export default Routes;
