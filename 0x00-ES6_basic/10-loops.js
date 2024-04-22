export default function appendToEachArrayValue(array, appendString) {
  let newAray = [];
  for (let item of array) {
    newAray.push(`${appendString}${item}`);
  }
  return newAray;
}
