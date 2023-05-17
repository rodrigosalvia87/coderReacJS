import UseCount from "../../Hooks/useCount"

const ItemCount = ({ valInicial, min, max, onAdd }) => {

  const { contador, restar, sumar } = UseCount(valInicial, min, max, onAdd)




  return (
    <div>

      <button className="btn btn__gral" onClick={() => restar()}>-</button>
      <button className="btn btn__gral" onClick={() => sumar()}>+</button>
      {contador}

      <button className="btn btn__gral" onClick={()=> onAdd(contador)}> Agregar al Carrito</button>
    </div>
  );
}

export default ItemCount;