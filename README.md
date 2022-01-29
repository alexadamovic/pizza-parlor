# _Pizza Parlor_

#### By _**Alex Adamovic**_

#### _A JavaScript web application that simulates an online ordering interface for a pizza shop_

## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_
* _jQuery_
* _Bootstrap_

## Description

_This JavaScript web application simulates an online ordering page for a pizza shop. The user is able to select a pizza size with a base price, choose from a variety of toppings in four different pricing tiers, and also choose from three different choices of add-ons if they would like. Once the user has built their pizza to their desired specifications, they are abel to click the "Check Total" button to get a total amount displayed at the bottom of the page. The user is able to go back and alter any parameter to check for a new total without having to refresh the page._

## Live Link

* _https://alexadamovic.github.io/pizza-parlor/_

## Setup/Installation Requirements

* _clone the repository at https://github.com/alexadamovic/pizza-parlor to your desktop_
* _navigate to the desktop/pizza-parlor folder_
* _open index.html in your browser or view/edit code in your software application of choice_

## Known Bugs

* _None_

## License

_MIT License_

Copyright (c) _2022_ _Alex Adamovic_

## Tests

#### Describe Pizza()

Test: "It should construct a Pizza object with two properties for toppings and size"  
Code: const bestPizza = new Pizza(["spinach", "bacon", "garlic"], "large");  
  bestPizza;  
Expected Output: Pizza { toppings: ["spinach", "bacon", "garlic"], size: "large"}

Test: "It should construct a Pizza object with three properties for toppings, size, and addOns"  
Code: const bestPizza = new Pizza(["spinach", "bacon", "garlic"], "large", ["ranch", "caeser"]);  
Expected Output: Pizza { toppings: ["spinach", "bacon", "garlic"], size: "large", addOns: ["ranch, "caeser"]}

#### Describe Pizza.prototype.pizzaPrice()

Test: "It should return a price as a number based on the toppings and size of a Pizza object"  
Code: bestPizza.pizzaPrice();  
Expected Output: 24

Test: "It should return a price as a number based on the toppings, size, and addOns of a Pizza object"  
Code: bestPizza.pizzaPrice();  
Expected Output: 28