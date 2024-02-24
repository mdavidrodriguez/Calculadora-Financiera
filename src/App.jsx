import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./layout/Home";
import Header from "./components/Header";
import InteresSimple from "./components/InteresSimple";
import InteresCompuesto from "./components/InteresCompuesto";
import Anualidades from "./components/Anualidades";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="simple" element={<InteresSimple />} />
        <Route path="compuesto" element={<InteresCompuesto />} />
        <Route path="anualidades" element={<Anualidades />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
