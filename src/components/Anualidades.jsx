import { useEffect } from "react";
import { useState } from "react";
import ValorFinal from "./Anualidades/ValorFinal";
import HoradeMimir from "./Anualidades/ObtenerCapital";

const Anualidades = () => {
  const [seleccion, setSeleccion] = useState("valorfinal");
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
          <option className="bg-white text-black" value="valorfinal">
            Valor Final
          </option>
          <option className="bg-white text-black" value="valoractual">
            Valor Actual
          </option>
          <option className="bg-white text-black" value="calcularmonto">
            Calcular Monto
          </option>
          <option className="bg-white text-black" value="obtenerrenta">
            Obtener Renta
          </option>
          <option className="bg-white text-black" value="obtenercapital">
            Obtener Capital
          </option>
        </select>
      </div>
      <div className=" md:flex-row flex-col flex bg-gray-200 min-h-screen">
        {seleccion === "valorfinal" && <ValorFinal />}
        {/* {seleccion === "valoractual" && <MontoCompuesto />}
        {seleccion === "calcularmonto" && <CapitalInicial />}
        {seleccion === "obtenerrenta" && <Capitalizacion />} */}
        {seleccion === "obtenercapital" && <HoradeMimir />}
      </div>
    </>
  );
};
export default Anualidades;
