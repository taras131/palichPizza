import classNames from "classnames"
import {useDispatch} from "react-redux";
import {setActiveSize, setActiveType} from "../../../redux/pizzaReducer";
import {addPizzaToCart} from "../../../redux/cartReducer";

const PizzaItem = ({name, id, imageUrl, activeType, activeSize, sizes, price, types, cartList}) => {
    let countInCart = 0
    cartList.forEach(value => {
        if (value.id === id) {
            countInCart += value.count
        }
    })
    const dispatch = useDispatch()
    const typesName = ["тонкое", "традиционное"]
    const sizeName = [26, 30, 40]
    const onSelectType = (id, index) => {
        dispatch(setActiveType(id, index))
    }
    const onSelectSize = (id, index) => {
        dispatch(setActiveSize(id, index))
    }
    const onClickAddPizza = () => {
        const object = {
            name, id, imageUrl, activeType, activeSize, sizes, price, types
        }
        dispatch(addPizzaToCart(object))
    }
    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {typesName.map((item, index) => <li
                        className={classNames({
                            active: activeType === index,
                            disable: !types.includes(index)
                        })} key={item} onClick={() => onSelectType(id, index)}>{item}</li>)}
                </ul>
                <ul>
                    {sizeName.map(item => <li
                        className={classNames({
                            active: activeSize === item,
                            disable: !sizes.includes(item)
                        })} key={item} onClick={() => onSelectSize(id, item)}>{item} см.</li>)}
                </ul>
            </div>
            <div className="pizza-block__bottom" onClick={onClickAddPizza}>
                <div className="pizza-block__price">{price} ₽</div>
                <div className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {countInCart >0 ? <i>{countInCart}</i> : ""}
                </div>
            </div>
        </div>
    )
}

export default PizzaItem