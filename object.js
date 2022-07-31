const object = {
  man: "boy",
  age: 30,
  obj1: {
    girl: "alimatou",
    sexe: "female",
    age: 20,
    array: [1, 3, 4, "alimaarray", 30],
  },

  arr: [20, 30, 40, 50],

  strapLength: {
    left: 10,
    right: 20,
  },

  status: false,
  newFuntion: function (setStatus) {
    this.status = setStatus;
  },

  newStrapLength: function (lengthL, lengthR) {
    this.strapLength.left = lengthL;
    this.strapLength.right = lengthR;
  },
};

const variable = "arr";
console.log(object);
console.log(" call obj1 using dot ", object.obj1);
console.log("call obj1 using bracket", object["obj1"]);
console.log("object array", object.arr);
console.log("inside object  using bracket", object["arr"]);
console.log("inside objec using dot and bracket", object.obj1["array"]);
console.log(
  "element inside obje1 using bracket & dot & indexing",
  object["obj1"].array[2]
);
console.log("elem inside obje1 using dot & indexing", object.obj1.array[3]);
console.log("call arr using dot", object.arr);
console.log("call arr using bracket", object["arr"]);
console.log("created variable to pass in objec[bracke]", object[variable]);

console.log(object.status);
console.log("before", object.newFuntion("true"));
console.log("updated status", object.status);
console.log("straplent left", object.strapLength["left"]);
console.log("strapleng right", object["strapLength"].right);
console.log(
  "update straplenght by calling newStraplength function",
  object.newStrapLength(80, 90)
);
console.log("updated strapleng", object.strapLength);
