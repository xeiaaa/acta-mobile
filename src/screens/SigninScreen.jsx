import React, { useState } from 'react';
import {
  View, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import Text from '../components/Text/Text';
import Button from '../components/Button/Button';
import Title from '../components/Title/Title';
import LabelInput from '../components/Form/LabelInput';
import CustomHeaderLayout from '../components/Layouts/CustomHeaderLayout';

import { colors } from '../styles';

const SigninScreen = ({ navigation }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <CustomHeaderLayout title="LOG IN">
      <View>
        <Title title="Let's sign you in" subtitle="Welcome back, you’ve been missed!" />
        <LabelInput
          labelText="Username or Email"
          textInputProps={{
            // value: 'deemid',
          }}
        />
        <LabelInput
          labelText="Password"
          textInputProps={{
            secureTextEntry: !isPasswordVisible,
          }}
          hasIconButton
          iconName={!isPasswordVisible ? 'eye' : 'eye-off'}
          iconOnPress={() => setIsPasswordVisible(!isPasswordVisible)}
          containerStyle={{ marginTop: 19 }}
        />

        <View style={{ paddingHorizontal: 30, marginTop: 32, alignItems: 'flex-end' }}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            <Text style={{
              color: colors.text.black,
              fontSize: 14,
            }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <Button
            text="sign in"
            type="secondary"
          />
          <Button
            text="continue with google"
            type="google"
            buttonStyle={{
              marginTop: 16,
            }}
            outline
          />
          <Button
            text="continue with fb"
            type="fb"
            buttonStyle={{
              marginTop: 16,
            }}
            outline
          />
          <View style={{ flexDirection: 'row', marginTop: 16 }}>
            <Text style={{
              fontSize: 14,
              fontFamily: 'AvenirBook',
              color: colors.midGrey,
            }}
            >
              Don&#39;t have an account?
              {' '}

            </Text>
            <TouchableOpacity>
              <Text style={{
                fontSize: 14,
                fontFamily: 'AvenirBook',
                color: colors.text.black,
              }}
              >
                Sign Up

              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </CustomHeaderLayout>

  );
};

SigninScreen.defaultProps = {
  navigation: null,
};

SigninScreen.propTypes = {
  navigation: PropTypes.any,
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
//   absoluteCenter: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export default SigninScreen;
