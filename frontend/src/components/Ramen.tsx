import menuItems from "../data/menuItems.json"

const Ramen = () => {

    return (
        <>
        {menuItems.map((items) => {
            <img alt="shoyu" />
        })}
        </>
    )
}

export default Ramen;