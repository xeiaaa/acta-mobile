import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import Text from '../Text/Text';

const Title = ({ title, subtitle }) => (
  <View style={{ marginBottom: 50, alignItems: 'center', paddingHorizontal: 30 }}>
    <Text style={{
      fontSize: 30,
      fontFamily: 'AvenirHeavy',
    }}
    >
      { title }
    </Text>
    <Text style={{
      fontSize: 14,
      fontFamily: 'AvenirBook',
      marginTop: 5,
      textAlign: 'center',
    }}
    >
      { subtitle }
    </Text>
  </View>
);

Title.defaultProps = {
  title: '',
  subtitle: '',
};

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Title;
