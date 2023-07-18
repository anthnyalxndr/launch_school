class Clock {
  constructor(hour, minute) {
    this.hours = hour;
    this.minutes = minute;
  }

  static HOURS_PER_DAY = 24;

  static MINUTES_PER_HOUR = 60;

  static MINIMUM_VALUE = 0;

  // You may not use any built-in date or time functionality; just use
  // arithmetic operations.
  static at(hour = 0, minute = 0) {
    return new Clock(hour, minute);
  }

  toString() {
    return `${this._pad(this.hours)}:${this._pad(this.minutes)}`;
  }

  _pad(num) {
    if (num < 10) return `0${num}`;
    return `${num}`;
  }

  add(minutes) {
    // you should not mutate Clock objects when adding and subtracting minutes
    // -- create a new Clock object.
    let newClock = new Clock(this.hours, this.minutes);
    while (newClock.minutes + minutes >= Clock.MINUTES_PER_HOUR) {
      newClock.hours += 1;
      minutes -= Clock.MINUTES_PER_HOUR;
    }
    newClock.minutes += minutes;

    while (newClock.hours >= Clock.HOURS_PER_DAY) {
      newClock.hours -= Clock.HOURS_PER_DAY;
    }

    return newClock;
  }

  subtract(minutes) {
    // you should not mutate Clock objects when adding and subtracting minutes
    // -- create a new Clock object.
    let newClock = new Clock(this.hours, this.minutes);
    while (newClock.minutes - minutes < Clock.MINIMUM_VALUE) {
      newClock.hours -= 1;
      minutes -= Clock.MINUTES_PER_HOUR;
    }

    newClock.minutes -= minutes;

    while (newClock.hours < Clock.MINIMUM_VALUE) {
      newClock.hours += Clock.HOURS_PER_DAY;
    }

    return newClock;
  }

  isEqual(compClock) {
    return this.toString() === compClock.toString();
  }
}

module.exports = Clock;
