import menuItems from "../data/menuItems.json";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import React, { useState } from "react";

const RamenCheck = () => {
  const { id } = useParams<{ id: string }>();
  const [extra, setExtra] = useState<string[]>([]);
  const selectedRamen = menuItems.find((item) => item.id.toString() === id);

  const handleExtra = (value: string) => {
    if (extra.includes(value)) {
      setExtra(extra.filter((item) => item !== value));
    } else {
      setExtra([...extra, value]);
    }
  };
console.log(extra)
  return (
    <div className="flex flex-col h-screen font-Rubik">
      <Menu />
      <div className="flex flex-grow justify-center justify-items-center bg-container container">
        <section className="flex flex-wrap justify-center header">
          {menuItems.map((items: any) => (
            <div key={items.id} className="flex flex-col mx-4 my-6">
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


        <div className="table ml-44">
          <div>
            <h1 className="font-bold text-2xl mb-4 text-left">Spice level</h1>
            <div className="mb-3 w-96">
              <label className="border-2 border-footer rounded-lg w-full text-left pl-4 flex justify-between">
                Mild
                <input type="radio" name="mild" value="mild" checked={extra.includes("mild")} onClick={() => handleExtra("mild")} className="mr-4" />
              </label>
            </div>
            <div className="mb-3 w-96">
              <label className="border-2 border-footer rounded-lg w-full text-left pl-4 flex justify-between">
                Medium
                <input type="radio" name="medium" value="medium" checked={extra.includes("medium")} onClick={() => handleExtra("medium")}  className="mr-4"/>
              </label>
            </div>
            <div className="mb-3 w-96">
              <label className="border-2 border-footer rounded-lg w-full text-left pl-4 flex justify-between">
                Spicy
                <input type="radio" name="spicy" value="spicy" checked={extra.includes("spicy")} onClick={() => handleExtra("spicy")}  className="mr-4"/>
              </label>
            </div>
            <div className="mb-3 w-96">
              <label className="border-2 border-footer rounded-lg w-full text-left pl-4 flex justify-between">
                Extra Spicy
                <input
                  type="radio"
                  name="extraSpicy"
                  value="extraSpicy"
                  checked={extra.includes("extraSpicy")}
                  onClick={() => handleExtra("extraSpicy")}
                  className="mr-4"
                />
              </label>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-2xl mb-4 text-left">Additions</h1>
            <div className="mb-3 w-96">
              <label className="border-2 border-footer rounded-lg w-full text-left pl-4 flex justify-between">
                Extra Noodles
                <input type="radio" name="extraNoodle" value="extraNoodle" checked={extra.includes("extraNoodle")} onClick={() => handleExtra("extraNoodle")}  className="mr-4" />
              </label>
            </div>
            <div className="mb-3 w-96">
              <label className="border-2 border-footer rounded-lg w-full text-left pl-4 flex justify-between">
                Egg
                <input type="radio" name="egg" value="egg" checked={extra.includes("egg")} onClick={() => handleExtra("egg")}  className="mr-4"/>
              </label>
            </div>
            <div className="mb-3 w-96">
              <label className="border-2 border-footer rounded-lg w-full text-left pl-4 flex justify-between">
                Chashu Pork
                <input type="radio" name="chashuPork" value="chashuPork" checked={extra.includes("chashuPork")} onClick={() => handleExtra("chashuPork")}  className="mr-4"/>
              </label>
            </div>
          </div>
        </div>
        <div className="border-y-2 border-l-4 aside border-header h-full rounded-xl">
        <h2 className=" px-6 mt-2">You choose {selectedRamen?.name}</h2>
        <p>{extra}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RamenCheck;
