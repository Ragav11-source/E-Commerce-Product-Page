const products = {
  1: { title:"Smart Watch", price:"₹1,999", desc:"A modern smartwatch with fitness tracking features.", img:"images/watch.jpg" },
  2: { title:"Wireless Headphones", price:"₹1,499", desc:"High-quality wireless headphones with deep bass.", img:"images/headphones.jpg" },
  3: { title:"Sports Shoes", price:"₹2,499", desc:"Comfortable and stylish sports shoes for daily wear.", img:"images/shoes.jpg" },
  4: { title:"Smartphone", price:"₹10,999", desc:"Latest smartphone with fast processor and great camera.", img:"images/smartphone.jpg" }
};

let cartCount = 0;

function addToCart(id){
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  alert(products[id].title + " added to cart!");
}

function viewDetails(id){
  const modal = document.getElementById("modal");
  document.getElementById("modal-img").src = products[id].img;
  document.getElementById("modal-title").innerText = products[id].title;
  document.getElementById("modal-price").innerText = products[id].price;
  document.getElementById("modal-desc").innerText = products[id].desc;
  modal.style.display = "block";
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(event){
  const modal = document.getElementById("modal");
  if(event.target == modal){ modal.style.display = "none"; }
}
