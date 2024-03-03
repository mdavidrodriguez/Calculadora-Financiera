import React, { useState } from "react";
import { formatter } from "../../helpers/Formater";
import ExplicacionFormula from "./ExplicacionFormula";

const MontoConCambioTasaInteres = () => {
  const [capitalInicial, setCapitalInicial] = useState(0);
  const [tasaInicial, setTasaInicial] = useState(0);
  const [tasaNueva, setTasaNueva] = useState(0);
  const [tiempoInicialEnMeses, setTiempoInicialEnMeses] = useState(0);
  const [tiempoCambioEnMeses, setTiempoCambioEnMeses] = useState(0);
  const [resultado, setResultado] = useState("");

  const calcularMontoFinal = (e) => {
    e.preventDefault();
    const tasaMensualInicial = tasaInicial / 12 / 100;
    const tasaMensualNueva = tasaNueva / 12 / 100;

    const montoTiempoInicial =
      capitalInicial * Math.pow(1 + tasaMensualInicial, tiempoInicialEnMeses);

    const montoFinal =
      montoTiempoInicial * Math.pow(1 + tasaMensualNueva, tiempoCambioEnMeses);

    setResultado(formatter.format(parseFloat(montoFinal.toFixed(2))));
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <p>Capital inicial</p>
          <p>Tasa de interés inicial</p>
          <p>Tasa de interés modificada</p>
          <p>Período de tiempo</p>
        </ExplicacionFormula>
        <form
          className=" my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
          onSubmit={calcularMontoFinal}
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
              Tasa de interés inicial (%):
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={tasaInicial}
              onChange={(e) => setTasaInicial(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tasa de interés nueva (%):
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={tasaNueva}
              onChange={(e) => setTasaNueva(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tiempo inicial en meses:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={tiempoInicialEnMeses}
              onChange={(e) =>
                setTiempoInicialEnMeses(parseInt(e.target.value))
              }
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tiempo cambio en meses:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={tiempoCambioEnMeses}
              onChange={(e) => setTiempoCambioEnMeses(parseInt(e.target.value))}
            />
          </div>
          <input
            className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
            type="submit"
            value={"Calcular"}
          />
        </form>
      </div>
      {resultado && (
        <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <h3>El monto final es: {resultado}</h3>
        </div>
      )}
    </>
  );
};

export default MontoConCambioTasaInteres;
