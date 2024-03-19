import menuItems from "../data/menuItems.json";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { useState } from "react";

const RamenCheck = () => {

  const [extra, setExtra] = useState<string[]>([]);
  const [itemsCount, setItemsCount] = useState(0);
 const [ selectedRamen, setSelectedRamen] = useState<any[]>(() => {
  const storedRamen = localStorage.getItem('selectedRamen');
  return storedRamen ? JSON.parse(storedRamen) : [];
 })
 const [selectedItem, setSelectedItem] = useState<{id: number, price: string, name:string}[] >([])



  const handleExtra = (value: string, price:string) => {
    const extraItem = value + "" + price;
    if (extra.includes(extraItem)) {
      setExtra(extra.filter((item) => item !== extraItem));
    } else {
      setExtra([...extra, extraItem]);
    }
  };

  const totalPrice = selectedItem.reduce((acc, ramen) => {
    return acc + parseFloat(ramen.price) + extra.reduce((extraAcc, extraItem) => {
      const matches = extraItem.match(/\d+€/);
      const extraPrice = matches ? parseFloat(matches[0].replace("€", "")) : 0;
      return extraAcc + extraPrice;
    }, 0);
  }, 0);

  const addToCard = () => {
    const totalPrice = 0;
    setItemsCount(itemsCount + 1);
    setExtra([]);
    setSelectedItem([]);

    localStorage.setItem('extra', JSON.stringify(extra));
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
    localStorage.setItem('items', JSON.stringify(itemsCount +1));
    localStorage.setItem('selectedRamen', JSON.stringify(selectedRamen));
  };

const handleSelectRamen = (id: String) => {
  const selectedItem = menuItems.filter((item) => item.id.toString() === id);
  setSelectedItem(selectedItem);
  setSelectedRamen([...selectedRamen, ...selectedItem]);
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
                className={`w-48 cursor-pointer hover:scale-125 transform transition duration-1000 ${selectedItem.find((ramen) => ramen.id === items.id) ? "border-4 border-header rounded-xl" : ""}`}
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
        <div className="border-y-2 border-l-4 aside border-header h-full rounded-xl justify-self-end min-w-64">
        <h2 className=" px-6 mt-2 text-center">You choose {selectedItem?.[0]?.name}</h2>
        <div className="ml-6 mt-6">
          {extra.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          </div>
          <div className="flex justify-end items-center flex-col pb-16 absolute bottom-0 pl-8">
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
