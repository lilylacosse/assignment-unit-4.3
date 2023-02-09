console.log('***** Cart Functions *****');

let basket = [];
const maxItems = 5;

console.log('Basket is:', basket);

//addItem adjusted for stretch goal #3
function addItem(item) {
    if (isFull(basket) === false) {
        basket.push(item);
        return true;
    }
    else {
        return false;
    }
}   

console.log('Adding apples (expect true):', addItem('apples'));
console.log('Basket is now:', basket);

function listItems(array) {
    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

console.log('Adding bananas:', addItem('bananas'));
console.log('Adding kiwis:', addItem('kiwis'));
console.log('Adding pineapples:', addItem('pineapples'));
console.log('Adding grapefruit:', addItem('grapefruit'));
console.log('Adding peaches (expect false) :', addItem('peaches'));
console.log('Basket is now:', basket);

console.log('About to call listItems w. input of basket - expect a log of types of fruit:')

listItems(basket)

function empty(array) {
    for (i = array.length - 1; i > -1; i--) {
        array.pop();
    }
}

console.log('basket before calling empty:', basket)
empty(basket);
console.log('basket after calling empty:', basket)

// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// STRETCH GOALS
// Stretch goal #1 on line 4
// #2

function isFull(array) {
    if (array.length < maxItems) {
        return false;
    }
    else {
        return true;
    }
}
console.log('basket is:', basket);
console.log('Test isFull - expect false:', isFull(basket));

addItem('apples');
addItem('grapes');
addItem('popsicles');
addItem('sourdough bread');
addItem('hummus');

console.log('basket is:', basket);
console.log('Test isFull - expect true:', isFull(basket));

addItem('chips');

console.log('Test isFull - expect true:', isFull(basket));

// Stretch goal #3 added at line 9 

