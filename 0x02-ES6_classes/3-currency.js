export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(NewC) {
    if (typeof NewC !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = NewC;
  }

  get name() {
    return this._name;
  }

  set name(NewN) {
    if (typeof NewN !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = NewN;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
