export const arrEdit = (arr, item, index) => arr.map((el, i) => (index === i) ? item : el);

export const arrAdd = (arr, item) => [...arr, item];

export const arrRemove = (arr, index) => arr.filter((el, i) => i !== index);

export const objRemove = (obj, ...prop) =>
  Object.keys(obj).reduce((acc, curr) => {
    if (!prop.includes(curr)) {
      acc[curr] = obj[curr];
    }
    return acc;
  }, {});
