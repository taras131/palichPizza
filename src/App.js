import {Header} from "./components/home";
import Cart from "./components/cart/Cart";
import {Route} from "react-router-dom";
import Home from "./components/home/Home";

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
