import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //   this calculates the starting index of the items for the current page (pageNumber)
  return _(items).slice(startIndex).take(pageSize).value();
}
