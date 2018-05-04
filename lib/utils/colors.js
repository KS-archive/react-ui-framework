const getValue = (variable, selector = 'html') => {
  const variableName = variable.split(/(\(|\))/)[2];
  const styles = window.getComputedStyle(document.querySelector(selector));
  return styles.getPropertyValue(variableName);
};

const setValue = (variable, value, selector = 'html') => {
  const variableName = variable.includes('--') ? variable : `--${variable}`;
  console.log(document.querySelector(selector));
  document.querySelector(selector).style.setProperty(variableName, value);
};

export default {
  getValue,
  setValue,
};
