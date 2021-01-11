import pizzaReducer from "./pizzaReducer";
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const reducersList = combineReducers({
    pizzaInfo: pizzaReducer
})

let store = createStore(reducersList, applyMiddleware(thunk))

export default store