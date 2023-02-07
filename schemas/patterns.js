const allLettersPattern = /^[a-zA-zа-яіїєА-ЯІЇЄ ]+$/;
const locationPattern = /^[a-zA-Z]+[,][ ][a-zA-Z]+$/;
const pricePattern = /^[1-9][0-9]*$/;
const passwordPattern = /^[^ ]{7,32}$/;
const phonePattern = /^[+]{1}[0-9]{12}$/;

module.exports = {
  allLettersPattern,
  locationPattern,
  pricePattern,
  passwordPattern,
  phonePattern,
};
