import validators from './validators';

const validate = (type, errors, name, value, validationObj, values) => {
  if (!validationObj.message) {
    console.error(`Validation error. Field "${name}" doesn't have defined message for rule "${type}".`);
  }

  if (validators[type](name, value, validationObj, values)) {
    errors[name] = validationObj.message;
  }
};

export default FIELDS => (values, props) => {
  const errors = {};

  Object.keys(FIELDS).map((name) => {
    const { validation } = FIELDS[name];

    if (validation) {
      const value = values[name];

      Object.keys(validation).map((validationType) => {
        validate(validationType, errors, name, value, validation[validationType], values);
      });
    }
  });

  return errors;
};
