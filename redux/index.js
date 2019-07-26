/////////////////////////////////////////////////////////////////////////// 
//UI
function getCount() {
    return parseInt(document.getElementById('count').innerHTML);
}

function drawCart(states) {
    var statesContent = '';
    states.forEach(state => {
        statesContent = statesContent + '<div>' + '<h3>' + state + '</h3>' + '</div>';
    });

    document.getElementById('myCart').innerHTML = statesContent;
    if(states.length > 0) {
        document.getElementById('count').innerHTML = states[states.length - 1];
    }
        
}
/////////////////////////////////////////////////////////////////////////// 
//Redux
const store = Redux.createStore(cartReducer);

function onIncrement() {
    store.dispatch(actionIncrement(getCount()));
}

function onDecrement() {
    store.dispatch(actionDecrement(getCount()));
}

function onReset() {
    store.dispatch(actionReset());
}

function onFormat() {
    store.dispatch(actionFormat());
}

function onUpdate() {
    var states = store.getState();
    drawCart(states);
}

store.subscribe(onUpdate);
/////////////////////////////////////////////////////////////////////////////////////

