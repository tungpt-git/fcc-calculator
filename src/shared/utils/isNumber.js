export function isNumber(v) {
  if (typeof v == "number") return true;
  if (typeof v != "string") return false; // we only process strings!
  return (
    !isNaN(v) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(v))
  ); // ...and ensure strings of whitespace fail
}
