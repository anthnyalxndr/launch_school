/* eslint-disable max-lines-per-function */
class Meetup {
  constructor(year, month) {
    this.date = new Date(year, month - 1);
  }
  static DAYS_OF_WEEK = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  static DAY_OF_WEEK_MAP = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  _setDayToSchedule(weekday, schedule) {
    let scheduleMap = {
      first: 1,
      second: 2,
      third: 3,
      fourth: 4,
      fifth: 5,
    };

    let scheduleOccurences = Object.keys(scheduleMap);

    if (scheduleOccurences.includes(schedule)) {
      this._setDayToNthOccurrence(weekday, scheduleMap[schedule]);
      return;
    }

    if (schedule === 'last') {
      this._setDayToLastDay(weekday);
      return;
    }

    if (schedule === 'teenth') {
      this._setDayToTeenth(weekday);
    }

  }

  _setDayToNthOccurrence(weekday, occurence) {
    let dayCount = 0;
    // Loop through days until desired day + schedule combo reached;
    while (true) {
      let curWeekday = Meetup.DAY_OF_WEEK_MAP[this.date.getDay()];
      if (curWeekday === weekday) dayCount += 1;
      if (curWeekday === weekday && occurence === dayCount) break;
      this.date.setDate(this.date.getDate() + 1);
    }
  }

  day(weekday, schedule) {
    const startingMonth = this.date.getMonth();
    weekday = weekday.toLowerCase();
    schedule = schedule.toLowerCase();
    this._setDayToSchedule(weekday, schedule);

    if (this.date.getMonth() !== startingMonth) return null;

    return this.date.toString();
  }

  _setDayToLastDay(weekday) {
    this.date.setMonth(this.date.getMonth() + 1);

    this.date.setDate(1);

    this.date.setDate(0);
    // Loop through days until desired day + schedule combo reached;
    while (true) {
      let curWeekday = Meetup.DAY_OF_WEEK_MAP[this.date.getDay()];
      if (curWeekday === weekday) break;
      this.date.setDate(this.date.getDate() - 1);
    }
  }

  _setDayToTeenth(weekday) {
    this.date.setDate(13);

    while (true) {
      let curWeekday = Meetup.DAY_OF_WEEK_MAP[this.date.getDay()];
      if (curWeekday === weekday) break;
      this.date.setDate(this.date.getDate() + 1);
    }
  }
}

module.exports = Meetup;
