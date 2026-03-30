// question : 01
// let a = { value: 10 };
// let b = a;
// b.value = 20;

// console.log("a =", a.value);
// console.log("b =", b.value);




// question: 02
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     myFunction() {
//         console.log(`Hello My name is ${this.name} and I am ${this.age} years old`)
//     }
// }

// const user1 = new Person('Ehasun', 21);
// const user2 = new Person('Orko', 25);


// user1.myFunction();
// user2.myFunction();


// class BankAccount {
//     constructor(balance){
//         this.balance = balance
//     }

//     deposit(amount) {
//         this.balance += amount
//     }

//     myBalance() {
//         return this.balance
//     }
// }

// const transaction1 = new BankAccount(1000);
// transaction1.deposit(500);

// console.log(transaction1.myBalance());



// function Users(name) {
//   this.name = name;
// }

// Users.prototype.login = function() {
//     console.log("login");
    
// }

// const u1 = new Users("Orko");

// MERN Project-এ OOP কোথায় ব্যবহার করো?




// q1. 
// function reverseString(str) {
//     if(typeof str !== "string") {
//         return
//     } 
//     else {
//         return str.split("").reverse().join("");
//     }
// }

// console.log(reverseString("hello"));

// q2.
// function countVowels(str) {
//     let count = 0;
//     const vowel = ["a", "e", "i", "o", "u"];

//     for(let char of str.toLowerCase()) {
//         if(vowel.includes(char)) {
//             count ++;
//         }
//     }

//     return count;
// }

// console.log(countVowels("programming"));

// q3
// function findLargestNumber(arr) {
//     let max = arr[0];

//     for(let num of arr){
//         if(num > max) {
//             max = num;
//         }
//     }

//     return max;
// }

// console.log(findLargestNumber([5, 9, 7, 3]));


// q4. 
// function sumOfArr(arr) {
//     return arr.reduce((sum, num) => {
//      return sum + num
//     }, 0)
// }

// console.log(sumOfArr([1,2,3,4]));

// q5
// function getEvenNumber(arr) {
//     return arr.filter((num) => {
//         return num % 2 === 0;
//     })
// }

// console.log(getEvenNumber([1, 2, 3, 4, 5, 6]));



// const improperStr = "Do not do this"

// console.log(improperStr);

// console.log(foo);
// var foo = "hello";
// console.log(foo);


// console.log(1 + "2" + 3);


// console.log(3 + true)
