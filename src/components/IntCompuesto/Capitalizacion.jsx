import React, { useState } from "react";
import { formatter } from "../../helpers/Formater";

const CompoundInterestCalculator = () => {
  const [capital, setCapital] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [compoundingPeriod, setCompoundingPeriod] = useState("trimestral");
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(0);

  const calculateCompoundInterest = (e) => {
    e.preventDefault();
    const periodsPerYear = {
      diario: 365,
      mensual: 12,
      trimestral: 4,
      cuatrimestral: 3,
      semestral: 2,
      anual: 1,
    };

    const numberOfPeriods = periodsPerYear[compoundingPeriod];
    const accumulatedAmount =
      capital *
      Math.pow(
        1 + interestRate / 100 / numberOfPeriods,
        numberOfPeriods * (time / 12)
      );
    setResult(formatter.format(accumulatedAmount));
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <form
          onSubmit={calculateCompoundInterest}
          className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
        >
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Capital inicial:
            </label>
            <input
              type="number"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={capital}
              onChange={(e) => setCapital(e.target.value)}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tasa de interés anual (%):
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Capitalización:
            </label>
            <select
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={compoundingPeriod}
              onChange={(e) => setCompoundingPeriod(e.target.value)}
            >
              <option value="diario">Diario</option>
              <option value="mensual">Mensual</option>
              <option value="trimestral">Trimestral</option>
              <option value="cuatrimestral">Cuatrimestral</option>
              <option value="semestral">Semestral</option>
              <option value="anual">Anual</option>
            </select>
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tiempo (meses):
            </label>
            <input
              type="number"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <input
            className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
            value={"Calcular"}
            type="submit"
          />
        </form>
      </div>
      {result !== 0 && (
        <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <h3>El monto final es: {result}</h3>
        </div>
      )}
    </>
  );
};

export default CompoundInterestCalculator;
