import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ExplicacionFormula from "./ExplicacionFormula";

const TasaInteres = () => {
  const [capital, setCapital] = useState("");
  const [montoCompuesto, setMontoCompuesto] = useState("");
  const [periodos, setPeriodos] = useState("");
  const [tasaInteres, setTasaInteres] = useState("");

  const calcularTasaInteres = (e) => {
    e.preventDefault();
    if ([capital, montoCompuesto, periodos].includes("")) {
      toast.error("Todos los campos son Obligatorios");
      return;
    }
    const i = Math.pow(montoCompuesto / capital, 1 / periodos) - 1;
    setTasaInteres(i.toFixed(3));
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          Se necesita conocer el capital inicial, el monto compuesto final y el
          número de períodos.
          <p>* P es el capital inicial.</p>
          <p>*VF es el monto compuesto final.</p>
          <p>*n es el número de períodos.</p>
        </ExplicacionFormula>
        <form
          onSubmit={calcularTasaInteres}
          className=" my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
        >
          <ToastContainer />
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Capital inicial:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              placeholder="Capital Inicial"
              value={capital}
              onChange={(e) => setCapital(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Monto compuesto final:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              placeholder="Monto Compuesto Final"
              value={montoCompuesto}
              onChange={(e) => setMontoCompuesto(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Periodos:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={periodos}
              placeholder="Nro periodos"
              onChange={(e) => setPeriodos(parseInt(e.target.value))}
            />
          </div>
          <button
            type="submit"
            className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
            value="Calcular"
          >
            Calcular
          </button>
        </form>
      </div>
      {tasaInteres && (
        <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <p>La tasa de interés es: {tasaInteres}%</p>
          <p>La tasa de interés es: {(tasaInteres * 100).toFixed(2)}%</p>
        </div>
      )}
    </>
  );
};

export default TasaInteres;
