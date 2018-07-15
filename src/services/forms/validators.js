const required = (name, value) => {
  if (Array.isArray(value)) {
    return value.length === 0;
  } else if (typeof value === 'object' && value !== null) {
    return Object.keys(value).reduce((a, c) => a && !value[c], true);
  }
  return !value || !String(value).trim();
};

export default {
  required,
  minLength: (name, value, { number }) => value && value.length < number,
  maxLength: (name, value, { number }) => value && value.length > number,
  wordsMinCount: (name, value, { number }) => value && value.split(' ').length < number,
  wordsMaxCount: (name, value, { number }) => value && value.split(' ').length > number,
  equalValues: (name, value, { fieldToCompare }, values) => values[fieldToCompare] === value,
};
