import orderByProps from './orderByProps';

describe('orderByProps', () => {
  test('orders by given keys and then alphabetically', () => {
    const obj = {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const order = ['name', 'level'];
    const result = orderByProps(obj, order);
    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ]);
  });

  test('orders all keys alphabetically if order is empty', () => {
    const obj = { b: 2, a: 1, c: 3 };
    const result = orderByProps(obj, []);
    expect(result).toEqual([
      { key: 'a', value: 1 },
      { key: 'b', value: 2 },
      { key: 'c', value: 3 },
    ]);
  });

  test('ignores keys in order that are not in object', () => {
    const obj = { a: 1, b: 2 };
    const order = ['c', 'a'];
    const result = orderByProps(obj, order);
    expect(result).toEqual([
      { key: 'a', value: 1 },
      { key: 'b', value: 2 },
    ]);
  });

  test('returns empty array for empty object', () => {
    expect(orderByProps({}, ['a', 'b'])).toEqual([]);
  });
});
