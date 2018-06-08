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
    },
    validation: {
      required: {
        message: 'You must accept terms of service',
      },
    },
  },
  interests: {
    type: 'CheckboxGroup',
    extend: {
      label: 'Interests',
      style: {
        marginTop: 16,
      },
      items: [
        { label: 'Art', name: 'art' },
        { label: 'Economy', name: 'economy', style: { marginTop: 8 } },
        { label: 'Sport', name: 'sport', style: { marginTop: 8 } },
      ],
    },
    validation: {
      required: {
        message: 'You must choose your interests.',
      },
    },
  },
  size: {
    type: 'Select',
    extend: {
      label: 'Size',
      style: {
        marginTop: 16,
      },
      items: [
        { label: 'XXL', value: 'XXL' },
        { label: 'XL', value: 'XL' },
        { label: 'LG', value: 'LG' },
        { label: 'MD', value: 'MD' },
        { label: 'SM', value: 'SM' },
        { label: 'XS', value: 'XS' },
      ],
    },
    validation: {
      required: {
        message: 'You must choose your size.',
      },
    },
  },
  sex: {
    type: 'RadioGroup',
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
