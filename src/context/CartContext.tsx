import React from "react"

export type CartContextType = {
  items: string[]
  setItems: React.Dispatch<React.SetStateAction<string[]>>
}

export const CartContext = React.createContext<CartContextType>({
  items: [],
  setItems: () => {}
})
