//

const artistArray = ["Kid Cudi", " Kendrick Lamar", " and Frank Ocean"];
const add = [2 + 6 + 5 + 1];
const multiply = 4 * 7;
const string = "hello my name is seena nadimi";
const concat = "hello my name is seena nadimi i am " + multiply + " years old.";
const concat2 = "my favorite artists are " + artistArray;

let aboutMe = {
  name: "Seena Nadimi",
  age: 28,
  isStudent: true,
  location: "Richmond, CA",
};

fetch("http://api.github.com/users/seenanadimi")
  .then((data) => data.json())
  .then((test) => console.log(test));


const newButton = document.createElement('button');
// console.log(newButton);
newButton.innerHTML ="hello"
document.body.appendChild(newButton);
newButton.addEventListener("click", function() {
    console.log('world')
});



// CONSOLE DIR
console.dir(aboutMe);
console.dir(concat);

// CONSOLE LOG
console.log(concat.length);
console.log(aboutMe);
console.log(concat2);
console.log(concat);
console.log(string);
console.log(multiply);
console.log(add);
console.log(artistArray);
console.log(60 - 27);
