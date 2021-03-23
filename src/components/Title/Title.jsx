import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import Text from '../Text/Text';
import { sizing } from '../../styles';

const Title = ({ title, subtitle }) => (
  <View style={{ marginBottom: 50, alignItems: 'center', paddingHorizontal: 30 }}>
    <Text style={{
      fontSize: sizing.font.xl,
      fontFamily: 'AvenirHeavy',
    }}
    >
      { title }
    </Text>
    <Text style={{
      fontSize: sizing.font.s,
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
