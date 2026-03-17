const products = [
  { id: 1, name: "Shoes", price: 1000 },
  { id: 2, name: "T-Shirt", price: 500 },
  { id: 3, name: "Watch", price: 1500 }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  const count = cart.length;
  const el = document.getElementById("cart-count");
  if (el) el.innerText = count;
}

function displayProducts() {
  const list = document.getElementById("product-list");
  if (!list) return;

  list.innerHTML = products.map(p => `
    <div class="product">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join("");
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Added to cart");
}

function displayCart() {
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  if (!container) return;

  let total = 0;

  container.innerHTML = cart.map(item => {
    total += item.price;
    return `<p>${item.name} - ₹${item.price}</p>`;
  }).join("");

  totalEl.innerText = "Total: ₹" + total;
}

updateCartCount();
displayProducts();
displayCart();
