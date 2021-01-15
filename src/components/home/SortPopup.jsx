import {useState, useEffect, useRef} from "react";

const SortPopup = (props) => {
    const [menuSelectMode, setMenuSelectMode] = useState(false)
    useEffect(() => {
        document.body.addEventListener(`click`, handleOutSideClick)
    }, [])
    const sortElementRef = useRef()
    const handleOutSideClick = (e) => {
        if(!e.path.includes(sortElementRef.current)){
            setMenuSelectMode(false)
        }
    }
    const toggleMenuSelectMode = () => {
        setMenuSelectMode(!menuSelectMode)
    }
    const onSelectSort = (select) => {
        console.log(select)
        props.setActiveFilter(select)
        toggleMenuSelectMode()
    }
    console.log(props.activeFilter)
    const sortList = props.filtersList.map((item, index) => <li key={`${item.name}_${index}`} onClick={() => onSelectSort(item.type)}
                                                          className={item.name === props.activeFilter.name ? "active" : ""}>{item.name}</li>)
    return (
        <div ref={sortElementRef} className="sort">
            <div className="sort__label">
                <svg className={menuSelectMode ? "rotate" : ""}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={toggleMenuSelectMode}>{props.activeFilter.name}</span>
            </div>
            {menuSelectMode &&
            <div className="sort__popup">
                <ul>
                    {sortList}
                </ul>
            </div>}
        </div>
    )
}

export default SortPopup