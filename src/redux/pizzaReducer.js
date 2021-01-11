import APIPizza from "../api/Api";

const SET_PIZZAS = "SET_PIZZAS",
    SET_IS_LOADING = "SET_IS_LOADING"
const initialState = {
    pizzasList: [],
    isLoading: false
}
const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZAS:
            return {...state, pizzasList: [...state.pizzasList, action.pizzasList]}
        case SET_IS_LOADING:
            return {...state, isLoading: action.value}
        default:
            return state
    }
}

export const setPizzasList = (pizzasList) => {
    return {type: SET_PIZZAS, pizzasList}
}
export const setIsLoading = (value) => {
    return {type: SET_IS_LOADING, value}
}

export const getPizzasData = () => async (dispatch) => {
    let response = await APIPizza.getPPizza()
    dispatch(setPizzasList(response.data.pizzas))
    dispatch(setIsLoading(true))
}
export default pizzaReducer