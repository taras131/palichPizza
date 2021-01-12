import APIPizza from "../api/Api";

const SET_PIZZAS = "SET_PIZZAS",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_ACTIVETYPE = "SET_ACTIVETYPE",
    SET_ACTIVESIZE = "SET_ACTIVESIZE"
const initialState = {
    pizzasList: [],
    isLoading: false
}
const pizzaReducer = (state = initialState, action) => {
    let tempPizzasList;
    switch (action.type) {
        case SET_PIZZAS:
            return {...state, pizzasList: action.pizzasList}
        case SET_IS_LOADING:
            return {...state, isLoading: action.value}
        case SET_ACTIVETYPE:
            tempPizzasList = state.pizzasList.map(item => {
                if (item.id === action.id) {
                    return ({...item, activeType: action.index})
                }
                return (item)
            })
            return {...state, pizzasList: tempPizzasList}
        case SET_ACTIVESIZE:
            tempPizzasList = state.pizzasList.map(item => {
                if (item.id === action.id) {
                    return ({...item, activeSize: action.index})
                }
                return (item)
            })
            return {...state, pizzasList: tempPizzasList}
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
export const setActiveType = (id, index) => {
    return {type: SET_ACTIVETYPE, id, index}
}
export const setActiveSize = (id, index) => {
    return {type: SET_ACTIVESIZE, id, index}
}

export const getPizzasData = () => async (dispatch) => {
    let response = await APIPizza.getPPizza()
    dispatch(setPizzasList(response))
    dispatch(setIsLoading(true))
}
export default pizzaReducer