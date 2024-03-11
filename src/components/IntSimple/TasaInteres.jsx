import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const TasaInteres = () => {
    const [InteresSimple, setInteresSimple] = useState("");
    const [capital, setCapital] = useState("");
    const [tiempo, setTiempo] = useState("");
    const [tasaInteres, setTasaInteres] = useState("");
  
    const calcularTasaInteres = (e) => {
      e.preventDefault();
      if ([InteresSimple, capital, tiempo].includes("")) {
        toast.error("Todos los Campos son Obligatorios");
        return;
      }
      const i = parseInt(capital) 
      const n = parseInt(tiempo);
      const C = parseInt(InteresSimple) / i * n;
      setTasaInteres(C * 100);
    };
  
    return (
      <>
        <form
          onSubmit={calcularTasaInteres}
          className="md:w-1/2 md:h-auto my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
        >
          <ToastContainer />
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Interes Simple (I):
            </label>
            <input
              type="number"
              value={InteresSimple}
              onChange={(e) => setInteresSimple(e.target.value)}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Capital Inicial (C):
            </label>
            <input
              type="number"
              value={capital}
              onChange={(e) => setCapital(e.target.value)}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tiempo (t):
            </label>
            <input
              type="number"
              value={tiempo}
              onChange={(e) => setTiempo(e.target.value)}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <input
            type="submit"
            className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
            value="Calcular"
          />
          
          
        </form>
        {tasaInteres && (
          <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
            <p>La tasa de interes fue: ${tasaInteres}</p>
          </div>
        )}
      </>
    );
  };
  
  export default TasaInteres;
  
  
  