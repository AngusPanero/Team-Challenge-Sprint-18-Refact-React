import React from 'react'
import { useState } from "react"
import './Calculator.css'

const SumaModulo = () => {

    const [ suma, setSuma ] = useState(0);
    const [ sumaNew, setSumaNew ] = useState(0);
    const [ resultado, setResultado ] = useState(0);

    const Suma = (e) => {
        e.preventDefault()
        setResultado(Number(suma) + Number(sumaNew))
    }

    return(
        <div className="modulo">
            <form onSubmit={Suma}>
                <input type="number" placeholder='Introduce un Nùmero' value={suma} min={0} onChange={(e) => setSuma(e.target.value)}/>
                <p>+</p>
                <input type="number" placeholder='Introduce un Nùmero' value={sumaNew} min={0} onChange={(e) => setSumaNew(e.target.value)}/>
                <button type='submit'>Sumar</button>
            </form>
            <p>Resultado: {resultado.toFixed(2)}</p>
        </div>
    )
}

export default SumaModulo