import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatter } from "../../helpers/Formater.jsx";
import ExplicacionFormula from "./ExplicacionFormula.jsx";

const InteresEstimado = () => {
  const [values, setValues] = useState({
    deposit: "",
    contribution: "",
    years: "",
    rate: "",
  });
  const [balance, setBalance] = useState("");
  const [errors, setErrors] = useState({
    deposit: "",
    contribution: "",
    years: "",
    rate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { deposit, contribution, years, rate } = values;

    if (!deposit || !contribution || !years || !rate) {
      toast.error("Por favor completa todos los campos.");
      return;
    }

    const val = compoundInterest(
      Number(deposit),
      Number(contribution),
      Number(years),
      Number(rate) / 100
    );
    setBalance(formatter.format(val));
  };

  const compoundInterest = (deposit, contribution, years, rate) => {
    let total = deposit;
    for (let i = 0; i < years; i++) {
      total = (total + contribution) * (rate + 1);
    }
    return Math.round(total);
  };

  // const formatCurrency = (value) => {
  //   return "$" + value.toFixed(2);
  // };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <p>
            *Depósito inicial: La cantidad de dinero que se deposita
            inicialmente.
          </p>
          <p>
            *Contribución anual: La cantidad de dinero que se agrega a la cuenta
            cada año.
          </p>
          <p>*Años: El número de años que se van a ahorrar.</p>
          <p>*Tasa de interés: La tasa de interés anual proporcionada.</p>
        </ExplicacionFormula>
        <form
          onSubmit={handleSubmit}
          className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
        >
          {<ToastContainer />}
          <div>
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Depósito Inicial ($)
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              name="deposit"
              value={values.deposit}
              onChange={handleChange}
              placeholder="Ingrese el monto del depósito"
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Contribución Anual
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              name="contribution"
              value={values.contribution}
              placeholder="Ingrese la contribución anual"
              onChange={handleChange}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Años
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              name="years"
              value={values.years}
              placeholder="Ingrese los años"
              onChange={handleChange}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Interes estimado
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              name="rate"
              value={values.rate}
              placeholder="Ingrese el interes estimado"
              onChange={handleChange}
            />
          </div>
          <input
            type="submit"
            className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
            value="Calcular"
          />
        </form>
      </div>
      {balance && (
        <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <p>Balance Final: {balance}</p>
        </div>
      )}
    </>
  );
};

export default InteresEstimado;
