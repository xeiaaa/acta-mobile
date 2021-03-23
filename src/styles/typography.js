import colors from './colors';

const FONT_LIGHT = 'AvenirBook';
const FONT_MEDIUM = 'Avenir';
const FONT_HEAVY = 'AvenirHeavy';

export default {
  light: {
    fontFamily: FONT_LIGHT,
  },
  medium: {
    fontFamily: FONT_MEDIUM,
  },
  heavy: {
    fontFamily: FONT_HEAVY,
  },
  title: {
    fontFamily: FONT_HEAVY,
    fontSize: 30,
    color: colors.black,
  },
  subtitle: {
    fontFamily: FONT_LIGHT,
    fontSize: 14,
    color: colors.midGrey,
  },
  headerTitle: {
    color: colors.white,
    fontFamily: FONT_MEDIUM,
    fontSize: 13,
  },
  form: {
    label: {
      color: colors.text.labelGrey,
      fontFamily: FONT_LIGHT,
      fontSize: 13,
    },
    textInput: {
      color: colors.text.black,
      fontFamily: FONT_LIGHT,
      fontSize: 16,
    },
  },
  tag: {
    fontFamily: FONT_LIGHT,
    fontSize: 12,
    color: colors.text.white,
  },
  listTitle: {
    fontFamily: FONT_HEAVY,
    fontSize: 20,
  },
  link: {
    fontFamily: FONT_LIGHT,
    fontSize: 14,
  },
  buttonText: {
    fontFamily: FONT_MEDIUM,
    fontSize: 15,
  },
  productTitle: {
    fontFamily: FONT_LIGHT,
    fontSize: 16,
  },
  infoLabel: {
    fontFamily: FONT_HEAVY,
    fontSize: 10,
    color: colors.text.grey,
  },
  infoValue: {
    fontFamily: FONT_LIGHT,
    fontSize: 10,
    color: colors.text.grey,
  },
};
