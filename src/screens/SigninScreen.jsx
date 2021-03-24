import React, { useState } from 'react';
import {
  View, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import Text from '../components/Text/Text';
import Button from '../components/Button/Button';
import FullTitle from '../components/FullTitle/FullTitle';
import LabelInput from '../components/Form/LabelInput';
import CustomHeaderLayout from '../components/Layouts/CustomHeaderLayout';

import { colors, sizing } from '../styles';

const SigninScreen = ({ navigation }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <CustomHeaderLayout title="LOG IN">
      <View>
        <FullTitle title="Let's sign you in" subtitle="Welcome back, you’ve been missed!" />
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
              fontSize: sizing.font.s,
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
              fontSize: sizing.font.s,
              fontFamily: 'AvenirBook',
              color: colors.midGrey,
            }}
            >
              Don&#39;t have an account?
              {' '}

            </Text>
            <TouchableOpacity>
              <Text style={{
                fontSize: sizing.font.s,
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

export default SigninScreen;
