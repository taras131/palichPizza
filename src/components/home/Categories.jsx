import {useDispatch} from "react-redux";
import {setActiveCategories} from "../../redux/filtersReducer";
import  React from "react";


const Categories = React.memo(function Categories (props) {
    const dispatch = useDispatch()
    const onSelectCategories = (index) => {
       dispatch(setActiveCategories(index))
    }
    const items = props.items.map((name, index) => <li onClick={() => onSelectCategories(index)}
                                                       className={index === props.activeCategories ? "active" : ""}
                                                       key={`${name}_${index}`}>{name}</li>)
    return (
        <div className="categories">
            <ul>
                {props.items && items}
            </ul>
        </div>
    )
})
export default Categories