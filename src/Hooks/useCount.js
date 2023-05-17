import { useState } from "react";



const UseCount = (valInicial = 1, min, max) => {

    if (valInicial < min || valInicial > max) {
        valInicial = min

    }


    const [contador, setContador] = useState(valInicial)

    const sumar = () => contador < max && setContador(contador + 1)
    const restar = () => contador > min && setContador(contador - 1)



    return { contador, sumar, restar }
}

export default UseCount;
