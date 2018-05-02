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
};
