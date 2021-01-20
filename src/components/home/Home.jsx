import {Categories, SortPopup} from "./index";
import PizzaItem from "./pizzaitem/PizzaItem";
import {useDispatch, useSelector} from "react-redux";
import {getPizzasData} from "../../redux/pizzaReducer";
import {useEffect} from "react";
import Preloader from "../preloader/Preloader";

const  itemsCategory =[`Все`, `Мясные`, `Вегетарианская`, `Гриль`, `Острые`, `Закрытые`]

const Home = () => {
    const dispatch = useDispatch()
    const {pizzasList, isLoading, filtersList, activeFilter, activeCategories} = useSelector(state => {
        return ({
            pizzasList: state.pizzaInfo.pizzasList,
            isLoading: state.pizzaInfo.isLoading,
            filtersList: state.filtersInfo.filtersList,
            activeFilter: state.filtersInfo.activeFilter,
            activeCategories: state.filtersInfo.activeCategories
        })
    })
    useEffect(() => {
            dispatch(getPizzasData(activeFilter,activeCategories))
    },[activeFilter,activeCategories])
    const pizzasItemList = pizzasList.map(item => <PizzaItem key={`${item.id}_${item.name}`} {...item}/>)
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={itemsCategory}
                            activeCategories ={activeCategories}/>
                <SortPopup activeFilter={activeFilter} filtersList={filtersList} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                ? pizzasItemList
                : Array(10).fill(0).map((item,index)=> <Preloader key = {index}/>)}
            </div>
        </div>
    )
}

export default Home