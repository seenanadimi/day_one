//create element
const newButton = document.createElement('button');
console.log(newButton);

//place an element
document.body.appendChild(newButton);
// can change text
newButton.innerHTML = 'New';
// listen for events
newButton.addEventListener('click', function() {
    console.log('click')
});
// get internet information
fetch('http://api.github.com/users/seenanadimi').then(data => data.json).then(data => console.log(data));

// can compute numbers 
console.log(1+5);