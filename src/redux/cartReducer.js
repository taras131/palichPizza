const ADD_PIZZA_TO_CART = "ADD_PIZZA_TO_CART",
    DELETE_PIZZA = "DELETE_PIZZA",
    DELETE_ALL_PIZZA = "DELETE_ALL_PIZZA",
    PLUS_PIZZA_COUNT = "PLUS_PIZZA_COUNT",
    MINUS_PIZZA_COUNT = "MINUS_PIZZA_COUNT"
const initialState = {
    cartList: new Map(),
    totalPrice: 0,
    totalCount: 0
}
const countNumberPizzas = (temporallyCartList) => {
    let count = 0
    temporallyCartList.forEach(value => {
        count += value.count
    })
    return count
}
const sumPricePizzas = (temporallyCartList) => {
    let sum = 0
    temporallyCartList.forEach(value => {
        sum += value.count * value.price
    })
    return sum
}
const cartReducer = (state = initialState, action) => {
    let temporallyCartList = new Map(state.cartList)
    let cartId
    switch (action.type) {
        case ADD_PIZZA_TO_CART:
            cartId = `${action.item.id}${action.item.activeSize}${action.item.activeType}`
            if (temporallyCartList.has(cartId)) {
                temporallyCartList.set(cartId, {...action.item, count: temporallyCartList.get(cartId).count + 1})
                return {
                    ...state,
                    cartList: temporallyCartList,
                    totalCount: countNumberPizzas(temporallyCartList),
                    totalPrice: sumPricePizzas(temporallyCartList)
                }
            } else {
                temporallyCartList.set(cartId, {...action.item, count: 1})
                return {
                    ...state,
                    cartList: temporallyCartList,
                    totalCount: countNumberPizzas(temporallyCartList),
                    totalPrice: sumPricePizzas(temporallyCartList)
                }
            }
        case DELETE_PIZZA:
            temporallyCartList.delete(`${action.id}${action.activeSize}${action.activeType}`)
            return {
                ...state,
                cartList: temporallyCartList,
                totalCount: countNumberPizzas(temporallyCartList),
                totalPrice: sumPricePizzas(temporallyCartList)
            }
        case DELETE_ALL_PIZZA:
            temporallyCartList.clear()
            return {
                ...state,
                cartList: temporallyCartList,
                totalCount: countNumberPizzas(temporallyCartList),
                totalPrice: sumPricePizzas(temporallyCartList)
            }
        case PLUS_PIZZA_COUNT:
            cartId = `${action.item.id}${action.item.activeSize}${action.item.activeType}`
            temporallyCartList.set(cartId, {...action.item, count: temporallyCartList.get(cartId).count + 1})
            return {
                ...state,
                cartList: temporallyCartList,
                totalCount: countNumberPizzas(temporallyCartList),
                totalPrice: sumPricePizzas(temporallyCartList)
            }
        case MINUS_PIZZA_COUNT:
            cartId = `${action.item.id}${action.item.activeSize}${action.item.activeType}`
            temporallyCartList.set(cartId, {...action.item, count: temporallyCartList.get(cartId).count - 1})
            return {
                ...state,
                cartList: temporallyCartList,
                totalCount: countNumberPizzas(temporallyCartList),
                totalPrice: sumPricePizzas(temporallyCartList)
            }
        default:
            return state
    }
}
export const addPizzaToCart = (item) => {
    return {type: ADD_PIZZA_TO_CART, item}
}
export const deletePizza = (id, activeSize, activeType) => {
    return {type: DELETE_PIZZA, id, activeSize, activeType}
}
export const deleteAllPizza = () => {
    return {type: DELETE_ALL_PIZZA}
}
export const plusPizzaCount = (item) => {
    return {type: PLUS_PIZZA_COUNT, item}
}
export const minusPizzaCount = (item) => {
    return {type: MINUS_PIZZA_COUNT, item}
}
export default cartReducer