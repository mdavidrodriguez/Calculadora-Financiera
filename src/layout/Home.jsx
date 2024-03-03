import ImagenCalculadora from "../img/LogoHome.png";
import Botones from "../components/Botones";
const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="md:flex m-auto align-middle">
        <div className="md:w-1/2 lg:w-2/5 mx-auto mr-0">
          <img src={ImagenCalculadora} alt="Imagen criptomonedas" />
        </div>
        <Botones />
      </div>
    </div>
  );
};
export default Home;
