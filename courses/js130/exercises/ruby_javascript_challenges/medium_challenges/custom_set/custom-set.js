class CustomSet {
  constructor (arr = []) {
    Object.defineProperty(this, 'length', { writable: true, });
    this.length = 0;
    arr.forEach(num => {
      if (this[num] === undefined) {
        this[num] = num;
        this.length += 1;
      }
    });
  }

  isEmpty() { return this.length === 0 }

  contains(element) { return this[element] !== undefined }

  isSubset(set) {
    for (let element in this) {
      if (!set.contains(element)) return false;
    }
    return true;
  }

  isDisjoint(set) {
    for (let element in this) {
      if (set.contains(element)) return false;
    }
    return true;
  }

  isSame(set) {
    if (this.length !== set.length) return false;
    for (let element in this) {
      if (!set.contains(element)) return false;
    }
    return true;
  }

  add(element) {
    if (this[element] === undefined) {
      this[element] = element;
      this.length += 1;
    }
    return this;
  }

  intersection(set) {
    const newSet = new CustomSet();
    for (let element in this) {
      if (set.contains(element)) newSet.add(element);
    }
    return newSet;
  }

  difference(set) {
    const newSet = new CustomSet();
    for (let element in this) {
      if (!set.contains(element)) newSet.add(element);
    }
    return newSet;
  }

  union(set) {
    let union = new CustomSet();
    for (let element in this) union.add(element);
    for (let element in set) union.add(element);
    return union;
  }
}

module.exports = CustomSet;
