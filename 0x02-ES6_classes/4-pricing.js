import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(NewA) {
    if (typeof NewA !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = NewA;
  }

  get currency() {
    return this._currency;
  }

  set currency(NewC) {
    if (!(NewC instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = NewC;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number');
    }
    return amount * conversionRate;
  }
}
