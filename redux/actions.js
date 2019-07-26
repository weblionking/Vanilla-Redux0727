 const ADD_CART = "add cart";
 const CHECKOUT = "checkout";


 function addToCart(product) {
    
    return {
        type: ADD_CART,
        product : product
    }
}

 function checkOut() {
    return {
        type: CHECKOUT,
    }
}