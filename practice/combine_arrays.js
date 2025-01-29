function combineArrays(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      const newObj = {};
      // Copy properties from the first object
      for (const key in arr1[i]) {
        if (arr1[i].hasOwnProperty(key)) {
          newObj[key] = arr1[i][key];
        }
      }
      // Copy properties from the second object, overwriting if necessary
      for (const key in arr2[j]) {
        if (arr2[j].hasOwnProperty(key)) {
          newObj[key] = arr2[j][key];
        }
      }
      result.push(newObj);
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
  },
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


const combinedArray = combineArrays(array1, array2);
console.log(combinedArray);
