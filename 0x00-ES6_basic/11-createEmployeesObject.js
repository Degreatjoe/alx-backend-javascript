export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees, // Use computed property name to create the object
  };
}
