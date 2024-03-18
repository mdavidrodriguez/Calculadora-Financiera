import React, { useState } from "react";
import ExplicacionFormula from "../IntCompuesto/ExplicacionFormula";

function TasaInteresCompuesto() {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [capitalization, setCapitalization] = useState("Anual");
  const [result, setResult] = useState(0);

  const calculateInterest = (e) => {
    e.preventDefault();

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
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <p>
            La tasa de interés compuesto es una técnica de cálculo que permite
            calcular el valor futuro de una cantidad de dinero utilizando una
            tasa de interés constante.
          </p>
          <p>La fórmula para calcular la tasa de interés compuesto es:</p>
          <p>
            <code>{`C = P(1 + r/n)^nt`}</code>
          </p>
        </ExplicacionFormula>
        <form
          className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
          onSubmit={calculateInterest}
        >
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Capital Principal:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tasa de Interés (%):
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tiempo (años):
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Capitalización:
            </label>
            <select
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
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
          <input
            className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
            type="submit"
            value={"Calcular"}
          />
        </form>
      </div>
      {result !== 0 && (
        <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <h2>Resultado:</h2>
          <p>{result}</p>
        </div>
      )}
    </>
  );
}

export default TasaInteresCompuesto;
