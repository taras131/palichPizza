import {Header} from "./components/home";
import Cart from "./components/cart/Cart";
import {Route} from "react-router-dom";
import Home from "./components/home/Home";
import {useEffect} from "react";
import {getPizzasData} from "./redux/pizzaReducer";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPizzasData())
    }, [])
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route exact path="/cart/" component={Cart}/>
            </div>
        </div>
    );
}

export default App;
