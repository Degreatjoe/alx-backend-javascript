export default function hasValuesFromArray(aset, arr) {
  for (let i = 0; i < aset.length; i + 1) {
    if (arr === aset[i]) return true;
  }
  return false;
}
