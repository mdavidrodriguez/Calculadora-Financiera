import React, { useState } from "react";

const CompoundInterestCalculator = () => {
  const [capital, setCapital] = useState(3000000);
  const [interestRate, setInterestRate] = useState(12);
  const [compoundingPeriod, setCompoundingPeriod] = useState("trimestral");
  const [time, setTime] = useState(18);
  const [result, setResult] = useState(0);

  const calculateCompoundInterest = () => {
    const periodsPerYear = {
      diario: 365,
      mensual: 12,
      trimestral: 4,
      cuatrimestral: 3,
      semestral: 2,
      anual: 1,
    };

    const numberOfPeriods = periodsPerYear[compoundingPeriod];
    const accumulatedAmount =
      capital *
      Math.pow(
        1 + interestRate / 100 / numberOfPeriods,
        numberOfPeriods * (time / 12)
      );
    setResult(accumulatedAmount);
  };

  return (
    <div>
      <h2>Calculadora de Interés Compuesto</h2>
      <label>
        Capital inicial:
        <input
          type="number"
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
        />
      </label>
      <label>
        Tasa de interés anual (%):
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </label>
      <label>
        Capitalización:
        <select
          value={compoundingPeriod}
          onChange={(e) => setCompoundingPeriod(e.target.value)}
        >
          <option value="diario">Diario</option>
          <option value="mensual">Mensual</option>
          <option value="trimestral">Trimestral</option>
          <option value="cuatrimestral">Cuatrimestral</option>
          <option value="semestral">Semestral</option>
          <option value="anual">Anual</option>
        </select>
      </label>
      <label>
        Tiempo (meses):
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <button onClick={calculateCompoundInterest}>Calcular</button>
      <p>Monto acumulado: ${result}</p>
    </div>
  );
};

export default CompoundInterestCalculator;
