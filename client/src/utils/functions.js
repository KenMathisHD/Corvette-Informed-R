export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export function paginate(items, pageNumber, pageSize) {
  return [...items].splice((pageNumber - 1) * pageSize, pageSize);
}
