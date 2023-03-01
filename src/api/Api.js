import axios from "axios";


export function productsData() {
    return axios.get("https://fakestoreapi.com/products");
}