export default function getUserCharacteristic({ special = [] }) {
  return special.map(({ description = 'Описание недоступно', ...item }) => ({ ...item, description }));
}