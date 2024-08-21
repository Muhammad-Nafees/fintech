import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../styles/Colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';
import {fontFamilies} from '../../utils/fonts';
import EyeIcon from 'react-native-vector-icons/Feather';
import ErrorIcon from 'react-native-vector-icons/MaterialIcons';
interface Props {
  placeholder: string;
  onchange: (value: string) => void;
  touched?: boolean | undefined;
  error: string | undefined;
  value: string | undefined;
  initialTouched: boolean;
  handleIconVisible?:any
  isIconVisible?:boolean;

}

const inputStyle: StyleProp<TextStyle> = {
  color: 'rgba(0,0,0,1)',
  width: horizontalScale(270),
  textAlignVertical: 'center',
  fontWeight: '400',
  paddingLeft: horizontalScale(20),
  fontFamily: fontFamilies.PublicSans.Publicsans_regular,
  fontSize: moderateScale(12),
};

const CustomInput = ({
  placeholder,
  onchange,
  initialTouched,
  error,
  value,
  touched,
  handleIconVisible,
  isIconVisible
}: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = (e: any) => {
    setIsFocused(false);
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          width: horizontalScale(320),
          backgroundColor: COLORS.grey300,
          borderRadius: 12,
          alignItems: 'center',
          borderWidth: 0.5,
          borderColor: COLORS.greyColor,
          height: verticalScale(60),
        }}>
        <TextInput
          style={inputStyle}
          secureTextEntry={isIconVisible}
          placeholder={placeholder}
          onChangeText={(value: string) => onchange(value)}
          underlineColorAndroid="transparent"
          placeholderTextColor={COLORS.grey500}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
        />

        {initialTouched && (
          <TouchableOpacity onPress={handleIconVisible} activeOpacity={0.5}>
            <EyeIcon name={!isIconVisible ? "eye":"eye-off"} size={22} color={COLORS.grey500} />
          </TouchableOpacity>
        )}
      </View>

      {error && ((touched && !value) || (error && value) || isFocused) &&(
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
            marginTop: verticalScale(5),
          }}>
          <ErrorIcon name="error" size={20} color="red" />
          <Text
            style={{
              color: 'red',
              fontWeight: '500',
              paddingHorizontal: 4,
              fontFamily: fontFamilies.PublicSans.PublicSans_semiBold,
            }}>
            {error}
          </Text>
        </View>
      )}
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
