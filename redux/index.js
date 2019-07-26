

var products = [
    {
        id:1,
        name:"iPad 4 Mini" ,
        price: 500.01,
        num:10
    },
    {
        id:2,
        name:   "H&M T-Shirt White",
        price: 10.99,
        num: 10
    },
    {
        id:3,
        name:"Charli XCX - Sucker CD",
        price:19.99,
        num:10
    } 
]

function initValue() {
    document.getElementById('num1').innerHTML = products[0].num;
    document.getElementById('num2').innerHTML = products[1].num;
    document.getElementById('num3').innerHTML = products[2].num;
    document.getElementById("total").innerHTML = "0.00";
}

function addCart(product) {

    var ctrl = document.getElementById("num" + product.id);
    var current = parseInt(ctrl.innerHTML);
    if(current <= 0) return;
    ctrl.innerHTML--;
    
    var totalctrl = document.getElementById("total");
    totalctrl.innerHTML = (parseFloat(totalctrl.innerHTML) + product.price).toFixed(2);

}
/////////////////////////////////////////////////////////////////////////// 
//Redux
const store = Redux.createStore(mainReducer);
 
 function onAdd(id) {
    store.dispatch(addToCart(products[id-1]));
}

function reset() {
    store.dispatch(checkOut());
}

function ondraw() {

    var action = store.getState();
    switch(action.type){
        case CHECKOUT:
            initValue();
            break;
        case ADD_CART:
            addCart(action.product);
            break;
        default:
            break;
    }
}

store.subscribe(ondraw);
/////////////////////////////////////////////////////////////////////////////////////

