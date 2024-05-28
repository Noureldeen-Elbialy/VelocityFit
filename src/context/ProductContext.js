import { createContext, useState } from "react";
import { productsList } from "../productsData";

export let productContext = createContext();

export default function ProductContextProvider(props) {
    const [products, setProducts] = useState([...productsList]);
    console.log(products);
    const filterData = (cat) => {
        setProducts(products.filter((product) => product.category === cat));
    }
    return <productContext.Provider value={{ products, setProducts, filterData }}>
        {props.children}
    </productContext.Provider>
}
