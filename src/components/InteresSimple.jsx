import "../styles/simple.css";
import { useState } from "react";
import { useEffect } from "react";

import CapitalInicial from "./IntSimple/CapitalInicial";
import Monto from "./IntSimple/Monto";
import TasaInteres from "./IntSimple/TasaInteres";
import Tiempo from "./IntSimple/Tiempo";
import ValorPresente from "./IntSimple/ValorPresente";
import Simple from "./IntSimple/Simple";

const InteresSimple = () => {
  const [seleccion, setSeleccion] = useState("interessimple");
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
          <option className="bg-white text-black" value="interessimple">
            Interes Simple 
          </option>
          <option className="bg-white text-black" value="capitalInicial">
            Capital 
          </option>
          <option className="bg-white text-black" value="tasainteres">
            Tasa de Interes
          </option>
          <option className="bg-white text-black" value="valorpresente">
            Valor Presente
          </option>
          <option className="bg-white text-black" value="tiempo">
            Tiempo
          </option>
          <option className="bg-white text-black" value="monto">
            Monto
          </option>
          
        </select>
      </div>
      
      <div className="contenedor md:flex-row flex-col flex bg-gray-200 min-h-screen ">
            {/* <DepositoAdicional /> */}

            {seleccion === "monto" && <Monto/>}
            {seleccion === "interessimple" && <Simple/>}
            {seleccion === "capitalInicial" && <CapitalInicial />}
            {seleccion === "tiempo" && <Tiempo/>}
            {seleccion === "tasainteres" && <TasaInteres/>}
            {seleccion === "valorpresente" && <ValorPresente/>}

            {seleccion === "depositoadicional" && <DepositoAdicional />}
      </div>
    </>
  );
};
export default InteresSimple;
