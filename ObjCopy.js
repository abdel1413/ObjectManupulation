let object1 = {
  name: "name",
  practice: false,
  hobby: ["tenis", "soccer", "basket ball", "cenema", "reading"],
};

console.log(object1);
console.log(object1.practice);

console.log(object1.name);
//we can also use brackets for an object but we have to quote expression
//inside the brackets
let n = object1.name;
console.log(object1["name"]);
console.log(object1[n]);

console.log(object1.hobby);

//accessing element (cinema) in propety hobby
console.log(object1.hobby[3]);
