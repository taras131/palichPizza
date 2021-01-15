import Home from "./Home";
import React from "react"
import {connect} from "react-redux";
import {useEffect} from "react";
import {getPizzasData, setActiveSize, setActiveType} from "../../redux/pizzaReducer";
import {setActiveFilter} from "../../redux/filtersReducer";

const HomeContainer = (props) => {
    useEffect(() => {
        props.getPizzasData()
    }, [])
    return(
        <Home {...props} />
    )
}
const mapStateToProps = (state) => {
    return({
        pizzasList: state.pizzaInfo.pizzasList,
        isLoading: state.pizzaInfo.isLoading,
        filtersList: state.filtersInfo.filtersList,
        activeFilter: state.filtersInfo.activeFilter
    })
}


export default connect(mapStateToProps,{getPizzasData,setActiveType,setActiveSize, setActiveFilter})(HomeContainer)
