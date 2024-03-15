import React, { useState } from "react";
import ExplicacionFormula from "../IntCompuesto/ExplicacionFormula";

const InteresSimplet = () => {
  const [capital, setCapital] = useState(0);
  const [tasa, setTasa] = useState(0);
  const [tiempo, setTiempo] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcularInteresCompuesto = (e) => {
    e.preventDefault();
    const capitalFinal = capital * Math.pow(1 + tasa / 100, tiempo);
    setResultado(capitalFinal);
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <form
          onSubmit={calcularInteresCompuesto}
          action=""
          className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
        >
          <ExplicacionFormula>
            <p>
              El capital final es igual al capital inicial multiplicado por la
              potencia de la tasa de interés.
            </p>
            <p>Para calcular el capital final, puedes utilizar la fórmula:</p>
            <p>
              <strong>
                Capital Final = Capital Inicial * (1 + Tasa de Interés) ^ Tiempo
              </strong>
            </p>
            <p>
              Donde:
              <br />
              <strong>Capital Inicial = </strong>El capital inicial a invertir
              <br />
              <strong>Tasa de Interés = </strong>La tasa de interés anual
            </p>
          </ExplicacionFormula>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Capital inicial:
            </label>
            <input
              type="number"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={capital}
              onChange={(e) => setCapital(Number(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tasa de interés anual (%):
            </label>
            <input
              type="number"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={tasa}
              onChange={(e) => setTasa(Number(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tiempo (meses):
            </label>
            <input
              type="number"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={tiempo}
              onChange={(e) => setTiempo(Number(e.target.value))}
            />
          </div>
          <input
            className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
            value={"Calcular"}
            type="submit"
          />
        </form>
      </div>
      {resultado !== 0 && (
        <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <h3>El monto final es: {resultado}</h3>
        </div>
      )}
    </>
  );
};

export default InteresSimplet;
