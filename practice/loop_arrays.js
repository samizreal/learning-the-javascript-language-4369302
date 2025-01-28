function concatenateArrays(arr1, arr2) {
  const newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    newArray.push(arr2[i]);
  }
  return newArray;
}

const array1 = [
  {
    "wwid": "aaa",
    "name": "Sam"
  },
  {
    "wwid": "bbb",
    "name": "James"
  }
];
const array2 = [
  {
   "courseName":"ABC",
   " courseWID": "123abc",
   " courseDate":" 2024 - 01 - 10"
  },
  {
   "courseName": "EFG",
   "courseWID": "456efg",
   "courseDate":"2024 - 01 - 15"
  }
];
const result = concatenateArrays(array1, array2);
console.log(result); // Output: [1, 2, 3, 'a', 'b', 'c']
