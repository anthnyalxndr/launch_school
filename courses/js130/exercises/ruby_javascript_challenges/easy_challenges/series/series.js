class Series {
  constructor (series) {
    this.series = series;
  }

  slices(len) {
    if (len > this.series.length) throw new Error('Slice length longer than series.');
    let series = Array.from(this.series, num => +num);
    let filtered = series.slice(0, series.length + 1 - len);
    return filtered.map((_, idx) => series.slice(idx, idx + len));
  }
}

module.exports = Series;
