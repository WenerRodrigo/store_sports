import { useState } from "react";
import AppContext from "./AppContext";



const Provider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cartItens, setCartItens] = useState([]);
    const [ isCartVisible, setIsCartVisible ] = useState(false);

    
    const value = {
        products,
        setProducts,
        cartItens,
        setCartItens,
        isCartVisible, 
        setIsCartVisible
    }

    return (
        <AppContext.Provider value={ value }>
            {children}
        </AppContext.Provider>
    )
}

export default Provider;