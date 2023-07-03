let productsInCart = []; 
const parentElement = document.querySelector("#buyItems");
const cartSumPrice = document.querySelector("#sum-price");
const products = document.querySelectorAll(".productsiunder");

// F U N C T I O N   T O   L O G   P R O D U C T S   I N   C A R T
// 1. Loops through all the products in the list and checks that the product we passed as an argument 
// is exsiting in the list. 
// if it does, then we want to increase the count by 1 & update the price. 
// 
function updateProductsInCart(product) {
    for(let i=0; i<productsInCart.length; i++) {
        if(productsInCart[i].id == product.id){
            productsInCart[i].count += 1;
            productsInCart[i].price = productsInCart[i].basePrice * productInCart[i].count
        }
    }
    productsInCart.push(product);
}


// A D D S   E V E N T   L I S T E N E R   T O   A L L  T I C K E T   P R O D U C T S 
products.forEach(product => {product.addEventListener('click', (e) => {
    const  productId = e.target.dataset.productId;
    const productName = product.querySelector('.productName').innerHTML
     const productImage = product.querySelector('img').src
     let productToCart = {
        name: productName,
        image: productImage,
        id: productId,
        count:1,
        price: +productPrice,
        basePrice: +productPrice, 
     }
     updateProductsInCart(productToCart);  // Logs the products to the cart 
     updateShoppingCart();                 // Updates the html each time a product is added to the cart
})})


// L I S T   O F  T I C K E T S . gives every product template html element 
let tickets = [
    {
        name: "ticket1",
        category: "earlyBird",
        image: '',
        price: 120
    },
    {
        name: "ticket2",
        category: "standard",
        image: '',
        price: 240
    },
    {
        name: "ticket3",
        category: "VIP",
        image: '',
        price: 400
    },
    {
        name: "ticket4",
        category: "CompetitionWinners",
        image: '',
        price: 0
    }

];

// .M A P   GIVES EVERY OBJECT A TEMPLATE LITERAL 

tickets.map(ticket => {
    let ticket = `  <div class="col-lg-6 col-md-6 col-12">
    <div class="form-check form-check-radio form-control">
        <input class="form-check-input" type="radio" name="TicketForm"
            id="flexRadioDefault2">
        <label class="form-check-label" for="flexRadioDefault2">
            ${ticket.name} $${ticket.price}
        </label>
    </div>
</div>`

    document.querySelector(".CONTAINER").innerHTML += ticket;  // += adds ticket does not replace, append to the addCart()
})

// You should define classes for Events, Tickets, and Users, each encapsulating relevant attributes and methods. This is a non-negotiable requirement.
class Events {
    constructor(ticket) {
    this.name = name;
    this.category = category;
    this.price = price
    }
}


// calculate the total price of a customer’s shopping cart:
// example of function scoping 
function calculateOrderTotal() {
    var totalPrice = 0; // Initialize total price
  
    // Calculate total price based on product prices
    for (var i = 0; i < cart.length; i++) {
      var product = cart[i];
      totalPrice += product.price;
    }
}
    console.log(`Total order price: $${totalPrice}`)