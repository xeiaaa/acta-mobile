import React from 'react';
import PropTypes from 'prop-types';

import { marginParser, paddingParser } from '../lib/helpers';

const withTextStyling = (Component) => {
  const EnhancedComponent = (props) => {
    const newProps = { ...props };
    const {
      margin, padding, style,
    } = newProps;

    const styles = {
      ...marginParser(margin),
      ...paddingParser(padding),
      ...style,
    };

    newProps.style = styles;
    newProps.margin = undefined;
    newProps.padding = undefined;

    return (
      <Component {...newProps} />
    );
  };

  EnhancedComponent.propTypes = {
    margin: PropTypes.string,
    padding: PropTypes.string,
    style: PropTypes.object,
  };

  EnhancedComponent.defaultProps = {
    margin: '',
    padding: '',
    style: {},
  };

  return EnhancedComponent;
};

export default withTextStyling;
