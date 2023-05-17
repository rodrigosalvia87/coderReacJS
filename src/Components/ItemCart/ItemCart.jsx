import { useCarritoContext } from "../Context/CartContext";

import React from 'react';

const ItemCart = ({item}) => {
   
   const {removeItem} = useCarritoContext()
   
    return (
        <div className="card mb-3">
            <div className="row g-2">
                <img src={item.img} className="img-fluid rounded-start" alt={`Imagen de $ {item.nombre}`}/>
            </div>

            <div className="card-body">
                <h5 className="card-title"> {item.nombre} </h5>
                <p className="card-text"> Cantidad: { item.cantidad} </p>
                <p className="card-text"> Precio Unitario: $ {item.precio} </p>
                <p className="card-text"> Sub-Total: $ {item.precio * item.cantidad}  </p>
                <button className="btn btn-danger" onClick={()=> removeItem(item.id)}> Eliminar Producto </button>
            </div>

        </div>
    );
}

export default ItemCart;
