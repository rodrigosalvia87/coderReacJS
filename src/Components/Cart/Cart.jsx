import React from 'react';
import { useCarritoContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';



const Cart = () => {

  const { carrito, clearCart } = useCarritoContext()


  return (
    <>
      {
        carrito.length === 0 ?
          <>
            <h1>Carrito Vacio</h1>
            <button className='btn btn__gral'> <Link to={"/"} className='nav-link'>Continuar Comprando</Link></button>
          </>
          :
          <div className='container cartContainer'>
            {<ItemList productos={carrito} plantilla={"ItemCart"} > </ItemList>}
           
            
            <button className="btn btn-danger" onClick={() => clearCart()}>Vaciar Carrito</button>
              <Link className='nav-link' to={"/"}> <button className='btn btn__gral'> Continuar Comprando </button></Link>
              <Link className='nav-link' to={"/checkout"}>
              <button className='btn btn__gral'>  Finalizar Compra </button> </Link>
            </div> 
          
          
          
          



      }

    </>
  );
}

export default Cart;
