// array 1 = [0,3,4,31]
// array 2 = [4,6,30]
// result = [0, 3, 4, 4, 6, 30, 31]
const mergeSortedArrays = (array1, array2) => {
  const mergedSortedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  // check input
  if (array1.length === 0) {
    return array2;
  }

  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    console.log("Array2Item is empty: ", !array2Item);
    console.log("array1Item is less than array2Item", array1Item < array2Item);
    if (!array2Item || array1Item < array2Item) {
      mergedSortedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedSortedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
    console.log(mergedSortedArray);
    console.log("");
  }

  return mergedSortedArray;
};

let result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
console.log(result);
