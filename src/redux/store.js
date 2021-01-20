import pizzaReducer from "./pizzaReducer";
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import filtersReducer from "./filtersReducer";
import cartReducer from "./cartReducer";

const reducersList = combineReducers({
    pizzaInfo: pizzaReducer,
    filtersInfo: filtersReducer,
    cartInfo: cartReducer
})

let store = createStore(reducersList, applyMiddleware(thunk))

export default store