'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-5-improved-shopping-at-the-supermarket

In the current exercise we will rewrite the `addToShoppingCart` function to make 
it pure. Do the following:

1. Complete the parameter list of `addToShopping()`. As a first parameter it 
   should accept a shopping cart array and as a second parameter it should 
   accept a grocery item to be added.
2. The function should return a new shopping cart array, following the same rule 
   as in the previous exercise: it should contain a maximum of three items.
3. The shopping cart passed as an argument should not be mutated.
4. When constructing the new shopping cart array you should make use of the ES6 
   spread syntax.
5. Confirm that you function passes the provided unit tests.
------------------------------------------------------------------------------*/
// ! Function under test
function addToShoppingCart(shoppingCart, item) {
  const newShoppingCart = [...shoppingCart]
        newShoppingCart.push(item)
  if (newShoppingCart.length > 3){
    newShoppingCart.shift()
     } return newShoppingCart
} const newShoppingCart = ['bananas', 'milk', 'chocolate']
console.log(addToShoppingCart(newShoppingCart, 'chips'))

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log(addToShoppingCart(newShoppingCart, 'apple'));
  console.assert(addToShoppingCart.length === 2);
}

function test2() {
  console.log(addToShoppingCart(newShoppingCart), 'chocolate');
  // A pure function should return the same result when called with
  // identical arguments. It should also have no side effects (not tested here).
  const newShoppingCart = ['bananas', 'milk'];
  const result1 = addToShoppingCart(newShoppingCart, 'chocolate');
  const result2 = addToShoppingCart(newShoppingCart, 'chocolate');
  console.assert(JSON.stringify(result1) === JSON.stringify(result2));
  console.assert(
    JSON.stringify(newShoppingCart) === JSON.stringify(['bananas', 'milk'])
  );
}

function test3() {
  console.log(addToShoppingCart(newShoppingCart), 'chocolate');
  const newShoppingCart = ['bananas', 'milk'];
  const result = addToShoppingCart(newShoppingCart, 'chocolate');
  console.assert(result.length === 3);
  console.assert(result.includes('chocolate'));
}

function test4() {
  console.log(addToShoppingCart(newShoppingCart), 'waffles');
  const newShoppingCart = ['bananas', 'milk', 'chocolate'];
  const result = addToShoppingCart(newShoppingCart, 'waffles');
  console.assert(result.length === 3);
  console.assert(result.includes('waffles'));
}

function test() {
  test1();
  test2();
  test3();
  test4();
}

test();
