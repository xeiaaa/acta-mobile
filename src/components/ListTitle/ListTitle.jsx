import React from 'react';
import {
  StyleSheet, View as RNView, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import Text from '../Text/Text';
import { sizing, typography } from '../../styles';
import withTextStyling from '../../hoc/withTextStyling';

const View = withTextStyling(RNView);

const ListTitle = ({
  action, actionText, title, style,
}) => (
  <View style={{ ...styles.header, ...style }}>
    <Text style={typography.listTitle}>{ title }</Text>
    <TouchableOpacity onPress={action}>
      {
        actionText && (
        <Text type="light-s-primary">
          { actionText }
        </Text>
        )
      }
    </TouchableOpacity>
  </View>
);

ListTitle.defaultProps = {
  action: () => {},
  actionText: '',
  title: '',
  style: {},
};

ListTitle.propTypes = {
  action: PropTypes.func,
  actionText: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: sizing.padding.m,
  },
});

export default withTextStyling(ListTitle);
