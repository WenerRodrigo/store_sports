import { useState } from "react";
import AppContext from "./AppContext";



const Provider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cartItens, setCartItens] = useState([]);

    
    const value = {
        products,
        setProducts,
        cartItens,
        setCartItens
    }

    return (
        <AppContext.Provider value={ value }>
            {children}
        </AppContext.Provider>
    )
}

export default Provider;