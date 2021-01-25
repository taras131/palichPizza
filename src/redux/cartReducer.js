const ADD_PIZZA_TO_CART = "ADD_PIZZA_TO_CART",
    DELETE_PIZZA = "DELETE_PIZZA",
    DELETE_ALL_PIZZA = "DELETE_ALL_PIZZA",
    PLUS_PIZZA_COUNT = "PLUS_PIZZA_COUNT",
    SET_TOTAL_PRICE = "SET_TOTAL_PRICE",
    SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const initialState = {
    cartList: {},
    totalPrice: 0,
    totalCount: 0
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOTAL_PRICE:
            return {...state}
        case SET_TOTAL_COUNT:
            return {...state}
        case ADD_PIZZA_TO_CART: {
            const newPizzaList = {
                    ...state.cartList,
                    [action.item.id]: !state.cartList[action.item.id]
                        ? [action.item]
                        : [...state.cartList[action.item.id], action.item]
                }
                const arrAllPizzas = [].concat.apply([],Object.values(newPizzaList))
            const totalPrice = arrAllPizzas.reduce((sum, obj)=> obj.price +sum , 0)
            return {
                ...state,
                cartList: newPizzaList,
                totalCount: arrAllPizzas.length,
                totalPrice
            }
        }
        case DELETE_PIZZA:
            return {...state, cartList: [...state.cartList.filter((item, index) => index !== action.index)]}
        case DELETE_ALL_PIZZA:
            return {...state, cartList: []}
        case PLUS_PIZZA_COUNT:
            return {...state}
        default:
            return state
    }
}
export const setTotalPrice = () => {
    return {type: SET_TOTAL_PRICE}
}
export const setTotalCount = () => {
    return {type: SET_TOTAL_COUNT}
}
export const addPizzaToCart = (item) => {
    console.log(item)
    return {type: ADD_PIZZA_TO_CART, item}
}
export const deletePizza = (index) => {
    return {type: DELETE_PIZZA, index}
}
export const deleteAllPizza = () => {
    return {type: DELETE_ALL_PIZZA}
}
export const plusPizzaCount = (index) => {
    return {type: PLUS_PIZZA_COUNT}
}
export default cartReducer