import generateField from './generateField';

export default function (valuesProps = {}) {
  this.Field = generateField.bind(this);

  const initialValues = {};
  const { fields, initialize } = this.props;

  Object.keys(fields).map((name) => {
    if (valuesProps[name]) {
      initialValues[name] = valuesProps[name];
    } else if (fields[name].default) {
      initialValues[name] = fields[name].default;
    }
  });

  initialize(initialValues);
}
