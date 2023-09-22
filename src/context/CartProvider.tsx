import React, { useState, useEffect } from 'react'
import { CartContext, CartContextType } from './CartContext'

type CartProviderProps = {
  children: React.ReactNode
}

function CartProvider({ children }: CartProviderProps){
  const [items, setItems] = useState<string[]>([])

  useEffect(() => {
    fetch('http://localhost:3000')
      .then((response) => response.json())
      .then((data) => {
        setItems(data.items)
      })
  }, [])

  const cartContextValue: CartContextType = {
    items,
    setItems,
  }

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
