import React, { useState } from 'react';
import {
  TouchableOpacity, View as RNView, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import CustomHeaderLayout from '../components/Layouts/CustomHeaderLayout';
import Text from '../components/Text/Text';

// hoc
import withTextStyling from '../hoc/withTextStyling';

import {
  colors, globals, sizing, typography,
} from '../styles';

const View = withTextStyling(RNView);

const TransactionScreen = ({ navigation }) => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <CustomHeaderLayout
      title="transactions"
      subheader={(
        <View padding="h.m-v.m">
          <View
            style={{
              backgroundColor: colors.primary,
              borderRadius: 24,
              ...globals.absoluteCenter,
            }}
            padding="h.l-v.xl"
          >
            <Text type="heavy-l-white">BALANCE</Text>
            <Text type="heavy-45-white">₱ 5,000,000.00</Text>
            <Text type="medium-xs-white">Updated March 15, 2021</Text>
          </View>
        </View>
      )}
    >
      <View>
        <View style={{
          borderBottomColor: colors.lightGrey,
          borderBottomWidth: 1,
          width: '100%',
          paddingHorizontal: sizing.padding.xl,
          marginBottom: sizing.margin.s,
        }}
        >
          <View style={{
            ...globals.flexRow,
          // justifyContent: 'space-evenly',
          }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                minWidth: '50%',
                paddingBottom: sizing.padding.xxs,
                borderBottomColor: tabIndex === 0 ? colors.primary : colors.lightGrey,
                borderBottomWidth: 1,
                position: 'relative',
                top: 1,
              }}
              onPress={() => setTabIndex(0)}
              disabled={tabIndex === 0}
            >
              <Text style={{ textAlign: 'center', ...typography.heavy, fontSize: sizing.font.l }}>Deposit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                minWidth: '50%',
                paddingBottom: sizing.padding.xxs,
                borderBottomColor: tabIndex === 1 ? colors.primary : colors.lightGrey,
                borderBottomWidth: 1,
                position: 'relative',
                top: 1,
              }}
              onPress={() => setTabIndex(1)}
              disabled={tabIndex === 1}
            >
              <Text style={{ textAlign: 'center', ...typography.heavy, fontSize: sizing.font.l }}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </View>

        {
          tabIndex === 0 ? (
            <View>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </View>
          ) : (
            <View>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </View>
          )
        }
      </View>
    </CustomHeaderLayout>
  );
};

TransactionScreen.defaultProps = {
  navigation: null,
};

TransactionScreen.propTypes = {
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

export default TransactionScreen;
