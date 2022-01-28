Describe Pizza()

Test: "It should construct a Pizza object with two properties for toppings and size"  
Code: const bestPizza = new Pizza(["spinach", "bacon", "garlic"], "large");  
  bestPizza;  
Expected Output: Pizza { toppings: ["spinach", "bacon", "garlic"], size: "large"}

Test: "It should construct a Pizza object with three properties for toppings, size, and addOns"  
Code: const bestPizza = new Pizza(["spinach", "bacon", "garlic"], "large", ["ranch", "caeser"]);  
Expected Output: Pizza { toppings: ["spinach", "bacon", "garlic"], size: "large", addOns: ["ranch, "caeser"]}

Describe Pizza.prototype.pizzaPrice()

Test: "It should return a price as a number based on the toppings and size of a Pizza object"  
Code: bestPizza.pizzaPrice();  
Expected Output: 24

Test: "It should return a price as a number based on the toppings, size, and addOns of a Pizza object"  
Code: bestPizza.pizzaPrice();  
Expected Output: 28