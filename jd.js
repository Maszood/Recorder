/*let user = {};
user.name = "maszood";
user.age = 20;
user.height = 6.6;

// Add property with space
user["Like birds"] = true;

console.log("Before update:");
console.log(user.name);
console.log(user.age);
console.log(user.height);

// Update name
user.name = "neeraj";

console.log("\nAfter name update:");
console.log(user.name);
console.log(user.age);
console.log(user.height);

// Change type dynamically
user.age = "25";

console.log("\nAfter age update (string now):");
console.log(user.name);
console.log(user.age);
console.log(user.height);

// Update name again
user.name = "faizan";

console.log("\nAfter second name update:");
console.log(user.name);
console.log(user.age);
console.log(user.height);

// Change height type
user.height = "6.6";

console.log("\nAfter height update:");
console.log(user.height);

// Add new property
user.lover = "   ";

console.log("\nAdded new property:");
console.log(user.lover);

// Keys
console.log("\nKeys:");
for (let key of Object.keys(user)) {
    console.log(key);
}

// Values
console.log("\nValues:");
for (let value of Object.values(user)) {
    console.log(value);
}

// Entries
console.log("\nEntries:");
for (let [key, value] of Object.entries(user)) {
    console.log(key + " : " + value);
}

// Clone object
let s2 = {};

for (let [key, value] of Object.entries(user)) {
    s2[key] = value;
}

console.log("\nCloned S2:");
for (let [key, value] of Object.entries(s2)) {
    console.log(key + " : " + value);
} 
// Simple fruits array
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[2] = "Banana";
fruits[3] = "Apple";

console.log(fruits.length);

// Mixed array
let arr = [
    "Apple",
    { name: "maszood" },
    true,
    function () { console.log("hello"); }
];

console.log(arr[1].name);
arr[3]();

// Another fruits array
let fruit = ["Apple", "Mango", "Banana"];
console.log(fruit);

// Array operations
console.log(fruit[fruit.length - 1]);
console.log(fruit.at(-1));
console.log(fruit.pop());
console.log(fruit.push("ABC"));
console.log(fruit);
console.log(fruit.shift());
console.log(fruit.unshift("apple"));
console.log(fruit);

let fruits2 = ["Banana"];
let arr2 = fruits2;

console.log(arr2 === fruits2); 

arr2.push("Mango");
console.log(fruits2); 
let fruits = ["Apple", "Mango", "Banana"];

for (let fruit of fruits) {
    console.log(fruit);
}


// multidimentional arrays
let matrix =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix[0][1]);
let arr =[1,2,3];
console.log(arr);
console.log(String(arr) =='1,2,3');

console.log([1,2]+ 1)
console.log([0]==[0])

let a = [0];
let b = a;

console.log(a == b); 

function findSum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans += i;
  }
  return ans;
}

function findSumTill100() {
  console.log(findSum(100));
}

setTimeout(findSumTill100, 1000000);
console.log("hello world");

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("2 seconds baad data mila");
    }, 2000);
  });
}

async function run() {
  const msg = await getData();
  console.log(msg);
}

run();

 function takeorder(callback){
  setTimeout(() => {
    console.log("order taken");
    callback();
  }, 1000);  
}

function preparefood(){
  setTimeout(() => {
    console.log("taking order");
  }, 1000);
}

takeorder(preparefood); 

function createUser(name, age){
  return{
    name: name,
    age: age,
    about: function(){
      return `${this.name} is ${this.age} years old`;
    }
  };
}
const user1 = createUser('John', 25);
const user2 = createUser('Jane', 30);
console.log(user1.about());
console.log(user2.about());


function sayHi(){
  console.log("hello world")
}
window.sayHi();
sayHi();

console.log(window.innerHeight);
console.log(window.innerWidth);
// DOM 
console.log(navigator.userAgent);
console.log(navigator. platform);

console.log(navigator.userAgentData.platform);

function loadScript(src){
  let script = document.createElement("script");  
script.src = src;document.head.append(script);}

function loadScript(src,callback){
     let script = document.createElement("script");
    script.src = src;
    script.onload = () => callback(script);
    document.head.append("script")}

    loadScript("https://cdnjs.cloudflare.com/ajax/libs/loadash.js/3.2.0/loadash.js", script =>{
    alert(`cool, the script ${script.src} is loaded`);
    console.log(_);
  });

  let promise= new Promise(function(resolve,reject){
    console.log("hello, kaif this is your icecream");
    resolve("promise fulfailed");
  })
  console.log(promise);


let p = new Promise((resolve, reject)=>{
    let a = 1 + 1;
    if(a===2.0){
      resolve("Success");

    }else{
      reject("Failed");
    }
  });

  p.then((message)=>{
    console.log("This is in then" + message);
  }).catch((message)=>{
    console.log("This is in catch" + message);
  }); 

  console.log("Start of the code")

let promise = new Promise(function(resolve, reject){
  setTimeout(()=> {console.log("Printed this line after 5 seconds")}, 5000);
   console.log("Start of the code")
});
console.log("End of the code");



let promise = new Promise(function (resolve, reject) {
  console.log("Start of the code");

  setInterval(() => {
    console.log("Print this line after 3 sec");
  }, 3000);
 clearInterval(intervalId); 
  console.log("End of the sync code");
 function stopInterval(callback) {
    callback(intervalId);
  }

  resolve("Promise fulfilled successfully");
});

promise.then(
  result => console.log(result),
  error => console.log(new Error("Whoops I am sorry"))
);

async function hello() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("done!");
        }, 1000);
    });

    let result = await promise;
    console.log(result);
}

hello();*/



