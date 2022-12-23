// values: return all elements to Set(Collection)
// size: return the quantity of elements
// has: checking an element inside Set(Collection)
// add: add new element
// remove: remove the element
// union: return the intersection area of two Sets(Collection)
// difference: return the difference of two Sets(Collection) вернуть отличия двух коллекций
// subset: check if one collection is a subset of another

function MySet() {
  let collection = [];
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  this.values = function () {
    return collection;
  };

  this.size = function () {
    return collection.length;
  };

  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.union = function (otherSet) {
    let unionSet = new MySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach((i) => unionSet.add(i));
    secondSet.forEach((i) => unionSet.add(i));
  };

  this.intersection = function (otherSet) {
    let intersectionSet = new MySet();
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  this.difference = function (otherSet) {
    let differenceSet = new MySet();
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  this.subset = function (otherSet) {
    let firstSet = this.values();
    return firstSet.every((value) => otherSet.has(value));
  };
}
