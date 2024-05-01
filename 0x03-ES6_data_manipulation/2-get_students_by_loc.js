export default function getStudentsByLocation(argument, city) {
  if (!Array.isArray(argument)) return [];
  return argument.filter((arg) => arg.city === city);
}
