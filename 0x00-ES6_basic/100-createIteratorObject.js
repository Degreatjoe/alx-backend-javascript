export default function createIteratorObject(report) {
  const employees = [];

  // Loop through each department and add employees to the array
  for (const department in report.allEmployees) {
    // Use Object.prototype.hasOwnProperty.call to check if the property belongs to the object
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
      employees.push(...report.allEmployees[department]);
    }
  }

  // Create an iterator using the array of employees
  return employees[Symbol.iterator]();
}
