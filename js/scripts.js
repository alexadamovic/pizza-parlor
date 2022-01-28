function Pizza(toppings, size, addOns) {
  this.toppings = toppings
  this.size = size
  this.addOns = addOns
}

Pizza.prototype.pizzaPrice = function () {
  let price = 0;
  
  if (this.size === "small") {
    price = 14;
  } else if (this.size === "medium") {
    price = 18;
  } else if (this.size === "large") {
    price = 21;
  } else {
    price = 25;
  }

  this.toppings.forEach(function(topping) {
    if (topping === "premium-meat") {
      price += 2.5;
    }
    if (topping === "regular-meat") {
      price += 1.75;
    }
    if (topping === "premium-veg") {
      price += .75;
    }
    if (topping === "regular-veg") {
      price += .5;
    }
  });

  if (this.addOns.includes("side-ranch")) {
    price += 1.5
  }
  if (this.addOns.includes("bucket-ranch")) {
    price += 10
  }
  if (this.addOns.includes("caeser")) {
    price += 6
  }
  
  return price.toFixed(2);
};

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    let pizzaSize = $("select#pizza-size").val();
  
    let pizzaToppings = [];
    $("input:checkbox[name='pizza-toppings']:checked").each(function() {
      pizzaToppings.push($(this).val());
    });

    let addOns = [];
    $("input:checkbox[name='add-ons']:checked").each(function() {
      addOns.push($(this).val());
    });

    let userPizza = new Pizza(pizzaToppings, pizzaSize, addOns);

    $("#pizza-price").html(userPizza.pizzaPrice());
  });
});