import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SumaModulo from './sumaModulo.jsx'
import RestaModulo from './restaModulo.jsx'
import DividirModulo from './divModulo.jsx'
import MultiplicarModulo from './multiplyModulo.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='modules'>

      <div className='calculatorModules'>
        <h1>Cocretas Inc. Calculator</h1>
        <SumaModulo />
        <RestaModulo />
        <DividirModulo />
        <MultiplicarModulo />
      </div> 

      <div className='empleadosModule'>
        <h1>Cocretas Inc. Empleados</h1>
        <App />
      </div>
    </div>
  </React.StrictMode>,
)

