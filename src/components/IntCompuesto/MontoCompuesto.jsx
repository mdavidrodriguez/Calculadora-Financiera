import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatter } from "../../helpers/Formater.jsx";

const MontoCompuesto = () => {
  const [deposito, setDeposito] = useState("");
  const [tasaInteres, setTasaInteres] = useState("");
  const [periodoInversion, setPeriodoInversion] = useState("");
  const [balance, setBalance] = useState("");
  const [intereses, setIntereses] = useState("");

  const calcularMontoCompuesto = () => {
    if (!deposito || !tasaInteres || !periodoInversion) {
      toast.error("Por favor completa todos los campos.");
      return;
    }
    const capitalInicial = parseFloat(deposito);
    const tasaInteresMensual = parseFloat(tasaInteres) / 100;
    const meses = parseInt(periodoInversion);
    const montoCompuesto =
      capitalInicial * Math.pow(1 + tasaInteresMensual, meses);
    const intereses = parseFloat(montoCompuesto) - capitalInicial;

    setBalance(formatter.format(montoCompuesto));
    setIntereses(formatter.format(intereses));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calcularMontoCompuesto();
  };

  return (
    <>
      <form
        action=""
        className="md:w-1/2 md:h-auto my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
        onSubmit={handleSubmit}
      >
        {<ToastContainer />}
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
            Tasa de Interés Mensual (%)
          </label>
          <input
            id="tasaInteres"
            type="text"
            placeholder="Tasa de Interés Mensual"
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
            Período de Inversión (meses)
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
        <input
          type="submit"
          className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
          value="Calcular"
        />
      </form>
      {balance && (
        <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <p>Monto Compuesto: {balance}</p>
          <p>Intereses: {intereses}</p>
        </div>
      )}
    </>
  );
};

export default MontoCompuesto;
