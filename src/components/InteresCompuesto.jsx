import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Capitalizacion from "./IntCompuesto/Capitalizacion";
import NumeroPeriodos from "./IntCompuesto/NumeroPeriodos";
import TasaInteres from "./IntCompuesto/TasaInteres";
import CapitalInicial from "./IntCompuesto/CapitalInicial";
import { useEffect } from "react";
import MontoCompuesto from "./IntCompuesto/MontoCompuesto";
import MontoConPeriodoFraccionario from "./IntCompuesto/MontoConPeriodoFraccionario";
import MontoConCambioTasaInteres from "./IntCompuesto/MontoConCambioTasaInteres";
import DepositoAdicional from "./IntCompuesto/DepositoAdicional";
import InteresEstimado from "./IntCompuesto/InteresEstimado";

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
          <option className="bg-white text-black" value="valorpresente">
            Valor Presente
          </option>
          <option className="bg-white text-black" value="capitalizacion">
            Valor Final (Monto Compuesto)
          </option>
          <option className="bg-white text-black" value="nroperiodos">
            Numero de Periodos
          </option>
          <option className="bg-white text-black" value="tasainteres">
            Tasa de Interes
          </option>
          <option className="bg-white text-black" value="depositoadicional">
            Deposito Adicional
          </option>
          <option
            className="bg-white text-black"
            value="montoperiodofraccionario"
          >
            Monto Periodo Fraccionario
          </option>
          <option
            className="bg-white text-black"
            value="montocambiotasainteres"
          >
            Monto Cambio con tasa de Interes
          </option>
          <option className="bg-white text-black" value="montoestimado">
            Interes Compuesto con Valor Estimado
          </option>
        </select>
      </div>

      <div className="contenedor md:flex-row flex-col flex bg-gray-200 min-h-screen ">
        {/* <DepositoAdicional /> */}
        {seleccion === "nroperiodos" && <NumeroPeriodos />}
        {seleccion === "monto" && <MontoCompuesto />}
        {seleccion === "valorpresente" && <CapitalInicial />}
        {seleccion === "capitalizacion" && <Capitalizacion />}
        {seleccion === "tasainteres" && <TasaInteres />}
        {seleccion === "montoperiodofraccionario" && (
          <MontoConPeriodoFraccionario />
        )}
        {seleccion === "montocambiotasainteres" && (
          <MontoConCambioTasaInteres />
        )}
        {seleccion === "depositoadicional" && <DepositoAdicional />}
        {seleccion === "montoestimado" && <InteresEstimado />}
      </div>
    </>
  );
};

export default InteresCompuesto;
