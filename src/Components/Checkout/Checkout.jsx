import React, { useRef } from 'react';
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct } from '../../Firebase/Firebase';
import { useCarritoContext } from '../Context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"

const Checkout = () => {

  const datosForm = useRef()
  const { carrito } = useCarritoContext()

  let navigate = useNavigate()
  const consultarForm = (e) => {


    e.preventDefault()
    const infFormulario = new FormData(datosForm.current)
    const cliente = Object.fromEntries(infFormulario)
    console.log(cliente)

    const aux = [...carrito]

    aux.forEach(prodCarrito => {
      getProduct(prodCarrito.id).then(prodBaseDatos => {
        if (prodBaseDatos.stock >= prodCarrito.cantidad) {
          prodBaseDatos.stock -= prodCarrito.cantidad
          updateProduct(prodCarrito.id, prodBaseDatos)
        } else {
          console.log("NO hay stock")
        }
      })
    })


    createOrdenCompra(cliente, aux, new Date().toLocaleString("es-AR", { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone })).then(ordenCompra => {

      toast.success('🛒 Gracias por tu Compra!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });


      e.target.reset()
      navigate("/")

    })


  }


  return (
    <div>
      <form onSubmit={consultarForm} ref={datosForm}>
        <div className="mb-3">
          <label htmlFor="nombre y apellido" className="form-label">NOMBRE Y APELLIDO</label>
          <input type="text" className="form-control form-control-lg" name="Nombre y Apellido" required
            placeholder="Ingresa tu Nombre y Apellido" />
          <label htmlFor="dni" className="form-label">DNI</label>
          <input type="number" className="form-control form-control-lg" name="<DNI>" required
            placeholder="Ingresa tu DNI" />
          <label htmlFor="mail" className="form-label">MAIL</label>
          <input type="email" className="form-control form-control-lg" name="Mail" required
            placeholder="Ingresa tu Mail" />
          <label htmlFor="repetir mail" className="form-label">REPETIR MAIL</label>
          <input type="email" className="form-control form-control-lg" name="RMail" required
            placeholder="Ingresa nuevamente tu Mail" />
          <label htmlFor="telefono" className="form-label">TELEFONO</label>
          <input type="number" className="form-control form-control-lg" name="Telefono" required
            placeholder="Ingresa tu número de Teléfono" />
          <label htmlFor="direccion" className="form-label">DIRECCION</label>
          <input type="text" className="form-control form-control-lg" name="Direccion" required
            placeholder="Ingresa tu Dirección" />


        </div>

        <button type="submit" className="btn btn__gral"> Finalizar Compra </button>
      </form>
    </div>
  );
}

export default Checkout;
