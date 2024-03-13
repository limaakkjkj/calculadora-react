import { useState } from "react"
import './App.css'

const Calculadora = () => {
  const [input, setInput] = useState('')

  const handButtonClick = (value) => {
    setInput ((proxInput) => proxInput + value)
  }

  const handleCalculadora = () => {
    setInput(eval(input).toString())
  }

  const handleClear = () => {
    setInput('')
  }

  return(
    <div className="calculadora-container">
      <div>
        <input type="text" className="calculadora-input" value={input} readOnly/>

        <div className="calculadora-botoes">
          <button className="calculadora-botao" onClick={() => handButtonClick('1')}>1</button>
          <button className="calculadora-botao" onClick={() => handButtonClick('2')}>2</button>
          <button className="calculadora-botao" onClick={() => handButtonClick('3')}>3</button>
          <button className="calculadora-botao calculadora-botao-operador" onClick={() => handButtonClick('+')}>+</button>
        </div>

        <div className="calculadora-botoes">
          <button className="calculadora-botao" onClick={() => handButtonClick('4')}>4</button>
          <button className="calculadora-botao" onClick={() => handButtonClick('5')}>5</button>
          <button className="calculadora-botao" onClick={() => handButtonClick('6')}>6</button>
          <button className="calculadora-botao calculadora-botao-operador" onClick={() => handButtonClick('-')}>-</button>
        </div>

        <div className="calculadora-botoes">
          <button className="calculadora-botao" onClick={() => handButtonClick('7')}>7</button>
          <button className="calculadora-botao" onClick={() => handButtonClick('8')}>8</button>
          <button className="calculadora-botao" onClick={() => handButtonClick('9')}>9</button>
          <button className="calculadora-botao calculadora-botao-operador" onClick={() => handButtonClick('*')}>*</button>
        </div>

        <div className="calculadora-botoes">
          <button className="calculadora-botao" onClick={() => handButtonClick('0')}>0</button>
          <button className="calculadora-botao" onClick={() => handleClear('C')}>C</button>
          <button className="calculadora-botao" onClick={() => handleCalculadora('=')}>=</button>
          <button className="calculadora-botao calculadora-botao-operador" onClick={() => handButtonClick('/')}>/</button>
        </div>

      </div>
    </div>
  )
}

export default Calculadora