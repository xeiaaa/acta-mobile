export const phpFormat = (num) => num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
