let arr= [1,2,3,43,5,6,7,89,10];

// Using the map function

// create and print another array that is reverse of the original array
// create and print another array that is double of each element
// create and print another array that is reverse and minus one(one less) of the original array
// [9,88,6,5,42...]

// let arr1=[];
// arr1=arr.reverse(el=>el);
// console.log(arr1);

// let arr1=[];
// arr1=arr.map(el=>el*2);
// console.log(arr1);

arr1 = arr.map(el => --el);
console.log(arr1.reverse());
