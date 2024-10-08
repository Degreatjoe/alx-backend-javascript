export default function hasValuesFromArray(aset, arr) {
  if (arr in aset) {
    return true;
  }

  return false;
}
