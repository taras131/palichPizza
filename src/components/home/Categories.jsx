import {useState} from "react";


const Categories = (props) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0)
    const onSelectItem = (index) => {
        props.onClick(index)
        setActiveItemIndex(index)
    }
    const items = props.items.map((name, index) => <li onClick={() => onSelectItem(index)}
                                                       className={index === activeItemIndex ? "active" : ""}
                                                       key={`${name}_${index}`}>{name}</li>)
    return (
        <div className="categories">
            <ul>
                {props.items && items}
            </ul>
        </div>
    )
}
export default Categories