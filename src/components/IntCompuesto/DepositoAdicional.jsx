import React, { useState } from "react";
import ExplicacionFormula from "./ExplicacionFormula";

const DepositoAdicional = () => {
  const [capitalInicial, setCapitalInicial] = useState(0);
  const [tasaInteres, setTasaInteres] = useState(0);
  const [tiempoTranscurrido, setTiempoTranscurrido] = useState(0);
  const [depositoAdicional, setDepositoAdicional] = useState(0);
  const [retiroRealizado, setRetiroRealizado] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcularImporteBancario = (e) => {
    e.preventDefault();

    const tasaInteresMensual = tasaInteres / 12 / 100;

    const tiempoAnio = 12 - tiempoTranscurrido;
    let importe = capitalInicial;

    importe += depositoAdicional;

    for (let i = 0; i < tiempoTranscurrido; i++) {
      importe *= 1 + tasaInteresMensual;
    }

    importe -= retiroRealizado;

    for (let i = 0; i < tiempoAnio; i++) {
      importe *= 1 + tasaInteresMensual;
    }

    setResultado(parseFloat(importe.toFixed(2)));
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <p>
            * Depósito inicial: La cantidad de dinero que se deposita
            inicialmente.
          </p>
          *Tasa de interés: La tasa de interés anual proporcionada.
          <p>
            *Período de tiempo transcurrido: El número de meses que han pasado
            desde el depósito inicial hasta el momento del retiro parcial.
          </p>
          <p>
            *Depósito adicional: La cantidad de dinero que se deposita o se
            retira adicionalmente después del período de tiempo inicial.
          </p>
        </ExplicacionFormula>
        <form
          className=" my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
          onSubmit={calcularImporteBancario}
        >
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Capital inicial:
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
              Tasa de interés (%):
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={tasaInteres}
              onChange={(e) => setTasaInteres(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tiempo Transcurrido
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={tiempoTranscurrido}
              onChange={(e) => setTiempoTranscurrido(parseInt(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Depósito adicional:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={depositoAdicional}
              onChange={(e) => setDepositoAdicional(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Retiro realizado:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={retiroRealizado}
              onChange={(e) => setRetiroRealizado(parseFloat(e.target.value))}
            />
          </div>
          <input
            type="submit"
            className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
            value={"Calcular"}
          />
        </form>
      </div>
      {resultado !== 0 && (
        <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <h3>El importe final es: {resultado}</h3>
        </div>
      )}
    </>
  );
};

export default DepositoAdicional;
