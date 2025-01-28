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
  {
    wwid: "aaa",
    name: "Sam",
  },
  {
    wwid: "bbb",
    name: "James",
  },
  {
    wwid: "ccc",
    name: "Sarah",
  }
];
const array2 = [
  {
    courseName: "ABC",
    " courseWID": "123abc",
    " courseDate": " 2024 - 01 - 10",
  },
  {
    courseName: "EFG",
    courseWID: "456efg",
    courseDate: "2024 - 01 - 15",
  },
  {
    courseName: "HIJ",
    courseWID: "789hij",
    courseDate: "2024 - 01 - 15",
  },
];

const combinedArray = combineObjects(array1, array2);
console.log(combinedArray);
