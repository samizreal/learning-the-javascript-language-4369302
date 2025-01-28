function combineObjects(arr1, arr2) {
  const result = [];

  for (const obj1 of arr1) {
    for (const obj2 of arr2) {
      result.push({ ...obj1, ...obj2 });
    }
  }
  return result;
}

const array1 = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
];
const array2 = [
  { e: 5, f: 6 },
  { g: 7, h: 8 },
];

const combinedArray = combineObjects(array1, array2);
console.log(combinedArray);
