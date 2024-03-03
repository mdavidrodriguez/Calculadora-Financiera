import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ExplicacionFormula from "./ExplicacionFormula";

const NumeroPeriodos = () => {
  const [capital, setCapital] = useState("");
  const [montoCompuesto, setMontoCompuesto] = useState("");
  const [tasaInteres, setTasaInteres] = useState("");
  const [periodos, setPeriodos] = useState("");

  const calculatePeriods = (e) => {
    e.preventDefault();
    if ([capital, montoCompuesto, tasaInteres].includes("")) {
      toast.error("Todos los campos son Obligatorios");
      return;
    }
    const i = tasaInteres / 100;
    const n = (Math.log(montoCompuesto) - Math.log(capital)) / Math.log(1 + i);
    setPeriodos(n);
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto my-10">
        <ExplicacionFormula>
          <p>VF es el monto compuesto final.</p>
          <p>P es el capital inicial.</p>
          <p>r es la tasa de interés por período.</p>
        </ExplicacionFormula>
        <form
          onSubmit={calculatePeriods}
          action=""
          className=" bg-white shadow rounded-lg p-10 mx-5 text-start"
        >
          <ToastContainer />
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Capital inicial:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={capital}
              onChange={(e) => parseFloat(setCapital(e.target.value))}
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
              onChange={(e) => parseFloat(setMontoCompuesto(e.target.value))}
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
              onChange={(e) => parseInt(setTasaInteres(e.target.value))}
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

      {periodos && (
        <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <p>
            El número de periodos es: {periodos} ={" "}
            <span>{Math.round(periodos)}</span>{" "}
          </p>
        </div>
      )}
    </>
  );
};

export default NumeroPeriodos;
