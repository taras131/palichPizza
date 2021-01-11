import {Categories, SortPopup} from "./index";
import PizzaItem from "./pizzaitem/PizzaItem";

const Home = (props) => {
    console.log(props.pizzasList[0])
    if(!props.isLoading){
        return <div>Загрузка</div>
    }
    const pizzasItemList = props.pizzasList[0].map(item => <PizzaItem key={`${item.id}_${item.name}`} imageUrl={item.imageUrl}
                                                                            name={item.name} price={item.price}
                                                                            rating={item.rating} sizes={item.sizes}
                                                                            types={item.types} />)
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