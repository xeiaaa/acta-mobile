import colors from './colors';
import sizing from './sizing';

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
    fontSize: sizing.font.xl,
    color: colors.black,
  },
  subtitle: {
    fontFamily: FONT_LIGHT,
    fontSize: sizing.font.s,
    color: colors.midGrey,
  },
  headerTitle: {
    color: colors.white,
    fontFamily: FONT_MEDIUM,
    fontSize: sizing.font.s,
  },
  form: {
    label: {
      color: colors.text.labelGrey,
      fontFamily: FONT_LIGHT,
      fontSize: sizing.font.s,
    },
    textInput: {
      color: colors.text.black,
      fontFamily: FONT_LIGHT,
      fontSize: sizing.font.m,
    },
  },
  tag: {
    fontFamily: FONT_LIGHT,
    fontSize: sizing.font.xs,
    color: colors.text.white,
  },
  listTitle: {
    fontFamily: FONT_HEAVY,
    fontSize: sizing.font.m,
  },
  link: {
    fontFamily: FONT_LIGHT,
    fontSize: sizing.font.s,
  },
  buttonText: {
    fontFamily: FONT_MEDIUM,
    fontSize: sizing.font.m,
  },
  productTitle: {
    fontFamily: FONT_LIGHT,
    fontSize: sizing.font.m,
  },
  infoLabel: {
    fontFamily: FONT_HEAVY,
    fontSize: sizing.font.xxs,
    color: colors.text.grey,
  },
  infoValue: {
    fontFamily: FONT_LIGHT,
    fontSize: sizing.font.xxs,
    color: colors.text.grey,
  },
  align: {
    center: {
      textAlign: 'center',
    },
    right: {
      textAlign: 'right',
    },
    left: {
      textAlign: 'left',
    },
  },
};
