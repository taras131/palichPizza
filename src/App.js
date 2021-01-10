import {Header} from "./components/home";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import {Route, BrowserRouter} from "react-router-dom";
import ReactDom from "react-dom"

function App() {
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
