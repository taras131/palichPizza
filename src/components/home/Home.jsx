import {Categories, SortPopup} from "./index";
import PizzaItem from "./pizzaitem/PizzaItem";

const Home = (props) => {
    if(!props.isLoading){
        return <div>Загрузка</div>
    }
    const pizzasItemList = props.pizzasList.map(item => <PizzaItem key={`${item.id}_${item.name}`} {...item}
                                                                      setActiveType = {props.setActiveType}
                                                                   setActiveSize = {props.setActiveSize} />)
    return (
        <div className="container">
            <div className="content__top">
                <Categories onClick={(name) => alert(name)}
                            items={[`Все`, `Мясные`, `Вегетарианская`, `Гриль`, `Острые`, `Закрытые`]}/>
                <SortPopup items={[`Популярности`, `Цене`, `Алфавиту`]}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzasItemList}
            </div>
        </div>
    )
}

export default Home