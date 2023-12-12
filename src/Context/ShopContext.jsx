import React,{createContext, useEffect, useState}from "react";
import all_product from '../Components/Assets/all_product'
import { json } from "react-router-dom";



export const CartFromLocalStorage = JSON.parse(localStorage.getItem('cart')); 

const getDefaultCart=()=>{
    let cart={};
        for (let index=0; index<all_product.length+1;index++){
            cart[index]=0;
        } 
        return cart  
    }

export const ShopContext = createContext(null);


const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(() => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
      return { ...getDefaultCart(), ...storedCart };
    });
     
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItem));
    }, [cartItem]);
    

    const addToCart = (itemID) => {
        setCartItem((prev) => {
          const updatedCart = { ...prev, [itemID]: prev[itemID] + 1 };
          console.log(updatedCart);
          return updatedCart;
        });
      };
      
      const removeFromCart = (itemID) => {
        setCartItem((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
      };

      const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItem[item];
            }
        }
        return totalAmount || CartFromLocalStorage;
    }
    
    const getTotalCartItems=()=>{
        let totalItem= 0;
        for(const item in cartItem){
            if (cartItem[item] > 0)
            {
                totalItem+= cartItem[item];
            }
        }
        return totalItem
    }

    const contextValue={all_product,cartItem,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems}
    return  (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;