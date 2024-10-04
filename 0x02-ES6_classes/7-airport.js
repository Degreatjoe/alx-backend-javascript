/* eslint-disable no-underscore-dangle */
export default class Airport {
  constructor(name, code) {
    // Verify types
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }

    // Initialize attributes
    this._name = name;
    this._code = code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Default string description of the class
  toString() {
    return this._code;
  }
}
/* eslint-enable no-underscore-dangle */
