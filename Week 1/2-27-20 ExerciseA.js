/* Begin Exercise 1 */

// Create initial array
var shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];

// Add 'fruit loops' to shoppingList
shoppingList.push('fruit loops');

// Update 'coffee' to 'fair trade';
shoppingList[4] = 'fair trade coffee';

// Replace 'chips' and 'salsa' with 'rice' and 'beans' respectively
shoppingList.splice(2,2, 'rice', 'beans');

// Create an empty array to represent the shoppingcart
var shoppingCart = [];

// Removing last item from shoppingList and adding to shoppingCart
shoppingCart.push(shoppingList.pop());

// Removing first item from shoppingList and adding to shoppingCart
shoppingCart.push(shoppingList.shift());

// While loop to add remaining shoppingList items to shoppingCart
while(shoppingList.length > 0)
{
    shoppingCart.push(shoppingList.shift());
}

console.log(shoppingList);
console.log(shoppingList.length);
console.log(shoppingCart);
console.log(shoppingCart.length);

// Sort items alphabetically backwards
shoppingCart.sort().reverse();

// Print to conosle as comma separated string
console.log(shoppingCart.join(', '));

/* End Exercise 1 */