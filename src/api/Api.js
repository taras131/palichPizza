import axios from "axios";

export const APIPizza = {
    async getPPizza() {
        const response = await axios.get(`./db.json`)
        const pizzasList = response.data.pizzas.map(item => {
            return {...item, activeType: item.types[0], activeSize: item.sizes[0]}
        })
        return pizzasList
    }
}

export default APIPizza;