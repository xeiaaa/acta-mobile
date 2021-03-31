import React, { useState, useRef } from 'react';
import {
  View as RNView, TouchableOpacity, Alert, ScrollView, TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import Text from '../components/Text/Text';
import Button from '../components/Button/Button';
import FullTitle from '../components/FullTitle/FullTitle';
import LabelInput from '../components/Form/LabelInput';
import CustomHeaderLayout from '../components/Layouts/CustomHeaderLayout';
import withTextStyling from '../hoc/withTextStyling';

import { globals } from '../styles';
import { delay } from '../lib/helpers';
import { login } from '../lib/api';

const View = withTextStyling(RNView);

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(null);
  const passwordRef = useRef(null);

  const onSubmit = async () => {
    if (!email || !password || isLoading) {
      return;
    }

    try {
      setIsLoading(true);
      const { data } = await login(email, password);

      await delay(500);
      setIsLoading(false);
      Alert.alert('Welcome!', 'You are successfully logged in!');
      console.log({ data });
    } catch (err) {
      setIsLoading(false);
      Alert.alert('Error!', err.response.data.error || 'An unknown error occurred!');
      console.log(err.response);
    }
  };

  return (
    <CustomHeaderLayout title="LOG IN">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <FullTitle title="Let's sign you in" subtitle="Welcome back, you’ve been missed!" />
          <LabelInput
            labelText="Email Address"
            textInputProps={{
            // value: 'deemid',
              autoCapitalize: 'none',
              keyboardType: 'email-address',
              returnKeyType: 'next',
              onSubmitEditing: () => {
                passwordRef.current.focus();
              },
              onChangeText: setEmail,
              value: email,
              placeholder: 'juandelacruz@gmail.com',
            }}
          />
          <LabelInput
            labelText="Password"
            textInputProps={{
              secureTextEntry: !isPasswordVisible,
              ref: passwordRef,
              returnKeyType: 'go',
              onSubmitEditing: onSubmit,
              onChangeText: setPassword,
              value: password,
              placeholder: '********',
            }}
            hasIconButton
            iconName={!isPasswordVisible ? 'eye' : 'eye-off'}
            iconOnPress={() => setIsPasswordVisible(!isPasswordVisible)}
            containerStyle={{ marginTop: 19 }}
          />

          <View style={{ paddingHorizontal: 30, marginTop: 32, alignItems: 'flex-end' }}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('ForgotPasswordScreen')}>
              <Text type="medium-s-textBlack">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center', marginTop: 40 }}>
            <Button
              text="sign in"
              type={!email || !password ? 'disabled' : 'secondary'}
              isLoading={isLoading}
              touchableProps={{
                disabled: (!email || !password) || isLoading,
                onPress: onSubmit,
              }}
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
            <View style={{ ...globals.flexRow }} margin="t.m">
              <Text type="light-s-midGrey" margin="r.xxs">
                Don&#39;t have an account?
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('SignupScreen')}
              >
                <Text type="light-s-textBlack">Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

      </TouchableWithoutFeedback>
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
