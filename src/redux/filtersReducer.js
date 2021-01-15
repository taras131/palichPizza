const ALL = "ALL",
    SET_ACTIVE_FILTER = "SET_ACTIVE_FILTER"
const initialState = {
    filtersList: [
        {name: `популярности`, type: `popular`},
        {name: `цене`, type: `price`},
        {name: `алфавиту`, type: `alphabet`}
    ],
    activeFilter: {name: `популярности`, type: `popular`}
}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_FILTER:
            return {...state,activeFilter: state.filtersList.filter(item => item.type === action.select)[0]}
        default:
            return state
    }
}
export const setActiveFilter = (select) => {
    console.log(select)
    return {type: SET_ACTIVE_FILTER, select}
}

export default filtersReducer