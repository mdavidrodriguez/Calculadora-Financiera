import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Capitalizacion from "./IntCompuesto/Capitalizacion";
import NumeroPeriodos from "./IntCompuesto/NumeroPeriodos";
import TasaInteres from "./IntCompuesto/TasaInteres";
import CapitalInicial from "./IntCompuesto/CapitalInicial";
import { useEffect } from "react";
import MontoCompuesto from "./IntCompuesto/MontoCompuesto";

const InteresCompuesto = () => {
  const [seleccion, setSeleccion] = useState("monto");
  useEffect(() => {}, [seleccion]);
  return (
    <>
      <div className="bg-gray-200 p-2 text-center lg:text-start sm:text-center">
        <select
          name="seleccion"
          id="selecccion"
          className="bg-orange-500  text-white border-sky-950 border-2 font-bold rounded "
          onChange={(e) => setSeleccion(e.target.value)}
        >
          <option className="bg-white text-black" value="monto">
            Monto Compuesto
          </option>
          <option className="bg-white text-black" value="capitalInicial">
            Capital Inicial
          </option>
          <option className="bg-white text-black" value="capitalizacion">
            Capitalización
          </option>
          <option className="bg-white text-black" value="nroperiodos">
            Numero de Periodos
          </option>
          <option className="bg-white text-black" value="tasainteres">
            Tasa de Interes
          </option>
        </select>
      </div>

      <div className="contenedor md:flex-row flex-col flex bg-gray-200 min-h-screen ">
        {/* <MontoCompuesto /> */}
        {seleccion === "nroperiodos" && <NumeroPeriodos />}
        {seleccion === "monto" && <MontoCompuesto />}
        {seleccion === "capitalInicial" && <CapitalInicial />}
        {seleccion === "capitalizacion" && <Capitalizacion />}
        {seleccion === "tasainteres" && <TasaInteres />}
      </div>
    </>
  );
};

export default InteresCompuesto;
