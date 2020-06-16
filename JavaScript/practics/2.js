// объекты

const obj1 = {
  name: "vlad",
  age: 12,
  city: "bobruisk",
};

const obj2 = {
  name: "vlad",
  age: 12,
  city: "bobruisk",
};

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
