import React, { useState } from "react";

function TasaInteresCompuesto() {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [capitalization, setCapitalization] = useState("Anual");
  const [result, setResult] = useState(0);

  const calculateInterest = () => {
    let n;
    switch (capitalization) {
      case "Diario":
        n = 365;
        break;
      case "Mensual":
        n = 12;
        break;
      case "Trimestral":
        n = 4;
        break;
      case "Cuatrimestral":
        n = 3;
        break;
      case "Semestral":
        n = 2;
        break;
      case "Anual":
      default:
        n = 1;
        break;
    }
    const amount = principal * Math.pow(1 + rate / (100 * n), n * time);
    setResult(amount.toFixed(2));
  };

  return (
    <div>
      <div>
        <label>Capital Principal:</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div>
        <label>Tasa de Interés (%):</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <div>
        <label>Tiempo (años):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div>
        <label>Capitalización:</label>
        <select
          value={capitalization}
          onChange={(e) => setCapitalization(e.target.value)}
        >
          <option value="Diario">Diario</option>
          <option value="Mensual">Mensual</option>
          <option value="Trimestral">Trimestral</option>
          <option value="Cuatrimestral">Cuatrimestral</option>
          <option value="Semestral">Semestral</option>
          <option value="Anual">Anual</option>
        </select>
      </div>
      <button onClick={calculateInterest}>Calcular</button>
      <div>
        <h2>Resultado:</h2>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default TasaInteresCompuesto;
