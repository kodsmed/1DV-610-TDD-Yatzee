export default class Utility {
  findOfAKind(numbers: Array<number>, expectedOfAKind: number) : Array<number> {
    const elementCount = new Map();
    let groups = [] as Array<number>;

    if (expectedOfAKind > 2) {
      return groups;
    }

    // Count the occurrences of each element
    numbers.forEach(element => {
      if (!elementCount.has(element)) {
        elementCount.set(element, 0);
      }
      elementCount.set(element, elementCount.get(element) + 1);
    });

    // Find elements that have exactly 2 occurrences (a pair)
    elementCount.forEach((count, element) => {
      if (count >= 2) {
        groups.push(element);
      }
    });

    return groups;
  }
}