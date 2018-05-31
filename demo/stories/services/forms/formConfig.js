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
  sex: {
    type: 'CheckboxGroup',
    extend: {
      label: 'Sex',
      style: {
        marginTop: 16,
      },
      items: [
        { label: 'Male', name: 'male' },
        { label: 'Female', name: 'female', style: { marginTop: 8 } },
      ],
    },
    validation: {
      required: {
        message: 'You must choose your sex.',
      },
    },
  },
};
