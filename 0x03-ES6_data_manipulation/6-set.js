export default function setFromArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return Set([arr]);
}
