import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";


const ValorPresente = () => {
  const [ValorFuturo, setValorFuturo] = useState("");
  const [tasaInteres, setTasaInteres] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [ValorPresente, setValorPresente] = useState("");

  const calcularValorPresente = (e) => {
    e.preventDefault();
    if ([ValorFuturo, tasaInteres, tiempo].includes("")) {
      toast.error("Todos los Campos son Obligatorios");
      return;
    }
    const i = parseFloat(tasaInteres) / 100;
    const n = parseInt(tiempo);
    const C = parseFloat(ValorFuturo) / 1 + i * n;
    setValorPresente(C.toFixed(2));
  };

  return (
    <>
      <form
        onSubmit={calcularValorPresente}
        className="md:w-1/2 md:h-auto my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
      >
        <ToastContainer />
        <div className="my-2">
          <label className="uppercase text-gray-600 block text-xl font-bold">
            Valor Futuro (VF):
          </label>
          <input
            type="number"
            value={ValorFuturo}
            onChange={(e) => setValorFuturo(e.target.value)}
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
            Tiempo (t):
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
      {ValorPresente && (
        <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <p>El Valor Presente es: ${ValorPresente}</p>
        </div>
      )}
    </>
  );
};

export default ValorPresente;