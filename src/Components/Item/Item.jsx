import React from 'react';

import { Link } from 'react-router-dom';

const Item = ({item}) => {
  console.log(item)
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={item.img} className="card-img-top" alt={`Imagen de $ {item.nombre}`}/>
      <div className="card-body">
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text">Precio: $ {item.precio}</p>
        <p className="card-text">Stock: {item.stock} Unidades</p>
        <Link className='nav-link' to={`/product/${item.id}`}><button className="btn btn__gral">Ver Producto</button></Link>
        
      </div>
    </div> 
  );
}



export default Item;