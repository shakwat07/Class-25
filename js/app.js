let decrement = document.querySelector(".cart_box .minus");
let increment = document.querySelector(".cart_box .plus");
let cart = document.querySelector(".cart_box .cart");

increment.addEventListener("click", () => {
  let cartValue = Number(cart.value);
  cart.value = ++cartValue;
});
decrement.addEventListener("click", () => {
  let cartValue = Number(cart.value);
  if (cartValue > 1) {
    cart.value = --cartValue;
  }
});

// H1 Color change

let h1 = document.querySelector("h1");

h1.addEventListener("mouseover", () => {
  h1.style = "color: white; background-color: black;";
});
h1.addEventListener("mouseout", () => {
  h1.style = "color: red; background-color: yellow;";
});
