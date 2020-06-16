//как сравнить два объекта
const obj1 = {
  name: "vlad",
  age: 12,
};

const obj2 = {
  name: "vlad",
  age: 12,
};

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
// LODAH  console.log(_.isEqual(obj1, obj2));

//объяснить map set WeakSet WeakMap

const arr1 = [1, 2, 4, 5, 6];

const map = new Map();

// map.set("1", "vlad");

// console.log(map.get("1"));

console.log(arr1.map((x) => x * 2));

//методы для поиска в масиве

console.log(arr1.indexOf(4));
console.log(arr1.lastIndexOf(2));
console.log(arr1.includes(7));
console.log(arr1.find((x) => x > 2));
console.log(arr1.findIndex((x) => x > 5));
console.log(arr1.filter((x) => x > 2));

//как показать пользователю что js не включен
{
  /* <noscript>Your browser does not support JavaScript!</noscript> */
}

// как получить текущий домен
// window.location.href
// document.URL

var arr = [1, 2, 3, 4, 5];
var sum = arr.sum();
console.log(sum);
