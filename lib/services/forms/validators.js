export default {
  required: (name, value) => (Array.isArray(value)
    ? (value.length === 0)
    : (!value || !String(value).trim())),
  minLength: (name, value, { number }) => (value && value.length < number),
  maxLength: (name, value, { number }) => (value && value.length > number),
  wordsMinCount: (name, value, { number }) => (value && value.split(' ').length < number),
  wordsMaxCount: (name, value, { number }) => (value && value.split(' ').length > number),
  equalValues: (name, value, { fieldToCompare }, values) => (values[fieldToCompare] === value),
};
