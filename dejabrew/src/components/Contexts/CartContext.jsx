import { createContext, useState } from "react";
export const cartContext = createContext();

const { Provider } = cartContext;

function CartContextProvider({ children }){

    const[cartList,setCartList] = useState(JSON.parse(localStorage.getItem('cartList')) || []);

    const addToCart = (item,cantidad) => {
        
        if(!isInCart(item.id)){
            setCartList(prevCartList=>[...prevCartList,{item,cantidad}]);
        }else{
            setCartList(prevCartList=>prevCartList.map(e=>
                e.item.id === item.id ? {...e,cantidad: e.cantidad + cantidad} : e)
                );
        }
    }

    const isInCart = (id) => {
        return cartList.some(e => e.item.id === id);
    }

    const removeList = () => {
        setCartList([]);
    }
    
    const deleteItem = (itemId) => {
        setCartList(cartList.filter(e => e.item.id !== itemId));
    }

    const actualQuantity = () => {
        return cartList.reduce((acc,e) => acc + e.cantidad,0);
    }

    const total = () => {
        return cartList.reduce((acc,e) => acc + e.item.price * e.cantidad,0);
    }
    
    return(
        <Provider value={{cartList,addToCart,removeList,deleteItem,actualQuantity,total}}>
            {children}
        </ Provider>
    );
}

export default CartContextProvider;
