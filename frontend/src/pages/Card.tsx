import Menu from "../components/Menu";
import { useEffect } from "react";
import { useState } from "react";

const Card = () => {
  const [extra, setExtra] = useState<string[]>([]);
  const [totalPrice, setStoreTotalPrice] = useState<number>(0);

  useEffect(() => {
    const storedExtra = localStorage.getItem("extra");
    const storeTotalPrice = localStorage.getItem("totalPrice");
    if (storedExtra) {
      setExtra(JSON.parse(storedExtra));
    }
    if (storeTotalPrice) {
      setStoreTotalPrice(JSON.parse(storeTotalPrice));
    }
  }, []);

  return (
    <div className="flex flex-col h-screen font-Rubik">
      <Menu />
      <div className="bg-container flex flex-grow justify-center items-center">
        <div className="flex flex-col ">

        <h2 className="text-3xl">Your card</h2>
        {extra.map((extras, index) => (
          <p key={index}>{extras}</p>
        ))}
        <p>Totalprice: {totalPrice} €</p>



        </div>
      </div>
    </div>
  );
};

export default Card;
