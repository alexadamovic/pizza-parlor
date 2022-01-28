function Pizza(toppings, size) {
  this.toppings = toppings
  this.size = size
}

Pizza.prototype.pizzaPrice = function () {
  let price = 0;
  
  if (this.size === "small") {
    price = 14.00;
  } else if (this.size === "medium") {
    price = 18.00;
  } else if (this.size === "large") {
    price = 21.00;
  } else {
    price = 25.00;
  }

  if (this.toppings.includes("bacon")) {
    price += 1.75;
  }
  if (this.toppings.includes("spinach")) {
    price += .5;
  }
  if (this.toppings.includes("garlic")) {
    price += .5;
  }
  if (this.toppings.includes("pepperoni")) {
    price += 2;
  }
  if (this.toppings.includes("sausage")) {
    price += 2;
  }
  if (this.toppings.includes("pineapple")) {
    price += 1;
  }
  if (this.toppings.includes("ham")) {
    price += 1.5;
  }
  if (this.toppings.includes("mushrooms")) {
    price += .5;
  }

  return price;
};