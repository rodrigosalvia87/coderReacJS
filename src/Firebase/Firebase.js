import { initializeApp } from "firebase/app";

import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore'
import { Await } from "react-router-dom";



const firebaseConfig = {
  apiKey: "AIzaSyALNH3KiQJ-3J9noaSospNzuELaS1IMteU",
  authDomain: "coderreactjs-33309.firebaseapp.com",
  projectId: "coderreactjs-33309",
  storageBucket: "coderreactjs-33309.appspot.com",
  messagingSenderId: "1082899210903",
  appId: "1:1082899210903:web:3945d685d6751fc6aeffd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);






const BaseDatos = getFirestore()

export const createProducts = async () => {
  const promise = await fetch("./json/productos.json")
  const productos = await promise.json()
  productos.forEach(async (prod) => {
    await addDoc(collection(BaseDatos, "productos"), {
      idCategoria: prod.idCategoria,
      nombre: prod.nombre,
      precio: prod.precio,
      stock: prod.stock,
      img: prod.img

    })
  })
}

export const getProducts = async () => {
  const prods = await getDocs(collection(BaseDatos, "productos"))
  const items = prods.docs.map(prod => {
    return { ...prod.data(), id: prod.id }
  })
  return (items)
}

export const getProduct = async (id) => {
  const prod = await getDoc(doc(BaseDatos, "productos", id))
  const item = { ...prod.data(), id: prod.id }
  return item
}

export const createOrdenCompra = async (cliente, carrito, fecha) => {
  const ordenCompra = await addDoc(collection(BaseDatos, "ordenCompra"), {
    cliente: cliente,
    items: carrito,
    fecha: fecha
  })
  console.log(ordenCompra)
}

export const getOrdenCompra = async (id) => {
  const ordenCompra = await getDoc(doc(BaseDatos, "ordenCompra", id))
  const item = { ...ordenCompra.data(), id: ordenCompra.id }
  console.log(item)
}

export const updateProduct = async (id, info) => {
  await updateDoc(doc(BaseDatos, "productos", id), info)

}

export const deleteProduct = async (id) => {
  await deleteDoc(doc(BaseDatos, "productos", id))

}