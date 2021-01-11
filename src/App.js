import {Header} from "./components/home";
import Cart from "./components/cart/Cart";
import {Route} from "react-router-dom";
import HomeContainer from "./components/home/HomeContainer";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path="/" component={HomeContainer}/>
                <Route exact path="/cart/" component={Cart}/>
            </div>
        </div>
    );
}

export default App;
