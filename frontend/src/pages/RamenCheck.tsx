import menuItems from "../data/menuItems.json";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";

const RamenCheck = () => {
    const {id} = useParams<{ id: string }>(); 
    const selectedRamen = menuItems.find((item) => item.id.toString() === id);

  return (
    <div className="flex flex-col h-screen font-Rubik">
      <Menu />
      <div className="flex flex-grow justify-center bg-container container">
        <section className="flex flex-wrap justify-center header"> 
          {menuItems.map((items: any) => (
            <div key={items.id} className="flex flex-col mx-4 my-4">
                <img
                  src={`/assets/${items.image}`}
                  alt={items.name}
                  className="w-48"
                />
              <h2 className="mt-2">{items.name}</h2>
              <p>{items.price}</p>
            </div>
          ))}
        </section>
          <div className="table"></div>
          <h2 className="aside">You choose {selectedRamen?.name}</h2>
      </div>
      <Footer />
    </div>
  );
};

export default RamenCheck;
