import React, { useState } from "react";

function InteresSimpleCalculator() {
  const [capitalInicial, setCapitalInicial] = useState(0);
  const [tasaInteresAnual, setTasaInteresAnual] = useState(0);
  const [tiempo, setTiempo] = useState(0);
  const [frecuenciaTiempo, setFrecuenciaTiempo] = useState("anios");
  const [interesSimple, setInteresSimple] = useState(0);

  const calcularInteresSimple = () => {
    let tiempoEnAnios = tiempo;
    if (frecuenciaTiempo === "meses") {
      tiempoEnAnios = tiempo / 12;
    } else if (frecuenciaTiempo === "dias") {
      tiempoEnAnios = tiempo / 365;
    }

    const r = tasaInteresAnual / 100;
    const I = capitalInicial * r * tiempoEnAnios;
    setInteresSimple(I);
  };

  return (
    <div>
      <h2>Calculadora de Interés Simple</h2>
      <div>
        <label>Capital Inicial ($):</label>
        <input
          type="number"
          value={capitalInicial}
          onChange={(e) => setCapitalInicial(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Tasa de Interés Anual (%):</label>
        <input
          type="number"
          value={tasaInteresAnual}
          onChange={(e) => setTasaInteresAnual(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Tiempo:</label>
        <input
          type="number"
          value={tiempo}
          onChange={(e) => setTiempo(parseFloat(e.target.value))}
        />
        <select
          value={frecuenciaTiempo}
          onChange={(e) => setFrecuenciaTiempo(e.target.value)}
        >
          <option value="anios">Años</option>
          <option value="meses">Meses</option>
          <option value="dias">Días</option>
        </select>
      </div>
      <button onClick={calcularInteresSimple}>Calcular Interés Simple</button>
      <div>
        <h3>Interés Simple: ${interesSimple.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default InteresSimpleCalculator;
