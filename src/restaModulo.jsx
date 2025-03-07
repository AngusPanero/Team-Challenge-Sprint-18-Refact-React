import React from 'react'
import { useState } from "react"
import './Calculator.css'

const RestaModulo = () => {

    const [ resta, setResta ] = useState(0);
    const [ restaNew, setRestaNew ] = useState(0);
    const [ resultado, setResultado ] = useState(0);

    const Resta = (e) => {
        e.preventDefault()
        setResultado(Number(resta) - Number(restaNew))
    }

    return(
        <div className="modulo">
            <form onSubmit={Resta}>
                <input type="number" placeholder='Introduce un Nùmero' value={resta} min={0} onChange={(e) => setResta(e.target.value)}/>
                <p>-</p>
                <input type="number" placeholder='Introduce un Nùmero' value={restaNew} min={0} onChange={(e) => setRestaNew(e.target.value)}/>
                <button type='submit'>Restar</button>
            </form>
            <p>Resultado: {resultado}</p>
        </div>
    )
}

export default RestaModulo