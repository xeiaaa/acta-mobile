import React from 'react';
import {
  ScrollView, Image, TouchableOpacity, View as RNView, StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

// Components
import CustomHeaderLayout from '../components/Layouts/CustomHeaderLayout';
import Text from '../components/Text/Text';

// assets
import actatraxLogo from '../../assets/actatrax.png';
import changePhotoIcon from '../../assets/change-photo-icon.png';

// hoc
import withTextStyling from '../hoc/withTextStyling';

import { colors, globals } from '../styles';

const View = withTextStyling(RNView);

const SettingsScreen = ({ navigation }) => (
  <CustomHeaderLayout title="settings & more">
    <ScrollView>
      <View style={{ ...globals.absoluteCenter }}>
        <View style={styles.avatar}>
          <Image source={actatraxLogo} style={{ width: 48, height: 48 }} />
          <TouchableOpacity
            style={styles.changePhotoButton}
            activeOpacity={0.7}
          >
            <Image source={changePhotoIcon} style={{ width: 45, height: 45 }} />
          </TouchableOpacity>
        </View>

        <Text type="heavy-l-textBlack" margin="t.l">Bret Axl Sebastian Pura</Text>
        <Text type="light-s-textBlack">cosmicdevcs@gmail.com</Text>
      </View>
      <View
        style={styles.balanceWrapper}
        padding="v.m"
        margin="h.xl-t.s"
      >
        <Text type="medium-m-textBlack">BALANCE</Text>
        <Text type="light-xl-textBlack">₱ 5,000,000.00</Text>
        <Text type="light-9-textBlack">Updated March 15, 2021</Text>
      </View>
      <View padding="h.xl" margin="t.xs">
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.row}
        >
          <Text type="light-m-textBlack">Transaction History</Text>
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color={colors.black}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.row}
        >
          <Text type="light-m-textBlack">My Addresses</Text>
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color={colors.black}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.row}
        >
          <Text type="light-m-textBlack">Payment Details</Text>
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color={colors.black}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.row}
        >
          <Text type="light-m-textBlack">Settings</Text>
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color={colors.black}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  </CustomHeaderLayout>
);

SettingsScreen.defaultProps = {
  navigation: null,
};

SettingsScreen.propTypes = {
  navigation: PropTypes.any,
};

const styles = StyleSheet.create({
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: colors.lightGrey,
    borderRadius: 60,
    ...globals.absoluteCenter,
  },
  changePhotoButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  balanceWrapper: {
    ...globals.absoluteCenter,
    backgroundColor: '#E1E7EA',
    borderWidth: 1,
    borderColor: '#E7E8E9',
    borderRadius: 24,
  },
  row: {
    ...globals.flexRow,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
});

export default SettingsScreen;
