import React, { useState } from "react";

function InteresSimpleCalculator() {
  const [capitalInicial, setCapitalInicial] = useState(0);
  const [tasaInteresAnual, setTasaInteresAnual] = useState(0);
  const [tiempo, setTiempo] = useState(0);
  const [frecuenciaTiempo, setFrecuenciaTiempo] = useState("anios");
  const [interesSimple, setInteresSimple] = useState(0);

  const calcularInteresSimple = (e) => {
    e.preventDefault();
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
    <>
      <div className="md:w-1/2 md:h-auto">
        <form
          action=""
          className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
          onSubmit={calcularInteresSimple}
        >
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Capital Inicial ($):
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={capitalInicial}
              onChange={(e) => setCapitalInicial(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tasa de Interés Anual (%):
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={tasaInteresAnual}
              onChange={(e) => setTasaInteresAnual(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tiempo:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={tiempo}
              onChange={(e) => setTiempo(parseFloat(e.target.value))}
            />
            <select
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={frecuenciaTiempo}
              onChange={(e) => setFrecuenciaTiempo(e.target.value)}
            >
              <option value="anios">Años</option>
              <option value="meses">Meses</option>
              <option value="dias">Días</option>
            </select>
          </div>
          <input
            type="submit"
            className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
            value={"Calcular"}
          />
        </form>
      </div>
      {interesSimple !== 0 && (
        <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <h3>Interés Simple: ${interesSimple.toFixed(2)}</h3>
        </div>
      )}
    </>
  );
}

export default InteresSimpleCalculator;
