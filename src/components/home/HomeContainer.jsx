import Home from "./Home";
import React from "react"
import {getPizzasData, setActiveSize, setActiveType} from "../../redux/pizzaReducer";
import {connect} from "react-redux";
import {useEffect} from "react";

const HomeContainer = (props) => {
    useEffect(() => {
        props.getPizzasData()
    }, [])
    return(
        <Home pizzasList = {props.pizzasList} isLoading ={props.isLoading} getPizzasData={props.getPizzasData}
              setActiveType = {props.setActiveType} setActiveSize = {props.setActiveSize} />
    )
}
const mapStateToProps = (state)=>{
    return{
        pizzasList: state.pizzaInfo.pizzasList,
        isLoading: state.pizzaInfo.isLoading
    }
}


export default connect(mapStateToProps,{getPizzasData,setActiveType,setActiveSize})(HomeContainer)
