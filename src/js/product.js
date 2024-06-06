import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  let currentCart = getLocalStorage("so-cart");

  if (!currentCart || !Array.isArray(currentCart)) {
    currentCart = [];
  }
  // console.log('Current Cart:', currentCart);

  currentCart.push(product);
  // console.log('Updated Cart:', currentCart);
  setLocalStorage("so-cart", currentCart);
}

async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  // console.log('Product to add:', product);
  addProductToCart(product);
}

document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
