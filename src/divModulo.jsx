
import React from 'react'
import { useState } from "react"
import './Calculator.css'

const DividirModulo = () => {

    const [ dividir, setDividir ] = useState(0);
    const [ dividirNew, setDividirNew ] = useState(0);
    const [ resultado, setResultado ] = useState(0);

    const Dividir = (e) => {
        e.preventDefault()
        setResultado(Number(dividir) / Number(dividirNew))
        if(Number(dividirNew) === 0){
            alert("No se Puede Dividir Sobre Cero")
        }
    }

    return(
        <div className="modulo">
            <form onSubmit={Dividir}>
                <input type="number" placeholder='Introduce un Nùmero' value={dividir} min={0} onChange={(e) => setDividir(e.target.value)}/>
                <p>/</p>
                <input type="number" placeholder='Introduce un Nùmero' value={dividirNew} min={0} onChange={(e) => setDividirNew(e.target.value)}/>
                <button type='submit'>Dividir</button>
            </form>
            <p>Resultado: {resultado}</p>
        </div>
    )
}

export default DividirModulo