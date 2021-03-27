import { StyleSheet } from 'react-native';
import colors from './colors';
import globals from './globals';

const button = {
  width: 240,
  height: 44,
  ...globals.absoluteCenter,
};

const buttonRounded = {
  borderRadius: 22,
};

const buttonOutline = {
  borderWidth: 1,
};

const outline = {
  ...button,
  ...buttonRounded,
  ...buttonOutline,
};

const createButton = (color) => (
  {
    ...button,
    ...buttonRounded,
    backgroundColor: colors[color],
  }
);

const primary = createButton('primary');
const secondary = createButton('secondary');
const accent = createButton('accent');
const white = createButton('white');
const disabled = createButton('disabled');
const danger = createButton('danger');
const warning = createButton('warning');
const google = createButton('google');
const fb = createButton('fb');

export default StyleSheet.create({
  button,
  outline,
  primary,
  secondary,
  accent,
  white,
  disabled,
  danger,
  warning,
  fb,
  google,
});
