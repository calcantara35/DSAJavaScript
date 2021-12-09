const firstRecurringCharacter = (array) => {
  if (array.length < 1) {
    return undefined;
  }
  let map = {};

  for (let i = 0; i < array.length; i++) {
    // map[array[i]] because we are setting the values of the array to be the key of the hashmap
    // 0 in an if statement means falsey in JS, type corrsion.
    if (map[array[i]] !== undefined) {
      return array[i];
    } else {
      map[array[i]] = true;
    }
  }
  console.log(map);
  return undefined;
};

const firstRecurringCharacterNavie = (array) => {
  if (array.length < 1) {
    return undefined;
  }
  for (let i = 0; i < array.length; i++) {
    // we always go one to the right of the first index
    // the inner loop must complete first before continuing on with the first loop. so first round would be
    // outer = [0] and then inner [1], [2], [3]... then [1] for outer and [2], [3] for inner
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return array[i];
      }
    }
  }
  return undefined;
};

firstRecurringCharacterNavie([2, 5, 1, 2]);
firstRecurringCharacter([2, 5, 1, 2]);
