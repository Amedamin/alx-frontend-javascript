export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || students.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
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

  get length() {
    return this._length;
  }

  set length(NewL) {
    if (typeof NewL !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = NewL;
  }

  get students() {
    return this._students;
  }

  set students(NewS) {
    if (!Array.isArray(NewS) || NewS.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = NewS;
  }
}
