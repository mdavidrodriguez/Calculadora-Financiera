import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatter } from "../../helpers/Formater";

const ValorFinal = () => {
  const [pago, setPago] = useState(0);
  const [tasaInteres, setTasaInteres] = useState(0);
  const [periodos, setPeriodos] = useState(0);
  const [valorFinal, setValorFinal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const i = tasaInteres / 100;
    const VF = pago * ((Math.pow(1 + i, periodos) - 1) / i);
    setValorFinal(formatter.format(VF.toFixed(2)));
  };

  return (
    <>
      <form
        action=""
        className="md:w-1/2 md:h-auto my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
        onSubmit={handleSubmit}
      >
        <ToastContainer />
        <div className="my-2">
          <label
            htmlFor="deposito"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Anualidad (A)
          </label>
          <input
            id="deposito"
            type="text"
            placeholder="Depósito Inicial"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={pago}
            onChange={(e) => setPago(parseFloat(e.target.value))}
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="tasaInteres"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Tasa de Anualidad (i)
          </label>
          <input
            id="tasaInteres"
            type="text"
            placeholder="Tasa de Interés Anual"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={tasaInteres}
            onChange={(e) => setTasaInteres(parseFloat(e.target.value))}
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="periodoInversion"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Nro Periodos Capitalización (n)
          </label>
          <input
            id="periodoInversion"
            type="text"
            placeholder="Período de Inversión"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={periodos}
            onChange={(e) => setPeriodos(parseInt(e.target.value))}
          />
        </div>
        <input
          type="submit"
          className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
          value="Calcular"
        />
      </form>
      {valorFinal !== 0 && (
        <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center ">
          <p>Valor Final: {valorFinal}</p>
        </div>
      )}
    </>
  );
};

export default ValorFinal;
