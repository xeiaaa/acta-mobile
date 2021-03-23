import React from 'react';
import {
  View,
} from 'react-native';

// Components
import Button from '../components/Button/Button';
import Title from '../components/Title/Title';
import LabelInput from '../components/Form/LabelInput';
import CustomHeaderLayout from '../components/Layouts/CustomHeaderLayout';

const ForgotPasswordScreen = () => (
  <CustomHeaderLayout title="Reset Password">
    <View>
      <Title title="Forgot your password?" subtitle="Enter your email address and we will send you instructions on how to reset your password." />
      <LabelInput
        labelText="Email Address"
        textInputProps={{
          // value: 'deemid',
        }}
      />

      <View style={{ alignItems: 'center', marginTop: 40 }}>
        <Button
          text="reset my password"
          type="secondary"
        />
      </View>
    </View>

  </CustomHeaderLayout>

);

export default ForgotPasswordScreen;
