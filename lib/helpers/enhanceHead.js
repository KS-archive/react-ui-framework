export default (tagName, attributes) => {
  const element = document.createElement(tagName);
  Object.keys(attributes).map((key) => {
    element.setAttribute(key, attributes[key]);
  });
  document.querySelector('head').appendChild(element);
};
