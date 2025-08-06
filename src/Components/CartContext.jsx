import { createContext, useContext, useState } from 'react';
 const cartContext = createContext()
 export const useCart = () => useContext(cartContext)

const CartContext = ( {children}) => {
   
   const [cart,setCart] = useState([])

   const addToCart = (product) => {
     setCart((check)=>{
        const exist = check.find((item)=> item.id === product.id )
        if (exist) {
           return check.map((item) => 
          item.id === product.id
           ?{...item, quantity: item.quantity +1}
           : item
        ) 
        } else{
            return[...check,{...product, quantity: 1}]
        }
     })
   }

   const reduceFromCart = (product) => {
     setCart((check)=>{
        const exist = check.find((item)=> item.id === product.id )
        if (exist) {
           return check.map((item) => 
          item.id === product.id
           ?{...item, quantity: item.quantity -1}
           : item
        ) 
         .filter((item) => item.quantity > 0)
        } 
           
        
     })
   }
      const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
      


  return (
    <div>
       <cartContext.Provider value={{ cart,addToCart,  reduceFromCart,totalQuantity}}>
        {children}
       </cartContext.Provider>
    </div>
  )
}

export default CartContext
