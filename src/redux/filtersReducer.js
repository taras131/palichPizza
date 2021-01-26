const SET_ACTIVE_FILTER = "SET_ACTIVE_FILTER",
    SET_ACTIVE_CATEGORIES = "SET_ACTIVE_CATEGORIES"
const initialState = {
    filtersList: [
        {name: `популярности`, type: `popular`},
        {name: `цене`, type: `price`},
        {name: `алфавиту`, type: `name`}
    ],
    activeFilter: {name: `популярности`, type: `popular`},
    activeCategories: 0
}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_FILTER:
            return {...state, activeFilter: state.filtersList.filter(item => item.type === action.select)[0]}
        case SET_ACTIVE_CATEGORIES:
            return {...state, activeCategories: action.index}
        default:
            return state
    }
}
export const setActiveFilter = (select) => {
    return {type: SET_ACTIVE_FILTER, select}
}
export const setActiveCategories = (index) => {
    return {type: SET_ACTIVE_CATEGORIES, index}
}

export default filtersReducer