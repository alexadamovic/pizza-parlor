function Pizza(toppings, size) {
  this.toppings = toppings
  this.size = size
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

  if (this.toppings.includes("premium-meat")) {
    price += 2.5;
  }
  if (this.toppings.includes("regular-meat")) {
    price += 1.75;
  }
  if (this.toppings.includes("premium-veg")) {
    price += .75;
  }
  if (this.toppings.includes("regular-veg")) {
    price += .5;
  }

  return price;
};

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    let pizzaSize = $("select#pizza-size").val();
    console.log(pizzaSize)
  
    let pizzaToppings = [];
    $("input:checkbox[name='pizza-toppings']:checked").each(function(){
      pizzaToppings.push($(this).val());
    });
    console.log(pizzaToppings)

    let userPizza = new Pizza(pizzaToppings, pizzaSize)
    console.log(userPizza)

    $("#pizza-price").html(userPizza.pizzaPrice());
  });
});