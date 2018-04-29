export const getValue = (variable, element = 'html') => {
  const variableName = variable.split(/(\(|\))/)[2];
  const styles = window.getComputedStyle(document.querySelector(element));
  return styles.getPropertyValue(variableName);
};

export default {
  getValue,
};
