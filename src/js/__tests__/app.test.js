import orderByProps from '../app';
const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test('Порядок элементов', () => {
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orderByProps(obj, ['name', 'level']))
    .toEqual(expected);
});

test('Возврат результата', () => {
  expect(orderByProps(obj))
    .toEqual([
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ]);
});

test('Соответствие порядка элементов', () => {
  expect(orderByProps(obj, ['level', 'defence', 'health', 'name', 'attack']))
    .toEqual([
      { key: 'level', value: 2 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'name', value: 'мечник' },
      { key: 'attack', value: 80 },
    ]);
});
