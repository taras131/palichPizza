const ADD_PIZZA_TO_CART = "ADD_PIZZA_TO_CART"
const initialState = {
    cartList: []
}
const cartReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_PIZZA_TO_CART:
            return {...state, cartList: [...state.cartList,action.item]}
        default:
            return state
    }
}
export const addPizzaToCart = (item) =>{
    return {type: ADD_PIZZA_TO_CART, item}
}
export default cartReducer