import menuItems from "../data/menuItems.json";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useState } from "react";

const RamenCheck = () => {
  const { id } = useParams<{ id: string }>();
  const [extra, setExtra] = useState<string[]>([]);
 const [ selectedRamen, setSelectedRamen] = useState<any | any>(menuItems.find((item) => item.id.toString() === id))


  const handleExtra = (value: string, price:string) => {
    const extraItem = value + "" + price;
    if (extra.includes(extraItem)) {
      setExtra(extra.filter((item) => item !== extraItem));
    } else {
      setExtra([...extra, extraItem]);
    }
  };

  const totalPrice = selectedRamen ? extra.reduce((acc, curr) => {
    const matches = curr.match(/\d+€/);
    const extraPrice = matches ? matches[0] : "0€";
   return acc + parseFloat(extraPrice.replace("€", ""));

  }, parseFloat(selectedRamen.price)) : 0;

  const addToCard = () => {
      localStorage.setItem('extra', JSON.stringify(extra));
      localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
  };

const handleSelectRamen = (id: String) => {
  const selectedItem = menuItems.find((item) => item.id.toString() === id);
  setSelectedRamen(selectedItem);
}

  return (
    <div className="flex flex-col h-screen font-Rubik">
      <Menu />
      <div className="flex flex-grow  bg-container container relative">
        <section className="flex flex-wrap justify-center header">
          {menuItems.map((items: any) => (
            <div key={items.id} className="flex flex-col mx-4 my-6">
              <img
                src={`/assets/${items.image}`}
                alt={items.name}
                className={`w-48 cursor-pointer hover:scale-125 transform transition duration-1000 ${selectedRamen && selectedRamen.id === items.id ? "border-4 border-header rounded-xl" : ""}`}
                onClick={() => handleSelectRamen(items.id.toString())}
              />
              <h2 className="mt-2">{items.name}</h2>
              <p>{items.price}</p>
            </div>
          ))}
        </section>
        <div className="table justify-self-center">
          <div>
            <h1 className="font-bold text-2xl mb-4 text-left">Spice level</h1>
            <div className="mb-3 w-96">
              <label className="border-2 border-footer rounded-lg w-full text-left pl-4 flex justify-between">
                Mild +2€
                <input type="radio" name="mild" value="mild" checked={extra.includes("mild")} onClick={() => handleExtra("mild", "2€")} className="mr-4" />
              </label>
            </div>
            <div className="mb-3 w-96">
              <label className="border-2 border-footer rounded-lg w-full text-left pl-4 flex justify-between">
                Medium +2€
                <input type="radio" name="medium" value="medium" checked={extra.includes("medium")} onClick={() => handleExtra("medium" , "2€")}  className="mr-4"/>
              </label>
            </div>
            <div className="mb-3 w-96">
              <label className="border-2 border-footer rounded-lg w-full text-left pl-4 flex justify-between">
                Spicy +2€
                <input type="radio" name="spicy" value="spicy" checked={extra.includes("spicy")} onClick={() => handleExtra("spicy" , "2€")}  className="mr-4"/>
              </label>
            </div>
            <div className="mb-3 w-96">
              <label className="border-2 border-footer rounded-lg w-full text-left pl-4 flex justify-between">
                Extra Spicy +3€
                <input
                  type="radio"
                  name="extraSpicy"
                  value="extraSpicy"
                  checked={extra.includes("extraSpicy")}
                  onClick={() => handleExtra("extraSpicy" , "3€")}
                  className="mr-4"
                />
              </label>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-2xl mb-4 text-left">Additions</h1>
            <div className="mb-3 w-96">
              <label className="border-2 border-footer rounded-lg w-full text-left pl-4 flex justify-between">
                Extra Noodles +2€
                <input type="radio" name="extraNoodle" value="extraNoodle" checked={extra.includes("extraNoodle")} onClick={() => handleExtra("extraNoodle" , "2€")}  className="mr-4" />
              </label>
            </div>
            <div className="mb-3 w-96">
              <label className="border-2 border-footer rounded-lg w-full text-left pl-4 flex justify-between">
                Egg +3€
                <input type="radio" name="egg" value="egg" checked={extra.includes("egg")} onClick={() => handleExtra("egg" , "3€")}  className="mr-4"/>
              </label>
            </div>
            <div className="mb-3 w-96">
              <label className="border-2 border-footer rounded-lg w-full text-left pl-4 flex justify-between">
                Chashu Pork +4€
                <input type="radio" name="chashuPork" value="chashuPork" checked={extra.includes("chashuPork")} onClick={() => handleExtra("chashuPork" , "4€")}  className="mr-4"/>
              </label>
            </div>
          </div>
        </div>
        <div className="border-y-2 border-l-4 aside border-header h-full rounded-xl justify-self-end">
        <h2 className=" px-6 mt-2 text-center">You choose {selectedRamen?.name}</h2>
        <div className="ml-6 mt-6">
          {extra.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          </div>
          <div className="flex justify-end items-center h-full flex-col pb-16 absolute bottom-0 pl-8">
        <p className="font-bold text-2xl mb-2">Total:{totalPrice} €</p>
        <button
        onClick={addToCard}
        className="border-2 border-header shadow-lg p-2 rounded-lg cursor-pointer hover: hover:bg-header"
      >
        add to card
      </button>
      </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RamenCheck;
