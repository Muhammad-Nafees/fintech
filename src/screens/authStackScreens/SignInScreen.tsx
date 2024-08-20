import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import {fontFamilies} from '../../utils/fonts';
import {moderateScale, verticalScale} from '../../utils/metrics';
import CustomInput from '../../components/reusableComponents/CustomInput';
import {COLORS} from '../../styles/Colors';
import {useState} from 'react';
import {Formik} from 'formik';
import {validationLogin} from '../../validation';
import LinkTest from '../../components/reusableComponents/LinkTest';
import CustomButton from '../../components/reusableComponents/CustomButton';
import {LoginCredientialsSchema} from '../../interface';
import {login_api} from '../../services/auth';
import {useDispatch} from 'react-redux';
import {Dispatch, UnknownAction} from 'redux';
import {loginUser} from '../../reduxTk/features/UserSlice';

const SignInScreen = () => {
  const dispatch = useDispatch<Dispatch<UnknownAction>>();
  const [isLoading, setIsLoading] = useState(false);
  const [isIconVisible, setIsIconVisible] = useState<boolean>(true);

  const handleIconVisible = () => {
    setIsIconVisible(!isIconVisible);
  };

  const handleSubmit = async (values: LoginCredientialsSchema) => {
    setIsLoading(true);
    try {
      const responseData = await login_api(values);
      dispatch(loginUser(responseData.access_token));
      setIsLoading(false);
      return responseData;
    } catch (error) {
      setIsLoading(false);
      console.log('🚀 ~ handleSubmit ~ error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.signinContainer}>
      <KeyboardAvoidingView behavior="padding">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={validationLogin}>
          {({values, errors, touched, handleChange, submitForm}) => (
            <View style={{paddingTop: verticalScale(60), alignSelf: 'center'}}>
              <StatusBar backgroundColor={COLORS.whiteColor} />
              <Text style={styles.loginText}>Login</Text>

              <View style={{paddingTop: verticalScale(14)}}>
                <CustomInput
                  placeholder="Email address"
                  onchange={handleChange('email')}
                  touched={touched.email}
                  value={values.email}
                  error={errors.email}
                  initialTouched={false}
                />
              </View>

              <View style={{paddingTop: verticalScale(12)}}>
                <CustomInput
                  placeholder="Login pin"
                  onchange={handleChange('password')}
                  touched={touched.password}
                  value={values.password}
                  error={errors.password}
                  initialTouched={true}
                  handleIconVisible={handleIconVisible}
                  isIconVisible={isIconVisible}
                />
              </View>

              <LinkTest
                firsText={'Forgot pin? '}
                secondText={'reset'}
                extraStyles={{
                  paddingTop: verticalScale(10),
                }}
              />

              <CustomButton
                isLoading={isLoading}
                text={'Login'}
                extraStyles={{
                  paddingTop: verticalScale(20),
                }}
                onPress={submitForm}
              />

              <LinkTest
                firsText={'Don’t have an account? '}
                secondText={'Sign up'}
                extraStyles={{
                  paddingTop: verticalScale(5),
                  alignSelf: 'center',
                }}
              />
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  signinContainer: {
    flex: 1,
    backgroundColor: COLORS.whiteColor,
  },
  loginText: {
    color: COLORS.BlackColor,
    fontFamily: fontFamilies.PublicSans.PublicSans_semiBold,
    fontSize: moderateScale(22),
  },
});
