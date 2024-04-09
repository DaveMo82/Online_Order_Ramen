import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { Link} from "react-router-dom";
import { useEffect, useState } from "react";

const Card = () => {
  const [extra, setExtra] = useState<string[]>([]);
  const [totalPrice, setStoreTotalPrice] = useState<number>(0);
  const [selectedRamen, setSelectedRamen] = useState<any[]>([]);
console.log(extra)
  useEffect(() => {
    const storedExtra = localStorage.getItem("extra");
    const storeTotalPrice = localStorage.getItem("totalPrice");
    const storeSelectedRamen = localStorage.getItem("selectedRamen");

    if (storedExtra) {
      setExtra(JSON.parse(storedExtra));
    }
    if (storeTotalPrice) {
      setStoreTotalPrice(JSON.parse(storeTotalPrice));
    }
    if (storeSelectedRamen) {
      const parsedSelectedRamen = JSON.parse(storeSelectedRamen);

        const updateSelectRamen = parsedSelectedRamen.map((ramenItems : any) => {
        const ramenExtras = extra.filter( extraItem => ramenItems.extra.includes(extraItem)
      );
      return{
        ...ramenItems,
        extras: ramenExtras
      };
      });
      setSelectedRamen (updateSelectRamen);
    }
  }, []);


  return (
    <div className="flex flex-col h-screen font-Rubik">
      <Menu />
      <div className="bg-container flex flex-grow justify-center">
        <Link to={'/RamenCheck'}>
        <button 
        className="flex border-2 border-header shadow-lg p-2 rounded-lg cursor-pointer hover: hover:bg-header"
        >Choose an other Ramen</button>
        </Link>
        <div className="relative flex flex-col border-4 border-header rounded-lg max-h-72 min-w-64 mt-24">
          <h2 className="text-3xl text-center mb-4">Your card</h2>
          {selectedRamen.map((ramen, index) => (
            <p key={index} className="text-center mb-6">Your ramen: <li>{ramen.name}</li></p>
          ))}
          {extra.map((extras, index) => (
            <p key={index} className="text-center">{extras}</p>
          ))}
          <p className="absolute bottom-0 pl-4">Totalprice: {totalPrice} €</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Card;
