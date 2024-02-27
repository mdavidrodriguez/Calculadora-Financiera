import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const CapitalInicial = () => {
  const [montoCompuesto, setMontoCompuesto] = useState("");
  const [tasaInteres, setTasaInteres] = useState("");
  const [periodos, setPeriodos] = useState("");
  const [capitalInicial, setCapitalInicial] = useState("");

  const calcularCapitalInicial = (e) => {
    e.preventDefault();
    if ([montoCompuesto, tasaInteres, periodos].includes("")) {
      toast.error("Todos los Campos son Obligatorios");
      return;
    }
    const i = parseFloat(tasaInteres) / 100;
    const n = parseInt(periodos);
    const C = parseFloat(montoCompuesto) / Math.pow(1 + i, n);
    setCapitalInicial(C.toFixed(2));
  };

  return (
    <>
      <form
        onSubmit={calcularCapitalInicial}
        className="md:w-1/2 md:h-auto my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
      >
        <ToastContainer />
        <div className="my-2">
          <label className="uppercase text-gray-600 block text-xl font-bold">
            Monto compuesto final ($):
          </label>
          <input
            type="number"
            value={montoCompuesto}
            onChange={(e) => setMontoCompuesto(e.target.value)}
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>
        <div className="my-2">
          <label className="uppercase text-gray-600 block text-xl font-bold">
            Tasa de interés (%):
          </label>
          <input
            type="number"
            value={tasaInteres}
            onChange={(e) => setTasaInteres(e.target.value)}
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>
        <div className="my-2">
          <label className="uppercase text-gray-600 block text-xl font-bold">
            Periodos:
          </label>
          <input
            type="number"
            value={periodos}
            onChange={(e) => setPeriodos(e.target.value)}
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
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
      {capitalInicial && (
        <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <p>El capital inicial fue: ${capitalInicial}</p>
        </div>
      )}
    </>
  );
};

export default CapitalInicial;
