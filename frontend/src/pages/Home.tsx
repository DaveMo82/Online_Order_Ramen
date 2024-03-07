import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Ramen from "../components/Ramen";

const Home = () => {
 
  return (
    <>
      <div className="flex flex-col h-screen font-Rubik">
        <Menu />
        <div className="flex flex-grow justify-center bg-container">
          <section className="mt-12">
            <img src="/assets/RamenBar.png" alt="ramen" className="w-5/6 mx-auto"/>
            <Ramen />
            <p className="text-center text-3xl mb-12"> Or create your own one</p>
          </section>
        </div>
       <Footer />
      </div>
    </>
  );
};

export default Home;
