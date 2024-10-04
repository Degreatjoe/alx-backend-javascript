export default function iterateThroughObject(reportWithIterator) {
  // Initialize an array to hold employee names
  const employeeNames = [];

  // Use the iterator to get each employee name
  for (const employee of reportWithIterator) {
    employeeNames.push(employee);
  }

  // Join the names with ' | ' and return the resulting string
  return employeeNames.join(' | ');
}
