import axios from "axios";

export const APIPizza = {
    getPPizza() {
        let response = axios.get(`./db.json`)
        return response
    }
}

export default APIPizza;