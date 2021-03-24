import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';

const FullTitle = ({ title, subtitle }) => (
  <View style={{ marginBottom: 50, alignItems: 'center', paddingHorizontal: 30 }}>
    <Title text={title} />
    <Subtitle
      text={subtitle}
      style={{
        marginTop: 5,
      }}
    />
  </View>
);

FullTitle.defaultProps = {
  title: '',
  subtitle: '',
};

FullTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default FullTitle;
