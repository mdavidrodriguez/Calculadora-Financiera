import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";


const Monto = () => {
  const [Capital, setCapital] = useState("");
  const [tasaInteres, setTasaInteres] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [monto, setMonto] = useState("");

  const calcularCapitalInicial = (e) => {
    e.preventDefault();
    if ([Capital, tasaInteres, tiempo].includes("")) {
      toast.error("Todos los Campos son Obligatorios");
      return;
    }
    const i = parseFloat(tasaInteres) / 100;
    const n = parseInt(tiempo);
    const C = parseFloat(Capital) * (1 * i * n);
    setMonto(C.toFixed(2));
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
            Capital (C):
          </label>
          <input
            type="number"
            value={Capital}
            onChange={(e) => setCapital(parseFloat(e.target.value))}
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
            Tiempo:
          </label>
          <input
            type="number"
            value={tiempo}
            onChange={(e) => setTiempo(e.target.value)}
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>
        <input
          type="submit"
          className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
          value="Calcular"
        />
        
        
      </form>
      {monto && (
        <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <p>El Monto fue: ${monto}</p>
        </div>
      )}
    </>
  );
};

export default Monto;


