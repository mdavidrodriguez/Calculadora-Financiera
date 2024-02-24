import React, { useState } from "react";

const TasaInteres = () => {
  const [capital, setCapital] = useState(200000);
  const [montoCompuesto, setMontoCompuesto] = useState(237537);
  const [periodos, setPeriodos] = useState(5);
  const [tasaInteres, setTasaInteres] = useState(0);

  const calcularTasaInteres = (e) => {
    e.preventDefault();
    const i = Math.pow(montoCompuesto / capital, 1 / periodos) - 1;
    setTasaInteres(i.toFixed(3));
  };

  return (
    <div className="contenedor md:flex-row flex-col flex bg-gray-200 min-h-screen">
      <form
        onSubmit={calcularTasaInteres}
        className="md:w-1/2 md:h-auto my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
      >
        <div className="my-2">
          <label className="uppercase text-gray-600 block text-xl font-bold">
            Capital inicial:
          </label>
          <input
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            type="number"
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
        <p>La tasa de interés es: {tasaInteres}%</p>
      </form>
    </div>
  );
};

export default TasaInteres;
