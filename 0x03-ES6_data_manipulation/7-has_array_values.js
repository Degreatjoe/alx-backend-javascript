export default function hasValuesFromArray(aset, arr) {
  for (let i = 0; i < aset.length; i + 1) {
    if (aset.has(arr[i])) return true;
  }
  return false;
}
