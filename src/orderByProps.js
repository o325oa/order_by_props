export default function orderByProps(obj, order) {
  const ordered = [];
  const rest = [];

  for (const i in order) {
    if (Object.prototype.hasOwnProperty.call(obj, order[i])) {
      ordered.push({ key: order[i], value: obj[order[i]] });
    }
  }

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && order.indexOf(key) === -1) {
      rest.push({ key, value: obj[key] });
    }
  }

  rest.sort((a, b) => (a.key > b.key ? 1 : -1));

  return ordered.concat(rest);
}
