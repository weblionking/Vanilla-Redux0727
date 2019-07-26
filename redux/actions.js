const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const FORMAT = "FORMAT";

function actionIncrement(count) {
    return {
        type: INCREMENT,
        currentCount: count
    }
}

function actionDecrement(count) {
    return {
        type: DECREMENT,
        currentCount: count
    }
}

function actionReset() {
    return {
        type: RESET
    }
}

function actionFormat() {
    return {
        type: FORMAT
    }
}
