import axios from "axios";

export const APIPizza = {
    async getPPizza(activeFilter,activeCategories) {
        const response = await axios.get(`http://localhost:3000/pizzas?${activeCategories > 0 ? `category=${activeCategories}`: `` }&_sort=${activeFilter.type}&_order=asc`)
        const pizzasList = response.data.map(item => {
            return {...item, activeType: item.types[0], activeSize: item.sizes[0]}
        })
        return pizzasList
    }
}

export default APIPizza;