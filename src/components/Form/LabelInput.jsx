import React from 'react';
import {
  View, TextInput, TouchableOpacity, StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

// Components
import Text from '../Text/Text';

import { colors } from '../../styles';

const LabelInput = ({
  labelText, hasIconButton, iconName, iconOnPress, textInputProps, containerStyle,
}) => (
  <View style={{ paddingHorizontal: 30, ...containerStyle }}>
    <Text style={styles.label}>
      { labelText }
    </Text>
    <View style={{ position: 'relative' }}>
      {
        hasIconButton && (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={iconOnPress}
            activeOpacity={0.7}
          >
            <Ionicons
              name={iconName}
              size={24}
              color={colors.veryLightGrey}
            />
          </TouchableOpacity>
        )
      }
      <TextInput
        style={styles.textInput}
        {...textInputProps}
        // secureTextEntry
      />
    </View>
  </View>
);

LabelInput.defaultProps = {
  labelText: '',
  hasIconButton: false,
  iconName: 'eye',
  iconOnPress: () => {},
  textInputProps: {},
  containerStyle: {},
};

LabelInput.propTypes = {
  labelText: PropTypes.string,
  hasIconButton: PropTypes.bool,
  iconName: PropTypes.string,
  iconOnPress: PropTypes.func,
  textInputProps: PropTypes.any,
  containerStyle: PropTypes.object,
};

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontFamily: 'AvenirBook',
    marginBottom: 8,
    marginLeft: 10,
    color: colors.text.labelGrey,
  },
  iconButton: {
    position: 'absolute',
    right: 10,
    zIndex: 100,
  },
  textInput: {
    fontSize: 16,
    fontFamily: 'AvenirBook',
    marginBottom: 8,
    color: colors.text.black,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    paddingBottom: 9,
    paddingLeft: 10,
  },
});

export default LabelInput;
