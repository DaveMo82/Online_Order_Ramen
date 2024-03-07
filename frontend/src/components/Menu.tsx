import { Link } from "react-router-dom";

const Menu = () => {
const itemsCount = localStorage.getItem('items');

  return (
    <header className="bg-header flex justify-between items-center p-4 ">
      <Link to="/">
        <img src="/assets/Cuisinier.png" alt="Cuisto" className="w-12" />
      </Link>

      <h1 className="text-6xl mr-64">Ramen Bar</h1>
      <input
        type="text"
        placeholder="Search"
        className="rounded w-60 pl-4 ml-64"
      />
      <nav>
        <ul className="list-none flex text-xl">
          <li className="inline mr-4">
            <Link to="/favorite">
              <img
                src="/assets/favorite.png"
                alt="favorite"
                className="w-6"
              />
            </Link>
          </li>
          <li className="inline mr-4">
            <Link to="/card">
              <img
                src="/assets/einkaufswagen.png"
                alt="einkaufwagen"
                className="w-6"
              />
              <div className="absolute top-7 right-12 w-4 h-4 text-white">{itemsCount}</div>
            </Link>
          </li>
          <li>
            <img src="/assets/login.png" alt="login" className="w-6" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
