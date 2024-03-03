import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatter } from "../../helpers/Formater.jsx";
import ExplicacionFormula from "./ExplicacionFormula.jsx";

const Capitalizacion = () => {
  const [deposito, setDeposito] = useState("");
  const [tasaInteres, setTasaInteres] = useState("");
  const [periodoInversion, setPeriodoInversion] = useState("");
  const [capitalizacion, setCapitalizacion] = useState("Default");
  const [balance, setBalance] = useState("");

  const calcularMontoCompuesto = () => {
    if (!deposito || !tasaInteres || !periodoInversion) {
      toast.error("Todos los Campos son Obligatorios");
      return;
    }

    const capitalInicial = parseFloat(deposito);
    const tasaInteresAnual = parseFloat(tasaInteres) / 100;
    const meses = parseInt(periodoInversion);
    let n = 1;

    switch (capitalizacion) {
      case "Diario":
        n = 365;
        break;
      case "Mensual":
        n = 12;
        break;
      case "Trimestral":
        n = 4;
        break;
      case "Cuatrimestral":
        n = 3;
        break;
      case "Semestral":
        n = 2;
        break;
      case "Anual":
        n = 1;
      default:
        n = 1;
    }

    const tasaInteresPeriodo = tasaInteresAnual / n;
    const montoCompuesto =
      capitalInicial * Math.pow(1 + tasaInteresPeriodo, meses * n);

    setBalance(formatter.format(montoCompuesto));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calcularMontoCompuesto();
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          Es el valor de una inversión o cantidad de dinero en algún momento
          futuro, considerando una tasa de interés compuesta.
          <p> VF=VP×(1+j)^n</p>
          <p>* VP es el valor presente o cantidad de dinero actual.</p>
          <p>
            * j es la tasa de interés (o tasa de crecimiento) por período en
            formato decimal.
          </p>
          <p>*n es el número de períodos.</p>
        </ExplicacionFormula>
        <form
          action=""
          className=" my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
          onSubmit={handleSubmit}
        >
          <ToastContainer />
          <div className="my-2">
            <label
              htmlFor="deposito"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Depósito Inicial ($)
            </label>
            <input
              id="deposito"
              type="text"
              placeholder="Depósito Inicial"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={deposito}
              onChange={(e) => setDeposito(e.target.value)}
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="tasaInteres"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Tasa de Interés Anual (%)
            </label>
            <input
              id="tasaInteres"
              type="text"
              placeholder="Tasa de Interés Anual"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={tasaInteres}
              onChange={(e) => setTasaInteres(e.target.value)}
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="periodoInversion"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Período de Inversión
            </label>
            <input
              id="periodoInversion"
              type="text"
              placeholder="Período de Inversión"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={periodoInversion}
              onChange={(e) => setPeriodoInversion(e.target.value)}
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="capitalizacion"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Intervalo de Capitalización
            </label>
            <select
              id="capitalizacion"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={capitalizacion}
              onChange={(e) => setCapitalizacion(e.target.value)}
            >
              <option value="Default">--Seleccione--</option>
              <option value="Diario">Diario</option>
              <option value="Mensual">Mensual</option>
              <option value="Trimestral">Trimestral</option>
              <option value="Cuatrimestral">Cuatrimestral</option>
              <option value="Semestral">Semestral</option>
              <option value="Anual">Anual</option>
            </select>
          </div>
          <input
            type="submit"
            className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
            value="Calcular"
          />
        </form>
      </div>
      {balance && (
        <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center ">
          <p>Monto Compuesto: {balance}</p>
        </div>
      )}
    </>
  );
};

export default Capitalizacion;
