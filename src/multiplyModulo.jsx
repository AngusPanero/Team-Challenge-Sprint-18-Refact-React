import React from 'react'
import { useState } from "react"
import './Calculator.css'

const MultiplicarModulo = () => {

    const [ multiplicar, setMultiplicar ] = useState(0);
    const [ multiplicarNew, setMultiplicarNew ] = useState(0);
    const [ resultado, setResultado ] = useState(0);

    const Multiplicar = (e) => {
        e.preventDefault()
        setResultado(Number(multiplicar) * Number(multiplicarNew))
    }

    return(
        <div className="modulo">
            <form onSubmit={Multiplicar}>
                <input type="number" placeholder='Introduce un Nùmero' value={multiplicar} min={0} onChange={(e) => setMultiplicar(e.target.value)}/>
                <p>x</p>
                <input type="number" placeholder='Introduce un Nùmero' value={multiplicarNew} min={0} onChange={(e) => setMultiplicarNew(e.target.value)}/>
                <button type='submit'>Multiplicar</button>
            </form>
            <p>Resultado: {resultado}</p>
        </div>
    )
}

export default MultiplicarModulo