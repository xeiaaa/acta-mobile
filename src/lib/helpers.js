import { sizing } from '../styles';

export const phpFormat = (num) => num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

export const marginParser = (str = '') => {
  /*
    str = 'b.12-t.sm-l.xl'
    margin = {
      botttom: 12,
      top: sizing.margin.sm,
      left: sizing.margin.l
    }
  */
  const mapping = {
    b: 'marginBottom',
    t: 'marginTop',
    l: 'marginLeft',
    r: 'marginRight',
    h: 'marginHorizontal',
    v: 'marginVertical',
  };

  let margin = {};

  const styles = str.split('-');
  styles.forEach((s) => {
    const [direction, value] = s.split('.');

    // validate direction and value
    if (mapping[direction]) {
      // check if value = int or enum[xxs, xs, s, m, l, xl, xxl]
      const intValue = parseInt(value, 10);
      if (Number.isInteger(intValue)) {
        margin = { ...margin, [mapping[direction]]: intValue };
      } else {
        margin = { ...margin, [mapping[direction]]: sizing.margin[value] };
      }
    }
  });

  return margin;
};

export const paddingParser = (str = '') => {
  const mapping = {
    b: 'paddingBottom',
    t: 'paddingTop',
    l: 'paddingLeft',
    r: 'paddingRight',
    h: 'paddingHorizontal',
    v: 'paddingVertical',
  };

  let padding = {};

  const styles = str.split('-');

  styles.forEach((s) => {
    const [direction, value] = s.split('.');

    // validate direction and value
    if (mapping[direction]) {
      // check if value = int or enum[xxs, xs, s, m, l, xl, xxl]
      const intValue = parseInt(value, 10);
      if (Number.isInteger(intValue)) {
        padding = { ...padding, [mapping[direction]]: intValue };
      } else {
        padding = { ...padding, [mapping[direction]]: sizing.padding[value] };
      }
    }
  });

  return padding;
};

export const delay = (ms) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, ms);
});
