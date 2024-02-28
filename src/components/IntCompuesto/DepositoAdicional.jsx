import React, { useState } from "react";

const DepositoAdicional = () => {
  const [capitalInicial, setCapitalInicial] = useState(0);
  const [tasaInteres, setTasaInteres] = useState(0);
  const [tiempoTranscurrido, setTiempoTranscurrido] = useState(0);
  const [depositoAdicional, setDepositoAdicional] = useState(0);
  const [retiroRealizado, setRetiroRealizado] = useState(0);
  const [capitalizacion, setCapitalizacion] = useState("Mensual");
  const [resultado, setResultado] = useState(0);

  const calcularImporteBancario = (e) => {
    e.preventDefault();

    // Convertir la tasa de interés anual a mensual
    const tasaInteresMensual = tasaInteres / 12 / 100;

    // Calcular el importe después de los 4 meses con el depósito inicial y los depósitos adicionales
    let importe = capitalInicial;
    for (let i = 0; i < 4; i++) {
      importe *= 1 + tasaInteresMensual;
      importe += depositoAdicional;
    }

    // Restar los retiros realizados después de los 4 meses
    importe -= retiroRealizado;

    // Calcular el importe final después de un año (12 meses)
    for (let i = 0; i < 8; i++) {
      importe *= 1 + tasaInteresMensual;
    }

    // Actualizar el estado con el resultado
    setResultado(parseFloat(importe.toFixed(2)));
  };

  return (
    <>
      <form
        className="md:w-1/2 md:h-auto my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
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
        <div className="my-2">
          <label className="uppercase text-gray-600 block text-xl font-bold">
            Capitalización:
          </label>
          <select
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={capitalizacion}
            onChange={(e) => setCapitalizacion(e.target.value)}
          >
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
          value={"Calcular"}
        />
      </form>
      {resultado !== 0 && (
        <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <h3>El importe final es: {resultado}</h3>
        </div>
      )}
    </>
  );
};

export default DepositoAdicional;
