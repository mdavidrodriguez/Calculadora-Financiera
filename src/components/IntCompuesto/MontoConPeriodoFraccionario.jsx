import React, { useState } from "react";
import { formatter } from "../../helpers/Formater";
import { ToastContainer, toast } from "react-toastify";

const MontoConPeriodoFraccionario = () => {
  const [capital, setCapital] = useState("");
  const [meses, setMeses] = useState("");
  const [dias, setDias] = useState("");
  const [resultado, setResultado] = useState("");
  const tasaAnual = 0.24;
  const tasaMensual = tasaAnual / 12;

  const tiempoTotalEnMeses = meses + dias / 30;

  const calcularMontoFinal = (e) => {
    e.preventDefault();
    if ([capital, meses, dias].includes("")) {
      toast.error("Todos los campos son obligatorios");
      return;
    }
    const montoFinal = capital * Math.pow(1 + tasaMensual, tiempoTotalEnMeses);
    parseFloat(setResultado(formatter.format(montoFinal.toFixed(2))));
    return montoFinal.toFixed(2);
  };

  return (
    <>
      <form
        onSubmit={calcularMontoFinal}
        action=""
        className="md:w-1/2 md:h-auto my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
      >
        <ToastContainer />
        <div className="my-2">
          <label className="uppercase text-gray-600 block text-xl font-bold">
            Capital inicial:
          </label>
          <input
            type="number"
            value={capital}
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            onChange={(e) => setCapital(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label className="uppercase text-gray-600 block text-xl font-bold">
            Meses:
          </label>
          <input
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            type="number"
            value={meses}
            onChange={(e) => setMeses(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label className="uppercase text-gray-600 block text-xl font-bold">
            Días:
          </label>
          <input
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            type="number"
            value={dias}
            onChange={(e) => setDias(parseInt(e.target.value))}
          />
        </div>
        <button
          className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
          type="submit"
        >
          Calcular
        </button>
      </form>
      {resultado && (
        <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <h3>El monto final es: {resultado}</h3>
        </div>
      )}
    </>
  );
};

export default MontoConPeriodoFraccionario;
