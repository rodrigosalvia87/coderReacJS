import React from 'react';
import cart from './assets/icono_carrito.svg'
import { useCarritoContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';





const CartWidget = () => {

  const { getItemCantidad } = useCarritoContext()

  return (
    <div>

  <Link to={"/cart"} className='nav-link'>
  
  {getItemCantidad() > 0 && <span className='numCarrito'>{getItemCantidad()} </span>}
  
  
  </Link>

  <button className='btn btn-cart'> <img src={cart} alt="cart-widget" />


      </button>


    </div>
  );
}

export default CartWidget;

