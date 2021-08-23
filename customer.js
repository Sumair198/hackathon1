
var products = []
var getproducts = localStorage.getItem('items')

if(getproducts !== null)
{
    products = JSON.parse(getproducts)
}



let main = document.getElementById('products');

for(var i = 0; i < products.length; i++){
    main.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${products[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${products[i].name}</h5>
        <p class="card-text">Price : ${products[i].price}</p>
        <a href="#" onclick='addToCart("${products[i].name}","${products[i].price}","${products[i].image}")' class="btn btn-primary">ADD TO CART</a>
    </div>
</div>
    `
}

let allCarts = [];
let carts = localStorage.getItem('carts')

if(carts !== null){
   allCarts = JSON.parse(carts)
}

function addToCart(name,price,image){
    let cart = {
        name,
        price,
        image
    }
    allCarts.push(cart)
    localStorage.setItem('carts',JSON.stringify(allCarts))
}