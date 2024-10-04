export default class HolbertonCourse {
  constructor(name, length, students) {
    // Type checks for the constructor parameters
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    // Assign values to attributes
    this._name = name;       // Keep the underscore as per your original design
    this._length = length;   // Same for length
    this._students = students; // Same for students
  }

  // Getter for name
  get name() {
    return this._name;  // Access the underscore attribute
  }

  // Setter for name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value; // Assign to the underscore attribute
  }

  // Getter for length
  get length() {
    return this._length; // Access the underscore attribute
  }

  // Setter for length
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value; // Assign to the underscore attribute
  }

  // Getter for students
  get students() {
    return this._students; // Access the underscore attribute
  }

  // Setter for students
  set students(value) {
    if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value; // Assign to the underscore attribute
  }
}
