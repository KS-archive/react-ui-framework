export default (href) => {
  const link = document.createElement('link');
  link.setAttribute('href', href);
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  document.querySelector('head').appendChild(link);
};
