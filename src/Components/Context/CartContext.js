import { useState, createContext, useContext } from "react";
import React from 'react';

const CartContext = createContext()


export const useCarritoContext = () => useContext(CartContext)

export const CarritoProvider = (props) => {

  const [carrito, setCarrito] = useState([])

  const isInCart = (id) => {
    return carrito.some(prod => prod.id === id)

  }

  const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
      const indice = carrito.findIndex(prod => prod.id === item.id)
      const aux = [...carrito]
      aux[indice].cantidad = cantidad
      setCarrito(aux)
    }

    else {
      const newItem = {
        ...item,
        cantidad: cantidad
      }

      setCarrito([...carrito, newItem])
    }

  }


  const removeItem = (id) => {
    setCarrito(carrito.filter(prod => prod.id !== id))

  }

  const clearCart = () => {
    setCarrito ([])
  }

  const getItemCantidad = () => {
    return carrito.reduce((acum, item) => acum += item.cantidad, 0)
  }

const totalPrice = () => {
  return carrito.reduce ((acum, item) => acum +=(item.cantidad * item.precio, 0))
}





return (
  <CartContext.Provider value={{carrito, addItem, removeItem, clearCart, totalPrice, getItemCantidad}}>
    {props.children}

  </CartContext.Provider>

)


}











export default CartContext;
