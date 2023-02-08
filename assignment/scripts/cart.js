console.log('***** Cart Functions *****');

let basket = [];

console.log('Basket is:', basket);

function addItem(item) {
    basket.push(item);
    return true;
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
