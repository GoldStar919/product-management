//Reducer for character information Initialize State

const initState = {
    color: "",
    fuse: 1,
    quantity: 1
}

//Define Actions
const OrderReducer = (state = initState, action) => {
    switch (action.type) {
        //Change character name
        case 'CHANGE_ORDER':
            return {
                ...state,
                color: action.payload.color,
                fuse: action.payload.fuse,
                quantity: action.payload.quantity
            }
            
        default:
            return state
    }
}

export default OrderReducer;