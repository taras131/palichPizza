import {Categories, SortPopup} from "./index";
import PizzaItem from "./pizzaitem/PizzaItem";
import {useSelector} from "react-redux";

const  itemsCategory =[`Все`, `Мясные`, `Вегетарианская`, `Гриль`, `Острые`, `Закрытые`]

const Home = () => {
    const {pizzasList, isLoading, filtersList, activeFilter, activeCategories} = useSelector(state => {
        return ({
            pizzasList: state.pizzaInfo.pizzasList,
            isLoading: state.pizzaInfo.isLoading,
            filtersList: state.filtersInfo.filtersList,
            activeFilter: state.filtersInfo.activeFilter,
            activeCategories: state.filtersInfo.activeCategories
        })
    })
    if (!isLoading) {
        return <div>Загрузка</div>
    }
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
                {pizzasItemList}
            </div>
        </div>
    )
}

export default Home