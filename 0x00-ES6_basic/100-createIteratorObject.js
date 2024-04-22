export default function createIteratorObject(report) {
  let result = [];

  for (let item of Object.keys(report.allEmployees)) result.push(item);

  return result;
}
