export default function getStudentIdsSum(argument) {
  return argument.reduce((a, b) => a + b, 0);
}
