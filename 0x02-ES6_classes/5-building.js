/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    // Verify type
    if (typeof sqft !== 'number') {
      throw new TypeError('Square footage must be a number');
    }

    // Initialize attribute
    this._sqft = sqft;

    // Ensure the class is not instantiated directly
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
}
/* eslint-enable no-underscore-dangle */
