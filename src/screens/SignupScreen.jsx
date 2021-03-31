import React, { useState, useRef } from 'react';
import {
  View as RNView, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert,
} from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';
import validator from 'validator';
import PropTypes from 'prop-types';

// Components
import Text from '../components/Text/Text';
import Button from '../components/Button/Button';
import FullTitle from '../components/FullTitle/FullTitle';
import LabelInput from '../components/Form/LabelInput';
import CustomHeaderLayout from '../components/Layouts/CustomHeaderLayout';
import withTextStyling from '../hoc/withTextStyling';

import { register } from '../lib/api';
import { delay } from '../lib/helpers';

// import { colors, sizing } from '../styles';

const View = withTextStyling(RNView);

const SignupScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(null);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [firstName, setFirstName] = useState('Test');
  const [lastName, setLastName] = useState('Test');
  const [email, setEmail] = useState('test1@test.com');
  const [username, setUsername] = useState('test1');
  const [password, setPassword] = useState('password');
  const [confirmPassword, setConfirmPassword] = useState('password');
  const [phone, setPhone] = useState('09191234566');

  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const phoneRef = useRef(null);

  const isFormFilledUp = () => firstName && lastName
    && email && username && password && confirmPassword && phone;

  const getFormErrors = () => {
    // email validation
    const errors = [];
    if (!validator.isEmail(email)) {
      errors.push('Email is invalid.\n');
    }

    if (confirmPassword !== password) {
      errors.push('Passwords do not match.\n');
    }

    if (validator.isInt(phone) && !phone.indexOf('09') === 0 && phone.length !== 11) {
      errors.push('Phone number is invalid.\n');
    }
    // validator.isNumeric()

    return errors;
  };

  const onSubmit = async () => {
    try {
      const errors = getFormErrors();

      if (errors.length > 0) {
        Alert.alert('Error!', errors.join(' '));
        return;
      }

      setIsLoading(true);
      const { data } = await register({
        email,
        username,
        contactNumber: phone,
        firstName,
        lastName,
        password,
      });

      await delay(500);
      setIsLoading(false);
      Alert.alert('Welcome!', 'You have successfully registered!');
      console.log({ data });
    } catch (err) {
      console.log(err.response);
      setIsLoading(false);
      Alert.alert('Error!', err.response.data.error || err.response.data.message || 'An unknown error occurred!');
    }
  };

  return (
    <CustomHeaderLayout title="REGISTER">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <InputScrollView keyboardOffset={300}>
          <FullTitle
            title="Create your account"
            subtitle="After your registration is complete, you can see our opportunity products."
          />
          <LabelInput
            labelText="First Name"
            textInputProps={{
              placeholder: 'Juan',
              autoCapitalize: 'words',
              returnKeyType: 'next',
              onSubmitEditing: () => {
                lastNameRef.current.focus();
              },
              onChangeText: setFirstName,
              value: firstName,
            }}
          />
          <LabelInput
            labelText="Last Name"
            textInputProps={{
              placeholder: 'Dela Cruz',
              ref: lastNameRef,
              autoCapitalize: 'words',
              returnKeyType: 'next',
              onSubmitEditing: () => {
                emailRef.current.focus();
              },
              onChangeText: setLastName,
              value: lastName,
            }}
          />
          <LabelInput
            labelText="Email"
            textInputProps={{
              placeholder: 'juandelacruz@gmail.com',
              ref: emailRef,
              autoCapitalize: 'none',
              keyboardType: 'email-address',
              returnKeyType: 'next',
              onSubmitEditing: () => {
                usernameRef.current.focus();
              },
              onChangeText: setEmail,
              value: email,
            }}
          />
          <LabelInput
            labelText="Username"
            textInputProps={{
              placeholder: 'juandelacruz',
              ref: usernameRef,
              autoCapitalize: 'none',
              returnKeyType: 'next',
              onSubmitEditing: () => {
                phoneRef.current.focus();
              },
              onChangeText: setUsername,
              value: username,
            }}
          />
          <LabelInput
            labelText="Phone"
            textInputProps={{
              placeholder: '09*********',
              ref: phoneRef,
              autoCapitalize: 'none',
              returnKeyType: 'next',
              onSubmitEditing: () => {
                passwordRef.current.focus();
              },
              onChangeText: setPhone,
              value: phone,
            }}
          />
          <LabelInput
            labelText="Password"
            textInputProps={{
              secureTextEntry: !isPasswordVisible,
              placeholder: '********',
              ref: passwordRef,
              autoCapitalize: 'none',
              returnKeyType: 'next',
              onSubmitEditing: () => {
                confirmPasswordRef.current.focus();
              },
              onChangeText: setPassword,
              value: password,
            }}
            hasIconButton
            iconName={!isPasswordVisible ? 'eye' : 'eye-off'}
            iconOnPress={() => setIsPasswordVisible(!isPasswordVisible)}
            containerStyle={{ marginTop: 19 }}
          />
          <LabelInput
            labelText="Confirm Password"
            textInputProps={{
              secureTextEntry: !isPasswordVisible,
              placeholder: '********',
              ref: confirmPasswordRef,
              autoCapitalize: 'none',
              returnKeyType: 'go',
              onSubmitEditing: onSubmit,
              onChangeText: setConfirmPassword,
              value: confirmPassword,
            }}
            containerStyle={{ marginTop: 19 }}
          />

          <View style={{ alignItems: 'center', marginTop: 40 }}>
            <Button
              text="sign up"
              type={!isFormFilledUp() ? 'disabled' : 'secondary'}
              isLoading={isLoading}
              touchableProps={{
                disabled: !isFormFilledUp() || isLoading,
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
            <View style={{ flexDirection: 'row', marginTop: 16 }}>
              <Text type="light-s-midGrey">
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text type="light-s-textBlack" margin="l.xxs-b.l">
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </InputScrollView>

      </TouchableWithoutFeedback>
    </CustomHeaderLayout>

  );
};

SignupScreen.defaultProps = {
  navigation: null,
};

SignupScreen.propTypes = {
  navigation: PropTypes.any,
};

export default SignupScreen;
