import { useEffect, useState } from "react";
import TasaInteresCompuesto from "./Anualidades/TasaInteresCompuesto";
import InteresSimplet from "./Anualidades/TasaInteresSimple";

const Anualidades = () => {
  const [seleccion, setSeleccion] = useState("interessimple");
  useEffect(() => {}, [seleccion]);
  return (
    <>
      <div className="bg-gray-200 p-2 text-center lg:text-start sm:text-center">
        <select
          name="seleccion"
          className="bg-orange-500 text-white border-sky-950 border-2 font-bold rounded"
          onChange={(e) => setSeleccion(e.target.value)}
        >
          <option className="bg-white text-black" value="interessimple">
            Interes Simple
          </option>
          <option className="bg-white text-black" value="interescompuesto">
            Interes Compuesto
          </option>
        </select>
      </div>
      <div className="md:flex-row flex-col flex bg-gray-200 min-h-screen">
        {seleccion === "interessimple" && <InteresSimplet />}
        {seleccion === "interescompuesto" && <TasaInteresCompuesto />}
      </div>
    </>
  );
};
export default Anualidades;
