export default {
  email: {
    type: 'Input',
    extend: {
      label: 'E-mail',
    },
    validation: {
      required: {
        message: 'You must provide some e-mail address',
      },
    },
  },
  terms: {
    type: 'Checkbox',
    extend: {
      label: 'I agrre with the terms of service.',
      style: {
        marginTop: 16,
      },
    },
    validation: {
      required: {
        message: 'You must accept terms of service',
      },
    },
  },
};
