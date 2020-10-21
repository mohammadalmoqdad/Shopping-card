'use strict';

var cart2;
// Cart constructor.
var Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
  Cart.all.push(this)
};
Cart.all=[];
var CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
  CartItem.all.push(this);
};
CartItem.all=[];

// prototype for adding the object in array
console.log(Cart.all)

var Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];
generateCatalog();
var select1=document.getElementById('items');

var quant=document.getElementById('quantity'); //textnox of quantity

//to make the quantity type to number 

for(var i =0; i<Product.allProducts.length;i++){
// to give the options values from product.all   
  var option=document.createElement('option');
  select1.appendChild(option);
  option.textContent=Product.allProducts[i].name;
}



Cart.prototype.addItem = function(product, quantity) {
this.items.push(new CartItem(product,quantity));
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
};


var form =document.getElementById('catalog');
var btn=document.getElementById('submitForm');

  btn.addEventListener('click', handleProductClick);
var renderSection= document.querySelector('.listOfOrders');
  function handleProductClick(event){
    var intQuantitiy=parseInt(quant.value); 
    console.log(select1.value)
    console.log(intQuantitiy)
    event.preventDefault();
    new CartItem(select1.value,intQuantitiy);
    
    // console.log(CartItem(,));
    
    for (var i=0;i<CartItem.all.length;i++){
      var z=new Cart(CartItem.all[i]);
    }
    console.log(renderSection)
    renderSection.setAttribute('style','visibility:visible')
    console.log(CartItem.all[0])
    z.saveToLocalStorage();
    
    renderItems();
    form.reset();
  }
  
 


Cart.prototype.saveToLocalStorage = function() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  
  localStorage.setItem('cart',JSON.stringify(CartItem.all))




};

var ordersList=document.getElementById('orders'); // the list that contains the orders

  ordersList.addEventListener('click',removeOrder);
  function removeOrder(event){
    var z=new Cart(CartItem.all);
    console.log("entered");
    if(event.target.id !== 'orders' && event.target.id !=="xcd") {
      console.log(event.target.id)
      for (var i=0; i<CartItem.all.length; i++) {
        if(CartItem.all[i].product === event.target.id) {
          
         z.removeItem(i)
         console.log(CartItem.all)
          break;
        }

    }
    z.saveToLocalStorage();
    
    renderItems();
    form.reset();
    z.saveToLocalStorage();
    getItemsFromLS();
  }
  }
  
function getItemsFromLS(){

}var returnedItem = localStorage.getItem('cart');
if (returnedItem) {
  console.log()
  CartItem.all = JSON.parse(returnedItem);
  renderItems();
}
Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
  return CartItem.all.splice(item,1);
};


// Product contructor.


function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}


function renderItems(){
  ordersList.innerHTML="";
 
  
  for (var i=0;i<CartItem.all.length;i++){
    
    var liEl = document.createElement('li');
    
    liEl.textContent = CartItem.all[i].product;
    ordersList.appendChild(liEl);
    
    liEl.setAttribute('id',"xcd");
    var delBtn=document.createElement('button');
    delBtn.setAttribute('id',CartItem.all[i].product);
    delBtn.textContent = 'X';
    ordersList.appendChild(delBtn);
    

  }
  
}
