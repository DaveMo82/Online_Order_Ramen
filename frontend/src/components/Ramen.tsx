import menuItems from "../data/menuItems.json";
import { Link } from "react-router-dom";

const Ramen = () => {

  return (
    <>
      <div className="flex flex-wrap mt-12">
        {menuItems.map((items: any) => (
          <div key={items.id} className="flex flex-col items-center w-1/3 my-4">
            <Link to={`/RamenCheck/${items.id}`}>
            <img
              src={`/assets/${items.image}`}
              alt={items.name}
              className="w-48 cursor-pointer" 
            />
            </Link>
              <h2 className="mt-2">{items.name}</h2>
              <p>{items.price}</p>
            </div>
        ))}
      </div>
    </>
  );
};

export default Ramen;
