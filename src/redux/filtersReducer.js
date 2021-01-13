const ALL = "ALL"

const filtersReducer = (state, action) =>{
    switch (action.type){
        case ALL:
            return {...state}
        default:
            return state
    }
}

export default filtersReducer