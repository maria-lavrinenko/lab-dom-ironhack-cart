// ITERATION 1

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector(".price span").textContent);

  const productQty = parseFloat(product.querySelector(".quantity input").value);

  const subtotal = price * productQty;

  console.log("Calculating subtotal, yey!");
  product.querySelector(".subtotal span").textContent = subtotal;

  return subtotal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2

  const allProducts = document.querySelectorAll("tr.product");
  allProducts.forEach((product) => updateSubtotal(product));

  //... your code goes here
  // ITERATION 3

  let totalSubtotal = 0;
  allProducts.forEach((product) => (totalSubtotal += updateSubtotal(product)));

  document.querySelector("h2 span").textContent = `${totalSubtotal}`;

  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
}
//... your code goes here

window.addEventListener("load", () => {
  const removeBtns = document.getElementsByClassName("btn btn-remove");
  const removeBtnArray = [...removeBtns];
  removeBtnArray.forEach((removeBtn) => {
    removeBtn.addEventListener("click", removeProduct());
  });
});

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
