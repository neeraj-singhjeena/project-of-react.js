let arr = [34, 0.56, 67];
let a = arr.map((value, index, arr) => {
  console.log(value, index, arr);
  return value + 1;
});
console.log(a);

// arr filter
let arr2 = [34, 5, 6, 7, 8, 45, 8, 9, 45, 67, 34, 56];
let a2 = arr2.filter((a) => {
  return a < 20;
});
console.log(a2);

//Array reduce method
let arr3 = [1, 2, 3, 4, 1, 2, 3, 3];
let same = arr3.reduce((h1, h2) => {
  return h1 + h2;
});
console.log(same);
