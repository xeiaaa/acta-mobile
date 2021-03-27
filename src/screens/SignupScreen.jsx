import React, { useState } from 'react';
import {
  View, TouchableOpacity, ScrollView,
} from 'react-native';
// import PropTypes from 'prop-types';

// Components
import Text from '../components/Text/Text';
import Button from '../components/Button/Button';
import FullTitle from '../components/FullTitle/FullTitle';
import LabelInput from '../components/Form/LabelInput';
import CustomHeaderLayout from '../components/Layouts/CustomHeaderLayout';

// import { colors, sizing } from '../styles';

const SignupScreen = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <CustomHeaderLayout title="REGISTER">
      <ScrollView>
        <FullTitle
          title="Create your account"
          subtitle="After your registration is complete, you can see our opportunity products."
        />
        <LabelInput
          labelText="Username"
          textInputProps={{
            // value: 'deemid',
          }}
        />
        <LabelInput
          labelText="Email"
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
        <LabelInput
          labelText="Phone"
          textInputProps={{
            // value: 'deemid',
          }}
        />

        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <Button
            text="sign up"
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
            <Text type="light-s-midGrey">
              Already have an account?
            </Text>
            <TouchableOpacity>
              <Text type="light-s-textBlack" margin="l.xxs-b.l">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    </CustomHeaderLayout>

  );
};

SignupScreen.defaultProps = {
  // navigation: null,
};

SignupScreen.propTypes = {
  // navigation: PropTypes.any,
};

export default SignupScreen;
