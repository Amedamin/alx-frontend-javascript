export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Square footage must be a number');
    }

    this._sqft = sqft;

    if (new.target === Building && this.constructor.prototype.evacuationWarningMessage
      === Building.prototype.evacuationWarningMessage) {
      throw new Error('Abstract class "Building" cannot be instantiated directly');
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Method evacuationWarningMessage must be implemented');
  }
}
