/* eslint-disable no-underscore-dangle */
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Call the parent class constructor with sqft
    super(sqft);

    // Verify the floors argument is a number
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }

    // Initialize the floors attribute
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
/* eslint-enable no-underscore-dangle */
